'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Target, MapPin, Layout, Share2, Zap, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    id: 'seo',
    number: '01',
    title: 'Search Engine Optimization',
    description: 'We help your website rank higher on Google for keywords that actually bring leads, not just traffic. Our SEO strategies are designed for long-term growth and local dominance in Noida.',
    icon: Search,
    href: '/services/seo',
    poweredBy: ['Technical SEO', 'Content Strategy', 'Local SEO', 'Link Building'],
    outcomes: ['Higher Rankings', 'Quality Traffic', 'Lead Generation', 'Brand Authority'],
  },
  {
    id: 'google-ads',
    number: '02',
    title: 'Google Ads / PPC Management',
    description: 'We create and manage Google Ads campaigns that deliver quality leads at the lowest possible cost per click while maximizing ROI. Specialists in suspension recovery.',
    icon: Target,
    href: '/services/google-ads',
    poweredBy: ['Search Ads', 'Display Network', 'Shopping Ads', 'Suspension Recovery'],
    outcomes: ['Lower CPC', 'Higher ROAS', 'Quality Leads', 'Account Safety'],
  },
  {
    id: 'gbp',
    number: '03',
    title: 'Google Business Profile Management',
    description: 'We optimize and manage your Google Business Profile to improve visibility on Google Maps, local searches, and drive calls, visits, and enquiries from nearby customers.',
    icon: MapPin,
    href: '/services/gbp',
    poweredBy: ['Profile Optimization', 'Review Management', 'Posts & Updates', 'Local Citations'],
    outcomes: ['Map Pack Ranking', 'More Calls', 'Foot Traffic', 'Trust & Credibility'],
  },
  {
    id: 'website',
    number: '04',
    title: 'Website Design & Development',
    description: 'We build conversion-focused websites that are fast, mobile-responsive, and optimized for SEO. From landing pages to full e-commerce solutions.',
    icon: Layout,
    href: '/services/website-design',
    poweredBy: ['Next.js / WordPress', 'CRO-Focused', 'Mobile-First', 'Speed Optimized'],
    outcomes: ['Higher Conversions', 'Better UX', 'SEO Ready', 'Easy Management'],
  },
  {
    id: 'social',
    number: '05',
    title: 'Social Media Marketing',
    description: 'We help businesses build credibility and engagement on platforms like Instagram, Facebook, and LinkedIn with strategic content and ad campaigns.',
    icon: Share2,
    href: '/services/social-media',
    poweredBy: ['Content Strategy', 'Paid Social', 'Community Mgmt', 'Influencer Outreach'],
    outcomes: ['Brand Awareness', 'Engagement', 'Lead Gen', 'Community Growth'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 bg-neogen-bg noise-overlay">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-number mb-4">// 01. Core Services</p>
          <h2 className="section-title mb-6">
            Services Engineered{' '}
            <span className="gradient-text-accent">For Growth</span>
          </h2>
          <p className="text-body-lg text-neogen-fg-muted">
            Every service runs on proven frameworks and local market intelligence. Not templates — engineered systems that compound for businesses in Greater Noida & NCR.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={service.href}
                className="card-interactive group relative overflow-hidden"
                data-cursor-text="View Details"
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 font-mono font-bold text-4xl md:text-5xl text-neogen-accent/10 group-hover:text-neogen-accent/20 transition-colors duration-500 z-0">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-6 w-12 h-12 rounded-xl bg-neogen-accent/10 flex items-center justify-center group-hover:bg-neogen-accent/20 group-hover:scale-110 transition-all duration-500 ease-expo">
                  <service.icon className="w-6 h-6 text-neogen-accent group-hover:scale-110 transition-transform duration-500" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 font-mono text-heading-md font-semibold text-neogen-fg mb-4 group-hover:text-neogen-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-body text-neogen-fg-muted mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Powered By */}
                <div className="relative z-10 mb-6 pt-6 border-t border-neogen-border">
                  <p className="font-mono text-caption uppercase tracking-widest text-neogen-fg-subtle mb-3">Powered By</p>
                  <div className="flex flex-wrap gap-2">
                    {service.poweredBy.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-caption font-mono uppercase tracking-wider text-neogen-fg-muted bg-neogen-bg-secondary border border-neogen-border rounded-full group-hover:border-neogen-accent/30 group-hover:text-neogen-accent transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="relative z-10 mb-6">
                  <p className="font-mono text-caption uppercase tracking-widest text-neogen-fg-subtle mb-3">Outcomes</p>
                  <ul className="space-y-2">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2 text-body-sm text-neogen-fg-muted group-hover:text-neogen-fg transition-colors duration-300">
                        <Check className="w-4 h-4 text-neogen-accent flex-shrink-0" aria-hidden="true" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Link */}
                <div className="relative z-10 pt-4 border-t border-neogen-border">
                  <span className="link-primary group">
                    View Service Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-neogen-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-20 md:mt-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/contact"
            className="card-base relative overflow-hidden grid-pattern group"
            data-cursor-text="Get Started"
          >
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="section-number mb-4">// Ready to Scale?</p>
                <h3 className="font-mono text-heading-lg font-semibold text-neogen-fg mb-4">
                  Let\'s Build Your Growth Engine
                </h3>
                <p className="text-body-lg text-neogen-fg-muted">
                  Book a free 30-minute strategy audit. We\'ll analyze your current digital presence, identify leaks, and show you exactly how we\'d move the needle.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <span className="btn-primary group">
                  Book Free Audit
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </div>
            <div className="absolute inset-0 bg-neogen-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}