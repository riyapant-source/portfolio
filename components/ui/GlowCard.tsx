import { cn } from '@/lib/utils';

export function GlowCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('relative overflow-hidden rounded-[1.5rem] border border-line bg-panel/90 p-6 shadow-glow', className)}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(21,92,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(245,255,0,0.08),transparent_30%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
