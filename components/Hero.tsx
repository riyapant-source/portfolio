'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Terminal } from '@/components/ui/Terminal';

const metricData = [
  { value: 6, label: 'GLOBAL PLANTS' },
  { value: '99.9%', label: 'APPLICATION AVAILABILITY' },
  { value: '90%', label: 'DOCUMENT EXTRACTION ACCURACY' },
  { value: 8, label: 'MICROSERVICES' },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(21,92,255,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(245,255,0,0.08),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 text-[11px] font-medium uppercase tracking-[0.38em] text-muted">
              01 / FULL-STACK × AI × SECURITY
            </div>

            <h1 className="max-w-xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              I BUILD
              <br />
              SOFTWARE
              <br />
              <span className="text-acid">THAT THINKS.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg">
              Full-stack systems, intelligent applications, RAG pipelines and AI security — from architecture to production.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="inline-flex items-center gap-3 rounded border border-line bg-[#0d0d0d] px-5 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-text transition hover:border-blue hover:text-acid">
                EXPLORE THE SYSTEM <ArrowDown size={14} />
              </a>
              <a href="mailto:riya.pant@example.com" className="inline-flex items-center gap-3 rounded border border-line bg-blue px-5 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-white transition hover:brightness-110">
                CONNECT <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="absolute -left-10 top-10 h-20 w-20 rounded-full bg-blue/20 blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-20 w-20 rounded-full bg-acid/15 blur-3xl" />
            <Terminal
              lines={[
                'riya@systems:~$ ./build_intelligence',
                'INPUT documents / db / web',
                'RETRIEVE semantic context',
                'RERANK relevance scoring',
                'GUARD security checks',
                'GENERATE LLM reasoning',
                'EVALUATE RAGAS / validation',
                '✓ intelligence_pipeline completed',
              ]}
            />
          </motion.div>
        </div>

        <div className="mt-16 grid gap-4 border-t border-line pt-8 md:grid-cols-4">
          {metricData.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="rounded border border-line bg-panel/60 p-4"
            >
              <div className="text-3xl font-black tracking-[-0.08em] text-text">{metric.value}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
