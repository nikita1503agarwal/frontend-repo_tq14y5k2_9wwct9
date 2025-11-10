import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, tags, image, link, idx, progress }) => {
  const y = useTransform(progress, [0, 1], [0, -120 * (idx + 1) * 0.2]);
  const opacity = useTransform(progress, [0, 0.2 + idx * 0.1], [0, 1]);

  return (
    <motion.article
      style={{ y, opacity }}
      className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-xl"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      <div className="relative z-10 flex flex-col gap-4 md:flex-row">
        <div className="md:w-2/3">
          <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
          <p className="mt-2 text-slate-400">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300 ring-1 ring-cyan-400/20">
                {t}
              </span>
            ))}
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200"
            >
              Visit project <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
        <div className="md:w-1/3">
          <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-600/30 to-violet-600/30 ring-1 ring-white/10">
            {image ? (
              <img src={image} alt="project visual" className="h-full w-full object-cover opacity-90" />
            ) : (
              <div className="absolute inset-0 grid place-items-center text-slate-300">Parallax Visual</div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(200px_200px_at_70%_30%,rgba(56,189,248,0.25),transparent)]" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const projects = [
    {
      title: 'Cinematic UI Engine',
      description: 'A component toolkit that brings film-like motion language to product interfaces with performance at scale.',
      tags: ['React', 'Framer Motion', 'Design Systems'],
      link: '#',
    },
    {
      title: 'Realtime Collaboration Canvas',
      description: 'WebRTC-powered spatial canvas for multi-user ideation with CRDT syncing and latency compensation.',
      tags: ['WebRTC', 'CRDT', 'FastAPI'],
      link: '#',
    },
    {
      title: 'Generative Portfolio Builder',
      description: 'Prompt to portfolio pipeline that turns your story into an interactive, deployed experience.',
      tags: ['AI', 'Vite', 'Tailwind'],
      link: '#',
    },
  ];

  return (
    <section ref={ref} className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="mb-10 text-center">
        <h2 className="font-geist text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">Work in Motion</h2>
        <p className="mt-3 text-slate-400">Projects that blend engineering rigor with playful interaction.</p>
      </div>

      <div className="relative space-y-6">
        {projects.map((p, idx) => (
          <ProjectCard key={p.title} idx={idx} progress={scrollYProgress} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
