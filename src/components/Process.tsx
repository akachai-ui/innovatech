import React from 'react';
import { MessageSquare, LayoutTemplate, Terminal, ShieldCheck, SendHorizontal } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'ปรึกษา & ประเมินราคา',
      desc: 'พูดคุยความต้องการ วัตถุประสงค์ เสนอโซลูชัน และประเมินราคา/กรอบเวลาให้ฟรีโดยไม่มีค่าใช้จ่าย',
      icon: MessageSquare,
      color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10'
    },
    {
      step: '02',
      title: 'ออกแบบ UX/UI',
      desc: 'ออกแบบหน้าตาและ Flow การทำงาน (Mockup & Prototype) ให้เห็นภาพตรงกันก่อนเริ่มลงมือเขียนโค้ด',
      icon: LayoutTemplate,
      color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10'
    },
    {
      step: '03',
      title: 'พัฒนาระบบ (Dev)',
      desc: 'ทีมวิศวกรเริ่มเขียนโค้ดขึ้นใหม่ (100% Custom Built) มีมาตรฐาน พร้อมอัปเดตความคืบหน้าเป็นระยะ',
      icon: Terminal,
      color: 'text-purple-400 border-purple-500/30 bg-purple-500/10'
    },
    {
      step: '04',
      title: 'ทดสอบระบบ (QA)',
      desc: 'ตรวจสอบความเร็ว บั๊ก ความปลอดภัย และการแสดงผลบนอุปกรณ์ต่างๆ ให้สมบูรณ์แบบ 100%',
      icon: ShieldCheck,
      color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
    },
    {
      step: '05',
      title: 'ส่งมอบ & ออนไลน์',
      desc: 'นำระบบขึ้นเซิร์ฟเวอร์จริง ส่งมอบ Source Code ให้เป็นกรรมสิทธิ์ลูกค้า 100% และดูแลหลังการขาย',
      icon: SendHorizontal,
      color: 'text-amber-400 border-amber-500/30 bg-amber-500/10'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
            กระบวนการทำงานของเรา
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            ขั้นตอนการทำงานที่โปร่งใส <br />
            <span className="text-gradient-brand">ตรวจสอบได้ทุกขั้นตอน</span>
          </p>
          <p className="text-slate-400 text-sm sm:text-base">
            ส่งมอบงานตรงเวลา มีคุณภาพ และตอบโจทย์เป้าหมายทางธุรกิจของคุณอย่างแท้จริง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 flex flex-col justify-between transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-700 group-hover:text-indigo-400 transition-colors font-mono">
                      {item.step}
                    </span>
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
