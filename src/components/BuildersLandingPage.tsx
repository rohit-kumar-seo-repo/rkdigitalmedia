'use client';

import { useEffect, useRef, useState } from 'react';
import type { FormEvent, FocusEvent, ReactNode } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

const WHATSAPP_NUMBER = '919871530594';
const CITY_SUGGESTIONS = ['Mumbai/MMR', 'Delhi NCR', 'Gurugram', 'Noida', 'Bengaluru', 'Hyderabad', 'Pune', 'Chennai', 'Ahmedabad', 'Kolkata', 'Jaipur', 'Lucknow', 'Chandigarh', 'Kochi', 'Indore', 'Nagpur', 'Surat'];
const PROJECT_TYPES = ['Residential', 'Commercial', 'Plotted/land', 'Township', 'Mixed-use'];


function Arrow({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SearchJourney() {
  return <svg viewBox="0 0 520 300" width="520" height="300" role="img" aria-label="Illustration showing a property search moving into a project page and a buyer enquiry" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="18" width="496" height="264" rx="22" fill="#141414" stroke="#333"/>
    <rect x="30" y="38" width="284" height="44" rx="10" fill="#0D0D0D" stroke="#3A3A3A"/>
    <circle cx="51" cy="60" r="7" stroke="#E8282B" strokeWidth="2" fill="none"/><path d="m56 65 6 6" stroke="#E8282B" strokeWidth="2" strokeLinecap="round"/>
    <path d="M75 60h160" stroke="#F0EEEE" strokeOpacity=".6" strokeWidth="5" strokeLinecap="round"/>
    <rect x="30" y="96" width="284" height="76" rx="12" fill="#0D0D0D" stroke="#303030"/>
    <rect x="43" y="109" width="52" height="50" rx="7" fill="#242424"/><path d="M50 150v-22l19-11 19 11v22M61 150v-12h14v12" stroke="#8A8A8A" strokeWidth="2" fill="none"/>
    <path d="M109 117h154M109 133h124M109 149h88" stroke="#F0EEEE" strokeOpacity=".5" strokeWidth="5" strokeLinecap="round"/>
    <path d="M326 125h36" stroke="#E8282B" strokeWidth="2.5" strokeLinecap="round"/><path d="m354 117 9 8-9 8" stroke="#E8282B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="375" y="84" width="111" height="112" rx="14" fill="#202020" stroke="#E8282B" strokeOpacity=".6"/>
    <path d="M396 125 430 102l34 23v47h-68z" fill="#303030" stroke="#A0A0A0" strokeWidth="1.5"/><path d="M410 172v-27h14v27M433 138h12v11h-12" stroke="#E8282B" strokeWidth="2" fill="none"/>
    <rect x="30" y="192" width="456" height="68" rx="12" fill="#0D0D0D" stroke="#303030"/>
    <circle cx="58" cy="226" r="12" fill="#E8282B" fillOpacity=".13" stroke="#E8282B"/><path d="m52 226 4 4 8-9" stroke="#E8282B" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M82 216h190M82 233h124" stroke="#F0EEEE" strokeOpacity=".55" strokeWidth="5" strokeLinecap="round"/>
    <rect x="340" y="208" width="128" height="36" rx="18" fill="#E8282B"/><path d="M357 226h15m-6-6 6 6-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M381 226h70" stroke="#fff" strokeOpacity=".85" strokeWidth="4" strokeLinecap="round"/>
  </svg>;
}

function LeakSection() {
  const buyer = '3 bhk flat in andheri west under 2 crore';
  const examples = [
    { type: 'Buyer', query: buyer, good: true, note: 'Clear property type, location and budget intent.' },
    { type: 'Not a buyer', query: '2 bhk flat for rent andheri', good: false, note: 'Rental intent — may not fit a sale campaign.' },
    { type: 'Not a buyer', query: 'resale flat andheri', good: false, note: 'Resale intent — depends on the project inventory.' },
    { type: 'Not a buyer', query: 'property broker andheri', good: false, note: 'Broker/service intent rather than a direct buyer.' },
  ];
  return <section className="border-b border-white/[.08] bg-[#101313]" aria-labelledby="search-leak-title">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="max-w-2xl"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#E8282B]">Search intent matters</p><h2 id="search-leak-title" className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">Where property ad spend can leak.</h2><p className="mt-4 leading-7 text-white/55">These are examples, not campaign data. Search terms need to be matched to what the project actually sells.</p></div>
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {examples.map((item) => <article key={item.query} className="rounded-2xl border border-white/10 bg-[#141414] p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3"><span className="font-mono text-[10px] uppercase tracking-[.16em] text-white/45">Example search</span><span className={'rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ' + (item.good ? 'border-[#E8282B]/40 bg-[#E8282B]/10 text-[#F0EEEE]' : 'border-white/15 bg-white/[.03] text-white/55')}>{item.type}</span></div>
          <p className="mt-4 text-sm font-medium leading-6 text-white sm:text-base">“{item.query}”</p><p className="mt-2 text-xs leading-5 text-white/45">{item.note}</p>
        </article>)}
      </div>
    </div>
  </section>;
}

function MapPreview() {
  return <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141414] shadow-2xl shadow-black/30">
    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div><p className="text-[10px] uppercase tracking-[.2em] text-[#E8282B]">Buyer-search map preview</p><p className="mt-1 text-sm font-semibold text-white">Buyer-search map</p></div><span className="rounded-full border border-white/15 px-2.5 py-1 text-[9px] uppercase tracking-widest text-white/55">Preview</span></div>
    <div className="p-4 sm:p-6"><img src="/images/builders-map-preview.svg" alt="Sample layout of a one-page buyer-search map, with project and location, buyer intent, exclusions, landing-page message and enquiry tracking sections" width="1200" height="675" loading="lazy" decoding="async" className="h-auto w-full rounded-lg border border-white/10"/></div>
    <div className="grid gap-px bg-white/10 sm:grid-cols-2">
      {[['Project & location','Define the property, market and relevant catchment.'],['Buyer intent','Group searches by property type, location and buying need.'],['Search exclusions','Identify rental, broker or other mismatched intent where relevant.'],['Enquiry path','Connect the search, page message and enquiry measurement.']].map(([title, text])=><div key={title} className="bg-[#141414] p-4"><h3 className="text-sm font-semibold text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-white/50">{text}</p></div>)}
    </div>
    <p className="border-t border-white/10 px-5 py-4 text-[11px] leading-relaxed text-white/40">A sample layout to show the format—not a client report or a performance claim.</p>
  </div>;
}

type SampleQuery = { query: string; monthly: number; cls: string };
type SampleData = {
  city: string;
  generatedOn: string;
  source: string;
  howToRead: string;
  groups: {
    buyer_leaning: { topQueries: SampleQuery[] };
    project_name: { topQueries: SampleQuery[] };
    mixed: { topQueries: SampleQuery[] };
    rental: { topQueries: SampleQuery[] };
    resale_broker_portal: { topQueries: SampleQuery[] };
  };
};

function BuyerSearchDataSection() {
  const [data, setData] = useState<SampleData | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let active = true;
    fetch('/builders-sample.json', { cache: 'force-cache' })
      .then(response => {
        if (!response.ok) throw new Error('Could not load the keyword sample.');
        return response.json();
      })
      .then((value: SampleData) => { if (active) setData(value); })
      .catch(() => { if (active) setLoadError(true); });
    return () => { active = false; };
  }, []);

  if (!data) {
    return <section id="mumbai-search-sample" className="border-b border-white/[.08] bg-[#0D0D0D]" aria-labelledby="sample-data-title">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#E8282B]">Worked example · {data?.city || 'Mumbai'}</p>
        <h2 id="sample-data-title" className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">What a buyer-search map shows, using {data?.city || 'Mumbai'} as one example</h2>
        <p role={loadError ? 'status' : undefined} className="mt-4 text-sm text-white/50">{loadError ? 'The keyword sample could not be loaded right now.' : 'Loading the Google Keyword Planner sample…'}</p>
      </div>
    </section>;
  }

  const columns = [
    { title: 'Buyer-leaning', description: 'Buyer-signalling searches and searches for a named project.', queries: [...data.groups.buyer_leaning.topQueries, ...data.groups.project_name.topQueries] },
    { title: 'Could be either', description: 'Searches where the query alone does not make buying or renting intent clear.', queries: data.groups.mixed.topQueries },
    { title: 'Not a buyer', description: 'Rental searches and resale, broker or portal intent.', queries: [...data.groups.rental.topQueries, ...data.groups.resale_broker_portal.topQueries] },
  ];

  return <section id="mumbai-search-sample" className="border-b border-white/[.08] bg-[#0D0D0D]" aria-labelledby="sample-data-title">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="max-w-3xl">
        <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#E8282B]">Worked example · {data.city}</p>
        <h2 id="sample-data-title" className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">What a buyer-search map shows, using {data.city} as one example</h2>
        <p className="mt-4 text-sm leading-6 text-white/60">We build the same map for your city, locality and project: residential, commercial, plotted or township.</p>
        <p className="mt-4 text-xs leading-6 text-white/45">Source: {data.source}.</p>
      </div>
      <div className="mt-8 grid items-start gap-4 lg:grid-cols-3">
        {columns.map((column, index) => <section key={column.title} className="overflow-hidden rounded-2xl border border-white/10 bg-[#141414]" aria-labelledby={'sample-column-' + index}>
          <div className="border-b border-white/10 p-5">
            <h3 id={'sample-column-' + index} className="text-lg font-semibold text-white">{column.title}</h3>
            <p className="mt-2 text-xs leading-5 text-white/45">{column.description}</p>
          </div>
          <ul className="divide-y divide-white/[.07]">
            {column.queries.map((item, queryIndex) => <li key={item.cls + '-' + item.query + '-' + queryIndex} className="flex items-start justify-between gap-4 px-5 py-3.5">
              <span className="min-w-0 text-sm leading-5 text-white/80">{item.query}</span>
              <span className="shrink-0 whitespace-nowrap text-xs font-semibold tabular-nums text-white">{item.monthly.toLocaleString('en-IN')}<span className="ml-1 font-normal text-white/40">/mo</span></span>
            </li>)}
          </ul>
        </section>)}
      </div>
      <p className="mt-5 max-w-4xl text-xs leading-6 text-white/45">{data.howToRead}</p>
    </div>
  </section>;
}

function ProcessTimeline() {
  const steps = ['Understand the project', 'Map buyer searches', 'Align page and enquiry', 'Measure and refine'];
  return <div className="relative mt-10">
    <svg viewBox="0 0 1000 72" width="1000" height="72" aria-hidden="true" className="absolute left-0 top-0 hidden h-[72px] w-full lg:block"><path d="M70 30H930" stroke="#3A3A3A" strokeWidth="2"/><path d="M70 30H930" stroke="#E8282B" strokeWidth="2" strokeDasharray="3 12"/></svg>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{steps.map((step, i)=><div key={step} className="relative border-t border-[#E8282B]/50 pt-5 lg:border-t-0 lg:pt-[58px]"><span className="absolute -top-3 left-0 flex h-7 w-7 items-center justify-center rounded-full border border-[#E8282B] bg-[#0D0D0D] font-mono text-[10px] text-white lg:top-[16px]">{i+1}</span><h3 className="text-base font-semibold">{step}</h3><p className="mt-2 text-sm leading-6 text-white/50">{['Project, inventory, location and intended buyer.','Group searches by purchase intent and relevance.','Match ad message, landing page and enquiry action.','Use real search behaviour and sales feedback.'][i]}</p></div>)}</div>
  </div>;
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <label className="block text-xs font-medium text-white/65">{label}{children}</label>;
}

export default function BuildersLandingPage() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [projectType, setProjectType] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [landingCity, setLandingCity] = useState('your city');
  const [ref, setRef] = useState('');
  const [utmSource, setUtmSource] = useState('');
  const [utmMedium, setUtmMedium] = useState('');
  const [utmCampaign, setUtmCampaign] = useState('');
  const [pageUrl, setPageUrl] = useState('https://rkdigitalmedia.in/google-ads-for-builders');
  const [stickyVisible, setStickyVisible] = useState(false);
  const [formStarted, setFormStarted] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cityParam = (params.get('city') || '').trim();
    setLandingCity(cityParam || 'your city');
    setRef(params.get('l') || '');
    setUtmSource((params.get('utm_source') || '').slice(0, 120));
    setUtmMedium((params.get('utm_medium') || '').slice(0, 120));
    setUtmCampaign((params.get('utm_campaign') || '').slice(0, 160));
    setPageUrl(window.location.href.slice(0, 2000));
    const hero = heroRef.current;
    if (!hero || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(([entry]) => setStickyVisible(!entry.isIntersecting), { threshold: 0 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const buyerMapLabel = landingCity === 'your city' ? 'Get my buyer-search map' : 'Get my ' + landingCity + ' buyer-search map';
  const waHref = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent('Hello R.K Digital Media, I would like my free buyer-search map for a real estate project.');
  const sectionLink = 'inline-flex items-center gap-2 text-sm font-semibold text-[#E8282B] transition hover:text-white';

  function trackCta(location: string) {
    trackEvent('builders_cta_click', { location });
    document.getElementById('project-enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function trackWhatsApp(location: string) {
    trackEvent('builders_whatsapp_click', { location });
  }
  function handleFormFocus(event: FocusEvent<HTMLFormElement>) {
    if (!formStarted && event.target instanceof HTMLElement && event.target.matches('input,select,textarea')) {
      setFormStarted(true);
      trackEvent('builders_form_start', { location: 'project_enquiry' });
    }
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    if (!consent) { setError('Please confirm that R.K Digital Media may contact you about this enquiry.'); return; }
    setSubmitting(true);
    try {
      const payload = { name: name.trim(), company: company.trim(), whatsapp: whatsapp.trim(), city, consent, project: company.trim(), email: '', stage: '', budget: '', message: projectType ? 'Project type: ' + projectType : '', ref, utm_source: utmSource, utm_medium: utmMedium, utm_campaign: utmCampaign, page: pageUrl, hp: (event.currentTarget.elements.namedItem('hp') as HTMLInputElement)?.value || '', step: 'initial' };
      const response = await fetch('/api/builders-enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.ok !== true || typeof result.id !== 'string') { const fields = Array.isArray(result.errors) ? result.errors.join(', ') : ''; throw new Error(fields ? 'Please check these fields: ' + fields + '.' : (result.error || 'We could not save your request. Please use WhatsApp instead.')); }
      trackEvent('builders_form_submit', { location: 'project_enquiry', step: 'initial' });
      window.location.assign('/google-ads-for-builders/thanks?' + new URLSearchParams({ l: ref, city: landingCity, id: result.id }).toString());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please use WhatsApp as a fallback.');
    } finally {
      setSubmitting(false);
    }
  }

  return <main className="builders-page bg-[#0D0D0D] text-[#F0EEEE] pb-20 sm:pb-0">
    <div className="border-b border-white/[.08] bg-[#101313]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="R.K Digital Media home"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8282B] text-sm font-black tracking-tight text-white">RK</span><span><span className="block text-sm font-semibold tracking-wide">R.K DIGITAL MEDIA</span><span className="block text-[9px] uppercase tracking-[.2em] text-white/45">Performance marketing</span></span></Link>
        <div className="hidden items-center gap-5 text-xs text-white/55 md:flex"><span>Google Ads for property projects</span><span className="h-1 w-1 rounded-full bg-[#E8282B]"/><span>Builders & developers across India</span></div>
        <a href={waHref} onClick={() => trackWhatsApp('header')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold transition hover:border-[#E8282B]/60 hover:bg-white/5"><span className="h-2 w-2 rounded-full bg-[#E8282B]"/> WhatsApp</a>
      </div>
    </div>

    <section ref={heroRef} className="relative overflow-hidden border-b border-white/[.08]">
      <div className="pointer-events-none absolute -right-48 -top-36 h-[34rem] w-[34rem] rounded-full bg-[#E8282B]/[.08] blur-3xl"/>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8282B]/25 bg-[#E8282B]/[.06] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#F0EEEE]"><span className="h-1.5 w-1.5 rounded-full bg-[#E8282B]"/> For builders & real estate developers</div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.07] tracking-[-.045em] sm:text-5xl lg:text-[3.7rem]">Turn property searches into <span className="font-serif italic text-[#E8282B]">better buyer conversations.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">Google Ads strategy for residential and commercial projects—built around buyer intent, project location, clear enquiry tracking and a landing page that gives prospects a reason to take the next step.</p>
          <p className="mt-3 text-sm font-medium text-white/75">A buyer-search map tailored to {landingCity}.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => trackCta('hero')} className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E8282B] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#D02225]">{buyerMapLabel}<Arrow className="h-4 w-4"/></button>
            <a href={waHref} onClick={() => trackWhatsApp('hero')} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/[.04]">WhatsApp instead</a>
          </div>
          <p className="mt-3 text-xs text-white/50">One page, free, yours to keep. No call needed.</p>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/50"><span><span className="mr-2 text-[#E8282B]">✓</span>Project-specific search themes</span><span><span className="mr-2 text-[#E8282B]">✓</span>Clear exclusions</span><span><span className="mr-2 text-[#E8282B]">✓</span>No guaranteed-results claims</span></div>
        </div>
        <SearchJourney/>
      </div>
    </section>

    <LeakSection/>

    <section className="border-b border-white/[.08] bg-[#101313]"><div className="mx-auto grid max-w-7xl gap-0 px-4 sm:px-6 md:grid-cols-3 lg:px-8">{[['01 / RELEVANCE','Reach searches that match your project'],['02 / CLARITY','Give buyers a clear next step'],['03 / MEASUREMENT','Understand enquiries beyond click volume']].map((item,i)=><div key={item[0]} className={'py-6 md:px-6 lg:py-8 '+(i!==2?'border-b border-white/10 md:border-b-0 md:border-r':'')}><p className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#E8282B]">{item[0]}</p><p className="mt-2 text-sm font-medium text-white/85">{item[1]}</p></div>)}</div></section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#E8282B]">The commercial reality</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-4xl">A property campaign needs more than clicks.</h2><p className="mt-5 leading-7 text-white/55">A launch has a location, price segment, inventory, timeline and sales team. The campaign and the enquiry journey should reflect those realities—not simply optimise for the largest possible number of form submissions.</p></div><div className="grid gap-3 sm:grid-cols-2">{[['Clicks without context','Traffic is useful only when the search intent fits the project and offer.'],['Unclear lead quality','Lead volume alone does not tell you whether a prospect is relevant or ready to talk.'],['Launch and location complexity','Different projects and catchment areas can require different search themes and messages.'],['The follow-up gap','Tracking the enquiry is only the start; sales feedback helps explain which leads matter.']].map((item,i)=><article key={item[0]} className="rounded-2xl border border-white/10 bg-[#141414] p-6"><span className="font-mono text-xs text-[#E8282B]">0{i+1}</span><h3 className="mt-4 text-base font-semibold">{item[0]}</h3><p className="mt-2 text-sm leading-6 text-white/55">{item[1]}</p></article>)}</div></div></section>

    <section className="border-y border-white/[.08] bg-[#101313]"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"><div className="max-w-2xl"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#E8282B]">What the work covers</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">A connected acquisition system.</h2><p className="mt-4 leading-7 text-white/55">Campaign setup, the page buyers land on and the measurement after they enquire should work together.</p></div><div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">{[['01','Project-launch search strategy','Map high-intent searches to the right project, location, property type and buyer question before spending on clicks.'],['02','Campaigns built around intent','Separate relevant search themes, write clear ads, align each ad with its landing page and build a considered negative-keyword process.'],['03','Enquiry tracking that means something','Measure calls and form enquiries, then work toward distinguishing genuine buyer conversations from raw lead volume.'],['04','Optimisation with sales context','Review search terms, location performance, lead feedback and conversion signals to decide what to refine next.']].map(item=><article key={item[0]} className="bg-[#101313] p-7 sm:p-9"><span className="font-mono text-xs text-[#E8282B]">{item[0]} / CAPABILITY</span><h3 className="mt-5 text-xl font-semibold">{item[1]}</h3><p className="mt-3 max-w-lg text-sm leading-7 text-white/55">{item[2]}</p></article>)}</div></div></section>

    <section id="sample" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16"><div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#E8282B]">See the format</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-4xl">Get a useful map before you decide on a campaign.</h2><p className="mt-5 leading-7 text-white/60">The one-page buyer-search map helps frame the project, the searches that may signal purchase intent, terms that may not fit and the path from ad to enquiry.</p><ul className="mt-6 space-y-3 text-sm text-white/70">{['Project and location context','Buyer-intent search themes','Potential exclusions to review','Landing-page message and enquiry tracking'].map(t=><li key={t} className="flex gap-3"><span className="text-[#E8282B]">✓</span><span>{t}</span></li>)}</ul><p className="mt-5 text-xs leading-5 text-white/35">Free, one page, yours to keep. No call needed. The sample is a layout preview, not a client result.</p></div><MapPreview/></div></section>
    <BuyerSearchDataSection />

    <section id="how-it-works" className="border-y border-white/[.08] bg-[#101313]"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"><div className="max-w-2xl"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#E8282B]">The process</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">From project context to measured learning.</h2></div><ProcessTimeline/></div></section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#E8282B]">Trust, without the hype</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-4xl">Clear scope. Verifiable credentials. Honest reporting.</h2><p className="mt-5 leading-7 text-white/55">R.K Digital Media works across Google Ads strategy, conversion tracking, search-term optimisation and landing-page alignment. We start with the actual project and its constraints rather than promise a result before seeing the numbers.</p><a className={sectionLink+' mt-6'} href="https://skillshop.credential.net/profile/rohitkumarseo848048/wallet" onClick={()=>trackEvent('builders_verify_click',{location:'credentials_section'})} target="_blank" rel="noreferrer">View Google Ads credentials <Arrow className="h-4 w-4"/></a><div className="mt-8 rounded-xl border border-white/10 bg-[#141414] p-5"><p className="text-sm font-semibold">What you can expect</p><ul className="mt-3 space-y-2 text-sm leading-6 text-white/55"><li>• Clear discussion of campaign scope and fees</li><li>• Advertising spend distinguished from management fees</li><li>• Conversion tracking reviewed before performance claims</li><li>• No guaranteed lead counts or sales ratios</li></ul></div></div><div className="space-y-4"><article className="rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-8"><p className="text-[10px] uppercase tracking-[.2em] text-[#E8282B]">Relevant adjacent experience</p><h3 className="mt-3 text-xl font-semibold">B2B lead generation case study</h3><p className="mt-3 text-sm leading-7 text-white/55">Review a documented lead-generation project to understand the broader approach to paid acquisition and qualification. It is not presented as a real estate case study.</p><Link href="/case-studies/b2b-lead-gen" className={sectionLink+' mt-5'}>View documented case study <Arrow className="h-4 w-4"/></Link></article><article className="rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-8"><p className="text-[10px] uppercase tracking-[.2em] text-[#E8282B]">Existing Google Ads service</p><h3 className="mt-3 text-xl font-semibold">A measurement-first approach</h3><p className="mt-3 text-sm leading-7 text-white/55">See the wider Google Ads service scope, including search campaigns, conversion tracking, search-term optimisation and landing-page alignment.</p><Link href="/services/google-ads" className={sectionLink+' mt-5'}>Explore Google Ads services <Arrow className="h-4 w-4"/></Link></article></div></div></section>

    <section className="border-y border-white/[.08] bg-[#101313]"><div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"><div className="max-w-2xl"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#E8282B]">Common questions</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">Before we discuss your project.</h2></div><div className="mt-8 divide-y divide-white/10">{[['Can you guarantee a fixed number of property leads?','No. Demand, competition, project pricing, location, landing-page experience, budget and sales follow-up all influence outcomes. We focus on transparent measurement and optimisation rather than promising a fixed lead count.'],['Can you work on a project launching soon?','Yes. We first understand the launch date, location, inventory, buyer profile, approved project information and sales readiness.'],['Can you review campaigns already running?','Yes. An account review can examine campaign structure, search terms, targeting, conversion actions, landing pages and whether reported leads reflect useful sales conversations.'],['Is ad spend included in your management fee?','Advertising spend and service fees should be discussed separately and confirmed in the proposal.'],['Which cities do you work in?','Builders and developers across India. The buyer-search map and the campaign are built for your city, locality and project; other markets can be discussed.']].map(([q,a])=><details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-white/90 marker:content-none"><span>{q}</span><span className="text-xl text-[#E8282B] transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-7 text-white/55">{a}</p></details>)}</div></div></section>

    <section id="project-enquiry" className="relative scroll-mt-20 overflow-hidden"><div className="pointer-events-none absolute -left-48 top-10 h-96 w-96 rounded-full bg-[#E8282B]/[.08] blur-3xl"/><div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-28">
      <div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#E8282B]">Get your free map</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-4xl">Get my buyer-search map.</h2><p className="mt-5 leading-7 text-white/55">Share the basics about your project and we’ll prepare a one-page map around its market and buyer intent. No call needed.</p><p className="mt-3 text-sm text-white/70">The map arrives within 2 working days.</p><div className="mt-6 space-y-3 text-sm text-white/65"><div className="flex gap-3"><span className="text-[#E8282B]">01</span><span>One page, free, yours to keep</span></div><div className="flex gap-3"><span className="text-[#E8282B]">02</span><span>Search intent and exclusions to consider</span></div><div className="flex gap-3"><span className="text-[#E8282B]">03</span><span>No guaranteed campaign outcomes</span></div></div><a href={waHref} onClick={()=>trackWhatsApp('form_intro')} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#E8282B]/[.08] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#E8282B]/[.14]"><span className="h-2 w-2 rounded-full bg-[#E8282B]"/> Ask on WhatsApp <Arrow className="h-4 w-4"/></a>
        <div className="mt-8 flex flex-wrap items-center gap-3"><a href="https://skillshop.credential.net/profile/rohitkumarseo848048/wallet" onClick={()=>trackEvent('builders_verify_click',{location:'form_credentials'})} target="_blank" rel="noreferrer" className="text-xs font-semibold text-white/65 underline decoration-[#E8282B]/60 underline-offset-4">Verify Google Ads credentials</a></div>
      </div>
      <form onSubmit={submitLead} onFocusCapture={handleFormFocus} className="rounded-2xl border border-white/10 bg-[#141414] p-5 sm:p-8">
        <div className="mb-6"><h3 className="text-xl font-semibold">Where should we send your map?</h3><p className="mt-2 text-xs leading-5 text-white/45">Complete the required fields. We’ll use these details only to respond to this request.</p></div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name *"><input required name="name" autoComplete="name" maxLength={120} value={name} onChange={e=>setName(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#E8282B]/70" placeholder="Your name"/></Field>
          <Field label="Company / project *"><input required name="company" autoComplete="organization" maxLength={180} value={company} onChange={e=>setCompany(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#E8282B]/70" placeholder="Company or project name"/></Field>
          <Field label="City *"><input required name="city" list="builder-city-suggestions" value={city} onChange={e=>setCity(e.target.value)} maxLength={80} autoComplete="address-level2" className="mt-2 w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#E8282B]/70" placeholder="Enter your city"/><datalist id="builder-city-suggestions">{CITY_SUGGESTIONS.map(option=><option key={option} value={option}/>)}</datalist></Field>
          <Field label="WhatsApp *"><input required name="whatsapp" type="tel" autoComplete="tel" maxLength={40} value={whatsapp} onChange={e=>setWhatsapp(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#E8282B]/70" placeholder="+91 …"/></Field>
          <Field label="Project type (optional)"><select name="projectType" value={projectType} onChange={e=>setProjectType(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white outline-none focus:border-[#E8282B]/70"><option value="">Select project type</option>{PROJECT_TYPES.map(option=><option key={option} value={option}>{option}</option>)}</select></Field>
        </div>
        <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true"><label>Leave this field empty<input tabIndex={-1} autoComplete="off" name="hp" value={undefined} onChange={()=>{}}/></label></div>
        <label className="mt-6 flex cursor-pointer items-start gap-3 text-xs leading-5 text-white/50"><input required type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-[#E8282B]"/><span>I agree that R.K Digital Media may contact me about this buyer-search map request.</span></label>
        {error && <div role="alert" className="mt-4 rounded-xl border border-red-500/25 bg-red-500/[.06] p-4"><p className="text-sm text-red-200">{error}</p><a href={waHref} onClick={()=>trackWhatsApp('form_error_fallback')} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4">Continue on WhatsApp <Arrow className="h-4 w-4"/></a></div>}
        <button type="submit" disabled={submitting} className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#E8282B] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#D02225] disabled:cursor-wait disabled:opacity-60 sm:w-auto">{submitting?'Sending request…':'Get my buyer-search map'}<Arrow className="h-4 w-4"/></button>
        <p className="mt-4 text-[10px] leading-5 text-white/35">No call needed. You can ask a question on WhatsApp instead.</p>
      </form>
    </div></section>

    <footer className="border-t border-white/10 bg-[#0D0D0D]"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><p>© {new Date().getFullYear()} R.K Digital Media. Google Ads for real estate builders and developers.</p><div className="flex flex-wrap gap-5"><Link href="/privacy-policy" className="transition hover:text-white/70">Privacy</Link><Link href="/services/google-ads" className="transition hover:text-white/70">Google Ads services</Link><Link href="/contact" className="transition hover:text-white/70">Contact</Link></div></div></footer>
    {stickyVisible && <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0D0D0D]/95 p-3 shadow-2xl backdrop-blur sm:hidden"><div className="mx-auto flex max-w-lg gap-2"><button type="button" onClick={()=>trackCta('sticky_mobile')} className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#E8282B] px-4 py-3 text-sm font-bold text-white">Get my map <Arrow className="h-4 w-4"/></button><a href={waHref} onClick={()=>trackWhatsApp('sticky_mobile')} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white">WhatsApp</a></div></div>}
  </main>;
}
