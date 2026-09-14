'use client';

import React, { useState } from 'react';
import { 
  Sparkles, ArrowRight, MessageCircle, Phone, Check, 
  ChevronRight, ChevronLeft, Zap, ShieldCheck, Award, 
  Globe, Star
} from 'lucide-react';

export default function BannerShowcase() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const totalBanners = 8;

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % totalBanners);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + totalBanners) % totalBanners);
  };

  return (
    <div className="pt-36 sm:pt-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Top Navigation & Slide Indicator Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md max-w-4xl mx-auto shadow-xl">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#2bccaf] text-slate-950 font-black text-sm flex items-center justify-center">
            {currentIdx + 1}
          </span>
          <div>
            <div className="text-xs text-slate-400">กำลังดูแบนเนอร์แบบที่:</div>
            <div className="text-sm font-bold text-white">
              {currentIdx === 0 && 'แบบที่ 1: Apple Keynote Billboard'}
              {currentIdx === 1 && 'แบบที่ 2: 3-Service Feature Cards'}
              {currentIdx === 2 && 'แบบที่ 3: Split 2-Box (แยกโปรโมชัน)'}
              {currentIdx === 3 && 'แบบที่ 4: Minimalist Apple Store'}
              {currentIdx === 4 && 'แบบที่ 5: Bento Grid 4 สัดส่วน'}
              {currentIdx === 5 && 'แบบที่ 6: Lead Quote (กล่องติดต่อด่วน)'}
              {currentIdx === 6 && 'แบบที่ 7: Cyberpunk Glowing Frame'}
              {currentIdx === 7 && 'แบบที่ 8: Client Trust & 5-Star Reviews'}
            </div>
          </div>
        </div>

        {/* Next / Prev Controllers */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 hover:border-[#2bccaf] transition-all cursor-pointer shadow-md"
          >
            <ChevronLeft className="w-4 h-4 text-[#2bccaf]" />
            <span>ก่อนหน้า</span>
          </button>

          <span className="text-xs font-mono font-bold text-[#2bccaf] px-2">
            {currentIdx + 1} / {totalBanners}
          </span>

          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#2bccaf] hover:bg-[#20a890] text-slate-950 font-black text-xs transition-all cursor-pointer shadow-lg shadow-[#2bccaf]/25 hover:scale-105"
          >
            <span>ถัดไป</span>
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SINGLE BANNER DISPLAY (แสดงเพียงแบบเดียวตามที่เลือก) */}
      {/* ========================================================================= */}
      <div className="relative min-h-[420px] flex items-center justify-center">

        {/* 1. APPLE KEYNOTE BILLBOARD */}
        {currentIdx === 0 && (
          <div className="w-full relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#0e1826] via-[#09101a] to-[#060a10] border border-[#2bccaf]/40 shadow-2xl shadow-[#2bccaf]/10 overflow-hidden text-center max-w-5xl mx-auto animate-fade-in">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2bccaf]/10 border border-[#2bccaf]/40 text-xs font-semibold text-[#2bccaf]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Custom Built • No WordPress • No Wix</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                รับพัฒนาระบบองค์กร <br />
                และ <span className="bg-gradient-to-r from-white via-[#2bccaf] to-sky-400 bg-clip-text text-transparent">เว็บไซต์ประสิทธิภาพสูง</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
                เปลี่ยนไอเดียธุรกิจของคุณให้เป็นซอฟต์แวร์ที่ใช้งานได้จริง (ERP, POS, Web App, Custom Website) โหลดเร็ว ปลอดภัย และส่งมอบ Source Code 100%
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a href="https://lin.ee/h4oaM2D" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#06C755] text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>เริ่มโปรเจกต์กับเรา (LINE OA)</span>
                </a>
                <a href="tel:0924797666" className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-sm flex items-center justify-center gap-1.5">
                  <span>โทร 092-479-7666</span>
                </a>
              </div>
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-xl mx-auto text-center text-xs">
                <div><div className="text-2xl font-black text-[#2bccaf]">0.4s</div><div className="text-slate-400 mt-0.5">โหลดไวสุด</div></div>
                <div><div className="text-2xl font-black text-white">100%</div><div className="text-slate-400 mt-0.5">เป็นเจ้าของโค้ด</div></div>
                <div><div className="text-2xl font-black text-[#2bccaf]">99.9%</div><div className="text-slate-400 mt-0.5">Uptime SLA</div></div>
              </div>
            </div>
          </div>
        )}

        {/* 2. THREE FEATURE HIGHLIGHTS */}
        {currentIdx === 1 && (
          <div className="w-full p-8 sm:p-12 rounded-3xl bg-[#0a1320] border-2 border-[#2bccaf]/40 shadow-2xl max-w-5xl mx-auto space-y-8 animate-fade-in text-center">
            <div className="max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-[#2bccaf] font-bold">FULL-SERVICE DIGITAL PLATFORM</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">บริการพัฒนาซอฟต์แวร์ครบวงจร</h2>
              <p className="text-xs sm:text-sm text-slate-400">เลือกโซลูชันที่เหมาะกับความต้องการขององค์กรคุณ</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <span className="text-[10px] font-mono font-bold text-[#2bccaf] bg-[#2bccaf]/10 px-2.5 py-1 rounded-full">CUSTOM WEB</span>
                <h4 className="text-lg font-bold text-white">เว็บไซต์องค์กร & Sale Page</h4>
                <p className="text-xs text-slate-400">เน้น SEO โหลดไว ปิดการขายได้เร็ว ไม่ใช้เทมเพลต</p>
                <div className="text-xs text-[#2bccaf] font-semibold pt-2">✓ ฟรี Domain .com + SSL 1 ปี</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-400/10 px-2.5 py-1 rounded-full">ERP & POS</span>
                <h4 className="text-lg font-bold text-white">ระบบจัดการสต็อก & ธุรกิจ</h4>
                <p className="text-xs text-slate-400">ตัดสต็อกอัตโนมัติ เช็กข้อมูลผ่านมือถือได้ 24 ชม.</p>
                <div className="text-xs text-sky-400 font-semibold pt-2">✓ Real-time Database</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full">WEB APP</span>
                <h4 className="text-lg font-bold text-white">แอปพลิเคชันเฉพาะทาง</h4>
                <p className="text-xs text-slate-400">ระบบลงเวลาพนักงาน GPS, ระบบแจ้งซ่อมอาคาร</p>
                <div className="text-xs text-emerald-400 font-semibold pt-2">✓ มี Live Demo ให้ทดสอบ</div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://lin.ee/h4oaM2D" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-xl bg-[#2bccaf] text-slate-950 font-bold text-sm inline-flex items-center gap-2 shadow-lg">
                <span>ปรึกษาเลือกบริการที่เหมาะกับธุรกิจคุณ</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* 3. SPLIT 2-BOX BANNER */}
        {currentIdx === 2 && (
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto animate-fade-in">
            <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[#0b1422] border border-[#2bccaf]/30 shadow-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#2bccaf] font-bold">100% CUSTOM BUILT SOFTWARE</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  รับพัฒนาระบบองค์กร <br />
                  <span className="text-[#2bccaf]">เพื่อธุรกิจของคุณโดยเฉพาะ</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
                  ไม่ใช้เทมเพลตสำเร็จรูป โครงสร้างเร็ว แรง ปลอดภัย และส่งมอบ Source Code ให้ลูกค้าเป็นเจ้าของ 100%
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://lin.ee/h4oaM2D" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-[#06C755] text-white font-bold text-xs flex items-center gap-1.5 shadow-lg">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>ปรึกษาฟรีทาง LINE</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 p-8 rounded-3xl bg-gradient-to-b from-[#123830] to-[#091916] border-2 border-[#2bccaf] shadow-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#2bccaf] text-slate-950 flex items-center justify-center font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">ข้อเสนอพิเศษประจำเดือน</h3>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#2bccaf]" /> ฟรี Domain .com 1 ปี</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#2bccaf]" /> ฟรี SSL Certificate</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#2bccaf]" /> ประเมินราคาฟรี 24 ชม.</li>
                </ul>
              </div>
              <a href="tel:0924797666" className="w-full py-3 rounded-xl bg-[#2bccaf] text-slate-950 font-bold text-xs text-center block shadow-md">
                โทรสายด่วน 092-479-7666
              </a>
            </div>
          </div>
        )}

        {/* 4. MINIMAL BILLBOARD */}
        {currentIdx === 3 && (
          <div className="w-full rounded-3xl p-10 sm:p-16 bg-[#090f19] border border-slate-800 shadow-2xl max-w-5xl mx-auto text-center space-y-6 animate-fade-in">
            <span className="text-xs uppercase tracking-widest font-mono text-[#2bccaf]">ENGINEERING EXCELLENCE</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
              เร็วที่สุด. ปลอดภัยที่สุด. <br />
              <span className="text-[#2bccaf]">เป็นของคุณ 100%</span>
            </h2>
            <p className="text-base text-slate-400 max-w-xl mx-auto">
              ออกแบบและพัฒนาซอฟต์แวร์ระดับ High-Performance เพื่อสร้างความได้เปรียบทางธุรกิจอย่างยั่งยืน
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <a href="https://lin.ee/h4oaM2D" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-[#2bccaf] text-slate-950 font-bold text-sm hover:scale-105 transition-all">
                เริ่มต้นโปรเจกต์ของคุณ
              </a>
            </div>
          </div>
        )}

        {/* 5. BENTO GRID */}
        {currentIdx === 4 && (
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto animate-fade-in">
            <div className="md:col-span-2 p-8 rounded-3xl bg-[#0b1320] border border-[#2bccaf]/40 shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono text-[#2bccaf] font-bold">INNOVATECH CORE PLATFORM</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-3 leading-tight">
                  รับพัฒนาระบบองค์กร & เว็บไซต์ธุรกิจ
                </h2>
                <p className="text-slate-300 text-sm max-w-md">เปลี่ยนไอเดียให้เป็นระบบที่ใช้งานได้จริง โค้ดสะอาด โหลดไว 100% Custom Built</p>
              </div>
              <a href="https://lin.ee/h4oaM2D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2bccaf] text-slate-950 font-bold text-xs self-start">
                <span>ปรึกษาโครงการฟรี</span><ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="p-6 rounded-3xl bg-[#0b1320] border border-slate-800 flex flex-col justify-between">
              <ShieldCheck className="w-8 h-8 text-[#2bccaf]" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">99.9% Uptime</h3>
                <p className="text-xs text-slate-400">ระบบเสถียร รองรับผู้ใช้พร้อมกันหลักแสน</p>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-[#0b1320] border border-slate-800 flex flex-col justify-between">
              <Globe className="w-8 h-8 text-sky-400" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Live Demos</h3>
                <p className="text-xs text-slate-400">ทดลองเล่นระบบ HR, คลินิก, E-commerce</p>
              </div>
            </div>
            <div className="md:col-span-2 p-6 rounded-3xl bg-[#0b1320] border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">ได้รับความไว้วางใจจากองค์กรชั้นนำ</div>
                <div className="text-sm font-bold text-white">วิทยาลัยอุตสาหกรรมสร้างสรรค์ มศว • Real Line Network • Wara Shop 88</div>
              </div>
            </div>
          </div>
        )}

        {/* 6. LEAD QUOTE BOX */}
        {currentIdx === 5 && (
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto animate-fade-in">
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2bccaf]/10 border border-[#2bccaf]/30 text-xs font-semibold text-[#2bccaf]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ประเมินราคาและกรอบเวลาให้ฟรีใน 24 ชั่วโมง</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                ต้องการทำเว็บหรือพัฒนาระบบ? <br />
                <span className="text-[#2bccaf]">ปรึกษาทีมวิศวกรได้ทันที</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                เราช่วยวิเคราะห์ความต้องการ ออกแบบระบบ และประเมินงบประมาณให้ฟรี ไม่มีค่าใช้จ่ายแอบแฝง
              </p>
            </div>
            <div className="lg:col-span-5 p-7 rounded-3xl bg-[#0b1320] border-2 border-[#2bccaf]/50 shadow-2xl space-y-4">
              <h3 className="text-lg font-bold text-white">แอดไลน์ประเมินราคาด่วน</h3>
              <p className="text-xs text-slate-400">คุยตรงกับวิศวกรซอฟต์แวร์ ให้คำแนะนำตรงจุด</p>
              <div className="space-y-3 pt-2">
                <a href="https://lin.ee/h4oaM2D" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-[#06C755] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>ทักคุยผ่าน LINE OA (@innovatech)</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* 7. CYBERPUNK GLOW FRAME */}
        {currentIdx === 6 && (
          <div className="w-full rounded-3xl p-8 sm:p-14 bg-[#050c14] border-2 border-[#2bccaf] shadow-[0_0_35px_rgba(43,204,175,0.25)] text-center max-w-5xl mx-auto space-y-6 animate-fade-in">
            <span className="text-xs font-mono font-bold text-[#2bccaf] px-3 py-1 rounded-full bg-[#2bccaf]/10 border border-[#2bccaf]/30">
              ⚡ HIGH PERFORMANCE CYBER SYSTEM
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
              สถาปัตยกรรมซอฟต์แวร์ <br />
              <span className="text-[#2bccaf] drop-shadow-[0_0_15px_#2bccaf]">เพื่ออนาคตของธุรกิจคุณ</span>
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto">
              ระบบโหลดไวระดับเสี้ยววินาที รองรับผู้ใช้งานจำนวนมาก และไม่มีปัญหาปลั๊กอินกวนใจ 100% Custom Built
            </p>
            <div className="pt-2">
              <a href="https://lin.ee/h4oaM2D" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-[#2bccaf] text-slate-950 font-black text-sm shadow-[0_0_20px_rgba(43,204,175,0.4)] hover:scale-105 transition-all inline-block">
                ⚡ เริ่มโปรเจกต์ทันที
              </a>
            </div>
          </div>
        )}

        {/* 8. CLIENT TRUST IMPACT */}
        {currentIdx === 7 && (
          <div className="w-full rounded-3xl p-8 sm:p-12 bg-[#09111c] border border-slate-800 shadow-2xl max-w-5xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="flex items-center justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <span className="text-xs text-slate-300 font-bold ml-2">98.5% Client Satisfaction Score</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              ผลงานระบบจริงกว่า <span className="text-[#2bccaf]">150+ โครงการ</span> <br />
              ที่องค์กรชั้นนำเลือกใช้
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              ทั้งระบบลงเวลาพนักงาน GPS, เว็บไซต์คลินิกทันตกรรม, ระบบจัดการอาคาร มศว, และร้านค้าออนไลน์ E-commerce
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <a href="https://lin.ee/h4oaM2D" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-xl bg-[#06C755] text-white font-bold text-sm">
                ปรึกษาเราทาง LINE
              </a>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Number Dots Indicator */}
      <div className="flex items-center justify-center gap-2 pt-4">
        {[...Array(totalBanners)].map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIdx(idx)}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              currentIdx === idx ? 'w-10 bg-[#2bccaf]' : 'w-2.5 bg-slate-800 hover:bg-slate-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
