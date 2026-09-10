import { motion } from 'framer-motion';
import { securityThreats, securityTools } from '@/data/portfolio';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function SecurityLayer() {
  return (
    <section id="security" className="bg-acid px-4 py-20 text-bg sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>INTELLIGENCE NEEDS GUARDRAILS</SectionLabel>
            <h2 className="max-w-lg text-5xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-bg sm:text-6xl">
              INTELLIGENCE
              <br />
              NEEDS
              <br />
              GUARDRAILS.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-7 text-bg/80">
              I treat security as part of the architecture — not something added after the model works.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded border border-black/60 bg-[#080808] p-6 text-text shadow-[0_0_40px_rgba(0,0,0,0.35)]"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-[0.35em] text-acid">THREAT MONITOR</div>
              <div className="rounded-full border border-acid/50 bg-[#101010] px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-acid">
                THREAT LEVEL: LOW
              </div>
            </div>

            <div className="space-y-4">
              {securityThreats.map((threat) => (
                <div key={threat.id} className="flex items-center justify-between border-b border-line pb-3 last:border-b-0 last:pb-0">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted">{threat.id}</div>
                    <div className="mt-2 text-lg font-bold uppercase tracking-[-0.04em]">{threat.title}</div>
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted">{threat.detail}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <div className="mb-4 text-[10px] uppercase tracking-[0.35em] text-acid">SECURITY TOOLCHAIN</div>
              <div className="flex flex-wrap gap-2">
                {securityTools.map((tool) => (
                  <span key={tool} className="rounded border border-line bg-[#101010] px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-text/80">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 rounded border border-black/60 bg-[#0a0a0a] p-6 text-text md:grid-cols-[1.3fr_0.7fr]"
        >
          <div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-acid">AI SECURITY / PURPLE TEAMING</div>
            <p className="mt-4 max-w-2xl text-xl leading-8 text-text">
              &ldquo;Explored AI security, deception and adversarial attack surfaces through hands-on purple teaming challenges.&rdquo;
            </p>
          </div>
          <div className="rounded border border-line bg-[#111111] p-4">
            <div className="text-[10px] uppercase tracking-[0.28em] text-acid">ACHIEVEMENT</div>
            <div className="mt-4 text-2xl font-black uppercase tracking-[-0.06em] text-acid">1ST PRIZE — QUIZ</div>
            <div className="mt-4 text-[10px] uppercase tracking-[0.25em] text-muted">TEAM: TOP 3</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
