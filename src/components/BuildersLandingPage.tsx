'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import BuildersMotionSystem from '@/components/BuildersMotionSystem';
import BuildersBuyerMap from '@/components/BuildersBuyerMap';
import BuildersCampaignMockup from '@/components/BuildersCampaignMockup';
import type { CityData } from '@/components/BuildersBuyerMap';
import BuildersEnquiryForm from '@/components/BuildersEnquiryForm';

const WHATSAPP_NUMBER = '919871530594';
const CAL_URL = 'https://cal.com/rohit-kumar-seo';

function Arrow({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#E8282B]">{children}</p>;
}

function Tick() {
  return <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-[#E8282B]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m4 10.5 4 4 8-9" /></svg>;
}

const LEAKS = [
  { title: 'Rental and PG clicks', body: 'Someone searching “pg in your city” will never buy a flat from your project, but a broad keyword can still charge you for the click.' },
  { title: 'Resale, broker and portal searches', body: 'People looking for an agent, a resale flat or a listing portal are not new-project buyers. They need their own handling or a block.' },
  { title: 'Enquiries nobody judges', body: 'A form fill or a call is counted as a win even when it was a wrong number, a broker or a renter. The account then learns from the wrong enquiries.' },
];

const METHOD = [
  { icon: 'target', title: 'Buyer searches first', body: 'Campaigns built around BHK, locality and budget searches, with rental, resale and broker terms blocked and reviewed as search terms change.' },
  { icon: 'map', title: 'Your catchment, not the whole city', body: 'Target locations based on the project and its realistic buyer catchment.' },
  { icon: 'page', title: 'A page for each project', body: 'Use a relevant page for each project. Design and development are scoped separately if needed.' },
  { icon: 'chart', title: 'Calls and forms measured', body: 'Measure calls and form enquiries where technically feasible, then review which conversions are actually useful.' },
  { icon: 'target', title: 'Your sales team closes the loop', body: 'Where your team can share which enquiries were genuine and which led to site visits, optimisation follows that, not just the raw lead count.' },
  { icon: 'report', title: 'Weekly report in plain language', body: 'See what changed, what was learned and what I recommend next.' },
];

const GOOD_FIT = [
  'You run a named residential, commercial, plotted or township project and want better-qualified enquiries.',
  'Your sales team can tell a genuine enquiry from a wrong one, and can share that feedback.',
  'You want clean tracking and a weekly report you can read in two minutes.',
  'You want to own your Google Ads account and see where every unit of ad spend goes.',
];
const NOT_FIT = [
  'You need a guaranteed number of leads or site visits. I will not promise that.',
  'You only list resale, rental or broker inventory instead of developer projects.',
  'You want campaigns run without any feedback on lead quality.',
  'You want a fixed package decided before anyone has looked at your project.',
];

const STEPS = [
  ['Project review', 'Share the development and market you want to reach; get a clear first discussion about campaign fit, tracking and sales follow-up.'],

  ['Discovery', 'A short call about your project, location, inventory, buyers and sales process, only if you want one.'],
  ['Assessment', 'Review current campaigns or map the initial setup, measurement and landing-page needs.'],
  ['Plan', 'Agree priorities, responsibilities, scope, budget and tracking readiness before work begins.'],
  ['Optimise and review', 'Once live, review search terms, spend and lead-quality signals, with clear reporting on what to do next.'],
];

const FAQS = [
  ['Is the buyer-search map really free?', 'Yes. The India city-search sample is free for covered cities and is yours to keep whether or not we work together. It is planning data, not a forecast of clicks, qualified enquiries or sales.'],

  ['Can you guarantee a number of leads?', 'No honest advertiser can promise that. I commit to clean tracking, blocking wasted clicks, and a weekly report you can read in two minutes.'],
  ['How is your management fee decided?', 'The fee is customised to the actual scope: monthly ad spend, number of projects and locations, campaign complexity, tracking needs, reporting requirements and any additional landing-page or integration work. Google ad spend is paid to Google separately. I will confirm the scope and fee before any work begins.'],
  ['Who pays Google?', 'Your ad spend is paid to Google separately from the management fee. You should retain clear visibility into spend and account access.'],
  ['We already run ads or use an agency. Can you review it?', 'Yes. We can discuss an account review, subject to appropriate access and permission. I will distinguish confirmed findings from hypotheses and agree the scope before making changes.'],
  ['Which markets do you work in?', 'I’m based in India and currently support projects across India. For projects in other countries, we first confirm market fit, local ad-policy requirements and measurement needs before agreeing scope. The interactive search sample uses Indian city data only.'],

  ['What will I receive after requesting the map?', 'For a covered Indian sample city, a one-page snapshot of buyer-leaning, mixed-intent, rental/PG and resale/broker themes, with the data limits explained. Other markets need a project-specific review.'],

  ['What happens after I submit the form?', 'Your request should be received and reviewed so the next step can be agreed. If you prefer to talk immediately, you can use the WhatsApp or booking link on this page. No campaign starts until scope and fees are agreed.'],
  ['Do you work with plotted, township or commercial projects?', 'Yes, the approach is the same: separate the buyers from everyone else, then measure every enquiry.'],
];

export default function BuildersLandingPage({ cityData }: { cityData: Record<string, CityData> }) {
  const [landingCity, setLandingCity] = useState('your city');
  const [ref, setRef] = useState('');
  const [utm, setUtm] = useState({ utmSource: '', utmMedium: '', utmCampaign: '' });
  const [pageUrl, setPageUrl] = useState('https://rkdigitalmedia.in/google-ads-for-builders');
  const [stickyVisible, setStickyVisible] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cityParam = (params.get('city') || '').trim().slice(0, 80);
    const safeCity = /^[a-zA-Z0-9 .,'()&/-]+$/.test(cityParam) ? cityParam : '';
    setLandingCity(safeCity || 'your city');
    setRef(params.get('l') || '');
    setUtm({ utmSource: (params.get('utm_source') || '').slice(0, 120), utmMedium: (params.get('utm_medium') || '').slice(0, 120), utmCampaign: (params.get('utm_campaign') || '').slice(0, 160) });
    setPageUrl(window.location.href.slice(0, 2000));
    const hero = heroRef.current;
    if (!hero || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(([entry]) => setStickyVisible(!entry.isIntersecting), { threshold: 0 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const tracking = { ref, ...utm, pageUrl };
  const waHref = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent('Hello Rohit, I would like to discuss Google Ads for my real estate project.');
  const cityLabel = landingCity;
  const trackCta = (location: string) => trackEvent('builders_cta_click', { location });
  const trackWa = (location: string) => trackEvent('builders_whatsapp_click', { location });
  const primaryClass = 'builders-motion-cta inline-flex items-center justify-center gap-3 rounded-full bg-[#E8282B] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#D02225]';
  const secondaryClass = 'builders-motion-cta inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/[.04]';
  const projectReviewCta = (location: string, label = 'Request a project campaign review', cls = primaryClass) => <a href="#project-review" onClick={() => trackCta(location)} className={cls}>{label}<Arrow className="h-4 w-4" /></a>;
  const callCta = (location: string, label = 'Book a free strategy call', cls = secondaryClass) => <a href={CAL_URL} onClick={() => trackCta(location)} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>;
  const waCta = (location: string, label = 'Message Rohit on WhatsApp', cls = secondaryClass) => <a href={waHref} onClick={() => trackWa(location)} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>;

  return <main className="builders-page bg-[#0D0D0D] text-[#F0EEEE] pb-24 sm:pb-0">
    <BuildersMotionSystem />
    <header className="border-b border-white/[.08] bg-[#101313]"><div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"><Link href="/" className="flex items-center gap-2.5" aria-label="R.K Digital Media home"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8282B] text-sm font-black text-white">RK</span><span className="text-sm font-semibold tracking-wide">R.K DIGITAL MEDIA</span></Link><a href="#project-review" onClick={() => trackCta('header')} className="text-xs font-semibold text-white/70 underline decoration-[#E8282B] underline-offset-4">Project campaign review</a></div></header>

    <section ref={heroRef} className="relative overflow-hidden border-b border-white/[.08]" aria-labelledby="builders-hero-title">
      <div className="pointer-events-none absolute -right-40 -top-32 h-[32rem] w-[32rem] rounded-full bg-[#E8282B]/[.10] blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-14 lg:px-8 lg:py-20">
        <div>
          <Eyebrow>Google Ads for builders and developers · based in India{landingCity !== 'your city' ? ' · ' + landingCity : ''}</Eyebrow>
          <h1 id="builders-hero-title" className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-[3.4rem]">Reach the right property buyers with project-specific Google Ads.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">I’m Rohit Kumar, based in India. I plan and manage Google Ads for developer projects around their location, price range, available inventory and buyer intent. We define what counts as a qualified enquiry, check how calls and forms are measured, and use sales feedback where available to guide campaign decisions. For projects in other countries, market fit and policy requirements are confirmed before scope is agreed.</p>
          <ul className="mt-7 max-w-2xl space-y-3 text-sm leading-6 text-white/80 sm:text-base">
            <li className="flex gap-3"><Tick /><span>A project-level campaign plan shaped around location, price range and available inventory.</span></li>
            <li className="flex gap-3"><Tick /><span>Lead qualification and tracking connected to the questions your sales team needs answered.</span></li>
            <li className="flex gap-3"><Tick /><span>You retain account ownership; fees and ad budget are agreed separately before work starts.</span></li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {projectReviewCta('hero', 'Request a project review', primaryClass + ' lg:hidden')}
            <a href="#buyer-map" onClick={() => trackCta('hero_numbers')} className={secondaryClass}>Preview the search data<span aria-hidden="true">↓</span></a>
            {waCta('hero', 'Message Rohit on WhatsApp')}
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:grid-cols-4">
            <div><dt className="font-semibold text-white/85">Certified</dt><dd className="mt-1">Google Skillshop: Search, Display, AI-Powered Performance Ads</dd></div>
            <div><dt className="font-semibold text-white/85">Your account</dt><dd className="mt-1">You own the Google Ads account</dd></div>
            <div><dt className="font-semibold text-white/85">Fee</dt><dd className="mt-1">Agreed before any work begins</dd></div>
            <div><dt className="font-semibold text-white/85">Ad spend</dt><dd className="mt-1">Paid to Google, not to me</dd></div>
          </dl>
        </div>
        <div id="project-review" className="scroll-mt-6">
          <BuildersEnquiryForm variant="hero" landingCity={landingCity} tracking={tracking} waHref={waHref} />
          <p className="mt-4 text-center text-xs text-white/45">Prefer to talk first? <a href={CAL_URL} onClick={() => trackCta('hero_call')} target="_blank" rel="noopener noreferrer" className="text-white/75 underline decoration-[#E8282B] underline-offset-4">Book 15 minutes</a></p>
        </div>
      </div>
    </section>

    <section data-motion-reveal className="border-b border-white/[.08] bg-[#101313]" aria-labelledby="about-rohit-title">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[.6fr_1.4fr] lg:items-center lg:gap-14">
          <div className="mx-auto flex w-full max-w-xs flex-col items-center text-center lg:mx-0"><div className="h-56 w-56 overflow-hidden rounded-full border border-white/10 bg-[#171717]"><img src="/images/founder-rohit-kumar.webp" width="640" height="760" loading="lazy" decoding="async" alt="Rohit Kumar, Google Ads campaign manager and founder of R.K Digital Media" className="max-w-none" style={{ width: '145%', height: '145%', marginLeft: '-22.5%', marginTop: '-4%' }} /></div><p className="mt-4 font-semibold text-white">Rohit Kumar</p><p className="mt-1 text-xs text-white/55">Founder · Google Ads campaign manager</p></div>
          <div className="max-w-3xl"><Eyebrow>Meet your campaign manager</Eyebrow><h2 id="about-rohit-title" className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">I’ll plan and manage your Google Ads campaigns.</h2><p className="mt-5 leading-7 text-white/70">I’m Rohit Kumar, founder of R.K Digital Media in Greater Noida, Delhi NCR. I work directly with builders and developers across India on Google Ads strategy, setup, optimisation and measurement. For each real-estate project, I match search intent and location to the property, then review enquiry quality—not just form fills. You’ll know who is managing the campaign and how decisions are made.</p>
            <div className="mt-6">{projectReviewCta('founder_profile', 'Discuss your project with me')}</div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <article className="builders-motion-card rounded-xl border border-white/10 bg-[#151515] p-4"><p className="text-sm font-semibold text-white">Verified Google Ads certifications</p><p className="mt-1 text-sm leading-6 text-white/55">Search, Display and AI-Powered Performance Ads credentials, with public verification links below.</p></article>
              <article className="builders-motion-card rounded-xl border border-white/10 bg-[#151515] p-4"><p className="text-sm font-semibold text-white">Policy-aware campaign setup</p><p className="mt-1 text-sm leading-6 text-white/55">I also run <a href="https://adssuspensionrecovery.com" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-[#E8282B] underline-offset-4">Ads Suspension Recovery</a>, helping businesses address Google Ads suspension issues.</p></article>
              <article className="builders-motion-card rounded-xl border border-white/10 bg-[#151515] p-4"><p className="text-sm font-semibold text-white">Numbers explained</p><p className="mt-1 text-sm leading-6 text-white/55">Clicks and raw leads are kept apart from qualified enquiries, and data gaps are flagged honestly.</p></article>
              <article className="builders-motion-card rounded-xl border border-white/10 bg-[#151515] p-4"><p className="text-sm font-semibold text-white">Transparent account ownership</p><p className="mt-1 text-sm leading-6 text-white/55">We agree access, responsibilities, tracking and fees before launch. You keep ownership of your Google Ads account.</p></article>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/50">I won’t promise a fixed number of leads before reviewing your project, market, budget and tracking. The commitment is a clear process, honest reporting and decisions based on the data available.</p>
          </div>
        </div>
      </div>
    </section>
    <CertificationsSection />

    <BuildersCampaignMockup data={cityData} landingCity={landingCity} />

    <section data-motion-reveal id="buyer-map" className="scroll-mt-4 border-b border-white/[.08] bg-[#101313]" aria-labelledby="buyer-map-title">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl"><Eyebrow>Real search data</Eyebrow><h2 id="buyer-map-title" className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">What home buyers type into Google before they enquire</h2><p className="mt-4 leading-7 text-white/65">Average monthly searches from Google’s Keyword Planner over the last 12 months. Choose a city to compare buyer-leaning, mixed-intent, rental/PG and resale/broker searches. These are planning estimates—not guaranteed clicks, leads or sales.</p></div>
        <div className="mt-8"><BuildersBuyerMap data={cityData} landingCity={landingCity} /></div>
        <p className="mt-4 text-xs leading-6 text-white/45">The interactive search sample uses Indian city data for Mumbai/MMR, Delhi NCR, Pune, Bengaluru, Hyderabad, Chennai and Ahmedabad. Other Indian or international markets need a project-specific review; these samples are not forecasts.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"><p className="text-sm text-white/65 sm:mr-4">Want the search themes reviewed against your BHK mix, locality, price band and inventory?</p>{projectReviewCta('map_section', 'Discuss my project')}</div>
      </div>
    </section>

    <section data-motion-reveal className="border-b border-white/[.08] bg-[#101313]" aria-labelledby="deliverable-title">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="max-w-xl">
            <Eyebrow>What you actually get</Eyebrow>
            <h2 id="deliverable-title" className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">Useful next steps for your project—not another generic agency pitch.</h2>
            <p className="mt-4 leading-7 text-white/65">The city sample is a starting point, not a forecast. A project review adds the context search volume cannot tell you: exact location, price band, available inventory, buyer profile, landing page and what your sales team counts as a qualified enquiry.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#141414] p-5">
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#E8282B]">Inside the review</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/75">
                <li className="flex gap-3"><Tick /><span>Buyer-leaning, mixed, rental/PG and resale/broker search themes.</span></li>
                <li className="flex gap-3"><Tick /><span>Questions to check against your location, price band and inventory.</span></li>
                <li className="flex gap-3"><Tick /><span>Measurement gaps and practical next steps—without fabricated lead forecasts.</span></li>
              </ul>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-[#141414] p-5"><p className="text-xs font-semibold uppercase tracking-[.15em] text-[#E8282B]">01</p><h3 className="mt-2 font-semibold">Search-intent review</h3><p className="mt-2 text-sm leading-6 text-white/60">Separate buyer-leaning themes from mixed, rental/PG and resale/broker intent. Review before excluding anything.</p></article>
            <article className="rounded-2xl border border-white/10 bg-[#141414] p-5"><p className="text-xs font-semibold uppercase tracking-[.15em] text-[#E8282B]">02</p><h3 className="mt-2 font-semibold">Project and location fit</h3><p className="mt-2 text-sm leading-6 text-white/60">Consider your exact project, catchment, price band and inventory before proposing campaign structure.</p></article>
            <article className="rounded-2xl border border-white/10 bg-[#141414] p-5"><p className="text-xs font-semibold uppercase tracking-[.15em] text-[#E8282B]">03</p><h3 className="mt-2 font-semibold">Measurement checks</h3><p className="mt-2 text-sm leading-6 text-white/60">Check whether calls and forms are tracked and whether sales feedback can distinguish qualified enquiries from noise.</p></article>
            <article className="rounded-2xl border border-white/10 bg-[#141414] p-5"><p className="text-xs font-semibold uppercase tracking-[.15em] text-[#E8282B]">04</p><h3 className="mt-2 font-semibold">Clear scope before spend</h3><p className="mt-2 text-sm leading-6 text-white/60">Agree responsibilities, management fee, ad budget and deliverables before any engagement starts.</p></article>
          </div>
        </div>
      </div>
    </section>

    <section data-motion-reveal className="border-b border-white/[.08]" aria-labelledby="leak-title">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl"><Eyebrow>Where the budget goes</Eyebrow><h2 id="leak-title" className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">Three checks I make before recommending campaign changes</h2></div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">{LEAKS.map((x, i) => <article key={x.title} className="builders-motion-card rounded-2xl border border-white/10 bg-[#141414] p-6"><p className="text-2xl font-semibold text-[#E8282B]">0{i + 1}</p><h3 className="mt-4 text-base font-semibold">{x.title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{x.body}</p></article>)}</div>
      </div>
    </section>

    <section data-motion-reveal className="border-b border-white/[.08]" aria-labelledby="sample-audit-title">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <Eyebrow>How the data becomes campaign decisions</Eyebrow>
          <h2 id="sample-audit-title" className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">A practical example of how I would review a property campaign</h2>
          <p className="mt-4 leading-7 text-white/65">Illustrative example only—not a client case study or a claim about results. The actual decisions depend on the project, account data, conversion tracking and sales feedback.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-[#141414] p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#E8282B]">01 · Inspect</p>
            <h3 className="mt-3 text-lg font-semibold">Review search terms</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">Check whether clicks come from searches for buying a new property, rentals or PGs, resale listings, brokers, jobs, or other irrelevant intent.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[#141414] p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#E8282B]">02 · Decide</p>
            <h3 className="mt-3 text-lg font-semibold">Make project-specific changes</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">Review negative keywords, match types, location settings, ad copy and landing-page relevance. Do not block a term without checking whether it could fit the project.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[#141414] p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#E8282B]">03 · Measure</p>
            <h3 className="mt-3 text-lg font-semibold">Judge enquiry quality</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">Where tracking and sales feedback are available, distinguish genuine buyer enquiries from raw form fills and use those signals to guide optimisation.</p>
          </article>
        </div>
        <p className="mt-5 max-w-3xl text-xs leading-6 text-white/40">I do not claim savings or lead improvements without evidence from the relevant account and time period. Search volume is a planning signal, not a forecast of clicks, qualified enquiries or sales.</p>
      </div>
    </section>

    <section data-motion-reveal className="border-b border-white/[.08] bg-[#101313]" aria-labelledby="method-title">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#E8282B]/30 bg-[#E8282B]/[.05] p-6 sm:p-8"><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#E8282B]">Step 1 · Free</p><h2 id="method-title" className="mt-3 text-2xl font-semibold tracking-[-.03em] sm:text-3xl">Start with a project campaign review</h2><p className="mt-4 text-sm leading-7 text-white/70">Share the project, market and current sales setup. I’ll review the campaign opportunity, lead qualification and measurement needs, then outline a practical next step. Search estimates inform planning; they do not predict enquiries or sales.</p><div className="mt-6">{projectReviewCta('method_step1')}</div></article>
          <article className="rounded-3xl border border-white/10 bg-[#141414] p-6 sm:p-8"><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/50">Step 2 · If it makes sense</p><h2 className="mt-3 text-2xl font-semibold tracking-[-.03em] sm:text-3xl">Campaign setup and management</h2><p className="mt-4 text-sm leading-7 text-white/70">Only after we have both looked at your project, locations, inventory, tracking and sales process. No fixed package is assumed beforehand, and the scope and fee are agreed before any work begins.</p><div className="mt-6">{callCta('method_step2', 'Book a free strategy call')}</div></article>
        </div>
        <div className="mt-12 max-w-2xl"><Eyebrow>How I run a builder’s campaign</Eyebrow><h3 className="mt-4 text-2xl font-semibold tracking-[-.03em] sm:text-3xl">What I do differently</h3></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{METHOD.map((x) => <article key={x.title} className="builders-motion-card rounded-2xl border border-white/10 bg-[#141414] p-5 sm:p-6"><div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8282B]/30 bg-[#E8282B]/[.08] text-[#E8282B]"><FeatureIcon kind={x.icon} /></div><h3 className="mt-5 text-base font-semibold">{x.title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{x.body}</p></article>)}</div>
      </div>
    </section>

    <section data-motion-reveal className="border-b border-white/[.08]" aria-labelledby="fit-title">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl"><Eyebrow>Is this a fit?</Eyebrow><h2 id="fit-title" className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">For developers who want clear decisions—not just a lead count</h2></div>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[.04] p-6"><h3 className="text-base font-semibold text-emerald-200">A good fit if</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-white/75">{GOOD_FIT.map((t) => <li key={t} className="flex gap-3"><Tick /><span>{t}</span></li>)}</ul></article>
          <article className="rounded-2xl border border-white/10 bg-[#141414] p-6"><h3 className="text-base font-semibold text-white/85">Probably not a fit if</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-white/60">{NOT_FIT.map((t) => <li key={t} className="flex gap-3"><span aria-hidden="true" className="mt-0.5 w-4 shrink-0 text-center text-white/35">–</span><span>{t}</span></li>)}</ul></article>
        </div>
      </div>
    </section>



    <section data-motion-reveal className="border-b border-white/[.08]" aria-labelledby="first-days-title"><div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"><div className="max-w-2xl"><Eyebrow>A clear starting plan</Eyebrow><h2 id="first-days-title" className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">What happens after you get in touch</h2></div><ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{STEPS.map(([title, desc]) => <li key={title} className="builders-motion-card builders-timeline-step rounded-2xl border border-white/10 bg-[#141414] p-5"><p className="text-sm font-semibold text-[#E8282B]">{title}</p><p className="mt-3 text-sm leading-6 text-white/65">{desc}</p></li>)}</ol></div></section>

    <section data-motion-reveal className="border-y border-white/[.08] bg-[#101313]" aria-labelledby="faq-title"><div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"><div className="max-w-2xl"><Eyebrow>Straight answers</Eyebrow><h2 id="faq-title" className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">Questions builders ask before getting started</h2></div><div className="mt-8 divide-y divide-white/10">{FAQS.map(([q, a]) => <details key={q} className="builders-faq-item group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-white/90 marker:content-none"><span>{q}</span><span className="text-xl text-[#E8282B] transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-7 text-white/55">{a}</p></details>)}</div></div></section>

    <section data-motion-reveal id="project-enquiry" className="relative scroll-mt-20 overflow-hidden" aria-labelledby="final-cta-title">
      <div className="pointer-events-none absolute -left-48 top-10 h-96 w-96 rounded-full bg-[#E8282B]/[.08] blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl"><Eyebrow>Your next launch</Eyebrow><h2 id="final-cta-title" className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-4xl">Talk through Google Ads for your next project</h2><p className="mt-4 leading-7 text-white/60">Share your project and target market for a focused review of campaign fit, enquiry quality and measurement. There is no obligation to proceed.</p><div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{callCta('final_cta', 'Book a free strategy call', primaryClass)}{waCta('final_cta', 'Discuss your project on WhatsApp')}</div></div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-14"><div><h3 className="text-xl font-semibold">Prefer a project-specific conversation?</h3><p className="mt-3 text-sm leading-6 text-white/55">Share your project and city so I can understand the context. I’ll use your details to respond to this enquiry; you can also request the free India city-search sample for a covered city or contact me directly on WhatsApp.</p></div><BuildersEnquiryForm variant="full" landingCity={landingCity} tracking={tracking} waHref={waHref} /></div>
      </div>
    </section>
    <footer className="border-t border-white/10 bg-[#0D0D0D]"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><p>© {new Date().getFullYear()} R.K Digital Media. Google Ads for real estate builders and developers.</p><div className="flex flex-wrap gap-5"><Link href="/privacy-policy" className="transition hover:text-white/70">Privacy</Link><Link href="/services/google-ads" className="transition hover:text-white/70">Google Ads services</Link><Link href="/contact" className="transition hover:text-white/70">Contact</Link></div></div></footer>
    {stickyVisible && <div role="region" aria-label="Quick contact options" className="builders-mobile-cta fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0D0D0D]/95 p-3 shadow-2xl backdrop-blur sm:hidden"><div className="mx-auto flex max-w-lg gap-2"><a href="#project-review" onClick={() => trackCta('sticky_mobile')} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#E8282B] px-4 py-3 text-sm font-bold text-white">Project review</a>{waCta('sticky_mobile', 'WhatsApp', 'inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white')}</div></div>}
  </main>;
}

function FeatureIcon({ kind }: { kind: string }) {
  const paths: Record<string, ReactNode> = {
    target: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2M22 12h-2M12 22v-2M2 12h2"/></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/></>,
    page: <><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></>,
    chart: <><path d="M4 19V5M4 19h17"/><path d="m7 15 4-4 3 2 5-7"/></>,
    report: <><path d="M5 3h11l3 3v15H5z"/><path d="M16 3v4h4M8 11h8M8 15h8"/></>,
  };
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind] || paths.target}</svg>;
}

function CertificationsSection() {
  const certs = [
    {name:'Google Ads Search Certification',issued:'Oct 7, 2026',validTo:'Oct 7, 2027',id:'196498973',url:'https://skillshop.credential.net/191d9a5e-2a34-4ce0-a519-aa1f326aa045',image:'https://adssuspensionrecovery.com/wp-content/uploads/2026/10/Screenshot-2026-10-10-at-00.42.40-768x592.png',width:768,height:592,alt:'Google Skillshop Google Ads Search Certification awarded to Rohit Kumar, credential ID 196498973'},
    {name:'Google Ads Display Certification',issued:'Sep 26, 2026',validTo:'Sep 26, 2027',id:'195278798',url:'https://skillshop.credential.net/28cc8af4-ed07-4032-8b95-e08f654398e9',image:'https://adssuspensionrecovery.com/wp-content/uploads/2026/10/Screenshot-2026-09-30-at-17.32.00-768x591.png',width:768,height:591,alt:'Google Skillshop Google Ads Display Certification awarded to Rohit Kumar, credential ID 195278798'},
    {name:'AI-Powered Performance Ads Certification',issued:'Sep 8, 2026',validTo:'Sep 8, 2027',id:'193520213',url:'https://skillshop.credential.net/2aab0235-4822-4d91-9c8c-644048567f96',image:'https://adssuspensionrecovery.com/wp-content/uploads/2026/10/Google-Ads-Certificate-2-768x595.png',width:768,height:595,alt:'Google Skillshop AI-Powered Performance Ads Certification awarded to Rohit Kumar, credential ID 193520213'},
    {name:'Google Ads Search Certification (2026)',issued:'Aug 28, 2026',validTo:'Aug 28, 2027',id:'192649932',url:'https://skillshop.credential.net/e097c92c-9f63-4db3-90d7-306436c74a99',image:'https://adssuspensionrecovery.com/wp-content/uploads/2026/10/Google-Ads-Certificate-1-768x588.png',width:768,height:588,alt:'Google Skillshop Google Ads Search Certification (2026) awarded to Rohit Kumar, credential ID 192649932'},
  ];
  const verify = (location: string) => trackEvent('builders_verify_click', {location});
  return (
    <section data-motion-reveal id="certifications" className="border-b border-white/[.08] bg-[#0D0D0D] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20" aria-labelledby="certifications-title">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-[#E8282B]">Google Skillshop credentials</p>
          <h2 id="certifications-title" className="text-3xl font-semibold leading-tight tracking-[-.035em] text-white sm:text-4xl">Verify My Google Ads Certifications</h2>
          <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">I’m Rohit Kumar. I’ve listed each credential with its issue date, validity date and a direct verification link so you can check the details yourself before booking a call.</p>
        </header>
        <div className="builders-cert-marquee overflow-hidden" role="region" aria-roledescription="carousel" aria-labelledby="certifications-title" tabIndex={0}>
          <div className="builders-cert-marquee__track flex w-max animate-marquee" style={{animationDuration:'50s'}}>
            {[0, 1, 2].map((copy) => (
              <div key={copy} className="flex shrink-0 gap-5 pr-5" aria-hidden={copy > 0}>
                {certs.map((cert) => (
                  <article key={`${copy}-${cert.id}`} className="builders-motion-card group flex w-[min(82vw,320px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white text-[#202124] shadow-[0_8px_28px_rgba(0,0,0,.18)] transition duration-200 hover:-translate-y-1 hover:border-[#E8282B]/50 hover:shadow-[0_14px_36px_rgba(0,0,0,.28)] sm:w-[300px] xl:w-[280px]">
                    <a href={cert.url} tabIndex={copy > 0 ? -1 : undefined} onClick={() => verify('certification_image')} target="_blank" rel="noopener noreferrer" aria-label={'Open verification for ' + cert.name} className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-[#E5E7EB] bg-white p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#E8282B]">
                      <img src={cert.image} width={cert.width} height={cert.height} alt={cert.alt} loading="lazy" decoding="async" className="h-full w-full object-contain" />
                      <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-[#D1FAE5] bg-[#ECFDF5] px-2.5 py-1 text-[11px] font-semibold text-[#047857]"><span aria-hidden="true">✓</span> Verification link</span>
                    </a>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-base font-bold leading-snug">{cert.name}</h3>
                      <dl className="mt-4 space-y-2 text-xs leading-5 text-[#4B5563]">
                        <div className="flex gap-2"><dt className="shrink-0 font-semibold text-[#374151]">Issued</dt><dd>{cert.issued}</dd></div>
                        <div className="flex gap-2"><dt className="shrink-0 font-semibold text-[#374151]">Valid to</dt><dd>{cert.validTo}</dd></div>
                        <div className="flex flex-col gap-0.5 border-t border-[#E5E7EB] pt-2"><dt className="font-semibold text-[#374151]">Credential ID</dt><dd className="break-all font-mono text-[11px]">{cert.id}</dd></div>
                      </dl>
                      <a href={cert.url} tabIndex={copy > 0 ? -1 : undefined} onClick={() => verify('certification_verify_link')} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#E8282B] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#C91F23] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8282B]">Verify this certificate <span aria-hidden="true">↗</span></a>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-white/45">Auto-scroll pauses on hover or focus. Reduced-motion settings show a static, scrollable row.</p>
        <div className="mt-8 flex flex-col items-center gap-3 text-center sm:mt-10">
          <p className="text-sm text-white/55">Want to review the full credential wallet?</p>
          <a href="https://skillshop.credential.net/profile/rohitkumarseo848048/wallet" onClick={() => verify('certifications_all_credentials')} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#E8282B] hover:bg-white/[.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8282B]">View all credentials on Google Skillshop <span className="ml-2" aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
