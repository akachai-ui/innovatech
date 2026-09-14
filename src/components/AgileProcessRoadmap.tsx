'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  Search, 
  Laptop, 
  GitBranch,
  ChevronDown,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Clock,
  KeyRound,
  Headphones,
  Activity,
  Layers,
  Database,
  Lock,
  Server,
  Terminal,
  FileCode2,
  Workflow
} from 'lucide-react';

export default function AgileProcessRoadmap() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      phase: 'WEEKS 1 - 2',
      title: 'Discovery & Architecture Blueprint',
      subtitle: 'วางรากฐานและสถาปัตยกรรมระบบอย่างแม่นยำ',
      desc: 'ลงลึกวิเคราะห์ Business Logic, ออกแบบฐานข้อมูล (ER Diagram & Schema), ออกแบบ UX/UI Wireframe แบบ Interactive Prototype ให้ทดลองคลิกใช้งานจริงก่อนเริ่มเขียนโค้ด',
      deliverables: [
        'Software Requirements Specification (SRS)',
        'System Architecture & Database Schema',
        'Figma High-Fidelity Interactive Prototype'
      ],
      icon: Search,
      tag: 'Planning & UX',
      accentColor: '#2bccaf',
      // 🎨 Infographic Visual Mockup 1: System Blueprint & Schema Architecture
      renderVisual: () => (
        <div className="w-full rounded-2xl bg-[#060b13] border border-slate-800 p-4 sm:p-5 relative overflow-hidden text-left shadow-2xl">
          {/* Blueprint Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          
          {/* Top Mockup Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2bccaf] animate-pulse" />
              <span className="text-[11px] font-mono font-bold text-slate-300">ARCHITECTURE_SCHEMA_V1.drawio</span>
            </div>
            <span className="text-[9.5px] font-mono px-2 py-0.5 rounded-md bg-[#2bccaf]/15 text-[#2bccaf] border border-[#2bccaf]/30">
              BLUEPRINT APPROVED
            </span>
          </div>

          {/* Interactive Flow Architecture Nodes */}
          <div className="space-y-2.5 relative z-10">
            {/* Top Row: Client & Gateway */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-[#2bccaf]/40 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Laptop className="w-3.5 h-3.5 text-[#2bccaf]" />
                  <span className="text-[11px] font-bold text-white">Frontend UI Client</span>
                </div>
                <div className="text-[9px] text-slate-400 font-mono">Next.js 14 • React • Mobile</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-sky-500/40 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Workflow className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-[11px] font-bold text-white">API Gateway & Auth</span>
                </div>
                <div className="text-[9px] text-slate-400 font-mono">JWT • OAuth2 • Rate Limit</div>
              </div>
            </div>

            {/* Middle Connecting Arrow */}
            <div className="flex items-center justify-center gap-2 py-0.5">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#2bccaf]" />
              <span className="text-[9px] font-mono text-[#2bccaf] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">
                gRPC / REST High-Speed Bus
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#2bccaf]" />
            </div>

            {/* Bottom Row: Microservices & Distributed DB */}
            <div className="grid grid-cols-3 gap-1.5">
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-center">
                <div className="text-[10px] font-bold text-teal-400 font-mono">Core Service</div>
                <div className="text-[8.5px] text-slate-500">Business Logic</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-center">
                <div className="text-[10px] font-bold text-sky-400 font-mono">Redis Cache</div>
                <div className="text-[8.5px] text-slate-500">&lt; 1ms In-Memory</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-center">
                <div className="text-[10px] font-bold text-purple-400 font-mono">PostgreSQL</div>
                <div className="text-[8.5px] text-slate-500">ACID Relational DB</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      step: '02',
      phase: 'WEEKS 3 - 8',
      title: 'Agile Sprints & Bi-Weekly Demos',
      subtitle: 'พัฒนาโปร่งใส ตรวจงานได้จริงทุก 2 สัปดาห์',
      desc: 'แบ่งการเขียนโค้ดเป็น Sprint ส่งมอบงานบน Staging Server ให้คุณและทีมงานทดลองกดใช้งานจริงทุก 14 วัน ฟีดแบ็กและปรับแต่งได้ทันที ไม่มีความเสี่ยงงานไม่ตรงสเปก',
      deliverables: [
        'Bi-Weekly Staging Environment Demo',
        'Automated CI/CD Test Pipeline',
        'Sprint Progress Review & Feedback Loop'
      ],
      icon: Code2,
      tag: 'Development',
      accentColor: '#38bdf8',
      // 🎨 Infographic Visual Mockup 2: CI/CD Pipeline & Staging Terminal
      renderVisual: () => (
        <div className="w-full rounded-2xl bg-[#060b13] border border-slate-800 p-4 sm:p-5 relative overflow-hidden text-left shadow-2xl">
          {/* Top Pipeline Status Bar */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-sky-400" />
              <span className="text-[11px] font-mono font-bold text-white">CI/CD Pipeline • Sprint 03</span>
            </div>
            <span className="text-[9.5px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              BUILD #142 PASSED ✓
            </span>
          </div>

          {/* 3 Step Automated Pipeline Graphic */}
          <div className="space-y-2 font-mono text-[10px]">
            {/* Step 1: Git Push */}
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-slate-300">git commit: feature/auth-flow</span>
              </div>
              <span className="text-[9px] text-slate-500">12s ago</span>
            </div>

            {/* Step 2: Automated Unit Tests */}
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-slate-300">482 Unit & E2E Tests</span>
              </div>
              <span className="text-emerald-400 font-bold text-[9.5px]">100% Passed</span>
            </div>

            {/* Step 3: Staging Server Live */}
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-sky-950/60 to-slate-900 border border-sky-500/40 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span className="text-sky-300 font-bold">Staging Preview: staging.app.dev</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 font-bold">
                READY FOR CLIENT TEST
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      step: '03',
      phase: 'WEEKS 9 - 10',
      title: 'Security Audit & Stress Testing',
      subtitle: 'ทดสอบความปลอดภัยและการรับโหลดขั้นสูงสุด',
      desc: 'ทดสอบการรับโหลดจริงแบบ High-Traffic (Load & Stress Testing) ตรวจสอบช่องโหว่ความปลอดภัยตามมาตรฐาน OWASP Top 10 และตรวจสอบความถูกต้องของข้อมูลทุกขั้นตอน 100%',
      deliverables: [
        '100k+ Concurrency Stress Test Report',
        'OWASP Top 10 Security Audit Passed',
        'Data Integrity & Edge-Case Verification'
      ],
      icon: ShieldCheck,
      tag: 'QA & Security',
      accentColor: '#a855f7',
      // 🎨 Infographic Visual Mockup 3: Security Lock & Stress Telemetry
      renderVisual: () => (
        <div className="w-full rounded-2xl bg-[#060b13] border border-slate-800 p-4 sm:p-5 relative overflow-hidden text-left shadow-2xl">
          {/* Top Security Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span className="text-[11px] font-mono font-bold text-white">PENETRATION & STRESS SUITE</span>
            </div>
            <span className="text-[9.5px] font-mono px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/30">
              GRADE A+ SECURED
            </span>
          </div>

          {/* Telemetry Metrics Grid */}
          <div className="grid grid-cols-2 gap-2 mb-2.5">
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[9px] font-mono text-slate-400">Stress Load Peak</div>
              <div className="text-sm sm:text-base font-black text-purple-400 font-mono">150,000 TPS</div>
              <div className="text-[8.5px] text-emerald-400 font-mono">0.00% Error Rate</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[9px] font-mono text-slate-400">Security Standard</div>
              <div className="text-sm sm:text-base font-black text-[#2bccaf] font-mono">OWASP Top 10</div>
              <div className="text-[8.5px] text-teal-300 font-mono">Zero Vulnerabilities</div>
            </div>
          </div>

          {/* Encryption Badge Bar */}
          <div className="p-2 rounded-lg bg-slate-950 border border-purple-500/30 flex items-center justify-between text-[10px] font-mono text-slate-300">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-purple-400" />
              <span>AES-256 Bit E2E Encryption</span>
            </div>
            <span className="text-emerald-400 font-bold">VERIFIED ✓</span>
          </div>
        </div>
      )
    },
    {
      step: '04',
      phase: 'WEEK 11+',
      title: 'Production Go-Live & 24/7 SLA',
      subtitle: 'ขึ้นระบบจริง อบรมพนักงาน พร้อมดูแลตลอด 24 ชม.',
      desc: 'นำระบบขึ้น Cloud Infrastructure แบบ Zero-Downtime จัดอบรมพนักงานพร้อมคู่มือการใช้งาน และมีทีมวิศวกรดูแลความเสถียร พร้อมรับประกันบำรุงรักษาตลอดสัญญา',
      deliverables: [
        'Zero-Downtime Production Deployment',
        'Staff Training & Video Documentation',
        '24/7 SLA Uptime & Server Monitoring'
      ],
      icon: Rocket,
      tag: 'Deployment',
      accentColor: '#10b981',
      // 🎨 Infographic Visual Mockup 4: Multi-Zone Cloud & SLA Telemetry
      renderVisual: () => (
        <div className="w-full rounded-2xl bg-[#060b13] border border-slate-800 p-4 sm:p-5 relative overflow-hidden text-left shadow-2xl">
          {/* Top Live Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] font-mono font-bold text-white">MULTI-ZONE PRODUCTION CLUSTER</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[9.5px] font-mono border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE ONLINE</span>
            </div>
          </div>

          {/* Cloud Nodes & Uptime Telemetry */}
          <div className="space-y-2 font-mono text-[10px]">
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-white font-bold">AWS & Cloud Cluster</div>
                <div className="text-[8.5px] text-slate-400">Kubernetes Auto-Scale (Zero Downtime)</div>
              </div>
              <div className="text-right">
                <span className="text-xs font-black text-emerald-400">99.99%</span>
                <span className="text-[8px] text-slate-500 block">SLA Uptime</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-200 font-bold">1-Year Full Warranty & 24/7 Engineers</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                ACTIVE
              </span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="process" className="pt-4 sm:pt-8 pb-8 sm:pb-14 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2bccaf]/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center space-y-2.5 mb-6 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-[#2bccaf]/40 text-xs font-mono font-bold text-[#2bccaf] shadow-[0_0_15px_rgba(43,204,175,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-[#2bccaf]" />
          <span>DEVELOPMENT LIFECYCLE & PROCESS</span>
        </div>
        
        <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.18]">
          ขั้นตอนการพัฒนา 4 สเต็ป <br className="hidden sm:inline" />
          สู่ระบบ Enterprise ที่สมบูรณ์แบบ
        </h2>
      </div>

      {/* ======================================================== */}
      {/* 📱 MOBILE VIEW: ACCORDION CARD STACK WITH INFOGRAPHIC */}
      {/* ======================================================== */}
      <div className="block md:hidden space-y-4">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          const isSelected = activeStep === idx;
          return (
            <div
              key={item.step}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isSelected
                  ? 'bg-[#0d1522] border-[#2bccaf] shadow-[0_0_25px_rgba(43,204,175,0.25)] ring-1 ring-[#2bccaf]'
                  : 'bg-[#090f18] border-slate-800'
              }`}
            >
              {/* Header Button */}
              <button
                onClick={() => setActiveStep(idx)}
                className="w-full p-4 flex items-center justify-between text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className={`text-2xl font-black font-mono ${isSelected ? 'text-[#2bccaf]' : 'text-slate-500'}`}>
                    {item.step}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 text-[#2bccaf]">
                        {item.phase}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#2bccaf]' : 'text-slate-500'}`} />
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isSelected ? 'rotate-180 text-[#2bccaf]' : ''}`} />
                </div>
              </button>

              {/* In-Place Expanded Detail Body + Visual Infographic */}
              {isSelected && (
                <div className="px-4 pb-4 pt-2 border-t border-slate-800/80 space-y-3.5 bg-slate-950/70">
                  {/* Infographic Graphic Mockup */}
                  <div className="pt-1">
                    {item.renderVisual()}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] font-bold text-[#2bccaf] font-mono uppercase tracking-wider">
                      สิ่งที่ส่งมอบในขั้นตอนนี้:
                    </div>
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2bccaf] shrink-0 mt-0.5" />
                        <span className="text-xs text-white font-medium">{del}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Staging Assurance */}
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-[11px] text-slate-300">
                    <div className="flex items-center gap-1.5 text-white font-bold text-xs">
                      <Laptop className="w-3.5 h-3.5 text-[#2bccaf]" />
                      <span>Live Staging & Full Ownership</span>
                    </div>
                    <p className="text-[10px] text-slate-400">
                      ทดลองใช้งานจริงได้ทุก 14 วัน และเป็นเจ้าของ Source Code 100%
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* 💻 DESKTOP VIEW: 4 MILESTONES + DUAL INFOGRAPHIC SHOWCASE */}
      {/* ======================================================== */}
      <div className="hidden md:block rounded-3xl p-8 lg:p-10 bg-[#0d1522]/90 border border-slate-800 shadow-[0_20px_70px_rgba(0,0,0,0.85)] relative overflow-hidden backdrop-blur-xl">
        {/* Ambient Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#2bccaf]/10 blur-3xl pointer-events-none" />

        {/* 4 Connected Milestone Steps */}
        <div className="grid grid-cols-4 gap-4 mb-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border relative flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900/95 border-[#2bccaf] shadow-[0_0_25px_rgba(43,204,175,0.25)] ring-1 ring-[#2bccaf] scale-[1.02]'
                    : 'bg-[#090f18]/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className={`text-3xl font-black font-mono transition-colors ${isSelected ? 'text-[#2bccaf]' : 'text-slate-500'}`}>
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700/50">
                      {item.phase}
                    </span>
                  </div>

                  <h3 className="text-sm lg:text-base font-bold text-white mb-1 leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-2.5 mt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className={isSelected ? 'text-[#2bccaf] font-semibold font-mono' : 'text-slate-400 font-mono'}>
                    {item.tag}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#2bccaf]' : 'text-slate-500'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Panel with Infographic Illustration */}
        <div className="rounded-2xl bg-[#090f18]/90 border border-slate-700/80 p-6 lg:p-8 relative shadow-inner">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="col-span-6 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2bccaf]/15 border border-[#2bccaf]/30 text-xs font-mono text-[#2bccaf] font-bold">
                <span>PHASE {steps[activeStep].step} • {steps[activeStep].phase}</span>
              </div>

              <h3 className="text-xl lg:text-2xl font-black text-white">
                {steps[activeStep].title}
              </h3>

              <p className="text-xs lg:text-sm text-slate-300 leading-relaxed">
                {steps[activeStep].desc}
              </p>

              {/* Deliverables List */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-bold text-[#2bccaf] font-mono uppercase tracking-wider">
                  Key Deliverables & Milestones:
                </div>
                {steps[activeStep].deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2bccaf] shrink-0" />
                    <span className="text-xs lg:text-sm text-white font-medium">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Infographic Visual Illustration */}
            <div className="col-span-6">
              {steps[activeStep].renderVisual()}
            </div>
          </div>
        </div>

        {/* Bottom 3 Trust Guarantees */}
        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800/80 text-left">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-[#2bccaf]/40 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-[#2bccaf]/15 text-[#2bccaf] border border-[#2bccaf]/30 flex items-center justify-center font-bold shrink-0">
              <Clock className="w-4 h-4 text-[#2bccaf]" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-white block">ส่งมอบตรงเวลา 100%</span>
              <span className="text-slate-400">พัฒนาตามกำหนด Sprint ชัดเจน</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-400/40 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-sky-500/15 text-sky-400 border border-sky-500/30 flex items-center justify-center font-bold shrink-0">
              <KeyRound className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-white block">กรรมสิทธิ์โค้ด 100%</span>
              <span className="text-slate-400">ส่งมอบ Source Code ครบถ้วน</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-400/40 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-purple-500/15 text-purple-400 border border-purple-500/30 flex items-center justify-center font-bold shrink-0">
              <Headphones className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-white block">รับประกันดูแล 1 ปี</span>
              <span className="text-slate-400">SLA บำรุงรักษาหลัง Go-Live</span>
            </div>
          </div>
        </div>

      </div>

      {/* Action CTA Ribbon at the bottom */}
      <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <a
          href="https://lin.ee/h4oaM2D"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#2bccaf] hover:bg-[#20a890] text-slate-950 font-extrabold text-xs sm:text-sm shadow-[0_0_25px_rgba(43,204,175,0.35)] hover:scale-105 active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-slate-950 text-[#2bccaf]" />
          <span>นัดคุยความต้องการโปรเจกต์ (ฟรี)</span>
          <ArrowRight className="w-4 h-4 text-slate-950" />
        </a>
      </div>
    </section>
  );
}
