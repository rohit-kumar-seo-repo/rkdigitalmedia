import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';

export type ArticleSection={label:string;title:string;paragraphs?:string[];bullets?:string[];subsections?:{title:string;paragraphs?:string[];bullets?:string[]}[];callout?:{title:string;text:string};visual?:ReactNode};
export type InsightArticleProps={category:string;location?:string;title:string;intro:string;readTime:string;updated:string;toc:string[];sections:ArticleSection[];ctaTitle?:string;ctaText?:string};

type ContextualLinkRule={phrase:string;href:string};

const seoStrategyLinkRules:ContextualLinkRule[]=[
  {phrase:'Paid search',href:'/services/google-ads'},
  {phrase:'campaign',href:'/insights/google-ads-campaign-types'},
  {phrase:'SEO',href:'/services/seo'},
];

function renderContextualParagraph(text:string, category:string, usedLinks:Set<string>){
  if(category!=='SEO STRATEGY') return text;
  const rule=seoStrategyLinkRules.find(item=>!usedLinks.has(item.href) && text.toLowerCase().includes(item.phrase.toLowerCase()));
  if(!rule) return text;
  const index=text.toLowerCase().indexOf(rule.phrase.toLowerCase());
  if(index<0) return text;
  usedLinks.add(rule.href);
  return <>{text.slice(0,index)}<Link href={rule.href} className="text-[var(--rkd-primary)] hover:underline">{text.slice(index,index+rule.phrase.length)}</Link>{text.slice(index+rule.phrase.length)}</>;
}

function getServiceHref(category:string,title:string){
  const normalized=`${category} ${title}`.toLowerCase();
  if(normalized.includes('suspension') || normalized.includes('circumventing') || normalized.includes('suspicious payment')) return 'https://adssuspensionrecovery.com/';
  if(normalized.includes('google business profile') || normalized.includes('gmb') || normalized.includes('map pack')) return '/services/gmb';
  if(category==='AI AUTOMATION' || normalized.includes('automation')) return '/services/ai-automation';
  if(category==='LOCAL SEO' || category==='SEO STRATEGY' || normalized.includes('local seo')) return '/services/seo';
  if(category==='GOOGLE ADS' || normalized.includes('ppc') || normalized.includes('google ads')) return '/services/google-ads';
  if(normalized.includes('website') || normalized.includes('web development')) return '/services/web-development';
  return '/contact';
}

function getRelatedResources(category:string,title:string){
  const normalized=title.toLowerCase();

  if(category==='GOOGLE ADS'){
    if(normalized.includes('suspension') || normalized.includes('circumventing') || normalized.includes('suspicious payment')){
      return [
        ['https://adssuspensionrecovery.com/','AdsSuspensionRecovery.com — Specialist Recovery'],
        ['https://adssuspensionrecovery.com/google-ads-suspended/','Google Ads Suspension Recovery Process'],
        ['/services/google-ads','Google Ads Services'],
        ['/case-studies/google-ads-recovery','Google Ads Recovery Case Study'],
      ];
    }


    const items=[
      ['/services/google-ads','Google Ads Services'],
      ['/insights/google-ads-campaign-types','Google Ads Campaign Types'],
      ['/insights/google-ads-management-cost-india','Google Ads Management Cost in India'],
      ['/insights/google-ads-expert-noida','Google Ads Expert in Noida'],
      ['/insights/google-ads-expert-delhi','Google Ads Expert in Delhi'],
    ];
    return items
      .filter(([href])=>!normalized.includes(href.split('/').pop()!.replace(/-/g,' ')))
      .slice(0,4);
  }

  if(category==='LOCAL SEO'){
    return [
      ['/services/gmb','Google Business Profile Management'],
      ['/services/seo','SEO Services'],
      ['/insights/local-seo-strategy-greater-noida','Local SEO Strategy for Greater Noida'],
      ['/insights/gmb-optimization-map-pack-checklist-50-steps','Google Business Profile Optimization Checklist'],
    ].filter(([href])=>!normalized.includes(href.split('/').pop()!.replace(/-/g,' '))).slice(0,4);
  }

  if(category==='SEO STRATEGY'){
    return [
      ['/services/seo','SEO Services'],
      ['/insights/seo-services-cost-noida','SEO Services Cost in Noida'],
      ['/insights/local-seo-strategy-greater-noida','Local SEO Strategy for Greater Noida'],
      ['/insights/seo-vs-paid-ads-2025-which-wins','SEO vs Paid Ads for Greater Noida Businesses'],
    ].filter(([href])=>!normalized.includes(href.split('/').pop()!.replace(/-/g,' '))).slice(0,4);
  }

  if(category==='AI AUTOMATION'){
    return [
      ['/services/ai-automation','AI Automation Services'],
      ['/insights/ai-automation-lead-generation-5-workflows','AI Automation for Lead Generation'],
      ['/process','Our Process'],
      ['/contact','Contact R.K Digital Media'],
    ].filter(([href])=>!normalized.includes(href.split('/').pop()!.replace(/-/g,' '))).slice(0,4);
  }

  if(category==='WEBSITE DEVELOPMENT' || normalized.includes('website development') || normalized.includes('web development')){
    return [
      ['/services/web-development','Website Development Services'],
      ['/insights/how-to-choose-website-development-company-noida','How to Choose a Website Development Company in Noida'],
      ['/insights/website-development-cost-noida','Website Development Cost in Noida'],
      ['/services/seo','SEO Services'],
    ];
  }

  return [];
}

export default function InsightArticle({category,location,title,intro,readTime,updated,toc,sections,ctaTitle='Want help putting this into practice?',ctaText='R.K Digital Media works on practical search, paid advertising and digital growth systems. Start with a conversation about your actual goals—not a generic package.'}:InsightArticleProps){
const usedLinks=new Set<string>();
const serviceHref=getServiceHref(category,title);
const relatedResources=getRelatedResources(category,title);
return <><section className="relative overflow-hidden bg-[var(--rkd-bg)] hero-background noise-overlay border-b border-[var(--rkd-border)]"><div className="absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-[var(--primary)] opacity-[0.07] blur-3xl]"/><div className="relative max-w-[80rem] mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-28"><Link href="/insights" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.12em] text-[var(--rkd-fg-muted)] hover:text-[var(--rkd-primary)]"><ArrowLeft className="w-3.5 h-3.5"/> Insights</Link><div className="max-w-4xl mt-10"><div className="flex flex-wrap items-center gap-3 mb-5"><span className="section-label">// {category}</span>{location&&<><span className="h-px w-10 bg-[var(--rkd-border)]"/><span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[var(--rkd-fg-muted)]">{location}</span></>}</div><h1 className="hero-headline text-[var(--rkd-fg)] max-w-4xl">{title}</h1><p className="hero-subheadline mt-7 max-w-3xl">{intro}</p><div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-9 text-[11px] font-mono uppercase tracking-[0.1em] text-[var(--rkd-fg-muted)]"><span>By Rohit Kumar</span><span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[var(--rkd-primary)]"/>{readTime} read</span><span>Updated {updated}</span></div></div></div></section><section className="bg-[var(--rkd-bg-secondary)] border-b border-[var(--rkd-border)]"><div className="max-w-[80rem] mx-auto px-4 md:px-6 py-12 md:py-16"><div className="grid lg:grid-cols-[240px_minmax(0,760px)] gap-10 lg:gap-16 items-start justify-center"><aside className="lg:sticky lg:top-28"><div className="card-base p-5"><p className="section-label mb-4">// IN THIS GUIDE</p><nav className="space-y-1.5">{toc.map((x,i)=><a key={x} href={`#section-${i}`} className="flex gap-3 rounded-md px-2 py-2 text-[12px] leading-5 text-[var(--rkd-fg-muted)] hover:text-[var(--rkd-fg)] hover:bg-[var(--rkd-primary-muted)]"><span className="font-mono text-[var(--rkd-primary)]">{String(i+1).padStart(2,'0')}</span><span>{x}</span></a>)}</nav></div></aside><article className="min-w-0"><div className="card-base p-6 md:p-8 mb-12 border-l-2 border-l-[var(--rkd-primary)]"><p className="section-label mb-3">// READ THIS FIRST</p><p className="text-[14px] md:text-[15px] leading-7 text-[var(--rkd-fg-muted)]">The useful part of a guide is what you can actually apply. The recommendations below focus on decisions, trade-offs and practical execution—not promises of guaranteed rankings, leads or returns.</p></div><div className="space-y-14 md:space-y-20">{sections.map((s,i)=><section id={`section-${i}`} key={s.title} className="scroll-mt-28"><p className="section-label mb-3">// {String(i+1).padStart(2,'0')} — {s.label}</p><h2 className="font-montserrat font-extrabold text-[var(--rkd-fg)] mb-5 tracking-[-0.02em]" style={{fontSize:'clamp(1.75rem,3vw,2.5rem)',lineHeight:'1.15'}}>{s.title}</h2>{s.paragraphs?.map(p=><p key={p} className="mb-5 text-[15px] md:text-[16px] leading-8 text-[var(--rkd-fg-muted)]">{renderContextualParagraph(p,category,usedLinks)}</p>)}{s.bullets&&<ul className="mb-6 space-y-3 pl-5 list-disc marker:text-[var(--rkd-primary)] text-[15px] md:text-[16px] leading-7 text-[var(--rkd-fg-muted)]">{s.bullets.map(b=><li key={b}>{b}</li>)}</ul>}{s.subsections?.map(sub=><div key={sub.title} className="mb-8"><h3 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-3" style={{fontSize:'clamp(1.15rem,2vw,1.4rem)',lineHeight:'1.25'}}>{sub.title}</h3>{sub.paragraphs?.map(p=><p key={p} className="mb-4 text-[15px] md:text-[16px] leading-8 text-[var(--rkd-fg-muted)]">{renderContextualParagraph(p,category,usedLinks)}</p>)}{sub.bullets&&<ul className="space-y-3 pl-5 list-disc marker:text-[var(--rkd-primary)] text-[15px] md:text-[16px] leading-7 text-[var(--rkd-fg-muted)]">{sub.bullets.map(b=><li key={b}>{b}</li>)}</ul>}</div>)}{s.visual&&<div className="my-8">{s.visual}</div>}{s.callout&&<div className="card-base p-6 my-7 border-l-2 border-l-[var(--rkd-primary)]"><p className="font-montserrat font-bold text-[var(--rkd-fg)] mb-2">{s.callout.title}</p><p className="text-[14px] leading-7 text-[var(--rkd-fg-muted)]">{s.callout.text}</p></div>}</section>)}{relatedResources.length>0&&<div className="mb-12"><p className="section-label mb-4">// RELATED RESOURCES</p><div className="grid sm:grid-cols-2 gap-4">{relatedResources.map(([href,label])=><Link key={href} href={href} className="group card-base p-5"><span className="font-montserrat font-bold text-sm text-[var(--rkd-fg)] group-hover:text-[var(--rkd-primary)]">{label}</span></Link>)}</div></div>}<div className="relative overflow-hidden rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-7 md:p-10"><div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[var(--primary)] opacity-[0.08] blur-3xl"/><p className="section-label mb-3">// NEXT STEP</p><h2 className="font-montserrat font-extrabold text-[var(--rkd-fg)] mb-4" style={{fontSize:'clamp(1.6rem,3vw,2.25rem)'}}>{ctaTitle}</h2><p className="text-[14px] md:text-[15px] leading-7 text-[var(--rkd-fg-muted)] max-w-2xl">{ctaText}</p><Link href={serviceHref} className="btn-primary inline-flex mt-6 group">{serviceHref.startsWith('http') ? 'Visit the specialist recovery site' : 'Explore the relevant service'} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/></Link></div><div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--rkd-border)]"><Link href="/insights" className="btn-secondary text-sm"><ArrowLeft className="w-4 h-4"/> All Insights</Link><span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[var(--rkd-fg-muted)]">R.K Digital Media · Insights</span></div></div></article></div></div></section></>}