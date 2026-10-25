'use client';

import { useEffect, useState } from 'react';
import type { FormEvent, FocusEvent, ReactNode } from 'react';
import { trackEvent } from '@/lib/analytics';

const CITY_SUGGESTIONS = ['Mumbai/MMR', 'Delhi NCR', 'Gurugram', 'Noida', 'Bengaluru', 'Hyderabad', 'Pune', 'Chennai', 'Ahmedabad', 'Kolkata', 'Jaipur', 'Lucknow', 'Chandigarh', 'Kochi', 'Indore', 'Nagpur', 'Surat'];
const PROJECT_TYPES = ['Residential', 'Commercial', 'Plotted/land', 'Township', 'Mixed-use'];
const REQUEST_LABELS: Record<string, string> = { call: 'Project strategy call', map: 'Free India buyer-search map (sample cities only)', both: 'Project strategy call and India buyer-search map sample' };
const inputClass = 'mt-2 w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#E8282B]/70';

type Tracking = { ref: string; utmSource: string; utmMedium: string; utmCampaign: string; pageUrl: string };

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <label className="block text-xs font-medium text-white/65">{label}{children}</label>;
}

export default function BuildersEnquiryForm({ variant, landingCity, tracking, waHref }: { variant: 'hero' | 'full'; landingCity: string; tracking: Tracking; waHref: string }) {
  const full = variant === 'full';
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [cityTouched, setCityTouched] = useState(false);
  const [whatsapp, setWhatsapp] = useState('');
  const [projectType, setProjectType] = useState('');
  const [requestType, setRequestType] = useState('call');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [started, setStarted] = useState(false);
  const location = full ? 'project_enquiry' : 'hero_project_review';

  useEffect(() => {
    if (!cityTouched && landingCity !== 'your city') setCity(landingCity);
  }, [landingCity, cityTouched]);

  function onFocus(event: FocusEvent<HTMLFormElement>) {
    if (!started && event.target instanceof HTMLElement && event.target.matches('input,select,textarea')) {
      setStarted(true);
      trackEvent('builders_form_start', { location });
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    if (!consent) { setError('Please confirm that R.K Digital Media may contact you about this enquiry.'); return; }
    setSubmitting(true);
    try {
      const message = [REQUEST_LABELS[requestType] ? 'Request: ' + REQUEST_LABELS[requestType] : '', projectType ? 'Project type: ' + projectType : ''].filter(Boolean).join(' | ');
      const payload = { name: name.trim(), company: company.trim(), whatsapp: whatsapp.trim(), city, consent, project: company.trim(), email: '', stage: '', budget: '', message, ref: tracking.ref, utm_source: tracking.utmSource, utm_medium: tracking.utmMedium, utm_campaign: tracking.utmCampaign, page: tracking.pageUrl, hp: (event.currentTarget.elements.namedItem('hp') as HTMLInputElement)?.value || '', step: 'initial' };
      const response = await fetch('/api/builders-enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.ok !== true || typeof result.id !== 'string') {
        const fields = Array.isArray(result.errors) ? result.errors.join(', ') : '';
        throw new Error(fields ? 'Please check these fields: ' + fields + '.' : (result.error || 'We could not save your request. Please use WhatsApp instead.'));
      }
      trackEvent('builders_form_submit', { location, step: 'initial' });
      trackEvent('generate_lead', { location, step: 'initial', form_name: 'builders_enquiry' });
      window.location.assign('/google-ads-for-builders/thanks?' + new URLSearchParams({ l: tracking.ref, city: city.trim().slice(0, 80), id: result.id, request: requestType }).toString());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please use WhatsApp as a fallback.');
    } finally {
      setSubmitting(false);
    }
  }

  const listId = 'builder-city-suggestions-' + variant;
  const cityLabel = landingCity !== 'your city' ? landingCity : (city.trim() || 'your city');
  return (
    <form onSubmit={submit} onFocusCapture={onFocus} className={full ? 'rounded-2xl border border-white/10 bg-[#141414] p-5 sm:p-8' : 'rounded-3xl border border-white/10 bg-[#141414] p-5 shadow-2xl shadow-black/30 sm:p-6'}>
      {!full && <><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#E8282B]">Project campaign review</p><h2 className="mt-2 text-xl font-semibold leading-snug">Discuss Google Ads for your project</h2><p className="mt-2 text-xs leading-5 text-white/50">Share your project and market. I’ll review campaign fit, enquiry qualification and measurement needs, then follow up with a practical next step. No obligation to proceed.</p></>}
      <div className={'grid gap-4 ' + (full ? 'sm:grid-cols-2 sm:gap-5' : 'mt-5')}>
        <Field label="Name *"><input required name="name" autoComplete="name" maxLength={120} value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="Your name" /></Field>
        <Field label="Company / project *"><input required name="company" autoComplete="organization" maxLength={180} value={company} onChange={(e) => setCompany(e.target.value)} className={inputClass} placeholder="Company or project name" /></Field>
        <Field label="Project city / market *"><input required name="city" list={listId} value={city} onChange={(e) => { setCity(e.target.value); setCityTouched(true); }} maxLength={80} autoComplete="address-level2" className={inputClass} placeholder="City, country or market" /><datalist id={listId}>{CITY_SUGGESTIONS.map((o) => <option key={o} value={o} />)}</datalist><span className="mt-1 block text-[10px] text-white/40">Suggestions use Indian sample cities; you can enter any city and country.</span></Field>
        <Field label="WhatsApp *"><input required name="whatsapp" type="tel" autoComplete="tel" maxLength={40} value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className={inputClass} placeholder="Country code + number" /></Field>
        {full && <Field label="What would you like? *"><select required name="requestType" value={requestType} onChange={(e) => setRequestType(e.target.value)} className={inputClass}><option value="call">Project strategy call</option><option value="map">Free India buyer-search map (sample cities only)</option><option value="both">Project strategy call + India map sample</option></select></Field>}
        {full && <Field label="Project type (optional)"><select name="projectType" value={projectType} onChange={(e) => setProjectType(e.target.value)} className={inputClass}><option value="">Select project type</option>{PROJECT_TYPES.map((o) => <option key={o} value={o}>{o}</option>)}</select></Field>}
      </div>
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true"><label>Leave this field empty<input tabIndex={-1} autoComplete="off" name="hp" defaultValue="" /></label></div>
      <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-5 text-white/50"><input required type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-[#E8282B]" /><span>I agree that R.K Digital Media may contact me about this request. I can ask not to be contacted again.</span></label>
      {error && <div role="alert" className="mt-4 rounded-xl border border-red-500/25 bg-red-500/[.06] p-4"><p className="text-sm text-red-200">{error}</p><a href={waHref} onClick={() => trackEvent('builders_whatsapp_click', { location: 'form_error_fallback' })} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4">Continue on WhatsApp</a></div>}
      <button type="submit" disabled={submitting} className="builders-motion-cta mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#E8282B] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#D02225] disabled:cursor-wait disabled:opacity-60 sm:w-auto sm:min-w-[14rem]">{submitting ? 'Sending request…' : (full ? 'Send project enquiry' : 'Request my project review')}</button>
      <p className="mt-4 text-[10px] leading-5 text-white/35">Your details are used to respond to this request. No obligation to hire us.</p>
    </form>
  );
}
