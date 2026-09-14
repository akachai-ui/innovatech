'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, MessageCircle, ChevronRight, Zap, ShieldCheck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
      {/* Apple-style Soft Radial Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[#2bccaf]/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Eyebrow Pill Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b1420] border border-[#2bccaf]/30 text-xs font-semibold text-[#2bccaf] mb-8 shadow-inner hover:border-[#2bccaf]/60 transition-all cursor-default">
        <Sparkles className="w-3.5 h-3.5 text-[#2bccaf]" />
        <span>100% Custom Built. No Templates. Zero Compromise.</span>
      </div>

      {/* Main Apple-Style Cinematic Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] max-w-4xl mx-auto mb-6">
        รับพัฒนาระบบองค์กร <br />
        และ <span className="bg-gradient-to-r from-white via-[#2bccaf] to-[#38bdf8] bg-clip-text text-transparent">เว็บไซต์ประสิทธิภาพสูง</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
        เปลี่ยนทุกไอเดียธุรกิจให้เป็นซอฟต์แวร์ที่ทรงพลัง ใช้งานง่าย และสร้างยอดขายได้จริง ด้วยสถาปัตยกรรมระดับ World-Class
      </p>

      {/* Apple-Style Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <a
          href="https://lin.ee/h4oaM2D"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-sm shadow-xl shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>ปรึกษาฟรีทาง LINE OA</span>
        </a>
        <a
          href="#portfolio"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:text-white hover:border-[#2bccaf]/50 transition-all duration-200 group"
        >
          <span>ชมผลงานจริง (Live Demos)</span>
          <ChevronRight className="w-4 h-4 text-[#2bccaf] group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {/* Apple-Style Central Hardware / Glass Pro Display Frame */}
      <div className="relative max-w-5xl mx-auto">
        <div className="rounded-3xl p-1 bg-gradient-to-b from-[#2bccaf]/40 via-slate-800/40 to-transparent shadow-2xl shadow-[#2bccaf]/10">
          <div className="rounded-[22px] bg-[#090e17] border border-slate-800 overflow-hidden relative aspect-[16/9]">
            
            {/* Top Minimalist Display Bar */}
            <div className="px-5 py-3.5 bg-[#0c1320] border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-xs font-mono text-slate-400">innovatech-pro-system.app</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#2bccaf] font-mono">
                <span className="w-2 h-2 rounded-full bg-[#2bccaf] animate-ping" />
                <span>Engine Active</span>
              </div>
            </div>

            {/* Display Body with 3 Key Apple-Style Pillars */}
            <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left h-[calc(100%-48px)] flex flex-col justify-between">
              
              <div className="p-6 rounded-2xl bg-[#0b1320]/80 border border-slate-800/80 backdrop-blur-md flex flex-col justify-between hover:border-[#2bccaf]/40 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#2bccaf]/10 text-[#2bccaf] flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-slate-400 uppercase">SPEED & PERFORMANCE</div>
                  <div className="text-3xl font-black text-white mt-1 mb-2">0.4s</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    โครงสร้างสถาปัตยกรรมความเร็วสูง โหลดไวติดอันดับ Google ได้ง่ายขึ้น
                  </p>
                </div>
                <div className="text-[11px] text-[#2bccaf] font-mono mt-4">✓ Google Core Web Vitals Pass</div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0b1320]/80 border border-slate-800/80 backdrop-blur-md flex flex-col justify-between hover:border-[#2bccaf]/40 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#2bccaf]/10 text-[#2bccaf] flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-slate-400 uppercase">FULL CODE OWNERSHIP</div>
                  <div className="text-3xl font-black text-white mt-1 mb-2">100%</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    ส่งมอบ Full Source Code ให้เป็นกรรมสิทธิ์ของลูกค้า ไม่มีค่าธรรมเนียมแอบแฝง
                  </p>
                </div>
                <div className="text-[11px] text-[#2bccaf] font-mono mt-4">✓ Complete IP Rights</div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0b1320]/80 border border-slate-800/80 backdrop-blur-md flex flex-col justify-between hover:border-[#2bccaf]/40 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#2bccaf]/10 text-[#2bccaf] flex items-center justify-center mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-slate-400 uppercase">SYSTEM STABILITY</div>
                  <div className="text-3xl font-black text-white mt-1 mb-2">99.9%</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    คลาวด์มาตรฐานองค์กร รองรับผู้ใช้งานพร้อมกันจำนวนมากได้อย่างราบรื่น
                  </p>
                </div>
                <div className="text-[11px] text-[#2bccaf] font-mono mt-4">✓ High Availability SLA</div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Apple-Style Minimal Metric Strip */}
      <div className="mt-16 pt-8 border-t border-slate-800/80 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-slate-400 text-xs sm:text-sm">
        <div>
          <span className="font-extrabold text-white text-base">150+</span> โปรเจกต์ส่งมอบสำเร็จ
        </div>
        <div>
          <span className="font-extrabold text-white text-base">98.5%</span> ความพึงพอใจลูกค้า
        </div>
        <div>
          <span className="font-extrabold text-white text-base">24/7</span> วิศวกรดูแลระบบ
        </div>
      </div>
    </section>
  );
}
