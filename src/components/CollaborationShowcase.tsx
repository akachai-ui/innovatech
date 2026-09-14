'use client';

import React from 'react';
import Image from 'next/image';

export default function CollaborationShowcase() {
  return (
    <section className="relative pt-2 sm:pt-4 pb-6 sm:pb-12 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[#2bccaf]/12 blur-[170px] rounded-full pointer-events-none -z-10" />

      {/* High-Fidelity Agile Workshop Showcase Frame */}
      <div className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-3 bg-gradient-to-b from-slate-800/60 via-slate-900/80 to-[#080d14] border border-slate-700/70 shadow-[0_25px_80px_rgba(0,0,0,0.9)] backdrop-blur-xl group overflow-hidden">
        
        {/* Responsive Image Container for Baner1.jpeg */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/8] rounded-xl sm:rounded-2xl overflow-hidden bg-[#060b13] shadow-2xl">
          <Image
            src="/images/Baner1.jpeg"
            alt="Innovatech Agile Squad Workshop & Architecture Planning"
            fill
            sizes="(max-width: 1200px) 100vw, 1150px"
            className="object-cover object-center group-hover:scale-[1.015] transition-transform duration-700 ease-out"
            priority
          />
        </div>

      </div>
    </section>
  );
}
