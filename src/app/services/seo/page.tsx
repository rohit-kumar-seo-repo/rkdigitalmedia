import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SEO & Search Growth Services | R.K Digital Media Greater Noida',
  description: 'Technical SEO, local SEO, AEO/GEO, and link building engineered for compound organic growth in Greater Noida & NCR. Page 1 rankings in 90 days.',
  keywords: [
    'SEO services Greater Noida',
    'SEO agency Noida',
    'local SEO Greater Noida',
    'technical SEO audit',
    'SEO company Greater Noida',
    'search engine optimization services',
    'Google ranking services',
    'organic traffic growth',
    'AEO GEO optimization',
    'AI search optimization',
  ],
  openGraph: {
    title: 'SEO & Search Growth Services | R.K Digital Media Greater Noida',
    description: 'Technical SEO, local SEO, AEO/GEO, and link building engineered for compound organic growth in Greater Noida & NCR. Page 1 rankings in 90 days.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/services/seo',
    siteName: 'R.K Digital Media',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO & Search Growth Services | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO & Search Growth Services | R.K Digital Media Greater Noida',
    description: 'Technical SEO, local SEO, AEO/GEO, and link building engineered for compound organic growth in Greater Noida & NCR.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rkdigitalmedia.in/services/seo',
  },
};

const steps = [
  { num: '01', title: 'Technical Audit', desc: 'Site health, Core Web Vitals, indexing issues, crawl budget, schema gaps — we fix the foundation first.' },
  { num: '02', title: 'Keyword Strategy', desc: 'Commercial + informational intent mapping for Greater Noida. High-intent local + service keywords that convert.' },
  { num: '03', title: 'Content Engine', desc: 'Optimised pages, blogs, location pages, GMB posts. Written for humans, structured for search engines.' },
  { num: '04', title: 'Authority Building', desc: 'Link building, citations, digital PR. DR 30-60 sites, niche-relevant. Monthly momentum.' },
];

const included = [
  'Technical SEO audit + full fix implementation',
  'On-page optimisation for 20+ pages/month',
  'Local SEO: GMB optimisation, citation building, review generation',
  'AEO/GEO: structured data, entity optimisation for AI search (ChatGPT, Perplexity)',
  'Monthly rank tracking report with competitor gap analysis',
  'Backlink building (DR 30-60 sites, niche-relevant)',
  'Content calendar + 4 long-form articles/month',
  'Schema markup: LocalBusiness, Service, FAQ, Article',
];

const stats = [
  { value: '90', label: 'Days to Page 1 (Local)' },
  { value: '200%', label: 'Avg Organic Traffic Increase' },
  { value: '50+', label: 'Map Pack Keywords Per Client' },
];

const faqItems = [
  { question: 'How much does SEO cost?', answer: 'Pricing depends on scope, competition, and goals. We provide custom quotes after a free 30-minute audit.' },
  { question: 'How long does SEO take to show results?', answer: 'Typically 30-90 days for initial results, depending on competition and current state. We provide realistic timelines during audit.' },
  { question: 'Do you work with businesses outside Greater Noida?', answer: 'Yes, we serve clients across Greater Noida, Noida, Delhi NCR, Ghaziabad, Faridabad, Gurugram and select clients nationwide. Remote collaboration works well for most engagements.' },
  { question: 'What makes your SEO different from other agencies?', answer: 'We focus on revenue outcomes, not vanity metrics. Our approach combines technical SEO, content strategy, local SEO, and AI search (AEO/GEO) optimization - all measured by leads and revenue attributed.' },
  { question: 'Do you guarantee Page 1 rankings?', answer: "We don't guarantee specific rankings (no ethical agency can). We guarantee honest effort, transparent reporting, and proven methodologies that have achieved Page 1 for 50+ local keywords across clients." },
];

const graphSchemaString = '{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org","@type":"Service","name":"SEO & Search Growth Services","description":"Technical SEO, local SEO, AEO/GEO, and link building engineered for compound organic growth in Greater Noida & NCR. Page 1 rankings in 90 days.","url":"https://rkdigitalmedia.in/services/seo","provider":{"@type":"LocalBusiness","@id":"https://rkdigitalmedia.in/#localbusiness","name":"R.K Digital Media"},"category":"SEO & Search Growth","areaServed":[{"@type":"Place","name":"Greater Noida"},{"@type":"Place","name":"Noida"},{"@type":"Place","name":"Delhi NCR"},{"@type":"Place","name":"Ghaziabad"},{"@type":"Place","name":"Faridabad"},{"@type":"Place","name":"Gurugram"}]},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does SEO cost?","acceptedAnswer":{"@type":"Answer","text":"Pricing depends on scope, competition, and goals. We provide custom quotes after a free 30-minute audit."}},{"@type":"Question","name":"How long does SEO take to show results?","acceptedAnswer":{"@type":"Answer","text":"Typically 30-90 days for initial results, depending on competition and current state. We provide realistic timelines during audit."}},{"@type":"Question","name":"Do you work with businesses outside Greater Noida?","acceptedAnswer":{"@type":"Answer","text":"Yes, we serve clients across Greater Noida, Noida, Delhi NCR, Ghaziabad, Faridabad, Gurugram and select clients nationwide. Remote collaboration works well for most engagements."}},{"@type":"Question","name":"What makes your SEO different from other agencies?","acceptedAnswer":{"@type":"Answer","text":"We focus on revenue outcomes, not vanity metrics. Our approach combines technical SEO, content strategy, local SEO, and AI search (AEO/GEO) optimization - all measured by leads and revenue attributed."}},{"@type":"Question","name":"Do you guarantee Page 1 rankings?","acceptedAnswer":{"@type":"Answer","text":"We don\'t guarantee specific rankings (no ethical agency can). We guarantee honest effort, transparent reporting, and proven methodologies that have achieved Page 1 for 50+ local keywords across clients."}}]}]}';

const faqSchemaString = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does SEO cost?","acceptedAnswer":{"@type":"Answer","text":"Pricing depends on scope, competition, and goals. We provide custom quotes after a free 30-minute audit."}},{"@type":"Question","name":"How long does SEO take to show results?","acceptedAnswer":{"@type":"Answer","text":"Typically 30-90 days for initial results, depending on competition and current state. We provide realistic timelines during audit."}},{"@type":"Question","name":"Do you work with businesses outside Greater Noida?","acceptedAnswer":{"@type":"Answer","text":"Yes, we serve clients across Greater Noida, Noida, Delhi NCR, Ghaziabad, Faridabad, Gurugram and select clients nationwide. Remote collaboration works well for most engagements."}},{"@type":"Question","name":"What makes your SEO different from other agencies?","acceptedAnswer":{"@type":"Answer","text":"We focus on revenue outcomes, not vanity metrics. Our approach combines technical SEO, content strategy, local SEO, and AI search (AEO/GEO) optimization - all measured by leads and revenue attributed."}},{"@type":"Question","name":"Do you guarantee Page 1 rankings?","acceptedAnswer":{"@type":"Answer","text":"We don\'t guarantee specific rankings (no ethical agency can). We guarantee honest effort, transparent reporting, and proven methodologies that have achieved Page 1 for 50+ local keywords across clients."}}]}';

export default function SEOPage() {
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
            SEO & <span className="text-red-italic">Search Growth</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Technical, content, and local SEO engineered for compound organic growth. AI search (AEO/GEO) readiness built in.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// HOW IT WORKS</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            From Audit to Authority in <span className="text-red-italic">Four Phases</span>
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
            Common Questions About Our <span className="text-red-italic">SEO Services</span>
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
            Let's Audit Your Search Presence
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