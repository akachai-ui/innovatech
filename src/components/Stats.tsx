import React from 'react';
import { Award, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Stats() {
  const metrics = [
    { value: '150+', label: 'โปรเจกต์ที่ส่งมอบสำเร็จ', desc: 'ทั้งภาครัฐและเอกชนระดับ Enterprise', icon: Award },
    { value: '99.9%', label: 'System Uptime SLA', desc: 'ความเสถียรของระบบคลาวด์และเซิร์ฟเวอร์', icon: TrendingUp },
    { value: '98.5%', label: 'ความพึงพอใจของลูกค้า', desc: 'จากผู้ใช้งานและองค์กรคู่ค้า', icon: Users },
    { value: '10x', label: 'ลดระยะเวลา Deployment', desc: 'ด้วยระบบอัตโนมัติ CI/CD & Cloud Native', icon: CheckCircle2 },
  ];

  return (
    <section id="stats" className="py-20 relative border-y border-slate-800/60 bg-[#0B0F1A]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="text-center sm:text-left p-6 rounded-2xl glass-card border border-slate-800/80">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-200">
                    {metric.value}
                  </span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-400">
                  {metric.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
