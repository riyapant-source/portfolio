'use client';

import { motion } from 'framer-motion';
import { buildModules } from '@/data/portfolio';
import { GlowCard } from '@/components/ui/GlowCard';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function WhatIBuild() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>WHAT I BUILD</SectionLabel>
        <div className="mb-12 max-w-3xl text-3xl font-black tracking-[-0.05em] text-text sm:text-4xl">
          I like working across the stack — from interfaces and APIs to retrieval pipelines, models, automation and security.
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {buildModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className={module.span || ''}
            >
              <GlowCard className="h-full min-h-[260px]">
                <div className="text-[10px] uppercase tracking-[0.35em] text-acid">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="mt-8 text-2xl font-black uppercase tracking-[-0.06em] text-text">{module.title}</h3>
                <p className="mt-5 text-sm leading-6 text-muted">{module.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {module.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-line bg-[#0b0b0b] px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
