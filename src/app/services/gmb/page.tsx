import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Google My Business (GMB) Optimization | R.K Digital Media Greater Noida',
  description: 'GMB/GBP setup, optimization, review management, posts, Q&A, citations. Map Pack domination for local services. 50+ keywords in Map Pack.',
  keywords: [
    'GMB optimization Greater Noida',
    'Google My Business services Noida',
    'Google Business Profile management',
    'local SEO Greater Noida',
    'Map Pack ranking services',
    'Google reviews management',
    'citation building services',
    'local business listing optimization',
    'GBP verification services',
    'local search marketing Greater Noida',
  ],
  openGraph: {
    title: 'Google My Business (GMB) Optimization | R.K Digital Media Greater Noida',
    description: 'GMB/GBP setup, optimization, review management, posts, Q&A, citations. Map Pack domination for local services. 50+ keywords in Map Pack.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/services/gmb',
    siteName: 'R.K Digital Media',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GMB Optimization Services | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google My Business (GMB) Optimization | R.K Digital Media Greater Noida',
    description: 'GMB/GBP setup, optimization, review management, posts, Q&A, citations. Map Pack domination for local services. 50+ keywords in Map Pack.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rkdigitalmedia.in/services/gmb',
  },
};

const steps = [
  { num: '01', title: 'Profile Audit', desc: 'Complete GBP audit: NAP consistency, categories, attributes, photos, reviews, Q&A, posts, website, tracking.' },
  { num: '02', title: 'Optimization', desc: 'Category optimization, keyword-rich description, service/products menu, photo geo-tagging, review response templates, Q&A seeding.' },
  { num: '03', title: 'Citation & Review Engine', desc: 'Top 50+ citation building, review generation system (QR, SMS, email), review response management, spam review removal.' },
  { num: '04', title: 'Monthly Growth', desc: 'Weekly posts, monthly photos, Q&A updates, competitor tracking, rank grid monitoring, performance reporting.' },
];

const included = [
  'Google Business Profile setup / claim / verification',
  'Category & attribute optimization (primary + secondary)',
  'Keyword-optimized business description (750 chars)',
  'Service & Products menu with pricing',
  'Photo geo-tagging + UGC collection system',
  'Review generation: QR cards, SMS, email automation',
  'Review response management (templates + approval)',
  'Citation building: 50+ directories (India + global)',
  'Weekly GBP posts (offers, updates, events, COVID)',
  'Monthly rank grid report (5km, 10km, 20km radius)',
];

const stats = [
  { value: '50+', label: 'Map Pack Keywords' },
  { value: '30%', label: 'Calls Increase (Avg)' },
  { value: '95%', label: 'Review Response Rate' },
];

const faqItems = [
  { question: 'How long does GMB optimization take?', answer: 'Initial setup + optimization: 7-10 days. Citation building: 30 days. Map Pack movement typically starts at 30-60 days depending on competition.' },
  { question: 'Can you help with suspended GMB profiles?', answer: 'Yes — we handle soft/hard suspensions, reinstatement requests, and duplicate listings. Success rate: 85%+ for policy-related suspensions.' },
  { question: 'Do you manage reviews?', answer: 'Yes — we set up automated review requests (QR/SMS/email), provide response templates, and manage weekly review responses on your behalf (with approval).' },
  { question: 'What areas do you cover?', answer: 'Primary: Greater Noida, Noida, Delhi NCR, Ghaziabad, Faridabad, Gurugram. We also serve clients nationwide — GMB works the same across India.' },
  { question: 'How do you track Map Pack rankings?', answer: 'We use Local Falcon / BrightLocal for grid-based rank tracking (5km-20km radius). You get monthly reports showing position changes for 20+ target keywords.' },
];

const graphSchemaString = '{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org","@type":"Service","name":"Google My Business (GMB) Optimization","description":"GMB/GBP setup, optimization, review management, posts, Q&A, citations. Map Pack domination for local services. 50+ keywords in Map Pack.","url":"https://rkdigitalmedia.in/services/gmb","provider":{"@type":"LocalBusiness","@id":"https://rkdigitalmedia.in/#localbusiness","name":"R.K Digital Media"},"category":"GMB Optimization","areaServed":[{"@type":"Place","name":"Greater Noida"},{"@type":"Place","name":"Noida"},{"@type":"Place","name":"Delhi NCR"},{"@type":"Place","name":"Ghaziabad"},{"@type":"Place","name":"Faridabad"},{"@type":"Place","name":"Gurugram"}]},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How long does GMB optimization take?","acceptedAnswer":{"@type":"Answer","text":"Initial setup + optimization: 7-10 days. Citation building: 30 days. Map Pack movement typically starts at 30-60 days depending on competition."}},{"@type":"Question","name":"Can you help with suspended GMB profiles?","acceptedAnswer":{"@type":"Answer","text":"Yes — we handle soft/hard suspensions, reinstatement requests, and duplicate listings. Success rate: 85%+ for policy-related suspensions."}},{"@type":"Question","name":"Do you manage reviews?","acceptedAnswer":{"@type":"Answer","text":"Yes — we set up automated review requests (QR/SMS/email), provide response templates, and manage weekly review responses on your behalf (with approval)."}},{"@type":"Question","name":"What areas do you cover?","acceptedAnswer":{"@type":"Answer","text":"Primary: Greater Noida, Noida, Delhi NCR, Ghaziabad, Faridabad, Gurugram. We also serve clients nationwide — GMB works the same across India."}},{"@type":"Question","name":"How do you track Map Pack rankings?","acceptedAnswer":{"@type":"Answer","text":"We use Local Falcon / BrightLocal for grid-based rank tracking (5km-20km radius). You get monthly reports showing position changes for 20+ target keywords."}}]}]}';

const faqSchemaString = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How long does GMB optimization take?","acceptedAnswer":{"@type":"Answer","text":"Initial setup + optimization: 7-10 days. Citation building: 30 days. Map Pack movement typically starts at 30-60 days depending on competition."}},{"@type":"Question","name":"Can you help with suspended GMB profiles?","acceptedAnswer":{"@type":"Answer","text":"Yes — we handle soft/hard suspensions, reinstatement requests, and duplicate listings. Success rate: 85%+ for policy-related suspensions."}},{"@type":"Question","name":"Do you manage reviews?","acceptedAnswer":{"@type":"Answer","text":"Yes — we set up automated review requests (QR/SMS/email), provide response templates, and manage weekly review responses on your behalf (with approval)."}},{"@type":"Question","name":"What areas do you cover?","acceptedAnswer":{"@type":"Answer","text":"Primary: Greater Noida, Noida, Delhi NCR, Ghaziabad, Faridabad, Gurugram. We also serve clients nationwide — GMB works the same across India."}},{"@type":"Question","name":"How do you track Map Pack rankings?","acceptedAnswer":{"@type":"Answer","text":"We use Local Falcon / BrightLocal for grid-based rank tracking (5km-20km radius). You get monthly reports showing position changes for 20+ target keywords."}}]}';

export default function GMBPage() {
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
            Google My <span className="text-red-italic">Business</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            GBP setup, optimization, review engine, citations, and Map Pack domination. 50+ keywords ranked locally.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// HOW IT WORKS</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            From Invisible to Map Pack in <span className="text-red-italic">Four Phases</span>
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
            Common Questions About Our <span className="text-red-italic">GMB Services</span>
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
            Let's Dominate Your Local Map Pack
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