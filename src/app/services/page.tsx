import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Noida & Greater Noida | R.K Digital Media',
  description:
    'Explore Google Ads, website development, Google Ads suspension recovery, SEO, Google Business Profile management, and AI automation services for businesses in Noida, Greater Noida and Delhi NCR.',
  alternates: {
    canonical: 'https://rkdigitalmedia.in/services',
  },
  openGraph: {
    title: 'Digital Marketing Services in Noida & Greater Noida | R.K Digital Media',
    description:
      'Google Ads, website development, Google Ads suspension recovery, SEO, Google Business Profile management and AI automation.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/services',
    siteName: 'R.K Digital Media',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'R.K Digital Media Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services in Noida & Greater Noida',
    description:
      'Google Ads, SEO, website development, Google Business Profile management, suspension recovery and AI automation.',
    images: ['/og-image.jpg'],
  },
};

const services = [
  {
    number: '01',
    title: 'Google Ads Services',
    slug: '/services/google-ads',
    intent: 'For businesses that need qualified traffic and measurable paid-search growth.',
    description:
      'Campaign strategy, account structure, keyword research, conversion tracking, Search, Shopping, Performance Max and YouTube campaign management.',
    capabilities: ['Account & campaign audit', 'Search and Shopping campaigns', 'Performance Max management', 'Conversion tracking and optimisation', 'Search-term and negative-keyword management'],
  },
  {
    number: '02',
    title: 'Website Development Services',
    slug: '/services/web-development',
    intent: 'For businesses that need a faster, clearer website that supports SEO and enquiries.',
    description:
      'Conversion-focused business websites and landing pages with responsive UX, technical SEO foundations, analytics and performance considerations built into the project.',
    capabilities: ['Business websites and landing pages', 'Next.js and WordPress development', 'Technical SEO foundations', 'Analytics and conversion tracking', 'Mobile-first UX and performance'],
  },
  {
    number: '03',
    title: 'Google Ads Suspension Recovery',
    slug: '/services/google-ads-suspension-recovery',
    intent: 'For advertisers whose Google Ads account has been suspended or repeatedly disapproved.',
    description:
      'A structured review of account, website, billing, ads, assets and product data to identify policy risks before preparing a compliant appeal and recovery plan.',
    capabilities: ['Suspension and policy review', 'Website and landing-page compliance review', 'Merchant/product data review where relevant', 'Appeal preparation', 'Post-reinstatement risk reduction'],
  },
  {
    number: '04',
    title: 'SEO Services',
    slug: '/services/seo',
    intent: 'For businesses that want sustainable organic visibility instead of relying only on paid traffic.',
    description:
      'Technical SEO, content strategy, on-page optimisation, local SEO and authority development aligned with the searches that matter to the business.',
    capabilities: ['Technical SEO audits', 'Keyword and search-intent mapping', 'On-page and content optimisation', 'Local SEO', 'Performance and indexing monitoring'],
  },
  {
    number: '05',
    title: 'Google Business Profile Management Services',
    slug: '/services/gmb',
    intent: 'For local businesses that depend on Google Maps, calls, directions and local discovery.',
    description:
      'Google Business Profile setup, optimisation and ongoing management covering categories, services, business information, reviews, photos, posts and local visibility.',
    capabilities: ['GBP setup and optimisation', 'Category and service optimisation', 'Review and response workflow', 'Local content and profile updates', 'Local SEO and citation support'],
  },
  {
    number: '06',
    title: 'AI Automation Services',
    slug: '/services/ai-automation',
    intent: 'For teams that lose leads because follow-up, qualification or repetitive operations are handled manually.',
    description:
      'Practical automation for lead capture, qualification, routing, follow-up and internal workflows using the systems your business already depends on.',
    capabilities: ['Lead capture and routing', 'WhatsApp and conversational workflows', 'CRM automation', 'n8n workflow automation', 'Human handoff and monitoring'],
  },
];

const caseStudies = [
  {
    type: 'Google Ads',
    title: 'Google Ads Suspension Recovery & Scale',
    location: 'E-commerce · Delhi NCR',
    metric: '8.5×',
    label: 'Peak ROAS',
    description:
      'A suspended account was reviewed across policy, landing pages and product data before reinstatement and subsequent campaign rebuilding. The existing case study reports scaling to ₹15L/month spend at peak ROAS.',
    href: '/case-studies/google-ads-recovery',
  },
  {
    type: 'Local SEO',
    title: 'Local SEO for a Home Services Business',
    location: 'Home Services · Noida & Greater Noida',
    metric: '50+',
    label: 'Map Pack Keywords',
    description:
      'The project combined Google Business Profile optimisation, location pages, review generation, citations and technical SEO to build local visibility for high-intent service searches.',
    href: '/case-studies/local-seo-domination',
  },
  {
    type: 'B2B Growth',
    title: 'B2B Lead Generation for an Industrial Supplier',
    location: 'Manufacturing · Greater Noida',
    metric: '1,200+',
    label: 'SQLs Generated',
    description:
      'Search, high-intent content, paid acquisition and lead scoring were combined around qualified pipeline rather than traffic volume.',
    href: '/case-studies/b2b-lead-gen',
  },
  {
    type: 'Local + Paid',
    title: 'Multi-Location Clinic Digital Growth',
    location: 'Healthcare · Noida & Ghaziabad',
    metric: '3,500+',
    label: 'Appointments',
    description:
      'Three locations were supported with location-specific landing pages, Google Business Profile optimisation, geo-targeted Google Ads and local SEO.',
    href: '/case-studies/healthcare-clinic',
  },
];

const faqs = [
  {
    question: 'What digital marketing services does R.K Digital Media provide?',
    answer:
      'The core services are Google Ads, website development, Google Ads suspension recovery, SEO, Google Business Profile management and AI automation. Each service can be used independently or combined when the business needs a broader acquisition system.',
  },
  {
    question: 'Do you provide digital marketing services in Noida and Greater Noida?',
    answer:
      'Yes. R.K Digital Media works with businesses in Noida, Greater Noida and the wider Delhi NCR market, as well as businesses that need services beyond the local area.',
  },
  {
    question: 'Which service should I start with?',
    answer:
      'It depends on the bottleneck. If paid acquisition is the immediate need, Google Ads may be the starting point. If organic visibility is the priority, SEO or Google Business Profile management may be more appropriate. If the website is limiting enquiries, website development can come first. If leads are being lost after they arrive, AI automation can address the follow-up process.',
  },
  {
    question: 'Can you manage more than one service together?',
    answer:
      'Yes. Some businesses need a combination such as SEO plus Google Business Profile management, or Google Ads plus landing-page development and conversion tracking. The combination should follow the business problem rather than adding services unnecessarily.',
  },
  {
    question: 'How do you decide what to recommend?',
    answer:
      'The starting point is an audit of the current website, search visibility, Google Business Profile where relevant, paid campaigns, conversion path and business goals. The recommendation is based on the highest-impact gaps found in that review.',
  },
  {
    question: 'Do you guarantee Google rankings or Google Ads results?',
    answer:
      'No responsible agency can guarantee a specific organic ranking or advertising result because search results, auctions, competition, policy decisions and business factors change. The work should instead be measured through defined KPIs, tracking and documented optimisation.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rkdigitalmedia.in/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://rkdigitalmedia.in/services' },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Digital Marketing Services',
      url: 'https://rkdigitalmedia.in/services',
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: service.title,
        url: `https://rkdigitalmedia.in${service.slug}`,
      })),
    },
    {
      '@type': 'Service',
      name: 'Digital Marketing Services',
      serviceType: 'Digital Marketing',
      provider: {
        '@type': 'LocalBusiness',
        name: 'R.K Digital Media',
        url: 'https://rkdigitalmedia.in/',
      },
      areaServed: [
        { '@type': 'City', name: 'Noida' },
        { '@type': 'City', name: 'Greater Noida' },
        { '@type': 'City', name: 'Ghaziabad' },
        { '@type': 'City', name: 'Delhi' },
        { '@type': 'City', name: 'Gurugram' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing Services',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: service.title, url: `https://rkdigitalmedia.in${service.slug}` },
        })),
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <main id="top">
        <section className="relative min-h-[68vh] flex items-center bg-[var(--rkd-bg)] grid-pattern">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6 py-28 md:py-36 w-full">
            <div className="max-w-5xl">
              <p className="section-label mb-5">// DIGITAL MARKETING SERVICES</p>
              <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-7" style={{ fontSize: 'clamp(2.6rem, 6vw, 5.6rem)', lineHeight: '1.02' }}>
                Digital Marketing Services in <span className="text-red-italic">Noida & Greater Noida</span>
              </h1>
              <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-3xl" style={{ lineHeight: '1.75' }}>
                One place for the six capabilities most businesses need to build visibility, acquire customers, convert demand and follow up consistently — without paying for a long list of unrelated services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-9">
                <Link href="/contact" className="btn-primary group">
                  Get a Growth Audit
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="#services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--rkd-border)]">
              {[
                ['10+', 'Years of experience'],
                ['6', 'Core services'],
                ['Noida + NCR', 'Primary market'],
                ['Real work', 'Case-study evidence'],
              ].map(([value, label]) => (
                <div key={label} className="bg-[var(--rkd-bg-secondary)] px-5 py-7 md:px-8">
                  <p className="font-montserrat font-black text-2xl md:text-3xl text-[var(--rkd-primary)]">{value}</p>
                  <p className="text-body-sm text-[var(--rkd-fg-muted)] mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 md:py-32 bg-[var(--rkd-bg)] scroll-mt-20">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <p className="section-label mb-4">// SIX CORE CAPABILITIES</p>
            <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] max-w-3xl mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', lineHeight: '1.1' }}>
              The services are different. <span className="text-red-italic">The goal is connected.</span>
            </h2>
            <p className="text-[var(--rkd-fg-muted)] max-w-2xl text-body-lg mb-12" style={{ lineHeight: '1.75' }}>
              Search visibility, paid acquisition, website performance and lead follow-up affect one another. These six services cover the major parts of that journey while keeping each service focused on a clear business problem.
            </p>

            <div className="space-y-5">
              {services.map((service) => (
                <article key={service.number} className="group grid lg:grid-cols-[100px_1fr_1.2fr_auto] gap-6 lg:gap-10 items-start p-7 md:p-9 bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-2xl hover:border-[var(--rkd-primary)]/40 transition-colors">
                  <span className="font-montserrat font-black text-4xl text-[var(--rkd-primary)] opacity-50">{service.number}</span>
                  <div>
                    <h3 className="font-montserrat font-bold text-[var(--rkd-fg)] text-xl md:text-2xl mb-2 group-hover:text-[var(--rkd-primary)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--rkd-fg-subtle)]">{service.intent}</p>
                  </div>
                  <div>
                    <p className="text-[var(--rkd-fg-muted)] leading-relaxed">{service.description}</p>
                    <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                      {service.capabilities.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-[var(--rkd-fg-muted)]">
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-[var(--rkd-primary)] mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={service.slug} className="inline-flex items-center gap-2 text-sm font-montserrat font-semibold text-[var(--rkd-primary)] whitespace-nowrap">
                    View service <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <p className="section-label mb-4">// START WITH THE PROBLEM</p>
            <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] max-w-3xl mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.1' }}>
              Not sure which service you <span className="text-red-italic">actually need?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                ['“We are not getting enough enquiries from Google.”', 'Start with SEO and/or Google Business Profile management if the problem is organic/local visibility.'],
                ['“We need leads now, but our campaigns are inefficient.”', 'Start with Google Ads. If the landing experience is weak, pair it with website development.'],
                ['“Our Google Ads account has been suspended.”', 'Start with the suspension recovery service before launching replacement campaigns or making repeated appeals.'],
                ['“People visit the website but do not enquire.”', 'Review the website, offer, tracking and conversion path. Website development may be the first priority.'],
                ['“Our competitors appear everywhere in local search.”', 'Review Google Business Profile, local SEO, service/location relevance, reviews and website authority.'],
                ['“Leads come in, but our team cannot follow up fast enough.”', 'AI automation can route, qualify and follow up with leads while keeping human handoff points.'],
              ].map(([problem, answer]) => (
                <div key={problem} className="card-base p-6 md:p-7">
                  <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-3">{problem}</h3>
                  <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
              <div>
                <p className="section-label mb-4">// HOW THE SYSTEM FITS TOGETHER</p>
                <h2 className="font-montserrat font-bold text-[var(--rkd-fg)]" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.1' }}>
                  Build the part that is <span className="text-red-italic">holding you back.</span>
                </h2>
              </div>
              <div className="space-y-5">
                {[
                  ['01', 'Be found', 'SEO and Google Business Profile management help the right people discover your business through organic and local search.'],
                  ['02', 'Capture demand', 'Google Ads gives you a paid channel for searches where immediate visibility matters.'],
                  ['03', 'Convert attention', 'Website development turns traffic into clear next steps, enquiries and measurable conversion paths.'],
                  ['04', 'Recover lost demand', 'Google Ads suspension recovery addresses a specific policy and account problem before paid acquisition can resume safely.'],
                  ['05', 'Follow up', 'AI automation helps businesses respond, qualify, route and nurture leads without making every step manual.'],
                ].map(([num, title, text]) => (
                  <div key={num} className="grid grid-cols-[55px_1fr] gap-5 p-6 bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-xl">
                    <span className="font-mono text-[var(--rkd-primary)]">{num}</span>
                    <div>
                      <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-2">{title}</h3>
                      <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="section-label mb-4">// CLIENT WORK</p>
                <h2 className="font-montserrat font-bold text-[var(--rkd-fg)]" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.1' }}>
                  Case studies with the <span className="text-red-italic">work attached.</span>
                </h2>
              </div>
              <Link href="/case-studies" className="btn-secondary self-start md:self-auto">
                View all case studies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {caseStudies.map((study) => (
                <Link key={study.href} href={study.href} className="group card-base p-7 md:p-8 hover:border-[var(--rkd-primary)]/40 transition-colors">
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <span className="section-label">{study.type}</span>
                    <span className="text-xs text-[var(--rkd-fg-subtle)]">{study.location}</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-[var(--rkd-fg)] text-xl md:text-2xl mb-4 group-hover:text-[var(--rkd-primary)] transition-colors">
                    {study.title}
                  </h3>
                  <div className="flex items-end gap-3 mb-4">
                    <span className="font-montserrat font-black text-5xl text-[var(--rkd-primary)]">{study.metric}</span>
                    <span className="text-xs uppercase tracking-wider text-[var(--rkd-fg-subtle)] mb-2">{study.label}</span>
                  </div>
                  <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed mb-6">{study.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-montserrat font-semibold text-[var(--rkd-primary)]">
                    Read case study <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
            <p className="text-xs text-[var(--rkd-fg-subtle)] mt-6">
              Results shown above are the figures currently documented in the corresponding case-study pages. Individual results vary by business, market, budget and execution.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <p className="section-label mb-4">// WHY WORK WITH R.K DIGITAL MEDIA</p>
            <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] max-w-3xl mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.1' }}>
              Strategy first. <span className="text-red-italic">Execution second.</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                ['One clear scope', 'Six core services keep the offering understandable. We recommend the work that matches the actual bottleneck.'],
                ['Measurement built in', 'Campaigns, websites and organic work should have a defined measurement plan instead of relying on impressions alone.'],
                ['Search + conversion', 'Visibility is only useful when the next step is clear. Website, tracking and conversion paths are considered alongside acquisition.'],
                ['Local market experience', 'The primary service area includes Noida, Greater Noida and Delhi NCR, with work structured around local search behaviour where relevant.'],
              ].map(([title, text]) => (
                <div key={title} className="card-base p-6">
                  <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-3">{title}</h3>
                  <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <p className="section-label mb-4">// WORKING PROCESS</p>
            <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] max-w-3xl mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.1' }}>
              What happens after you <span className="text-red-italic">get in touch?</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-px bg-[var(--rkd-border)]">
              {[
                ['01', 'Understand', 'We discuss the business, offer, market, current channels and the problem you want solved.'],
                ['02', 'Audit', 'We review the relevant search presence, website, advertising account or operational workflow.'],
                ['03', 'Recommend', 'You receive a focused plan: what to fix first, what can wait and how success should be measured.'],
                ['04', 'Execute', 'If we work together, implementation starts with agreed scope, priorities, tracking and reporting.'],
              ].map(([num, title, text]) => (
                <div key={num} className="bg-[var(--rkd-bg-secondary)] p-7">
                  <span className="font-mono text-[var(--rkd-primary)]">{num}</span>
                  <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mt-5 mb-3">{title}</h3>
                  <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <p className="section-label mb-4">// AREAS SERVED</p>
            <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.1' }}>
              Digital marketing for businesses across <span className="text-red-italic">Delhi NCR.</span>
            </h2>
            <p className="text-[var(--rkd-fg-muted)] max-w-3xl text-body-lg leading-relaxed">
              The core market is Noida and Greater Noida, with services also available for businesses across Delhi, Ghaziabad, Gurugram and the wider NCR region. For local SEO and Google Business Profile work, the strategy is adapted to the specific service area and competition around the business.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Noida', 'Greater Noida', 'Gaur City', 'Ghaziabad', 'Delhi', 'Gurugram', 'Delhi NCR'].map((area) => (
                <span key={area} className="px-4 py-2 rounded-full border border-[var(--rkd-border)] bg-[var(--rkd-card)] text-sm text-[var(--rkd-fg-muted)]">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <p className="section-label mb-4">// FAQ</p>
            <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-10" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.1' }}>
              Questions businesses usually ask <span className="text-red-italic">before starting.</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-xl p-6">
                  <summary className="cursor-pointer list-none font-montserrat font-semibold text-[var(--rkd-fg)] pr-8">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-[var(--rkd-fg-muted)] leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-36 bg-[var(--rkd-bg)] text-center">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <p className="section-label mb-4">// NEXT STEP</p>
            <h2 className="font-montserrat font-black text-[var(--rkd-fg)] mb-7" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)', lineHeight: '1.05' }}>
              Know the problem. <span className="text-red-italic">Now find the right fix.</span>
            </h2>
            <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto mb-9 leading-relaxed">
              Tell us what is not working — visibility, paid acquisition, your website, a suspended Ads account or lead follow-up — and we can start from there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary group">
                Book a Growth Audit <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                See Client Work
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
