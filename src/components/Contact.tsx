'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const services = [
  'Google Ads Services',
  'Website Development Services',
  'Google Ads Suspension Recovery',
  'SEO Services',
  'Google Business Profile Management',
  'AI Automation Services',
  'Not sure — advise me',
];

const reasons = [
  'Google Ads performance or account problems',
  'SEO or Google Business Profile visibility',
  'Website or landing-page conversion issues',
  'Google Ads suspension or policy concerns',
  'Lead capture, CRM or workflow automation',
];

export function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [errorDetails, setErrorDetails] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorDetails('');
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: fd });
      const data = await res.json();
      if (res.ok) {
        trackEvent('generate_lead', {
          lead_type: 'contact_form',
          service: String(fd.get('service') || ''),
        });
        setStatus('sent');
      }
      else {
        setStatus('error');
        setErrorDetails(data?.error || data?.details || 'Unable to send the enquiry.');
      }
    } catch (err) {
      setStatus('error');
      setErrorDetails(err instanceof Error ? err.message : 'Network error');
    }
  }

  return (
    <main className="rkd-contact bg-[var(--rkd-bg)]">
      <section className="relative overflow-hidden border-b border-[var(--rkd-border)]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_76%_35%,rgba(232,40,43,0.13),transparent_34%)]" />
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 pt-20 md:pt-28 pb-16 md:pb-24 relative">
          <div className="flex items-center justify-between gap-4 mb-8 md:mb-14">
            <p className="section-label">// CONTACT</p>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--rkd-fg-muted)]">DIRECT ENQUIRIES</span>
          </div>
          <div className="grid lg:grid-cols-[1fr_0.75fr] gap-12 lg:gap-20 items-end">
            <div>
              <h1 className="hero-headline text-[var(--rkd-fg)] max-w-5xl">Tell us what is <span className="text-red-italic">not working.</span></h1>
            </div>
            <div>
              <p className="text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed">Give us the context, the current constraint and what you are trying to achieve. We’ll review the enquiry and tell you what we would investigate first.</p>
              <a href="https://wa.me/919871530594?text=Hi%20R.K.%20Digital%20Media%2C%20I%27d%20like%20to%20discuss%20my%20business." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-7 font-mono text-[10px] uppercase tracking-widest text-[var(--rkd-primary)] hover:text-[var(--rkd-fg)] transition-colors" onClick={() => trackEvent('whatsapp_click', { location: 'contact_intro' })}><MessageCircle className="w-4 h-4" /> WhatsApp directly</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 border-b border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20">
          <div>
            <p className="section-label mb-4">// BEFORE YOU SEND</p>
            <h2 className="section-heading section-heading-h2">Useful context <span className="text-red-italic">helps.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
            {reasons.map(reason=><div key={reason} className="flex gap-3 text-sm text-[var(--rkd-fg-muted)] leading-relaxed"><Check className="w-4 h-4 text-[var(--rkd-primary)] shrink-0 mt-0.5" />{reason}</div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-28 bg-[var(--rkd-bg-secondary)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 self-start">
              <p className="section-label mb-4">// 01. START A PROJECT</p>
              <h2 className="section-heading section-heading-h2 mb-6">Give us the <span className="text-red-italic">details.</span></h2>
              <p className="text-[var(--rkd-fg-muted)] leading-relaxed max-w-md">The more useful the context, the less time we spend guessing. You do not need a polished brief.</p>
              <div className="mt-8 p-5 border border-[var(--rkd-border)] bg-[var(--rkd-card)]"><p className="font-mono text-[9px] uppercase tracking-widest text-[var(--rkd-fg-muted)] mb-2">DIRECT WHATSAPP</p><a href="https://wa.me/919871530594" target="_blank" rel="noopener noreferrer" className="font-montserrat font-bold text-[var(--rkd-fg)] hover:text-[var(--rkd-primary)] transition-colors" onClick={() => trackEvent('phone_click', { location: 'contact_page' })}>+91 98715 30594</a></div>
            </div>

            <div className="border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-5 md:p-10">
              {status === 'sent' ? (
                <div className="py-16 text-center">
                  <div className="w-14 h-14 rounded-full border border-[var(--rkd-primary)] mx-auto flex items-center justify-center mb-6"><Check className="w-6 h-6 text-[var(--rkd-primary)]" /></div>
                  <h3 className="font-montserrat font-black text-2xl text-[var(--rkd-fg)] mb-3">Enquiry received.</h3>
                  <p className="text-[var(--rkd-fg-muted)] max-w-md mx-auto">We’ll review the details and get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <Field label="Full Name" name="name" placeholder="Your name" required />
                    <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <Field label="Phone" name="phone" placeholder="+91 98765 43210" />
                    <Field label="Company / Business" name="company" placeholder="Your business" />
                  </div>
                  <div>
                    <label className="block font-montserrat text-xs tracking-widest uppercase text-[var(--rkd-fg-muted)] mb-2">Service Interested In</label>
                    <select name="service" className="contact-field appearance-none cursor-pointer">{services.map(s=><option key={s} value={s}>{s}</option>)}</select>
                  </div>
                  <div>
                    <label className="block font-montserrat text-xs tracking-widest uppercase text-[var(--rkd-fg-muted)] mb-2">What is happening?</label>
                    <textarea required name="message" rows={7} placeholder="Tell us what you are trying to improve, what you have already tried, and what is blocking you." className="contact-field resize-y" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-2">
                    <p className="text-xs text-[var(--rkd-fg-muted)] leading-relaxed max-w-md">Your enquiry is reviewed directly. We do not need a perfect brief to start the conversation.</p>
                    <button type="submit" disabled={status==='sending'} className="btn-primary inline-flex items-center justify-center gap-2 shrink-0 disabled:opacity-50">{status==='sending'?'Sending...':'Send Enquiry'} <ArrowRight className="w-4 h-4" /></button>
                  </div>
                  {status==='error' && <div className="p-4 border border-red-500/30 bg-red-500/10 text-red-300 text-sm">Something went wrong. You can email <a href="mailto:info@rkdigitalmedia.in" className="underline">info@rkdigitalmedia.in</a> or WhatsApp us. <span className="block mt-1 text-xs opacity-70">{errorDetails}</span></div>}
                </form>
              )}
              <p className="mt-8 pt-6 border-t border-[var(--rkd-border)] text-[10px] uppercase tracking-widest text-[var(--rkd-fg-muted)]">By submitting, you agree to our <Link href="/privacy" className="underline hover:text-[var(--rkd-fg)]">Privacy Policy</Link>. We do not sell your contact details.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({label,name,placeholder,type='text',required=false}:{label:string;name:string;placeholder:string;type?:string;required?:boolean}) {
  return <div><label className="block font-montserrat text-xs tracking-widest uppercase text-[var(--rkd-fg-muted)] mb-2">{label}</label><input name={name} type={type} required={required} placeholder={placeholder} className="contact-field" /></div>;
}

export default Contact;