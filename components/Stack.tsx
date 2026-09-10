import { stackMatrix } from '@/data/portfolio';
import { GlowCard } from '@/components/ui/GlowCard';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function Stack() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>FULL-STACK SHOULD BE OBVIOUS</SectionLabel>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stackMatrix.map((group) => (
            <GlowCard key={group.label} className="p-5">
              <div className="text-[10px] uppercase tracking-[0.32em] text-acid">{group.label}</div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded border border-line bg-[#0b0b0b] px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
