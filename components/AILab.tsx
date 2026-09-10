import { motion } from 'framer-motion';
import { experimentalModules } from '@/data/portfolio';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function AILab() {
  return (
    <section id="ai-lab" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>WHERE I EXPERIMENT</SectionLabel>
        <div className="mb-10 max-w-2xl text-3xl font-black tracking-[-0.05em] text-text sm:text-4xl">
          Not everything needs to become a product. Some things are worth breaking, measuring and understanding first.
        </div>

        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
          {experimentalModules.map((module, index) => (
            <motion.div
              key={module}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              whileHover={{ y: -4, borderColor: '#155CFF' }}
              className="group relative overflow-hidden rounded border border-line bg-panel p-5 transition-colors"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="mb-8 text-[10px] uppercase tracking-[0.25em] text-acid">/ / module</div>
              <div className="text-lg font-black uppercase tracking-[-0.05em] text-text">{module}</div>
              <div className="mt-8 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted group-hover:block">
                &gt; experiment.run()<br />
                &gt; retrieval_mode = &quot;hybrid&quot;<br />
                &gt; status = PASS
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
