import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Creative & Content Services | R.K Digital Media Greater Noida',
  description: 'Social media creatives, video production, motion graphics, brand identity. 30 creatives/month, 3× engagement, 50% better ad performance.',
  keywords: [
    'creative agency Greater Noida',
    'social media content creation Noida',
    'video production company Greater Noida',
    'motion graphics services',
    'brand identity design',
    'ad creative production',
    'UGC content creation',
    'AI video generation',
    'creative strategy agency',
    'content marketing Greater Noida',
  ],
  openGraph: {
    title: 'Creative & Content Services | R.K Digital Media Greater Noida',
    description: 'Social media creatives, video production, motion graphics, brand identity. 30 creatives/month, 3× engagement, 50% better ad performance.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/services/creative',
    siteName: 'R.K Digital Media',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Creative & Content Services | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative & Content Services | R.K Digital Media Greater Noida',
    description: 'Social media creatives, video production, motion graphics, brand identity. 30 creatives/month, 3× engagement, 50% better ad performance.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rkdigitalmedia.in/services/creative',
  },
};

const steps = [
  { num: '01', title: 'Brand Audit', desc: 'Current creative audit, competitor analysis, audience hooks. Data before design.' },
  { num: '02', title: 'Creative Strategy', desc: 'Hook angles, format mix, platform strategy. Ad creatives built for CTR, not likes.' },
  { num: '03', title: 'Production', desc: 'Batch shoot/edit. UGC, motion, static. AI-accelerated variations (Kling/Runway).' },
  { num: '04', title: 'Launch & Iterate', desc: 'Deploy to ad accounts. Creative testing framework. Kill losers, scale winners weekly.' },
];

const included = [
  'Ad creatives (Meta, Google, YouTube) — static, video, carousel',
  'Social media content calendar + 30 posts/month',
  'Motion graphics & kinetic typography',
  'Brand identity system (logo, palette, typography, guidelines)',
  'UGC sourcing & editing (creator network)',
  'AI video generation (Kling, Runway, custom workflows)',
  'Creative performance reporting (CTR, hook rate, hold rate)',
  'Quarterly creative refresh strategy',
];

const stats = [
  { value: '30', label: 'Creatives Delivered/Month' },
  { value: '3×', label: 'Higher Engagement Rate' },
  { value: '50%', label: 'Better Ad Performance' },
];

const faqItems = [
  { question: 'What types of creatives do you produce?', answer: 'Static ads, video ads, carousels, motion graphics, UGC, Reels/TikToks, brand identity systems, and AI-generated video variations.' },
  { question: 'How many creatives per month?', answer: 'Standard package: 30 creatives/month (mix of static, video, motion). Higher volumes available for enterprise clients.' },
  { question: 'Do you handle video production?', answer: 'Yes — we coordinate shoots, edit footage, create motion graphics, and leverage AI video tools (Kling, Runway) for rapid variations.' },
  { question: 'How do you measure creative performance?', answer: 'We track CTR, hook rate (3-sec view), hold rate (avg watch time), CPC, and ROAS. Weekly creative testing reports show winners/losers.' },
  { question: 'Can you work with our existing brand guidelines?', answer: 'Absolutely. We audit your current brand system, extend it for digital performance, or build a complete identity from scratch.' },
];

const graphSchemaString = '{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org","@type":"Service","name":"Creative & Content Services","description":"Social media creatives, video production, motion graphics, brand identity. 30 creatives/month, 3× engagement, 50% better ad performance.","url":"https://rkdigitalmedia.in/services/creative","provider":{"@type":"LocalBusiness","@id":"https://rkdigitalmedia.in/#localbusiness","name":"R.K Digital Media"},"category":"Creative & Content","areaServed":[{"@type":"Place","name":"Greater Noida"},{"@type":"Place","name":"Noida"},{"@type":"Place","name":"Delhi NCR"},{"@type":"Place","name":"Ghaziabad"},{"@type":"Place","name":"Faridabad"},{"@type":"Place","name":"Gurugram"}]},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What types of creatives do you produce?","acceptedAnswer":{"@type":"Answer","text":"Static ads, video ads, carousels, motion graphics, UGC, Reels/TikToks, brand identity systems, and AI-generated video variations."}},{"@type":"Question","name":"How many creatives per month?","acceptedAnswer":{"@type":"Answer","text":"Standard package: 30 creatives/month (mix of static, video, motion). Higher volumes available for enterprise clients."}},{"@type":"Question","name":"Do you handle video production?","acceptedAnswer":{"@type":"Answer","text":"Yes — we coordinate shoots, edit footage, create motion graphics, and leverage AI video tools (Kling, Runway) for rapid variations."}},{"@type":"Question","name":"How do you measure creative performance?","acceptedAnswer":{"@type":"Answer","text":"We track CTR, hook rate (3-sec view), hold rate (avg watch time), CPC, and ROAS. Weekly creative testing reports show winners/losers."}},{"@type":"Question","name":"Can you work with our existing brand guidelines?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. We audit your current brand system, extend it for digital performance, or build a complete identity from scratch."}}]}]}';

const faqSchemaString = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What types of creatives do you produce?","acceptedAnswer":{"@type":"Answer","text":"Static ads, video ads, carousels, motion graphics, UGC, Reels/TikToks, brand identity systems, and AI-generated video variations."}},{"@type":"Question","name":"How many creatives per month?","acceptedAnswer":{"@type":"Answer","text":"Standard package: 30 creatives/month (mix of static, video, motion). Higher volumes available for enterprise clients."}},{"@type":"Question","name":"Do you handle video production?","acceptedAnswer":{"@type":"Answer","text":"Yes — we coordinate shoots, edit footage, create motion graphics, and leverage AI video tools (Kling, Runway) for rapid variations."}},{"@type":"Question","name":"How do you measure creative performance?","acceptedAnswer":{"@type":"Answer","text":"We track CTR, hook rate (3-sec view), hold rate (avg watch time), CPC, and ROAS. Weekly creative testing reports show winners/losers."}},{"@type":"Question","name":"Can you work with our existing brand guidelines?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. We audit your current brand system, extend it for digital performance, or build a complete identity from scratch."}}]}';

export default function CreativePage() {
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
            Creative & <span className="text-red-italic">Content</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Social media creatives, video production, motion graphics, and brand identity. Built for performance, not just aesthetics.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// HOW IT WORKS</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            From Brief to Viral in <span className="text-red-italic">Four Steps</span>
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
            Common Questions About Our <span className="text-red-italic">Creative Services</span>
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
            Let's Create Converting Assets
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