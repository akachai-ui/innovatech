'use client';

import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  ShoppingCart, 
  Users, 
  Bot, 
  Lock, 
  FileText, 
  Send,
  Sparkles,
  Zap,
  Layers
} from 'lucide-react';

interface SolutionsInteractivePreviewProps {
  activeSolution: number;
  setActiveSolution: (index: number) => void;
  solutions: {
    id: string;
    badge: string;
    title: string;
    desc: string;
    highlights: string[];
    metrics: { latency: string; scale: string; type: string };
  }[];
}

export default function SolutionsInteractivePreview({
  activeSolution,
  setActiveSolution,
  solutions
}: SolutionsInteractivePreviewProps) {
  const current = solutions[activeSolution];

  return (
    <section id="solutions-breakdown" className="py-8 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-2 sm:space-y-3 mb-5 sm:mb-12">
        <span className="text-xs font-mono font-bold tracking-widest text-[#2bccaf] uppercase">
          TAILORED APPLICATION DOMAINS
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          ประเภทระบบเว็บที่เราเชี่ยวชาญ
        </h2>
        <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto px-2">
          เลือกหมวดหมู่ระบบด้านล่างเพื่อดูสถาปัตยกรรมและฟังก์ชันการทำงานจริง
        </p>
      </div>

      {/* 📱 Mobile: iOS Scrollable Pill Segment Bar */}
      <div className="flex sm:hidden items-center gap-2 overflow-x-auto pb-3 mb-4 pt-1 select-none">
        {solutions.map((sol, index) => {
          const isActive = activeSolution === index;
          return (
            <button
              key={sol.id}
              onClick={() => setActiveSolution(index)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 border ${
                isActive
                  ? 'bg-[#2bccaf] text-slate-950 border-[#2bccaf] shadow-[0_0_15px_rgba(43,204,175,0.4)]'
                  : 'bg-slate-900 text-slate-300 border-slate-800'
              }`}
            >
              <span>{sol.badge.split(' ')[0]} • {sol.title.split('&')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* 💻 Desktop: 4 Solution Tab Buttons Grid */}
      <div className="hidden sm:grid grid-cols-4 gap-3 mb-8">
        {solutions.map((sol, index) => {
          const isActive = activeSolution === index;
          return (
            <button
              key={sol.id}
              onClick={() => setActiveSolution(index)}
              className={`p-4 rounded-2xl text-left transition-all border relative ${
                isActive
                  ? 'bg-slate-900 border-[#2bccaf] shadow-[0_0_20px_rgba(43,204,175,0.3)] ring-1 ring-[#2bccaf]'
                  : 'bg-slate-900/70 border-slate-800 hover:border-slate-600 hover:bg-slate-800/80'
              }`}
            >
              <div className={`text-xs font-mono uppercase tracking-wider font-bold mb-1 truncate ${
                isActive ? 'text-[#2bccaf]' : 'text-slate-400'
              }`}>
                {sol.badge}
              </div>
              <div className={`text-sm font-bold leading-snug line-clamp-2 ${
                isActive ? 'text-white' : 'text-slate-200'
              }`}>
                {sol.title.split('&')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Solution Feature Card (High-Contrast Slate Backdrop) */}
      <div className="p-4 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0d1522] border border-slate-700/80 shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2bccaf]/10 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-10 items-center">
          {/* Left Column: Information & Value Propositions (6 cols) */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2bccaf]/20 border border-[#2bccaf]/40 text-xs font-mono text-[#2bccaf] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#2bccaf]" />
              <span>{current.badge}</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              {current.title}
            </h3>

            <p className="text-xs sm:text-base text-slate-200 font-normal leading-relaxed">
              {current.desc}
            </p>

            {/* Highlights Checklist (Crisp & High Contrast) */}
            <div className="space-y-2 sm:space-y-3 pt-1">
              {current.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-[#2bccaf]/20 border border-[#2bccaf]/40 flex items-center justify-center text-[#2bccaf] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <span className="text-[11.5px] sm:text-sm text-white font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="pt-2 sm:pt-3">
              <a
                href="https://lin.ee/h4oaM2D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#2bccaf] hover:bg-[#20a890] text-slate-950 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(43,204,175,0.35)] transition-all hover:scale-105 active:scale-95 group"
              >
                <span>นัดคุยความต้องการสำหรับระบบนี้</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Fidelity Crystal-Clear UI Mockup (6 cols) */}
          <div className="lg:col-span-6">
            {/* TAB 0: Enterprise ERP & Workflows Mockup */}
            {activeSolution === 0 && (
              <div className="rounded-xl sm:rounded-2xl bg-[#090f18] border border-slate-700/90 p-3.5 sm:p-6 shadow-2xl space-y-3 sm:space-y-4">
                {/* Console Bar */}
                <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#2bccaf]/20 border border-[#2bccaf]/40 flex items-center justify-center text-[#2bccaf]">
                      <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">HQ Operations & Multi-Branch</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-300 font-mono">Workflow Engine v4.2</div>
                    </div>
                  </div>
                  <span className="text-[9.5px] sm:text-xs px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold border border-emerald-500/30">
                    Live Synced
                  </span>
                </div>

                {/* Multi-Branch Inventory Status */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  <div className="p-2 sm:p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium">คลัง กทม.</div>
                    <div className="text-xs sm:text-base font-black text-white font-mono">1,420 pcs</div>
                    <div className="text-[9px] sm:text-[10px] text-emerald-400 font-semibold">✓ พร้อมส่ง</div>
                  </div>
                  <div className="p-2 sm:p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium">คลัง ชลบุรี</div>
                    <div className="text-xs sm:text-base font-black text-white font-mono">890 pcs</div>
                    <div className="text-[9px] sm:text-[10px] text-[#2bccaf] font-semibold">✓ ซิงก์สต็อก</div>
                  </div>
                  <div className="p-2 sm:p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium">คลัง เชียงใหม่</div>
                    <div className="text-xs sm:text-base font-black text-amber-400 font-mono">120 pcs</div>
                    <div className="text-[9px] sm:text-[10px] text-amber-400 font-semibold">! สต็อกต่ำ</div>
                  </div>
                </div>

                {/* Multi-Level Approval Pipeline */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 sm:space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-white font-bold">
                    <span>PO-2024-884 (จัดซื้ออุปกรณ์ Enterprise)</span>
                    <span className="text-[#2bccaf] font-mono text-xs sm:text-sm">฿245,000</span>
                  </div>
                  {/* Progress Step Bar */}
                  <div className="flex items-center gap-1.5 pt-0.5 sm:pt-1">
                    <div className="flex-1 h-1.5 sm:h-2 rounded-full bg-[#2bccaf]" />
                    <div className="flex-1 h-1.5 sm:h-2 rounded-full bg-[#2bccaf]" />
                    <div className="flex-1 h-1.5 sm:h-2 rounded-full bg-slate-800" />
                  </div>
                  <div className="flex items-center justify-between text-[8.5px] sm:text-[10px] font-medium">
                    <span className="text-[#2bccaf]">1. ฝ่ายจัดซื้อส่งเอกสาร</span>
                    <span className="text-[#2bccaf]">2. ผู้จัดการอนุมัติแล้ว</span>
                    <span className="text-slate-400">3. รอการเงินชำระ</span>
                  </div>
                </div>

                {/* e-Tax Ready Badge */}
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-[10px] sm:text-xs text-white">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2bccaf]" />
                    <span className="font-semibold">e-Tax Invoice Signed by RD CA</span>
                  </div>
                  <span className="text-emerald-300 font-mono text-[9px] sm:text-[10px] font-bold">Hash Validated</span>
                </div>
              </div>
            )}

            {/* TAB 1: High-Traffic E-Commerce Mockup */}
            {activeSolution === 1 && (
              <div className="rounded-xl sm:rounded-2xl bg-[#090f18] border border-slate-700/90 p-3.5 sm:p-6 shadow-2xl space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                      <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">Flash Sale & High-Traffic Engine</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-300 font-mono">Edge SSR Cached</div>
                    </div>
                  </div>
                  <span className="text-[9.5px] sm:text-xs px-2.5 py-0.5 sm:py-1 rounded-full bg-sky-500/20 text-sky-300 font-mono font-bold border border-sky-500/30">
                    ⚡ 150k Shoppers
                  </span>
                </div>

                {/* Live Checkout Feed */}
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px] sm:text-xs">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-white font-bold">#ORD-9982</span>
                      <span className="text-slate-300">PromptPay QR</span>
                    </div>
                    <span className="text-emerald-400 font-mono font-black text-xs sm:text-sm">฿18,900 (0.02s)</span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px] sm:text-xs">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400" />
                      <span className="font-mono text-white font-bold">#ORD-9981</span>
                      <span className="text-slate-300">Credit Card Tokenized</span>
                    </div>
                    <span className="text-emerald-400 font-mono font-black text-xs sm:text-sm">฿4,250 (0.04s)</span>
                  </div>
                </div>

                {/* Performance Meter */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-white font-bold">
                    <span>Edge CDN Cache Hit Ratio</span>
                    <span className="text-[#2bccaf] font-mono text-xs sm:text-sm font-black">99.8%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 sm:h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#2bccaf] to-sky-400 h-full rounded-full w-[99%]" />
                  </div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-[10px] sm:text-xs text-white">
                  <div className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
                    <span className="font-semibold">PCI-DSS Level 1 Active</span>
                  </div>
                  <span className="text-sky-300 font-mono text-[9px] sm:text-[10px] font-bold">Encrypted</span>
                </div>
              </div>
            )}

            {/* TAB 2: B2B Client Portals & Custom SaaS Mockup */}
            {activeSolution === 2 && (
              <div className="rounded-xl sm:rounded-2xl bg-[#090f18] border border-slate-700/90 p-3.5 sm:p-6 shadow-2xl space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">Client Portal & RBAC Security</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-300 font-mono">Multi-Tenant Organization</div>
                    </div>
                  </div>
                  <span className="text-[9.5px] sm:text-xs px-2.5 py-0.5 sm:py-1 rounded-full bg-purple-500/20 text-purple-300 font-mono font-bold border border-purple-500/30">
                    SaaS Engine
                  </span>
                </div>

                {/* Role Matrix */}
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px] sm:text-xs">
                    <div>
                      <span className="text-white font-bold block text-xs sm:text-sm">Executive / Admin</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-300">Full Access • Financials</span>
                    </div>
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-purple-500/25 text-purple-300 text-[9px] sm:text-[10px] font-mono font-bold border border-purple-500/40">Full RBAC</span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px] sm:text-xs">
                    <div>
                      <span className="text-white font-bold block text-xs sm:text-sm">Partner / Distributor</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-300">Bulk Orders • Invoices</span>
                    </div>
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-sky-500/25 text-sky-300 text-[9px] sm:text-[10px] font-mono font-bold border border-sky-500/40">Partner Scope</span>
                  </div>
                </div>

                {/* Auto LINE Notification Trigger */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] sm:text-xs space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <Send className="w-3.5 h-3.5 text-[#06C755]" />
                    <span>LINE Official Account Auto-Dispatch</span>
                  </div>
                  <p className="text-[9.5px] sm:text-[10.5px] text-slate-300 leading-snug">
                    แจ้งเตือนสถานะคำสั่งซื้อและใบแจ้งหนี้อัตโนมัติเข้า LINE คู่ค้าทันทีเมื่อสถานะเปลี่ยน
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: Real-Time BI & AI Management Console Mockup */}
            {activeSolution === 3 && (
              <div className="rounded-xl sm:rounded-2xl bg-[#090f18] border border-slate-700/90 p-3.5 sm:p-6 shadow-2xl space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">Real-Time BI & AI Copilot</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-300 font-mono">LLM Embedded • SQL Core</div>
                    </div>
                  </div>
                  <span className="text-[9.5px] sm:text-xs px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold border border-emerald-500/30">
                    AI Active
                  </span>
                </div>

                {/* AI Natural Language Query Box */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5 sm:space-y-2 font-mono text-[11px] sm:text-xs">
                  <div className="text-white font-semibold flex items-center gap-2">
                    <span className="text-[#2bccaf] font-bold">&gt; Prompt:</span>
                    <span>&quot;สรุปยอดขายสาขาหลักสัปดาห์นี้และแนวโน้ม&quot;</span>
                  </div>
                  <div className="text-emerald-300 p-2 sm:p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] sm:text-[11px] leading-relaxed">
                    AI Copilot: ยอดขายรวม ฿2.4M (+18.4% WoW) กลุ่ม B2B เติบโตสูงสุด คาดการณ์สต็อกสินค้าชิ้น A จะหมดใน 6 วัน แนะนำสั่งผลิตเพิ่ม
                  </div>
                </div>

                {/* 30-Day Forecast Wave Graph */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 sm:space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs">
                    <span className="text-white font-bold">30-Day Predictive Sales Forecast</span>
                    <span className="text-[#2bccaf] font-mono font-bold">96.4% Accuracy</span>
                  </div>
                  <div className="h-14 sm:h-16 w-full relative flex items-end">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 50" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="ai-bi-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#2bccaf" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#2bccaf" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,40 Q 40,15 80,30 T 160,10 T 240,25 T 300,5 L 300,50 L 0,50 Z"
                        fill="url(#ai-bi-grad)"
                      />
                      <path
                        d="M 0,40 Q 40,15 80,30 T 160,10 T 240,25 T 300,5"
                        fill="none"
                        stroke="#2bccaf"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
