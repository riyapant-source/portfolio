import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Riya Pant — Full-Stack × AI Engineer',
  description:
    'Riya Pant builds production-ready full-stack systems, intelligent AI applications, RAG pipelines and secure AI workflows.',
  openGraph: {
    title: 'Riya Pant — Full-Stack × AI Engineer',
    description:
      'Riya Pant builds production-ready full-stack systems, intelligent AI applications, RAG pipelines and secure AI workflows.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
