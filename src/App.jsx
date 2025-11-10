import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      {/* Ambient radial glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 [mask-image:radial-gradient(50%_50%_at_50%_40%,black,transparent)]"
      >
        <div className="absolute -top-24 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[46rem] w-[46rem] translate-x-1/4 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <CallToAction />
      </main>
    </div>
  );
}

export default App;
