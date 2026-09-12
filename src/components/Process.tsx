'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Lightbulb, Rocket, BarChart3, ArrowRight, Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Audit',
    description: 'We diagnose before we prescribe. Your funnel, your offer, your ops — we tear it down honestly before committing. If we can\'t win, we\'ll tell you.',
    icon: Search,
    details: ['Technical SEO Audit', 'Google Ads Account Review', 'GMB Profile Analysis', 'Competitor Gap Analysis', 'Website Speed & UX Audit', 'Current ROI Assessment'],
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'A plan mapped to your margin math. Full-funnel strategy built around where to compound, where to cut, and what to automate first.',
    icon: Lightbulb,
    details: ['Keyword & Intent Mapping', 'Campaign Architecture', 'Content Strategy', 'Budget Allocation Model', 'KPI Framework', 'Timeline & Milestones'],
  },
  {
    number: '03',
    title: 'Build',
    description: 'Week one, not month three. Campaigns go live. Automations ship. CRM pipelines wire up. You see movement in days, not quarters.',
    icon: Rocket,
    details: ['Technical SEO Implementation', 'Google Ads Campaign Build', 'GMB Profile Optimization', 'Website Development', 'Content Production', 'Tracking & Analytics Setup'],
  },
  {
    number: '04',
    title: 'Compound',
    description: 'Systems that widen your moat. Weekly optimisation loops. Monthly strategy reviews. AI agents that learn from every cycle. Growth that accelerates.',
    icon: BarChart3,
    details: ['Weekly Performance Reviews', 'Bid & Budget Optimization', 'A/B Testing Campaigns', 'Algorithm Update Response', 'Monthly Strategy Calls', 'Quarterly Roadmap Updates'],
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 md:py-32 lg:py-36 bg-[var(--rkd-bg)] grid-pattern">
      <div className="max-w-[80rem] mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24 max-w-3xl text-center mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label mb-4">HOW WE WORK</p>
          <h2 className="section-heading section-heading-h2 mb-6">
            From audit to results, in four moves.
          </h2>
          <p className="section-subhead mx-auto">
            No black boxes. No "we'll be in touch" and silence. Four steps between your inbound and a system that compounds.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-28">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="card-interactive relative group h-full flex flex-col" data-cursor-text="View Details">
                {/* Step Number */}
                <div className="mb-6">
                  <span className="font-montserrat font-black text-5xl md:text-6xl text-[var(--rkd-fg-subtle)] opacity-20">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 w-14 h-14 rounded-xl bg-[var(--rkd-primary)]/10 flex items-center justify-center group-hover:bg-[var(--rkd-primary)]/20 group-hover:scale-110 transition-all duration-500 ease-expo">
                  <step.icon className="w-7 h-7 text-[var(--rkd-primary)] group-hover:scale-110 transition-transform duration-500" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4 group-hover:text-[var(--rkd-primary)] transition-colors duration-300" style={{ fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)', lineHeight: '1.3' }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-body text-[var(--rkd-fg-muted)] mb-6 flex-1 leading-relaxed">
                  {step.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2 mb-6 flex-1">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-body-sm text-[var(--rkd-fg-muted)] group-hover:text-[var(--rkd-fg)] transition-colors duration-300">
                      <svg className="w-4 h-4 text-[var(--rkd-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div className="pt-4 border-t border-[var(--rkd-border)]">
                  <a
                    href={`/process#step-${step.number.toLowerCase()}`}
                    className="link-primary group"
                  >
                    View This Step
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Timeline Connector (Desktop) */}
        <div className="hidden lg:block mt-12 relative">
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-[1px] h-full max-h-[300px] bg-gradient-to-b from-[var(--rkd-primary)]/30 via-[var(--rkd-primary)]/10 to-transparent" />
        </div>

        {/* Operating Principles */}
        <motion.div
          className="mt-20 md:mt-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label mb-4 text-center">// OPERATING PRINCIPLES</p>
          <h3 className="section-heading section-heading-h2 text-center mb-12 md:mb-16">
            What We Refuse to <span className="text-red-italic">Compromise On</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Outcomes Over Outputs', desc: 'We measure revenue impact, not deliverables shipped. A campaign that books zero leads is failed work, regardless of how polished the reports look.' },
              { title: 'Systems Over Hustle', desc: 'Reliability comes from documented processes, not heroics. If a win can\'t be repeated next quarter, it wasn\'t really a win.' },
              { title: 'Radical Ownership', desc: 'Responsibility without excuses. Client numbers miss, we own it. A deadline slips, we own it. No finger-pointing at platforms or algorithms.' },
              { title: 'Transparent Partnership', desc: 'Honest communication on progress and ROI. If the campaign isn\'t working, you hear it from us before you notice it in the dashboard.' },
              { title: 'Local Intelligence', desc: 'We know Noida, Greater Noida, and NCR like locals — because we are. Every strategy accounts for ground reality, not just search volume.' },
              { title: 'Relentless Improvement', desc: 'Compounding systems that improve monthly. Every retrospective ships at least one process upgrade into the next sprint.' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card-base"
              >
                <h4 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-3" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)', lineHeight: '1.4' }}>
                  {value.title}
                </h4>
                <p className="text-body-sm text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.6' }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Process;