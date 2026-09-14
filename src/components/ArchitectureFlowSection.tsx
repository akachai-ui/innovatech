'use client';

import React from 'react';
import { 
  Globe, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Server, 
  Zap, 
  Lock, 
  RefreshCw, 
  Layers, 
  ArrowRight,
  Smartphone,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function ArchitectureFlowSection() {
  return (
    <section className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-2 sm:space-y-3 mb-10 sm:mb-14">
        <span className="text-xs font-mono font-bold tracking-widest text-[#2bccaf] uppercase">
          ENTERPRISE BLUEPRINT & SECURITY
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          สถาปัตยกรรมระบบที่เสถียร ปลอดภัย และเชื่อมต่อง่าย
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto px-2">
          ออกแบบตามมาตรฐาน Cloud-Native รองรับผู้ใช้งานจำนวนมหาศาล พร้อมเชื่อมต่อฐานข้อมูลเดิมขององค์กรอย่างไร้รอยต่อ
        </p>
      </div>

      {/* Main Architecture Visual Flow Diagram Card */}
      <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-10 bg-[#0d1522] border border-slate-700/80 shadow-[0_20px_70px_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-[#2bccaf]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-sky-500/10 blur-3xl pointer-events-none" />

        {/* 4-Node Flow Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
          
          {/* NODE 1: Clients & Channels */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#090f18] border border-slate-700/90 flex flex-col justify-between space-y-4 hover:border-[#2bccaf]/50 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#2bccaf]/15 border border-[#2bccaf]/30 flex items-center justify-center text-[#2bccaf] group-hover:scale-110 transition-transform">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  LAYER 01
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Omnichannel Clients
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                เข้าถึงได้จากทุกอุปกรณ์ ทุกขนาดหน้าจอ อย่างราบรื่น
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-800">
              <div className="text-[11px] text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2bccaf] shrink-0" />
                <span>Web Apps (Desktop & Mobile)</span>
              </div>
              <div className="text-[11px] text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2bccaf] shrink-0" />
                <span>LINE OA & Chatbot Sync</span>
              </div>
              <div className="text-[11px] text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2bccaf] shrink-0" />
                <span>POS & Tablet Portals</span>
              </div>
            </div>
          </div>

          {/* NODE 2: Edge CDN & Gateway */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#090f18] border border-slate-700/90 flex flex-col justify-between space-y-4 hover:border-sky-400/50 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  LAYER 02
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Edge SSR & Gateway
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                โหลดหน้าจอในเสี้ยววินาที พร้อมเกราะป้องกัน Cyber Attack
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-800">
              <div className="text-[11px] text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Next.js 14 App Router</span>
              </div>
              <div className="text-[11px] text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Cloudflare DDoS & WAF</span>
              </div>
              <div className="text-[11px] text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Edge Caching Sub-second</span>
              </div>
            </div>
          </div>

          {/* NODE 3: Core Microservices & Business Logic */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#090f18] border border-slate-700/90 flex flex-col justify-between space-y-4 hover:border-purple-400/50 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  LAYER 03
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Business Logic Engine
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                ประมวลผลคำสั่งซื้อ คำนวณภาษี และ Workflow อัตโนมัติ
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-800">
              <div className="text-[11px] text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Node.js / Go Microservices</span>
              </div>
              <div className="text-[11px] text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Real-Time WebSockets</span>
              </div>
              <div className="text-[11px] text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>AI & Automation Workers</span>
              </div>
            </div>
          </div>

          {/* NODE 4: Data Layer & Legacy Integration */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#090f18] border border-slate-700/90 flex flex-col justify-between space-y-4 hover:border-emerald-400/50 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Database className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  LAYER 04
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Data & Legacy Sync
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                เชื่อมโยงฐานข้อมูลเดิม ไม่ต้องทิ้งระบบเก่าขององค์กร
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-800">
              <div className="text-[11px] text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>PostgreSQL & Redis Cluster</span>
              </div>
              <div className="text-[11px] text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>SAP / Oracle / AS400 Sync</span>
              </div>
              <div className="text-[11px] text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Bank Payment Gateway API</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Security & Compliance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 pt-8 border-t border-slate-800">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-[#2bccaf]/15 border border-[#2bccaf]/30 flex items-center justify-center text-[#2bccaf] shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">AES-256 Data Encryption</div>
              <div className="text-[11px] text-slate-300">เข้ารหัสข้อมูลทั้งขณะรับส่งและจัดเก็บ</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Role-Based Access (RBAC)</div>
              <div className="text-[11px] text-slate-300">กำหนดสิทธิ์พนักงานและ Audit Logs</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Cloud Auto-Scaling 99.99%</div>
              <div className="text-[11px] text-slate-300">ขยายเซิร์ฟเวอร์อัตโนมัติตามทราฟฟิก</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
