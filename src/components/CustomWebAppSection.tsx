'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Laptop, 
  Layers, 
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function CustomWebAppSection() {
  // Active concept index (0: Multi-Device, 1: Enterprise Dashboard, 2: Layered 3D UI)
  const [activeConcept, setActiveConcept] = useState<number>(0);

  // 3D tilt interaction state
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const projectScrollRef = useRef<HTMLDivElement>(null);
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);

  // Gesture State (Touch + Mouse Drag)
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isMouseDown = useRef<boolean>(false);
  const mouseStartX = useRef<number | null>(null);
  const minSwipeDistance = 35; // minimum swipe distance in px

  const concepts = [
    {
      id: 'responsive',
      label: 'Multi-Device Responsive',
      tag: '📱 100% RESPONSIVE',
      title: 'Responsive บนทุกอุปกรณ์ (Desktop & Mobile)',
      desc: 'แสดงผลสวยงาม คมชัด ใช้งานสะดวกทั้งบนหน้าจอ iMac, MacBook, iPad และสมาร์ทโฟน',
      image: '/images/responsive-devices-mockup.jpg',
      alt: 'InnovaTech Multi-Device Responsive Web Design (iMac, MacBook, iPhone)',
      icon: Laptop
    },
    {
      id: 'dashboard',
      label: 'Enterprise Dashboard & SaaS',
      tag: '📊 CORE OPERATIONS',
      title: 'ระบบ Web Application & Dashboard ธุรกิจ',
      desc: 'ระบบจัดการธุรกิจระดับองค์กร แสดงสถิติ Real-time กราฟวิเคราะห์ และระบบควบคุมข้อมูล',
      image: '/images/enterprise-dashboard-ui.jpg',
      alt: 'InnovaTech Enterprise SaaS Dashboard & Real-time Operations Console',
      icon: BarChart3
    },
    {
      id: 'layered',
      label: 'Layered 3D UI/UX Components',
      tag: '🎨 MODERN UI/UX',
      title: 'สถาปัตยกรรม UI/UX แบบ Glassmorphism 3 มิติ',
      desc: 'ใส่ใจทุกมิติ ออกแบบชิ้นส่วน UI สวยหรู ทันสมัย ตอบสนองการใช้งานอย่างประณีต',
      image: '/images/layered-ui-showcase.jpg',
      alt: 'InnovaTech Layered 3D Glassmorphism UI/UX Web Components',
      icon: Layers
    }
  ];

  // 2 Live Featured Projects
  const projects = [
    {
      id: 1,
      badge: 'ผลงาน #1',
      title: 'HR Matrix Attendance System',
      category: 'Enterprise Attendance & HR Management System',
      desc: 'ระบบลงเวลาทำงาน บันทึกเวลาเข้า-ออก และจัดการข้อมูลพนักงานออนไลน์แบบเรียลไทม์',
      image: '/images/repon.png',
      link: 'https://hrmocup.web.app/'
    },
    {
      id: 2,
      badge: 'ผลงาน #2',
      title: 'Wara Shop 88 E-Commerce',
      category: 'Modern Fashion Store & Online Shop Platform',
      desc: 'ระบบร้านค้าออนไลน์ จัดการสต็อกสินค้า และระบบสั่งซื้อสินค้าที่รองรับมือถือ 100%',
      image: '/images/wara.png',
      link: 'https://warashop88-79470.web.app/'
    }
  ];

  // 🔄 Automatic Smooth Auto-Slide Carousel (Every 4.5 seconds, pauses on hover/drag)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveConcept((prev) => (prev + 1) % concepts.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isHovered, concepts.length]);

  // Touch handlers for mobile finger swipe on concepts
  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      setActiveConcept((prev) => (prev + 1) % concepts.length);
    } else if (distance < -minSwipeDistance) {
      setActiveConcept((prev) => (prev - 1 + concepts.length) % concepts.length);
    }
  };

  // Mouse Drag handlers for desktop drag-to-slide
  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isMouseDown.current || mouseStartX.current === null) return;
    const distance = mouseStartX.current - e.clientX;
    if (distance > minSwipeDistance) {
      setActiveConcept((prev) => (prev + 1) % concepts.length);
    } else if (distance < -minSwipeDistance) {
      setActiveConcept((prev) => (prev - 1 + concepts.length) % concepts.length);
    }
    isMouseDown.current = false;
    mouseStartX.current = null;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
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
    isMouseDown.current = false;
  };

  // Scroll mobile project slide
  const handleProjectScroll = () => {
    if (projectScrollRef.current) {
      const scrollLeft = projectScrollRef.current.scrollLeft;
      const width = projectScrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / (width * 0.85));
      setActiveProjectIdx(Math.min(index, projects.length - 1));
    }
  };

  return (
    <section id="custom-web-apps" className="relative pt-1 sm:pt-4 pb-4 sm:pb-6 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center overflow-hidden">
      {/* Ambient Neon Spotlight Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] sm:w-[750px] h-[300px] bg-gradient-to-b from-[#2bccaf]/20 via-sky-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Header - Apple Style */}
      <div className="space-y-2 sm:space-y-3 max-w-3xl mx-auto flex flex-col items-center mb-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-[#2bccaf]/40 text-xs font-mono font-bold text-[#2bccaf] shadow-[0_0_15px_rgba(43,204,175,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-[#2bccaf]" />
          <span>ENTERPRISE WEB DEVELOPMENT & UI/UX</span>
        </div>

        <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15]">
          Custom Web Applications
        </h2>
      </div>

      {/* ======================================================== */}
      {/* 🌟 3D TILT AUTO-SLIDING + MULTI-WAY MANUAL SLIDE CONTROLS */}
      {/* ======================================================== */}
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative max-w-4xl mx-auto pt-2 pb-2 [perspective:1200px] cursor-grab active:cursor-grabbing select-none group"
      >
        {/* 3D Transform Container */}
        <div 
          style={{
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${isHovered ? 1.015 : 1}, ${isHovered ? 1.015 : 1}, 1)`,
            transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 bg-gradient-to-b from-slate-700/50 via-slate-800/30 to-slate-950/80 border border-slate-700/70 shadow-[0_20px_70px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all overflow-hidden"
        >
          {/* Specular Light Reflection */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-[#2bccaf]/10 pointer-events-none z-10" />

          {/* WebApp Active Image Canvas - Responsive Height Ratio */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-[#060b13] shadow-inner">
            <Image
              key={concepts[activeConcept].id}
              src={concepts[activeConcept].image}
              alt={concepts[activeConcept].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 950px"
              className="object-cover object-center animate-fade-in transition-all duration-700 pointer-events-none"
              priority
            />

            {/* Subtle Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/15 pointer-events-none" />

            {/* Floating Top-Left Tag (Compact on Mobile) */}
            <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-20">
              <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-[#2bccaf]/40 text-[9.5px] sm:text-xs font-mono font-bold text-white shadow-lg">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#2bccaf] animate-pulse" />
                <span>{concepts[activeConcept].tag}</span>
              </div>
            </div>

            {/* Floating Top-Right Auto-Slide Interactive Dots (Compact on Mobile) */}
            <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 p-1 px-2 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 shadow-md">
              {concepts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveConcept(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    activeConcept === idx
                      ? 'w-4 sm:w-5 bg-[#2bccaf] shadow-[0_0_8px_rgba(43,204,175,0.8)]'
                      : 'w-1.5 bg-slate-600/70 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* ⬅️ / ➡️ FLOATING GLASS ARROW BUTTONS */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveConcept((prev) => (prev - 1 + concepts.length) % concepts.length);
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-slate-700/80 hover:border-[#2bccaf] text-slate-300 hover:text-[#2bccaf] backdrop-blur-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110 active:scale-90 shadow-xl cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveConcept((prev) => (prev + 1) % concepts.length);
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-slate-700/80 hover:border-[#2bccaf] text-slate-300 hover:text-[#2bccaf] backdrop-blur-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110 active:scale-90 shadow-xl cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </button>

            {/* 💬 IN-IMAGE EXPLANATORY TEXT BAR */}
            <div className="absolute bottom-0 inset-x-0 p-2 sm:p-4 z-20 text-left pointer-events-none">
              <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 shadow-2xl flex items-center justify-between gap-2 pointer-events-auto">
                <div className="space-y-0.5 overflow-hidden">
                  <h3 className="text-[11px] sm:text-xs md:text-sm font-semibold text-white tracking-wide flex items-center gap-1.5 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2bccaf] shrink-0" />
                    <span className="truncate">{concepts[activeConcept].title}</span>
                  </h3>
                  <p className="hidden sm:block text-[10.5px] sm:text-xs text-slate-300/80 font-light leading-relaxed pl-3">
                    {concepts[activeConcept].desc}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[9.5px] sm:text-[10.5px] font-mono text-slate-400 shrink-0 pr-1">
                  <span className="text-[#2bccaf] font-semibold">0{activeConcept + 1}</span>
                  <span>/ 03</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 🌟 2 FEATURED LIVE PROJECTS: SLIDER ON MOBILE, GRID ON DESKTOP */}
      {/* ======================================================== */}
      <div className="w-full max-w-4xl mx-auto mt-6 sm:mt-10">
        
        {/* Section Header with Mobile Swipe Hint */}
        <div className="flex items-center justify-between px-1 mb-3 sm:mb-5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] sm:text-xs font-mono font-bold text-[#2bccaf] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2bccaf] animate-pulse" />
            <span>FEATURED LIVE PROJECTS (2 PROTOTYPES)</span>
          </div>

          <span className="text-[10px] font-mono text-slate-400 md:hidden flex items-center gap-1">
            <span>ปัดสไลด์</span>
            <span>👉</span>
          </span>
        </div>

        {/* Responsive Container: Horizontal Swipe on Mobile (< md), 2-Col Grid on Desktop (md+) */}
        <div
          ref={projectScrollRef}
          onScroll={handleProjectScroll}
          className="flex md:grid md:grid-cols-2 gap-3.5 sm:gap-6 text-left overflow-x-auto md:overflow-x-visible pb-3 pt-1 px-1 md:p-0 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[84vw] xs:w-[82vw] sm:w-[360px] md:w-auto shrink-0 snap-center group relative rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 bg-gradient-to-b from-slate-900/90 to-[#0a101a] border border-slate-800 hover:border-[#2bccaf]/60 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(43,204,175,0.2)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between block cursor-pointer"
              title={`คลิกเพื่อทดลองใช้งานจริง: ${item.title}`}
            >
              {/* Header inside Card */}
              <div>
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 text-[#2bccaf] border border-[#2bccaf]/30 text-[10px] sm:text-[10.5px] font-mono font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2bccaf]" />
                    <span>{item.badge}</span>
                  </span>

                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-[#2bccaf] flex items-center gap-1 transition-colors">
                    <span>คลิกทดลองใช้</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>

                <h3 className="text-xs sm:text-base font-bold text-white group-hover:text-[#2bccaf] transition-colors mb-0.5 sm:mb-1">
                  {item.title}
                </h3>
                <p className="text-[10.5px] sm:text-xs text-slate-400 leading-relaxed mb-2.5 sm:mb-3">
                  {item.desc}
                </p>
              </div>

              {/* Frameless Floating Mockup Image Container */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-950/60 p-2 flex items-center justify-center border border-slate-800/80 group-hover:border-slate-700 transition-colors">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-1 drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] group-hover:scale-105 group-hover:drop-shadow-[0_15px_30px_rgba(43,204,175,0.3)] transition-all duration-300"
                  sizes="(max-width: 768px) 85vw, 450px"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Swipe Pagination Dots Indicator (< md) */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-2">
          {projects.map((_, idx) => (
            <span
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeProjectIdx === idx ? 'w-4 bg-[#2bccaf]' : 'w-1.5 bg-slate-700'
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
