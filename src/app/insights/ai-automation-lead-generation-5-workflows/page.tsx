import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation for Lead Generation: 5 Workflows That Run 24/7 | R.K Digital Media',
  description: 'WhatsApp AI agents, voice bots, CRM automation, n8n workflows. Complete setup guide with templates. Cut response time 80%, cost per lead 40%. AI automation services Greater Noida.',
  keywords: ['AI lead generation automation', 'WhatsApp AI agent setup', 'n8n workflow templates', 'CRM automation for small business', 'AI automation Greater Noida', 'WhatsApp business automation'],
  openGraph: {
    title: 'AI Automation for Lead Generation: 5 Workflows That Run 24/7 | R.K Digital Media',
    description: 'WhatsApp AI agents, voice bots, CRM automation, n8n workflows. Complete setup guide with templates. Cut response time 80%, cost per lead 40%.',
    type: 'article',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/insights/ai-automation-lead-generation-5-workflows',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Automation for Lead Generation | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation for Lead Generation: 5 Workflows That Run 24/7 | R.K Digital Media',
    description: 'WhatsApp AI agents, voice bots, CRM automation, n8n workflows. Complete setup guide with templates.',
    images: ['/og-image.jpg'],
  },
};

const sectionImages = {
  'WhatsApp AI Agent': '/whatsapp-agent.svg',
  'Voice Bot': '/voice-bot.svg',
  'CRM Automation': '/crm-automation.svg',
  'n8n Workflows': '/n8n-workflows.svg',
  'Human Handoff': '/human-handoff.svg',
};

export default function PostPage() {
  return (
    <>

      <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center py-24">
          <p className="section-label mb-4">// INSIGHTS</p>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            AI Automation for Lead Generation
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            5 workflows that run 24/7 to cut response time 80% and cost per lead 40%.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="prose lg:prose-xl max-w-none">
            <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              5 Powerful Workflows
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <div className="card-base p-6 hover:scale-105 transition-transform">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-3">WhatsApp AI Agent</h3>
                <p>
                  <img src="/images/whatsapp-agent.svg" alt="WhatsApp AI agent illustration" className="w-full mb-4 rounded-lg" />
                  Instant reply to inquiries, qualify leads via conversational forms,
                  book appointments directly, 24/7 coverage without human overhead.
                </p>
              </div>
              <div className="card-base p-6 hover:scale-105 transition-transform">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-3">Voice Bot</h3>
                <p>
                  <img src="/images/voice-bot.svg" alt="Voice bot illustration" className="w-full mb-4 rounded-lg" />
                  Handle inbound calls automatically, screen and route qualified leads,
                  collect information via voice, reduce missed call rate.
                </p>
              </div>
              <div className="card-base p-6 hover:scale-105 transition-transform">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-3">CRM Automation</h3>
                <p>
                  <img src="/images/crm-automation.svg" alt="CRM automation illustration" className="w-full mb-4 rounded-lg" />
                  Auto-create contacts from forms, assign leads to sales reps,
                  trigger follow-up sequences, track lead lifecycle stages.
                </p>
              </div>
              <div className="card-base p-6 hover:scale-105 transition-transform">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-3">n8n Workflows</h3>
                <p>
                  <img src="/images/n8n-workflows.svg" alt="n8n workflows illustration" className="w-full mb-4 rounded-lg" />
                  Lead routing and scoring, cross-platform integration, scheduled campaigns,
                  error handling and auditing.
                </p>
              </div>
              <div className="card-base p-6 hover:scale-105 transition-transform">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-3">Human Handoff</h3>
                <p>
                  <img src="/images/human-handoff.svg" alt="Human handoff illustration" className="w-full mb-4 rounded-lg" />
                  Seamless transfer to human agent, conversation context preserved,
                  audit logs for compliance, monthly optimization reviews.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--rkd-border)]">
              <p className="font-montserrat font-medium text-[var(--rkd-primary)] mb-2">
                80% Faster Response · 40% Lower Cost Per Lead · 24/7 Coverage
              </p>
              <a href="/contact" className="btn-primary inline-flex mt-4">
                Book Free Audit
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5v7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}