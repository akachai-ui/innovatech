'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import Line3DButton from './Line3DButton';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      {/* Top Announcement / Promotion Banner (Seamless Subtle Bar) */}
      <div className="bg-gradient-to-r from-[#134e44]/85 via-[#2bccaf]/90 to-[#0ea5e9]/85 text-slate-950 px-2 sm:px-3 py-1.5 text-center text-[10px] sm:text-xs font-bold flex items-center justify-center gap-1.5 backdrop-blur-md">
        <Sparkles className="w-3 h-3 text-slate-950 animate-pulse shrink-0" />
        <span className="truncate">
          <span className="hidden md:inline">โปรโมชันพิเศษ: พัฒนาเว็บ/ระบบกับเราวันนี้ </span>
          ฟรี Domain .com + SSL ตลอด 1 ปีเต็ม!
        </span>
        <a
          href="https://lin.ee/h4oaM2D"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-1 font-extrabold hover:text-white transition-colors shrink-0"
        >
          รับสิทธิ์ →
        </a>
      </div>

      {/* Main Transparent Navbar (Seamlessly Blended with Hero) */}
      <div className="bg-transparent border-none px-3 sm:px-8 py-2.5 sm:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-md shadow-[#2bccaf]/20 border border-[#2bccaf]/30 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.png"
                alt="Innovatech Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-sm sm:text-lg font-black tracking-tight text-white flex items-center gap-0.5 sm:gap-1">
                INNOVA<span className="text-[#2bccaf]">TECH</span>
              </span>
              <span className="block text-[7.5px] sm:text-[9px] uppercase tracking-widest text-slate-400 font-semibold -mt-0.5 group-hover:text-[#2bccaf] transition-colors">
                Enterprise & Web Systems
              </span>
            </div>
          </a>

          {/* Right Action: 3D High-End Glass LINE Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Line3DButton />
          </div>
        </div>
      </div>
    </header>
  );
}
