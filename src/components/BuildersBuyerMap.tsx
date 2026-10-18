'use client';

import { useEffect, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

type Query = { query: string; monthly: number };
type Group = { label: string; meaning: string; topQueries: Query[] };
export type CityData = { city: string; generatedOn: string; source: string; howToRead: string; queriesAnalysed: number; groups: Record<string, Group> };

const CITY_KEYS = ['mumbai', 'pune', 'bengaluru', 'hyderabad', 'chennai', 'ahmedabad', 'delhi-ncr'];
const ALIAS: Record<string, string> = {
  'navi mumbai': 'mumbai', thane: 'mumbai', 'mumbai/mmr': 'mumbai', mmr: 'mumbai',
  bangalore: 'bengaluru',
  gurgaon: 'delhi-ncr', gurugram: 'delhi-ncr', noida: 'delhi-ncr', 'greater noida': 'delhi-ncr', ghaziabad: 'delhi-ncr', faridabad: 'delhi-ncr', delhi: 'delhi-ncr', 'new delhi': 'delhi-ncr', 'delhi ncr': 'delhi-ncr', ncr: 'delhi-ncr',
};

export function cityKeyFor(input: string): string {
  const k = input.toLowerCase().trim();
  const key = ALIAS[k] || k.replace(/\s+/g, '-');
  return CITY_KEYS.includes(key) ? key : '';
}

const fmt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

function Rows({ queries, max, tone }: { queries: Query[]; max: number; tone: 'buyer' | 'renter' | 'neutral' }) {
  const bar = tone === 'buyer' ? 'bg-emerald-400/80' : tone === 'renter' ? 'bg-[#E8282B]/85' : 'bg-white/35';
  return (
    <ul className="mt-4 space-y-3">
      {queries.map((q) => (
        <li key={q.query}>
          <div className="flex items-baseline justify-between gap-3 text-sm">
            <span className="min-w-0 truncate text-white/85">“{q.query}”</span>
            <span className="shrink-0 tabular-nums text-white/60">{fmt(q.monthly)}<span className="text-white/30"> /mo</span></span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[.06]"><div className={'h-full rounded-full ' + bar} style={{ width: Math.max(2, Math.round((q.monthly / max) * 100)) + '%' }} /></div>
        </li>
      ))}
    </ul>
  );
}

export default function BuildersBuyerMap({ data, landingCity }: { data: Record<string, CityData>; landingCity: string }) {
  const [active, setActive] = useState('mumbai');

  useEffect(() => {
    const k = cityKeyFor(landingCity);
    if (k && data[k]) setActive(k);
  }, [landingCity, data]);

  const d = data[active];
  if (!d) return null;
  const g = d.groups;
  const buyer = (g.buyer_leaning?.topQueries || []).slice(0, 6);
  const renter = (g.rental?.topQueries || []).slice(0, 6);
  const mixed = (g.mixed?.topQueries || []).slice(0, 4);
  const resale = (g.resale_broker_portal?.topQueries || []).slice(0, 4);
  const max = Math.max(1, ...[...buyer, ...renter, ...mixed, ...resale].map((q) => q.monthly));
  const topBuyer = buyer[0];
  const topRenter = renter[0];
  const ratio = topBuyer && topRenter ? topRenter.monthly / topBuyer.monthly : 0;

  return (
    <div>
      <div role="tablist" aria-label="Choose a city" className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
        {CITY_KEYS.filter((k) => data[k]).map((k) => (
          <button key={k} role="tab" aria-selected={k === active} onClick={() => { setActive(k); trackEvent('builders_map_city', { city: data[k].city }); }} className={'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ' + (k === active ? 'border-[#E8282B] bg-[#E8282B] text-white' : 'border-white/15 text-white/65 hover:border-white/35 hover:text-white')}>{data[k].city}</button>
        ))}
      </div>

      {ratio > 1 && (
        <p className="mt-5 rounded-2xl border border-[#E8282B]/25 bg-[#E8282B]/[.06] p-4 text-sm leading-6 text-white/80 sm:p-5 sm:text-base">
          In this {d.city} sample, the biggest rental search (“{topRenter.query}”, {fmt(topRenter.monthly)} a month) is searched about <strong className="text-white">{ratio.toFixed(1)}×</strong> as often as the biggest for-sale search (“{topBuyer.query}”, {fmt(topBuyer.monthly)} a month). A broad “flats in {d.city}” campaign can pay for both.
        </p>
      )}

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-[#141414] p-5 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-emerald-300">Buyer-leaning</p>
          <h3 className="mt-2 text-lg font-semibold">People who may buy a new home</h3>
          <p className="mt-1 text-xs leading-5 text-white/45">{g.buyer_leaning?.meaning}</p>
          <Rows queries={buyer} max={max} tone="buyer" />
        </article>
        <article className="rounded-2xl border border-white/10 bg-[#141414] p-5 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#FCA5A5]">Rental and PG</p>
          <h3 className="mt-2 text-lg font-semibold">People who want to rent, not buy</h3>
          <p className="mt-1 text-xs leading-5 text-white/45">{g.rental?.meaning || 'Contain a renting word such as rent, PG or paying guest.'}</p>
          <Rows queries={renter} max={max} tone="renter" />
        </article>
        <article className="rounded-2xl border border-white/10 bg-[#141414] p-5 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/55">Could be either</p>
          <h3 className="mt-2 text-lg font-semibold">Needs the ad and page to filter intent</h3>
          <p className="mt-1 text-xs leading-5 text-white/45">{g.mixed?.meaning}</p>
          <Rows queries={mixed} max={max} tone="neutral" />
        </article>
        <article className="rounded-2xl border border-white/10 bg-[#141414] p-5 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/55">Resale, broker, portal</p>
          <h3 className="mt-2 text-lg font-semibold">Not new-project buyers</h3>
          <p className="mt-1 text-xs leading-5 text-white/45">{g.resale_broker_portal?.meaning}</p>
          <Rows queries={resale} max={max} tone="neutral" />
        </article>
      </div>

      <details className="mt-5 rounded-xl border border-white/10 bg-white/[.02] p-4 text-xs leading-6 text-white/50">
        <summary className="cursor-pointer text-white/70">Where these numbers come from and how to read them</summary>
        <p className="mt-3">{d.source}.</p>
        <p className="mt-2">{d.howToRead}</p>
        <p className="mt-2">{fmt(d.queriesAnalysed)} queries analysed for {d.city}. Data pulled on {d.generatedOn}.</p>
        <p className="mt-2">Monthly search volumes are estimates, not unique people or guaranteed clicks. The intent groups are working classifications for this example, not official Google categories. A search can have mixed intent; exclusions should be checked against the specific project and campaign before being applied.</p>
      </details>
    </div>
  );
}
