'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, ArrowRight, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const footerNav = {
  Services: [
    { label: 'Performance Marketing', href: '/services/performance-marketing' },
    { label: 'SEO & Search Growth', href: '/services/seo' },
    { label: 'AI Automation', href: '/services/ai-automation' },
    { label: 'Web & Conversion', href: '/services/web-development' },
    { label: 'Creative & Content', href: '/services/creative' },
    { label: 'CRM & Growth Systems', href: '/services/crm' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'Process', href: '/process' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/rkdigitalmedia', label: 'R.K Digital Media on Facebook' },
  { icon: Instagram, href: 'https://instagram.com/rkdigitalmedia', label: 'R.K Digital Media on Instagram' },
  { icon: Twitter, href: 'https://twitter.com/rkdigitalmedia', label: 'R.K Digital Media on Twitter' },
  { icon: Youtube, href: 'https://youtube.com/@rkdigitalmedia', label: 'R.K Digital Media on YouTube' },
];

export function Footer() {
  return (
    <footer className="relative bg-[var(--rkd-bg)] border-t border-[var(--rkd-border)] noise-overlay">
      <div className="max-w-[80rem] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        {/* Top Section */}
        <div className="grid lg:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 text-[var(--rkd-fg)] hover:opacity-80 transition-opacity duration-300 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--rkd-primary)]">
                <span className="font-montserrat font-bold text-[var(--rkd-fg)] text-xl">RK</span>
              </div>
              <span className="font-montserrat font-semibold tracking-wide">R.K DIGITAL MEDIA</span>
            </Link>
            <p className="text-body text-[var(--rkd-fg-muted)] leading-relaxed mb-6 max-w-xs">
              Scaling local businesses, daily. One system for SEO, Google Ads, GMB, and web development — engineered for Greater Noida & NCR.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--rkd-card)] border border-[var(--rkd-border)] flex items-center justify-center text-[var(--rkd-fg-muted)] hover:text-[var(--rkd-primary)] hover:border-[var(--rkd-primary)]/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav className="lg:col-span-1">
            <h4 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', lineHeight: '1.4' }}>Services</h4>
            <ul className="space-y-3">
              {footerNav.Services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-[var(--rkd-fg-muted)] hover:text-[var(--rkd-primary)] transition-colors duration-300 font-outfit font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav className="lg:col-span-1">
            <h4 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', lineHeight: '1.4' }}>Company</h4>
            <ul className="space-y-3">
              {footerNav.Company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-[var(--rkd-fg-muted)] hover:text-[var(--rkd-primary)] transition-colors duration-300 font-outfit font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal + Contact */}
          <div className="lg:col-span-1">
            <h4 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', lineHeight: '1.4' }}>Legal</h4>
            <ul className="space-y-3 mb-10">
              {footerNav.Legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-[var(--rkd-fg-muted)] hover:text-[var(--rkd-primary)] transition-colors duration-300 font-outfit font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', lineHeight: '1.4' }}>Contact</h4>
            <address className="not-italic text-body-sm text-[var(--rkd-fg-muted)] space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--rkd-primary)] flex-shrink-0" aria-hidden="true" />
                <span>5th Ave, Gaur City 1, Sector 4, Greater Noida, Ghaziabad, UP 201016</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--rkd-primary)] flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919871530594" className="hover:text-[var(--rkd-primary)] transition-colors">+91 98715 30594</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--rkd-primary)] flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@rkdigitalmedia.in" className="hover:text-[var(--rkd-primary)] transition-colors">info@rkdigitalmedia.in</a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--rkd-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-[var(--rkd-fg-subtle)]">
            © 2026 R.K Digital Media. All rights reserved.
          </p>
          <p className="text-body-sm text-[var(--rkd-fg-subtle)]">
            Built by R.K Digital Media
          </p>
          <a
            href="#"
            className="w-10 h-10 rounded-xl bg-[var(--rkd-card)] border border-[var(--rkd-border)] flex items-center justify-center text-[var(--rkd-fg-muted)] hover:text-[var(--rkd-primary)] hover:border-[var(--rkd-primary)]/30 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;