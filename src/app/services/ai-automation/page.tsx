import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Automation Services | R.K Digital Media Greater Noida',
  description: 'WhatsApp AI agents, voice agents, CRM automation, n8n workflows. 24/7 lead coverage, 80% faster response, 40% lower cost per lead.',
};

const steps = [
  { num: '01', title: 'Process Audit', desc: 'Map every manual process: lead intake, qualification, follow-up, booking, CRM entry. Identify automation opportunities.' },
  { num: '02', title: 'Agent Design', desc: 'Design n8n workflows + AI agents. Define triggers, conditions, fallbacks, human handoffs. Sandbox first.' },
  { num: '03', title: 'Build & Deploy', desc: 'Ship workflows in 2 weeks. Test edge cases. Train AI agents on your data. Go live with monitoring.' },
  { num: '04', title: 'Optimise Loop', desc: 'Monthly performance reviews. Add new automations. Retrain agents on fresh data. Scale coverage.' },
];

const included = [
  'WhatsApp AI agent (instant reply, qualification, booking)',
  'Voice agent for inbound calls (Vapi/Retell integration)',
  'CRM automation (GoHighLevel, HubSpot, custom)',
  'n8n workflows (lead routing, scoring, enrichment)',
  'Lead qualification bot (SMS/Email/WhatsApp)',
  '24/7 coverage — no missed leads',
  'Monthly performance report + new automation roadmap',
];

const stats = [
  { value: '24/7', label: 'Lead Coverage' },
  { value: '80%', label: 'Faster Response Time' },
  { value: '40%', label: 'Lower Cost Per Lead' },
];

export default function AIAutomationPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center py-24">
          <p className="section-label mb-4">// SERVICE</p>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            AI <span className="text-red-italic">Automation</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Custom AI agents, voice agents, WhatsApp automation, and CRM workflows that qualify, route, and close leads 24/7.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// HOW IT WORKS</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            From Manual to Autonomous in <span className="text-red-italic">Four Steps</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="card-base p-6">
                <span className="font-montserrat font-black text-4xl text-[var(--rkd-primary)] opacity-40">{step.num}</span>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mt-3 mb-2">{step.title}</h3>
                <p className="text-body-sm text-[var(--rkd-fg-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// WHAT'S INCLUDED</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Every Engagement Includes
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-xl">
                <svg className="w-5 h-5 text-[var(--rkd-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
                <span className="text-body text-[var(--rkd-fg-muted)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// RESULTS YOU CAN EXPECT</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Measurable Outcomes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="card-base text-center p-8">
                <div className="font-montserrat font-black text-5xl text-[var(--rkd-primary)] mb-2">{stat.value}</div>
                <div className="text-[var(--rkd-fg-muted)] font-outfit">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg)] text-center">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// READY TO SCALE?</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-8" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Let's Automate Your Growth
          </h2>
          <a href="/contact" className="btn-primary inline-flex">
            Book Free Audit
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </>
  );
}