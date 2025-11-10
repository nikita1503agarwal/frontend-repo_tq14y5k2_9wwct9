import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallax transforms
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    // Prevent iOS overscroll bounce from causing visual gaps
    document.documentElement.style.backgroundColor = '#0a0f1c';
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: 'radial-gradient(1200px 600px at 50% 10%, rgba(56,189,248,0.10), transparent 60%)' }}
    >
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient veil for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950/80" />

      {/* Narrative copy */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          style={{ y: titleY, opacity: fade }}
          className="font-geist text-5xl font-semibold tracking-tight text-slate-50 sm:text-6xl md:text-7xl"
        >
          From Curiosity to Craft
        </motion.h1>
        <motion.p
          style={{ y: subtitleY, opacity: fade }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
        >
          I build interactive experiences where engineering meets story. Scroll to follow the journey.
        </motion.p>

        <motion.div
          style={{ opacity: fade }}
          className="mt-10 flex items-center gap-3 text-cyan-400"
        >
          <Sparkles className="h-5 w-5" />
          <span className="text-sm uppercase tracking-widest">Chapter One · Spark</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          className="mt-12"
        >
          <a
            href="#skills"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-6 py-3 text-cyan-300 ring-1 ring-cyan-400/30 backdrop-blur transition hover:bg-cyan-500/20 hover:text-cyan-200 hover:ring-cyan-400/50"
          >
            <Rocket className="h-4 w-4" />
            Begin the journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
