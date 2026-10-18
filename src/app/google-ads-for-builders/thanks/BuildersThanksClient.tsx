'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

const WHATSAPP_NUMBER = '919871530594';
const STAGES = ['Planning a launch', 'Launching soon', 'Already selling', 'Existing campaigns need improvement'];
const BUDGETS = ['Need guidance', '₹50,000–₹1 lakh', '₹1–₹3 lakh', '₹3 lakh+'];

export default function BuildersThanksPage({ hasRequest, initialId, initialRef, initialCity }: { hasRequest: boolean; initialId: string; initialRef: string; initialCity: string }) {
  const ref = initialRef;
  const city = initialCity;
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [stage, setStage] = useState(STAGES[0]);
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const waHref = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent('Hello R.K Digital Media, thanks. I requested the buyer-search map and have a project question.');

  async function submitFollowup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');
    setSending(true);
    try {
      const response = await fetch('/api/builders-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          company: company.trim(),
          whatsapp: whatsapp.trim(),
          city: '',
          consent: false,
          project: company.trim(),
          email: '',
          stage,
          budget,
          message: '',
          ref,
          initial_enquiry_id: initialId,
          utm_source: '',
          utm_medium: '',
          utm_campaign: '',
          page: window.location.href,
          hp: '',
          step: 'details',
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.ok !== true || typeof result.id !== 'string') {
        const fields = Array.isArray(result.errors) ? result.errors.join(', ') : '';
        throw new Error(fields ? 'Please check these fields: ' + fields + '.' : (result.error || 'We could not save your details. Please use WhatsApp instead.'));
      }
      trackEvent('builders_form_submit', { location: 'thanks_optional_details', step: 'details' });
      setMessage('Thanks — your project details have been saved.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'We could not save your details. Please use WhatsApp instead.');
    } finally {
      setSending(false);
    }
  }

  return <main className="min-h-screen bg-[#0D0D0D] text-[#F0EEEE]">
    <header className="border-b border-white/10 bg-[#101313]"><div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6"><Link href="/" className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8282B] text-sm font-black text-white">RK</span><span className="text-sm font-semibold tracking-wide">R.K DIGITAL MEDIA</span></Link><a href={waHref} onClick={()=>trackEvent('builders_whatsapp_click',{location:'thanks_header'})} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold">WhatsApp</a></div></header>
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      {hasRequest ? <div className="rounded-3xl border border-white/10 bg-[#141414] p-6 sm:p-10"><div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8282B]/40 bg-[#E8282B]/10 text-2xl text-[#E8282B]" aria-hidden="true">✓</div><p className="mt-6 text-[10px] font-semibold uppercase tracking-[.22em] text-[#E8282B]">Request received</p><h1 className="mt-3 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">Your buyer-search map is in progress.</h1><p className="mt-5 leading-7 text-white/65">We’ll send the one-page map within <strong className="text-white">2 working days</strong>. You do not need to book a call to receive the map.</p>{city && <p className="mt-2 text-sm text-white/45">Market: {city}</p>}<a href={waHref} onClick={()=>trackEvent('builders_whatsapp_click',{location:'thanks_primary'})} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#E8282B] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#D02225]">Ask a question on WhatsApp</a></div> : <div className="rounded-3xl border border-white/10 bg-[#141414] p-6 sm:p-10"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#E8282B]">No submission confirmation</p><h1 className="mt-3 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">Start your buyer-search map request.</h1><p className="mt-5 leading-7 text-white/65">We could not find a submission confirmation in this link, so we do not want to tell you that a request has been saved when it may not have been. Please use the form to send your details.</p><Link href="/google-ads-for-builders#project-enquiry" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#E8282B] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#D02225]">Open the enquiry form</Link><a href={waHref} onClick={()=>trackEvent('builders_whatsapp_click',{location:'thanks_unconfirmed'})} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white">Contact us on WhatsApp</a></div>}
      {hasRequest && <div className="mt-8 rounded-2xl border border-white/10 p-6 sm:p-8"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-white/45">Optional next step</p><h2 className="mt-3 text-xl font-semibold">Help us make the map more relevant.</h2><p className="mt-2 text-sm leading-6 text-white/55">Optionally share your contact details again, the project stage and an indicative monthly ad budget. This does not change your map request.</p>
        <form onSubmit={submitFollowup} className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className="text-xs font-medium text-white/65">Name *<input required name="name" autoComplete="name" maxLength={120} value={name} onChange={e=>setName(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white" placeholder="Your name"/></label>
          <label className="text-xs font-medium text-white/65">Company / project *<input required name="company" autoComplete="organization" maxLength={180} value={company} onChange={e=>setCompany(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white" placeholder="Company or project name"/></label>
          <label className="text-xs font-medium text-white/65">WhatsApp *<input required name="whatsapp" type="tel" autoComplete="tel" maxLength={40} value={whatsapp} onChange={e=>setWhatsapp(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white" placeholder="+91 …"/></label>
          <label className="text-xs font-medium text-white/65">Project stage<select value={stage} onChange={e=>setStage(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white">{STAGES.map(s=><option key={s}>{s}</option>)}</select></label>
          <label className="text-xs font-medium text-white/65 sm:col-span-2">Indicative monthly ad budget<select value={budget} onChange={e=>setBudget(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white">{BUDGETS.map(b=><option key={b}>{b}</option>)}</select></label>
          <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true"><label>Leave this field empty<input tabIndex={-1} autoComplete="off" name="hp" value="" readOnly/></label></div>
          {message && <div role="status" className="sm:col-span-2 rounded-xl border border-white/10 p-4 text-sm text-white/75"><p>{message}</p>{!message.includes('saved') && <a href={waHref} onClick={()=>trackEvent('builders_whatsapp_click',{location:'thanks_error_fallback'})} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-semibold underline underline-offset-4">Continue on WhatsApp</a>}</div>}
          <button disabled={sending} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold disabled:opacity-60 sm:col-span-2">{sending?'Sending…':'Share project details'}</button>
        </form>
      </div>}
      <p className="mt-8 text-center text-xs text-white/40"><Link href="/google-ads-for-builders" className="underline underline-offset-4">Back to Google Ads for builders</Link></p>
    </section>
  </main>;
}
