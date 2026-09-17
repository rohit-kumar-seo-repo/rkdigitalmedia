import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Automation Services | R.K Digital Media Greater Noida',
  description: 'WhatsApp AI agents, voice agents, CRM automation, n8n workflows. 24/7 lead coverage, 80% faster response, 40% lower cost per lead.',
  keywords: [
    'AI automation agency Greater Noida',
    'WhatsApp AI agent services',
    'voice AI agent development',
    'CRM automation services',
    'n8n workflow automation',
    'lead qualification bot',
    'AI chatbot development',
    'marketing automation agency',
    'business process automation',
    'AI lead generation',
  ],
  openGraph: {
    title: 'AI Automation Services | R.K Digital Media Greater Noida',
    description: 'WhatsApp AI agents, voice agents, CRM automation, n8n workflows. 24/7 lead coverage, 80% faster response, 40% lower cost per lead.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/services/ai-automation',
    siteName: 'R.K Digital Media',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Automation Services | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Services | R.K Digital Media Greater Noida',
    description: 'WhatsApp AI agents, voice agents, CRM automation, n8n workflows. 24/7 lead coverage, 80% faster response, 40% lower cost per lead.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rkdigitalmedia.in/services/ai-automation',
  },
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

const faqItems = [
  { question: 'What AI platforms do you use?', answer: 'We build on n8n for workflows, integrate with OpenAI/Claude for LLM agents, Vapi/Retell for voice, and connect to your CRM (GHL, HubSpot, Pipedrive).' },
  { question: 'How long to deploy an AI agent?', answer: 'Typical WhatsApp/voice agent: 2 weeks from audit to live. Complex CRM workflows: 3-4 weeks. We provide exact timeline after process audit.' },
  { question: 'Will AI replace my sales team?', answer: 'No — AI handles instant response, qualification, and booking. Your team closes warm leads. We design human handoff points for complex conversations.' },
  { question: 'What if the AI makes mistakes?', answer: 'We build fallback logic: confidence thresholds, human escalation triggers, and audit logs. You review edge cases weekly during first month.' },
  { question: 'How much does AI automation cost?', answer: 'Setup fee + monthly retainer based on workflows/agents. Typically ₹50K-₹2L setup + ₹25K-₹1L/month. ROI positive within 60 days for most clients.' },
];

const graphSchemaString = '{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org","@type":"Service","name":"AI Automation Services","description":"WhatsApp AI agents, voice agents, CRM automation, n8n workflows. 24/7 lead coverage, 80% faster response, 40% lower cost per lead.","url":"https://rkdigitalmedia.in/services/ai-automation","provider":{"@type":"LocalBusiness","@id":"https://rkdigitalmedia.in/#localbusiness","name":"R.K Digital Media"},"category":"AI Automation","areaServed":[{"@type":"Place","name":"Greater Noida"},{"@type":"Place","name":"Noida"},{"@type":"Place","name":"Delhi NCR"},{"@type":"Place","name":"Ghaziabad"},{"@type":"Place","name":"Faridabad"},{"@type":"Place","name":"Gurugram"}]},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What AI platforms do you use?","acceptedAnswer":{"@type":"Answer","text":"We build on n8n for workflows, integrate with OpenAI/Claude for LLM agents, Vapi/Retell for voice, and connect to your CRM (GHL, HubSpot, Pipedrive)."}},{"@type":"Question","name":"How long to deploy an AI agent?","acceptedAnswer":{"@type":"Answer","text":"Typical WhatsApp/voice agent: 2 weeks from audit to live. Complex CRM workflows: 3-4 weeks. We provide exact timeline after process audit."}},{"@type":"Question","name":"Will AI replace my sales team?","acceptedAnswer":{"@type":"Answer","text":"No — AI handles instant response, qualification, and booking. Your team closes warm leads. We design human handoff points for complex conversations."}},{"@type":"Question","name":"What if the AI makes mistakes?","acceptedAnswer":{"@type":"Answer","text":"We build fallback logic: confidence thresholds, human escalation triggers, and audit logs. You review edge cases weekly during first month."}},{"@type":"Question","name":"How much does AI automation cost?","acceptedAnswer":{"@type":"Answer","text":"Setup fee + monthly retainer based on workflows/agents. Typically ₹50K-₹2L setup + ₹25K-₹1L/month. ROI positive within 60 days for most clients."}}]}]}';

const faqSchemaString = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What AI platforms do you use?","acceptedAnswer":{"@type":"Answer","text":"We build on n8n for workflows, integrate with OpenAI/Claude for LLM agents, Vapi/Retell for voice, and connect to your CRM (GHL, HubSpot, Pipedrive)."}},{"@type":"Question","name":"How long to deploy an AI agent?","acceptedAnswer":{"@type":"Answer","text":"Typical WhatsApp/voice agent: 2 weeks from audit to live. Complex CRM workflows: 3-4 weeks. We provide exact timeline after process audit."}},{"@type":"Question","name":"Will AI replace my sales team?","acceptedAnswer":{"@type":"Answer","text":"No — AI handles instant response, qualification, and booking. Your team closes warm leads. We design human handoff points for complex conversations."}},{"@type":"Question","name":"What if the AI makes mistakes?","acceptedAnswer":{"@type":"Answer","text":"We build fallback logic: confidence thresholds, human escalation triggers, and audit logs. You review edge cases weekly during first month."}},{"@type":"Question","name":"How much does AI automation cost?","acceptedAnswer":{"@type":"Answer","text":"Setup fee + monthly retainer based on workflows/agents. Typically ₹50K-₹2L setup + ₹25K-₹1L/month. ROI positive within 60 days for most clients."}}]}';

export default function AIAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: graphSchemaString }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaString }}
      />
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

      <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// FAQ</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Common Questions About Our <span className="text-red-italic">AI Automation</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, index) => (
              <details key={index} className="group bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-xl p-6">
                <summary className="flex items-center justify-between cursor-pointer list-none font-montserrat font-semibold text-[var(--rkd-fg)]">
                  {faq.question}
                  <svg className="w-5 h-5 text-[var(--rkd-primary)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-[var(--rkd-fg-muted)] leading-relaxed">{faq.answer}</div>
              </details>
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