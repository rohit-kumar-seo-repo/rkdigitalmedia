'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

const WHATSAPP_NUMBER = '919871530594';

const services = [
  { n: '01', title: 'Project-launch search strategy', text: 'Map high-intent searches to the right project, location, property type and buyer question before spending on clicks.' },
  { n: '02', title: 'Campaigns built around intent', text: 'Separate relevant search themes, write clear ads, align each ad with its landing page and build a considered negative-keyword process.' },
  { n: '03', title: 'Enquiry tracking that means something', text: 'Measure calls and form enquiries, then work toward distinguishing genuine buyer conversations from raw lead volume.' },
  { n: '04', title: 'Optimisation with sales context', text: 'Review search terms, location performance, lead feedback and conversion signals to decide what to refine next.' },
];

const process = [
  { n: '01', title: 'Understand the project', text: 'Location, inventory, price segment, launch stage, buyer profile and sales capacity.' },
  { n: '02', title: 'Plan the acquisition path', text: 'Search themes, campaign structure, ad messaging, landing-page needs and tracking plan.' },
  { n: '03', title: 'Launch with measurement', text: 'Check conversion actions and lead routing before using campaign data to make decisions.' },
  { n: '04', title: 'Learn and improve', text: 'Use actual search behaviour and sales feedback to improve relevance and lead handling.' },
];

const faqs = [
  { q: 'Can you guarantee a fixed number of property leads?', a: 'No. Demand, competition, project pricing, location, landing-page experience, budget and sales follow-up all influence outcomes. We focus on a transparent measurement and optimisation process rather than promising a fixed lead count.' },
  { q: 'Can you work on a project that is launching soon?', a: 'Yes. The first step is to understand the launch date, location, inventory, buyer profile, approved project information and sales readiness, then decide what can realistically be prepared before launch.' },
  { q: 'We already run Google Ads. Can you review the account?', a: 'Yes. An account review can examine campaign structure, search terms, targeting, conversion actions, landing pages and the relationship between reported leads and useful sales conversations.' },
  { q: 'Is the ad spend included in your management fee?', a: 'Advertising spend and service fees should be discussed separately and confirmed in the proposal. The right budget depends on the project, target market, demand and commercial goals.' },
  { q: 'Do you only work with projects in Delhi NCR?', a: 'R.K Digital Media is based in the Delhi NCR region and can discuss projects in other Indian markets. The service area and campaign scope are agreed during the initial conversation.' },
];

function Arrow({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function BuildingArtwork() {
  return (
    <div className="relative min-h-[390px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111a1c] p-4 sm:p-6">
      <div className="absolute inset-0 opacity-70" style={{ background: 'radial-gradient(circle at 72% 18%, rgba(205,164,105,.25), transparent 34%), linear-gradient(145deg, #17282a 0%, #101718 58%, #1c2020 100%)' }} />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)', backgroundSize: '34px 34px' }} />
      <svg className="absolute inset-x-0 bottom-0 h-[82%] w-full" viewBox="0 0 620 440" role="img" aria-label="Architectural illustration of premium residential towers" preserveAspectRatio="xMidYMax meet">
        <defs>
          <linearGradient id="towerA" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#c7b79b"/><stop offset="1" stopColor="#655f55"/></linearGradient>
          <linearGradient id="towerB" x1="0" y1="0" x2="0.9" y2="1"><stop stopColor="#71817d"/><stop offset="1" stopColor="#2a3836"/></linearGradient>
          <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d8c7a6" stopOpacity=".8"/><stop offset="1" stopColor="#5d6a64" stopOpacity=".45"/></linearGradient>
        </defs>
        <path d="M0 385 L620 345 L620 440 L0 440Z" fill="#242b28"/>
        <path d="M42 386 L42 124 L158 94 L158 377Z" fill="url(#towerB)" stroke="#a7b3a7" strokeOpacity=".38"/>
        <path d="M158 94 L188 111 L188 371 L158 377Z" fill="#25332f"/>
        <path d="M58 135 L145 112 M58 160 L145 137 M58 185 L145 162 M58 210 L145 187 M58 235 L145 212 M58 260 L145 237 M58 285 L145 262 M58 310 L145 287 M58 335 L145 312 M58 360 L145 337" stroke="#d8c7a6" strokeOpacity=".62" strokeWidth="3"/>
        <path d="M211 402 L211 53 L366 21 L366 390Z" fill="url(#towerA)" stroke="#e2d2b6" strokeOpacity=".45"/>
        <path d="M366 21 L396 42 L396 382 L366 390Z" fill="#55574f"/>
        <path d="M231 83 L350 59 M231 112 L350 88 M231 141 L350 117 M231 170 L350 146 M231 199 L350 175 M231 228 L350 204 M231 257 L350 233 M231 286 L350 262 M231 315 L350 291 M231 344 L350 320 M231 373 L350 349" stroke="#514f46" strokeOpacity=".75" strokeWidth="4"/>
        <path d="M245 79 L245 371 M278 72 L278 364 M311 65 L311 357 M340 59 L340 351" stroke="url(#glass)" strokeWidth="8" strokeOpacity=".9"/>
        <path d="M411 393 L411 153 L516 130 L516 379Z" fill="#3d4d49" stroke="#a7b3a7" strokeOpacity=".5"/>
        <path d="M516 130 L541 146 L541 373 L516 379Z" fill="#263633"/>
        <path d="M425 176 L503 158 M425 203 L503 185 M425 230 L503 212 M425 257 L503 239 M425 284 L503 266 M425 311 L503 293 M425 338 L503 320 M425 365 L503 347" stroke="#b6c2b2" strokeOpacity=".65" strokeWidth="3"/>
        <path d="M0 401 L620 367" stroke="#bba47e" strokeOpacity=".7" strokeWidth="2"/>
        <path d="M34 414 L584 383" stroke="#e4d0a7" strokeOpacity=".24" strokeWidth="1"/>
        {Array.from({ length: 7 }).map((_, i) => <circle key={i} cx={75 + i * 75} cy={397 - i * 4} r="2.3" fill="#d9bc88" />)}
      </svg>
      <div className="relative z-10 flex items-start justify-between gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#d6bd91]/30 bg-black/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[.2em] text-[#e5d2ae]"><span className="h-1.5 w-1.5 rounded-full bg-[#d6bd91]" /> Property acquisition</span>
        <span className="text-right font-mono text-[10px] uppercase tracking-[.16em] text-white/45">Campaign framework<br/>01 / 04</span>
      </div>
      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
        <div>
          <p className="mb-1 text-[10px] uppercase tracking-[.2em] text-[#d6bd91]">From search to site visit</p>
          <p className="max-w-xs text-xl font-semibold leading-tight text-white sm:text-2xl">A more considered path to buyer enquiries.</p>
        </div>
        <div className="hidden rounded-xl border border-white/15 bg-black/30 p-3 backdrop-blur-sm sm:block">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true"><circle cx="21" cy="21" r="18" stroke="#d6bd91" strokeOpacity=".35"/><path d="M11 25l7-7 5 4 8-10" stroke="#e5d2ae" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M25 12h6v6" stroke="#e5d2ae" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>
    </div>
  );
}

function Blueprint() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111313] shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div><p className="text-[10px] uppercase tracking-[.2em] text-[#c9ad7d]">Illustrative deliverable</p><p className="mt-1 text-sm font-semibold text-white">Project launch campaign blueprint</p></div>
        <span className="rounded-full border border-[#c9ad7d]/30 px-2.5 py-1 text-[9px] uppercase tracking-widest text-[#c9ad7d]">Sample</span>
      </div>
      <div className="grid gap-px bg-white/10 sm:grid-cols-2">
        {[
          ['01', 'Search intent map', 'Project, location, property type and buyer-stage themes'],
          ['02', 'Campaign structure', 'Separate priorities, budgets and landing-page destinations'],
          ['03', 'Lead qualification', 'Project fit, budget band, location and buyer requirements'],
          ['04', 'Measurement plan', 'Enquiries, qualified conversations and sales feedback'],
        ].map((item) => <div key={item[0]} className="bg-[#151818] p-5"><span className="font-mono text-xs text-[#c9ad7d]">{item[0]}</span><h3 className="mt-3 text-sm font-semibold text-white">{item[1]}</h3><p className="mt-2 text-xs leading-relaxed text-white/55">{item[2]}</p></div>)}
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-[11px] leading-relaxed text-white/40">A framework preview, not a client report or a claim of campaign results. The final plan is scoped around the actual project.</div>
    </div>
  );
}

export default function BuildersLandingPage() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [project, setProject] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [stage, setStage] = useState('Planning a launch');
  const [budget, setBudget] = useState('Need guidance');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    if (!consent) {
      setError('Please confirm that you agree to be contacted about this enquiry.');
      return;
    }
    const message = [
      'Hello R.K Digital Media, I would like to discuss Google Ads for a real estate project.',
      '',
      'Name: ' + name.trim(),
      'Company: ' + company.trim(),
      'Project type/name: ' + project.trim(),
      'Project city: ' + city.trim(),
      'WhatsApp/contact: ' + phone.trim(),
      'Stage: ' + stage,
      'Indicative monthly ad budget: ' + budget,
      '',
      'Source: Google Ads for Builders landing page',
    ].join('\n');
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
  }

  const waHref = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent('Hello, I would like to discuss Google Ads for a real estate project.');
  const sectionLink = 'inline-flex items-center gap-2 text-sm font-semibold text-[#e6cfaa] transition hover:text-white';

  return (
    <main className="builders-page bg-[#0b0d0d] text-[#f4f2ed]">
      <div className="border-b border-white/[.08] bg-[#101313]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="R.K Digital Media home">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d6bd91] text-sm font-black tracking-tight text-[#101313]">RK</span>
            <span><span className="block text-sm font-semibold tracking-wide">R.K DIGITAL MEDIA</span><span className="block text-[9px] uppercase tracking-[.2em] text-white/45">Performance marketing</span></span>
          </Link>
          <div className="hidden items-center gap-5 text-xs text-white/55 md:flex"><span>Google Ads for property projects</span><span className="h-1 w-1 rounded-full bg-[#d6bd91]"/><span>Delhi NCR · India</span></div>
          <a href={waHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold transition hover:border-[#d6bd91]/60 hover:bg-white/5"><span className="h-2 w-2 rounded-full bg-[#52c878]"/> WhatsApp</a>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-white/[.08]">
        <div className="pointer-events-none absolute -right-48 -top-36 h-[34rem] w-[34rem] rounded-full bg-[#a8895a]/[.08] blur-3xl"/>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-8 lg:pb-24 lg:pt-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d6bd91]/25 bg-[#d6bd91]/[.06] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#e5d2ae]"><span className="h-1.5 w-1.5 rounded-full bg-[#d6bd91]"/> For builders & real estate developers</div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.07] tracking-[-.045em] sm:text-5xl lg:text-[3.7rem]">Turn property searches into <span className="font-serif italic text-[#d6bd91]">better buyer conversations.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">Google Ads strategy for residential and commercial projects—built around buyer intent, project location, clear enquiry tracking and a landing page that gives prospects a reason to take the next step.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#project-enquiry" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6bd91] px-6 py-4 text-sm font-bold text-[#111514] transition hover:bg-[#ead8b7]">Discuss your project <Arrow className="h-4 w-4"/></a>
              <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/[.04]">See how it works</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/50">
              <span className="flex items-center gap-2"><span className="text-[#d6bd91]">✓</span> Project-specific campaign planning</span>
              <span className="flex items-center gap-2"><span className="text-[#d6bd91]">✓</span> Conversion measurement</span>
              <span className="flex items-center gap-2"><span className="text-[#d6bd91]">✓</span> No guaranteed-results claims</span>
            </div>
          </div>
          <BuildingArtwork />
        </div>
      </section>

      <section className="border-b border-white/[.08] bg-[#101313]">
        <div className="mx-auto grid max-w-7xl gap-0 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[['01 / RELEVANCE','Reach searches that match your project'],['02 / CLARITY','Give buyers a clear next step'],['03 / MEASUREMENT','Understand enquiries beyond click volume']].map((item, i) => <div key={item[0]} className={'py-6 md:px-6 lg:py-8 ' + (i !== 2 ? 'border-b border-white/10 md:border-b-0 md:border-r' : '')}><p className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#c9ad7d]">{item[0]}</p><p className="mt-2 text-sm font-medium text-white/85">{item[1]}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#c9ad7d]">The commercial reality</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-4xl">A property campaign needs more than clicks.</h2><p className="mt-5 leading-7 text-white/55">A launch has a location, price segment, inventory, timeline and sales team. The campaign and the enquiry journey should reflect those realities—not simply optimise for the largest possible number of form submissions.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[['Clicks without context','Traffic is useful only when the search intent fits the project and offer.'],['Unclear lead quality','Lead volume alone does not tell you whether a prospect is relevant or ready to talk.'],['Launch and location complexity','Different projects and catchment areas can require different search themes and messages.'],['The follow-up gap','Tracking the enquiry is only the start; sales feedback helps explain which leads matter.']].map((item,i)=><article key={item[0]} className="rounded-2xl border border-white/10 bg-[#111414] p-6"><span className="font-mono text-xs text-[#c9ad7d]">0{i+1}</span><h3 className="mt-4 text-base font-semibold">{item[0]}</h3><p className="mt-2 text-sm leading-6 text-white/55">{item[1]}</p></article>)}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[.08] bg-[#101313]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#c9ad7d]">What the work covers</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">A connected acquisition system.</h2><p className="mt-4 leading-7 text-white/55">Campaign setup, the page buyers land on and the measurement after they enquire should work together.</p></div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {services.map((item)=><article key={item.n} className="bg-[#101313] p-7 sm:p-9"><span className="font-mono text-xs text-[#c9ad7d]">{item.n} / CAPABILITY</span><h3 className="mt-5 text-xl font-semibold">{item.title}</h3><p className="mt-3 max-w-lg text-sm leading-7 text-white/55">{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28" id="sample">
        <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#c9ad7d]">See the thinking</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-4xl">A plan you can inspect before a campaign begins.</h2><p className="mt-5 leading-7 text-white/60">The first conversation should establish whether the project, buyer market, budget and sales process make sense for paid search. A campaign blueprint can then map the approach before decisions are made.</p><ul className="mt-6 space-y-3 text-sm text-white/70">{['Search-intent and keyword themes','Campaign and landing-page structure','Lead qualification and tracking plan','Reporting that separates enquiries from business outcomes'].map(t=><li key={t} className="flex gap-3"><span className="text-[#d6bd91]">✓</span><span>{t}</span></li>)}</ul><p className="mt-5 text-xs leading-5 text-white/35">The blueprint shown here is illustrative. It contains no claimed client performance figures.</p></div>
          <Blueprint />
        </div>
      </section>

      <section id="how-it-works" className="border-y border-white/[.08] bg-[#101313]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#c9ad7d]">The process</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">From project context to measured learning.</h2></div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{process.map(item=><article key={item.n} className="border-t border-[#c9ad7d]/50 pt-5"><span className="font-mono text-xs text-[#c9ad7d]">{item.n}</span><h3 className="mt-4 text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#c9ad7d]">Trust, without the hype</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-4xl">Clear scope. Verifiable credentials. Honest reporting.</h2><p className="mt-5 leading-7 text-white/55">R.K Digital Media works across Google Ads strategy, conversion tracking, search-term optimisation and landing-page alignment. We start with the actual project and its constraints rather than promise a result before seeing the numbers.</p><a className={sectionLink + ' mt-6'} href="https://skillshop.credential.net/profile/rohitkumarseo848048/wallet" target="_blank" rel="noreferrer">View Google Ads credentials <Arrow className="h-4 w-4"/></a><div className="mt-8 rounded-xl border border-white/10 bg-[#111414] p-5"><p className="text-sm font-semibold">What you can expect</p><ul className="mt-3 space-y-2 text-sm leading-6 text-white/55"><li>• Clear discussion of campaign scope and fees</li><li>• Advertising spend distinguished from management fees</li><li>• Conversion tracking reviewed before performance claims</li><li>• No guaranteed lead counts or sales ratios</li></ul></div></div>
          <div className="space-y-4">
            <article className="rounded-2xl border border-white/10 bg-[#111414] p-6 sm:p-8"><p className="text-[10px] uppercase tracking-[.2em] text-[#c9ad7d]">Relevant adjacent experience</p><h3 className="mt-3 text-xl font-semibold">B2B lead generation case study</h3><p className="mt-3 text-sm leading-7 text-white/55">Review a documented lead-generation project to understand the broader approach to paid acquisition and qualification. It is not presented as a real estate case study.</p><Link href="/case-studies/b2b-lead-gen" className={sectionLink + ' mt-5'}>View documented case study <Arrow className="h-4 w-4"/></Link></article>
            <article className="rounded-2xl border border-white/10 bg-[#111414] p-6 sm:p-8"><p className="text-[10px] uppercase tracking-[.2em] text-[#c9ad7d]">Existing Google Ads service</p><h3 className="mt-3 text-xl font-semibold">A measurement-first approach</h3><p className="mt-3 text-sm leading-7 text-white/55">See the wider Google Ads service scope, including search campaigns, conversion tracking, search-term optimisation and landing-page alignment.</p><Link href="/services/google-ads" className={sectionLink + ' mt-5'}>Explore Google Ads services <Arrow className="h-4 w-4"/></Link></article>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[.08] bg-[#101313]">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#c9ad7d]">Common questions</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">Before we discuss your project.</h2></div>
          <div className="mt-8 divide-y divide-white/10">{faqs.map(item=><details key={item.q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-white/90 marker:content-none"><span>{item.q}</span><span className="text-xl text-[#c9ad7d] transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-7 text-white/55">{item.a}</p></details>)}</div>
        </div>
      </section>

      <section id="project-enquiry" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-48 top-10 h-96 w-96 rounded-full bg-[#b69868]/[.08] blur-3xl"/>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-28">
          <div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#c9ad7d]">Start with the project</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-4xl">Let’s see whether Google Ads fits your next launch.</h2><p className="mt-5 leading-7 text-white/55">Share a few details. We can discuss the project, target market, current campaigns and what needs to be measured before proposing a plan.</p><div className="mt-8 space-y-4 text-sm text-white/65"><div className="flex gap-3"><span className="text-[#d6bd91]">01</span><span>Short, project-focused first conversation</span></div><div className="flex gap-3"><span className="text-[#d6bd91]">02</span><span>Discuss goals, readiness, budget and tracking</span></div><div className="flex gap-3"><span className="text-[#d6bd91]">03</span><span>Decide whether a campaign plan is the right next step</span></div></div><a href={waHref} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#52c878]/30 bg-[#52c878]/[.08] px-5 py-3 text-sm font-semibold text-[#a4edb8] transition hover:bg-[#52c878]/[.14]"><span className="h-2 w-2 rounded-full bg-[#52c878]"/> Start on WhatsApp <Arrow className="h-4 w-4"/></a></div>
          <form onSubmit={submitLead} className="rounded-2xl border border-white/10 bg-[#111414] p-5 sm:p-8">
            <div className="mb-6"><h3 className="text-xl font-semibold">Tell us about your project</h3><p className="mt-2 text-xs leading-5 text-white/45">Required fields are marked *. Submitting opens WhatsApp with your details so you can review and send the enquiry.</p></div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-xs font-medium text-white/65">Full name *<input required autoComplete="name" value={name} onChange={e=>setName(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b0d0d] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#c9ad7d]/70" placeholder="Your name"/></label>
              <label className="block text-xs font-medium text-white/65">Company / builder *<input required autoComplete="organization" value={company} onChange={e=>setCompany(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b0d0d] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#c9ad7d]/70" placeholder="Company name"/></label>
              <label className="block text-xs font-medium text-white/65 sm:col-span-2">Project name or type *<input required value={project} onChange={e=>setProject(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b0d0d] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#c9ad7d]/70" placeholder="Residential, commercial, plotted development..."/></label>
              <label className="block text-xs font-medium text-white/65">Project city *<input required autoComplete="address-level2" value={city} onChange={e=>setCity(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b0d0d] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#c9ad7d]/70" placeholder="City / market"/></label>
              <label className="block text-xs font-medium text-white/65">WhatsApp / phone *<input required type="tel" autoComplete="tel" value={phone} onChange={e=>setPhone(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b0d0d] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#c9ad7d]/70" placeholder="+91 ..."/></label>
              <label className="block text-xs font-medium text-white/65">Project stage<select value={stage} onChange={e=>setStage(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b0d0d] px-4 py-3.5 text-sm text-white outline-none focus:border-[#c9ad7d]/70"><option>Planning a launch</option><option>Launching soon</option><option>Already selling</option><option>Existing campaigns need improvement</option></select></label>
              <label className="block text-xs font-medium text-white/65">Indicative monthly ad budget<select value={budget} onChange={e=>setBudget(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b0d0d] px-4 py-3.5 text-sm text-white outline-none focus:border-[#c9ad7d]/70"><option>Need guidance</option><option>₹50,000–₹1 lakh</option><option>₹1–₹3 lakh</option><option>₹3 lakh+</option></select><span className="mt-1 block text-[10px] text-white/35">Indicative ad spend, not the management fee.</span></label>
            </div>
            <label className="mt-6 flex cursor-pointer items-start gap-3 text-xs leading-5 text-white/50"><input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-[#d6bd91]"/><span>I agree that R.K Digital Media may contact me about this enquiry. My details will be included in the WhatsApp message only when I choose to send it.</span></label>
            {error && <p role="alert" className="mt-3 text-xs text-red-300">{error}</p>}
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d6bd91] px-6 py-4 text-sm font-bold text-[#111514] transition hover:bg-[#ead8b7] sm:w-auto">Continue to WhatsApp <Arrow className="h-4 w-4"/></button>
            <p className="mt-4 text-[10px] leading-5 text-white/35">No enquiry is sent automatically to a database by this form. You review the pre-filled WhatsApp message and send it yourself.</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#080a0a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} R.K Digital Media. Google Ads for real estate builders and developers.</p>
          <div className="flex flex-wrap gap-5"><Link href="/privacy-policy" className="transition hover:text-white/70">Privacy</Link><Link href="/services/google-ads" className="transition hover:text-white/70">Google Ads services</Link><Link href="/contact" className="transition hover:text-white/70">Contact</Link></div>
        </div>
      </footer>
      <a href={waHref} target="_blank" rel="noreferrer" aria-label="Contact R.K Digital Media on WhatsApp" className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-[#52c878]/30 bg-[#14251a] px-4 py-3 text-xs font-semibold text-[#b5f0c4] shadow-xl shadow-black/40 transition hover:-translate-y-0.5 hover:bg-[#1a3322]"><span className="h-2 w-2 rounded-full bg-[#52c878]"/> WhatsApp</a>
    </main>
  );
}
