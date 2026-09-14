'use client';

import React from 'react';
import { 
  MessageCircle, 
  PhoneCall, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  FileCode2, 
  CheckCircle2, 
  Zap
} from 'lucide-react';

export default function CustomWebAppsCTA() {
  return (
    <section className="py-10 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-72 bg-gradient-to-r from-[#2bccaf]/15 via-sky-500/10 to-[#2bccaf]/15 blur-[120px] pointer-events-none" />

      {/* Main Glassmorphic Enterprise Banner */}
      <div className="relative z-10 p-6 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-b from-[#0e1624] via-[#090f18] to-[#060a10] border border-slate-700/80 shadow-[0_25px_80px_rgba(0,0,0,0.85)] overflow-hidden">
        
        {/* Subtle Decorative Grid Pattern & Top Accent Line */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#2bccaf] to-transparent shadow-[0_0_15px_#2bccaf]" />

        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2bccaf]/15 border border-[#2bccaf]/40 text-xs font-mono text-[#2bccaf] font-bold mb-4 shadow-[0_0_15px_rgba(43,204,175,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#2bccaf] animate-pulse" />
          <span>FREE ARCHITECTURAL CONSULTATION</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.2] mb-3 sm:mb-4">
          พร้อมยกระดับระบบธุรกิจของคุณ <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-[#2bccaf]">
            สู่มาตรฐาน Enterprise แล้วหรือยัง?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
          ปรึกษาทีม Solutions Architect ผู้เชี่ยวชาญ ประเมินโครงสร้างระบบ วางสถาปัตยกรรม 
          และคำนวณงบประมาณเบื้องต้นฟรี <strong className="text-white">ไม่มีข้อผูกมัดใดๆ</strong>
        </p>

        {/* 3 Core Consultation Value Props (Responsive Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mb-8 text-left">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#2bccaf]/15 text-[#2bccaf] flex items-center justify-center shrink-0 mt-0.5">
              <FileCode2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">System Blueprint ฟรี</div>
              <div className="text-[11px] sm:text-xs text-slate-400">ช่วยออกแบบ System Flow และประเมินโครงสร้างฐานข้อมูล</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">ประเมินราคาใน 24 ชม.</div>
              <div className="text-[11px] sm:text-xs text-slate-400">ส่งสเปกชัดเจน รายละเอียดงบและระยะเวลาตามจริง</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">มีสัญญา NDA คุ้มครอง</div>
              <div className="text-[11px] sm:text-xs text-slate-400">รักษาความลับทางธุรกิจและไอเดียของคุณ 100%</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-6">
          <a
            href="https://lin.ee/h4oaM2D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-[#06C755] hover:bg-[#05b34c] text-white font-extrabold text-sm sm:text-base shadow-[0_0_30px_rgba(6,199,85,0.45)] hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#06C755]" />
            <span>ทัก LINE ปรึกษาทันที</span>
          </a>

          <a
            href="tel:0924797666"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-slate-500 font-bold text-sm sm:text-base shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <PhoneCall className="w-4 h-4 text-[#2bccaf]" />
            <span>โทร 092-479-7666</span>
          </a>
        </div>

        {/* Trust & SLA Guarantee Footer Note */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs text-slate-400 font-medium pt-2 border-t border-slate-800/80">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <Zap className="w-3.5 h-3.5" />
            ทีมงานตอบกลับไวภายใน 15 นาที
          </span>
          <span className="hidden xs:inline text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2bccaf]" />
            ให้คำปรึกษาโดย Senior Software Engineer
          </span>
        </div>

      </div>
    </section>
  );
}
