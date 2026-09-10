'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { GlowCard } from '@/components/ui/GlowCard';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function SelectedWork() {
  return (
    <section className="border-y border-line bg-[#080808] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>SYSTEMS, NOT DEMOS</SectionLabel>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <GlowCard className="grid gap-6 p-6 md:grid-cols-[0.9fr_1.5fr] md:p-8">
                <div className="flex flex-col justify-between gap-5 border-r border-line/70 pr-0 md:pr-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.35em] text-acid">{project.type}</div>
                    <h3 className="mt-4 text-2xl font-black uppercase tracking-[-0.06em] text-text">{project.title}</h3>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-muted">{project.mark}</div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.32em] text-muted">{project.category}</div>
                  <p className="mt-5 max-w-2xl text-lg leading-7 text-muted">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded border border-line bg-[#0b0b0b] px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-text/80">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
