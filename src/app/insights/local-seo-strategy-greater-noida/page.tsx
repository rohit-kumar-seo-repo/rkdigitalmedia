import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, MapPin } from 'lucide-react';
import InsightVisual from '@/components/InsightVisual';

export const metadata: Metadata = {
  title: 'Local SEO Strategy for Greater Noida: Complete Guide | R.K Digital Media',
  description: 'A practical Local SEO strategy for Greater Noida businesses covering Google Business Profile, local keywords, Map Pack visibility, reviews, citations, content, links and lead tracking.',
  keywords: [
    'local SEO strategy Greater Noida',
    'local SEO Greater Noida',
    'Google Business Profile SEO Greater Noida',
    'Google Maps ranking Greater Noida',
    'local business SEO strategy',
  ],
  openGraph: {
    title: 'Local SEO Strategy for Greater Noida: Complete Guide',
    description: 'A practical guide to improving local search visibility in Greater Noida.',
    type: 'article',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/insights/local-seo-strategy-greater-noida',
    siteName: 'R.K Digital Media',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Local SEO Strategy for Greater Noida' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Strategy for Greater Noida: Complete Guide',
    description: 'A practical guide to improving local search visibility in Greater Noida.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rkdigitalmedia.in/insights/local-seo-strategy-greater-noida',
  },
};

const toc = [
  ['Why Local SEO Matters', '#why-local-seo-matters'],
  ['Google Business Profile', '#google-business-profile'],
  ['Local Search Intent', '#local-keywords'],
  ['Map Pack Signals', '#map-pack'],
  ['Reviews', '#reviews'],
  ['Citations & NAP', '#citations'],
  ['Local Content', '#local-content'],
  ['Local Links', '#local-links'],
  ['Tracking & Leads', '#tracking'],
  ['90-Day Plan', '#90-day-plan'],
  ['FAQs', '#faq'],
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Local SEO Strategy for Greater Noida: Complete Guide',
  description: 'A practical Local SEO strategy for Greater Noida businesses.',
  url: 'https://rkdigitalmedia.in/insights/local-seo-strategy-greater-noida',
  datePublished: '2024-12-28',
  dateModified: '2026-10-01',
  author: { '@type': 'Person', name: 'Rohit Kumar' },
  publisher: {
    '@type': 'Organization',
    name: 'R.K Digital Media',
    url: 'https://rkdigitalmedia.in',
    logo: { '@type': 'ImageObject', url: 'https://rkdigitalmedia.in/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://rkdigitalmedia.in/insights/local-seo-strategy-greater-noida' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rkdigitalmedia.in' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://rkdigitalmedia.in/insights' },
    { '@type': 'ListItem', position: 3, name: 'Local SEO Strategy for Greater Noida', item: 'https://rkdigitalmedia.in/insights/local-seo-strategy-greater-noida' },
  ],
};

const sectionClass = 'scroll-mt-28 pt-2';
const h2Class = 'font-montserrat font-extrabold text-[var(--rkd-fg)] mb-5 tracking-[-0.02em]';
const h3Class = 'font-montserrat font-bold text-[var(--rkd-fg)] mb-3';
const pClass = 'mb-5 text-[15px] md:text-[16px] text-[var(--rkd-fg-muted)]';
const listClass = 'mb-6 space-y-3 pl-5 text-[15px] md:text-[16px] text-[var(--rkd-fg-muted)] marker:text-[var(--rkd-primary)]';

export default function PostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-[var(--rkd-bg)] hero-background noise-overlay border-b border-[var(--rkd-border)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-[var(--primary)] opacity-[0.07] blur-3xl" />
        </div>
        <div className="relative max-w-[80rem] mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-28">
          <Link href="/insights" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.12em] text-[var(--rkd-fg-muted)] hover:text-[var(--rkd-primary)] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            Insights
          </Link>

          <div className="max-w-4xl mt-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="section-label">// LOCAL SEO</span>
              <span className="h-px w-10 bg-[var(--rkd-border)]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[var(--rkd-fg-muted)]">Greater Noida</span>
            </div>

            <h1 className="hero-headline text-[var(--rkd-fg)] max-w-4xl">
              Local SEO Strategy for <span className="text-red-italic">Greater Noida</span>
            </h1>

            <p className="hero-subheadline mt-7 max-w-3xl">
              A practical framework for service businesses that want stronger visibility across Google Search and Google Maps — without relying on shortcuts or ranking guarantees.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-9 text-[11px] font-mono uppercase tracking-[0.1em] text-[var(--rkd-fg-muted)]">
              <span>By Rohit Kumar</span>
              <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[var(--rkd-primary)]" />18 min read</span>
              <span>Updated Oct 01, 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--rkd-bg-secondary)] border-b border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid lg:grid-cols-[240px_minmax(0,760px)] gap-10 lg:gap-16 items-start justify-center">
            <aside className="lg:sticky lg:top-28">
              <div className="card-base p-5">
                <p className="section-label mb-4">// IN THIS GUIDE</p>
                <nav className="space-y-1.5">
                  {toc.map(([label, href], index) => (
                    <a key={href} href={href} className="flex gap-3 rounded-md px-2 py-2 text-[12px] leading-5 text-[var(--rkd-fg-muted)] hover:text-[var(--rkd-fg)] hover:bg-[var(--rkd-primary-muted)] transition-colors">
                      <span className="font-mono text-[var(--rkd-primary)]">{String(index + 1).padStart(2, '0')}</span>
                      <span>{label}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="min-w-0">
              <div className="card-base p-6 md:p-8 mb-12 border-l-2 border-l-[var(--rkd-primary)]">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-[var(--rkd-primary)]" aria-hidden="true" />
                  <div>
                    <p className="font-montserrat font-bold text-[var(--rkd-fg)] mb-2">The local SEO principle</p>
                    <p className="text-[14px] md:text-[15px] leading-7 text-[var(--rkd-fg-muted)]">
                      Local visibility is not created by repeating a city name. It comes from aligning the business, its services, its location, its website and its reputation with real local search intent.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-14 md:space-y-20">
                <section className={sectionClass} id="why-local-seo-matters">
                  <p className="section-label mb-3">// 01 — CONTEXT</p>
                  <h2 className={h2Class} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.15' }}>Why Local SEO Matters in Greater Noida</h2>
                  <p className={pClass}>Greater Noida is not one uniform search market. Businesses compete across sectors, societies, commercial clusters and nearby areas such as Gaur City, Techzone, Knowledge Park, Pari Chowk and Noida Extension.</p>
                  <p className={pClass}>A useful strategy therefore connects a service with the locations that are commercially relevant to the business. The objective is not to create a page for every possible locality. It is to make the business genuinely useful and discoverable for the searches its customers make.</p>
                  <InsightVisual kind="local" variant={1} />
                </section>

                <section className={sectionClass} id="google-business-profile">
                  <p className="section-label mb-3">// 02 — GBP</p>
                  <h2 className={h2Class} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.15' }}>Build and Optimize Your Google Business Profile</h2>
                  <p className={pClass}>For an eligible local business, the Google Business Profile is a core part of the local search presence. Start with accurate business information and the category that most closely represents the primary service.</p>
                  <ul className={listClass + ' list-disc'}>
                    <li>Choose the most accurate primary category and relevant secondary categories.</li>
                    <li>Complete services, hours, contact details, website and applicable attributes.</li>
                    <li>Use useful service descriptions written for customers, not keyword stuffing.</li>
                    <li>Upload original, recent photographs that represent the real business.</li>
                    <li>Keep business information consistent when changes occur.</li>
                  </ul>
                </section>

                <section className={sectionClass} id="local-keywords">
                  <p className="section-label mb-3">// 03 — SEARCH INTENT</p>
                  <h2 className={h2Class} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.15' }}>Target Local Search Intent</h2>
                  <p className={pClass}>Build a keyword map around what customers actually search for. Examples include “dentist in Greater Noida”, “Google Ads agency in Greater Noida”, “gym near Gaur City” or “car recovery in Greater Noida”.</p>
                  <div className="grid sm:grid-cols-2 gap-4 my-7">
                    {[
                      ['Service + city', 'dentist in Greater Noida'],
                      ['Service + locality', 'gym near Gaur City'],
                      ['Problem + location', 'car recovery Greater Noida'],
                      ['Commercial intent', 'Google Ads agency Greater Noida'],
                    ].map(([type, example]) => (
                      <div key={type} className="card-base p-5">
                        <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-[var(--rkd-primary)] mb-2">{type}</p>
                        <p className="font-montserrat font-semibold text-sm text-[var(--rkd-fg)]">{example}</p>
                      </div>
                    ))}
                  </div>
                  <p className={pClass}>Map each important intent to the most appropriate page. For multi-location businesses, create location pages only when the business genuinely serves those areas and each page can provide differentiated value.</p>
                </section>

                <section className={sectionClass} id="map-pack">
                  <p className="section-label mb-3">// 04 — MAP PACK</p>
                  <h2 className={h2Class} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.15' }}>Build Map Pack Relevance and Prominence</h2>
                  <p className={pClass}>Google's local results consider factors including relevance, distance and prominence. You cannot optimize a business into every location, particularly where physical proximity is a constraint.</p>
                  <p className={pClass}>Focus on the signals you can control: accurate profile information, relevant services, a useful website, genuine customer feedback, consistent local references and legitimate business prominence.</p>
                  <InsightVisual kind="local" variant={2} />
                </section>

                <section className={sectionClass} id="reviews">
                  <p className="section-label mb-3">// 05 — REPUTATION</p>
                  <h2 className={h2Class} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.15' }}>Build Reviews the Right Way</h2>
                  <p className={pClass}>Ask real customers for honest reviews after a genuine interaction with your business. Make the process easy with a direct review link or QR code, but do not manufacture reviews, pressure customers for specific wording or use tactics that conflict with platform policies.</p>
                  <p className={pClass}>Respond consistently and professionally. A good response should feel like customer service first, not an attempt to insert keywords into every review.</p>
                </section>

                <section className={sectionClass} id="citations">
                  <p className="section-label mb-3">// 06 — LOCAL AUTHORITY</p>
                  <h2 className={h2Class} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.15' }}>Fix Local Citations and NAP Consistency</h2>
                  <p className={pClass}>Audit important directories, industry sites and local listings for incorrect business names, addresses, phone numbers, URLs and duplicate profiles. Prioritize authoritative and relevant sources instead of chasing large quantities of low-quality directory links.</p>
                </section>

                <section className={sectionClass} id="local-content">
                  <p className="section-label mb-3">// 07 — CONTENT</p>
                  <h2 className={h2Class} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.15' }}>Create Location-Focused Website Content</h2>
                  <p className={pClass}>Your website should explain the services you provide, who you serve and where you operate. Strong local content answers customer questions, demonstrates expertise and gives visitors a clear route to contact or book.</p>
                  <div className="card-base p-6 my-7">
                    <p className="section-label mb-3">// EXAMPLE</p>
                    <p className="text-[14px] leading-7 text-[var(--rkd-fg-muted)]">A Greater Noida dental clinic could build useful pages around treatments, emergency dentistry, appointment information and patient questions while naturally explaining the areas it serves. The goal is useful local relevance, not repetitive city-name insertion.</p>
                  </div>
                </section>

                <section className={sectionClass} id="local-links">
                  <p className="section-label mb-3">// 08 — AUTHORITY</p>
                  <h2 className={h2Class} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.15' }}>Earn Relevant Local Links and Mentions</h2>
                  <p className={pClass}>Look for legitimate opportunities such as local associations, community organizations, business partnerships, sponsorships, supplier relationships, local publications and relevant industry directories. Relevance matters more than simply accumulating links.</p>
                </section>

                <section className={sectionClass} id="tracking">
                  <p className="section-label mb-3">// 09 — MEASUREMENT</p>
                  <h2 className={h2Class} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.15' }}>Track Rankings, Calls and Leads</h2>
                  <p className={pClass}>Do not judge local SEO only by one keyword position. Track priority queries across the locations that matter alongside organic traffic, Google Business Profile interactions, calls, direction requests, enquiries and booked leads.</p>
                  <InsightVisual kind="local" variant={3} />
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-7">
                    {['Visibility', 'Traffic', 'Enquiries', 'Revenue'].map((item, i) => (
                      <div key={item} className="border border-[var(--rkd-border)] bg-[var(--rkd-card)] rounded-xl p-4 text-center">
                        <span className="block text-[10px] font-mono text-[var(--rkd-primary)] mb-2">0{i + 1}</span>
                        <span className="font-montserrat font-semibold text-xs text-[var(--rkd-fg)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className={sectionClass} id="90-day-plan">
                  <p className="section-label mb-3">// 10 — EXECUTION</p>
                  <h2 className={h2Class} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.15' }}>A Practical 90-Day Local SEO Plan</h2>
                  <div className="space-y-4">
                    {[
                      ['01', 'Days 1–30', 'Audit the profile, website, technical SEO, categories, services, citations, reviews and local keyword map.'],
                      ['02', 'Days 31–60', 'Improve service and location content, strengthen internal links, build legitimate local references and maintain review activity.'],
                      ['03', 'Days 61–90', 'Measure visibility and leads, improve underperforming pages, expand useful content and prioritize locations producing demand.'],
                    ].map(([num, title, text]) => (
                      <div key={num} className="card-base p-5 md:p-6 flex gap-5">
                        <span className="font-mono text-sm text-[var(--rkd-primary)] pt-1">{num}</span>
                        <div><h3 className={h3Class}>{title}</h3><p className="text-[14px] leading-7 text-[var(--rkd-fg-muted)]">{text}</p></div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className={sectionClass} id="faq">
                  <p className="section-label mb-3">// FAQ</p>
                  <h2 className={h2Class} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.15' }}>Frequently Asked Questions</h2>
                  <div className="divide-y divide-[var(--rkd-border)] border-y border-[var(--rkd-border)]">
                    {[
                      ['How long does Local SEO take in Greater Noida?', 'There is no reliable fixed timeline. Results depend on the business category, competition, location, website condition, existing authority and the strength of the local market.'],
                      ['Is Google Business Profile enough for Local SEO?', 'No. The profile is important, but local visibility can also depend on the website, reviews, local references, relevance, prominence and search competition.'],
                      ['Should I create a page for every Greater Noida sector?', 'Only when there is genuine search intent and the business actually serves that area. Thin pages created solely to capture location keywords can create a poor user experience.'],
                    ].map(([question, answer]) => (
                      <div key={question} className="py-6">
                        <h3 className={h3Class}>{question}</h3>
                        <p className="text-[14px] md:text-[15px] leading-7 text-[var(--rkd-fg-muted)]">{answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="relative overflow-hidden rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-7 md:p-10">
                  <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[var(--primary)] opacity-[0.08] blur-3xl" />
                  <div className="mb-12"><p className="section-label mb-4">// RELATED RESOURCES</p><div className="grid sm:grid-cols-2 gap-4"><Link href="/insights/gmb-optimization-map-pack-checklist-50-steps" className="group card-base p-5"><span className="font-montserrat font-bold text-sm text-[var(--rkd-fg)] group-hover:text-[var(--rkd-primary)]">Google Business Profile Optimization Checklist</span></Link><Link href="/insights/seo-vs-paid-ads-2025-which-wins" className="group card-base p-5"><span className="font-montserrat font-bold text-sm text-[var(--rkd-fg)] group-hover:text-[var(--rkd-primary)]">SEO vs Paid Ads for Greater Noida Businesses</span></Link><Link href="/services/seo" className="group card-base p-5"><span className="font-montserrat font-bold text-sm text-[var(--rkd-fg)] group-hover:text-[var(--rkd-primary)]">Local SEO Services</span></Link><Link href="/case-studies/local-seo-domination" className="group card-base p-5"><span className="font-montserrat font-bold text-sm text-[var(--rkd-fg)] group-hover:text-[var(--rkd-primary)]">Local SEO Case Study</span></Link></div></div><p className="section-label mb-3">// NEED HELP?</p>
                  <h2 className="font-montserrat font-extrabold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)' }}>Want to improve your local visibility?</h2>
                  <p className="text-[14px] md:text-[15px] leading-7 text-[var(--rkd-fg-muted)] max-w-2xl">R.K Digital Media works on Google Business Profile optimization, Local SEO and search visibility for businesses in Greater Noida and Delhi NCR.</p>
                  <Link href="/contact" className="btn-primary inline-flex mt-6 group">
                    Request a Local SEO Audit
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--rkd-border)]">
                  <Link href="/insights" className="btn-secondary text-sm"><ArrowLeft className="w-4 h-4" /> All Insights</Link>
                  <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[var(--rkd-fg-muted)]">R.K Digital Media · Local SEO</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}