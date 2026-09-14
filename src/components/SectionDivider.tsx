'use client';

import React from 'react';

export default function SectionDivider() {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-1 sm:py-3 flex items-center justify-center pointer-events-none select-none z-10">
      {/* Fading Laser Gradient Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2bccaf]/40 to-transparent" />
      
      {/* Center Glowing Diamond Spark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rotate-45 bg-[#2bccaf] rounded-sm shadow-[0_0_12px_#2bccaf]" />
      </div>
    </div>
  );
}
