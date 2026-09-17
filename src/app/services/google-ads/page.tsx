import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Google Ads Management Services | R.K Digital Media Greater Noida',
  description: 'Search, Shopping, Performance Max, YouTube Ads. Policy compliance, suspension recovery, 8.5× ROAS. Google Partner certified.',
  keywords: [
    'Google Ads agency Greater Noida',
    'Google Ads management Noida',
    'PPC management Greater Noida',
    'Google Ads suspension recovery',
    'Performance Max campaigns',
    'Google Shopping ads management',
    'Google Ads certified agency',
    'PPC audit services',
    'Google Ads ROAS optimization',
    'paid search services Greater Noida',
  ],
  openGraph: {
    title: 'Google Ads Management Services | R.K Digital Media Greater Noida',
    description: 'Search, Shopping, Performance Max, YouTube Ads. Policy compliance, suspension recovery, 8.5× ROAS. Google Partner certified.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/services/google-ads',
    siteName: 'R.K Digital Media',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Google Ads Management Services | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Management Services | R.K Digital Media Greater Noida',
    description: 'Search, Shopping, Performance Max, YouTube Ads. Policy compliance, suspension recovery, 8.5× ROAS. Google Partner certified.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rkdigitalmedia.in/services/google-ads',
  },
};

const steps = [
  { num: '01', title: 'Account Audit', desc: 'Full audit: structure, keywords, match types, negatives, extensions, bidding, tracking, policy compliance.' },
  { num: '02', title: 'Strategy & Rebuild', desc: 'Campaign architecture (Search/Shopping/PMax/YouTube), keyword mapping, audience signals, bid strategies, budget allocation.' },
  { num: '03', title: 'Launch & Compliance', desc: 'Policy-safe creatives, landing page compliance, conversion tracking (GA4, GTM, offline), suspension prevention.' },
  { num: '04', title: 'Scale & Optimise', desc: 'Weekly optimisation: search terms, bid adjustments, audience expansion, creative testing, ROAS maximisation.' },
];

const included = [
  'Google Search campaigns (brand, generic, competitor, DSA)',
  'Google Shopping + Performance Max (feed optimisation, asset groups)',
  'YouTube Ads (in-stream, Shorts, discovery, VVC)',
  'Google Ads suspension recovery & policy compliance',
  'Landing page CRO recommendations & implementation',
  'GA4 + GTM + Enhanced Conversions + Consent Mode v2',
  'Weekly search term mining & negative keyword expansion',
  'Monthly strategy call + performance dashboard',
];

const stats = [
  { value: '8.5×', label: 'Peak ROAS Achieved' },
  { value: '98%', label: 'Suspension Recovery Rate' },
  { value: '48hr', label: 'Account Audit Delivery' },
];

const faqItems = [
  { question: 'Are you a Google Partner?', answer: 'Yes — we are a Google Partner certified agency with specializations in Search, Shopping, and Video. Our team holds current Google Ads certifications.' },
  { question: 'Can you recover suspended accounts?', answer: 'Yes — we have a 98% success rate on policy-related suspensions (circumventing systems, misrepresentation, billing). Typical recovery: 3-14 days.' },
  { question: 'What ad spend do you manage?', answer: '₹50K to ₹1Cr+ monthly. Management fee is separate from ad spend. We optimize every rupee — no % of spend models.' },
  { question: 'How do you handle tracking?', answer: 'Full GA4 + GTM setup with Enhanced Conversions, offline conversion import, Consent Mode v2, and server-side CAPI for iOS14+ accuracy.' },
  { question: 'Do you do Performance Max?', answer: 'Yes — we build PMax with proper asset groups, audience signals, feed optimization, and exclusion lists to prevent budget waste on Display/Discovery.' },
];

const graphSchemaString = '{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org","@type":"Service","name":"Google Ads Management Services","description":"Search, Shopping, Performance Max, YouTube Ads. Policy compliance, suspension recovery, 8.5× ROAS. Google Partner certified.","url":"https://rkdigitalmedia.in/services/google-ads","provider":{"@type":"LocalBusiness","@id":"https://rkdigitalmedia.in/#localbusiness","name":"R.K Digital Media"},"category":"Google Ads Management","areaServed":[{"@type":"Place","name":"Greater Noida"},{"@type":"Place","name":"Noida"},{"@type":"Place","name":"Delhi NCR"},{"@type":"Place","name":"Ghaziabad"},{"@type":"Place","name":"Faridabad"},{"@type":"Place","name":"Gurugram"}]},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Are you a Google Partner?","acceptedAnswer":{"@type":"Answer","text":"Yes — we are a Google Partner certified agency with specializations in Search, Shopping, and Video. Our team holds current Google Ads certifications."}},{"@type":"Question","name":"Can you recover suspended accounts?","acceptedAnswer":{"@type":"Answer","text":"Yes — we have a 98% success rate on policy-related suspensions (circumventing systems, misrepresentation, billing). Typical recovery: 3-14 days."}},{"@type":"Question","name":"What ad spend do you manage?","acceptedAnswer":{"@type":"Answer","text":"₹50K to ₹1Cr+ monthly. Management fee is separate from ad spend. We optimize every rupee — no % of spend models."}},{"@type":"Question","name":"How do you handle tracking?","acceptedAnswer":{"@type":"Answer","text":"Full GA4 + GTM setup with Enhanced Conversions, offline conversion import, Consent Mode v2, and server-side CAPI for iOS14+ accuracy."}},{"@type":"Question","name":"Do you do Performance Max?","acceptedAnswer":{"@type":"Answer","text":"Yes — we build PMax with proper asset groups, audience signals, feed optimization, and exclusion lists to prevent budget waste on Display/Discovery."}}]}]}';

const faqSchemaString = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Are you a Google Partner?","acceptedAnswer":{"@type":"Answer","text":"Yes — we are a Google Partner certified agency with specializations in Search, Shopping, and Video. Our team holds current Google Ads certifications."}},{"@type":"Question","name":"Can you recover suspended accounts?","acceptedAnswer":{"@type":"Answer","text":"Yes — we have a 98% success rate on policy-related suspensions (circumventing systems, misrepresentation, billing). Typical recovery: 3-14 days."}},{"@type":"Question","name":"What ad spend do you manage?","acceptedAnswer":{"@type":"Answer","text":"₹50K to ₹1Cr+ monthly. Management fee is separate from ad spend. We optimize every rupee — no % of spend models."}},{"@type":"Question","name":"How do you handle tracking?","acceptedAnswer":{"@type":"Answer","text":"Full GA4 + GTM setup with Enhanced Conversions, offline conversion import, Consent Mode v2, and server-side CAPI for iOS14+ accuracy."}},{"@type":"Question","name":"Do you do Performance Max?","acceptedAnswer":{"@type":"Answer","text":"Yes — we build PMax with proper asset groups, audience signals, feed optimization, and exclusion lists to prevent budget waste on Display/Discovery."}}]}';

export default function GoogleAdsPage() {
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
            Google <span className="text-red-italic">Ads</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Search, Shopping, Performance Max, YouTube Ads. Policy-compliant campaigns with suspension recovery expertise. 8.5× peak ROAS.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// HOW IT WORKS</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            From Audit to Scale in <span className="text-red-italic">Four Phases</span>
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
            Common Questions About Our <span className="text-red-italic">Google Ads</span>
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
            Let's Audit Your Google Ads Account
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