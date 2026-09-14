'use client';

import React from 'react';
import { Cpu, Layers, Database, Cloud, Code2 } from 'lucide-react';

interface TechItem {
  name: string;
  color: string;
  svgIcon: React.ReactNode;
}

const techStack: TechItem[] = [
  {
    name: 'Next.js 14',
    color: '#ffffff',
    svgIcon: (
      <svg viewBox="0 0 180 180" className="w-5 h-5 fill-current">
        <mask height="180" id="m_next" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
          <circle cx="90" cy="90" fill="white" r="90" />
        </mask>
        <g mask="url(#m_next)">
          <circle cx="90" cy="90" fill="black" r="90" stroke="#444" strokeWidth="6" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
          <rect fill="white" height="72" width="12" x="115" y="54" />
        </g>
      </svg>
    ),
  },
  {
    name: 'React',
    color: '#61dafb',
    svgIcon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 fill-none stroke-[#61dafb]" strokeWidth="1.2">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    color: '#3178c6',
    svgIcon: (
      <div className="w-5 h-5 rounded bg-[#3178c6] flex items-center justify-center text-white font-black text-[9px] font-mono shadow-sm">
        TS
      </div>
    ),
  },
  {
    name: 'Node.js',
    color: '#68a063',
    svgIcon: (
      <div className="w-5 h-5 rounded-md bg-[#68a063]/20 border border-[#68a063]/40 flex items-center justify-center text-[#68a063]">
        <Cpu className="w-3.5 h-3.5" />
      </div>
    ),
  },
  {
    name: 'Python',
    color: '#ffde57',
    svgIcon: (
      <div className="w-5 h-5 rounded-md bg-[#3776ab]/20 border border-[#ffde57]/40 flex items-center justify-center text-[#ffde57]">
        <Code2 className="w-3.5 h-3.5" />
      </div>
    ),
  },
  {
    name: 'Golang',
    color: '#00add8',
    svgIcon: (
      <div className="w-5 h-5 rounded-md bg-[#00add8]/20 border border-[#00add8]/40 flex items-center justify-center text-[#00add8] font-bold text-[10px]">
        Go
      </div>
    ),
  },
  {
    name: 'PostgreSQL',
    color: '#336791',
    svgIcon: (
      <div className="w-5 h-5 rounded-md bg-[#336791]/20 border border-[#336791]/40 flex items-center justify-center text-[#38bdf8]">
        <Database className="w-3.5 h-3.5" />
      </div>
    ),
  },
  {
    name: 'Redis',
    color: '#dc382d',
    svgIcon: (
      <div className="w-5 h-5 rounded-md bg-[#dc382d]/20 border border-[#dc382d]/40 flex items-center justify-center text-[#ff6b6b]">
        <Layers className="w-3.5 h-3.5" />
      </div>
    ),
  },
  {
    name: 'Docker',
    color: '#2496ed',
    svgIcon: (
      <div className="w-5 h-5 rounded-md bg-[#2496ed]/20 border border-[#2496ed]/40 flex items-center justify-center text-[#38bdf8]">
        <Cloud className="w-3.5 h-3.5" />
      </div>
    ),
  },
  {
    name: 'AWS Cloud',
    color: '#ff9900',
    svgIcon: (
      <div className="w-5 h-5 rounded-md bg-[#ff9900]/20 border border-[#ff9900]/40 flex items-center justify-center text-[#ff9900]">
        <Cloud className="w-3.5 h-3.5" />
      </div>
    ),
  },
  {
    name: 'Tailwind CSS',
    color: '#38bdf8',
    svgIcon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#38bdf8]">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
  },
];

export default function TechStackSection() {
  return (
    <div className="relative w-full pt-1 pb-1 sm:pb-2 overflow-hidden">
      {/* Subtle Micro Header */}
      <div className="text-center mb-2.5 sm:mb-3.5">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-widest dark:text-slate-500 text-slate-400 uppercase flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] dark:bg-slate-800 bg-slate-300" />
          POWERED BY ENTERPRISE TECH STACK
          <span className="w-8 h-[1px] dark:bg-slate-800 bg-slate-300" />
        </span>
      </div>

      {/* Infinite 3D Glass Marquee Ribbon (Logo + Name Only) */}
      <div className="relative w-full overflow-hidden group">
        {/* Seamless Side Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r dark:from-[#080d14] from-slate-50 to-transparent z-20 pointer-events-none transition-colors" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l dark:from-[#080d14] from-slate-50 to-transparent z-20 pointer-events-none transition-colors" />

        {/* Continuous Flowing Row (Borderless & Frameless) */}
        <div className="flex items-center gap-8 sm:gap-12 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...techStack, ...techStack].map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="inline-flex items-center gap-2.5 px-2 py-1 transition-all duration-300 hover:scale-110 cursor-pointer group/item opacity-75 hover:opacity-100"
            >
              <div className="shrink-0 group-hover/item:scale-115 group-hover/item:drop-shadow-[0_0_14px_rgba(43,204,175,0.7)] transition-all duration-300">
                {tech.svgIcon}
              </div>
              <span className="text-xs sm:text-sm font-medium tracking-wide dark:text-slate-400 text-slate-700 dark:group-hover/item:text-white group-hover/item:text-slate-950 transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
