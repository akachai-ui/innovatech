'use client';

import React, { useState } from 'react';
import { MessageCircle, Facebook, Mail, X, ChevronUp } from 'lucide-react';
import { trackContactEvent } from '@/lib/analytics';

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="ช่องทางติดต่อด่วน" className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 select-none">
      
      {/* Expandable Quick Channels Popup (Desktop Only / When Activated) */}
      {isOpen && (
        <div className="hidden sm:block rounded-2xl p-3 bg-[#0d1522]/95 border border-slate-700/80 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl w-64 space-y-2 animate-fade-in text-left mb-1">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#06C755] animate-pulse" />
              <span className="text-xs font-bold text-white">ช่องทางติดต่อด่วน</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-1.5">
            {/* LINE OA */}
            <a
              href="https://lin.ee/h4oaM2D"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactEvent('LINE_Floating_Menu')}
              className="flex items-center gap-2.5 p-2 rounded-xl bg-[#06C755]/15 border border-[#06C755]/30 hover:bg-[#06C755]/25 transition-all text-left group"
            >
              <div className="w-7 h-7 rounded-lg bg-[#06C755] text-white flex items-center justify-center font-bold text-xs shrink-0 group-hover:scale-105 transition-transform">
                L
              </div>
              <div>
                <div className="text-xs font-bold text-white group-hover:text-[#06C755] transition-colors">LINE Official Account</div>
                <div className="text-[10px] text-emerald-300">ปรึกษาทีม Tech ฟรี (ตอบไว)</div>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61586024618442"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactEvent('Facebook_Floating_Menu')}
              className="flex items-center gap-2.5 p-2 rounded-xl bg-blue-600/15 border border-blue-500/30 hover:bg-blue-600/25 transition-all text-left group"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 group-hover:scale-105 transition-transform">
                <Facebook className="w-4 h-4 fill-current" />
              </div>
              <div>
                <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">Facebook Page</div>
                <div className="text-[10px] text-slate-400">InnovaTech Solutions</div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:akachaiha@gmail.com"
              onClick={() => trackContactEvent('Email_Floating_Menu')}
              className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all text-left group"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center font-bold text-xs shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">ส่งอีเมลหาเรา</div>
                <div className="text-[10px] text-slate-400">akachaiha@gmail.com</div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Action Button */}
      <div className="flex items-center gap-1.5">
        
        {/* ======================================================== */}
        {/* 📱 MOBILE VIEW: COMPACT CIRCULAR 3D LINE FAB (ZERO CLUTTER) */}
        {/* ======================================================== */}
        <a
          href="https://lin.ee/h4oaM2D"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContactEvent('LINE_Floating_Mobile_FAB')}
          className="flex sm:hidden relative w-12 h-12 rounded-full bg-gradient-to-tr from-[#06C755] to-[#05b54c] items-center justify-center text-white shadow-[0_8px_25px_rgba(6,199,85,0.6)] active:scale-90 transition-all cursor-pointer border border-emerald-200/50"
          title="ทัก LINE ปรึกษาฟรี"
        >
          {/* Subtle Ambient Pulse */}
          <div className="absolute inset-0 rounded-full bg-[#06C755]/40 blur-md -z-10" />

          {/* Icon */}
          <MessageCircle className="w-6 h-6 fill-white text-white drop-shadow-sm" />

          {/* Mini Status Dot */}
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200 border-2 border-[#06C755]"></span>
          </span>
        </a>

        {/* ======================================================== */}
        {/* 💻 DESKTOP VIEW: SLEEK GLASS CAPSULE WITH STATUS & CHANNELS */}
        {/* ======================================================== */}
        <div className="hidden sm:flex items-center gap-1.5">
          <a
            href="https://lin.ee/h4oaM2D"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactEvent('LINE_Floating_Desktop_Button')}
            className="group relative flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-full bg-gradient-to-r from-[#06C755] to-[#049640] hover:from-[#05b54c] hover:to-[#038537] text-white font-bold shadow-[0_10px_30px_rgba(6,199,85,0.45)] hover:shadow-[0_15px_40px_rgba(6,199,85,0.65)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-emerald-300/40"
            title="ปรึกษาโปรเจกต์ผ่าน LINE (ฟรี)"
          >
            {/* Glowing Aura */}
            <div className="absolute inset-0 rounded-full bg-[#06C755]/30 blur-lg -z-10 group-hover:blur-xl transition-all" />

            {/* 3D Chat Icon with Online Indicator */}
            <div className="relative">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#06C755] font-black text-xs shadow-md">
                <MessageCircle className="w-4 h-4 fill-[#06C755]" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-200 border border-[#06C755]"></span>
              </span>
            </div>

            {/* Button Text */}
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-extrabold tracking-tight drop-shadow-sm whitespace-nowrap leading-tight">
                ปรึกษาโปรเจกต์ <span className="text-emerald-100 font-normal">(ฟรี)</span>
              </span>
              <span className="text-[9px] text-emerald-100/90 font-mono leading-none">
                ⚡ Online • ตอบกลับไว
              </span>
            </div>
          </a>

          {/* More Channels Desktop Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-full bg-[#0d1522]/90 hover:bg-slate-900 border border-slate-700/80 hover:border-[#2bccaf] text-slate-300 hover:text-[#2bccaf] backdrop-blur-md flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Toggle contact channels"
            title="ช่องทางติดต่อเพิ่มเติม"
          >
            <ChevronUp className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>

    </aside>
  );
}
