'use client';

import { motion } from 'framer-motion';
import { Users, Target, Shield, Zap, Lightbulb, Globe, CheckCircle } from 'lucide-react';

const team = [
  {
    name: 'Rohit Kumar',
    role: 'Founder & CEO',
    bio: 'Vision, strategy, and the growth systems behind every R.K Digital Media engagement. 8+ years driving digital growth for local businesses across NCR.',
    initials: 'RK',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of SEO & Content',
    bio: 'Technical SEO, content strategy, and local search domination. Turns search visibility into qualified leads for service businesses.',
    initials: 'PS',
  },
  {
    name: 'Amit Verma',
    role: 'Performance Marketing Lead',
    bio: 'Google Ads, Meta Ads, and conversion optimization. Specialist in account recovery and scaling campaigns to 8×+ ROAS.',
    initials: 'AV',
  },
  {
    name: 'Neha Singh',
    role: 'GMB & Local Marketing Specialist',
    bio: 'Google Business Profile optimization, review management, and local citation building. Maps pack domination for multi-location businesses.',
    initials: 'NS',
  },
];

const values = [
  { icon: Target, title: 'Local First', desc: 'We live and work in Greater Noida. Every strategy accounts for ground reality — not just search volume from a dashboard.' },
  { icon: Shield, title: 'Transparent by Default', desc: 'You see everything — rankings, spend, leads, conversions. No vanity metrics, no gatekeeping data.' },
  { icon: Lightbulb, title: 'Systems Over Hustle', desc: 'Documented processes, not heroics. If it can\'t be repeated next quarter, it wasn\'t a real win.' },
  { icon: Zap, title: 'Speed to Value', desc: 'First wins in 30 days. Audit → Strategy → Execution → Results. No 6-month retainers before you see movement.' },
  { icon: Globe, title: 'NCR Coverage', desc: 'Noida, Greater Noida, Ghaziabad, Faridabad, Gurugram, Delhi. We know every locality, every competitor, every nuance.' },
  { icon: Users, title: 'Partner, Not Vendor', desc: 'One accountability line. One revenue target. We succeed when you grow — not when we send an invoice.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-neogen-bg-secondary border-y border-neogen-border noise-overlay">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-number mb-4">// 04. About Us</p>
          <h2 className="section-title mb-6">
            Empowering Businesses with{' '}
            <span className="gradient-text-accent">Smart Digital Marketing</span>
          </h2>
          <p className="text-body-lg text-neogen-fg-muted">
            R.K Digital Media is a Greater Noida-based growth agency built to replace fragmented vendors with one system that ships — SEO, Google Ads, GMB, and web development engineered as a single revenue engine for ambitious local businesses.
          </p>
        </motion.div>

        {/* Origin Story */}
        <motion.div
          className="mb-20 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-number mb-4">// 01. Origin</p>
          <h3 className="font-mono text-heading-lg font-semibold text-neogen-fg mb-8 max-w-2xl">
            Why R.K Digital Media Exists.
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="space-y-6">
              <p className="text-body-lg text-neogen-fg-muted leading-relaxed">
                It started with a pattern I kept seeing: local businesses in Noida and Greater Noida working with five different vendors — an SEO freelancer, a Google Ads agency, a website developer, a social media manager — zero sync between them.
              </p>
              <p className="text-body-lg text-neogen-fg-muted leading-relaxed">
                The SEO person doesn't talk to the ads person. The website dev doesn't know about GMB. The business owner gets five reports that contradict each other. Nothing connects. Money leaks everywhere.
              </p>
              <p className="text-body-lg text-neogen-fg-muted leading-relaxed">
                The obvious answer wasn't another vendor in the stack — it was to build the partner that didn't exist yet. One team that owns SEO, Google Ads, GMB, and web development as a single integrated system. One accountability line, one revenue target, one operating cadence.
              </p>
              <p className="text-body-lg text-neogen-fg-muted leading-relaxed font-medium">
                That's the promise: scaling local businesses, daily.
              </p>
            </div>

            <div className="card-base relative overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-neogen-bg-secondary rounded-xl">
                    <div className="metric-value text-neogen-accent">8+</div>
                    <div className="metric-label">Years in Business</div>
                  </div>
                  <div className="p-4 bg-neogen-bg-secondary rounded-xl">
                    <div className="metric-value text-neogen-accent">1200+</div>
                    <div className="metric-label">Clients Served</div>
                  </div>
                  <div className="p-4 bg-neogen-bg-secondary rounded-xl">
                    <div className="metric-value text-neogen-accent">500+</div>
                    <div className="metric-label">Projects Delivered</div>
                  </div>
                  <div className="p-4 bg-neogen-bg-secondary rounded-xl">
                    <div className="metric-value text-neogen-accent">98%</div>
                    <div className="metric-label">Client Retention</div>
                  </div>
                </div>
                <div className="relative aspect-square bg-neogen-bg-secondary rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="font-mono text-caption text-neogen-fg-subtle uppercase tracking-widest mb-2">HQ</p>
                    <p className="font-mono text-heading-sm font-semibold text-neogen-fg">Greater Noida</p>
                    <p className="text-body-sm text-neogen-fg-muted mt-1">5th Ave, Gaur City 1, Sector 4</p>
                    <p className="text-body-sm text-neogen-fg-muted">Ghaziabad, UP 201016</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          className="mb-20 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-number mb-4">// 02. Principles</p>
          <h3 className="font-mono text-heading-lg font-semibold text-neogen-fg mb-8 max-w-2xl">
            6 Values, 0 Slogans.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card-base"
              >
                <div className="w-12 h-12 rounded-xl bg-neogen-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-neogen-accent" aria-hidden="true" />
                </div>
                <h4 className="font-mono text-heading-sm font-semibold text-neogen-fg mb-3">{value.title}</h4>
                <p className="text-body-sm text-neogen-fg-muted">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          className="mb-20 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-number mb-4">// 03. The Team</p>
          <h3 className="font-mono text-heading-lg font-semibold text-neogen-fg mb-8 max-w-2xl">
            Small Team, Big Throughput.
          </h3>
          <p className="text-body-lg text-neogen-fg-muted mb-12 max-w-2xl">
            Every member owns a craft end-to-end and ships directly to clients — no agency layers between you and the people doing the work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card-base"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-neogen-accent flex items-center justify-center flex-shrink-0">
                    <span className="font-mono font-bold text-neogen-fg text-lg">{member.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-mono text-heading-sm font-semibold text-neogen-fg">{member.name}</h4>
                    <p className="text-body-sm text-neogen-accent font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-body-sm text-neogen-fg-muted">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Force Multiplier */}
        <motion.div
          className="card-base relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-number mb-4">// 04. Force Multiplier</p>
          <h3 className="font-mono text-heading-lg font-semibold text-neogen-fg mb-8">
            Systems That Compound.
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="metric-value text-neogen-accent mb-1">50+</div>
              <div className="metric-label">Automated Workflows</div>
            </div>
            <div className="text-center border-x border-neogen-border md:border-x-0 md:border-y py-4 md:py-0">
              <div className="metric-value text-neogen-accent mb-1">30%</div>
              <div className="metric-label">Faster Delivery</div>
            </div>
            <div className="text-center">
              <div className="metric-value text-neogen-accent mb-1">100%</div>
              <div className="metric-label">Transparent Reporting</div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-body-sm text-neogen-fg-muted">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-neogen-accent flex-shrink-0" aria-hidden="true" />
              <span>Automated rank tracking & alerts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-neogen-accent flex-shrink-0" aria-hidden="true" />
              <span>Auto-reporting dashboards</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-neogen-accent flex-shrink-0" aria-hidden="true" />
              <span>Keyword opportunity alerts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-neogen-accent flex-shrink-0" aria-hidden="true" />
              <span>Competitor monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-neogen-accent flex-shrink-0" aria-hidden="true" />
              <span>GMB insights automation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-neogen-accent flex-shrink-0" aria-hidden="true" />
              <span>Ad performance anomaly detection</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}