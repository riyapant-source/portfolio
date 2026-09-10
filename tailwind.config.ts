import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        panel: '#080808',
        line: '#202020',
        blue: '#155CFF',
        brightBlue: '#4D7CFF',
        acid: '#F5FF00',
        text: '#F4F4EF',
        muted: '#777777',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(21,92,255,0.35), 0 0 24px rgba(21,92,255,0.2)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      screens: {
        xs: '360px',
      },
    },
  },
  plugins: [],
} satisfies Config;
