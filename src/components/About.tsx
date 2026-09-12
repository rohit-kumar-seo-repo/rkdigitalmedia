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

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 lg:py-36 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)] noise-overlay">
      <div className="max-w-[80rem] mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label mb-4">// ABOUT US</p>
          <h2 className="section-heading section-heading-h2 mb-6">
            Empowering Businesses with <span className="text-red-italic">Smart Digital Marketing</span>
          </h2>
          <p className="section-subhead">
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
          <p className="section-label mb-4">// 01. ORIGIN</p>
          <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-8 max-w-2xl" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.25' }}>
            Why R.K Digital Media Exists.
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="space-y-6">
              <p className="text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed" style={{ lineHeight: '1.7' }}>
                It started with a pattern I kept seeing: local businesses in Noida and Greater Noida working with five different vendors — an SEO freelancer, a Google Ads agency, a website developer, a social media manager — zero sync between them.
              </p>
              <p className="text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed" style={{ lineHeight: '1.7' }}>
                The SEO person doesn't talk to the ads person. The website dev doesn't know about GMB. The business owner gets five reports that contradict each other. Nothing connects. Money leaks everywhere.
              </p>
              <p className="text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed" style={{ lineHeight: '1.7' }}>
                The obvious answer wasn't another vendor in the stack — it was to build the partner that didn't exist yet. One team that owns SEO, Google Ads, GMB, and web development as a single integrated system. One accountability line, one revenue target, one operating cadence.
              </p>
              <p className="text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed font-medium" style={{ lineHeight: '1.7' }}>
                That's the promise: scaling local businesses, daily.
              </p>
            </div>

            <div className="card-base relative overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-[var(--rkd-bg-secondary)] rounded-xl">
                    <div className="stat-value text-[var(--rkd-primary)]">8+</div>
                    <div className="stat-label">Years in Business</div>
                  </div>
                  <div className="p-4 bg-[var(--rkd-bg-secondary)] rounded-xl">
                    <div className="stat-value text-[var(--rkd-primary)]">1200+</div>
                    <div className="stat-label">Clients Served</div>
                  </div>
                  <div className="p-4 bg-[var(--rkd-bg-secondary)] rounded-xl">
                    <div className="stat-value text-[var(--rkd-primary)]">500+</div>
                    <div className="stat-label">Projects Delivered</div>
                  </div>
                  <div className="p-4 bg-[var(--rkd-bg-secondary)] rounded-xl">
                    <div className="stat-value text-[var(--rkd-primary)]">98%</div>
                    <div className="stat-label">Client Retention</div>
                  </div>
                </div>
                <div className="relative aspect-square bg-[var(--rkd-bg-secondary)] rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="font-mono text-meta text-[var(--rkd-fg-subtle)] uppercase tracking-widest mb-2">HQ</p>
                    <p className="font-montserrat font-semibold text-[var(--rkd-fg)]" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)', lineHeight: '1.4' }}>Greater Noida</p>
                    <p className="text-body-sm text-[var(--rkd-fg-muted)] mt-1">5th Ave, Gaur City 1, Sector 4</p>
                    <p className="text-body-sm text-[var(--rkd-fg-muted)]">Ghaziabad, UP 201016</p>
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
          <p className="section-label mb-4">// 02. PRINCIPLES</p>
          <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-8 max-w-2xl" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.25' }}>
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
                <div className="w-12 h-12 rounded-xl bg-[var(--rkd-primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--rkd-primary)]/20 transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-[var(--rkd-primary)]" aria-hidden="true" />
                </div>
                <h4 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-3" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)', lineHeight: '1.4' }}>
                  {value.title}
                </h4>
                <p className="text-body-sm text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.6' }}>{value.desc}</p>
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
          <p className="section-label mb-4">// 03. THE TEAM</p>
          <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-8 max-w-2xl" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.25' }}>
            Small Team, Big Throughput.
          </h3>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] mb-12 max-w-2xl" style={{ lineHeight: '1.7' }}>
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
                  <div className="w-14 h-14 rounded-xl bg-[var(--rkd-primary)] flex items-center justify-center flex-shrink-0">
                    <span className="font-montserrat font-bold text-[var(--rkd-fg)] text-lg">{member.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-[var(--rkd-fg)]" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)', lineHeight: '1.4' }}>{member.name}</h4>
                    <p className="text-body-sm text-[var(--rkd-primary)] font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-body-sm text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.6' }}>{member.bio}</p>
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
          <p className="section-label mb-4">// 04. FORCE MULTIPLIER</p>
          <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-8" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.25' }}>
            Systems That Compound.
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="stat-value text-[var(--rkd-primary)] mb-1">50+</div>
              <div className="stat-label">Automated Workflows</div>
            </div>
            <div className="text-center border-x border-[var(--rkd-border)] md:border-x-0 md:border-y py-4 md:py-0">
              <div className="stat-value text-[var(--rkd-primary)] mb-1">30%</div>
              <div className="stat-label">Faster Delivery</div>
            </div>
            <div className="text-center">
              <div className="stat-value text-[var(--rkd-primary)] mb-1">100%</div>
              <div className="stat-label">Transparent Reporting</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-body-sm text-[var(--rkd-fg-muted)]">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--rkd-primary)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
              <span>Automated rank tracking & alerts</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--rkd-primary)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
              <span>Auto-reporting dashboards</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--rkd-primary)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
              <span>Keyword opportunity alerts</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--rkd-primary)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
              <span>Competitor monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--rkd-primary)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
              <span>GMB insights automation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--rkd-primary)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
              <span>Ad performance anomaly detection</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;