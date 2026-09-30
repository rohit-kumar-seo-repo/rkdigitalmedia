import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';

const services = [
  ['01','Performance Marketing','Meta Ads, Google Ads and PMax campaigns built around acquisition economics.','performance-marketing'],
  ['02','Google Ads','Search, Shopping, Performance Max, YouTube and account recovery.','google-ads'],
  ['03','SEO & Search Growth','Technical SEO, local SEO, content and search visibility systems.','seo'],
  ['04','Google Business Profile','GBP optimization, reviews, citations and local search growth.','gmb'],
  ['05','AI Automation','Lead handling, WhatsApp workflows, CRM automation and n8n systems.','ai-automation'],
  ['06','Web & Conversion','Fast, search-friendly websites and landing pages built to convert.','web-development'],
  ['07','Creative & Content','Creative direction, social content, video and campaign assets.','creative'],
  ['08','CRM & Growth Systems','Pipelines, reporting and automation that keep opportunities moving.','crm'],
];

const cases = [
  ['01','Home Services · Noida','Local SEO Domination','12×','ROAS','/case-studies/local-seo-domination'],
  ['02','E-commerce · Delhi NCR','Google Ads Suspension Recovery & Scale','8.5×','ROAS','/case-studies/google-ads-recovery'],
  ['03','Manufacturing · Greater Noida','B2B Lead Generation','1,200+','QUALIFIED LEADS','/case-studies/b2b-lead-gen'],
  ['04','Healthcare · NCR','Multi-Location Clinic Growth','9×','ROAS','/case-studies/healthcare-clinic'],
];

const reviews = [
  ['Mohini Bhardwaj','This digital marketing agency is the best agency I have seen ever. The work in this agency is best.'],
  ['Diksha Mangla','Awesome and fast work. One of the best Digital marketing agency must try.'],
  ['Sonia Kumari','R.K digital media...Best digital marketing agency..must visit.'],
  ['Deep Mala','My best experience with R.K Digital Media.'],
];

const posts = [
  ['GOOGLE ADS','Google Ads Suspension Recovery: Complete 2025 Guide','15 min','google-ads-suspension-recovery-complete-guide'],
  ['LOCAL SEO','Local SEO Strategy for Greater Noida: Rank Page 1 in 90 Days','18 min','local-seo-strategy-greater-noida'],
  ['AI AUTOMATION','AI Automation for Lead Generation: 5 Workflows That Run 24/7','14 min','ai-automation-lead-generation-5-workflows'],
];

function Reveal({children, delay=0}:{children:React.ReactNode;delay?:number}) {
  return <div className="rkd-reveal" style={{'--delay':`${delay}ms`} as React.CSSProperties}>{children}</div>;
}

function Ticker({reverse=false}:{reverse?:boolean}) {
  const items=['PERFORMANCE MARKETING','SEO & CONTENT','GOOGLE BUSINESS PROFILE','AI AUTOMATION','WEB DEVELOPMENT','CRM & GROWTH'];
  return <div className="rkd-ticker"><div className={`rkd-ticker-track ${reverse?'rkd-ticker-reverse':''}`}>{[...items,...items,...items].map((x,i)=><span key={i}>{x}<b>/</b></span>)}</div></div>;
}

export default function HomePage() {
  return (
    <main id="top" className="rkd-home">
      <section className="rkd-hero">
        <div className="rkd-hero-glow" />
        <div className="rkd-container rkd-hero-inner">
          <Reveal>
            <div className="rkd-kicker"><i /> SCALING BUSINESSES WORLDWIDE, DAILY.</div>
          </Reveal>
          <div className="rkd-hero-grid">
            <Reveal delay={80}>
              <h1>Digital growth.<br /><em>Built to compound.</em></h1>
            </Reveal>
            <Reveal delay={160}>
              <div className="rkd-hero-copy">
                <p>One partner for SEO, Google Ads, Google Business Profile, web development, creative and automation — engineered around measurable business growth.</p>
                <div className="rkd-actions">
                  <Link href="/contact" className="rkd-btn-primary">Book a Strategy Call <ArrowRight size={16}/></Link>
                  <Link href="/case-studies" className="rkd-text-link">See Our Work <ArrowUpRight size={15}/></Link>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={240}>
            <div className="rkd-stats">
              {[
                ['500+','PROJECTS DELIVERED'],
                ['10+','YEARS EXPERIENCE'],
                ['5.0','GOOGLE RATING'],
                ['NCR','LOCAL GROWTH FOCUS'],
              ].map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <Ticker />
      <Ticker reverse />

      <section className="rkd-section">
        <div className="rkd-container">
          <Reveal><div className="rkd-kicker">// PROOF, NOT PROMISES</div></Reveal>
          <div className="rkd-section-head">
            <Reveal><h2>Results that speak<br /><em>for themselves.</em></h2></Reveal>
            <Reveal delay={100}><p>Campaigns, builds and growth systems designed around measurable outcomes — not activity for activity’s sake.</p></Reveal>
          </div>
          <div className="rkd-case-list">
            {cases.map(([n,sector,title,metric,label,href],i)=>
              <Reveal key={n} delay={i*60}>
                <Link href={href} className="rkd-case-row">
                  <span className="rkd-number">{n}</span>
                  <div className="rkd-case-main"><small>{sector}</small><h3>{title}</h3><span className="rkd-arrow-link">Read case study <ArrowUpRight size={15}/></span></div>
                  <div className="rkd-case-metric"><strong>{metric}</strong><small>{label}</small></div>
                </Link>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="rkd-section rkd-dark-section">
        <div className="rkd-container">
          <Reveal><div className="rkd-kicker">// TRUSTED BY BUSINESSES</div></Reveal>
          <div className="rkd-section-head">
            <Reveal><h2>Across industries.<br /><em>Across markets.</em></h2></Reveal>
            <Reveal delay={100}><p>Businesses we have worked with across SEO, paid acquisition, websites, local search and growth systems.</p></Reveal>
          </div>
          <div className="rkd-client-grid">
            {['X2 Nutrition Zone','La Hault Hotel','Nail Nagri','SK Taxi','Muscle Inventory','Sturdy Bulls','Delsi Chews','Centre for Governance','Automates Interior','Modern Dental','Faber Kerala','Best Homes'].map(x=><div key={x}>{x}</div>)}
          </div>
        </div>
      </section>

      <section className="rkd-section">
        <div className="rkd-container">
          <Reveal><div className="rkd-kicker">// WHAT WE BUILD</div></Reveal>
          <div className="rkd-section-head">
            <Reveal><h2>Every service is a<br /><em>growth system.</em></h2></Reveal>
            <Reveal delay={100}><p>Strategy, execution, measurement and optimization in one operating system — built around what the business actually needs.</p></Reveal>
          </div>
          <div className="rkd-service-grid">
            {services.map(([n,title,desc,slug])=>
              <Link key={slug} href={`/services/${slug}`} className="rkd-service">
                <div className="rkd-service-top"><span>{n}</span><ArrowUpRight size={18}/></div>
                <h3>{title}</h3><p>{desc}</p>
                <span className="rkd-service-line" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="rkd-section rkd-dark-section">
        <div className="rkd-container">
          <Reveal><div className="rkd-kicker">// HOW WE WORK</div></Reveal>
          <Reveal><h2 className="rkd-wide-heading">From audit to<br /><em>compounding growth.</em></h2></Reveal>
          <div className="rkd-process">
            {[
              ['01','Audit','We diagnose before we prescribe. Your funnel, offer, website and acquisition stack get a clear-eyed review.'],
              ['02','Strategy','A plan mapped to the business goal, economics and highest-leverage opportunities.'],
              ['03','Build','Campaigns, pages, content and systems go live with measurement built in.'],
              ['04','Compound','Continuous optimization turns the initial system into a stronger growth engine.'],
            ].map(([n,t,d])=><Reveal key={n}><div className="rkd-process-card"><span>{n}</span><h3>{t}</h3><p>{d}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="rkd-section">
        <div className="rkd-container">
          <Reveal><div className="rkd-kicker">// WHAT CLIENTS SAY</div></Reveal>
          <div className="rkd-section-head">
            <Reveal><h2>Real feedback.<br /><em>No script.</em></h2></Reveal>
            <Reveal delay={100}><div className="rkd-rating"><strong>5.0</strong><span>GOOGLE RATING</span></div></Reveal>
          </div>
          <div className="rkd-review-grid">
            {reviews.map(([name,text],i)=><Reveal key={name} delay={i*50}><article><div className="rkd-stars">★★★★★</div><blockquote>“{text}”</blockquote><div className="rkd-reviewer"><b>{name[0]}</b><span>{name}<small>Google Review</small></span></div></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="rkd-section rkd-dark-section">
        <div className="rkd-container">
          <Reveal><div className="rkd-kicker">// LATEST THINKING</div></Reveal>
          <div className="rkd-section-head"><Reveal><h2>Writing for<br /><em>business owners.</em></h2></Reveal><Link href="/insights" className="rkd-text-link">All Insights <ArrowRight size={15}/></Link></div>
          <div className="rkd-posts">{posts.map(([cat,title,time,slug])=><Link key={slug} href={`/insights/${slug}`}><span>{cat}</span><h3>{title}</h3><small>{time} read</small><ArrowUpRight size={17}/></Link>)}</div>
        </div>
      </section>

      <section className="rkd-final">
        <div className="rkd-final-glow" />
        <div className="rkd-container">
          <Reveal><div className="rkd-kicker">// ACCEPTING CLIENTS · 2026</div></Reveal>
          <Reveal delay={100}><h2>Ready to build a<br /><em>stronger growth system?</em></h2></Reveal>
          <Reveal delay={180}><p>Bring us your current marketing stack. We’ll identify the biggest opportunities, what to fix first, and whether we’re the right team to help.</p><div className="rkd-actions"><Link href="/contact" className="rkd-btn-primary">Book Strategy Call <ArrowRight size={16}/></Link><Link href="/case-studies" className="rkd-text-link">See Case Studies</Link></div><div className="rkd-trust"><span><Check size={13}/> Honest audit</span><span><Check size={13}/> No pitch deck</span><span><Check size={13}/> Practical next steps</span></div></Reveal>
        </div>
      </section>
    </main>
  );
}