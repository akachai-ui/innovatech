'use client';

import React, { useEffect, useState } from 'react';

export default function GlowLogo() {
  const [imgSrc, setImgSrc] = useState<string>('/images/innovatech-cloud-3d.jpg');

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/images/innovatech-cloud-3d.jpg';
    img.onload = () => {
      try {
        const tempCanvas = document.createElement('canvas');
        const W = img.naturalWidth;
        const H = img.naturalHeight;
        tempCanvas.width = W;
        tempCanvas.height = H;
        const ctx = tempCanvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, W, H);
        const data = imageData.data;

        // Cloud center is at roughly (W * 0.5, H * 0.4)
        const cx = W * 0.5;
        const cy = H * 0.40;
        const maxRx = W * 0.45;
        const maxRy = H * 0.30;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const px = (i / 4) % W;
          const py = Math.floor((i / 4) / W);
          
          // Normalized elliptical distance from cloud center
          const dx = (px - cx) / maxRx;
          const dy = (py - cy) / maxRy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let falloff = 1;
          if (dist > 0.75) {
            falloff = Math.max(0, 1 - (dist - 0.75) / 0.35);
          }

          // Luminescence thresholding: remove dark slate background
          const maxVal = Math.max(r, g, b);
          let alpha = 0;
          if (maxVal > 28) {
            alpha = Math.min(255, (maxVal - 28) * 1.9) * falloff;
          }

          data[i + 3] = Math.round(alpha);
        }

        ctx.putImageData(imageData, 0, 0);

        // Crop tightly around the cloud to center it perfectly
        const cropY = Math.round(H * 0.10);
        const cropH = Math.round(H * 0.60);
        const finalCanvas = document.createElement('canvas');
        finalCanvas.width = W;
        finalCanvas.height = cropH;
        const finalCtx = finalCanvas.getContext('2d');
        if (finalCtx) {
          finalCtx.drawImage(tempCanvas, 0, cropY, W, cropH, 0, 0, W, cropH);
          setImgSrc(finalCanvas.toDataURL('image/png'));
        }
      } catch (e) {
        console.error('Error processing cloud glow logo:', e);
      }
    };
  }, []);

  return (
    <div className="relative group flex items-center justify-center my-2">
      {/* Ambient Radial Bloom behind 3D Cloud */}
      <div className="absolute inset-0 bg-[#2bccaf]/20 blur-[100px] rounded-full scale-90 pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-sky-400/15 blur-[130px] rounded-full scale-110 pointer-events-none -z-10" />

      <div className="relative w-64 h-48 sm:w-80 sm:h-60 md:w-96 md:h-72 flex items-center justify-center">
        <img
          src={imgSrc}
          alt="Innovatech Glowing 3D Cloud Logo"
          className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(43,204,175,0.7)] hover:scale-105 transition-all duration-700 select-none pointer-events-none"
        />
      </div>
    </div>
  );
}
