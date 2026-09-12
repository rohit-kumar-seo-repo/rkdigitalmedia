// R.K Digital Media Design System
// Matches Neogen's sophistication level with R.K Digital Media brand identity

export const colors = {
  // Dark theme (primary)
  dark: {
    bg: '#0a0a0a',
    bgSecondary: '#111111',
    bgTertiary: '#1a1a1a',
    card: '#141414',
    cardHover: '#1c1c1c',
    border: '#2a2a2a',
    borderHover: '#3a3a3a',
    fg: '#ffffff',
    fgMuted: '#a3a3a3',
    fgSubtle: '#737373',
    accent: '#ff6b35', // R.K Digital Media orange
    accentHover: '#e85d2d',
    accentMuted: 'rgba(255, 107, 53, 0.12)',
    accentGlow: 'rgba(255, 107, 53, 0.25)',
  },
  // Light theme (if needed)
  light: {
    bg: '#ffffff',
    bgSecondary: '#fafafa',
    bgTertiary: '#f5f5f5',
    card: '#ffffff',
    cardHover: '#fafafa',
    border: '#e5e5e5',
    borderHover: '#d4d4d4',
    fg: '#0a0a0a',
    fgMuted: '#525252',
    fgSubtle: '#737373',
    accent: '#ff6b35',
    accentHover: '#e85d2d',
    accentMuted: 'rgba(255, 107, 53, 0.12)',
    accentGlow: 'rgba(255, 107, 53, 0.25)',
  },
} as const;

export const typography = {
  fontFamilies: {
    mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
    sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
    display: ['Space Grotesk', 'system-ui', 'sans-serif'],
  },
  sizes: {
    displayXl: 'clamp(3.5rem, 8vw, 7rem)',
    displayLg: 'clamp(2.5rem, 5vw, 4.5rem)',
    displayMd: 'clamp(2rem, 4vw, 3rem)',
    displaySm: 'clamp(1.5rem, 3vw, 2.25rem)',
    headingXl: 'clamp(1.75rem, 3vw, 2.5rem)',
    headingLg: 'clamp(1.5rem, 2.5vw, 2rem)',
    headingMd: 'clamp(1.25rem, 2vw, 1.5rem)',
    headingSm: 'clamp(1.125rem, 1.5vw, 1.25rem)',
    bodyLg: '1.125rem',
    body: '1rem',
    bodySm: '0.875rem',
    caption: '0.75rem',
    label: '0.75rem',
    metadata: '0.6875rem',
  },
  lineHeights: {
    tight: 1.05,
    snug: 1.15,
    normal: 1.5,
    relaxed: 1.7,
    loose: 1.8,
  },
  letterSpacing: {
    tightest: '-0.04em',
    tighter: '-0.03em',
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  18: '4.5rem',
  20: '5rem',
  22: '5.5rem',
  24: '6rem',
  26: '6.5rem',
  30: '7.5rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  full: '9999px',
} as const;

export const transitions = {
  fast: '150ms cubic-bezier(0.16, 1, 0.3, 1)',
  normal: '300ms cubic-bezier(0.16, 1, 0.3, 1)',
  slow: '500ms cubic-bezier(0.16, 1, 0.3, 1)',
  slower: '700ms cubic-bezier(0.16, 1, 0.3, 1)',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  accent: '0 0 30px -10px rgba(255, 107, 53, 0.4)',
  accentLg: '0 0 60px -15px rgba(255, 107, 53, 0.3)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  modal: 30,
  popover: 40,
  tooltip: 50,
  toast: 60,
  cursor: 9999,
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const container = {
  maxWidth: '80rem',
  padding: '1.5rem',
} as const;

// Section numbering utility
export const sectionNumbers = [
  '// 01',
  '// 02',
  '// 03',
  '// 04',
  '// 05',
  '// 06',
  '// 07',
  '// 08',
  '// 09',
  '// 10',
] as const;

// Animation keyframes
export const animations = {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  slideUp: {
    '0%': { opacity: '0', transform: 'translateY(30px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  slideUpSmall: {
    '0%': { opacity: '0', transform: 'translateY(16px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  scaleIn: {
    '0%': { opacity: '0', transform: 'scale(0.95)' },
    '100%': { opacity: '1', transform: 'scale(1)' },
  },
  borderGlow: {
    '0%, 100%': { boxShadow: '0 0 0 0 transparent' },
    '50%': { boxShadow: '0 0 30px -10px rgba(255, 107, 53, 0.4)' },
  },
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
  },
  marquee: {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
} as const;

// Easing curves
export const easings = {
  expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
  expoIn: 'cubic-bezier(0.7, 0, 0.84, 0)',
  expoOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  expoInOut: 'cubic-bezier(0.87, 0, 0.13, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

// Noise texture SVG
export const noiseTexture = `data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E`;

// Grid pattern CSS
export const gridPattern = `
  background-image: 
    linear-gradient(rgba(255,107,53,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,107,53,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
`;

// Component class names (for consistency)
export const components = {
  section: 'relative py-20 md:py-32 lg:py-36',
  container: 'max-w-[80rem] mx-auto px-4 md:px-6 lg:px-8',
  sectionHeader: 'mb-16 md:mb-24 max-w-3xl',
  sectionNumber: 'font-mono text-[var(--color-fg-subtle)] text-caption uppercase tracking-widest mb-4',
  sectionTitle: 'font-mono font-medium tracking-tight text-[var(--color-fg)]',
  sectionTitleAccent: 'gradient-text-accent',
  card: 'relative bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 transition-all duration-500 ease-expo hover:bg-[var(--color-card-hover)] hover:border-[var(--color-border-hover)] hover:shadow-xl',
  cardInteractive: 'cursor-pointer hover:scale-[1.01] hover:-translate-y-1',
  btnPrimary: 'relative inline-flex items-center justify-center gap-2 px-8 py-4 text-body-sm font-medium font-mono uppercase tracking-wider text-white bg-[var(--color-accent)] rounded-xl transition-all duration-400 ease-expo hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_30px_-5px_rgba(255,107,53,0.5)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]',
  btnSecondary: 'relative inline-flex items-center justify-center gap-2 px-8 py-4 text-body-sm font-medium font-mono uppercase tracking-wider text-[var(--color-fg)] bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl transition-all duration-400 ease-expo hover:bg-[var(--color-card-hover)] hover:border-[var(--color-border-hover)] hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]',
  btnGhost: 'relative inline-flex items-center justify-center gap-2 px-6 py-3 text-body-sm font-medium font-mono uppercase tracking-wider text-[var(--color-fg-muted)] bg-transparent rounded-xl transition-all duration-400 ease-expo hover:text-[var(--color-fg)] hover:bg-[var(--color-accent-muted)] active:scale-[0.98]',
  input: 'w-full px-5 py-4 text-body text-[var(--color-fg)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl placeholder-[var(--color-fg-subtle)] transition-all duration-300 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:outline-none',
  label: 'block mb-2 text-body-sm font-medium text-[var(--color-fg-muted)] font-mono uppercase tracking-wider',
  link: 'inline-flex items-center gap-1 text-[var(--color-accent)] font-medium transition-colors duration-300 hover:text-[var(--color-accent-hover)]',
  metricValue: 'font-mono text-[var(--color-fg)] text-display-lg font-bold tracking-tight',
  metricLabel: 'font-sans text-[var(--color-fg-muted)] text-body-sm uppercase tracking-wider',
  badge: 'inline-flex items-center gap-1.5 px-3 py-1 text-caption font-medium font-mono uppercase tracking-wider text-[var(--color-fg-muted)] bg-[var(--color-accent-muted)] border border-[var(--color-accent)]/20 rounded-full',
  badgeLive: 'text-[var(--color-accent)] border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10',
} as const;