'use client';

import React, { useState, useRef } from 'react';
import { 
  Globe, 
  Lock, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Code2, 
  Database, 
  Smartphone,
  Bell,
  Sparkles,
  Wifi,
  Battery,
  Layers,
  ArrowUpRight,
  Activity
} from 'lucide-react';

export default function CustomWebAppsHeroVisual() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-5xl mx-auto mt-6 sm:mt-12 [perspective:1200px] select-none"
    >
      {/* Ambient Glow behind the whole 3D visual cluster */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[850px] h-[220px] sm:h-[450px] bg-gradient-to-tr from-[#2bccaf]/20 via-sky-500/15 to-purple-500/10 blur-[100px] sm:blur-[160px] pointer-events-none -z-10" />

      {/* ======================================================== */}
      {/* 📱 MOBILE VIEW: NATIVE SMARTPHONE APP MOCKUP (iOS PRO) */}
      {/* ======================================================== */}
      <div className="block md:hidden max-w-[340px] mx-auto">
        {/* iPhone Pro Glass Frame */}
        <div className="relative rounded-[36px] p-2.5 bg-gradient-to-b from-slate-600/50 via-slate-800/30 to-slate-950 border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
          {/* Inner Phone Screen */}
          <div className="rounded-[28px] bg-[#090f18] border border-slate-800/90 overflow-hidden p-3.5 space-y-3">
            {/* iOS Status Bar */}
            <div className="flex items-center justify-between px-2 pt-1 pb-1 text-[10px] text-slate-400 font-mono">
              <span className="font-bold text-white">09:41</span>
              {/* Dynamic Island */}
              <div className="w-16 h-3.5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#2bccaf] animate-ping" />
                <span className="text-[7.5px] text-[#2bccaf] font-bold">LIVE</span>
              </div>
              <div className="flex items-center gap-1 text-slate-300">
                <Wifi className="w-3 h-3" />
                <Battery className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* App Header Banner */}
            <div className="p-3 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 border border-slate-700/80 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-[#2bccaf] font-bold block">INNOVATECH CLOUD</span>
                <span className="text-xs font-bold text-white">Enterprise Mobile Hub</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-mono font-bold">
                ⚡ 14ms
              </span>
            </div>

            {/* iOS 2x2 Metric App Tiles */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 text-[9.5px] mb-0.5">
                  <span>Throughput</span>
                  <Zap className="w-3 h-3 text-[#2bccaf]" />
                </div>
                <div className="text-sm font-black text-white font-mono">150k TPS</div>
                <div className="text-[8.5px] text-emerald-400 font-medium">Auto-Scaled</div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 text-[9.5px] mb-0.5">
                  <span>Sessions</span>
                  <Users className="w-3 h-3 text-sky-400" />
                </div>
                <div className="text-sm font-black text-white font-mono">12,450</div>
                <div className="text-[8.5px] text-sky-400 font-medium">Real-Time Sync</div>
              </div>
            </div>

            {/* Simulated Live Wave Chart */}
            <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-white font-bold">Real-time Traffic Flow</span>
                <span className="text-[#2bccaf] font-mono text-[9px]">99.99% Uptime</span>
              </div>
              <div className="h-12 w-full relative flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 50" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="mob-teal-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2bccaf" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#2bccaf" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,35 Q 40,15 80,25 T 160,10 T 240,20 T 300,5 L 300,50 L 0,50 Z"
                    fill="url(#mob-teal-grad)"
                  />
                  <path
                    d="M 0,35 Q 40,15 80,25 T 160,10 T 240,20 T 300,5"
                    fill="none"
                    stroke="#2bccaf"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* iOS Floating Push Notification Card */}
            <div className="p-2.5 rounded-xl bg-slate-950/90 border border-slate-700 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#2bccaf]/20 flex items-center justify-center text-[#2bccaf]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-white">e-Tax Invoice Generated</div>
                  <div className="text-[8.5px] text-slate-400">Order #8492 • Synced in 0.02s</div>
                </div>
              </div>
              <span className="text-[9px] font-mono text-[#2bccaf] font-bold">DONE</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 💻 DESKTOP VIEW: 3D STUDIO DISPLAY MACBOOK CONSOLE */}
      {/* ======================================================== */}
      <div 
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${isHovered ? 1.015 : 1}, ${isHovered ? 1.015 : 1}, 1)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        className="hidden md:block relative rounded-3xl p-4 bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-slate-950/80 border border-slate-700/60 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
      >
        {/* Specular Glare Reflection */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/5 via-transparent to-[#2bccaf]/10 pointer-events-none" />

        {/* Desktop Screen Canvas */}
        <div className="relative rounded-2xl bg-[#090f18]/95 border border-slate-800/90 overflow-hidden shadow-2xl">
          {/* macOS Window Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0d1522]/90 border-b border-slate-800/80">
            {/* Window Controls */}
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]/90 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]/90 shadow-sm" />
            </div>

            {/* URL Address Bar */}
            <div className="flex items-center gap-2 px-5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-400 font-mono w-80 justify-center shadow-inner">
              <Lock className="w-3 h-3 text-[#2bccaf] shrink-0" />
              <span className="text-slate-300">app.enterprise.io</span>
              <span className="text-slate-500">/live-console</span>
            </div>

            {/* Live Indicator */}
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2bccaf] opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2bccaf]"></span>
              </span>
              <span className="text-[10px] font-mono text-[#2bccaf] font-bold">PROD 99.99%</span>
            </div>
          </div>

          {/* Internal Dashboard Viewport */}
          <div className="p-7 space-y-6">
            {/* Top Stat Row */}
            <div className="grid grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Query Latency</span>
                  <Zap className="w-3.5 h-3.5 text-[#2bccaf]" />
                </div>
                <div className="text-2xl font-black text-white font-mono">14.2 ms</div>
                <div className="text-[10px] text-emerald-400 mt-1">↑ 8.4x Faster</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Active Sessions</span>
                  <Users className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <div className="text-2xl font-black text-white font-mono">12,450</div>
                <div className="text-[10px] text-sky-400 mt-1">Live WebSocket</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Cloud Throughput</span>
                  <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <div className="text-2xl font-black text-white font-mono">150k TPS</div>
                <div className="text-[10px] text-purple-400 mt-1">Auto-Scale Node</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Database Sync</span>
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-2xl font-black text-white font-mono">100% Sync</div>
                <div className="text-[10px] text-emerald-400 mt-1">Zero Loss HA</div>
              </div>
            </div>

            {/* Main Interactive Wave Chart & Event Stream */}
            <div className="grid grid-cols-12 gap-5">
              {/* Left Graph Chart (8 cols) */}
              <div className="col-span-8 p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm font-bold text-white block">Real-time Application Throughput</span>
                    <span className="text-[11px] text-slate-400 font-mono">Edge Compute • SSR Telemetry</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#2bccaf]/10 text-[#2bccaf] font-mono border border-[#2bccaf]/20">
                    Live Stream
                  </span>
                </div>

                {/* Flowing SVG Wave Graph */}
                <div className="h-36 w-full relative flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="hero-grad-teal" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2bccaf" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#2bccaf" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="hero-grad-sky" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,90 Q 60,40 120,65 T 250,30 T 380,55 T 500,20 L 500,120 L 0,120 Z"
                      fill="url(#hero-grad-teal)"
                    />
                    <path
                      d="M 0,90 Q 60,40 120,65 T 250,30 T 380,55 T 500,20"
                      fill="none"
                      stroke="#2bccaf"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 0,105 Q 80,70 160,85 T 320,60 T 500,45"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              </div>

              {/* Right Event Pipeline (4 cols) */}
              <div className="col-span-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2.5">
                <div className="text-sm font-bold text-white mb-2 flex items-center justify-between">
                  <span>Automated Events</span>
                  <span className="text-[10px] font-mono text-emerald-400">ACTIVE</span>
                </div>

                <div className="text-[11px] p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2bccaf] shrink-0" />
                    <span className="truncate">e-Tax Invoice Sent</span>
                  </div>
                  <span className="text-slate-500 font-mono text-[9px] shrink-0">0.02s</span>
                </div>

                <div className="text-[11px] p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2bccaf] shrink-0" />
                    <span className="truncate">Multi-Branch Sync</span>
                  </div>
                  <span className="text-[#2bccaf] font-mono text-[9px] shrink-0">OK</span>
                </div>

                <div className="text-[11px] p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">Payment Webhook</span>
                  </div>
                  <span className="text-sky-400 font-mono text-[9px] shrink-0">200 OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating 3D Badge 1 (Top-Left): Code Architecture Card */}
        <div className="absolute -top-5 -left-5 p-3 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-[0_15px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl flex items-center gap-3 animate-float z-20">
          <div className="w-9 h-9 rounded-xl bg-[#2bccaf]/10 border border-[#2bccaf]/30 flex items-center justify-center text-[#2bccaf]">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="text-left font-mono">
            <div className="text-[11px] font-bold text-white">&lt;Next.js 14 App Router /&gt;</div>
            <div className="text-[9.5px] text-[#2bccaf]">Edge SSR • Server Actions</div>
          </div>
        </div>

        {/* Floating 3D Badge 2 (Bottom-Right): Mobile Push Live Sync Card */}
        <div className="absolute -bottom-5 -right-5 p-3.5 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-[0_15px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl flex items-center gap-3 z-20">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <Smartphone className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5 text-xs font-bold text-white">
              <span>Instant Mobile Push</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="text-[10px] text-slate-400">LINE OA & Webhook Real-time</div>
          </div>
        </div>
      </div>
    </div>
  );
}
