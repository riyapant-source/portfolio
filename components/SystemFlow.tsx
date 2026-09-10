'use client';

import { motion } from 'framer-motion';
import { systemNodes } from '@/data/portfolio';

export function SystemFlow() {
  return (
    <section id="work" className="border-b border-line px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-[11px] font-medium uppercase tracking-[0.38em] text-muted">SYSTEM ARCHITECTURE</div>

        <div className="relative hidden md:block">
          <div className="flex items-center justify-between gap-4">
            {systemNodes.map((node, index) => (
              <motion.div
                key={node.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className="group relative flex-1"
              >
                <div className="absolute left-1/2 top-full h-8 w-px -translate-x-1/2 bg-line" />
                <div className="relative rounded border border-line bg-panel p-4 text-center shadow-glow transition hover:-translate-y-1 hover:border-blue hover:shadow-[0_0_30px_rgba(21,92,255,0.12)]">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-acid">{node.name}</div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.18em] text-muted group-hover:text-text">{node.tech}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-between px-8 text-[10px] uppercase tracking-[0.4em] text-muted">
            {systemNodes.map((node, idx) => (
              <div key={node.name + idx} className="">{idx === 0 ? '' : idx === systemNodes.length - 1 ? '→' : '→'}</div>
            ))}
          </div>
        </div>

        <div className="space-y-4 md:hidden">
          {systemNodes.map((node, index) => (
            <motion.div
              key={node.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.06, duration: 0.3 }}
              className="rounded border border-line bg-panel p-4"
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-acid">{node.name}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted">{node.tech}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
