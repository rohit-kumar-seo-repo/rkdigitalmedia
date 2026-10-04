'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const services = [
  { title: 'Google Ads Services', slug: 'google-ads', desc: 'Search, Shopping, Performance Max and YouTube campaigns built around qualified demand and measurable conversions.' },
  { title: 'Website Development Services', slug: 'web-development', desc: 'Conversion-focused websites and landing pages with responsive UX, technical SEO foundations and analytics.' },
  { title: 'Google Ads Suspension Recovery', slug: 'google-ads-suspension-recovery', desc: 'Structured policy, website and account review to identify risks and prepare a compliant recovery path.' },
  { title: 'SEO Services', slug: 'seo', desc: 'Technical SEO, content, on-page optimisation and local search strategies built around real search intent.' },
  { title: 'Google Business Profile Management Services', slug: 'gmb', desc: 'GBP optimisation, services, categories, reviews and local visibility management for location-based businesses.' },
  { title: 'AI Automation Services', slug: 'ai-automation', desc: 'Lead capture, qualification, routing, CRM and workflow automation that reduces repetitive manual follow-up.' },
];

export function Services() {
  return (
    <section className="py-16 md:py-32 bg-[var(--rkd-bg)]">
      <div className="max-w-[80rem] mx-auto px-4 md:px-6">
        <p className="section-label mb-4">// WHAT WE DO</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6 mb-10 md:mb-14">
          <h2 className="font-montserrat font-black text-[var(--rkd-fg)]" style={{fontSize:'clamp(1.8rem,6vw,3.5rem)',lineHeight:'1.08'}}>
            Six Core Services<br /><span style={{color:'#e8282b',fontStyle:'italic'}}>Built Around Growth</span>
          </h2>
          <p className="text-[var(--rkd-fg-muted)] max-w-md font-outfit leading-relaxed">
            Every service is a system. Built to compound — not a one-time campaign, but a growth engine.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rkd-border)]">
          {services.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`}
              className="group bg-[var(--rkd-bg)] p-5 md:p-8 flex flex-col justify-between min-h-[200px] hover:bg-[var(--rkd-card)] transition-colors duration-300">
              <div>
                <span className="font-montserrat font-black text-5xl text-[var(--rkd-primary)] opacity-20 group-hover:opacity-40 transition-opacity">
                  {String(i+1).padStart(2,'0')}
                </span>
                <h3 className="font-montserrat font-bold text-[var(--rkd-fg)] text-xl mt-4 mb-3 group-hover:text-white transition-colors">
                  {s.title}
                </h3>
                <p className="text-[var(--rkd-fg-muted)] text-sm leading-relaxed font-outfit">{s.desc}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[var(--rkd-primary)] text-sm font-montserrat font-semibold opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                View Service <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;