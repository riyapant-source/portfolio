import { motion } from 'framer-motion';
import { publicProjects } from '@/data/portfolio';
import { GlowCard } from '@/components/ui/GlowCard';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function Projects() {
  return (
    <section id="projects" className="border-y border-line bg-[#090909] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>PUBLIC SYSTEMS</SectionLabel>

        <div className="grid gap-6 md:grid-cols-2">
          {publicProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <GlowCard className="h-full p-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-acid">{project.category}</div>
                <h3 className="mt-5 text-3xl font-black uppercase tracking-[-0.06em] text-text">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-muted">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded border border-line bg-[#0b0b0b] px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-muted">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-blue transition hover:text-brightBlue"
                >
                  GITHUB REPOSITORY ↗
                </a>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
