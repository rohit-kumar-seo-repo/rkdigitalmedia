import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | R.K Digital Media Greater Noida',
  description: 'Performance Marketing, SEO & Search Growth, Google Ads, GMB Optimization, AI Automation, Web Development, Creative & Content, CRM & Growth Systems. Book a free audit.',
  keywords: [
    'digital marketing agency Greater Noida',
    'digital marketing services Noida',
    'online marketing company Greater Noida',
    'internet marketing agency',
    'full service digital marketing',
    'digital marketing consultant',
    'growth marketing agency',
    'B2B digital marketing',
    'local business marketing Greater Noida',
    'digital marketing packages',
  ],
  openGraph: {
    title: 'Digital Marketing Services | R.K Digital Media Greater Noida',
    description: 'Performance Marketing, SEO & Search Growth, Google Ads, GMB Optimization, AI Automation, Web Development, Creative & Content, CRM & Growth Systems.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/services',
    siteName: 'R.K Digital Media',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Services | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services | R.K Digital Media Greater Noida',
    description: 'Performance Marketing, SEO & Search Growth, Google Ads, GMB Optimization, AI Automation, Web Development, Creative & Content, CRM & Growth Systems.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rkdigitalmedia.in/services',
  },
};

const services = [
  {
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    shortDesc: 'Meta Ads, Google Ads, lead gen funnels, AI-powered optimization. 3×–12× ROAS, first leads in 48 hours.',
    fullDesc: 'Meta Ads (Facebook + Instagram) and Google Ads (Search, Shopping, Performance Max, YouTube) with landing page CRO, WhatsApp follow-up integration, and weekly creative testing. Built for ROI, not vanity metrics.',
    metrics: { roas: '3×–12×', leads: '48hr', cac: '60%↓' },
    icon: '📈',
  },
  {
    slug: 'google-ads',
    title: 'Google Ads',
    shortDesc: 'Search, Shopping, Performance Max, YouTube Ads. Policy compliance, suspension recovery, 8.5× ROAS.',
    fullDesc: 'Google Partner certified. Full campaign management: Search (brand, generic, competitor, DSA), Shopping + PMax (feed optimization), YouTube (in-stream, Shorts). Suspension recovery specialist — 98% success rate.',
    metrics: { roas: '8.5×', recovery: '98%', audit: '48hr' },
    icon: '🔍',
  },
  {
    slug: 'seo',
    title: 'SEO & Search Growth',
    shortDesc: 'Technical SEO, local SEO, AEO/GEO, link building. Page 1 in 90 days. 50+ Map Pack keywords.',
    fullDesc: 'Technical audits, keyword strategy, content engine, authority building. Local SEO: GMB optimization, citations, reviews. AI search (AEO/GEO) readiness: schema, entity optimization for ChatGPT, Perplexity citations.',
    metrics: { days: '90', traffic: '200%↑', map: '50+' },
    icon: '🎯',
  },
  {
    slug: 'gmb',
    title: 'Google My Business',
    shortDesc: 'GBP setup, optimization, review engine, citations. Map Pack domination. 50+ keywords ranked.',
    fullDesc: 'Complete GBP optimization: categories, attributes, description, services menu, geo-tagged photos. Review generation system (QR/SMS/email), response management. 50+ citation building. Monthly rank grid tracking.',
    metrics: { keywords: '50+', calls: '30%↑', reviews: '95%' },
    icon: '📍',
  },
  {
    slug: 'web-development',
    title: 'Web & Conversion',
    shortDesc: 'Next.js / WordPress sites. 3–4 week delivery, 95+ PageSpeed, 2× conversion lift.',
    fullDesc: 'Conversion-focused websites, landing pages, e-commerce. Mobile-first design system, Core Web Vitals optimized (LCP <2s, CLS <0.1). GA4 + GTM + heatmaps. 1-year support included.',
    metrics: { delivery: '3–4wk', speed: '95+', cvr: '2×' },
    icon: '💻',
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    shortDesc: 'WhatsApp AI agents, voice agents, CRM automation, n8n workflows. 24/7 coverage, 80% faster response.',
    fullDesc: 'WhatsApp AI agents (instant reply, qualification, booking), voice agents (Vapi/Retell), CRM automation (GHL/HubSpot), n8n workflows (lead routing, scoring). Human handoff points, audit logs, monthly optimization.',
    metrics: { coverage: '24/7', speed: '80%↑', cpl: '40%↓' },
    icon: '🤖',
  },
  {
    slug: 'creative',
    title: 'Creative & Content',
    shortDesc: 'Ad creatives, video, motion, brand identity. 30 creatives/month, 3× engagement, 50% better ads.',
    fullDesc: 'Static/video/motion ads for Meta, Google, YouTube. Social content calendar (30 posts/month). UGC sourcing, AI video (Kling/Runway). Brand identity systems. Creative testing framework: CTR, hook rate, hold rate, ROAS.',
    metrics: { creatives: '30/mo', engagement: '3×', ads: '50%↑' },
    icon: '🎨',
  },
  {
    slug: 'crm',
    title: 'CRM & Growth Systems',
    shortDesc: 'GoHighLevel setup, WhatsApp API, n8n workflows. 7-day launch, 90% response rate, 3× pipeline visibility.',
    fullDesc: 'GHL account setup + sub-accounts, pipeline design, WhatsApp Business API, n8n workflows, email/SMS sequences, attribution dashboards. Team training + SOPs. 30 days post-launch support.',
    metrics: { launch: '7 days', response: '90%', pipeline: '3×' },
    icon: '🔧',
  },
];

const serviceSchemaString = '{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org","@type":"Service","name":"Digital Marketing Services","description":"Full-service digital marketing agency in Greater Noida: Performance Marketing, SEO, Google Ads, GMB, AI Automation, Web Development, Creative, CRM.","url":"https://rkdigitalmedia.in/services","provider":{"@type":"LocalBusiness","@id":"https://rkdigitalmedia.in/#localbusiness","name":"R.K Digital Media"},"category":"Digital Marketing","areaServed":[{"@type":"Place","name":"Greater Noida"},{"@type":"Place","name":"Noida"},{"@type":"Place","name":"Delhi NCR"},{"@type":"Place","name":"Ghaziabad"},{"@type":"Place","name":"Faridabad"},{"@type":"Place","name":"Gurugram"}],"hasOfferCatalog":{"@type":"OfferCatalog","name":"Digital Marketing Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Performance Marketing"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Google Ads Management"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"SEO & Search Growth"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Google My Business Optimization"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Web Development"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"AI Automation"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Creative & Content"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"CRM & Growth Systems"}}]}}]}';

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serviceSchemaString }}
      />
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center py-24">
          <p className="section-label mb-4">// SERVICES</p>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            Digital Marketing <span className="text-red-italic">Services</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Eight specialized services. One goal: measurable growth for Greater Noida businesses.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// THE STACK</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Every Service You Need to <span className="text-red-italic">Scale Online</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={service.slug} href={'/services/' + service.slug} className="group card-base p-6 h-full flex flex-col">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-2 group-hover:text-[var(--rkd-primary)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-body-sm text-[var(--rkd-fg-muted)] mb-4 flex-1">{service.shortDesc}</p>
                <div className="grid grid-cols-3 gap-2 text-center mb-4 p-3 bg-[var(--rkd-bg-secondary)] rounded-lg">
                  {Object.entries(service.metrics).map(([key, value]) => (
                    <div key={key}>
                      <div className="font-montserrat font-black text-[var(--rkd-primary)] text-lg">{value}</div>
                      <div className="text-xs text-[var(--rkd-fg-muted)]">{key.toUpperCase()}</div>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 font-montserrat font-semibold text-[var(--rkd-primary)] group-hover:gap-3 transition-all">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// HOW WE WORK</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            One Partner, <span className="text-red-italic">End-to-End</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Audit', desc: 'Free 30-min audit. We analyze your current state, competition, and opportunity.' },
              { num: '02', title: 'Strategy', desc: 'Custom roadmap with timelines, KPIs, and budget. No templates — built for your business.' },
              { num: '03', title: 'Execute', desc: 'Dedicated team, weekly syncs, real-time dashboards. You approve, we execute.' },
              { num: '04', title: 'Compound', desc: 'Monthly optimization, new opportunities, scale. Growth compounds over time.' },
            ].map((step) => (
              <div key={step.num} className="card-base p-6">
                <span className="font-montserrat font-black text-4xl text-[var(--rkd-primary)] opacity-40">{step.num}</span>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mt-3 mb-2">{step.title}</h3>
                <p className="text-body-sm text-[var(--rkd-fg-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg)] text-center">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// READY TO SCALE?</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-8" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Start With a Free <span className="text-red-italic">Audit</span>
          </h2>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto mb-8" style={{ lineHeight: '1.7' }}>
            No pitch decks. No pressure. Just a 30-minute deep-dive into your digital presence with actionable insights.
          </p>
          <a href="/contact" className="btn-primary inline-flex">
            Book Free Audit
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </>
  );
}