import { achievements } from '@/data/portfolio';
import { GlowCard } from '@/components/ui/GlowCard';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function Achievements() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>PROOF OF WORK</SectionLabel>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((achievement, index) => (
            <GlowCard key={achievement} className="p-5">
              <div className="text-[10px] uppercase tracking-[0.3em] text-acid">{String(index + 1).padStart(2, '0')}</div>
              <p className="mt-4 text-lg font-black uppercase tracking-[-0.05em] text-text">{achievement}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
