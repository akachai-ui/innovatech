'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function Clients() {
  const clientLogos = [
    {
      id: 'chicai',
      src: '/images/chicailogo.png',
      alt: 'CHICAI Logo',
      width: 60,
      height: 60,
      style: { width: '56px', height: '56px' }
    },
    {
      id: 'swu',
      src: '/images/Srinakharinwirot_Logo.png',
      alt: 'Srinakharinwirot University Logo',
      width: 60,
      height: 60,
      style: { width: '56px', height: '56px' }
    },
    {
      id: 'cci',
      src: '/images/LOGOCCI.png',
      alt: 'College of Creative Industry SWU Logo',
      width: 190,
      height: 52,
      style: { width: '180px', height: '50px' }
    },
    {
      id: 'warashop',
      src: '/images/warashoplogo.svg',
      alt: 'Wara Shop 88 Logo',
      width: 140,
      height: 50,
      style: { width: '135px', height: '48px' }
    },
    {
      id: 'realline',
      src: '/images/realline-network.png',
      alt: 'Realine Network Logo',
      width: 60,
      height: 60,
      style: { width: '56px', height: '56px' }
    }
  ];

  // Repeat sequence for smooth continuous infinite marquee
  const repeatedLogos = [
    ...clientLogos,
    ...clientLogos,
    ...clientLogos,
    ...clientLogos
  ];

  return (
    <section className="relative pt-3 sm:pt-6 pb-6 sm:pb-10 w-full overflow-hidden">
      {/* Section Header: ลูกค้าของเรา */}
      <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6 px-4 space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-[10.5px] sm:text-xs font-mono font-bold tracking-widest text-[#2bccaf] uppercase shadow-sm">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2bccaf]" />
          <span>TRUSTED CLIENTS & PARTNERS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
          ลูกค้าของเรา
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          ได้รับความไว้วางใจจากธุรกิจและองค์กรชั้นนำในการพัฒนาระบบ
        </p>
      </div>

      {/* Soft Gradient Fade on Left & Right Edges */}
      <div className="absolute left-0 bottom-0 top-24 w-16 sm:w-32 bg-gradient-to-r from-[#080d14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 bottom-0 top-24 w-16 sm:w-32 bg-gradient-to-l from-[#080d14] to-transparent z-10 pointer-events-none" />

      {/* Infinite Horizontal Sliding Track (Moves to the Left, Frameless) */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-10 sm:gap-16 select-none py-2">
        {repeatedLogos.map((logo, idx) => (
          <div
            key={`${logo.id}-${idx}`}
            className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
            style={logo.style}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain max-h-full max-w-full drop-shadow-sm"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
