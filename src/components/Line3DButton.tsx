'use client';

import React, { useState } from 'react';
import { trackContactEvent } from '@/lib/analytics';

export default function Line3DButton({ className = '' }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://lin.ee/h4oaM2D"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackContactEvent('LINE_Navbar_Button')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative inline-flex items-center gap-1.5 sm:gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all duration-300 select-none ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(6, 199, 85, 0.95) 0%, rgba(4, 150, 64, 0.95) 100%)',
        boxShadow: isHovered
          ? '0 0 22px rgba(6, 199, 85, 0.65), 0 6px 16px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.6), inset 0 -2px 4px rgba(0, 0, 0, 0.25)'
          : '0 0 12px rgba(6, 199, 85, 0.35), 0 3px 10px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.45), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
        transform: isHovered ? 'translateY(-2px) scale(1.03)' : 'translateY(0) scale(1)',
      }}
    >
      {/* Specular Light Reflection Streak on hover */}
      <div 
        className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
      >
        <div 
          className={`w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-700 ${
            isHovered ? 'translate-x-[250%]' : '-translate-x-full'
          }`} 
        />
      </div>

      {/* 3D Glass LINE Balloon Icon */}
      <div 
        className="relative shrink-0 w-5 h-5 sm:w-6 sm:h-6 filter drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.3)] flex items-center justify-center"
        style={{ width: '24px', height: '24px', maxWidth: '24px', maxHeight: '24px' }}
      >
        <svg 
          viewBox="0 0 40 40" 
          width="24" 
          height="24" 
          style={{ width: '24px', height: '24px', maxWidth: '24px', maxHeight: '24px' }}
          className="overflow-visible"
        >
          <defs>
            {/* 3D Balloon Gradient */}
            <linearGradient id="line3d-base" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f0fff4" />
              <stop offset="100%" stopColor="#dcfce7" />
            </linearGradient>

            {/* Top Gloss Arc */}
            <linearGradient id="line3d-gloss" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Bevel Shadow */}
            <filter id="line3d-inner" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#047857" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* 3D White Chat Bubble with Tail */}
          <path
            d="M20 5 C10.6 5 3 11.2 3 18.8 C3 23.4 5.9 27.5 10.3 29.9 C10.9 30.2 11.2 30.7 11.1 31.4 L10.4 35.1 C10.2 36.1 11.2 36.8 12.1 36.3 L16.8 33.6 C17.3 33.3 17.9 33.2 18.5 33.3 C19 33.4 19.5 33.4 20 33.4 C29.4 33.4 37 27.2 37 19.6 C37 12 29.4 5 20 5 Z"
            fill="url(#line3d-base)"
            filter="url(#line3d-inner)"
          />

          {/* 3D Glass Specular Highlight Arc */}
          <ellipse cx="20" cy="11" rx="11" ry="4" fill="url(#line3d-gloss)" />

          {/* LINE Text Logo */}
          <g fill="#06C755" fontWeight="900" fontSize="7.5" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.2px">
            <path d="M10 14.5 h2 v6 h3.5 v1.8 h-5.5 z" fill="#06C755" />
            <path d="M17.5 14.5 h2 v7.8 h-2 z" fill="#06C755" />
            <path d="M21.5 14.5 h2 l2.7 4.2 v-4.2 h2 v7.8 h-2 l-2.7 -4.2 v4.2 h-2 z" fill="#06C755" />
            <path d="M30 14.5 h5.2 v1.8 h-3.2 v1.2 h3 v1.7 h-3 v1.3 h3.3 v1.8 h-5.3 z" fill="#06C755" />
          </g>
        </svg>
      </div>

      {/* Button Text with Responsive Size */}
      <div className="flex flex-col text-left">
        <span className="text-white font-extrabold text-[11px] sm:text-xs tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] whitespace-nowrap">
          <span className="inline xs:hidden">ทัก LINE</span>
          <span className="hidden xs:inline">ทัก LINE ปรึกษาฟรี</span>
        </span>
        <span className="text-[8px] sm:text-[9px] text-emerald-100 font-medium -mt-0.5 opacity-90 hidden sm:inline">
          ตอบกลับไว ภายใน 15 นาที
        </span>
      </div>

      {/* Glowing Pulsing Online Dot */}
      <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 ml-0.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-200"></span>
      </span>
    </a>
  );
}
