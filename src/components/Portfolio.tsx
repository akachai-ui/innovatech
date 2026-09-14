'use client';

import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'webapp' | 'website' | 'system'>('all');

  const projects = [
    {
      title: 'HR Matrix Attendance',
      category: 'webapp',
      categoryLabel: 'Web Application',
      desc: 'ระบบลงเวลาพนักงานผ่านมือถือ พร้อมระบบระบุพิกัด GPS และถ่ายภาพยืนยันตัวตน มี Dashboard จัดการสำหรับฝ่ายบุคคล (HR Admin)',
      tags: ['GPS Tracking', 'Camera Verification', 'Admin Dashboard', 'Firebase Realtime'],
      url: 'https://hrmocup.web.app/',
      accent: 'from-blue-500 to-cyan-500',
      status: 'Live Demo Available'
    },
    {
      title: 'Srinakharin Dental Clinic',
      category: 'website',
      categoryLabel: 'Custom Website',
      desc: 'เว็บไซต์คลินิกทันตกรรม ออกแบบ Mobile-First สวยงาม สร้างภาพลักษณ์ความน่าเชื่อถือ พร้อมระบบติดต่อและฟังก์ชันนัดหมายจองคิวออนไลน์',
      tags: ['Mobile First', 'SEO Optimized', 'Appointment Booking', 'Clean UI/UX'],
      url: 'https://dentalclinic-demo.web.app/',
      accent: 'from-cyan-500 to-teal-500',
      status: 'Live Demo Available'
    },
    {
      title: 'Maintenance Service System',
      category: 'system',
      categoryLabel: 'Internal System',
      desc: 'ระบบแจ้งซ่อมบำรุงและจัดการทรัพยากรอาคารสถานที่ รองรับการติดตามสถานะงานซ่อมแบบ Real-time เพื่อการบริหารจัดการสาธารณูปโภคอย่างมีประสิทธิภาพ',
      tags: ['Work-Order System', 'Real-time Status', 'Staff Assignment', 'Facility Management'],
      url: 'https://swu-ko.web.app/',
      accent: 'from-amber-500 to-orange-500',
      status: 'Live Demo Available'
    },
    {
      title: 'Wara Shop',
      category: 'webapp',
      categoryLabel: 'E-Commerce Platform',
      desc: 'ร้านค้าออนไลน์ครบวงจรสำหรับสินค้าหลากหลายประเภท พร้อมระบบจัดการสต็อก ออเดอร์ และการชำระเงินที่สะดวกรวดเร็ว',
      tags: ['E-Commerce', 'Order Management', 'Product Catalog', 'Payment Gateway'],
      url: 'https://warashop88-79470.web.app',
      accent: 'from-pink-500 to-rose-500',
      status: 'Live Demo Available'
    },
    {
      title: 'Real Line Network',
      category: 'website',
      categoryLabel: 'Corporate Website',
      desc: 'เว็บไซต์องค์กรสำหรับบริษัท Real Line Network ดีไซน์ทันสมัย เรียบหรู น่าเชื่อถือ นำเสนอโครงสร้างบริการธุรกิจได้อย่างชัดเจน',
      tags: ['Corporate Profile', 'Responsive Web', 'Fast Loading', 'Brand Identity'],
      url: 'https://reallinenetwork-eb6e3.web.app/',
      accent: 'from-indigo-500 to-violet-500',
      status: 'Live Demo Available'
    },
    {
      title: 'Wedding-E-Card',
      category: 'webapp',
      categoryLabel: 'Web Application / Media',
      desc: 'การ์ดแต่งงานออนไลน์รูปแบบวิดีโอและ Interactive ทันสมัย แชร์ง่ายผ่าน Social Media และสร้างความประทับใจให้แขกผู้มีเกียรติ',
      tags: ['Interactive Card', 'Video Integration', 'RSVP Form', 'Social Sharing'],
      url: 'https://weding-d089a.web.app',
      accent: 'from-purple-500 to-fuchsia-500',
      status: 'Live Demo Available'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ผลงานจริงที่พร้อมให้ทดลองใช้งาน</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            ผลงานที่ผ่านมาของเรา <br />
            <span className="text-gradient-brand">Portfolio & Live Demos</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            ทุกผลงานคือการออกแบบและเขียนโค้ดขึ้นใหม่ 100% ตามโจทย์ของลูกค้า กดเข้าชมตัวอย่างระบบจริง (Live Demo) ได้ทันที
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { key: 'all', label: 'ทั้งหมด (All Projects)' },
            { key: 'webapp', label: 'Web Application & E-commerce' },
            { key: 'system', label: 'Internal & Business System' },
            { key: 'website', label: 'Custom & Corporate Website' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                filter === tab.key
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 border border-indigo-500'
                  : 'glass-card text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden hover:border-slate-700 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="p-6 sm:p-7">
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${project.accent} text-white shadow-sm`}>
                    {project.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{project.status}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                >
                  <span>เข้าชมระบบจริง (View Live Demo)</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to LINE */}
        <div className="mt-14 text-center">
          <a
            href="https://lin.ee/h4oaM2D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white font-semibold text-sm shadow-xl shadow-emerald-900/30 hover:scale-105 transition-all"
          >
            <span>ต้องการดูผลงานเฉพาะทางเพิ่มเติม? ทัก LINE หาเรา</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
