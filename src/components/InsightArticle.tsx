import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';

export type ArticleSection={label:string;title:string;paragraphs?:string[];bullets?:string[];callout?:{title:string;text:string};visual?:ReactNode};
export type InternalLink={label:string;href:string;description:string};
export type InsightArticleProps={category:string;location?:string;title:string;intro:string;readTime:string;updated:string;toc:string[];sections:ArticleSection[];slug?:string;ctaTitle?:string;ctaText?:string};

const relatedLinks:Record<string,InternalLink[]>={
  'google-ads-suspension-recovery-complete-guide':[
    {label:'Google Ads Suspension Recovery Service',href:'/services/google-ads-suspension-recovery',description:'Diagnosis, remediation and appeal support for suspended Google Ads accounts.'},
    {label:'Google Ads Campaign Types',href:'/insights/google-ads-campaign-types',description:'Understand which campaign format fits the business goal before rebuilding or scaling.'},
    {label:'Google Ads Recovery Case Study',href:'/case-studies/google-ads-recovery',description:'See a documented Google Ads recovery and performance case study.'},
  ],
  'local-seo-strategy-greater-noida':[
    {label:'Google Business Profile Optimization Checklist',href:'/insights/gmb-optimization-map-pack-checklist-50-steps',description:'A practical checklist for profile accuracy, categories, reviews and local relevance.'},
    {label:'SEO vs Paid Ads for Greater Noida Businesses',href:'/insights/seo-vs-paid-ads-2025-which-wins',description:'Compare organic and paid acquisition by intent, economics and time horizon.'},
    {label:'Local SEO Services',href:'/services/seo',description:'Explore the SEO service covering technical, content and local search work.'},
    {label:'Google Business Profile Management',href:'/services/gmb',description:'See the dedicated service for Google Maps and Business Profile optimization.'},
  ],
  'ai-automation-lead-generation-5-workflows':[
    {label:'AI Automation Services',href:'/services/ai-automation',description:'Explore lead routing, CRM workflows, reporting and operational automation.'},
    {label:'Our Process',href:'/process',description:'See how R.K Digital Media structures discovery, implementation and measurement.'},
    {label:'Contact R.K Digital Media',href:'/contact',description:'Discuss an automation workflow around your actual lead-handling process.'},
  ],
  'seo-vs-paid-ads-2025-which-wins':[
    {label:'Google Ads Campaign Types',href:'/insights/google-ads-campaign-types',description:'Match paid campaign formats to search intent and the customer journey.'},
    {label:'Local SEO Strategy for Greater Noida',href:'/insights/local-seo-strategy-greater-noida',description:'Go deeper into local search, Maps visibility, reviews and location relevance.'},
    {label:'SEO Services',href:'/services/seo',description:'See the SEO service covering technical, content and local search.'},
    {label:'Google Ads Services',href:'/services/google-ads',description:'Explore campaign strategy, tracking and ongoing Google Ads management.'},
  ],
  'gmb-optimization-map-pack-checklist-50-steps':[
    {label:'Local SEO Strategy for Greater Noida',href:'/insights/local-seo-strategy-greater-noida',description:'A broader local search framework covering GBP, citations, content and measurement.'},
    {label:'SEO vs Paid Ads for Greater Noida Businesses',href:'/insights/seo-vs-paid-ads-2025-which-wins',description:'Compare organic visibility with paid search when planning acquisition.'},
    {label:'Google Business Profile Management',href:'/services/gmb',description:'Explore ongoing profile optimization and local visibility support.'},
    {label:'Local SEO Services',href:'/services/seo',description:'Connect your Business Profile work with broader technical and local SEO.'},
  ],
  'google-ads-expert-noida':[
    {label:'Google Ads Campaign Types',href:'/insights/google-ads-campaign-types',description:'Understand the campaign formats a PPC partner may recommend and why.'},
    {label:'Google Ads Expert in Delhi',href:'/insights/google-ads-expert-delhi',description:'Compare the same PPC evaluation framework for businesses targeting Delhi.'},
    {label:'Google Ads Expert in Greater Noida',href:'/insights/google-ads-expert-greater-noida',description:'A regional guide to evaluating Google Ads management in Greater Noida.'},
    {label:'Google Ads Services',href:'/services/google-ads',description:'See the Google Ads service and the work covered in account management.'},
  ],
  'google-ads-expert-delhi':[
    {label:'Google Ads Campaign Types',href:'/insights/google-ads-campaign-types',description:'Understand the campaign formats and business goals behind each one.'},
    {label:'Google Ads Expert in Noida',href:'/insights/google-ads-expert-noida',description:'A practical PPC evaluation guide for businesses targeting Noida.'},
    {label:'Google Ads Expert in Greater Noida',href:'/insights/google-ads-expert-greater-noida',description:'A regional guide to account structure, tracking and lead quality.'},
    {label:'Google Ads Services',href:'/services/google-ads',description:'Explore Google Ads management, tracking and optimization services.'},
  ],
  'google-ads-expert-greater-noida':[
    {label:'Google Ads Campaign Types',href:'/insights/google-ads-campaign-types',description:'Understand which Google Ads format fits the commercial objective.'},
    {label:'Google Ads Expert in Noida',href:'/insights/google-ads-expert-noida',description:'A nearby-market guide to evaluating PPC account management.'},
    {label:'Google Ads Expert in Delhi',href:'/insights/google-ads-expert-delhi',description:'A broader Delhi-market guide to evaluating PPC services.'},
    {label:'Google Ads Services',href:'/services/google-ads',description:'Explore campaign management, conversion tracking and optimization.'},
  ],
  'google-ads-campaign-types':[
    {label:'Google Ads Expert in Noida',href:'/insights/google-ads-expert-noida',description:'Use this practical checklist when evaluating a PPC partner in Noida.'},
    {label:'Google Ads Suspension Recovery Guide',href:'/insights/google-ads-suspension-recovery-complete-guide',description:'Understand what to audit when an account is suspended before appealing.'},
    {label:'Google Ads Services',href:'/services/google-ads',description:'See how R.K Digital Media approaches campaign strategy and measurement.'},
    {label:'Google Ads Recovery Case Study',href:'/case-studies/google-ads-recovery',description:'Review a documented paid-search recovery and performance example.'},
  ],
};

export default function InsightArticle({category,location,title,intro,readTime,updated,toc,sections,ctaTitle='Want help putting this into practice?',ctaText='R.K Digital Media works on practical search, paid advertising and digital growth systems. Start with a conversation about your actual goals—not a generic package.'}:InsightArticleProps){
return <><section className="relative overflow-hidden bg-[var(--rkd-bg)] hero-background noise-overlay border-b border-[var(--rkd-border)]"><div className="absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-[var(--primary)] opacity-[0.07] blur-3xl]"/><div className="relative max-w-[80rem] mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-28"><Link href="/insights" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.12em] text-[var(--rkd-fg-muted)] hover:text-[var(--rkd-primary)]"><ArrowLeft className="w-3.5 h-3.5"/> Insights</Link><div className="max-w-4xl mt-10"><div className="flex flex-wrap items-center gap-3 mb-5"><span className="section-label">// {category}</span>{location&&<><span className="h-px w-10 bg-[var(--rkd-border)]"/><span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[var(--rkd-fg-muted)]">{location}</span></>}</div><h1 className="hero-headline text-[var(--rkd-fg)] max-w-4xl">{title}</h1><p className="hero-subheadline mt-7 max-w-3xl">{intro}</p><div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-9 text-[11px] font-mono uppercase tracking-[0.1em] text-[var(--rkd-fg-muted)]"><span>By Rohit Kumar</span><span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[var(--rkd-primary)]"/>{readTime} read</span><span>Updated {updated}</span></div></div></div></section><section className="bg-[var(--rkd-bg-secondary)] border-b border-[var(--rkd-border)]"><div className="max-w-[80rem] mx-auto px-4 md:px-6 py-12 md:py-16"><div className="grid lg:grid-cols-[240px_minmax(0,760px)] gap-10 lg:gap-16 items-start justify-center"><aside className="lg:sticky lg:top-28"><div className="card-base p-5"><p className="section-label mb-4">// IN THIS GUIDE</p><nav className="space-y-1.5">{toc.map((x,i)=><a key={x} href={`#section-${i}`} className="flex gap-3 rounded-md px-2 py-2 text-[12px] leading-5 text-[var(--rkd-fg-muted)] hover:text-[var(--rkd-fg)] hover:bg-[var(--rkd-primary-muted)]"><span className="font-mono text-[var(--rkd-primary)]">{String(i+1).padStart(2,'0')}</span><span>{x}</span></a>)}</nav></div></aside><article className="min-w-0"><div className="card-base p-6 md:p-8 mb-12 border-l-2 border-l-[var(--rkd-primary)]"><p className="section-label mb-3">// READ THIS FIRST</p><p className="text-[14px] md:text-[15px] leading-7 text-[var(--rkd-fg-muted)]">The useful part of a guide is what you can actually apply. The recommendations below focus on decisions, trade-offs and practical execution—not promises of guaranteed rankings, leads or returns.</p></div>{slug&&relatedLinks[slug]&&<div className="mb-12">
<p className="section-label mb-4">// RELATED RESOURCES</p>
<div className="grid sm:grid-cols-2 gap-4">
{relatedLinks[slug].map(link=><Link key={link.href} href={link.href} className="group card-base p-5 border border-[var(--rkd-border)] hover:border-[var(--rkd-primary)] transition-colors">
<span className="block font-montserrat font-bold text-sm text-[var(--rkd-fg)] group-hover:text-[var(--rkd-primary)] transition-colors">{link.label}</span>
<span className="block mt-2 text-[13px] leading-6 text-[var(--rkd-fg-muted)]">{link.description}</span>
</Link>)}
</div>
</div>}<div className="space-y-14 md:space-y-20">{sections.map((s,i)=><section id={`section-${i}`} key={s.title} className="scroll-mt-28"><p className="section-label mb-3">// {String(i+1).padStart(2,'0')} — {s.label}</p><h2 className="font-montserrat font-extrabold text-[var(--rkd-fg)] mb-5 tracking-[-0.02em]" style={{fontSize:'clamp(1.75rem,3vw,2.5rem)',lineHeight:'1.15'}}>{s.title}</h2>{s.paragraphs?.map(p=><p key={p} className="mb-5 text-[15px] md:text-[16px] leading-8 text-[var(--rkd-fg-muted)]">{p}</p>)}{s.bullets&&<ul className="mb-6 space-y-3 pl-5 list-disc marker:text-[var(--rkd-primary)] text-[15px] md:text-[16px] leading-7 text-[var(--rkd-fg-muted)]">{s.bullets.map(b=><li key={b}>{b}</li>)}</ul>}{s.visual&&<div className="my-8">{s.visual}</div>}{s.callout&&<div className="card-base p-6 my-7 border-l-2 border-l-[var(--rkd-primary)]"><p className="font-montserrat font-bold text-[var(--rkd-fg)] mb-2">{s.callout.title}</p><p className="text-[14px] leading-7 text-[var(--rkd-fg-muted)]">{s.callout.text}</p></div>}</section>)}<div className="relative overflow-hidden rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-7 md:p-10"><div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[var(--primary)] opacity-[0.08] blur-3xl"/><p className="section-label mb-3">// NEXT STEP</p><h2 className="font-montserrat font-extrabold text-[var(--rkd-fg)] mb-4" style={{fontSize:'clamp(1.6rem,3vw,2.25rem)'}}>{ctaTitle}</h2><p className="text-[14px] md:text-[15px] leading-7 text-[var(--rkd-fg-muted)] max-w-2xl">{ctaText}</p><Link href="/contact" className="btn-primary inline-flex mt-6 group">Start a Conversation <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/></Link></div><div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--rkd-border)]"><Link href="/insights" className="btn-secondary text-sm"><ArrowLeft className="w-4 h-4"/> All Insights</Link><span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[var(--rkd-fg-muted)]">R.K Digital Media · Insights</span></div></div></article></div></div></section></>}