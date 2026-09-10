import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <footer className="border-t border-line px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <div className="text-[11px] uppercase tracking-[0.38em] text-muted">HAVE A PROBLEM?</div>
            <h2 className="mt-6 max-w-xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-text sm:text-6xl">
              I&apos;M INTERESTED
              <br />
              IN DIFFICULT
              <br />
              ENGINEERING.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-7 text-muted">
              I&apos;m interested in difficult engineering problems, intelligent systems and ideas that deserve to be built properly.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <a href="https://github.com/riya-pant" target="_blank" rel="noreferrer" className="inline-flex items-center justify-between gap-4 rounded border border-line bg-panel px-5 py-4 text-[11px] uppercase tracking-[0.22em] text-text transition hover:border-blue hover:text-acid">
              <span>GitHub</span>
              <Github size={15} />
            </a>
            <a href="https://www.linkedin.com/in/riya-pant" target="_blank" rel="noreferrer" className="inline-flex items-center justify-between gap-4 rounded border border-line bg-panel px-5 py-4 text-[11px] uppercase tracking-[0.22em] text-text transition hover:border-blue hover:text-acid">
              <span>LinkedIn</span>
              <Linkedin size={15} />
            </a>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-line pt-6 text-[10px] uppercase tracking-[0.28em] text-muted">
          <span>RIYA PANT / FULL-STACK × AI</span>
          <span className="inline-flex items-center gap-2 text-acid">
            BUILDING <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </footer>
  );
}
