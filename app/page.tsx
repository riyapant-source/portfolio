import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SystemFlow } from '@/components/SystemFlow';
import { WhatIBuild } from '@/components/WhatIBuild';
import { SelectedWork } from '@/components/SelectedWork';
import { AILab } from '@/components/AILab';
import { SecurityLayer } from '@/components/SecurityLayer';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Stack } from '@/components/Stack';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-bg text-text selection:bg-acid selection:text-bg">
      <Navbar />
      <Hero />
      <SystemFlow />
      <WhatIBuild />
      <SelectedWork />
      <AILab />
      <SecurityLayer />
      <Experience />
      <Projects />
      <Stack />
      <Achievements />
      <Contact />
    </main>
  );
}
