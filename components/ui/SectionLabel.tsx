export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-muted">
      <span className="h-px w-10 bg-line" />
      <span>{children}</span>
    </div>
  );
}
