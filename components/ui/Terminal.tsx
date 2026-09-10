import { motion } from 'framer-motion';

export function Terminal({
  title = 'ai_pipeline.log',
  lines,
}: {
  title?: string;
  lines: string[];
}) {
  return (
    <div className="relative overflow-hidden rounded-[1.25rem] border border-line bg-[#090909] shadow-glow">
      <div className="flex items-center gap-2 border-b border-line bg-[#0b0b0b] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-4 text-[10px] uppercase tracking-[0.2em] text-muted">{title}</span>
      </div>
      <div className="space-y-3 p-4 font-mono text-[11px] text-text/90">
        {lines.map((line, index) => (
          <motion.div
            key={line + index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.25 }}
            className="flex items-center gap-3"
          >
            <span className="text-acid">$</span>
            <span>{line}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
