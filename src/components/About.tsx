'use client';

import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const capabilities = [
  ['01', 'Google Ads', 'Search, Shopping, Performance Max and YouTube campaigns built around measurable demand.'],
  ['02', 'SEO', 'Technical SEO, content and search-intent strategy for organic growth.'],
  ['03', 'Google Business Profile', 'Profile optimisation, local visibility, services, reviews and location signals.'],
  ['04', 'Website Development', 'Fast, conversion-focused websites and landing pages with a strong technical foundation.'],
  ['05', 'Suspension Recovery', 'Account, website and policy diagnosis followed by a structured recovery process.'],
  ['06', 'AI Automation', 'Lead capture, qualification, routing, CRM and repetitive workflow automation.'],
];

const principles = [
  ['Evidence before promises', 'We separate documented results from targets, estimates and assumptions.'],
  ['One connected system', 'Ads, search, website, local visibility and conversion tracking should work together.'],
  ['Clear ownership', 'You should know what is being changed, why it is being changed and what will be measured.'],
  ['Useful work first', 'We prioritise changes that improve visibility, acquisition, conversion or operational efficiency.'],
];

const googleCredentials = [
  {
    title: 'AI-Powered Performance Ads Certification',
    issue: 'September 8, 2026',
    expiry: 'September 8, 2027',
    id: '193520213',
    image: '/images/google-ads-ai-performance.svg',
  },
  {
    title: 'Google Ads Display Certification',
    issue: 'September 26, 2026',
    expiry: 'September 26, 2027',
    id: '195278798',
    image: '/images/google-ads-display.svg',
  },
  {
    title: 'Google Ads Search Certification',
    issue: 'August 28, 2026',
    expiry: 'August 28, 2027',
    id: '192649932',
    image: '/images/google-ads-search.svg',
  },
];

const process = [
  ['01', 'Diagnose', 'Understand the business, market, existing assets and the actual constraint before recommending work.'],
  ['02', 'Prioritise', 'Separate high-impact fixes from nice-to-have activity and define what success will be measured against.'],
  ['03', 'Build', 'Execute across the relevant search, paid, website, local or automation layer.'],
  ['04', 'Learn', 'Review what changed, what the data says and what should happen next.'],
];

export function About() {
  return (
    <main className="rkd-about bg-[var(--rkd-bg)]">
      <section className="relative overflow-hidden border-b border-[var(--rkd-border)]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_72%_35%,rgba(232,40,43,0.13),transparent_34%)]" />
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 pt-20 md:pt-28 pb-20 md:pb-28 relative">
          <div className="flex items-center justify-between gap-6 mb-14">
            <p className="section-label">// ABOUT R.K DIGITAL MEDIA</p>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--rkd-fg-muted)]">NOIDA / NCR / INDIA</span>
          </div>
          <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-12 lg:gap-20 items-end">
            <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="hero-headline text-[var(--rkd-fg)]">
              One growth partner. <span className="text-red-italic">Fewer moving parts.</span>
            </motion.h1>
            <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.08}}>
              <p className="text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed max-w-xl">
                R.K Digital Media is a founder-led digital growth business based in Greater Noida. We bring paid acquisition, organic search, local visibility, websites and automation into one connected operating system.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link href="/contact" className="btn-primary group">Start a Conversation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                <Link href="/case-studies" className="btn-secondary">See the Work <ArrowUpRight className="w-4 h-4" /></Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-b border-[var(--rkd-border)] bg-[var(--rkd-card)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-10 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-[14px] border border-[var(--rkd-border)] bg-[radial-gradient(circle_at_50%_35%,rgba(232,40,43,0.24),transparent_38%),linear-gradient(145deg,#181818,#0d0d0d)] overflow-hidden flex items-end justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_45%,rgba(232,40,43,0.08))]" />
                <Image
                  src="/images/founder-rohit-kumar.webp"
                  alt="Rohit Kumar, Founder of R.K Digital Media"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-contain p-3 md:p-5"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 md:right-4 bg-[var(--rkd-primary)] text-white px-4 py-3 rounded-lg shadow-[0_10px_40px_rgba(232,40,43,0.25)]">
                <div className="font-mono text-[9px] uppercase tracking-widest">Credential</div>
                <div className="font-montserrat font-bold text-sm mt-1">Google Ads Certified</div>
              </div>
            </div>
            <div>
              <p className="section-label mb-4">// 01A. THE FOUNDER</p>
              <h2 className="section-heading section-heading-h2 mb-6">Built by <span className="text-red-italic">Rohit Kumar.</span></h2>
              <div className="space-y-5 text-[var(--rkd-fg-muted)] leading-relaxed max-w-2xl">
                <p>Rohit Kumar is the founder of R.K Digital Media and works directly with business owners on SEO, Google Ads, Google Business Profile optimisation, website development and advertising recovery.</p>
                <p>He is a Google-certified digital marketing professional and consultant with current Google Ads certifications and 8+ years of hands-on experience across search, paid acquisition and local visibility. The business also works with clients outside India, while its primary local market remains Greater Noida, Noida and Delhi NCR.</p>
                <p>The working model is deliberately direct: understand the business first, identify the constraint, execute the relevant work and measure what changed. No service is recommended simply because it is on a package list.</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-3 mt-8">
                {[['8+','Years experience'],['1,200+','Clients'],['500+','Projects'],['98%','Client retention']].map(([value,label]) => <div key={label} className="border border-[var(--rkd-border)] rounded-lg p-4"><div className="font-montserrat font-black text-xl text-[var(--rkd-fg)]">{value}</div><div className="font-mono text-[9px] uppercase tracking-widest text-[var(--rkd-fg-muted)] mt-2">{label}</div></div>)}
              </div>
              <div className="mt-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-5">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--rkd-fg-muted)] mb-2">// GOOGLE CERTIFICATIONS</p>
                    <h3 className="font-montserrat font-bold text-lg text-[var(--rkd-fg)]">Google-certified professional.</h3>
                    <p className="text-sm text-[var(--rkd-fg-muted)] mt-2 max-w-xl">Current Google Ads certifications held by Rohit Kumar, with each credential linked to the Skillshop verification wallet.</p>
                  </div>
                  <a href="https://skillshop.credential.net/profile/rohitkumarseo848048/wallet" target="_blank" rel="noopener noreferrer" className="font-mono text-[9px] uppercase tracking-widest text-[var(--rkd-primary)] hover:text-white transition-colors whitespace-nowrap">Verify all credentials ↗</a>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {googleCredentials.map((credential) => (
                    <article key={credential.id} className="border border-[var(--rkd-border)] rounded-xl overflow-hidden bg-[var(--rkd-bg)] group">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-[var(--rkd-border)]">
                        <Image
                          src={credential.image}
                          alt={credential.title + ' certificate for Rohit Kumar'}
                          fill
                          sizes="(max-width: 768px) 92vw, (max-width: 1200px) 30vw, 380px"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="p-5">
                        <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--rkd-primary)]">Google Ads Certified</div>
                        <h4 className="font-montserrat font-bold text-sm leading-snug text-[var(--rkd-fg)] mt-2">{credential.title}</h4>
                        <div className="grid grid-cols-2 gap-3 mt-4">
                          <div><div className="font-mono text-[8px] uppercase tracking-widest text-[var(--rkd-fg-muted)]">Issued</div><div className="text-[11px] text-[var(--rkd-fg)] mt-1">{credential.issue}</div></div>
                          <div><div className="font-mono text-[8px] uppercase tracking-widest text-[var(--rkd-fg-muted)]">Expires</div><div className="text-[11px] text-[var(--rkd-fg)] mt-1">{credential.expiry}</div></div>
                        </div>
                        <div className="font-mono text-[8px] uppercase tracking-widest text-[var(--rkd-fg-muted)] mt-4">Credential ID <span className="text-[var(--rkd-fg)]">{credential.id}</span></div>
                        <a href="https://skillshop.credential.net/profile/rohitkumarseo848048/wallet" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[var(--rkd-fg)] hover:text-[var(--rkd-primary)] transition-colors">Verify Credential <ArrowUpRight className="w-3.5 h-3.5" /></a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--rkd-border)] bg-[var(--rkd-card)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4">
          {[
            ['10+', 'Years experience'],
            ['1,200+', 'Clients'],
            ['500+', 'Projects'],
            ['98%', 'Client retention'],
            ['NCR', 'Primary local market'],
            ['FOUNDER-LED', 'Direct accountability'],
          ].map(([value,label],i)=><div key={label} className={`py-7 md:py-9 pr-5 md:pr-8 ${i<3?'md:border-r border-[var(--rkd-border)]':''}`}><div className="font-montserrat font-black text-2xl md:text-3xl text-[var(--rkd-fg)]">{value}</div><div className="font-mono text-[9px] uppercase tracking-widest text-[var(--rkd-fg-muted)] mt-2">{label}</div></div>)}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-24">
            <div><p className="section-label mb-4">// 01. WHY WE EXIST</p><h2 className="section-heading section-heading-h2">The problem is rarely <span className="text-red-italic">one channel.</span></h2></div>
            <div className="space-y-6 text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed">
              <p>Businesses often end up with separate people for SEO, Google Ads, websites, local search and follow-up. Each person can do their job while the system still fails to produce a coherent acquisition path.</p>
              <p>Search traffic can land on a weak page. Paid campaigns can send expensive clicks to the wrong destination. A strong Google Business Profile can sit beside a website that does not convert. Leads can arrive without a reliable follow-up process.</p>
              <p>R.K Digital Media was built around the opposite model: diagnose the full journey, identify the constraint and bring the relevant parts together.</p>
              <p className="text-[var(--rkd-fg)] font-medium">The objective is not to sell every service. It is to use the right service for the problem.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 02. WHAT WE DO</p>
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20 mb-12">
            <h2 className="section-heading section-heading-h2">Six capabilities. <span className="text-red-italic">One system.</span></h2>
            <p className="text-[var(--rkd-fg-muted)] leading-relaxed max-w-2xl">The service mix is deliberately focused. Each capability exists because it can affect a different part of the acquisition or operational journey.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rkd-border)]">
            {capabilities.map(([n,title,text])=><Link href={`/services/${title==='Google Ads'?'google-ads':title==='SEO'?'seo':title==='Google Business Profile'?'gmb':title==='Website Development'?'web-development':title==='Suspension Recovery'?'google-ads-suspension-recovery':'ai-automation'}`} key={n} className="bg-[var(--rkd-bg-secondary)] p-7 md:p-9 group hover:bg-[var(--rkd-card)] transition-colors">
              <span className="font-mono text-xs text-[var(--rkd-primary)]">{n}</span>
              <h3 className="font-montserrat font-bold text-xl text-[var(--rkd-fg)] mt-6 mb-3 group-hover:text-[var(--rkd-primary)] transition-colors">{title}</h3>
              <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{text}</p>
              <ArrowUpRight className="w-4 h-4 mt-7 text-[var(--rkd-fg-muted)] group-hover:text-[var(--rkd-primary)] group-hover:translate-x-1 transition-all" />
            </Link>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 03. HOW WE WORK</p>
          <div className="grid lg:grid-cols-4 gap-6">
            {process.map(([n,title,text])=><div key={n} className="border-t border-[var(--rkd-border)] pt-6"><span className="font-mono text-xs text-[var(--rkd-primary)]">{n}</span><h3 className="font-montserrat font-bold text-xl text-[var(--rkd-fg)] mt-5 mb-3">{title}</h3><p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 04. OPERATING PRINCIPLES</p>
          <div className="grid md:grid-cols-2 gap-px bg-[var(--rkd-border)]">
            {principles.map(([title,text])=><div key={title} className="bg-[var(--rkd-bg-secondary)] p-7 md:p-10"><div className="flex gap-4"><Check className="w-5 h-5 mt-1 text-[var(--rkd-primary)] shrink-0" /><div><h3 className="font-montserrat font-bold text-lg text-[var(--rkd-fg)] mb-2">{title}</h3><p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{text}</p></div></div></div>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-end">
            <div><p className="section-label mb-4">// 05. BASED IN GREATER NOIDA</p><h2 className="section-heading section-heading-h2">Local understanding. <span className="text-red-italic">Wider reach.</span></h2></div>
            <div className="space-y-5 text-[var(--rkd-fg-muted)] leading-relaxed">
              <p>Our primary market is Noida, Greater Noida, Ghaziabad and Delhi NCR, while the same systems can support businesses outside the region.</p>
              <p>For local businesses, that means strategy can account for service areas, location intent, Maps visibility and the competitive landscape around the customer.</p>
              <div className="flex flex-wrap gap-2 pt-2">{['Noida','Greater Noida','Ghaziabad','Delhi','Gurugram','Faridabad','India','Worldwide'].map(x=><span key={x} className="px-3 py-1.5 rounded-full border border-[var(--rkd-border)] font-mono text-[10px] uppercase tracking-wider text-[var(--rkd-fg-muted)]">{x}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6"><div className="max-w-4xl"><p className="section-label mb-5">// NEXT STEP</p><h2 className="section-heading section-heading-h2 mb-6">Let's start with the <span className="text-red-italic">actual problem.</span></h2><p className="text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed max-w-2xl mb-8">Tell us what is limiting growth right now. We’ll review the situation and explain what we would investigate first.</p><Link href="/contact" className="btn-primary group inline-flex">Talk to R.K Digital Media <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link></div></div>
      </section>
    </main>
  );
}

export default About;