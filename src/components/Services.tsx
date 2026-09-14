import React from 'react';
import { Globe, Database, Palette, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      badge: 'High Performance & SEO',
      title: 'Custom Website',
      subtitle: 'เว็บไซต์เฉพาะทาง เน้น SEO และความเร็วสูงสุด',
      desc: 'ออกแบบและพัฒนาเว็บองค์กร หรือ Sale Page ขึ้นใหม่ 100% (No WordPress/Wix) ปรับแต่งได้ตามใจ โหลดเร็วทะลุจอ ติดอันดับ Google ได้ง่ายขึ้น',
      features: [
        'ดีไซน์เฉพาะตัว ไม่ใช้เทมเพลตซ้ำใคร',
        'โครงสร้าง SEO-Friendly ถูกต้องตามมาตรฐาน Google',
        'รองรับทุกขนาดหน้าจอ (Mobile-First 100%)',
        'ฟรี Domain .com & SSL Certificate พร้อมใช้งาน'
      ],
      gradient: 'from-blue-600 to-indigo-600',
      lineMsg: 'https://lin.ee/h4oaM2D'
    },
    {
      icon: Database,
      badge: 'Real-time & Cloud Scalable',
      title: 'Business-System & Web App',
      subtitle: 'ระบบ ERP, POS, จัดการสต็อก และระบบภายในองค์กร',
      desc: 'พัฒนาระบบซอฟต์แวร์จัดการธุรกิจที่ซับซ้อน เช่น ระบบสต็อกสินค้า, ระบบลงเวลาพนักงานพร้อม GPS, ระบบแจ้งซ่อม เชื่อมต่อ Database แบบ Real-time',
      features: [
        'ระบบจัดการสิทธิ์ผู้ใช้งาน (Role-based Permissions)',
        'Dashboard แสดงผลกราฟและรายงาน Real-time',
        'เชื่อมต่อ Firebase / Supabase / PostgreSQL ปลอดภัยสูง',
        'ปรับแต่ง Workflow ได้ตรงตามลักษณะธุรกิจของคุณ'
      ],
      gradient: 'from-indigo-600 to-purple-600',
      lineMsg: 'https://lin.ee/h4oaM2D'
    },
    {
      icon: Palette,
      badge: 'User-Centric & Modern',
      title: 'UX/UI Design & Branding',
      subtitle: 'ดีไซน์หน้าจอใช้งานง่าย และภาพลักษณ์แบรนด์พรีเมียม',
      desc: 'ออกแบบประสบการณ์ผู้ใช้งาน (UX/UI) ที่สวยงาม ทันสมัย สื่อสารเอกลักษณ์ของแบรนด์ได้อย่างชัดเจน ช่วยเพิ่ม Conversion Rate และความประทับใจตั้งแต่แรกเห็น',
      features: [
        'วิเคราะห์ User Flow และออกแบบ Interactive Prototype',
        'ดีไซน์ระบบ Design System / Brand Guidelines',
        'ทดสอบความง่ายในการใช้งาน (Usability Testing)',
        'ส่งมอบไฟล์ Figma สมบูรณ์พร้อมนำไปพัฒนาต่อ'
      ],
      gradient: 'from-cyan-600 to-blue-600',
      lineMsg: 'https://lin.ee/h4oaM2D'
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT WE OFFER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            โซลูชันที่ออกแบบมาเพื่อ <br />
            <span className="text-gradient-brand">ยกระดับธุรกิจของคุณ</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            เปลี่ยนไอเดียและความต้องการของคุณให้กลายเป็นระบบดิจิทัลที่ใช้งานได้จริง มีประสิทธิภาพสูง และสร้างผลลัพธ์ที่จับต้องได้
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl border border-slate-800/90 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center shadow-lg text-white`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 text-cyan-300 border border-slate-800">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-400 mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-800/70 mb-8">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={item.lineMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white border border-slate-700/80 hover:border-indigo-500 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 group/btn"
                >
                  <span>ปรึกษาบริการนี้กับเรา</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
