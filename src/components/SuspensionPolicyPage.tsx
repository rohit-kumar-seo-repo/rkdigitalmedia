import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { SuspensionPolicy } from '@/data/suspension-policies';

export function SuspensionPolicyPage({ policy }: { policy: SuspensionPolicy }) {
  return (
    <main id="top">
      <section className="relative overflow-hidden bg-[var(--rkd-bg)] grid-pattern">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 pt-20 md:pt-28 pb-16 md:pb-24">
          <div className="text-xs text-[var(--rkd-fg-muted)] mb-10">Home / Services / Google Ads Suspension Recovery / {policy.name}</div>
          <p className="section-label mb-5">// GOOGLE ADS POLICY RECOVERY</p>
          <div className="max-w-5xl">
            <h1 className="hero-headline text-[var(--rkd-fg)] mb-7">{policy.h1}</h1>
            <p className="hero-subheadline max-w-3xl">{policy.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link href="/services/google-ads-suspension-recovery" className="btn-primary group">Google Ads Suspension Recovery Service <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
              <Link href="/contact" className="btn-secondary">Request a Policy Review</Link>
              <a href={policy.googleUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">Read Google Policy <ArrowUpRight className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--rkd-border)] bg-[var(--rkd-card)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 grid md:grid-cols-3">
          {[
            ['POLICY', policy.name, ''],
            ['DIAGNOSE', 'Root-cause review before appeal', 'border-x md:border-x'],
            ['EVIDENCE', 'Corrections and documentation', ''],
          ].map(([value,label,extra]) => (
            <div key={value} className={`p-6 md:p-8 border-b md:border-b-0 border-[var(--rkd-border)] ${extra}`}>
              <div className="stat-value text-xl md:text-2xl">{value}</div><div className="stat-label mt-2">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 01. UNDERSTAND THE POLICY</p>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <h2 className="section-heading section-heading-h2">What a <span className="text-red-italic">{policy.name}</span> suspension can mean.</h2>
            <div><p className="text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed">{policy.explanation}</p><p className="text-[var(--rkd-fg-muted)] leading-relaxed mt-5">The suspension notice is the starting point, not the complete diagnosis. The review needs to establish which account, business, website, payment, identity or advertising signals are relevant to the specific case.</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 02. COMMON RISK AREAS</p>
          <h2 className="section-heading section-heading-h2 max-w-4xl mb-12">What we investigate <span className="text-red-italic">first.</span></h2>
          <div className="grid md:grid-cols-2 gap-px bg-[var(--rkd-border)]">
            {policy.riskAreas.map((item,index)=><article key={item} className="bg-[var(--rkd-bg-secondary)] p-7 md:p-9"><span className="font-mono text-xs text-[var(--rkd-primary)]">0{index+1}</span><h3 className="section-heading section-heading-h3 mt-5">{item}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 03. RECOVERY REVIEW</p>
          <h2 className="section-heading section-heading-h2 max-w-4xl mb-12">What we check before an <span className="text-red-italic">appeal.</span></h2>
          <div className="grid md:grid-cols-2 gap-5">{policy.checks.map(item=><div key={item} className="card-base p-6 md:p-8 flex gap-4"><CheckCircle2 className="w-5 h-5 shrink-0 text-[var(--rkd-primary)] mt-1"/><p className="text-[var(--rkd-fg-muted)] leading-relaxed">{item}</p></div>)}</div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 04. OUR PROCESS</p>
          <div className="grid md:grid-cols-4 gap-px bg-[var(--rkd-border)]">
            {[['01','Review','Understand the suspension notice, account history and business context.'],['02','Investigate','Check the policy-specific account, website and documentation signals.'],['03','Correct','Address genuine issues and organise supporting evidence.'],['04','Prepare','Build a factual recovery submission where an appeal is appropriate.']].map(([n,t,d])=><article key={n} className="bg-[var(--rkd-bg-secondary)] p-7"><span className="font-mono text-xs text-[var(--rkd-primary)]">{n}</span><h3 className="section-heading section-heading-h3 mt-5 mb-3">{t}</h3><p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// 05. DOCUMENTED CASES</p>
          <h2 className="section-heading section-heading-h2 max-w-4xl mb-5">Relevant recovery <span className="text-red-italic">experience.</span></h2>
          <p className="text-[var(--rkd-fg-muted)] max-w-3xl leading-relaxed mb-10">These examples come from the case-study library published on AdsSuspensionRecovery.com. They are used only where the documented facts are relevant to this policy area; they are not presented as proof that every suspension follows the same path.</p>
          {policy.caseStudies.length ? <div className="grid md:grid-cols-2 gap-5">{policy.caseStudies.map(c=><article key={c.title} className="card-base p-7 md:p-9"><p className="font-mono text-xs text-[var(--rkd-primary)] mb-4">// {c.policy}</p><h3 className="section-heading section-heading-h3 mb-4">{c.title}</h3><p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed mb-5">{c.text}</p><a href={c.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--rkd-fg)] hover:text-[var(--rkd-primary)] transition-colors">View documented case <ArrowUpRight className="w-4 h-4"/></a></article>)}</div> : <div className="card-base p-7 md:p-9 max-w-3xl"><p className="text-[var(--rkd-fg-muted)] leading-relaxed">We do not currently have a published case study on AdsSuspensionRecovery.com that directly documents this exact policy as the suspension reason. We keep this explicit rather than assigning an unrelated recovery result to this policy.</p></div>}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="card-base p-6 md:p-7 mb-12 border-l-2 border-l-[var(--rkd-primary)]">
            <p className="section-label mb-3">// RECOVERY HUB</p>
            <h2 className="section-heading section-heading-h3 mb-3">Part of the Google Ads Suspension Recovery framework</h2>
            <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed max-w-3xl mb-5">This policy page is one part of the broader suspension-review process. Use the main service page for the complete recovery workflow, account review scope and next steps.</p>
            <Link href="/services/google-ads-suspension-recovery" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--rkd-fg)] hover:text-[var(--rkd-primary)] transition-colors">View the main recovery service <ArrowRight className="w-4 h-4"/></Link>
          </div>
          <p className="section-label mb-4">// 06. GOOGLE'S DOCUMENTATION</p><div className="grid lg:grid-cols-[1fr_0.7fr] gap-12"><div><h2 className="section-heading section-heading-h2 mb-5">Use Google's policy as the <span className="text-red-italic">source of truth.</span></h2><p className="text-[var(--rkd-fg-muted)] leading-relaxed">Policy language and enforcement requirements can change. We use the current Google documentation when reviewing a case and do not treat old appeal templates or third-party summaries as the controlling policy.</p></div><div className="card-base p-7"><p className="section-label mb-4">// OFFICIAL SOURCE</p><h3 className="section-heading section-heading-h3 mb-5">{policy.googleSourceName}</h3><a href={policy.googleUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex">Open Google documentation <ArrowUpRight className="w-4 h-4"/></a></div></div></div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg)]"><div className="max-w-[80rem] mx-auto px-4 md:px-6"><p className="section-label mb-4">// 07. FAQ</p><div className="max-w-4xl">{policy.faqs.map(([q,a])=><details key={q} className="border-t border-[var(--rkd-border)] py-6"><summary className="cursor-pointer list-none font-semibold text-[var(--rkd-fg)]">{q}</summary><p className="mt-4 text-sm text-[var(--rkd-fg-muted)] leading-relaxed max-w-3xl">{a}</p></details>)}</div></div></section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]"><div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center"><p className="section-label mb-4">// NEXT STEP</p><h2 className="section-heading section-heading-h2 max-w-4xl mx-auto mb-6">Need help with a <span className="text-red-italic">{policy.name}</span> suspension?</h2><p className="text-[var(--rkd-fg-muted)] max-w-2xl mx-auto leading-relaxed mb-8">Send the suspension notice and your website details. We can review the stated policy area, identify what needs attention and explain the appropriate next step. Google makes the final reinstatement decision.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/contact" className="btn-primary group">Request a Policy Review <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/></Link><Link href="/services/google-ads-suspension-recovery" className="btn-secondary">Main Recovery Service <ArrowUpRight className="w-4 h-4"/></Link></div></div></section>
    </main>
  );
}
