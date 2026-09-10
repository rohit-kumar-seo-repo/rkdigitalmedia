'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, TrendingUp, Target } from 'lucide-react';

const stats = [
  { value: '1200+', label: 'Clients Served' },
  { value: '8+', label: 'Years Experience' },
  { value: '98%', label: 'Client Retention' },
  { value: '500+', label: 'Projects Delivered' },
];

const trustBadges = [
  { icon: Shield, label: 'Transparent Reporting' },
  { icon: TrendingUp, label: 'Measurable ROI' },
  { icon: Target, label: 'Local Expertise' },
  { icon: Zap, label: 'Fast Execution' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden noise-overlay grid-pattern">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32">
        {/* Top branding bar */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap items-center gap-4 md:gap-8 text-caption font-mono uppercase tracking-widest text-neogen-fg-subtle">
            <span>RK-001.2024 / GREATER NOIDA IST ONLINE</span>
            <span className="hidden sm:inline">//</span>
            <span>08.YRS · LOCAL.FIRST</span>
            <span className="hidden sm:inline">//</span>
            <span className="text-neogen-accent">SCROLL ↓</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-8 md:mb-12 max-w-4xl"
        >
          <p className="font-mono text-neogen-accent text-heading-sm uppercase tracking-wider mb-6 gradient-text-accent">
            Scaling Local Businesses, Daily.
          </p>
          <h1 className="font-mono font-semibold text-display-xl md:display-md text-neogen-fg leading-[1.05] tracking-tight">
            Digital Marketing Agency in{' '}
            <span className="gradient-text-accent">Greater Noida</span>{' '}
            That Delivers Real Growth
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <p className="text-body-lg text-neogen-fg-muted font-sans leading-relaxed">
            One partner. Full growth stack. SEO, Google Ads, GMB optimization, and website development — engineered for local dominance in Noida, Greater Noida & NCR.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mb-16 md:mb-20 flex flex-col sm:flex-row gap-4"
        >
          <Link href="/contact" className="btn-primary group w-fit">
            <span>Free Strategy Audit</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <a
            href="https://wa.me/919871530594"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group w-fit"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            WhatsApp Us
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mb-16 md:mb-20 flex flex-wrap gap-4"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 px-4 py-2 bg-neogen-card border border-neogen-border rounded-xl text-body-sm text-neogen-fg-muted"
            >
              <badge.icon className="w-4 h-4 text-neogen-accent" aria-hidden="true" />
              <span className="font-mono uppercase tracking-wider">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="metric-value mb-1">{stat.value}</div>
              <div className="metric-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="flex flex-col items-center gap-2 text-neogen-fg-subtle">
          <span className="font-mono text-caption uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            className="w-1 h-6 bg-neogen-accent/30 rounded-full overflow-hidden"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="w-full h-full bg-neogen-accent"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}