'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, MessageSquare, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-neogen-bg/80 backdrop-blur-md border-b border-neogen-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full" />
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-400 ease-expo ${
        scrolled
          ? 'bg-neogen-bg/95 backdrop-blur-md border-b border-neogen-border shadow-[0_1px_0_0_#2a2a2a]'
          : 'bg-neogen-bg/80 backdrop-blur-md border-b border-neogen-border/50'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 h-full" aria-label="Main navigation">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-neogen-fg hover:opacity-80 transition-opacity duration-300 z-10"
            aria-label="R.K Digital Media - Home"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-neogen-accent">
              <span className="font-mono font-bold text-neogen-fg text-lg">RK</span>
            </div>
            <span className="hidden sm:block font-mono font-semibold text-body-sm tracking-wide">
              R.K Digital Media
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative font-mono text-body-sm font-medium text-neogen-fg-muted uppercase tracking-wider transition-colors duration-300 hover:text-neogen-fg after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-neogen-accent after:transition-all after:duration-400 after:ease-expo hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://wa.me/919871530594"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary hidden sm:inline-flex"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              WhatsApp
            </Link>
            <Link href="/contact" className="btn-primary">
              <span>Get Audit</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neogen-fg hover:text-neogen-accent transition-colors z-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 right-0 bg-neogen-bg/98 backdrop-blur-md border-b border-neogen-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block font-mono text-body font-medium text-neogen-fg-muted uppercase tracking-wider transition-colors duration-300 hover:text-neogen-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-neogen-border flex flex-col gap-3">
              <Link
                href="https://wa.me/919871530594"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary justify-center"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </Link>
              <Link href="/contact" className="btn-primary justify-center">
                <span>Get Audit</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="pt-4 border-t border-neogen-border flex flex-wrap gap-4 text-body-sm text-neogen-fg-subtle">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <MapPin className="w-4 h-4 text-neogen-accent" aria-hidden="true" />
                <span>5th Ave, Gaur City 1, Sector 4, Greater Noida</span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Phone className="w-4 h-4 text-neogen-accent" aria-hidden="true" />
                <a href="tel:+919871530594" className="hover:text-neogen-accent transition-colors">+91 98715 30594</a>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}