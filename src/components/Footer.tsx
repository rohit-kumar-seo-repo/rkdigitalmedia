'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

const footerLinks = {
  services: [
    { href: '/services/seo', label: 'Search Engine Optimization' },
    { href: '/services/google-ads', label: 'Google Ads Services' },
    { href: '/services/gbp', label: 'Google Business Profile' },
    { href: '/services/website-design', label: 'Website Design' },
    { href: '/services/social-media', label: 'Social Media Marketing' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact Us' },
  ],
  resources: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/sitemap', label: 'Sitemap' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-neogen-bg-secondary border-t border-neogen-border noise-overlay">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3" aria-label="R.K Digital Media - Home">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neogen-accent">
                <span className="font-mono font-bold text-neogen-fg text-xl">RK</span>
              </div>
              <span className="font-mono font-semibold text-heading-sm tracking-wide">
                R.K Digital Media
              </span>
            </Link>
            <p className="text-body text-neogen-fg-muted max-w-xs">
              Helping businesses in Greater Noida, Noida, and NCR generate real leads, traffic, and sales through result-driven SEO, Google Ads, website development, and local marketing strategies.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neogen-fg-muted hover:text-neogen-accent transition-colors rounded-lg hover:bg-neogen-card"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neogen-fg-muted hover:text-neogen-accent transition-colors rounded-lg hover:bg-neogen-card"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neogen-fg-muted hover:text-neogen-accent transition-colors rounded-lg hover:bg-neogen-card"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neogen-fg-muted hover:text-neogen-accent transition-colors rounded-lg hover:bg-neogen-card"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="font-mono text-heading-sm font-semibold text-neogen-fg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-body text-neogen-fg-muted hover:text-neogen-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-neogen-accent" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="font-mono text-heading-sm font-semibold text-neogen-fg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-body text-neogen-fg-muted hover:text-neogen-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-neogen-accent" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-heading-sm font-semibold text-neogen-fg mb-4">Contact</h3>
            <address className="space-y-4 not-italic">
              <a
                href="https://maps.app.goo.gl/aXxLAXkidrw5g2eJ6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-body text-neogen-fg-muted hover:text-neogen-accent transition-colors duration-300 group"
              >
                <MapPin className="w-5 h-5 text-neogen-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span>5th Ave, Gaur City 1, Sector 4, Greater Noida, Ghaziabad, Uttar Pradesh 201016</span>
              </a>
              <a
                href="tel:+919871530594"
                className="flex items-center gap-3 text-body text-neogen-fg-muted hover:text-neogen-accent transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 text-neogen-accent flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span>+91 98715 30594</span>
              </a>
              <a
                href="mailto:info@rkdigitalmedia.in"
                className="flex items-center gap-3 text-body text-neogen-fg-muted hover:text-neogen-accent transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 text-neogen-accent flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span>info@rkdigitalmedia.in</span>
              </a>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-neogen-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-body-sm text-neogen-fg-subtle font-mono uppercase tracking-wider">
              © 2024 R.K Digital Media. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-body-sm text-neogen-fg-subtle">
              <span className="font-mono">Powered by Rohit Kumar SEO</span>
              <nav aria-label="Legal">
                <ul className="flex flex-wrap gap-4">
                  <li>
                    <Link href="/privacy" className="hover:text-neogen-accent transition-colors">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-neogen-accent transition-colors">Terms of Service</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}