'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

const servicesDropdown = [
  { href: '/services/performance-marketing', label: 'Performance Marketing', description: 'Meta Ads, Google Ads, Lead Gen, Funnels' },
  { href: '/services/seo', label: 'SEO & Search Growth', description: 'Technical, Local, Content, AEO, GEO' },
  { href: '/services/ai-automation', label: 'AI Automation', description: 'Agents, Voice, WhatsApp, CRM, n8n' },
  { href: '/services/web-development', label: 'Web & Conversion', description: 'Custom Sites, E-commerce, Landing Pages' },
  { href: '/services/creative', label: 'Creative & Content', description: 'Social, Design, Video, Branding' },
  { href: '/services/crm', label: 'CRM & Growth Systems', description: 'Setup, Automation, Analytics, Operations' },
];

const mobileServicesLinks = [
  { href: '/services/performance-marketing', label: 'Performance Marketing' },
  { href: '/services/seo', label: 'SEO & Search Growth' },
  { href: '/services/ai-automation', label: 'AI Automation' },
  { href: '/services/web-development', label: 'Web & Conversion' },
  { href: '/services/creative', label: 'Creative & Content' },
  { href: '/services/crm', label: 'CRM & Growth Systems' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile services dropdown when mobile menu closes
  useEffect(() => {
    if (!isOpen) {
      setMobileServicesOpen(false);
    }
  }, [isOpen]);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[var(--rkd-bg)]/85 backdrop-blur-[12px] border border-[var(--rkd-border)] rounded-none md:rounded-[0.5rem] mx-0 md:mx-4 mt-4 md:mt-0" />
    );
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-400 ease-expo',
        'bg-[var(--rkd-bg)]/85 backdrop-blur-[12px] border border-[var(--rkd-border)]',
        'rounded-none md:rounded-[0.5rem] mx-0 md:mx-4 mt-4 md:mt-0',
        scrolled
          ? 'shadow-[0_1px_0_0_var(--rkd-border)]'
          : ''
      )}
    >
      <nav className="max-w-[80rem] mx-auto px-4 md:px-6 h-full" aria-label="Main navigation">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-[var(--rkd-fg)] hover:opacity-80 transition-opacity duration-300 z-10"
            aria-label="R.K Digital Media - Home"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[var(--rkd-primary)]">
              <span className="font-montserrat font-bold text-[var(--rkd-fg)] text-lg">RK</span>
            </div>
            <span className="hidden sm:block font-montserrat font-semibold text-body-sm tracking-wide">
              R.K DIGITAL MEDIA
            </span>
          </Link>

          {/* Desktop Nav - hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        'flex items-center gap-1 font-outfit text-body-sm font-medium text-[var(--rkd-fg-muted)] uppercase tracking-wider transition-colors duration-300 hover:text-[var(--rkd-fg)]',
                        servicesOpen && 'text-[var(--rkd-primary)]'
                      )}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown className={cn('w-4 h-4 transition-transform duration-300', servicesOpen && 'rotate-180')} aria-hidden="true" />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          className="absolute left-0 top-full mt-2 w-96 md:w-[36rem] bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-2xl p-4 md:p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] z-50"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="grid gap-3 md:grid-cols-2">
                            {servicesDropdown.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="group p-4 rounded-xl bg-[var(--rkd-bg-secondary)] border border-[var(--rkd-border)] hover:border-[var(--rkd-primary)]/30 hover:bg-[var(--rkd-card)] transition-all duration-300"
                              >
                                <h4 className="font-montserrat text-heading-sm font-semibold text-[var(--rkd-fg)] mb-1 group-hover:text-[var(--rkd-primary)] transition-colors">
                                  {service.label}
                                </h4>
                                <p className="text-body-sm text-[var(--rkd-fg-muted)]">{service.description}</p>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'relative font-outfit text-body-sm font-medium text-[var(--rkd-fg-muted)] uppercase tracking-wider transition-colors duration-300 hover:text-[var(--rkd-fg)]',
                      'after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-[var(--rkd-primary)] after:transition-all after:duration-400 after:ease-expo hover:after:w-full'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919871530594"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary hidden sm:inline-flex"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              WhatsApp
            </a>
            <a href="/contact" className="btn-primary">
              <span>Get Audit</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--rkd-fg)] hover:text-[var(--rkd-primary)] transition-colors z-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden absolute top-16 left-0 right-0 z-[60] backdrop-blur-md border-b border-[var(--rkd-border)]"
              style={{ backgroundColor: 'rgba(13, 13, 13, 0.98)' }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.href} className="space-y-2">
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className="w-full flex items-center justify-between font-outfit text-body font-medium text-[var(--rkd-fg-muted)] uppercase tracking-wider transition-colors duration-300 hover:text-[var(--rkd-primary)]"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        >
                          {item.label}
                          <ChevronDown className={cn('w-4 h-4 transition-transform duration-300', mobileServicesOpen && 'rotate-180')} aria-hidden="true" />
                        </button>
                        {mobileServicesOpen && (
                          <div className="mt-3 ml-4 space-y-2 border-l border-[var(--rkd-border)] pl-4">
                            {mobileServicesLinks.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="block py-2 text-body-sm text-[var(--rkd-fg-muted)] hover:text-[var(--rkd-primary)] transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block font-outfit text-body font-medium text-[var(--rkd-fg-muted)] uppercase tracking-wider transition-colors duration-300 hover:text-[var(--rkd-primary)]"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-[var(--rkd-border)] flex flex-col gap-3">
                  <a
                    href="https://wa.me/919871530594"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageSquare className="w-4 h-4" aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a href="/contact" className="btn-primary justify-center" onClick={() => setIsOpen(false)}>
                    <span>Get Audit</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
                <div className="pt-4 border-t border-[var(--rkd-border)] flex flex-wrap gap-4 text-body-sm text-[var(--rkd-fg-subtle)]">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="font-montserrat">R.K Digital Media</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;