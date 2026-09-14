import React from 'react';
import { Cpu, ShieldCheck, Zap, Cloud, Rocket, Headset, CheckCircle } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Cpu,
      title: 'AI & Machine Learning Integration',
      description: 'เชื่อมต่อ AI และ Large Language Models เข้ากับเวิร์กโฟลว์ธุรกิจ เพื่อเพิ่มประสิทธิภาพและลดต้นทุนการดำเนินงาน',
      color: 'from-cyan-500 to-blue-600',
      badge: 'Smart Automation'
    },
    {
      icon: Cloud,
      title: 'Modern Cloud Architecture',
      description: 'ออกแบบระบบคลาวด์ระดับองค์กร (AWS, Google Cloud, Azure) รองรับ Microservices และ High Availability',
      color: 'from-indigo-500 to-purple-600',
      badge: 'Cloud Native'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise-Grade Security',
      description: 'ความปลอดภัยข้อมูลขั้นสูงตามมาตรฐานสากล ISO/IEC 27001, PDPA Compliance และระบบตรวจจับภัยคุกคามแบบ Real-time',
      color: 'from-emerald-500 to-teal-600',
      badge: 'Zero-Trust'
    },
    {
      icon: Zap,
      title: 'High-Speed & Scalability',
      description: 'สถาปัตยกรรมซอฟต์แวร์ที่ออกแบบเพื่อความเร็ว รองรับปริมาณคำขอพร้อมกันหลายแสนรายการโดยไม่มีสะดุด',
      color: 'from-amber-500 to-orange-600',
      badge: 'Ultra Fast'
    },
    {
      icon: Rocket,
      title: 'Agile & Rapid Time-to-Market',
      description: 'กระบวนการส่งมอบงานแบบ Agile พัฒนาฟีเจอร์ได้รวดเร็ว ตรวจสอบได้ทุกสเต็ป และปรับเปลี่ยนตามความต้องการได้ทันที',
      color: 'from-pink-500 to-rose-600',
      badge: 'Fast Delivery'
    },
    {
      icon: Headset,
      title: '24/7 Dedicated Support',
      description: 'ทีมวิศวกรซอฟต์แวร์พร้อมเฝ้าระวังและให้คำปรึกษาตลอด 24 ชั่วโมง เพื่อให้ธุรกิจของคุณทำงานได้อย่างราบรื่นที่สุด',
      color: 'from-violet-500 to-indigo-600',
      badge: 'Always Online'
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
            จุดเด่นและขีดความสามารถ
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            เหตุผลที่องค์กรชั้นนำเลือก <br className="hidden sm:inline" />
            <span className="text-gradient-brand">InnovaTech Solutions</span>
          </p>
          <p className="text-slate-400 text-sm sm:text-base">
            เราผสมผสานเทคโนโลยีที่ดีที่สุดเข้ากับความเข้าใจทางธุรกิจ เพื่อสร้างสรรค์ผลงานที่สร้างมูลค่าจริงให้องค์กรของคุณ
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="glass-card p-7 rounded-2xl border border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-300 group hover:-translate-y-1 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.color} p-[1px] shadow-lg`}>
                      <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-medium text-slate-400 group-hover:text-indigo-400 transition-colors">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>รองรับการปรับแต่งเฉพาะสำหรับองค์กร</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
