import type { Metadata } from 'next';
import Header from '@/components/Header';
import CustomCursor from '@/components/ui/CustomCursor';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies | Results We Ship | R.K Digital Media',
  description: 'Real results from real campaigns. Campaigns, builds, and automation systems that moved real numbers — with the numbers still attached. Verified metrics, referenceable clients.',
  openGraph: {
    title: 'Case Studies | R.K Digital Media',
    description: 'Real results from real campaigns. Campaigns, builds, and automation systems that moved real numbers — with the numbers still attached.',
    type: 'website',
  },
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      category: 'LOCAL SEO',
      location: 'Greater Noida',
      liveSince: 'MAR 2024',
      title: 'Local SEO Domination for Home Services',
      metric: '50+',
      metricLabel: 'KEYWORDS IN MAP PACK',
      description: 'A home services business with zero digital presence. We built their local SEO engine from scratch — GMB optimization, location pages, review generation, and citation building. Now dominating map pack for 50+ high-intent keywords across Noida & Greater Noida.',
      tags: ['SEO', 'GMB', 'Local Citations'],
      href: '/case-studies/local-seo-domination',
    },
    {
      category: 'GOOGLE ADS',
      location: 'Delhi NCR',
      liveSince: 'JAN 2024',
      title: 'Google Ads Suspension Recovery & Scale',
      metric: '8.5×',
      metricLabel: 'PEAK ROAS · Google Ads',
      description: 'Client had their Google Ads account suspended for "policy violations." We diagnosed root causes, rebuilt landing pages, fixed policy issues, and got the account reinstated. Scaled from ₹0 to ₹15L/month spend at 8.5× ROAS within 4 months.',
      tags: ['Google Ads', 'Suspension Recovery', 'Shopping Ads'],
      href: '/case-studies/google-ads-recovery',
    },
    {
      category: 'SOCIAL MEDIA',
      location: 'Greater Noida',
      liveSince: 'JUN 2024',
      title: 'Social Media Growth for Local Brand',
      metric: '3×',
      metricLabel: 'ENGAGEMENT RATE',
      description: 'Local retail brand needed consistent social presence. Built content calendar, UGC pipeline, and ad creative testing framework. Grew followers 3× and cut CPL by 60% across Meta & Instagram.',
      tags: ['Meta Ads', 'Creative', 'Community'],
      href: '/case-studies/social-media-growth',
    },
  ];

  const summaryStats = [
    { label: 'STATE', value: 'LIVE' },
    { label: 'TOTAL CLIENTS', value: '12+' },
    { label: 'PEAK ROAS', value: '8.5×' },
    { label: 'SECTORS', value: 'Services • E-Commerce • Education' },
    { label: 'STATUS', value: 'ACTIVE' },
  ];

  const portfolioMetrics = [
    { num: '01', metric: '8.5× ROAS', sub: 'Google Ads' },
    { num: '02', metric: '5× increase', sub: 'Organic Traffic' },
    { num: '03', metric: '₹50L+', sub: 'Attributed Revenue' },
    { num: '04', metric: '40+', sub: 'Clients Served' },
  ];

  return (
    <>
      <CustomCursor />
      <Header />
      <main id="top" className="pt-16">
        {/* 1. Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)]">
          <div className="absolute inset-0 bg-[var(--rkd-bg)]" />
          <div className="relative max-w-[80rem] mx-auto px-4 md:px-6 py-20 md:py-32 text-center">
            <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.1' }}>
              Results we've shipped for Greater Noida businesses.
            </h1>
            <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              Real campaigns, real builds, real automation — with the numbers still attached.
            </p>
          </div>
        </section>

        {/* 2. Summary Stats Card */}
        <section className="py-16 md:py-24 bg-[var(--rkd-bg)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <div className="bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
                <div className="space-y-6">
                  {summaryStats.map((stat, i) => (
                    <div key={stat.label} className="flex justify-between items-center py-4 border-b border-[var(--rkd-border)] last:border-0">
                      <span className="font-montserrat font-bold text-[var(--rkd-fg-muted)] text-sm uppercase tracking-widest">{stat.label}</span>
                      <span className="font-montserrat font-bold text-[var(--rkd-fg)] text-lg md:text-xl">{stat.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-center items-center md:items-start">
                  <p className="text-[var(--rkd-fg-muted)] text-sm font-outfit leading-relaxed max-w-xs mb-8">
                    Verified metrics from real campaigns. Every number referenceable.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--rkd-primary)] text-white font-montserrat font-bold hover:bg-[var(--rkd-primary-hover)] transition-colors">
                    BOOK A FREE AUDIT
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Portfolio Metrics Strip */}
        <section className="py-16 bg-[var(--rkd-bg)] border-y border-[var(--rkd-border)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <p className="section-label mb-8 text-center">● LIVE // PORTFOLIO METRICS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {portfolioMetrics.map((item) => (
                <div key={item.num} className="bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-xl p-6 md:p-8 text-center">
                  <p className="font-montserrat font-black text-[var(--rkd-primary)] text-3xl mb-2">// {item.num}</p>
                  <p className="font-montserrat font-bold text-[var(--rkd-fg)] text-2xl md:text-3xl mb-1">{item.metric}</p>
                  <p className="text-[var(--rkd-fg-muted)] text-sm uppercase tracking-wider">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Case Study Cards */}
        <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            {/* Section Label */}
            <p className="section-label mb-12">// THE WORK — Selected client results.</p>
            
            <div className="space-y-8">
              {caseStudies.map((study) => (
                <Link
                  key={study.title}
                  href={study.href}
                  className="group bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-2xl p-8 md:p-10 hover:border-[var(--rkd-primary)]/30 transition-all duration-300"
                >
                  {/* Top Row */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="flex flex-col gap-1">
                      <span className="font-montserrat font-bold text-[var(--rkd-primary)] text-xs md:text-sm uppercase tracking-widest">
                        {study.category} — LEFT
                      </span>
                      <span className="font-mono text-[var(--rkd-fg-muted)] text-xs uppercase tracking-widest">
                        LIVE SINCE {study.liveSince}, {study.location}
                      </span>
                    </div>
                  </div>

                  {/* Center: Title */}
                  <h3 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.25' }}>
                    {study.title}
                  </h3>

                  {/* HUGE Metric */}
                  <div className="mb-4">
                    <p className="font-montserrat font-black text-[var(--rkd-primary)]" style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', lineHeight: '1' }}>
                      {study.metric}
                    </p>
                    <p className="font-mono text-[var(--rkd-fg-muted)] text-xs uppercase tracking-widest mt-1">
                      {study.metricLabel}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--rkd-fg-muted)] text-body-sm md:text-body leading-relaxed mb-6" style={{ lineHeight: '1.7' }}>
                    {study.description}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-caption font-mono uppercase tracking-wider text-[var(--rkd-fg-muted)] bg-[var(--rkd-bg)] border border-[var(--rkd-border)] rounded-full group-hover:border-[var(--rkd-primary)]/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Row: Read Full Case Study */}
                  <div className="flex justify-end">
                    <span className="inline-flex items-center gap-2 font-montserrat font-semibold text-[var(--rkd-fg)] text-sm uppercase tracking-widest group-hover:text-[var(--rkd-primary)] transition-colors">
                      READ THE FULL CASE STUDY
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center">
            <p className="section-label mb-4">// NEXT STEP</p>
            <h2 className="font-montserrat font-black text-[var(--rkd-fg)] mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.1' }}>
              Want Receipts Like These On Your Account?
            </h2>
            <p className="text-body-lg text-[var(--rkd-fg-muted)] mb-8 max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              Book a 30-minute strategy audit. We'll analyze your current digital presence, identify the leaks, and show you exactly how we'd move the needle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary group inline-flex">
                Book Free Audit
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/case-studies" className="btn-secondary group inline-flex">
                View All Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}