'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, Sparkles, Facebook } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Website',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/70">
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-xs font-semibold text-indigo-400 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ปรึกษาฟรี ไม่มีค่าใช้จ่าย</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                พร้อมที่จะเริ่มโปรเจกต์ใหม่ <br />
                <span className="text-gradient-brand">ไปกับเราแล้วหรือยัง?</span>
              </h2>
              <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
                ประเมินราคาและระยะเวลาให้ฟรีก่อนตัดสินใจ คุยง่าย ให้คำแนะนำตรงจุด ตรงไปตรงมา
              </p>
            </div>

            {/* High-conversion Contact Buttons */}
            <div className="space-y-3.5">
              {/* LINE Official Account */}
              <a
                href="https://lin.ee/h4oaM2D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#06C755]/10 border border-[#06C755]/30 hover:border-[#06C755] hover:bg-[#06C755]/20 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#06C755] flex items-center justify-center text-white shadow-md">
                    <MessageCircle className="w-6 h-6 fill-white text-[#06C755]" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">ช่องทางแนะนำ (เร็วที่สุด)</div>
                    <div className="text-sm sm:text-base font-bold text-white">LINE OA: คลิกเพื่อแอดไลน์</div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#06C755] text-white">
                  แอดไลน์
                </span>
              </a>

              {/* Phone Direct */}
              <a
                href="tel:0924797666"
                className="flex items-center justify-between p-4 rounded-2xl glass-card border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">โทรศัพท์ติดต่อ</div>
                    <div className="text-sm sm:text-base font-bold text-white">092-479-7666</div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  โทรเลย
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:akachaiha@gmail.com"
                className="flex items-center gap-3.5 p-4 rounded-2xl glass-card border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">อีเมล (Email)</div>
                  <div className="text-sm font-semibold text-white">akachaiha@gmail.com</div>
                </div>
              </a>

              {/* Facebook Page */}
              <a
                href="https://www.facebook.com/profile.php?id=61586024618442"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl glass-card border border-slate-800 hover:border-blue-500/50 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Facebook Page</div>
                  <div className="text-sm font-semibold text-white">INNOVATECH รับพัฒนาระบบ</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl glass-card border border-slate-800">
                <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">ที่ตั้ง</div>
                  <div className="text-sm font-semibold text-white">Bangkok, Thailand</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Web Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">ได้รับข้อมูลของคุณแล้ว!</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    ทีมงาน Innovatech จะติดต่อกลับท่านโดยเร็วที่สุด หรือสามารถทักคุยด่วนผ่าน LINE OA ได้ทันที
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href="https://lin.ee/h4oaM2D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl bg-[#06C755] text-sm font-semibold text-white"
                    >
                      ทัก LINE ทันที
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-800 text-sm font-medium text-slate-300 hover:bg-slate-700"
                    >
                      ส่งข้อความใหม่
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">ส่งข้อความเพื่อรับการประเมินราคา</h3>
                    <p className="text-xs text-slate-400">กรอกรายละเอียดคร่าวๆ แล้วทีมงานจะติดต่อกลับพร้อมข้อเสนอแนะ</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">ชื่อของคุณ / ชื่อธุรกิจ *</label>
                      <input
                        type="text"
                        required
                        placeholder="คุณสมชาย หรือ บริษัท ABC"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">เบอร์โทรศัพท์ติดต่อ *</label>
                      <input
                        type="tel"
                        required
                        placeholder="08X-XXX-XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">อีเมล (ถ้ามี)</label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">บริการที่สนใจ</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      >
                        <option value="Custom Website">Custom Website (เว็บไซต์ธุรกิจ / องค์กร)</option>
                        <option value="Sale Page">Starter (Sale Page ปิดการขาย)</option>
                        <option value="Business System">Business System (ERP, POS, สต็อก, พนักงาน)</option>
                        <option value="Web App">Web Application / Internal Portal</option>
                        <option value="UX/UI Design">UX/UI Design & Branding</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">รายละเอียดโปรเจกต์ที่ต้องการ *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="อธิบายสิ่งที่ต้องการ เช่น ต้องการเว็บคลินิกพร้อมระบบจองคิว หรือระบบแจ้งซ่อมภายในองค์กร..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>ส่งข้อมูลเพื่อประเมินราคาฟรี</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
