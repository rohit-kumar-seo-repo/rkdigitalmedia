import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Performance Marketing Services | R.K Digital Media Greater Noida',
  description: 'Meta Ads, Google Ads (Search, Shopping, PMax), landing page CRO, and WhatsApp follow-up. 3×–12× ROAS, first leads in 48 hours.',
  keywords: [
    'performance marketing agency Greater Noida',
    'Meta Ads agency Noida',
    'Google Ads management Greater Noida',
    'Facebook Ads agency Greater Noida',
    'Performance Max campaigns',
    'lead generation services',
    'ROAS optimization',
    'WhatsApp marketing automation',
    'landing page CRO',
    'ad account audit',
  ],
  openGraph: {
    title: 'Performance Marketing Services | R.K Digital Media Greater Noida',
    description: 'Meta Ads, Google Ads (Search, Shopping, PMax), landing page CRO, and WhatsApp follow-up. 3×–12× ROAS, first leads in 48 hours.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/services/performance-marketing',
    siteName: 'R.K Digital Media',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Performance Marketing Services | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Marketing Services | R.K Digital Media Greater Noida',
    description: 'Meta Ads, Google Ads (Search, Shopping, PMax), landing page CRO, and WhatsApp follow-up. 3×–12× ROAS, first leads in 48 hours.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rkdigitalmedia.in/services/performance-marketing',
  },
};

const steps = [
  { num: '01', title: 'Account Audit', desc: 'Full ad account teardown: structure, creatives, audiences, tracking. Every dollar traced.' },
  { num: '02', title: 'Full-Funnel Strategy', desc: 'Meta + Google + WhatsApp mapped to your margin math. Audience architecture, creative testing framework, budget allocation.' },
  { num: '03', title: 'Campaign Launch', desc: 'Campaigns live within 7 days. Creative tested from week one. Tracking hardened (GA4, GTM, CAPI).' },
  { num: '04', title: 'Weekly Optimise', desc: 'Weekly performance reviews, monthly strategy calls, AI-optimised bidding. Growth compounds.' },
];

const included = [
  'Meta Ads (Facebook + Instagram) — full setup, creative, A/B testing',
  'Google Ads — Search, Shopping, Performance Max',
  'Landing page CRO recommendations & implementation',
  'WhatsApp lead follow-up integration (n8n/GHL)',
  'Dedicated account manager with weekly syncs',
  'Monthly reporting dashboard with live data',
  'Creative testing framework (hook rate, hold rate, CTR)',
];

const stats = [
  { value: '3×–12×', label: 'ROAS (Vertical Dependent)' },
  { value: '48hr', label: 'First Qualified Leads' },
  { value: '60%', label: 'Avg CAC Reduction vs Average' },
];

const faqItems = [
  { question: 'What platforms do you advertise on?', answer: 'We specialize in Meta Ads (Facebook + Instagram) and Google Ads (Search, Shopping, Performance Max). We also integrate with WhatsApp for lead follow-up.' },
  { question: 'How much ad spend do you manage?', answer: 'We work with monthly ad budgets from ₹50K to ₹50L+. Strategy and management fee is separate from ad spend.' },
  { question: 'When will I see results?', answer: 'First qualified leads typically arrive within 48 hours of campaign launch. ROAS optimization takes 2-4 weeks of testing.' },
  { question: 'Do you handle creative production?', answer: 'Yes, we provide creative direction, ad copy, and coordinate with designers/videographers. We also test 10+ creative variations per month.' },
  { question: 'What is your reporting cadence?', answer: 'Weekly performance summaries via Slack/Email, monthly strategy calls with full dashboard access. Real-time data always available.' },
];

const graphSchemaString = '{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org","@type":"Service","name":"Performance Marketing Services","description":"Meta Ads, Google Ads (Search, Shopping, PMax), landing page CRO, and WhatsApp follow-up. 3×–12× ROAS, first leads in 48 hours.","url":"https://rkdigitalmedia.in/services/performance-marketing","provider":{"@type":"LocalBusiness","@id":"https://rkdigitalmedia.in/#localbusiness","name":"R.K Digital Media"},"category":"Performance Marketing","areaServed":[{"@type":"Place","name":"Greater Noida"},{"@type":"Place","name":"Noida"},{"@type":"Place","name":"Delhi NCR"},{"@type":"Place","name":"Ghaziabad"},{"@type":"Place","name":"Faridabad"},{"@type":"Place","name":"Gurugram"}]},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What platforms do you advertise on?","acceptedAnswer":{"@type":"Answer","text":"We specialize in Meta Ads (Facebook + Instagram) and Google Ads (Search, Shopping, Performance Max). We also integrate with WhatsApp for lead follow-up."}},{"@type":"Question","name":"How much ad spend do you manage?","acceptedAnswer":{"@type":"Answer","text":"We work with monthly ad budgets from ₹50K to ₹50L+. Strategy and management fee is separate from ad spend."}},{"@type":"Question","name":"When will I see results?","acceptedAnswer":{"@type":"Answer","text":"First qualified leads typically arrive within 48 hours of campaign launch. ROAS optimization takes 2-4 weeks of testing."}},{"@type":"Question","name":"Do you handle creative production?","acceptedAnswer":{"@type":"Answer","text":"Yes, we provide creative direction, ad copy, and coordinate with designers/videographers. We also test 10+ creative variations per month."}},{"@type":"Question","name":"What is your reporting cadence?","acceptedAnswer":{"@type":"Answer","text":"Weekly performance summaries via Slack/Email, monthly strategy calls with full dashboard access. Real-time data always available."}}]}]}';

const faqSchemaString = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What platforms do you advertise on?","acceptedAnswer":{"@type":"Answer","text":"We specialize in Meta Ads (Facebook + Instagram) and Google Ads (Search, Shopping, Performance Max). We also integrate with WhatsApp for lead follow-up."}},{"@type":"Question","name":"How much ad spend do you manage?","acceptedAnswer":{"@type":"Answer","text":"We work with monthly ad budgets from ₹50K to ₹50L+. Strategy and management fee is separate from ad spend."}},{"@type":"Question","name":"When will I see results?","acceptedAnswer":{"@type":"Answer","text":"First qualified leads typically arrive within 48 hours of campaign launch. ROAS optimization takes 2-4 weeks of testing."}},{"@type":"Question","name":"Do you handle creative production?","acceptedAnswer":{"@type":"Answer","text":"Yes, we provide creative direction, ad copy, and coordinate with designers/videographers. We also test 10+ creative variations per month."}},{"@type":"Question","name":"What is your reporting cadence?","acceptedAnswer":{"@type":"Answer","text":"Weekly performance summaries via Slack/Email, monthly strategy calls with full dashboard access. Real-time data always available."}}]}';

export default function PerformanceMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: graphSchemaString }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaString }}
      />
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center py-24">
          <p className="section-label mb-4">// SERVICE</p>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            Performance <span className="text-red-italic">Marketing</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Meta Ads, Google Ads, lead gen funnels, and AI-powered optimization. High-ROI campaigns engineered for Greater Noida businesses.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// HOW IT WORKS</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            From Audit to Scale in <span className="text-red-italic">Four Moves</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="card-base p-6">
                <span className="font-montserrat font-black text-4xl text-[var(--rkd-primary)] opacity-40">{step.num}</span>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mt-3 mb-2">{step.title}</h3>
                <p className="text-body-sm text-[var(--rkd-fg-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// WHAT'S INCLUDED</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Every Engagement Includes
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-xl">
                <svg className="w-5 h-5 text-[var(--rkd-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
                <span className="text-body text-[var(--rkd-fg-muted)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// RESULTS YOU CAN EXPECT</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Measurable Outcomes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="card-base text-center p-8">
                <div className="font-montserrat font-black text-5xl text-[var(--rkd-primary)] mb-2">{stat.value}</div>
                <div className="text-[var(--rkd-fg-muted)] font-outfit">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// FAQ</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Common Questions About Our <span className="text-red-italic">Performance Marketing</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, index) => (
              <details key={index} className="group bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-xl p-6">
                <summary className="flex items-center justify-between cursor-pointer list-none font-montserrat font-semibold text-[var(--rkd-fg)]">
                  {faq.question}
                  <svg className="w-5 h-5 text-[var(--rkd-primary)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-[var(--rkd-fg-muted)] leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg)] text-center">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// READY TO SCALE?</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-8" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Let's Audit Your Ad Account
          </h2>
          <a href="/contact" className="btn-primary inline-flex">
            Book Free Audit
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </>
  );
}