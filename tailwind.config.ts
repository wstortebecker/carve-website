import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Map CSS custom properties
        bg: 'var(--bg)',
        'bg-2': 'var(--bg-2)',
        'bg-3': 'var(--bg-3)',
        'bg-4': 'var(--bg-4)',
        'bg-inv': 'var(--bg-inv)',

        text: 'var(--text)',
        'text-2': 'var(--text-2)',
        'text-3': 'var(--text-3)',
        'text-inv': 'var(--text-inv)',

        accent: 'var(--accent)',
        'accent-h': 'var(--accent-h)',
        'accent-bg': 'var(--accent-bg)',
        'accent-dim': 'var(--accent-dim)',

        positive: 'var(--positive)',
        'positive-bg': 'var(--positive-bg)',
        negative: 'var(--negative)',
        'negative-bg': 'var(--negative-bg)',
        caution: 'var(--caution)',
        'caution-bg': 'var(--caution-bg)',

        border: 'var(--border)',
        'border-2': 'var(--border-2)',
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        logo: ['var(--font-logo)'],
      },
      fontSize: {
        // Hero - Cormorant Garamond italic only
        hero: ['clamp(56px, 7vw, 84px)', { lineHeight: '1.02', letterSpacing: '-0.02em', fontWeight: '300' }],
        // Headlines
        h1: ['clamp(40px, 5vw, 48px)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '400' }],
        h2: ['clamp(32px, 4vw, 36px)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '400' }],
        h3: ['clamp(22px, 3vw, 26px)', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '500' }],
        h4: ['18px', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '500' }],
        // Body
        'body-lg': ['17px', { lineHeight: '1.7', fontWeight: '300' }],
        body: ['15px', { lineHeight: '1.65', fontWeight: '400' }],
        small: ['13px', { lineHeight: '1.55', fontWeight: '400' }],
        // Special
        eyebrow: ['11px', { lineHeight: '1.4', letterSpacing: '0.09em', fontWeight: '500' }],
        metric: ['clamp(40px, 5vw, 56px)', { lineHeight: '1.0', letterSpacing: '-0.05em', fontWeight: '300' }],
        mono: ['11px', { lineHeight: '1.0', fontWeight: '500' }],
      },
      letterSpacing: {
        hero: '-0.02em',
        h1: '-0.025em',
        h2: '-0.02em',
        h3: '-0.015em',
        h4: '-0.01em',
        eyebrow: '0.09em',
        metric: '-0.05em',
      },
      fontWeight: {
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
      },
      spacing: {
        // 8px grid
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },
      maxWidth: {
        content: '1120px',
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '8px',
        md: '14px',
        lg: '16px',
        xl: '20px',
      },
      keyframes: {
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 200ms ease-out',
      },
      transitionDuration: {
        DEFAULT: '120ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease',
      },
    },
  },
  plugins: [],
};

export default config;
