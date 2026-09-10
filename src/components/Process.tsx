'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Rocket, BarChart3, ArrowRight, Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'We start with a comprehensive audit of your current digital presence — SEO health, ad account structure, GMB profile, website performance, and competitor landscape. No assumptions, only data.',
    icon: Search,
    details: ['Technical SEO Audit', 'Google Ads Account Review', 'GMB Profile Analysis', 'Competitor Gap Analysis', 'Website Speed & UX Audit', 'Current ROI Assessment'],
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'Based on audit findings, we build a customized growth roadmap — keyword strategy, campaign structure, content calendar, and resource allocation. Every tactic tied to a revenue outcome.',
    icon: Lightbulb,
    details: ['Keyword & Intent Mapping', 'Campaign Architecture', 'Content Strategy', 'Budget Allocation Model', 'KPI Framework', 'Timeline & Milestones'],
  },
  {
    number: '03',
    title: 'Implementation & Execution',
    description: 'Our specialists execute the strategy across all channels — technical SEO fixes, ad campaign builds, GMB optimization, website development. Weekly sprints, daily monitoring.',
    icon: Rocket,
    details: ['Technical SEO Implementation', 'Google Ads Campaign Build', 'GMB Profile Optimization', 'Website Development', 'Content Production', 'Tracking & Analytics Setup'],
  },
  {
    number: '04',
    title: 'Monitoring & Optimization',
    description: 'We don\'t set and forget. Continuous optimization based on real performance data — bid adjustments, content updates, A/B tests, algorithm adaptation. Monthly strategy calls included.',
    icon: BarChart3,
    details: ['Weekly Performance Reviews', 'Bid & Budget Optimization', 'A/B Testing Campaigns', 'Algorithm Update Response', 'Monthly Strategy Calls', 'Quarterly Roadmap Updates'],
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-20 md:py-32 bg-neogen-bg noise-overlay grid-pattern">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24 max-w-3xl text-center mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-number mb-4">// 03. How We Work</p>
          <h2 className="section-title mb-6">
            From Audit to{' '}
            <span className="gradient-text-accent">Autopilot</span>
            {' '}in Four Moves
          </h2>
          <p className="text-body-lg text-neogen-fg-muted">
            No black boxes. No "we'll be in touch" and silence. Four steps between your inbound and a system that compounds.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                  <span className="font-mono font-bold text-5xl md:text-6xl text-neogen-accent/10 group-hover:text-neogen-accent/20 transition-colors duration-500">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 w-14 h-14 rounded-xl bg-neogen-accent/10 flex items-center justify-center group-hover:bg-neogen-accent/20 group-hover:scale-110 transition-all duration-500 ease-expo">
                  <step.icon className="w-7 h-7 text-neogen-accent group-hover:scale-110 transition-transform duration-500" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="font-mono text-heading-md font-semibold text-neogen-fg mb-4 group-hover:text-neogen-accent transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-body text-neogen-fg-muted mb-6 flex-1 leading-relaxed">
                  {step.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2 mb-6 flex-1">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-body-sm text-neogen-fg-muted group-hover:text-neogen-fg transition-colors duration-300">
                      <Check className="w-4 h-4 text-neogen-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div className="pt-4 border-t border-neogen-border">
                  <span className="link-primary group">
                    View This Step
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Timeline Connector (Desktop) */}
        <div className="hidden lg:block mt-12 relative">
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-[1px] h-full max-h-[300px] bg-gradient-to-b from-neogen-accent/30 via-neogen-accent/10 to-transparent" />
        </div>

        {/* Values */}
        <motion.div
          className="mt-20 md:mt-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-number mb-4 text-center">// 04. Operating Principles</p>
          <h3 className="section-title text-center mb-12 md:mb-16">
            What We Refuse to{' '}
            <span className="gradient-text-accent">Compromise On</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { number: '// 01', title: 'Outcomes Over Outputs', desc: 'We measure revenue impact, not deliverables shipped. A campaign that books zero leads is failed work, regardless of how polished the reports look.' },
              { number: '// 02', title: 'Systems Over Hustle', desc: 'Reliability comes from documented processes, not heroics. If a win can\'t be repeated next quarter, it wasn\'t really a win.' },
              { number: '// 03', title: 'Radical Ownership', desc: 'Responsibility without excuses. Client numbers miss, we own it. A deadline slips, we own it. No finger-pointing at platforms or algorithms.' },
              { number: '// 04', title: 'Transparent Partnership', desc: 'Honest communication on progress and ROI. If the campaign isn\'t working, you hear it from us before you notice it in the dashboard.' },
              { number: '// 05', title: 'Local Intelligence', desc: 'We know Noida, Greater Noida, and NCR like locals — because we are. Every strategy accounts for ground reality, not just search volume.' },
              { number: '// 06', title: 'Relentless Improvement', desc: 'Compounding systems that improve monthly. Every retrospective ships at least one process upgrade into the next sprint.' },
            ].map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card-base"
              >
                <p className="font-mono text-caption text-neogen-accent mb-2">{value.number}</p>
                <h4 className="font-mono text-heading-sm font-semibold text-neogen-fg mb-3">{value.title}</h4>
                <p className="text-body-sm text-neogen-fg-muted">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}