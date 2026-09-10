'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/data/portfolio';
import { useCommandMenu } from '@/hooks/useCommandMenu';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open, setOpen } = useCommandMenu();
  const progress = useScrollProgress();

  useEffect(() => {
    setMobileOpen(false);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-xl font-black tracking-[0.18em] text-text">
            RIYA.
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-[11px] uppercase tracking-[0.25em] text-muted transition hover:text-text">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-acid">
              <span className="inline-block h-2 w-2 rounded-full bg-acid shadow-[0_0_12px_rgba(245,255,0,0.8)]" />
              BUILDING
            </div>
          </div>

          <button
            type="button"
            className="inline-flex rounded border border-line p-2 text-text md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div
          className="absolute left-0 top-full h-0.5 w-full overflow-hidden bg-transparent"
          aria-hidden="true"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue via-brightBlue to-acid"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-line bg-panel md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block border-b border-line px-4 py-3 text-[11px] uppercase tracking-[0.25em] text-muted"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#050505]/80 backdrop-blur-sm"
          >
            <div className="w-[min(720px,90vw)] overflow-hidden rounded-xl border border-line bg-[#0a0a0a] shadow-[0_0_30px_rgba(21,92,255,0.2)]">
              <div className="border-b border-line bg-[#0d0d0d] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                RIYA.SYSTEMS
              </div>
              <div className="space-y-3 p-5 font-mono text-sm text-text">
                {['GO TO WORK', 'GO TO AI LAB', 'GO TO SECURITY', 'GO TO EXPERIENCE', 'GO TO PROJECTS', 'OPEN GITHUB', 'OPEN LINKEDIN'].map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    className="flex w-full items-center justify-between rounded border border-line bg-[#0b0b0b] px-4 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-text transition hover:border-blue hover:text-acid"
                    onClick={() => setOpen(false)}
                  >
                    <span>{cmd}</span>
                    <span className="text-muted">_</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
