'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

const WHATSAPP_NUMBER = '919871530594';
const STAGES = ['Planning a launch', 'Launching soon', 'Already selling', 'Existing campaigns need improvement'];
const BUDGETS = ['Need guidance', '₹50,000–₹1 lakh', '₹1–₹3 lakh', '₹3 lakh+'];

export default function BuildersThanksPage() {
  const [ref, setRef] = useState('');
  const [landingCity, setLandingCity] = useState('your city');
  const [stage, setStage] = useState(STAGES[0]);
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  useState(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search);
      setRef((p.get('l') || '').slice(0, 200));
      setLandingCity((p.get('city') || 'your city').slice(0, 120));
    }
  });

  const waHref = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent('Hello R.K Digital Media, thanks. I requested the buyer-search map and have a project question.');

  async function submitFollowup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');
    if (!consent) { setMessage('Please confirm consent before sending these optional details.'); return; }
    setSending(true);
    try {
      const response = await fetch('/api/builders-enquiry', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'buyer_map_followup', ref, landingCity, stage, budget, consent, pageUrl: window.location.href, website: '' }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'We could not send these details. Please try WhatsApp.');
      setMessage('Thanks — your project details have been sent.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Please try WhatsApp instead.');
    } finally { setSending(false); }
  }

  return <main className="min-h-screen bg-[#0D0D0D] text-[#F0EEEE]">
    <header className="border-b border-white/10 bg-[#101313]"><div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6"><Link href="/" className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8282B] text-sm font-black text-white">RK</span><span className="text-sm font-semibold tracking-wide">R.K DIGITAL MEDIA</span></Link><a href={waHref} onClick={()=>trackEvent('builders_whatsapp_click',{location:'thanks_header'})} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold">WhatsApp</a></div></header>
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="rounded-3xl border border-white/10 bg-[#141414] p-6 sm:p-10"><div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8282B]/40 bg-[#E8282B]/10 text-2xl text-[#E8282B]" aria-hidden="true">✓</div><p className="mt-6 text-[10px] font-semibold uppercase tracking-[.22em] text-[#E8282B]">Request received</p><h1 className="mt-3 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">Your buyer-search map is in progress.</h1><p className="mt-5 leading-7 text-white/65">We’ll send the one-page map within <strong className="text-white">2 working days</strong>. No call is needed.</p><a href={waHref} onClick={()=>trackEvent('builders_whatsapp_click',{location:'thanks_primary'})} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#E8282B] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#D02225]">Ask a question on WhatsApp</a></div>
      <div className="mt-8 rounded-2xl border border-white/10 p-6 sm:p-8"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-white/45">Optional next step</p><h2 className="mt-3 text-xl font-semibold">Help us make the map more relevant.</h2><p className="mt-2 text-sm leading-6 text-white/55">Share the project stage and an indicative monthly ad budget if you know them. This is optional and does not change the map request.</p>
        <form onSubmit={submitFollowup} className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className="text-xs font-medium text-white/65">Project stage<select value={stage} onChange={e=>setStage(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white"><option>Planning a launch</option><option>Launching soon</option><option>Already selling</option><option>Existing campaigns need improvement</option></select></label>
          <label className="text-xs font-medium text-white/65">Indicative monthly ad budget<select value={budget} onChange={e=>setBudget(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white">{BUDGETS.map(b=><option key={b}>{b}</option>)}</select></label>
          <label className="sm:col-span-2 flex items-start gap-3 text-xs leading-5 text-white/50"><input required type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-[#E8282B]"/><span>I agree that R.K Digital Media may use these optional details to tailor the response to my map request.</span></label>
          {message && <p role="status" className="sm:col-span-2 text-sm text-white/70">{message}</p>}
          <button disabled={sending} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold disabled:opacity-60 sm:col-span-2">{sending?'Sending…':'Share project details'}</button>
        </form>
      </div>
      <p className="mt-8 text-center text-xs text-white/40"><Link href="/google-ads-for-builders" className="underline underline-offset-4">Back to Google Ads for builders</Link></p>
    </section>
  </main>;
}
