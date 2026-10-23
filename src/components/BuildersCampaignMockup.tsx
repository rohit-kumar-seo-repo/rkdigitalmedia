'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import type { CityData } from '@/components/BuildersBuyerMap';

type View = 'intent' | 'location' | 'quality';

const CITY_KEYS = ['mumbai', 'delhi-ncr', 'pune', 'bengaluru', 'hyderabad', 'chennai', 'ahmedabad'];
const CITY_LABELS: Record<string, string> = {
  mumbai: 'Mumbai / MMR',
  'delhi-ncr': 'Delhi NCR',
  pune: 'Pune',
  bengaluru: 'Bengaluru',
  hyderabad: 'Hyderabad',
  chennai: 'Chennai',
  ahmedabad: 'Ahmedabad',
};

const number = (value: number) => new Intl.NumberFormat('en-IN').format(value);

function BuildingArt() {
  return (
    <svg viewBox="0 0 420 260" role="img" aria-label="Illustration of a residential development connected to a digital campaign plan" className="h-full w-full">
      <defs>
        <linearGradient id="builders-sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#252020" />
          <stop offset="100%" stopColor="#111515" />
        </linearGradient>
        <linearGradient id="builders-tower" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#77706d" />
          <stop offset="100%" stopColor="#343333" />
        </linearGradient>
        <linearGradient id="builders-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8282B" stopOpacity=".45" />
          <stop offset="100%" stopColor="#E8282B" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="418" height="258" rx="18" fill="url(#builders-sky)" stroke="#ffffff" strokeOpacity=".1" />
      <circle cx="306" cy="76" r="72" fill="url(#builders-glow)" />
      <path d="M18 213H402" stroke="#ffffff" strokeOpacity=".13" />
      <path d="M18 227H402" stroke="#ffffff" strokeOpacity=".06" />
      <g opacity=".48" fill="#555150">
        <path d="M24 145h44v68H24z" /><path d="M74 124h37v89H74z" /><path d="M118 154h28v59h-28z" />
        <path d="M296 147h31v66h-31z" /><path d="M333 128h39v85h-39z" /><path d="M378 161h22v52h-22z" />
      </g>
      <g>
        <path d="M151 76 210 47l59 29v137H151z" fill="url(#builders-tower)" stroke="#b6aead" strokeOpacity=".38" />
        <path d="M210 47 269 76 210 105 151 76z" fill="#8b8380" />
        <path d="M210 105v108" stroke="#ffffff" strokeOpacity=".18" />
        {Array.from({ length: 5 }, (_, i) => (
          <g key={i}>
            <path d={`M164 ${92 + i * 22}h37v10h-37z`} fill="#f2d7b0" fillOpacity=".78" />
            <path d={`M219 ${92 + i * 22}h37v10h-37z`} fill="#f2d7b0" fillOpacity=".5" />
            <path d={`M164 ${108 + i * 22}h37v3h-37z`} fill="#201e1e" />
            <path d={`M219 ${108 + i * 22}h37v3h-37z`} fill="#201e1e" />
          </g>
        ))}
        <path d="M143 213h134l-15 10H158z" fill="#262323" />
      </g>
      <g fill="none" stroke="#E8282B" strokeWidth="1.5">
        <path d="M280 57h48a7 7 0 0 1 7 7v10" strokeDasharray="4 4" />
        <circle cx="335" cy="84" r="13" fill="#E8282B" fillOpacity=".12" />
        <circle cx="335" cy="84" r="5" fill="#E8282B" fillOpacity=".85" />
      </g>
      <g>
        <rect x="25" y="28" width="111" height="48" rx="9" fill="#181919" stroke="#ffffff" strokeOpacity=".13" />
        <circle cx="41" cy="44" r="4" fill="#E8282B" />
        <text x="52" y="47" fontSize="9" fill="#f4f0ef" fontWeight="600">PROJECT FIT</text>
        <text x="37" y="63" fontSize="8" fill="#aaa3a1">Location · Price · Intent</text>
      </g>
      <g>
        <rect x="286" y="169" width="107" height="39" rx="8" fill="#171919" stroke="#ffffff" strokeOpacity=".15" />
        <path d="M298 194l7-7 6 3 9-11" stroke="#79d8a1" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="327" y="184" fontSize="8" fill="#f3efee" fontWeight="600">SEARCH SIGNALS</text>
        <text x="327" y="197" fontSize="7" fill="#a9a3a2">Reviewed, not guessed</text>
      </g>
      <text x="22" y="245" fontSize="8" fill="#a7a09e" letterSpacing="1.2">REAL ESTATE × SEARCH INTENT</text>
    </svg>
  );
}

function IntentBars({ city }: { city: CityData }) {
  const groups = [
    { key: 'buyer_leaning', label: 'Buyer-leaning', color: '#62d69b' },
    { key: 'mixed', label: 'Mixed intent', color: '#a7a2a0' },
    { key: 'rental', label: 'Rental / PG', color: '#E8282B' },
    { key: 'resale_broker_portal', label: 'Resale / broker', color: '#e8a75e' },
  ];
  const values = groups.map((group) => ({
    ...group,
    total: (city.groups[group.key]?.topQueries || []).reduce((sum, query) => sum + query.monthly, 0),
  }));
  const max = Math.max(1, ...values.map((item) => item.total));
  return (
    <div className="space-y-4">
      {values.map((item) => (
        <div key={item.key}>
          <div className="mb-1.5 flex items-center justify-between gap-3 text-xs">
            <span className="text-white/75">{item.label}</span>
            <span className="tabular-nums text-white/50">{number(item.total)} <span className="text-white/30">sampled searches</span></span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/[.07]">
            <div className="h-full rounded-full transition-[width] duration-500" style={{ width: `${Math.max(2, item.total / max * 100)}%`, backgroundColor: item.color }} />
          </div>
        </div>
      ))}
      <p className="pt-1 text-[10px] leading-5 text-white/35">Totals above reflect the displayed sample queries, not all demand in the city or expected campaign results.</p>
    </div>
  );
}

function LocationIllustration() {
  return (
    <svg viewBox="0 0 460 220" role="img" aria-label="Conceptual map showing a project location and its surrounding buyer catchment" className="w-full">
      <defs><pattern id="builders-map-grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#ffffff" strokeOpacity=".07" strokeWidth="1" /></pattern></defs>
      <rect width="460" height="220" rx="14" fill="#121515" />
      <rect width="460" height="220" rx="14" fill="url(#builders-map-grid)" />
      <path d="M-20 182 95 100l88 31 86-95 90 32 125-46" fill="none" stroke="#7a7775" strokeWidth="13" strokeOpacity=".2" />
      <path d="M-20 182 95 100l88 31 86-95 90 32 125-46" fill="none" stroke="#c8c2bf" strokeWidth="1.5" strokeDasharray="5 6" strokeOpacity=".65" />
      <path d="M33 -10 82 58l-7 61 70 50 40 61M220 -10l-12 54 40 58-12 61 42 67M370 -10l-17 55 24 60-25 56 30 70" fill="none" stroke="#ffffff" strokeOpacity=".11" strokeWidth="1.5" />
      <circle cx="232" cy="111" r="84" fill="#E8282B" fillOpacity=".035" stroke="#E8282B" strokeOpacity=".6" strokeDasharray="5 6" />
      <circle cx="232" cy="111" r="55" fill="#E8282B" fillOpacity=".05" stroke="#E8282B" strokeOpacity=".8" />
      <circle cx="232" cy="111" r="25" fill="#E8282B" fillOpacity=".13" stroke="#E8282B" />
      <path d="M232 94v34M215 111h34" stroke="#f6eeee" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="232" cy="111" r="5" fill="#E8282B" />
      <g fill="#d8d2d0" fontSize="10"><text x="22" y="28">BUYER CATCHMENT</text><text x="22" y="44" fill="#9f9896" fontSize="8">Conceptual planning view</text><text x="274" y="105">Project location</text><text x="274" y="120" fill="#9f9896" fontSize="8">Budget + commute fit</text></g>
      <g fill="#E8282B"><circle cx="115" cy="151" r="3" /><circle cx="332" cy="62" r="3" /><circle cx="326" cy="174" r="3" /></g>
      <g fill="#9f9896" fontSize="8"><text x="82" y="169">Area A</text><text x="343" y="59">Area B</text><text x="337" y="188">Area C</text></g>
    </svg>
  );
}

function PhoneSearchPreview() {
  return (
    <div className="mt-6 grid gap-6 overflow-hidden rounded-2xl border border-white/10 bg-[#111313] p-5 sm:p-7 lg:grid-cols-[1fr_.8fr] lg:items-center lg:p-8">
      <div className="max-w-xl">
        <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#E8282B]">Illustrative search ad · sample copy</p>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">Show the right project when a buyer searches.</h3>
        <p className="mt-3 text-sm leading-6 text-white/55">A search such as “buy 3 BHK in [your location]” could lead to an ad for [Your Property Name] and its own project page. The example is illustrative—not a live ad, client result or Google placement.</p>
        <p className="mt-4 text-xs leading-5 text-white/40">Replace the sample location, project name, offer and website with details approved for your project.</p>
      </div>
      <figure className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-2xl bg-[#111827]">
        <Image src="/images/builders-phone-search.jpg" alt="A hand holding a smartphone in front of a residential development at dusk" fill unoptimized sizes="(max-width: 1024px) 100vw, 34vw" className="object-cover object-[75%_center]" />
        <div className="absolute left-[46%] top-[16%] z-10 h-[57%] w-[34%] overflow-hidden px-[2%] pt-[9%] text-[#202124]">
          <div className="flex h-[11%] items-center gap-1 rounded-full border border-[#dadce0] bg-white/95 px-1 text-[6px] leading-none text-[#5f6368] shadow-sm"><span aria-hidden="true">⌕</span><span className="truncate">buy 3 bhk in [your location]</span></div>
          <div className="mt-[8%] text-[6px] leading-none text-[#5f6368]">Sponsored · sample</div>
          <div className="mt-1 rounded-md border border-[#e8eaed] bg-white/95 p-[5%]">
            <div className="text-[7px] font-semibold leading-tight text-[#1a0dab]">3 BHK homes at [Your Property Name]</div>
            <p className="mt-1 text-[6px] leading-[1.35] text-[#4d5156]">Explore plans, pricing and availability for your next home.</p>
            <div className="mt-1 text-[6px] leading-tight text-[#188038]">yourwebsite.com/[your-project]</div>
          </div>
          <div className="mt-1 rounded-md bg-[#f1f3f4]/95 px-1.5 py-1 text-[6px] leading-tight text-[#5f6368]">Your project page · plans · location · enquiry</div>
        </div>
      </figure>
    </div>
  );
}

export default function BuildersCampaignMockup({ data, landingCity }: { data: Record<string, CityData>; landingCity: string }) {
  const [activeCity, setActiveCity] = useState('mumbai');
  const [view, setView] = useState<View>('intent');

  const cityKey = useMemo(() => {
    const input = landingCity.toLowerCase().trim();
    const aliases: Record<string, string> = { 'mumbai/mmr': 'mumbai', mmr: 'mumbai', bangalore: 'bengaluru', delhi: 'delhi-ncr', 'delhi ncr': 'delhi-ncr', gurugram: 'delhi-ncr', gurgaon: 'delhi-ncr', noida: 'delhi-ncr' };
    const key = aliases[input] || input.replace(/\s+/g, '-');
    return CITY_KEYS.includes(key) && data[key] ? key : '';
  }, [landingCity, data]);

  useEffect(() => { if (cityKey) setActiveCity(cityKey); }, [cityKey]);

  const selectedKey = data[activeCity] ? activeCity : (cityKey || Object.keys(data)[0]);
  const city = data[selectedKey];
  const buyer = city?.groups.buyer_leaning?.topQueries?.[0];
  const rental = city?.groups.rental?.topQueries?.[0];

  if (!city) return null;

  return (
    <section className="relative overflow-hidden border-b border-white/[.08] bg-[#0d0f0f]" aria-labelledby="campaign-preview-title">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 78% 18%, rgba(232,40,43,.12), transparent 30%), linear-gradient(90deg, transparent 49.9%, rgba(255,255,255,.025) 50%, transparent 50.1%)' }} />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#E8282B]">A visual preview · not a live ad account</p>
            <h2 id="campaign-preview-title" className="mt-3 text-3xl font-semibold leading-tight tracking-[-.04em] text-white sm:text-4xl">See how a project’s search plan comes together.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">A working, interactive preview built from the available city keyword sample—so you can explore intent, think through location fit and see how enquiry quality should be judged.</p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-3 py-2 text-[11px] text-white/55"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Interactive preview <span className="text-white/25">/</span> Sample data</div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[.78fr_1.22fr] lg:gap-6">
          <div className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141616] p-3 sm:p-4"><BuildingArt /></div>
            <div className="rounded-2xl border border-white/10 bg-[#141616] p-5 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/40">The planning principle</p>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-white">Match the search to the property.</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">A project in one micro-market, at one price band, does not need the same targeting as every property in the city. This preview shows the checks—not a promise of outcomes.</p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {['Location', 'Price band', 'Buyer intent'].map((label) => <div key={label} className="rounded-lg border border-white/[.08] bg-black/20 px-2 py-3 text-center text-[10px] font-semibold text-white/65 sm:text-xs">{label}</div>)}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141616] shadow-[0_24px_70px_-45px_rgba(232,40,43,.6)]">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#191b1b] px-4 py-3 sm:px-5">
              <div className="flex min-w-0 items-center gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8282B] text-xs font-black text-white">RK</div><div className="min-w-0"><p className="truncate text-xs font-semibold text-white">Project campaign workspace</p><p className="mt-0.5 text-[10px] text-white/40">India sample data · other markets reviewed separately</p></div></div>
              <span className="shrink-0 rounded-md border border-emerald-400/20 bg-emerald-400/[.06] px-2 py-1 text-[9px] font-semibold uppercase tracking-[.1em] text-emerald-300">Preview mode</span>
            </div>

            <div className="border-b border-white/10 px-4 py-4 sm:px-5">
              <p className="mb-2 text-[10px] uppercase tracking-[.16em] text-white/40">Choose sample market</p>
              <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Choose a sample city">
                {CITY_KEYS.filter((key) => data[key]).map((key) => <button key={key} type="button" aria-pressed={selectedKey === key} onClick={() => { setActiveCity(key); setView('intent'); }} className={'shrink-0 rounded-full border px-3 py-2 text-[11px] font-medium transition ' + (selectedKey === key ? 'border-[#E8282B] bg-[#E8282B] text-white' : 'border-white/10 text-white/55 hover:border-white/30 hover:text-white')}>{CITY_LABELS[key] || data[key].city}</button>)}
              </div>
              <p className="mt-2 text-[10px] leading-5 text-white/35">City switch updates the sample query data below. Use the detailed explorer further down for full query lists.</p>
            </div>

            <div className="grid grid-cols-3 gap-px border-b border-white/10 bg-white/10">
              <div className="bg-[#111313] p-3 sm:p-4"><p className="text-[9px] uppercase tracking-[.1em] text-white/35">Queries analysed</p><p className="mt-2 text-lg font-semibold tabular-nums text-white sm:text-2xl">{number(city.queriesAnalysed)}</p><p className="mt-1 text-[9px] text-white/35">in city sample</p></div>
              <div className="bg-[#111313] p-3 sm:p-4"><p className="text-[9px] uppercase tracking-[.1em] text-white/35">Top buyer term</p><p className="mt-2 truncate text-lg font-semibold tabular-nums text-white sm:text-2xl">{buyer ? number(buyer.monthly) : '—'}</p><p className="mt-1 truncate text-[9px] text-white/35">{buyer?.query || 'No query listed'}</p></div>
              <div className="bg-[#111313] p-3 sm:p-4"><p className="text-[9px] uppercase tracking-[.1em] text-white/35">Top rental term</p><p className="mt-2 truncate text-lg font-semibold tabular-nums text-white sm:text-2xl">{rental ? number(rental.monthly) : '—'}</p><p className="mt-1 truncate text-[9px] text-white/35">{rental?.query || 'No query listed'}</p></div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="mb-5 flex flex-wrap gap-2" role="tablist" aria-label="Campaign planning view">
                {([{ id: 'intent', label: 'Search intent' }, { id: 'location', label: 'Location fit' }, { id: 'quality', label: 'Lead quality' }] as const).map((tab) => <button key={tab.id} type="button" role="tab" aria-selected={view === tab.id} onClick={() => setView(tab.id)} className={'rounded-lg border px-3 py-2 text-xs font-semibold transition ' + (view === tab.id ? 'border-white/20 bg-white/[.08] text-white' : 'border-transparent text-white/45 hover:text-white/75')}>{tab.label}</button>)}
              </div>

              {view === 'intent' && <div><div className="mb-5"><h3 className="text-sm font-semibold text-white">Search themes by intent</h3><p className="mt-1 text-[11px] text-white/40">Sample query totals from {city.city}</p></div><IntentBars city={city} /></div>}
              {view === 'location' && <div><div className="mb-3"><h3 className="text-sm font-semibold text-white">Project catchment thinking</h3><p className="mt-1 text-[11px] text-white/40">Conceptual illustration—not a measured radius or live map.</p></div><LocationIllustration /><p className="mt-3 text-xs leading-5 text-white/45">Campaign geography should be reviewed against the actual project location, realistic travel patterns, price band and buyer profile—not chosen from a city name alone.</p></div>}
              {view === 'quality' && <div><div className="mb-4"><h3 className="text-sm font-semibold text-white">Measure beyond the form fill</h3><p className="mt-1 text-[11px] text-white/40">A measurement sequence, not a forecast.</p></div><div className="space-y-2">{[{ n:'01', title:'Ad click', detail:'Search relevance and landing-page fit' }, { n:'02', title:'Enquiry', detail:'Call or form recorded accurately' }, { n:'03', title:'Qualified enquiry', detail:'Sales feedback confirms project fit' }, { n:'04', title:'Site visit / next step', detail:'Outcome captured where your process supports it' }].map((item, index) => <div key={item.n} className="flex items-center gap-3 rounded-xl border border-white/[.08] bg-black/20 p-3"><div className={'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold ' + (index === 2 ? 'bg-emerald-400/10 text-emerald-300' : 'bg-white/[.06] text-white/50')}>{item.n}</div><div><p className="text-xs font-semibold text-white">{item.title}</p><p className="mt-1 text-[10px] leading-4 text-white/40">{item.detail}</p></div><span className="ml-auto text-white/25">→</span></div>)}</div></div>}
            </div>
            <div className="flex flex-col gap-3 border-t border-white/10 bg-[#111313] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5"><p className="text-[10px] leading-5 text-white/40">Keyword Planner sample · estimates only · not campaign performance</p><a href="#project-review" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#E8282B] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#d02225]">Request my project review <span aria-hidden="true">↗</span></a></div>
          </div>
        </div>
        <PhoneSearchPreview />
      </div>
    </section>
  );
}
