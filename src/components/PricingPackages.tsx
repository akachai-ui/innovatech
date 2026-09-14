import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function PricingPackages() {
  const packages = [
    {
      name: 'Starter (Sale Page)',
      tagline: 'เหมาะสำหรับสินค้าชิ้นเดียว หรือแคมเปญการตลาด',
      highlight: false,
      badge: 'Quick Launch',
      ctaText: 'เลือกแพ็กเกจนี้',
      features: [
        'Landing Page 1 หน้า (ความยาวไม่จำกัด)',
        'ออกแบบ Custom Design เฉพาะแบรนด์ (ไม่ใช้เทมเพลต)',
        'ปุ่มเชื่อมต่อ LINE OA / Facebook / โทรออกทันที',
        'โครงสร้างเว็บรองรับ SEO & Mobile-First 100%',
        'ฟรี Domain .com พร้อม SSL Certificate 1 ปี',
        'ความเร็วโหลดระดับเสี้ยววินาที',
      ],
      lineMsg: 'https://lin.ee/h4oaM2D'
    },
    {
      name: 'Business Profile',
      tagline: 'เหมาะสำหรับบริษัทและธุรกิจบริการที่ต้องการความน่าเชื่อถือระดับมืออาชีพ',
      highlight: true,
      badge: 'ยอดนิยมที่สุด (Recommended)',
      ctaText: 'เลือกแพ็กเกจนี้',
      features: [
        'ทุกฟีเจอร์ที่อยู่ในแพ็กเกจ Starter',
        'เพิ่มเมนู About Us / Contact / Services (สูงสุด 5 หน้า)',
        'ติดตั้ง Facebook Pixel & Google Analytics ครบครัน',
        'รองรับระบบหลายภาษา (TH/EN Multilingual)',
        'ส่งมอบ Full Source Code ให้ลูกค้าเป็นเจ้าของ 100%',
        'บริการดูแลความปลอดภัยและเซิร์ฟเวอร์',
      ],
      lineMsg: 'https://lin.ee/h4oaM2D'
    },
    {
      name: 'Custom / System',
      tagline: 'เหมาะสำหรับระบบองค์กร (POS, ERP, Web App, Portal ภายใน)',
      highlight: false,
      badge: 'Enterprise Grade',
      ctaText: 'ติดต่อประเมินราคาฟรี',
      features: [
        'ระบบ Login และจัดการสิทธิ์ผู้ใช้งาน (Role-based Access)',
        'เชื่อมต่อฐานข้อมูล (Database) แบบ Real-time',
        'Dashboard สรุปผล วิเคราะห์ข้อมูล และออกรายงาน',
        'ออกแบบ UX/UI เฉพาะทางสำหรับระบบซับซ้อน',
        'โครงสร้างระบบรองรับการขยายตัว (Scalable Cloud)',
        'อบรมการใช้งานระบบและมี SLA Support ดูแลต่อเนื่อง',
      ],
      lineMsg: 'https://lin.ee/h4oaM2D'
    },
  ];

  return (
    <section id="pricing" className="py-24 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-xs font-semibold text-indigo-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>แพ็กเกจบริการที่โปร่งใส คุ้มค่า</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            เลือกแพ็กเกจที่ตอบโจทย์ธุรกิจคุณ <br />
            <span className="text-gradient-brand">100% Custom Built ทุกผลงาน</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            เขียนโค้ดขึ้นใหม่ทั้งหมด เพื่อความรวดเร็ว ความปลอดภัย และเอกลักษณ์ที่ไม่ซ้ำใคร
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlight
                  ? 'glass-card border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 scale-100 lg:-translate-y-2'
                  : 'glass-card border border-slate-800/90 hover:border-slate-700'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-slate-950 font-bold text-xs shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div>
                {!pkg.highlight && (
                  <span className="inline-block text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60 mb-3">
                    {pkg.badge}
                  </span>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 min-h-[40px]">
                  {pkg.tagline}
                </p>

                <div className="space-y-3.5 pt-6 border-t border-slate-800/80 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={pkg.lineMsg}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                  pkg.highlight
                    ? 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02]'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600'
                }`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
