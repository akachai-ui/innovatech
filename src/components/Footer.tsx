import React from 'react';
import Image from 'next/image';
import { MessageCircle, Mail, Phone, MapPin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#05080e] border-t border-slate-800/80 pt-14 sm:pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-12 border-b border-slate-800/70">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white p-1 flex items-center justify-center shadow-md shadow-[#2bccaf]/20 border border-[#2bccaf]/30">
                <Image
                  src="/logo.png"
                  alt="Innovatech Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-black tracking-tight text-white">
                INNOVA<span className="text-[#2bccaf]">TECH</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              เราคือพาร์ทเนอร์ด้านเทคโนโลยีที่ช่วยขับเคลื่อนธุรกิจของคุณด้วยระบบซอฟต์แวร์ระดับ Enterprise ที่ทันสมัย รวดเร็ว และออกแบบเฉพาะตามความต้องการ (100% Custom Built)
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://lin.ee/h4oaM2D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#06C755]/20 border border-[#06C755]/40 flex items-center justify-center text-[#06C755] hover:bg-[#06C755] hover:text-white transition-colors"
                title="LINE OA"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61586024618442"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a
                href="mailto:akachaiha@gmail.com"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">บริการของเรา</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Custom Website Design</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Business System (ERP / POS)</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Internal Work Order & HR App</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">E-commerce Solutions</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">UX/UI Design & Prototyping</a></li>
            </ul>
          </div>

          {/* Col 3: Portfolio links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">ผลงานของเรา</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="https://hrmocup.web.app/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">HR Matrix Attendance</a></li>
              <li><a href="https://warashop88-79470.web.app" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Wara Shop E-commerce</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">ช่องทางการติดต่อ</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://lin.ee/h4oaM2D" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LINE OA: @innovatech
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href="tel:0924797666" className="hover:text-white transition-colors">
                  092-479-7666
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:akachaiha@gmail.com" className="hover:text-white transition-colors">
                  akachaiha@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Bangkok, Thailand</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Innovatech. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://lin.ee/h4oaM2D" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-medium">
              แอดไลน์ปรึกษาฟรี
            </a>
            <span>•</span>
            <a href="tel:0924797666" className="text-indigo-400 hover:text-indigo-300 font-medium">
              โทร 092-479-7666
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
