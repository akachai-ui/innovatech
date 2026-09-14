'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

export default function Interactive3DCloud() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [imgSrc, setImgSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  // 3D Motion States
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Convert raw image to a 100% pure transparent PNG DataURL with zero box artifacts
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/images/innovatech-glow-full.jpg';
    img.onload = () => {
      try {
        const W = img.naturalWidth;
        const H = img.naturalHeight;
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = W;
        tempCanvas.height = H;
        const ctx = tempCanvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, W, H);
        const data = imageData.data;

        const cx = W * 0.5;
        const cy = H * 0.46;
        const maxRx = W * 0.40;
        const maxRy = H * 0.35;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const px = (i / 4) % W;
          const py = Math.floor((i / 4) / W);

          const dx = (px - cx) / maxRx;
          const dy = (py - cy) / maxRy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // If outside the tight oval around the logo, completely delete pixel
          if (dist > 1.0) {
            data[i] = 0;
            data[i + 1] = 0;
            data[i + 2] = 0;
            data[i + 3] = 0;
            continue;
          }

          // Smooth outer falloff
          const falloff = Math.max(0, 1 - Math.pow(dist, 3));
          const brightness = Math.max(r, g, b);

          // All dark background pixels become 100% transparent (alpha = 0)
          if (brightness <= 48 || falloff <= 0) {
            data[i] = 0;
            data[i + 1] = 0;
            data[i + 2] = 0;
            data[i + 3] = 0;
          } else {
            // Subtract background black level to remove grey haze
            const cleanR = Math.max(0, r - 45);
            const cleanG = Math.max(0, g - 45);
            const cleanB = Math.max(0, b - 45);

            data[i] = Math.min(255, Math.round(cleanR * 1.4));
            data[i + 1] = Math.min(255, Math.round(cleanG * 1.4));
            data[i + 2] = Math.min(255, Math.round(cleanB * 1.4));

            const alpha = Math.min(255, (brightness - 48) * 2.5) * falloff;
            data[i + 3] = Math.round(alpha);
          }
        }

        ctx.putImageData(imageData, 0, 0);

        // Crop tightly around content to eliminate empty space
        const cropY = Math.round(H * 0.12);
        const cropH = Math.round(H * 0.65);
        const cropX = Math.round(W * 0.10);
        const cropW = Math.round(W * 0.80);

        const finalCanvas = document.createElement('canvas');
        finalCanvas.width = cropW;
        finalCanvas.height = cropH;
        const finalCtx = finalCanvas.getContext('2d');
        if (finalCtx) {
          finalCtx.drawImage(tempCanvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
          setImgSrc(finalCanvas.toDataURL('image/png'));
          setIsLoaded(true);
        }
      } catch (e) {
        console.error('Error generating transparent logo PNG:', e);
      }
    };
  }, []);

  // Smooth 3D animation loop
  useEffect(() => {
    let animId: number;
    const animate = () => {
      setRotation((prev) => ({
        x: prev.x + (targetRotation.x - prev.x) * 0.08,
        y: prev.y + (targetRotation.y - prev.y) * 0.08,
      }));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [targetRotation]);

  // Pointer & Touch Interaction
  const handlePointerMove = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 16;
    const rotateX = -((y - centerY) / centerY) * 12;

    setTargetRotation({ x: rotateX, y: rotateY });
    setMousePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    handlePointerMove(e.clientX, e.clientY);
  }, [handlePointerMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, [handlePointerMove]);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    setTargetRotation({ x: 0, y: 0 });
  }, []);

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleClick = useCallback(() => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 400);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
      onTouchStart={handlePointerEnter}
      onTouchMove={handleTouchMove}
      onTouchEnd={handlePointerLeave}
      onClick={handleClick}
      className="relative flex items-center justify-center my-0 select-none cursor-grab active:cursor-grabbing [perspective:1000px] touch-none"
    >
      {/* Dynamic Ambient Backlight Bloom (Pure Radial Feather) */}
      <div
        className="absolute w-[240px] sm:w-[380px] md:w-[480px] h-[160px] sm:h-[260px] md:h-[320px] rounded-full blur-[60px] sm:blur-[90px] pointer-events-none -z-10 transition-transform duration-300"
        style={{
          background:
            'radial-gradient(circle, rgba(43,204,175,0.28) 0%, rgba(56,189,248,0.16) 50%, transparent 80%)',
          transform: `translate(${rotation.y * 2}px, ${-rotation.x * 2}px) scale(${isHovered ? 1.1 : 1})`,
        }}
      />

      {/* 3D Floating & Rotating Container */}
      <div
        className="relative w-[240px] h-[150px] xs:w-[270px] xs:h-[170px] sm:w-[340px] sm:h-[220px] md:w-[420px] md:h-[260px] flex items-center justify-center [transform-style:preserve-3d] transition-transform duration-100 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${
            isClicked ? 0.95 : isHovered ? 1.04 : 1
          }) translateZ(${isHovered ? 20 : 0}px)`,
        }}
      >
        {/* Floating Idle Animation Wrapper */}
        <div className="relative w-full h-full flex items-center justify-center animate-float">
          {/* Pure Transparent PNG Image - Absolutely ZERO Box Seam or Edge */}
          {imgSrc && (
            <img
              src={imgSrc}
              alt="Innovatech 3D Brand Logo"
              className={`w-full h-full object-contain pointer-events-none select-none transition-opacity duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Dynamic Light Specular Glare (Soft Circle Overlay) */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.45 : 0.15,
              background: `radial-gradient(circle 80px at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.4) 0%, rgba(43,204,175,0.2) 35%, transparent 70%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
