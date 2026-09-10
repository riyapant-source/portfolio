import { motion } from 'framer-motion';
import { experienceItems } from '@/data/portfolio';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>PRODUCTION CHANGES THINGS</SectionLabel>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {experienceItems.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="grid gap-4 rounded border border-line bg-panel p-5 md:grid-cols-[0.9fr_1.4fr]"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-acid">{item.period}</div>
                  <div className="mt-3 text-2xl font-black uppercase tracking-[-0.06em] text-text">{item.company}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-muted">{item.role}</div>
                  <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="rounded border border-line bg-[#0b0b0b] px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-text/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded border border-line bg-panel p-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-acid">SYSTEM TRACE</div>
            <div className="mt-8 space-y-4">
              {['architect', 'ship', 'secure', 'iterate'].map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="flex h-5 w-5 items-center justify-center rounded border border-line text-[9px] text-acid">
                    {index + 1}
                  </div>
                  <div className="h-px flex-1 bg-line" />
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
