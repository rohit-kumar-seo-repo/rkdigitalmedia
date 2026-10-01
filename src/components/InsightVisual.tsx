import React from 'react';

type Kind = 'local' | 'automation' | 'gbp' | 'expert' | 'campaigns' | 'suspension';
type Variant = 1 | 2 | 3;

const meta: Record<Kind, { label: string; titles: [string,string,string] }> = {
  local: { label: 'LOCAL SEARCH SYSTEM', titles: ['Local visibility stack', 'Map Pack signal model', 'Local SEO execution path'] },
  automation: { label: 'LEAD AUTOMATION SYSTEM', titles: ['Lead-to-CRM pipeline', 'Qualification decision tree', 'Follow-up + human handoff'] },
  gbp: { label: 'GOOGLE BUSINESS PROFILE', titles: ['Profile optimization anatomy', 'Reputation loop', 'Visibility → lead measurement'] },
  expert: { label: 'GOOGLE ADS MANAGEMENT', titles: ['Account control architecture', 'Search-term control loop', 'Tracking → optimization loop'] },
  campaigns: { label: 'GOOGLE ADS CAMPAIGN TYPES', titles: ['Campaign formats by job', 'Customer journey → campaign'] },
  suspension: { label: 'SUSPENSION RECOVERY', titles: ['Notice → diagnosis', 'Account + website audit', 'Remediation → appeal'] },
};

const Box = ({ x, y, w, h, title, body, accent = false }: { x:number;y:number;w:number;h:number;title:string;body?:string;accent?:boolean }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="12" fill={accent ? 'rgba(232,40,43,0.10)' : '#151515'} stroke={accent ? '#e8282b' : '#2b2b2b'} />
    <text x={x+14} y={y+23} fill="#f0eeee" fontSize="12" fontWeight="800" fontFamily="Montserrat,Arial">{title}</text>
    {body && <text x={x+14} y={y+43} fill="#999" fontSize="10" fontFamily="Outfit,Arial">{body}</text>}
  </g>
);

const Arrow = ({ x1, y1, x2, y2 }: {x1:number;y1:number;x2:number;y2:number}) => (
  <path d={`M${x1} ${y1} L${x2} ${y2}`} stroke="#e8282b" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
);

function LocalVisual({ variant }: { variant: Variant }) {
  if (variant === 1) return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Local SEO visibility stack">
    <defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#e8282b"/></marker></defs>
    <Box x={28} y={42} w={205} h={74} title="BUSINESS" body="Offer · service area · location" accent />
    <Box x={278} y={42} w={205} h={74} title="GBP" body="Category · services · reviews" />
    <Box x={528} y={42} w={205} h={74} title="WEBSITE" body="Relevance · local pages · proof" />
    <Arrow x1={233} y1={79} x2={278} y2={79}/><Arrow x1={483} y1={79} x2={528} y2={79}/>
    <Box x={153} y={174} w={205} h={74} title="LOCAL SIGNALS" body="Citations · links · mentions" />
    <Box x={403} y={174} w={205} h={74} title="CUSTOMER ACTION" body="Call · visit · enquiry" accent />
    <Arrow x1={380} y1={116} x2={255} y2={174}/><Arrow x1={630} y1={116} x2={505} y2={174}/><Arrow x1={358} y1={211} x2={403} y2={211}/>
  </svg>;

  if (variant === 2) return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Map Pack signal model">
    <defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#e8282b"/></marker></defs>
    <text x="28" y="28" fill="#777" fontSize="10" fontFamily="monospace">GOOGLE MAPS / LOCAL RESULTS</text>
    {[0,1,2].map(i=><g key={i}><rect x={28+i*245} y="52" width="220" height="76" rx="12" fill={i===0?'rgba(232,40,43,0.10)':'#151515'} stroke={i===0?'#e8282b':'#2b2b2b'}/><text x={46+i*245} y="77" fill="#f0eeee" fontSize="12" fontWeight="800" fontFamily="Montserrat,Arial">{`BUSINESS 0${i+1}`}</text><text x={46+i*245} y="99" fill="#999" fontSize="10" fontFamily="Outfit,Arial">{i===0?'Relevance + proximity + prominence':'Competing local result'}</text></g>)}
    <Box x={28} y={164} w={160} h={72} title="RELEVANCE" body="Category + service" />
    <Box x={208} y={164} w={160} h={72} title="DISTANCE" body="Searcher ↔ business" />
    <Box x={388} y={164} w={160} h={72} title="PROMINENCE" body="Reviews + authority" />
    <Box x={568} y={164} w={164} h={72} title="CONSISTENCY" body="Business data" accent />
    <text x="28" y="270" fill="#999" fontSize="11" fontFamily="Outfit,Arial">No single profile field controls ranking; the signals work as a system.</text>
  </svg>;

  return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Local SEO execution path">
    <defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#e8282b"/></marker></defs>
    {[
      ['01','AUDIT','Find gaps'],['02','OPTIMIZE','Fix core signals'],['03','PUBLISH','Build relevance'],['04','EARN','Reviews + links'],['05','MEASURE','Leads + calls']
    ].map(([n,t,b],i)=><g key={n}><rect x={20+i*147} y="72" width="125" height="105" rx="12" fill={i===4?'rgba(232,40,43,0.10)':'#151515'} stroke={i===4?'#e8282b':'#2b2b2b'}/><text x={34+i*147} y="94" fill="#e8282b" fontSize="10" fontFamily="monospace">{n}</text><text x={34+i*147} y="122" fill="#f0eeee" fontSize="12" fontWeight="800" fontFamily="Montserrat,Arial">{t}</text><text x={34+i*147} y="147" fill="#999" fontSize="10" fontFamily="Outfit,Arial">{b}</text>{i<4&&<Arrow x1={145+i*147} y1={125} x2={165+i*147} y2={125}/>}</g>)}
    <text x="20" y="220" fill="#777" fontSize="10" fontFamily="monospace">90-DAY OPERATING LOOP</text>
    <text x="20" y="245" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Prioritize the bottleneck first, then measure business outcomes before adding more activity.</text>
  </svg>;
}

function AutomationVisual({ variant }: { variant: Variant }) {
  if (variant === 1) return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Lead automation pipeline">
    <defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#e8282b"/></marker></defs>
    {['LEAD','CAPTURE','QUALIFY','CRM','FOLLOW-UP','HUMAN'].map((t,i)=><g key={t}><rect x={15+i*124} y="92" width="105" height="76" rx="12" fill={i===5?'rgba(232,40,43,0.10)':'#151515'} stroke={i===5?'#e8282b':'#2b2b2b'}/><text x={30+i*124} y="121" fill="#e8282b" fontSize="10" fontFamily="monospace">{String(i+1).padStart(2,'0')}</text><text x={30+i*124} y="146" fill="#f0eeee" fontSize="12" fontWeight="800" fontFamily="Montserrat,Arial">{t}</text>{i<5&&<Arrow x1={120+i*124} y1={130} x2={139+i*124} y2={130}/>}</g>)}
    <text x="15" y="55" fill="#777" fontSize="10" fontFamily="monospace">AUTOMATE INFORMATION MOVEMENT — NOT EVERY DECISION</text>
    <text x="15" y="220" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Source + service + response status should travel with the lead.</text>
  </svg>;

  if (variant === 2) return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Lead qualification decision tree">
    <defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#e8282b"/></marker></defs>
    <Box x={285} y={28} w={190} h={58} title="NEW ENQUIRY" body="Form · WhatsApp · ad lead" accent />
    <Box x={285} y={120} w={190} h={58} title="IS THE FIT CLEAR?" body="Need · location · timing" />
    <Box x={70} y={220} w={190} h={58} title="NEEDS INFO" body="Ask → enrich → recheck" />
    <Box x={500} y={220} w={190} h={58} title="QUALIFIED" body="Route → owner / sales" accent />
    <Arrow x1={380} y1={86} x2={380} y2={120}/><Arrow x1={330} y1={178} x2={165} y2={220}/><Arrow x1={430} y1={178} x2={595} y2={220}/>
    <text x="275" y="200" fill="#777" fontSize="10" fontFamily="monospace">NO</text><text x="475" y="200" fill="#e8282b" fontSize="10" fontFamily="monospace">YES</text>
  </svg>;

  return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Automated follow-up and human handoff">
    <defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#e8282b"/></marker></defs>
    <Box x={24} y={95} w={145} h={70} title="DAY 0" body="Acknowledge + route" accent />
    <Box x={205} y={95} w={145} h={70} title="DAY 1" body="Useful answer" />
    <Box x={386} y={95} w={145} h={70} title="DAY 3" body="Proof / objection" />
    <Box x={567} y={95} w={165} h={70} title="STOP / HANDOFF" body="Reply · book · opt out" accent />
    <Arrow x1={169} y1={130} x2={205} y2={130}/><Arrow x1={350} y1={130} x2={386} y2={130}/><Arrow x1={531} y1={130} x2={567} y2={130}/>
    <text x="24" y="62" fill="#777" fontSize="10" fontFamily="monospace">FOLLOW-UP SHOULD HAVE EXIT CONDITIONS</text>
    <text x="24" y="220" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Stop automation when a human conversation starts or the prospect asks not to be contacted.</text>
  </svg>;
}

function GbpVisual({ variant }: { variant: Variant }) {
  if (variant === 1) return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Google Business Profile optimization anatomy">
    <Box x={25} y={45} w={220} h={190} title="PROFILE CORE" body="Name · category · hours" accent />
    <Box x={270} y={45} w={220} h={190} title="RELEVANCE" body="Services · products · website" />
    <Box x={515} y={45} w={220} h={190} title="TRUST" body="Reviews · photos · consistency" />
    <text x="45" y="130" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Accurate</text><text x="45" y="155" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Complete</text><text x="45" y="180" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Eligible</text>
    <text x="290" y="130" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Useful</text><text x="290" y="155" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Specific</text><text x="290" y="180" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Consistent</text>
    <text x="535" y="130" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Genuine</text><text x="535" y="155" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Recent</text><text x="535" y="180" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Helpful</text>
    <text x="25" y="268" fill="#777" fontSize="10" fontFamily="monospace">OPTIMIZATION ≠ KEYWORD STUFFING</text>
  </svg>;

  if (variant === 2) return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Google Business Profile reputation loop">
    <defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#e8282b"/></marker></defs>
    <Box x={285} y={25} w={190} h={58} title="REAL CUSTOMER" body="Completed service" accent />
    <Box x={285} y={122} w={190} h={58} title="HONEST REVIEW" body="Experience + detail" />
    <Box x={70} y={215} w={190} h={58} title="RESPOND" body="Useful customer service" />
    <Box x={500} y={215} w={190} h={58} title="LEARN" body="Fix recurring issues" accent />
    <Arrow x1={380} y1={83} x2={380} y2={122}/><Arrow x1={330} y1={180} x2={165} y2={215}/><Arrow x1={430} y1={180} x2={595} y2={215}/>
    <path d="M165 215 C165 180 250 175 285 55" fill="none" stroke="#555" strokeWidth="1.5" strokeDasharray="5 5"/>
    <path d="M595 215 C595 180 510 175 475 55" fill="none" stroke="#555" strokeWidth="1.5" strokeDasharray="5 5"/>
  </svg>;

  return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Google Business Profile visibility to lead measurement">
    <defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#e8282b"/></marker></defs>
    <Box x={30} y={80} w={160} h={80} title="VISIBILITY" body="Search / Maps" />
    <Box x={215} y={80} w={160} h={80} title="ACTION" body="Call / website / directions" />
    <Box x={400} y={80} w={160} h={80} title="QUALIFIED" body="Real enquiry" />
    <Box x={585} y={80} w={145} h={80} title="CUSTOMER" body="Sale / booking" accent />
    <Arrow x1={190} y1={120} x2={215} y2={120}/><Arrow x1={375} y1={120} x2={400} y2={120}/><Arrow x1={560} y1={120} x2={585} y2={120}/>
    <text x="30" y="210" fill="#777" fontSize="10" fontFamily="monospace">MEASURE THE BUSINESS OUTCOME</text>
    <text x="30" y="238" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Impressions are a visibility signal; calls and qualified enquiries are closer to commercial value.</text>
  </svg>;
}

function ExpertVisual({ variant }: { variant: Variant }) {
  if (variant === 1) return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Google Ads account control architecture">
    <Box x={25} y={50} w={155} h={75} title="BUSINESS" body="Offer · margin · capacity" accent />
    <Box x={210} y={50} w={155} h={75} title="INTENT" body="Queries · geography" />
    <Box x={395} y={50} w={155} h={75} title="CAMPAIGNS" body="Structure · budget" />
    <Box x={580} y={50} w={155} h={75} title="ADS" body="Message · relevance" />
    <Box x={210} y={165} w={155} h={75} title="LANDING PAGE" body="Offer · proof · CTA" />
    <Box x={395} y={165} w={155} h={75} title="TRACKING" body="Calls · forms · sales" accent />
    <Arrow x1={180} y1={88} x2={210} y2={88}/><Arrow x1={365} y1={88} x2={395} y2={88}/><Arrow x1={550} y1={88} x2={580} y2={88}/><Arrow x1={472} y1={125} x2={288} y2={165}/><Arrow x1={365} y1={202} x2={395} y2={202}/>
  </svg>;

  if (variant === 2) return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Google Ads search term control loop">
    <Box x={25} y={95} w={155} h={75} title="KEYWORDS" body="What you target" />
    <Box x={210} y={95} w={155} h={75} title="SEARCH TERMS" body="What people asked" accent />
    <Box x={395} y={95} w={155} h={75} title="DECISIONS" body="Keep · exclude · split" />
    <Box x={580} y={95} w={155} h={75} title="BUDGET" body="Reallocate" />
    <Arrow x1={180} y1={132} x2={210} y2={132}/><Arrow x1={365} y1={132} x2={395} y2={132}/><Arrow x1={550} y1={132} x2={580} y2={132}/>
    <path d="M658 170 C658 245 100 245 100 170" fill="none" stroke="#555" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrow)"/>
    <text x="25" y="55" fill="#777" fontSize="10" fontFamily="monospace">THE SEARCH-TERM REPORT IS A CONTROL SURFACE</text>
    <text x="25" y="220" fill="#999" fontSize="11" fontFamily="Outfit,Arial">It exposes real demand, wasted intent and opportunities your original keyword list may miss.</text>
  </svg>;

  return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Google Ads tracking and optimization loop">
    <Box x={30} y={55} w={160} h={75} title="CLICK" body="Traffic" />
    <Box x={215} y={55} w={160} h={75} title="CONVERSION" body="Call / form / sale" />
    <Box x={400} y={55} w={160} h={75} title="QUALIFIED" body="CRM outcome" accent />
    <Box x={585} y={55} w={145} h={75} title="DECISION" body="Scale / fix / test" />
    <Arrow x1={190} y1={92} x2={215} y2={92}/><Arrow x1={375} y1={92} x2={400} y2={92}/><Arrow x1={560} y1={92} x2={585} y2={92}/>
    <path d="M657 130 C657 205 105 205 105 130" fill="none" stroke="#e8282b" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrow)"/>
    <text x="30" y="245" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Optimize for the outcome the business actually values, not the easiest metric to report.</text>
  </svg>;
}

function CampaignVisual({ variant }: { variant: Variant }) {
  if (variant === 1) return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Google Ads campaign formats by job">
    {[
      ['SEARCH','Active intent','Queries'],['SHOPPING','Product demand','Feed'],['P MAX','Cross-surface','Conversion data'],['DISPLAY','Awareness / remarketing','Audience'],['VIDEO','Discovery','Creative']
    ].map(([a,b,c],i)=><g key={a}><rect x={15+(i%3)*250} y={35+Math.floor(i/3)*115} width="225" height="88" rx="12" fill={i===0?'rgba(232,40,43,0.10)':'#151515'} stroke={i===0?'#e8282b':'#2b2b2b'}/><text x={31+(i%3)*250} y={62+Math.floor(i/3)*115} fill="#f0eeee" fontSize="12" fontWeight="800" fontFamily="Montserrat,Arial">{a}</text><text x={31+(i%3)*250} y={85+Math.floor(i/3)*115} fill="#e8282b" fontSize="10" fontFamily="monospace">{b}</text><text x={31+(i%3)*250} y={105+Math.floor(i/3)*115} fill="#999" fontSize="10" fontFamily="Outfit,Arial">{c}</text></g>)}
    <text x="15" y="275" fill="#777" fontSize="10" fontFamily="monospace">CHOOSE THE INVENTORY THAT MATCHES THE JOB</text>
  </svg>;

  return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Customer journey to campaign mapping">
    <Box x={30} y={80} w={160} h={85} title="NEED NOW" body="Search" accent />
    <Box x={215} y={80} w={160} h={85} title="COMPARE" body="Shopping / research" />
    <Box x={400} y={80} w={160} h={85} title="DISCOVER" body="Video / Demand Gen" />
    <Box x={585} y={80} w={145} h={85} title="RETURN" body="Remarketing" />
    <Arrow x1={190} y1={122} x2={215} y2={122}/><Arrow x1={375} y1={122} x2={400} y2={122}/><Arrow x1={560} y1={122} x2={585} y2={122}/>
    <text x="30" y="55" fill="#777" fontSize="10" fontFamily="monospace">CUSTOMER JOURNEY</text>
    <text x="30" y="215" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Campaign selection follows intent, inventory and available conversion signals.</text>
  </svg>;
}

function SuspensionVisual({ variant }: { variant: Variant }) {
  if (variant === 1) return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Google Ads suspension diagnosis">
    <Box x={270} y={28} w={220} h={58} title="SUSPENSION NOTICE" body="Policy named by Google" accent />
    <Box x={50} y={125} w={190} h={70} title="IDENTITY / BILLING" body="Business + payments" />
    <Box x={285} y={125} w={190} h={70} title="ACCOUNT" body="Access + linked accounts" />
    <Box x={520} y={125} w={190} h={70} title="WEBSITE" body="Offer + trust + claims" />
    <Arrow x1={350} y1={86} x2={145} y2={125}/><Arrow x1={380} y1={86} x2={380} y2={125}/><Arrow x1={410} y1={86} x2={615} y2={125}/>
    <text x="50" y="245" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Diagnose the named policy first; do not change unrelated settings at random.</text>
  </svg>;

  if (variant === 2) return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Google Ads suspension audit layers">
    {[
      ['01','BUSINESS','Legal identity + contact'],
      ['02','BILLING','Payment profile + history'],
      ['03','ACCOUNT','Users + linked accounts'],
      ['04','WEBSITE','Claims + offer + destination'],
      ['05','EVIDENCE','What changed + why']
    ].map(([n,t,b],i)=><g key={n}><rect x={15+i*147} y="65" width="125" height="120" rx="12" fill={i===4?'rgba(232,40,43,0.10)':'#151515'} stroke={i===4?'#e8282b':'#2b2b2b'}/><text x={29+i*147} y="90" fill="#e8282b" fontSize="10" fontFamily="monospace">{n}</text><text x={29+i*147} y="118" fill="#f0eeee" fontSize="11" fontWeight="800" fontFamily="Montserrat,Arial">{t}</text><text x={29+i*147} y="145" fill="#999" fontSize="9" fontFamily="Outfit,Arial">{b}</text></g>)}
    <text x="15" y="225" fill="#777" fontSize="10" fontFamily="monospace">AUDIT BEFORE APPEAL</text>
    <text x="15" y="250" fill="#999" fontSize="11" fontFamily="Outfit,Arial">The appeal should describe verified remediation, not simply request another review.</text>
  </svg>;

  return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Google Ads suspension remediation and appeal">
    <Box x={25} y={85} w={145} h={80} title="PROBLEM" body="Policy gap found" />
    <Box x={205} y={85} w={145} h={80} title="REMEDIATION" body="Business / site fixed" accent />
    <Box x={385} y={85} w={145} h={80} title="EVIDENCE" body="Changes documented" />
    <Box x={565} y={85} w={165} h={80} title="FACTUAL APPEAL" body="Explain what changed" accent />
    <Arrow x1={170} y1={125} x2={205} y2={125}/><Arrow x1={350} y1={125} x2={385} y2={125}/><Arrow x1={530} y1={125} x2={565} y2={125}/>
    <text x="25" y="215" fill="#999" fontSize="11" fontFamily="Outfit,Arial">Avoid bypass accounts or repetitive appeals; resolve the underlying issue first.</text>
  </svg>;
}

export default function InsightVisual({ kind, variant = 1 }: { kind: Kind; variant?: Variant }) {
  const m = meta[kind];
  const Visual = kind === 'local' ? LocalVisual : kind === 'automation' ? AutomationVisual : kind === 'gbp' ? GbpVisual : kind === 'expert' ? ExpertVisual : kind === 'campaigns' ? CampaignVisual : SuspensionVisual;
  return (
    <div className="rounded-2xl border border-[var(--rkd-border)] bg-[#101010] p-5 md:p-7 overflow-hidden">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <span className="section-label">// {m.label}</span>
        <span className="text-[10px] font-mono uppercase tracking-[0.1em] text-[var(--rkd-fg-muted)]">Editorial visual {variant}/3</span>
      </div>
      <h3 className="font-montserrat font-extrabold text-[var(--rkd-fg)] text-xl md:text-2xl mb-5">{m.titles[variant-1]}</h3>
      <Visual variant={variant} />
    </div>
  );
}
