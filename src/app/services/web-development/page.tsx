import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web & Conversion Services | R.K Digital Media Greater Noida',
  description: 'Conversion-focused websites, landing pages, and e-commerce stores. 3–4 week delivery, 95+ PageSpeed, 2× conversion rate lift.',
  keywords: [
    'web development agency Greater Noida',
    'website design company Noida',
    'Next.js development Greater Noida',
    'WordPress website development',
    'landing page design services',
    'e-commerce website development',
    'CRO conversion rate optimization',
    'Core Web Vitals optimization',
    'GA4 GTM setup',
    'website redesign Greater Noida',
  ],
  openGraph: {
    title: 'Web & Conversion Services | R.K Digital Media Greater Noida',
    description: 'Conversion-focused websites, landing pages, and e-commerce stores. 3–4 week delivery, 95+ PageSpeed, 2× conversion rate lift.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/services/web-development',
    siteName: 'R.K Digital Media',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web & Conversion Services | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web & Conversion Services | R.K Digital Media Greater Noida',
    description: 'Conversion-focused websites, landing pages, and e-commerce stores. 3–4 week delivery, 95+ PageSpeed, 2× conversion rate lift.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rkdigitalmedia.in/services/web-development',
  },
};

const steps = [
  { num: '01', title: 'Discovery', desc: 'Business goals, user journeys, sitemap, wireframes. Conversion architecture before code.' },
  { num: '02', title: 'Design', desc: 'Mobile-first design system, component library, accessibility audit. Figma → clean handoff.' },
  { num: '03', title: 'Build', desc: 'Next.js or WordPress. Clean code, SEO-ready, Core Web Vitals optimised. Staging review at every milestone.' },
  { num: '04', title: 'Launch & CRO', desc: 'DNS, analytics, heatmaps. Post-launch CRO sprints (A/B tests, funnel fixes). 1-year support included.' },
];

const included = [
  'Next.js (App Router, TypeScript, Tailwind) or WordPress (block theme)',
  'Mobile-first responsive design with design system',
  'Core Web Vitals optimised — LCP < 2s, CLS < 0.1',
  'CRO baked in: trust signals, form optimisation, checkout flow',
  'GMB integration + local schema markup',
  'GA4 + GTM + heatmaps (Hotjar/Clarity) configured',
  '1-year support + content management training',
];

const stats = [
  { value: '3–4wk', label: 'Typical Delivery' },
  { value: '95+', label: 'PageSpeed Score' },
  { value: '2×', label: 'Avg Conversion Rate Lift' },
];

const faqItems = [
  { question: 'What platforms do you build on?', answer: 'We specialize in Next.js (App Router, TypeScript, Tailwind) and WordPress (block themes, FSE). We recommend based on your needs, budget, and internal capabilities.' },
  { question: 'How long does a website take?', answer: 'Typical projects: 3-4 weeks for business sites, 4-6 weeks for e-commerce, 1-2 weeks for landing pages. We provide exact timelines during discovery.' },
  { question: 'Do you provide hosting and maintenance?', answer: 'We deploy to Vercel (Next.js) or managed WordPress hosts. We provide 1-year support including updates, backups, and minor content changes. Ongoing maintenance plans available.' },
  { question: 'Will my site be SEO-ready?', answer: 'Yes — every site ships with technical SEO foundation: semantic HTML, schema markup, optimized Core Web Vitals, XML sitemap, robots.txt, and local business schema for Greater Noida visibility.' },
  { question: 'Do you redesign existing websites?', answer: 'Yes, we audit your current site, preserve SEO equity, and rebuild on modern stack with CRO improvements. Migration includes 301 redirects and traffic preservation strategy.' },
];

const graphSchemaString = '{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org","@type":"Service","name":"Web & Conversion Services","description":"Conversion-focused websites, landing pages, and e-commerce stores. 3–4 week delivery, 95+ PageSpeed, 2× conversion rate lift.","url":"https://rkdigitalmedia.in/services/web-development","provider":{"@type":"LocalBusiness","@id":"https://rkdigitalmedia.in/#localbusiness","name":"R.K Digital Media"},"category":"Web Development","areaServed":[{"@type":"Place","name":"Greater Noida"},{"@type":"Place","name":"Noida"},{"@type":"Place","name":"Delhi NCR"},{"@type":"Place","name":"Ghaziabad"},{"@type":"Place","name":"Faridabad"},{"@type":"Place","name":"Gurugram"}]},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What platforms do you build on?","acceptedAnswer":{"@type":"Answer","text":"We specialize in Next.js (App Router, TypeScript, Tailwind) and WordPress (block themes, FSE). We recommend based on your needs, budget, and internal capabilities."}},{"@type":"Question","name":"How long does a website take?","acceptedAnswer":{"@type":"Answer","text":"Typical projects: 3-4 weeks for business sites, 4-6 weeks for e-commerce, 1-2 weeks for landing pages. We provide exact timelines during discovery."}},{"@type":"Question","name":"Do you provide hosting and maintenance?","acceptedAnswer":{"@type":"Answer","text":"We deploy to Vercel (Next.js) or managed WordPress hosts. We provide 1-year support including updates, backups, and minor content changes. Ongoing maintenance plans available."}},{"@type":"Question","name":"Will my site be SEO-ready?","acceptedAnswer":{"@type":"Answer","text":"Yes — every site ships with technical SEO foundation: semantic HTML, schema markup, optimized Core Web Vitals, XML sitemap, robots.txt, and local business schema for Greater Noida visibility."}},{"@type":"Question","name":"Do you redesign existing websites?","acceptedAnswer":{"@type":"Answer","text":"Yes, we audit your current site, preserve SEO equity, and rebuild on modern stack with CRO improvements. Migration includes 301 redirects and traffic preservation strategy."}}]}]}';

const faqSchemaString = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What platforms do you build on?","acceptedAnswer":{"@type":"Answer","text":"We specialize in Next.js (App Router, TypeScript, Tailwind) and WordPress (block themes, FSE). We recommend based on your needs, budget, and internal capabilities."}},{"@type":"Question","name":"How long does a website take?","acceptedAnswer":{"@type":"Answer","text":"Typical projects: 3-4 weeks for business sites, 4-6 weeks for e-commerce, 1-2 weeks for landing pages. We provide exact timelines during discovery."}},{"@type":"Question","name":"Do you provide hosting and maintenance?","acceptedAnswer":{"@type":"Answer","text":"We deploy to Vercel (Next.js) or managed WordPress hosts. We provide 1-year support including updates, backups, and minor content changes. Ongoing maintenance plans available."}},{"@type":"Question","name":"Will my site be SEO-ready?","acceptedAnswer":{"@type":"Answer","text":"Yes — every site ships with technical SEO foundation: semantic HTML, schema markup, optimized Core Web Vitals, XML sitemap, robots.txt, and local business schema for Greater Noida visibility."}},{"@type":"Question","name":"Do you redesign existing websites?","acceptedAnswer":{"@type":"Answer","text":"Yes, we audit your current site, preserve SEO equity, and rebuild on modern stack with CRO improvements. Migration includes 301 redirects and traffic preservation strategy."}}]}';

export default function WebDevelopmentPage() {
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
            Web & <span className="text-red-italic">Conversion</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Conversion-focused websites, landing pages, and e-commerce stores. Performance-tuned with CRO baked in.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// HOW IT WORKS</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            From Brief to Live in <span className="text-red-italic">Four Phases</span>
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
            Every Project Includes
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
            Common Questions About Our <span className="text-red-italic">Web Development</span>
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
            Let's Build Your Digital Asset
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