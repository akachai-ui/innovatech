import React from 'react';

export default function TechStack() {
  const technologies = [
    { name: 'Next.js', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'AI & Data' },
    { name: 'Golang', category: 'High Performance' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Google Cloud', category: 'Cloud' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'OpenAI / Gemini', category: 'AI Engine' },
    { name: 'Docker', category: 'Container' },
  ];

  return (
    <section id="tech" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
            เทคโนโลยีและเครื่องมือที่เราเชี่ยวชาญ
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">
            สร้างบนพื้นฐานเทคโนโลยีระดับ World-Class
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-card border border-slate-800 hover:border-cyan-500/40 hover:scale-105 transition-all duration-200 cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
              <span className="text-sm font-semibold text-white">{tech.name}</span>
              <span className="text-[10px] text-slate-500 font-mono">({tech.category})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
