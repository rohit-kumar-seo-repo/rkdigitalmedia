/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Neogen Design System */
        'rkd': {
          'bg': '#0d0d0d',
          'bg-secondary': '#111111',
          'bg-tertiary': '#1a1a1a',
          'card': '#141414',
          'card-hover': '#1a1a1a',
          'border': '#1f1f1f',
          'border-hover': '#2a2a2a',
          'fg': '#f0eeee',
          'fg-muted': '#6b6b6b',
          'fg-subtle': '#6b6b6b',
          'primary': '#e8282b',
          'primary-hover': '#d42225',
          'primary-muted': 'rgba(232, 40, 43, 0.12)',
          'primary-glow': 'rgba(232, 40, 43, 0.3)',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(2.125rem, 6vw, 4.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'footer-cta': ['clamp(2.125rem, 9vw, 9rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'h2': ['clamp(1.875rem, 3.75vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h3': ['clamp(1.25rem, 1.75vw, 1.625rem)', { lineHeight: '1.25' }],
        'stat': ['clamp(2.25rem, 4.2vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'lead': ['clamp(1rem, 1.2vw, 1.125rem)', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.6' }],
        'meta': ['0.625rem', { lineHeight: '1.5', letterSpacing: '0.15em' }],
        'meta-lg': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        'pill': '9999px',
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up-small': 'slideUpSmall 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee 30s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
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
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(232, 40, 43, 0.18) 0%, transparent 70%), #0d0d0d',
        'marquee-bg': 'linear-gradient(to right, var(--card), var(--card))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        'grid-pattern': "linear-gradient(rgba(232,40,43,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,40,43,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-60': '60px 60px',
      },
    },
  },
  plugins: [],
}