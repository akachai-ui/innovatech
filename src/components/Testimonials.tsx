import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote: 'ระบบที่พัฒนามาช่วยลดการใช้กระดาษและลดเวลาการทำงานซ้ำซ้อนของบุคลากรได้จริง การเชื่อมต่อฐานข้อมูลระหว่างแผนกทำได้เสถียรมาก ทีมงานให้คำปรึกษาดีเยี่ยมตั้งแต่เริ่มต้นจนขึ้นระบบ',
      role: 'ผู้บริหารระดับสูง',
      org: 'สถาบันการศึกษาและวิทยาลัย',
      rating: 5,
    },
    {
      quote: 'ดีไซน์เว็บไซต์ออกมาสวย คลีน และดูน่าเชื่อถือเข้ากับภาพลักษณ์คลินิกของเรามากๆ ที่สำคัญคือรองรับการใช้งานบนมือถือได้ลื่นไหล ทำให้ยอดทักจองคิวจากลูกค้าใหม่เพิ่มขึ้นอย่างเห็นได้ชัด',
      role: 'ผู้ก่อตั้งและทันตแพทย์',
      org: 'คลินิกทันตกรรมชั้นนำ',
      rating: 5,
    },
    {
      quote: 'ตั้งแต่เปลี่ยนมาใช้ระบบ POS และระบบจัดการสต็อกที่ทางทีมออกแบบให้ การจัดการสต็อกและดูยอดขายหน้าร้านก็ง่ายขึ้นมาก ข้อมูลอัปเดตแบบ Real-time ตรงเป๊ะ ใช้งานง่ายจนพนักงานหน้าร้านไม่ต้องเรียนรู้นาน',
      role: 'เจ้าของธุรกิจแฟรนไชส์',
      org: 'ธุรกิจค้าปลีก (Retail)',
      rating: 5,
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
            เสียงตอบรับจากผู้ใช้งานจริง
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            ความไว้วางใจจากลูกค้า <br />
            <span className="text-gradient-brand">คือผลงานที่ดีที่สุดของเรา</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between relative group hover:border-slate-700 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-indigo-500/30 mb-2" />
                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60">
                <div className="text-sm font-bold text-white">{rev.role}</div>
                <div className="text-xs text-indigo-400">{rev.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
