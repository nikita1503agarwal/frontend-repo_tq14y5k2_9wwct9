import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Cloud, Component as ComponentIcon } from 'lucide-react';

const skills = [
  { icon: Code2, label: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind'] },
  { icon: Cpu, label: 'Backend', items: ['FastAPI', 'Node', 'Auth', 'Testing'] },
  { icon: Cloud, label: 'Cloud', items: ['Docker', 'CI/CD', 'Vercel', 'Fly.io'] },
  { icon: ComponentIcon, label: 'Design', items: ['UX', 'Motion', 'Accessibility', '3D'] },
];

const SkillOrb = ({ delay, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 24, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.4 }}
    className="group relative rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-xl"
  >
    {/* micro glow */}
    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/5 to-violet-600/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
    {children}
  </motion.div>
);

const Skills = () => {
  const cards = useMemo(() => skills, []);

  return (
    <section id="skills" className="relative z-10 mx-auto max-w-7xl px-6 py-28">
      <div className="mb-10 text-center">
        <h2 className="font-geist text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">Craft in Motion</h2>
        <p className="mt-3 text-slate-400">Interactive skills mapped to real-world impact.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((s, idx) => (
          <SkillOrb key={s.label} delay={idx * 0.08}>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <s.icon className="h-5 w-5 text-cyan-300" />
                  <h3 className="font-medium text-slate-100">{s.label}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-800/60 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/5 transition group-hover:bg-slate-800/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-cyan-500/30 to-fuchsia-500/30 ring-1 ring-white/10" />
            </div>
            {/* progress dots */}
            <div className="mt-6 flex items-center gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="h-1.5 w-6 rounded-full bg-slate-700"
                  whileHover={{ scale: 1.05 }}
                  initial={{ width: 16 + i * 4 }}
                />
              ))}
            </div>
          </SkillOrb>
        ))}
      </div>
    </section>
  );
};

export default Skills;
