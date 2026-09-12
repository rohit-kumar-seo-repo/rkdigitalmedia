'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Target, Zap, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    id: 'local-seo-domination',
    title: 'Local SEO Domination for Home Services',
    sector: 'Home Services · Noida',
    status: 'LIVE',
    metrics: {
      attributed: '₹45L+',
      roas: '12×',
      leads: '2,800+',
      period: '12 months',
    },
    tags: ['SEO', 'GMB', 'Local Citations'],
    description: 'A home services business with zero digital presence. We built their local SEO engine from scratch — GMB optimization, location pages, review generation, and citation building. Now dominating map pack for 50+ high-intent keywords across Noida & Greater Noida.',
    link: '/case-studies/local-seo-domination',
  },
  {
    id: 'google-ads-recovery',
    title: 'Google Ads Suspension Recovery & Scale',
    sector: 'E-commerce · Delhi NCR',
    status: 'LIVE',
    metrics: {
      attributed: '₹1.2Cr',
      roas: '8.5×',
      leads: '15,000+',
      period: '8 months',
    },
    tags: ['Google Ads', 'Suspension Recovery', 'Shopping Ads'],
    description: 'Client had their Google Ads account suspended for "policy violations." We diagnosed root causes, rebuilt landing pages, fixed policy issues, and got the account reinstated. Scaled from ₹0 to ₹15L/month spend at 8.5× ROAS within 4 months.',
    link: '/case-studies/google-ads-recovery',
  },
  {
    id: 'b2b-lead-gen',
    title: 'B2B Lead Generation for Industrial Supplier',
    sector: 'Manufacturing · Greater Noida',
    status: 'LIVE',
    metrics: {
      attributed: '₹3.8Cr',
      roas: '6×',
      leads: '1,200+',
      period: '18 months',
    },
    tags: ['SEO', 'Google Ads', 'LinkedIn Ads'],
    description: 'Industrial B2B supplier needed qualified leads, not traffic. Combined technical SEO for high-intent keywords with LinkedIn Ads targeting decision-makers. Built a lead scoring system in their CRM. 1,200+ SQLs generated, ₹3.8Cr pipeline attributed.',
    link: '/case-studies/b2b-lead-gen',
  },
  {
    id: 'healthcare-clinic',
    title: 'Multi-Location Clinic Digital Transformation',
    sector: 'Healthcare · Noida & Ghaziabad',
    status: 'LIVE',
    metrics: {
      attributed: '₹85L',
      roas: '9×',
      leads: '3,500+',
      period: '10 months',
    },
    tags: ['GMB', 'Website', 'Google Ads', 'SEO'],
    description: 'Dental & skin clinic with 3 locations, no unified digital strategy. Built location-specific landing pages, optimized all 3 GMB profiles, ran geo-targeted Google Ads. 3,500+ appointments booked, 9× ROAS across all locations.',
    link: '/case-studies/healthcare-clinic',
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-20 md:py-32 lg:py-36 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)] noise-overlay">
      <div className="max-w-[80rem] mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label mb-4">// PROOF, NOT PROMISES</p>
          <h2 className="section-heading section-heading-h2 mb-6">
            Results that speak for themselves.
          </h2>
          <p className="section-subhead">
            Campaigns, builds, and growth systems that moved real numbers — with the numbers still attached. Every metric verified, every client referenceable.
          </p>
        </motion.div>

        {/* Portfolio Metrics Summary */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="card-base text-center">
            <div className="stat-value text-[var(--rkd-primary)]">₹5Cr+</div>
            <div className="stat-label">Total Attributed Revenue</div>
          </div>
          <div className="card-base text-center">
            <div className="stat-value text-[var(--rkd-primary)]">12×</div>
            <div className="stat-label">Peak ROAS Achieved</div>
          </div>
          <div className="card-base text-center">
            <div className="stat-value text-[var(--rkd-primary)]">22K+</div>
            <div className="stat-label">Leads Generated</div>
          </div>
          <div className="card-base text-center">
            <div className="stat-value text-[var(--rkd-primary)]">4</div>
            <div className="stat-label">Core Service Verticals</div>
          </div>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="card-base relative overflow-hidden group">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Left: Metrics */}
                  <div className="lg:col-span-1 space-y-6">
                    <div className="flex items-center gap-2">
                      <span className="badge badge-red">{study.status}</span>
                      <span className="font-mono text-meta text-[var(--rkd-fg-subtle)]">{study.sector}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'Attributed Revenue', value: study.metrics.attributed, icon: TrendingUp },
                        { label: 'Peak ROAS', value: study.metrics.roas, icon: Target },
                        { label: 'Leads Generated', value: study.metrics.leads, icon: Users },
                        { label: 'Campaign Period', value: study.metrics.period, icon: Zap },
                      ].map((metric) => (
                        <div key={metric.label} className="text-center p-4 bg-[var(--rkd-bg-secondary)] rounded-xl">
                          <metric.icon className="w-5 h-5 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
                          <div className="font-montserrat font-bold text-[var(--rkd-fg)]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.2' }}>
                            {metric.value}
                          </div>
                          <div className="text-meta text-[var(--rkd-fg-subtle)] uppercase tracking-wider">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-meta font-mono uppercase tracking-wider text-[var(--rkd-fg-muted)] bg-[var(--rkd-bg-secondary)] border border-[var(--rkd-border)] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Center: Description */}
                  <div className="lg:col-span-1 pt-2">
                    <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4 group-hover:text-[var(--rkd-primary)] transition-colors duration-300" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: '1.35' }}>
                      {study.title}
                    </h3>
                    <p className="text-body text-[var(--rkd-fg-muted)] leading-relaxed">
                      {study.description}
                    </p>
                  </div>

                  {/* Right: CTA */}
                  <div className="lg:col-span-1 flex flex-col items-end lg:items-end pt-2">
                    <a
                      href={study.link}
                      className="btn-primary w-full lg:w-auto group"
                      data-cursor-text="Read Case Study"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </a>
                    <p className="mt-6 text-body-sm text-[var(--rkd-fg-subtle)] text-right max-w-xs">
                      Want receipts like these on your account? Book a 30-minute audit call. We'll pull your current numbers, show you where the leaks are, and tell you honestly whether we can move them.
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 md:mt-28 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="card-base inline-block max-w-2xl">
            <p className="section-label mb-4">// NEXT STEP</p>
            <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.25' }}>
              Want Receipts Like These On Your Account?
            </h3>
            <p className="text-body-lg text-[var(--rkd-fg-muted)] mb-8" style={{ lineHeight: '1.7' }}>
              Book a 30-minute strategy audit. We'll analyze your current digital presence, identify the leaks, and show you exactly how we'd move the needle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary group">
                Book Free Audit
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/919871530594"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center text-body-sm text-[var(--rkd-fg-subtle)]">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--rkd-primary)]" aria-hidden="true" />
                <span>30 Min Free Audit</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--rkd-primary)]" aria-hidden="true" />
                <span>No Deck</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--rkd-primary)]" aria-hidden="true" />
                <span>No Obligation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CaseStudies;