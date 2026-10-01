type VisualProps={kind:'comparison'|'timeline'|'economics'|'combined'|'decision'};

const Card=({x,y,w,h,title,body,accent=false}:{x:number;y:number;w:number;h:number;title:string;body:string;accent?:boolean})=><g>
  <rect x={x} y={y} width={w} height={h} rx="14" fill={accent?'rgba(232,40,43,0.10)':'#141414'} stroke={accent?'#e8282b':'#2a2a2a'}/>
  <text x={x+18} y={y+28} fill="#f0eeee" fontSize="13" fontWeight="800" fontFamily="Montserrat,Arial">{title}</text>
  <text x={x+18} y={y+51} fill="#9a9a9a" fontSize="11" fontFamily="Outfit,Arial">{body}</text>
</g>;

const Header=({label,sub}:{label:string;sub:string})=><div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
  <span className="section-label">{label}</span>
  <span className="text-[10px] font-mono uppercase tracking-[0.1em] text-[var(--rkd-fg-muted)]">{sub}</span>
</div>;

export default function SeoVsPaidAdsVisual({kind}:VisualProps){
  if(kind==='comparison') return <div className="rounded-2xl border border-[var(--rkd-border)] bg-[#101010] p-5 md:p-7 overflow-hidden">
    <Header label="// CHANNEL COMPARISON" sub="Different mechanics. Different time horizons."/>
    <div className="grid gap-3 md:grid-cols-2">
      <div className="rounded-xl border border-[var(--rkd-primary)]/60 bg-[var(--rkd-primary)]/5 p-5">
        <div className="mb-4 flex items-center justify-between"><span className="font-montserrat font-extrabold text-lg text-[var(--rkd-fg)]">SEO</span><span className="font-mono text-[10px] uppercase tracking-widest text-[var(--rkd-primary)]">Earn</span></div>
        <div className="space-y-3 text-sm text-[var(--rkd-fg-muted)]"><div><b className="text-[var(--rkd-fg)]">Visibility</b><br/>Built through relevance, content and technical quality.</div><div><b className="text-[var(--rkd-fg)]">Time horizon</b><br/>Usually slower to establish, then potentially compounding.</div><div><b className="text-[var(--rkd-fg)]">Asset</b><br/>Organic visibility can continue after a single campaign period.</div></div>
      </div>
      <div className="rounded-xl border border-[var(--rkd-border)] bg-[#141414] p-5">
        <div className="mb-4 flex items-center justify-between"><span className="font-montserrat font-extrabold text-lg text-[var(--rkd-fg)]">PAID SEARCH</span><span className="font-mono text-[10px] uppercase tracking-widest text-[var(--rkd-fg-muted)]">Buy</span></div>
        <div className="space-y-3 text-sm text-[var(--rkd-fg-muted)]"><div><b className="text-[var(--rkd-fg)]">Visibility</b><br/>Access to eligible ad placements while the campaign is active.</div><div><b className="text-[var(--rkd-fg)]">Time horizon</b><br/>Can start generating traffic quickly when demand and targeting align.</div><div><b className="text-[var(--rkd-fg)]">Asset</b><br/>Campaign data and learnings, with ongoing spend required for traffic.</div></div>
      </div>
    </div>
  </div>;

  if(kind==='timeline') return <div className="rounded-2xl border border-[var(--rkd-border)] bg-[#101010] p-5 md:p-7 overflow-hidden">
    <Header label="// TIME HORIZON" sub="Illustrative operating pattern, not a forecast"/>
    <svg viewBox="0 0 800 250" className="w-full h-auto" role="img" aria-label="Illustrative SEO and paid search time horizon">
      <line x1="70" y1="205" x2="750" y2="205" stroke="#333" strokeWidth="2"/>
      <line x1="70" y1="65" x2="70" y2="205" stroke="#333" strokeWidth="2"/>
      <text x="70" y="235" fill="#777" fontSize="11" fontFamily="Outfit">START</text>
      <text x="365" y="235" fill="#777" fontSize="11" fontFamily="Outfit">BUILD / TEST</text>
      <text x="690" y="235" fill="#777" fontSize="11" fontFamily="Outfit">ONGOING</text>
      <path d="M70 92 C180 92 220 102 300 120 S470 154 750 165" fill="none" stroke="#e8282b" strokeWidth="5" strokeLinecap="round"/>
      <path d="M70 195 C180 190 250 168 330 140 S540 90 750 72" fill="none" stroke="#777" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="70" cy="92" r="7" fill="#e8282b"/><circle cx="750" cy="165" r="7" fill="#e8282b"/>
      <circle cx="70" cy="195" r="7" fill="#777"/><circle cx="750" cy="72" r="7" fill="#777"/>
      <text x="85" y="82" fill="#f0eeee" fontSize="13" fontWeight="700" fontFamily="Montserrat">PAID SEARCH</text>
      <text x="85" y="190" fill="#f0eeee" fontSize="13" fontWeight="700" fontFamily="Montserrat">SEO</text>
      <text x="520" y="188" fill="#999" fontSize="11" fontFamily="Outfit">Spend-dependent traffic</text>
      <text x="520" y="62" fill="#999" fontSize="11" fontFamily="Outfit">Compounding visibility potential</text>
    </svg>
  </div>;

  if(kind==='economics') return <div className="rounded-2xl border border-[var(--rkd-border)] bg-[#101010] p-5 md:p-7 overflow-hidden">
    <Header label="// ECONOMICS CHECK" sub="Clicks are an input, not the final KPI"/>
    <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
      {[
        ['01','Traffic','Clicks / visits'],
        ['02','Qualified lead','Intent + fit'],
        ['03','Sale','Lead-to-sale rate'],
        ['04','Gross profit','Margin per sale'],
        ['05','LTV','Customer value']
      ].map(([n,t,b],i)=><div key={n} className={`relative rounded-xl border p-4 ${i===4?'border-[var(--rkd-primary)] bg-[var(--rkd-primary)]/10':'border-[var(--rkd-border)] bg-[#141414]'}`}>
        <span className="font-mono text-[10px] text-[var(--rkd-primary)]">{n}</span><div className="mt-3 font-montserrat font-bold text-sm text-[var(--rkd-fg)]">{t}</div><div className="mt-1 text-xs leading-5 text-[var(--rkd-fg-muted)]">{b}</div>
      </div>)}
    </div>
    <p className="mt-5 border-t border-[var(--rkd-border)] pt-4 text-xs leading-6 text-[var(--rkd-fg-muted)]">Compare channels at the business-outcome level: <span className="text-[var(--rkd-fg)]">qualified leads → sales → profit</span>, not CPC alone.</p>
  </div>;

  if(kind==='combined') return <div className="rounded-2xl border border-[var(--rkd-border)] bg-[#101010] p-5 md:p-7 overflow-hidden">
    <Header label="// CONNECTED SYSTEM" sub="Two channels. One learning loop."/>
    <div className="grid items-center gap-3 md:grid-cols-[1fr_1.15fr_1fr]">
      <div className="rounded-xl border border-[var(--rkd-primary)]/60 bg-[var(--rkd-primary)]/5 p-5 text-center"><div className="font-montserrat font-extrabold text-base text-[var(--rkd-fg)]">PAID SEARCH</div><div className="mt-2 text-xs text-[var(--rkd-fg-muted)]">Test demand + capture intent</div></div>
      <div className="rounded-xl border border-[var(--rkd-primary)]/60 bg-[var(--rkd-primary)]/5 p-5 text-center">
        <div className="font-montserrat font-extrabold text-base text-[var(--rkd-fg)]">SEARCH INSIGHTS</div>
        <div className="mt-2 text-xs leading-5 text-[var(--rkd-fg-muted)]">Queries, topics, conversion signals and objections.</div>
      </div>
      <div className="rounded-xl border border-[var(--rkd-border)] bg-[#141414] p-5 text-center"><div className="font-montserrat font-extrabold text-base text-[var(--rkd-fg)]">SEO</div><div className="mt-2 text-xs text-[var(--rkd-fg-muted)]">Build durable visibility</div></div>
    </div>
    <div className="mt-4 flex flex-col items-center gap-2 text-center text-[11px] font-mono uppercase tracking-widest text-[var(--rkd-fg-muted)] sm:flex-row sm:justify-center">
      <span>paid data can inform content</span><span className="text-[var(--rkd-primary)]">↔</span><span>organic demand can inform campaigns</span>
    </div>
  </div>;

  return <div className="rounded-2xl border border-[var(--rkd-border)] bg-[#101010] p-5 md:p-7 overflow-hidden">
    <Header label="// DECISION FRAMEWORK" sub="Match the channel to the constraint"/>
    <div className="overflow-x-auto">
      <div className="min-w-[620px]">
        <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-[var(--rkd-border)] pb-3 font-mono text-[10px] uppercase tracking-widest text-[var(--rkd-fg-muted)]"><span>Business situation</span><span>Consider first</span><span>Why</span></div>
        {[
          ['Need demand now','Paid search','Faster testing and demand capture'],
          ['Stable demand + long horizon','SEO','Build organic visibility over time'],
          ['Need both speed + durability','Both','Separate systems, shared learning'],
          ['Unclear economics','Test first','Validate lead quality and unit economics']
        ].map(([a,b,c],i)=><div key={a} className="grid grid-cols-[1.2fr_1fr_1fr] items-center border-b border-[var(--rkd-border)] py-4 text-sm"><span className="text-[var(--rkd-fg)]">{a}</span><span className={`font-montserrat font-bold ${i===3?'text-[var(--rkd-primary)]':'text-[var(--rkd-fg)]'}`}>{b}</span><span className="text-[var(--rkd-fg-muted)]">{c}</span></div>)}
      </div>
    </div>
  </div>;
}
