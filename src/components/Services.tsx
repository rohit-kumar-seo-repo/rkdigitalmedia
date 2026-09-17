'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const services = [
  { title: 'Performance Marketing', slug: 'performance-marketing', desc: 'Meta Ads, Google Ads, PMax — full-funnel campaigns engineered for 3×–12× ROAS.' },
  { title: 'Google Ads', slug: 'google-ads', desc: 'Search, Shopping, Performance Max, YouTube. Suspension recovery. 8.5× ROAS.' },
  { title: 'SEO & Search Growth', slug: 'seo', desc: 'Technical SEO, local SEO, AEO/GEO. Page 1 rankings in 90 days.' },
  { title: 'Google My Business', slug: 'gmb', desc: 'GBP setup, optimization, reviews, citations. Map Pack domination. 50+ keywords.' },
  { title: 'AI Automation', slug: 'ai-automation', desc: 'WhatsApp AI agents, voice bots, CRM automation. 24/7 lead handling.' },
  { title: 'Web & Conversion', slug: 'web-development', desc: 'Next.js & WordPress sites built for Core Web Vitals and conversions.' },
  { title: 'Creative & Content', slug: 'creative', desc: '30 creatives/month, video production, motion graphics, brand identity.' },
  { title: 'CRM & Growth Systems', slug: 'crm', desc: 'GoHighLevel, WhatsApp API, automated pipelines. Live in 7 days.' },
];

export function Services() {
  return (
    <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
      <div className="max-w-[80rem] mx-auto px-4 md:px-6">
        <p className="section-label mb-4">// WHAT WE DO</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2 className="font-montserrat font-black text-[var(--rkd-fg)]" style={{fontSize:'clamp(2rem,4vw,3.5rem)',lineHeight:'1.1'}}>
            Services Engineered<br /><span style={{color:'#e8282b',fontStyle:'italic'}}>For Growth</span>
          </h2>
          <p className="text-[var(--rkd-fg-muted)] max-w-md font-outfit leading-relaxed">
            Every service is a system. Built to compound — not a one-time campaign, but a growth engine.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rkd-border)]">
          {services.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`}
              className="group bg-[var(--rkd-bg)] p-8 flex flex-col justify-between min-h-[200px] hover:bg-[var(--rkd-card)] transition-colors duration-300">
              <div>
                <span className="font-montserrat font-black text-5xl text-[var(--rkd-primary)] opacity-20 group-hover:opacity-40 transition-opacity">
                  {String(i+1).padStart(2,'0')}
                </span>
                <h3 className="font-montserrat font-bold text-[var(--rkd-fg)] text-xl mt-4 mb-3 group-hover:text-white transition-colors">
                  {s.title}
                </h3>
                <p className="text-[var(--rkd-fg-muted)] text-sm leading-relaxed font-outfit">{s.desc}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[var(--rkd-primary)] text-sm font-montserrat font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
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