import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies | R.K Digital Media',
  description: 'Selected case studies covering Google Ads, SEO, Google Business Profile, suspension recovery and digital growth work by R.K Digital Media.',
  openGraph: { title: 'Case Studies | R.K Digital Media', description: 'Selected case studies covering Google Ads, SEO, Google Business Profile, suspension recovery and digital growth work by R.K Digital Media.', type: 'website', url: 'https://rkdigitalmedia.in/case-studies' },
  alternates: { canonical: 'https://rkdigitalmedia.in/case-studies' },
};

const caseStudies = [
  { number:'01', category:'LOCAL SEO', location:'Greater Noida', title:'Local SEO Domination for Home Services', problem:'A home-services business started with little digital visibility and needed a stronger local search foundation.', work:'Google Business Profile optimisation, location pages, review generation and local citation work.', evidence:'50+', evidenceLabel:'MAP PACK KEYWORDS', tags:['SEO','Google Business Profile','Local Search'], href:'/case-studies/local-seo-domination' },
  { number:'02', category:'GOOGLE ADS / RECOVERY', location:'Delhi NCR', title:'Google Ads Suspension Recovery & Scale', problem:'An e-commerce advertiser faced a Google Ads policy suspension and needed diagnosis before campaigns could be rebuilt.', work:'Policy diagnosis, landing-page corrections, account recovery work and subsequent campaign management.', evidence:'8.5×', evidenceLabel:'PEAK ROAS', tags:['Google Ads','Suspension Recovery','PPC'], href:'/case-studies/google-ads-recovery' },
  { number:'03', category:'B2B / LEAD GENERATION', location:'Greater Noida', title:'B2B Lead Generation for Industrial Supplier', problem:'An industrial supplier had traffic but needed more qualified sales opportunities and a stronger lead qualification process.', work:'Technical SEO, high-intent Google Ads, LinkedIn targeting and CRM lead scoring.', evidence:'1,200+', evidenceLabel:'SQLS GENERATED', tags:['SEO','Google Ads','Lead Generation'], href:'/case-studies/b2b-lead-gen' },
  { number:'04', category:'HEALTHCARE / MULTI-LOCATION', location:'Noida & Ghaziabad', title:'Multi-Location Clinic Digital Transformation', problem:'Three clinic locations needed one coherent local-search, website and paid-acquisition system.', work:'Google Business Profile management, location landing pages, geo-targeted Google Ads and conversion tracking.', evidence:'3,500+', evidenceLabel:'APPOINTMENTS', tags:['GBP','Google Ads','Local SEO'], href:'/case-studies/healthcare-clinic' },
];

const disciplines = [
  ['01','Google Ads','Search, Shopping, Performance Max and campaign recovery work.'],
  ['02','SEO & Local SEO','Technical, on-page and location-based search visibility.'],
  ['03','Google Business Profile','Profile optimisation and local visibility systems.'],
  ['04','Suspension Recovery','Policy diagnosis, website corrections and appeal preparation.'],
  ['05','Web Development','Conversion-focused websites and landing-page foundations.'],
  ['06','Automation','Lead capture, routing, CRM and repetitive workflow automation.'],
];

export default function CaseStudiesPage() {
  return <main id="top" className="rkd-home">
    <section className="relative overflow-hidden bg-[var(--rkd-bg)] border-b border-[var(--rkd-border)]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_75%_40%,rgba(232,40,43,0.14),transparent_35%)]" />
      <div className="max-w-[80rem] mx-auto px-4 md:px-6 pt-20 md:pt-28 pb-20 md:pb-28 relative">
        <div className="flex items-center justify-between gap-6 mb-16"><p className="section-label">// SELECTED WORK</p><span className="font-mono text-xs text-[var(--rkd-fg-muted)]">CASE STUDIES / 2026</span></div>
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-end">
          <h1 className="hero-headline text-[var(--rkd-fg)] max-w-5xl">Work that shows <span className="text-red-italic">what changed.</span></h1>
          <div><p className="text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed max-w-xl">Selected projects across Google Ads, SEO, local search and recovery work. Each case study separates the problem, work performed and documented outcome.</p><Link href="/contact" className="btn-primary inline-flex mt-8 group">Discuss Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link></div>
        </div>
      </div>
    </section>

    <section className="border-b border-[var(--rkd-border)] bg-[var(--rkd-card)]">
      <div className="max-w-[80rem] mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4">
        {[['04','Featured projects'],['06','Core disciplines'],['—','Results vary by project'],['LIVE','Selected work archive']].map(([value,label],i)=><div key={label} className={`p-6 md:p-8 ${i<3?'border-r border-[var(--rkd-border)]':''}`}><div className="font-montserrat font-black text-2xl md:text-3xl text-[var(--rkd-fg)]">{value}</div><div className="font-mono text-[10px] uppercase tracking-widest text-[var(--rkd-fg-muted)] mt-2">{label}</div></div>)}
      </div>
    </section>

    <section className="py-20 md:py-28 bg-[var(--rkd-bg)]">
      <div className="max-w-[80rem] mx-auto px-4 md:px-6">
        <p className="section-label mb-4">// 01. FEATURED CASE STUDIES</p><h2 className="section-heading section-heading-h2 max-w-3xl mb-12">The work, <span className="text-red-italic">in context.</span></h2>
        <div className="space-y-6">{caseStudies.map(study=><Link key={study.number} href={study.href} className="group block border border-[var(--rkd-border)] bg-[var(--rkd-card)] hover:border-[var(--rkd-primary)]/50 transition-colors duration-300">
          <div className="grid lg:grid-cols-[80px_1fr_220px]">
            <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-[var(--rkd-border)]"><span className="font-mono text-xs text-[var(--rkd-primary)]">{study.number}</span></div>
            <div className="p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-5"><span className="font-mono text-[10px] tracking-widest text-[var(--rkd-primary)]">{study.category}</span><span className="text-[var(--rkd-border)]">/</span><span className="font-mono text-[10px] tracking-widest text-[var(--rkd-fg-muted)]">{study.location}</span></div>
              <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-[var(--rkd-fg)] leading-tight mb-5 group-hover:text-[var(--rkd-primary)] transition-colors">{study.title}</h3>
              <div className="grid md:grid-cols-2 gap-7 max-w-3xl"><div><p className="font-mono text-[10px] tracking-widest text-[var(--rkd-fg-muted)] mb-2">THE PROBLEM</p><p className="text-sm leading-relaxed text-[var(--rkd-fg-muted)]">{study.problem}</p></div><div><p className="font-mono text-[10px] tracking-widest text-[var(--rkd-fg-muted)] mb-2">THE WORK</p><p className="text-sm leading-relaxed text-[var(--rkd-fg-muted)]">{study.work}</p></div></div>
              <div className="flex flex-wrap gap-2 mt-7">{study.tags.map(tag=><span key={tag} className="px-3 py-1.5 border border-[var(--rkd-border)] rounded-full font-mono text-[10px] uppercase tracking-wider text-[var(--rkd-fg-muted)]">{tag}</span>)}</div>
            </div>
            <div className="p-7 md:p-10 border-t lg:border-t-0 lg:border-l border-[var(--rkd-border)] flex lg:flex-col justify-between gap-8"><div><div className="font-montserrat font-black text-5xl md:text-6xl text-[var(--rkd-primary)] leading-none">{study.evidence}</div><div className="font-mono text-[9px] tracking-widest text-[var(--rkd-fg-muted)] mt-3 max-w-[150px]">{study.evidenceLabel}</div></div><div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[var(--rkd-fg)] group-hover:text-[var(--rkd-primary)] transition-colors">READ CASE STUDY <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div></div>
          </div>
        </Link>)}</div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]"><div className="max-w-[80rem] mx-auto px-4 md:px-6"><p className="section-label mb-4">// 02. WHAT THE WORK COVERS</p><div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 mb-12"><h2 className="section-heading section-heading-h2">Different problems. <span className="text-red-italic">Different systems.</span></h2><p className="text-[var(--rkd-fg-muted)] leading-relaxed max-w-2xl">Search visibility, paid acquisition, website performance and account recovery require different diagnosis and execution. The case studies reflect that difference.</p></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rkd-border)]">{disciplines.map(([n,title,text])=><div key={n} className="bg-[var(--rkd-bg-secondary)] p-7 md:p-9 group hover:bg-[var(--rkd-card)] transition-colors"><span className="font-mono text-xs text-[var(--rkd-primary)]">{n}</span><h3 className="font-montserrat font-bold text-xl text-[var(--rkd-fg)] mt-6 mb-3">{title}</h3><p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{text}</p></div>)}</div></div></section>

    <section className="py-20 md:py-28 bg-[var(--rkd-bg)]"><div className="max-w-[80rem] mx-auto px-4 md:px-6"><p className="section-label mb-4">// 03. HOW TO READ THESE CASE STUDIES</p><div className="grid lg:grid-cols-3 gap-6">{[['01','Problem','What the business was dealing with before the engagement.'],['02','Intervention','What was actually changed, built, tested or corrected.'],['03','Outcome','The measurable result documented for that specific project.']].map(([n,title,text])=><div key={n} className="border-t border-[var(--rkd-border)] pt-6"><span className="font-mono text-xs text-[var(--rkd-primary)]">{n}</span><h3 className="font-montserrat font-bold text-xl text-[var(--rkd-fg)] mt-4 mb-3">{title}</h3><p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{text}</p></div>)}</div><p className="text-xs text-[var(--rkd-fg-muted)] mt-12 max-w-3xl leading-relaxed">Results are project-specific and can vary with market conditions, budget, competition, starting position and implementation. Metrics shown here should be read in the context of their individual case studies.</p></div></section>

    <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]"><div className="max-w-[80rem] mx-auto px-4 md:px-6"><div className="max-w-4xl"><p className="section-label mb-5">// NEXT STEP</p><h2 className="section-heading section-heading-h2 mb-6">Have a problem worth <span className="text-red-italic">solving?</span></h2><p className="text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed max-w-2xl mb-8">Tell us what is currently limiting your acquisition, visibility or recovery. We’ll review the situation and explain what we would investigate first.</p><div className="flex flex-col sm:flex-row gap-4"><Link href="/contact" className="btn-primary group">Start a Conversation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link><Link href="/services" className="btn-secondary">Explore Services <ArrowUpRight className="w-4 h-4" /></Link></div></div></div></section>
  </main>;
}
