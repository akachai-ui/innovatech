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
      <svg viewBox="0 0 180 180" className="w-4 h-4 sm:w-5 sm:h-5 fill-current">
        <mask height="180" id="m_next_v" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
          <circle cx="90" cy="90" fill="white" r="90" />
        </mask>
        <g mask="url(#m_next_v)">
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
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-[#61dafb]" strokeWidth="1.2">
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
      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-[#3178c6] flex items-center justify-center text-white font-black text-[8px] sm:text-[9px] font-mono shadow-sm">
        TS
      </div>
    ),
  },
  {
    name: 'Node.js',
    color: '#68a063',
    svgIcon: (
      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-[#68a063]/20 border border-[#68a063]/40 flex items-center justify-center text-[#68a063]">
        <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </div>
    ),
  },
  {
    name: 'Python',
    color: '#ffde57',
    svgIcon: (
      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-[#3776ab]/20 border border-[#ffde57]/40 flex items-center justify-center text-[#ffde57]">
        <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </div>
    ),
  },
  {
    name: 'Golang',
    color: '#00add8',
    svgIcon: (
      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-[#00add8]/20 border border-[#00add8]/40 flex items-center justify-center text-[#00add8] font-bold text-[9px]">
        Go
      </div>
    ),
  },
  {
    name: 'PostgreSQL',
    color: '#336791',
    svgIcon: (
      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-[#336791]/20 border border-[#336791]/40 flex items-center justify-center text-[#38bdf8]">
        <Database className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </div>
    ),
  },
  {
    name: 'Redis',
    color: '#dc382d',
    svgIcon: (
      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-[#dc382d]/20 border border-[#dc382d]/40 flex items-center justify-center text-[#ff6b6b]">
        <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </div>
    ),
  },
  {
    name: 'Docker',
    color: '#2496ed',
    svgIcon: (
      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-[#2496ed]/20 border border-[#2496ed]/40 flex items-center justify-center text-[#38bdf8]">
        <Cloud className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </div>
    ),
  },
  {
    name: 'AWS Cloud',
    color: '#ff9900',
    svgIcon: (
      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-[#ff9900]/20 border border-[#ff9900]/40 flex items-center justify-center text-[#ff9900]">
        <Cloud className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </div>
    ),
  },
];

export default function TechStackVertical() {
  return (
    <div className="relative h-[340px] sm:h-[420px] w-44 overflow-hidden group select-none">
      {/* Top & Bottom Smooth Fade Gradients */}
      <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-[#080d14] to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#080d14] to-transparent z-20 pointer-events-none" />

      {/* Vertical Scrolling Stream: Top to Bottom (animate-marquee-down) */}
      <div className="flex flex-col gap-5 sm:gap-6 w-full animate-marquee-down group-hover:[animation-play-state:paused]">
        {[...techStack, ...techStack].map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="flex items-center gap-3 px-2 py-1 transition-all duration-300 hover:scale-105 cursor-pointer group/item opacity-60 hover:opacity-100"
          >
            <div className="shrink-0 group-hover/item:scale-115 group-hover/item:drop-shadow-[0_0_12px_rgba(43,204,175,0.7)] transition-all duration-300">
              {tech.svgIcon}
            </div>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-slate-400 group-hover/item:text-white transition-colors whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
