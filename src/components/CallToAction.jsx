import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactLink = ({ href, icon: Icon, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-5 py-3 text-slate-200 ring-1 ring-white/10 transition hover:bg-slate-900/80 hover:text-white"
  >
    <Icon className="h-4 w-4 text-cyan-300 transition group-hover:text-cyan-200" />
    <span className="text-sm">{children}</span>
  </a>
);

const CallToAction = () => {
  return (
    <section className="relative mx-auto max-w-5xl px-6 pb-28">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(168,85,247,0.18),transparent)]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/60 to-slate-950/80 p-10 text-center backdrop-blur-xl"
      >
        <h3 className="font-geist text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Let’s build something that feels alive
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-400">
          I’m looking for teams that value thoughtful craft, elegant systems, and playful interfaces. If that’s you, say hello.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ContactLink href="mailto:hello@example.com" icon={Mail}>
            hello@example.com
          </ContactLink>
          <ContactLink href="https://github.com/" icon={Github}>
            GitHub
          </ContactLink>
          <ContactLink href="https://www.linkedin.com/" icon={Linkedin}>
            LinkedIn
          </ContactLink>
        </div>

        <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Your Name</p>
      </motion.div>
    </section>
  );
};

export default CallToAction;
