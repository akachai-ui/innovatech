'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* LINE OA Floating Button */}
      <a
        href="https://lin.ee/h4oaM2D"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white shadow-xl shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm font-semibold group"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
        <MessageCircle className="w-5 h-5 fill-white text-[#06C755]" />
        <span className="hidden sm:inline">ปรึกษาเราทาง LINE</span>
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:0924797666"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-950/40 hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm font-semibold group"
      >
        <Phone className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline">โทร 092-479-7666</span>
      </a>
    </div>
  );
}
