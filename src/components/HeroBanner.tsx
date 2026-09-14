import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Interactive3DCloud from './Interactive3DCloud';
import TechStackSection from './TechStackSection';

export default function HeroBanner() {
  return (
    <section className="relative flex flex-col items-center pt-20 pb-2 sm:pt-24 sm:pb-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center overflow-hidden">
      {/* Ambient Neon & Prismatic Aura Glow behind logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[750px] md:w-[950px] h-[350px] sm:h-[550px] bg-gradient-to-tr from-[#2bccaf]/22 via-sky-500/18 to-purple-500/10 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Main Hero Content */}
      <div className="relative z-10 space-y-2 sm:space-y-3.5 max-w-5xl mx-auto flex flex-col items-center">
        {/* Interactive 3D Prismatic Glass Full Brand Logo (Touch & Tilt enabled) */}
        <Interactive3DCloud />

        {/* Main Headline */}
        <h1 className="text-[24px] xs:text-[27px] sm:text-4xl md:text-5xl lg:text-[48px] font-black dark:text-white text-slate-900 leading-[1.2] tracking-tight px-1 transition-colors">
          Upgrade Your Legacy Systems <br className="hidden sm:inline" />
          to{' '}
          <span className="bg-gradient-to-r from-[#2bccaf] via-teal-400 to-sky-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(43,204,175,0.45)]">
            Seamless Platforms.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xs sm:text-base dark:text-slate-300 text-slate-600 max-w-[320px] sm:max-w-2xl mx-auto font-normal leading-relaxed px-2 transition-colors">
          We transform complex backend operations into effortless management tools, <br className="hidden sm:inline" />
          delivering the ultimate digital experience for your users.
        </p>

        {/* Call to Action Button (Apple Sleek Pill Style) */}
        <div className="flex items-center justify-center pt-1 w-full">
          <a
            href="https://lin.ee/h4oaM2D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#2bccaf] hover:bg-[#20a890] text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(43,204,175,0.35)] hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-950 text-[#2bccaf]" />
            <span>ติดต่อเรา</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
          </a>
        </div>
      </div>

      {/* Seamless Tech Stack Ribbon at the bottom */}
      <div className="w-full relative z-10 pt-4 sm:pt-6">
        <TechStackSection />
      </div>
    </section>
  );
}
