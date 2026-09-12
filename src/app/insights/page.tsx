import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, Clock, TrendingUp } from 'lucide-react';

const insights = [
  {
    slug: 'local-seo-checklist-2024',
    title: 'The Complete Local SEO Checklist for Greater Noida Businesses (2024)',
    excerpt: 'Every technical, content, and off-page step to dominate the map pack in Noida, Greater Noida, and Ghaziabad. 47-point checklist included.',
    category: 'SEO',
    readTime: '12 min',
    date: '2024-01-15',
  },
  {
    slug: 'google-ads-suspension-recovery',
    title: 'Google Ads Suspended? Here\'s the Exact Recovery Process We Use',
    excerpt: 'Step-by-step: policy audit, landing page rebuild, feed cleanup, appeal template, and scaling after reinstatement. Real case study inside.',
    category: 'Google Ads',
    readTime: '10 min',
    date: '2024-01-08',
  },
  {
    slug: 'ai-automation-for-local-business',
    title: 'AI Automation for Local Business: 5 Workflows That Run While You Sleep',
    excerpt: 'Lead qualification, appointment booking, WhatsApp follow-up, review requests, and CRM sync — built in n8n. Copy our templates.',
    category: 'AI Automation',
    readTime: '8 min',
    date: '2024-01-02',
  },
  {
    slug: 'website-conversion-rate-optimization',
    title: 'Website CRO for Service Businesses: From 1% to 4%+ Conversion',
    excerpt: 'Landing page architecture, trust signals, form optimization, speed wins, and heatmap-driven iterations. No guesswork.',
    category: 'Web Development',
    readTime: '9 min',
    date: '2023-12-28',
  },
  {
    slug: 'b2b-linkedin-ads-playbook',
    title: 'LinkedIn Ads for B2B Industrial: Targeting Procurement Managers at Scale',
    excerpt: 'ABM campaign structure, lead gen forms, retargeting sequences, and CRM integration. How we got 25% meeting-to-opportunity rate.',
    category: 'Performance Marketing',
    readTime: '11 min',
    date: '2023-12-20',
  },
  {
    slug: 'gmb-optimization-case-study',
    title: 'GMB Optimization: From 0 Reviews to 4.9★ and Map Pack #1 in 90 Days',
    excerpt: 'Profile setup, review generation system, post scheduling, Q&A seeding, and photo strategy. The exact process for our home services client.',
    category: 'Local SEO',
    readTime: '7 min',
    date: '2023-12-15',
  },
];

export const metadata: Metadata = {
  title: 'Insights | R.K Digital Media',
  description: 'Deep dives on SEO, Google Ads, AI automation, local search, and conversion optimization. Real frameworks, real numbers, no fluff.',
};

export default function InsightsPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern fade-in-up">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center">
          <p className="section-label mb-4">// INSIGHTS</p>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            Frameworks That <span className="text-red-italic">Compound</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Deep dives on SEO, Google Ads, AI automation, local search, and conversion optimization. Real frameworks, real numbers, no fluff.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((post, index) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="card-interactive group block fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 text-meta font-mono uppercase tracking-wider text-[var(--rkd-primary)] mb-4">
                  {post.category}
                </div>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-3 group-hover:text-[var(--rkd-primary)] transition-colors" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)', lineHeight: '1.4' }}>
                  {post.title}
                </h3>
                <p className="text-body-sm text-[var(--rkd-fg-muted)] mb-4 line-clamp-2" style={{ lineHeight: '1.6' }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-meta text-[var(--rkd-fg-subtle)]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {post.readTime}
                  </span>
                  <span>{post.date}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="/contact" className="btn-primary group inline-flex fade-in-up-delay-2">
              Suggest a Topic
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}