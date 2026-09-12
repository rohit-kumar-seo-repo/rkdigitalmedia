'use client';
import { useState } from 'react';

const services = [
  'Performance Marketing',
  'SEO & Search Growth',
  'AI Automation',
  'Web & Conversion',
  'Creative & Content',
  'CRM & Growth Systems',
  'Not sure — advise me',
];

export function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const fd = new FormData(e.currentTarget);
    const res = await fetch('/api/contact', { method: 'POST', body: fd });
    setStatus(res.ok ? 'sent' : 'error');
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-[var(--rkd-bg)]">
      <div className="max-w-[80rem] mx-auto px-4 md:px-6">
        <p className="section-label mb-4">// GET IN TOUCH</p>
        <div className="max-w-4xl mx-auto border border-[var(--rkd-border)] rounded-2xl p-8 md:p-12 bg-[var(--rkd-card)]">

          {/* Header row */}
          <div className="flex items-center justify-between mb-10">
            <span className="font-montserrat font-bold text-[var(--rkd-primary)] tracking-widest text-sm uppercase">// Start a Project</span>
            <span className="font-montserrat text-[var(--rkd-fg-muted)] tracking-widest text-xs uppercase">~4 HR Response</span>
          </div>

          {status === 'sent' ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="font-montserrat font-black text-2xl text-[var(--rkd-fg)] mb-2">Message Sent!</h3>
              <p className="text-[var(--rkd-fg-muted)]">We'll get back to you within 4 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-montserrat text-xs tracking-widest uppercase text-[var(--rkd-fg-muted)] mb-2">Full Name</label>
                  <input name="name" required placeholder="e.g. Rohit Kumar"
                    className="w-full bg-[var(--rkd-bg)] border border-[var(--rkd-border)] rounded-lg px-4 py-3 text-[var(--rkd-fg)] font-outfit placeholder:text-[var(--rkd-fg-muted)] focus:outline-none focus:border-[var(--rkd-primary)] transition-colors" />
                </div>
                <div>
                  <label className="block font-montserrat text-xs tracking-widest uppercase text-[var(--rkd-fg-muted)] mb-2">Email</label>
                  <input name="email" type="email" required placeholder="you@company.com"
                    className="w-full bg-[var(--rkd-bg)] border border-[var(--rkd-border)] rounded-lg px-4 py-3 text-[var(--rkd-fg)] font-outfit placeholder:text-[var(--rkd-fg-muted)] focus:outline-none focus:border-[var(--rkd-primary)] transition-colors" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-montserrat text-xs tracking-widest uppercase text-[var(--rkd-fg-muted)] mb-2">Phone</label>
                  <input name="phone" placeholder="+91 9876543210"
                    className="w-full bg-[var(--rkd-bg)] border border-[var(--rkd-border)] rounded-lg px-4 py-3 text-[var(--rkd-fg)] font-outfit placeholder:text-[var(--rkd-fg-muted)] focus:outline-none focus:border-[var(--rkd-primary)] transition-colors" />
                </div>
                <div>
                  <label className="block font-montserrat text-xs tracking-widest uppercase text-[var(--rkd-fg-muted)] mb-2">Company</label>
                  <input name="company" placeholder="Your brand or business"
                    className="w-full bg-[var(--rkd-bg)] border border-[var(--rkd-border)] rounded-lg px-4 py-3 text-[var(--rkd-fg)] font-outfit placeholder:text-[var(--rkd-fg-muted)] focus:outline-none focus:border-[var(--rkd-primary)]  transition-colors" />
                </div>
              </div>

              {/* Service dropdown */}
              <div>
                <label className="block font-montserrat text-xs tracking-widest uppercase text-[var(--rkd-fg-muted)] mb-2">Service Interested In</label>
                <select name="service"
                  className="w-full bg-[var(--rkd-bg)] border border-[var(--rkd-border)] rounded-lg px-4 py-3 text-[var(--rkd-fg)] font-outfit focus:outline-none focus:border-[var(--rkd-primary)] transition-colors appearance-none cursor-pointer">
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Textarea */}
              <div>
                <label className="block font-montserrat text-xs tracking-widest uppercase text-[var(--rkd-fg-muted)] mb-2">What Are You Trying to Scale? <span className="normal-case">(Optional)</span></label>
                <textarea name="message" rows={5} placeholder="Revenue goal, what you have tried, what's blocking you right now."
                  className="w-full bg-[var(--rkd-bg)] border border-[var(--rkd-border)] rounded-lg px-4 py-3 text-[var(--rkd-fg)] font-outfit placeholder:text-[var(--rkd-fg-muted)] focus:outline-none focus:border-[var(--rkd-primary)] transition-colors resize-y" />
              </div>

              {/* Footer row */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2">
                <p className="font-montserrat text-xs tracking-widest uppercase text-[var(--rkd-fg-muted)]">
                  We never spam. Your details reach the founder directly.
                </p>
                <button type="submit" disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--rkd-primary)] text-white font-montserrat font-bold hover:opacity-90 transition-opacity disabled:opacity-50 shrink-0">
                  {status === 'sending' ? 'Sending...' : 'Send it'}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
                </button>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm font-outfit">Something went wrong. Please email us directly at info@rkdigitalmedia.in</p>
              )}
            </form>
          )}

          {/* Privacy footer */}
          <p className="mt-8 font-montserrat text-xs tracking-widest uppercase text-[var(--rkd-fg-muted)] border-t border-[var(--rkd-border)] pt-6">
            By submitting, you agree to our{' '}
            <a href="/privacy-policy" className="underline hover:text-[var(--rkd-fg)] transition-colors">Privacy Policy</a>.
            {' '}We never share your details with third parties.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Contact;