import React from 'react';
import { Code, Smartphone, Zap, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: Code,
      title: '100% Custom Built (No WordPress / No Wix)',
      desc: 'เขียนโค้ดขึ้นมาใหม่ทั้งหมดตามความต้องการของธุรกิจ ทำให้ระบบมีความยืดหยุ่นสูง ปรับแต่งได้ดั่งใจ ไร้ขีดจำกัด และไม่มีปัญหาปลั๊กอินหนักเครื่องหรือพังเวลามีการอัปเดต',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Smartphone,
      title: 'UX/UI & Mobile-First Approach',
      desc: 'ออกแบบโดยยึดผู้ใช้งานเป็นศูนย์กลาง UI สวยหรู ใช้งานง่าย และรองรับการแสดงผลบนสมาร์ตโฟน แท็บเล็ต และคอมพิวเตอร์อย่างลื่นไหล 100%',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'High Performance & SEO Optimized',
      desc: 'โครงสร้างเว็บไซต์โหลดเร็วระดับเสี้ยววินาที รองรับมาตรฐาน Google Core Web Vitals ทำให้ติดอันดับการค้นหาบน Google ได้ง่ายกว่าและมีโอกาสปิดการขายได้สูงขึ้น',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Secure & Scalable Architecture',
      desc: 'โครงสร้างความปลอดภัยของฐานข้อมูลและสถาปัตยกรรมระดับองค์กร รองรับการขยายตัวของธุรกิจ (Scale-up) ในอนาคตโดยไม่ต้องรื้อระบบใหม่',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="py-24 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-xs font-semibold text-indigo-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ทำไมธุรกิจชั้นนำถึงเลือกเรา</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            เราไม่ใช่แค่คนเขียนโค้ด <br />
            <span className="text-gradient-brand">แต่เราคือพาร์ทเนอร์สร้างความสำเร็จ</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            เราช่วยคิด วางแผน และเลือกใช้เทคโนโลยีที่ดีที่สุด เพื่อแก้ปัญหา เพิ่มประสิทธิภาพการทำงาน และเพิ่มยอดขายให้ธุรกิจของคุณอย่างแท้จริง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl border border-slate-800/90 hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.color} p-[1px] shadow-lg shrink-0`}>
                    <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
