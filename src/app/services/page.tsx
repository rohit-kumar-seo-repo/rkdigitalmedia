import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { GoogleReviews } from '@/components/GoogleReviews';
import VisualFramework from '@/components/VisualFramework';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Noida | R.K Digital Media',
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
    title: 'Digital Marketing Services in Noida | R.K Digital Media',
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
    <main id="top">
      <section className="relative overflow-hidden bg-[var(--rkd-bg)] grid-pattern">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-12">
          <div className="text-xs text-[var(--rkd-fg-muted)] mb-10">Home / Services</div>
          <div className="max-w-5xl">
            <p className="section-label mb-5">// SERVICES · GROWTH SYSTEMS</p>
            <h1 className="hero-headline text-[var(--rkd-fg)] mb-7">
              Digital marketing services built around <span className="text-red-italic">business outcomes.</span>
            </h1>
            <p className="hero-subheadline max-w-3xl">
              Six focused capabilities covering paid acquisition, search visibility, websites, Google Business Profile management, Ads recovery and practical automation — built for businesses in Noida, Greater Noida, Delhi NCR and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link href="/contact" className="btn-primary group">Book a Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
              <Link href="/case-studies" className="btn-secondary">See Case Studies <ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
        <div className="border-y border-[var(--rkd-border)] bg-[var(--rkd-card)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4">
            {[['06','Core services'],['8+','Years experience'],['NCR','Primary market'],['7','Published reviews']].map(([value,label]) => (
              <div key={label} className="p-6 md:p-8 border-r border-[var(--rkd-border)] last:border-r-0">
                <div className="stat-value text-3xl md:text-4xl">{value}</div>
                <div className="stat-label mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 01. OVERVIEW</p>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <h2 className="section-heading section-heading-h2">One services hub. <span className="text-red-italic">Six clear jobs to be done.</span></h2>
            <div>
              <p className="text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed">
                Businesses rarely have one isolated marketing problem. You may need more qualified traffic, stronger local visibility, a better website, a way back into a suspended Ads account, or a faster lead follow-up system. This page brings those capabilities together without turning the service menu into a list of unrelated add-ons.
              </p>
              <p className="text-[var(--rkd-fg-muted)] leading-relaxed mt-5">
                Start with the bottleneck. Use one service when that is enough. Combine services only when the customer journey requires it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)] scroll-mt-20">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 02. SERVICES</p>
          <h2 className="section-heading section-heading-h2 max-w-4xl mb-12">Six capabilities. <span className="text-red-italic">No filler.</span></h2>
          <div className="divide-y divide-[var(--rkd-border)] border-y border-[var(--rkd-border)]">
            {services.map((service) => (
              <Link href={service.slug} key={service.number} className="group grid md:grid-cols-[70px_1fr_1.2fr_120px] gap-5 md:gap-8 py-8 md:py-10 items-start">
                <span className="font-mono text-xs text-[var(--rkd-primary)]">{service.number}</span>
                <div>
                  <h3 className="section-heading section-heading-h3 group-hover:text-[var(--rkd-primary)] transition-colors">{service.title}</h3>
                  <p className="text-xs uppercase tracking-wider text-[var(--rkd-fg-muted)] mt-2">{service.intent}</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.capabilities.slice(0,4).map(item => <span key={item} className="text-xs px-3 py-1.5 border border-[var(--rkd-border)] rounded-full text-[var(--rkd-fg-muted)]">{item}</span>)}
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--rkd-primary)] md:justify-end">Explore <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 03. OUTCOMES</p>
          <h2 className="section-heading section-heading-h2 max-w-4xl mb-12">What these services are designed to <span className="text-red-italic">unlock.</span></h2>
          <div className="grid md:grid-cols-2 gap-px bg-[var(--rkd-border)]">
            {[
              ['More qualified demand', 'Search, paid acquisition and local visibility focused on the customers and queries that matter to the business.'],
              ['A website that supports acquisition', 'Clear positioning, useful landing pages, technical foundations, mobile UX and measurable conversion paths.'],
              ['A recoverable advertising system', 'When Google Ads is suspended, diagnosis and compliance work comes before another blind appeal or replacement account.'],
              ['Less manual lead handling', 'Automation can capture, qualify, route and follow up with leads while keeping human review where it matters.'],
            ].map(([title,text]) => (
              <article key={title} className="bg-[var(--rkd-bg)] p-7 md:p-9">
                <h3 className="section-heading section-heading-h3 mb-4">{title}</h3>
                <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 04. HOW IT WORKS</p>
          <h2 className="section-heading section-heading-h2 max-w-4xl mb-12">A straightforward engagement from <span className="text-red-italic">audit to execution.</span></h2>
          <div className="grid md:grid-cols-5 gap-px bg-[var(--rkd-border)]">
            {[
              ['01','Audit','Understand the business, market, current channels and the constraint.'],
              ['02','Prioritise','Identify the highest-impact work instead of starting everything at once.'],
              ['03','Build','Implement campaigns, pages, profiles, tracking or workflows according to scope.'],
              ['04','Measure','Track the agreed business KPIs and diagnose what is moving or stuck.'],
              ['05','Improve','Use evidence to refine the next cycle of work.'],
            ].map(([n,t,x]) => <div key={n} className="bg-[var(--rkd-bg-secondary)] p-6 md:p-7"><span className="font-mono text-xs text-[var(--rkd-primary)]">{n}</span><h3 className="section-heading section-heading-h3 mt-6 mb-3">{t}</h3><p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{x}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 05. USE CASES</p>
          <h2 className="section-heading section-heading-h2 max-w-4xl mb-12">Where different businesses <span className="text-red-italic">start.</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ['Local service business','SEO + Google Business Profile management','When calls, directions and local discovery are the primary acquisition path.'],
              ['E-commerce business','Google Ads + website development','When paid traffic exists but campaign economics or the conversion experience needs work.'],
              ['B2B business','SEO + Google Ads + website','When the goal is qualified enquiries rather than raw traffic or form volume.'],
              ['Suspended advertiser','Google Ads Suspension Recovery','When the immediate problem is policy, account trust or repeated disapprovals.'],
              ['Lead-heavy business','AI Automation + CRM','When enquiries arrive but response, qualification and routing are too manual.'],
              ['Growing business','A connected combination','When search, paid acquisition, website and follow-up need to work as one customer journey.'],
            ].map(([title,servicesUsed,text]) => <article key={title} className="card-base"><h3 className="section-heading section-heading-h3">{title}</h3><p className="text-xs uppercase tracking-wider text-[var(--rkd-primary)] mt-3">{servicesUsed}</p><p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed mt-4">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 06. PROOF</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2 className="section-heading section-heading-h2 max-w-4xl">Real case studies. <span className="text-red-italic">Not hypothetical results.</span></h2>
            <Link href="/case-studies" className="btn-secondary">View all work <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {caseStudies.map(study => <Link key={study.href} href={study.href} className="group card-base">
              <div className="flex justify-between gap-4"><span className="section-label">{study.type}</span><span className="text-xs text-[var(--rkd-fg-muted)]">{study.location}</span></div>
              <h3 className="section-heading section-heading-h3 mt-7 group-hover:text-[var(--rkd-primary)] transition-colors">{study.title}</h3>
              <div className="flex items-end gap-3 mt-7"><span className="stat-value text-5xl text-[var(--rkd-primary)]">{study.metric}</span><span className="stat-label mb-2">{study.label}</span></div>
              <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed mt-5">{study.description}</p>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--rkd-primary)] mt-6">Read case study <ArrowUpRight className="w-4 h-4" /></span>
            </Link>)}
          </div>
          <p className="text-xs text-[var(--rkd-fg-muted)] mt-6">Figures shown are taken from the corresponding case-study pages. Results vary by business, market, budget and execution.</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 07. WHAT WE BRING TO THE TABLE</p>
          <h2 className="section-heading section-heading-h2 max-w-4xl mb-12">A practical stack for <span className="text-red-italic">search, acquisition and follow-up.</span></h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ['Search','SEO strategy, technical SEO, local search, Google Business Profile management, content and search-intent mapping.'],
              ['Paid acquisition','Google Ads strategy, account structure, conversion tracking, campaign optimisation and suspension recovery.'],
              ['Systems','Web development, analytics, CRM workflows, n8n automation, lead routing and operational follow-up.'],
            ].map(([title,text]) => <article key={title} className="card-base"><h3 className="section-heading section-heading-h3 mb-4">{title}</h3><p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 08. CLIENT FEEDBACK</p>
          <h2 className="section-heading section-heading-h2 max-w-4xl mb-10">What businesses say about <span className="text-red-italic">working with us.</span></h2>
          <GoogleReviews />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg)]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 09. FAQ</p>
          <h2 className="section-heading section-heading-h2 mb-10">Questions businesses ask <span className="text-red-italic">before starting.</span></h2>
          <div className="space-y-4">
            {faqs.map((faq,index) => <details key={faq.question} className="group border-b border-[var(--rkd-border)] py-5"><summary className="cursor-pointer list-none flex justify-between gap-6 font-montserrat font-semibold text-[var(--rkd-fg)]"><span><span className="font-mono text-xs text-[var(--rkd-primary)] mr-4">0{index+1}</span>{faq.question}</span><span className="text-[var(--rkd-primary)]">+</span></summary><p className="mt-4 pl-9 text-sm text-[var(--rkd-fg-muted)] leading-relaxed max-w-3xl">{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)] text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// NEXT STEP</p>
          <h2 className="hero-headline text-[var(--rkd-fg)] mb-7">Know the problem. <span className="text-red-italic">Start with the right service.</span></h2>
          <p className="hero-subheadline mx-auto mb-9">Tell us what is holding growth back. We can start with the relevant audit and define the next step before you commit to a larger engagement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/contact" className="btn-primary">Book a Strategy Call <ArrowRight className="w-5 h-5" /></Link><Link href="/case-studies" className="btn-secondary">See Client Work</Link></div>
          <p className="hero-status mt-7">NO PRESSURE · CLEAR SCOPE · MEASURABLE WORK</p>
        </div>
      </section>
    </main>
  );
}