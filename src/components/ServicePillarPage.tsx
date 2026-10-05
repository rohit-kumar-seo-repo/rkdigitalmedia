'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export type ServicePillarData = {
  number: string;
  label: string;
  title: string;
  intro: string;
  intent: string;
  outcomes: string[];
  capabilities: [string, string][];
  process: [string, string][];
  useCases: [string, string][];
  included: string[];
  faqs: [string, string][];
  caseStudy?: { eyebrow: string; title: string; text: string; href: string };
  relatedService?: { eyebrow: string; title: string; text: string; href: string; label: string };
  policyHub?: {
    title: string;
    intro: string;
    policies: Array<{
      name: string;
      summary: string;
      check: string;
      href: string;
      label: string;
    }>;
    sourcesIntro: string;
    sources: Array<{ name: string; href: string }>;
    relatedGuides?: Array<{ name: string; href: string; description: string }>;
  };
};

const defaultRelatedService = (label: string): ServicePillarData['relatedService'] => {
  if (label.includes('SEO')) return {
    eyebrow: 'LOCAL SEARCH SUPPORT',
    title: 'Need Google Maps visibility too?',
    text: 'SEO and Google Business Profile work are stronger when the website, local profile and search intent are aligned. Explore the dedicated GBP management service.',
    href: '/services/gmb',
    label: 'Explore GBP Management'
  };
  if (label.includes('GOOGLE BUSINESS PROFILE')) return {
    eyebrow: 'WEBSITE SEO SUPPORT',
    title: 'Want local visibility beyond your profile?',
    text: 'GBP is one part of local search. A stronger website and location-page structure can support broader organic visibility alongside your profile.',
    href: '/services/seo',
    label: 'Explore SEO Services'
  };
  if (label.includes('WEBSITE DEVELOPMENT')) return {
    eyebrow: 'SEARCH VISIBILITY SUPPORT',
    title: 'Need the new website to rank too?',
    text: 'Development creates the foundation; SEO turns that foundation into a search strategy. See how the two services fit together.',
    href: '/services/seo',
    label: 'Explore SEO Services'
  };
  return undefined;
};

export function ServicePillarPage({ data }: { data: ServicePillarData }) {
  return (
    <main id="top">
      <section className="relative overflow-hidden bg-[var(--rkd-bg)] grid-pattern">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 pt-20 md:pt-28 pb-16 md:pb-24">
          <div className="text-xs text-[var(--rkd-fg-muted)] mb-10">Home / Services / {data.title}</div>
          <div className="max-w-5xl">
            <p className="section-label mb-5">// {data.label}</p>
            <h1 className="hero-headline text-[var(--rkd-fg)] mb-7">
              {data.title}
            </h1>
            <p className="hero-subheadline max-w-3xl">{data.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link href="/contact" className="btn-primary group">
                Discuss Your Requirements <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                See Case Studies <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-y border-[var(--rkd-border)] bg-[var(--rkd-card)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6 grid md:grid-cols-3">
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[var(--rkd-border)]">
              <div className="stat-value text-2xl md:text-3xl">{data.number}</div>
              <div className="stat-label mt-2">Core service</div>
            </div>
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[var(--rkd-border)]">
              <div className="stat-value text-2xl md:text-3xl">NCR +</div>
              <div className="stat-label mt-2">Primary market and remote delivery</div>
            </div>
            <div className="p-6 md:p-8">
              <div className="stat-value text-2xl md:text-3xl">Audit → Execute</div>
              <div className="stat-label mt-2">How engagements are structured</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 01. OVERVIEW</p>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <h2 className="section-heading section-heading-h2">
              Built around the <span className="text-red-italic">actual job.</span>
            </h2>
            <div>
              <p className="text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed">{data.intent}</p>
              <p className="text-[var(--rkd-fg-muted)] leading-relaxed mt-5">
                The engagement starts by understanding the current system, identifying the highest-impact constraint and then implementing work that can be measured. The objective is not to add activity for its own sake.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 02. CAPABILITIES</p>
          <h2 className="section-heading section-heading-h2 max-w-4xl mb-12">
            What the service <span className="text-red-italic">covers.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-[var(--rkd-border)]">
            {data.capabilities.map((item, index) => (
              <article key={item[0]} className="bg-[var(--rkd-bg-secondary)] p-7 md:p-9">
                <span className="font-mono text-xs text-[var(--rkd-primary)]">0{index + 1}</span>
                <h3 className="section-heading section-heading-h3 mt-5 mb-3">{item[0]}</h3>
                <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{item[1]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 03. OUTCOMES</p>
          <h2 className="section-heading section-heading-h2 max-w-4xl mb-12">
            What this work is designed to <span className="text-red-italic">improve.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {data.outcomes.map((item) => (
              <div key={item} className="card-base p-6 md:p-8 flex gap-4">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-[var(--rkd-primary)] mt-1" />
                <p className="text-[var(--rkd-fg-muted)] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 04. HOW IT WORKS</p>
          <h2 className="section-heading section-heading-h2 max-w-4xl mb-12">
            A practical process from <span className="text-red-italic">audit to optimisation.</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-px bg-[var(--rkd-border)]">
            {data.process.map((item, index) => (
              <article key={item[0]} className="bg-[var(--rkd-bg-secondary)] p-7">
                <span className="font-mono text-xs text-[var(--rkd-primary)]">0{index + 1}</span>
                <h3 className="section-heading section-heading-h3 mt-5 mb-3">{item[0]}</h3>
                <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{item[1]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 05. USE CASES</p>
          <h2 className="section-heading section-heading-h2 max-w-4xl mb-12">
            Where this service <span className="text-red-italic">fits.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {data.useCases.map((item) => (
              <article key={item[0]} className="card-base p-7">
                <h3 className="section-heading section-heading-h3 mb-4">{item[0]}</h3>
                <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{item[1]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 06. WHAT YOU GET</p>
          <h2 className="section-heading section-heading-h2 max-w-4xl mb-12">
            The engagement <span className="text-red-italic">includes.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.included.map((item) => (
              <div key={item} className="flex gap-3 p-5 bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-xl">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-[var(--rkd-primary)] mt-0.5" />
                <span className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {(data.relatedService ?? defaultRelatedService(data.label)) && (
        <section className="py-16 md:py-20 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <div className="card-base p-7 md:p-9 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div className="max-w-3xl">
                <p className="section-label mb-3">// {(data.relatedService ?? defaultRelatedService(data.label))!.eyebrow}</p>
                <h2 className="section-heading section-heading-h3 mb-3">{(data.relatedService ?? defaultRelatedService(data.label))!.title}</h2>
                <p className="text-sm md:text-base text-[var(--rkd-fg-muted)] leading-relaxed">{(data.relatedService ?? defaultRelatedService(data.label))!.text}</p>
              </div>
              <Link href={(data.relatedService ?? defaultRelatedService(data.label))!.href} className="btn-secondary whitespace-nowrap">
                {(data.relatedService ?? defaultRelatedService(data.label))!.label} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {data.policyHub && (
        <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <p className="section-label mb-4">// {data.caseStudy ? '07' : '06'}. POLICY REFERENCE</p>
            <div className="max-w-4xl mb-12">
              <h2 className="section-heading section-heading-h2 mb-5">
                {data.policyHub.title}
              </h2>
              <p className="text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed">
                {data.policyHub.intro}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-[var(--rkd-border)]">
              {data.policyHub.policies.map((policy, index) => (
                <article key={policy.name} className="bg-[var(--rkd-bg-secondary)] p-7 md:p-9">
                  <div className="flex items-start justify-between gap-5">
                    <span className="font-mono text-xs text-[var(--rkd-primary)]">0{index + 1}</span>
                    <a
                      href={policy.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-wider text-[var(--rkd-primary)] hover:underline"
                    >
                      {policy.label} ↗
                    </a>
                  </div>
                  <h3 className="section-heading section-heading-h3 mt-5 mb-3">{policy.name}</h3>
                  <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed mb-4">{policy.summary}</p>
                  <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">
                    <span className="text-[var(--rkd-fg)] font-semibold">What we check:</span> {policy.check}
                  </p>
                  <Link href={`/services/google-ads-suspension-recovery/policies/${policy.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[var(--rkd-fg)] hover:text-[var(--rkd-primary)] transition-colors">
                    Open dedicated recovery guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-10 p-7 md:p-9 border border-[var(--rkd-border)] bg-[var(--rkd-card)] rounded-xl">
              <h3 className="section-heading section-heading-h3 mb-3">Official Google Ads sources</h3>
              <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed mb-6">{data.policyHub.sourcesIntro}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {data.policyHub.sources.map((source) => (
                  <a
                    key={source.name}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--rkd-fg)] hover:text-[var(--rkd-primary)] transition-colors underline underline-offset-4"
                  >
                    {source.name} ↗
                  </a>
                ))}
              </div>
            </div>
            {data.policyHub.relatedGuides && data.policyHub.relatedGuides.length > 0 && (
              <div className="mt-10">
                <h3 className="section-heading section-heading-h3 mb-6">Related Google Ads recovery guides</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {data.policyHub.relatedGuides.map((guide) => (
                    <Link key={guide.href} href={guide.href} className="card-base p-6 group">
                      <h4 className="font-montserrat font-bold text-[var(--rkd-fg)] group-hover:text-[var(--rkd-primary)] transition-colors">
                        {guide.name}
                      </h4>
                      <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed mt-2">{guide.description}</p>
                      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--rkd-primary)] mt-4">
                        Read guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {data.caseStudy && (
        <section className="py-20 md:py-28 bg-[var(--rkd-bg)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <p className="section-label mb-4">// 08. DOCUMENTED WORK</p>
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--rkd-primary)] mb-4">{data.caseStudy.eyebrow}</p>
                <h2 className="section-heading section-heading-h2 mb-5">{data.caseStudy.title}</h2>
                <p className="text-[var(--rkd-fg-muted)] max-w-3xl leading-relaxed">{data.caseStudy.text}</p>
              </div>
              <Link href={data.caseStudy.href} className="btn-secondary whitespace-nowrap">
                Read case study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// {data.caseStudy ? '09' : '08'}. FAQ</p>
          <h2 className="section-heading section-heading-h2 mb-12">
            Common questions about <span className="text-red-italic">{data.label.toLowerCase()}.</span>
          </h2>
          <div className="divide-y divide-[var(--rkd-border)] border-y border-[var(--rkd-border)]">
            {data.faqs.map((faq) => (
              <details key={faq[0]} className="py-6 group">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 font-montserrat font-semibold text-[var(--rkd-fg)]">
                  {faq[0]}
                  <span className="text-[var(--rkd-primary)] text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm text-[var(--rkd-fg-muted)] leading-relaxed max-w-3xl">{faq[1]}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36 bg-[var(--rkd-bg)] text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// NEXT STEP</p>
          <h2 className="section-heading section-heading-h2 mb-6">
            Know the bottleneck. <span className="text-red-italic">Fix the right one.</span>
          </h2>
          <p className="text-[var(--rkd-fg-muted)] leading-relaxed mb-8">
            Share your current website, account or growth challenge. We’ll identify the relevant work, what should happen first and what can wait.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
