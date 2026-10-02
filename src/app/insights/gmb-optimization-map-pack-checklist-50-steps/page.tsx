import type { Metadata } from 'next';
import InsightArticle from '@/components/InsightArticle';
import InsightVisual from '@/components/InsightVisual';

export const metadata: Metadata = {
  title: "Google Business Profile Optimization Checklist: What Actually Matters | R.K Digital Media",
  description: "A practical checklist for improving a Google Business Profile without chasing mythical Map Pack hacks or stuffing keywords into every field.",
  openGraph: { title: "Google Business Profile Optimization Checklist: What Actually Matters", description: "A practical checklist for improving a Google Business Profile without chasing mythical Map Pack hacks or stuffing keywords into every field.", type: 'article', locale: 'en_IN', url: "https://rkdigitalmedia.in/insights/gmb-optimization-map-pack-checklist-50-steps", siteName: 'R.K Digital Media' },
  alternates: { canonical: "https://rkdigitalmedia.in/insights/gmb-optimization-map-pack-checklist-50-steps" },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Google Business Profile Optimization Checklist: What Actually Matters",
  description: "A practical checklist for improving a Google Business Profile without chasing mythical Map Pack hacks or stuffing keywords into every field.",
  url: "https://rkdigitalmedia.in/insights/gmb-optimization-map-pack-checklist-50-steps",
  dateModified: '2026-10-01',
  author: { '@type': 'Person', name: 'Rohit Kumar' },
  publisher: { '@type': 'Organization', name: 'R.K Digital Media', url: 'https://rkdigitalmedia.in' }
};

export default function PostPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <InsightArticle slug="gmb-optimization-map-pack-checklist-50-steps" category="LOCAL SEO" title="Google Business Profile Optimization Checklist: What Actually Matters" intro="A practical checklist for improving a Google Business Profile without chasing mythical Map Pack hacks or stuffing keywords into every field." readTime="12 min" updated="October 1, 2026" toc={["Eligibility and accuracy","Categories and services","Business information","Photos and customer experience","Reviews","Website and local relevance","Measurement"]} relatedLinks={[{label:'Local SEO Strategy for Greater Noida',href:'/insights/local-seo-strategy-greater-noida',description:'A broader local search framework covering GBP, citations, content and measurement.'},{label:'SEO vs Paid Ads for Greater Noida Businesses',href:'/insights/seo-vs-paid-ads-2025-which-wins',description:'Compare organic visibility with paid search when planning acquisition.'},{label:'Google Business Profile Management',href:'/services/gmb',description:'Explore ongoing profile optimization and local visibility support.'},{label:'Local SEO Services',href:'/services/seo',description:'Connect your Business Profile work with broader technical and local SEO.'}]}  sections={[{"label":"FOUNDATION","title":"Start with eligibility and accuracy",visual:<InsightVisual kind="gbp" variant={1} />, "paragraphs":["Use the real business name, accurate address or service-area setup, correct hours and a phone number customers can use. Resolve duplicate or conflicting profiles before adding more activity."]},{"label":"RELEVANCE","title":"Categories and services",visual:<InsightVisual kind="gbp" variant={2} />, "paragraphs":["Select the category that best describes the core business and add relevant secondary categories where appropriate. Keep services useful to customers rather than turning them into a keyword dump."]},{"label":"TRUST","title":"Business information","paragraphs":["Make sure the profile agrees with the website and important public references. Update hours for holidays and operational changes so customers are not sent to an outdated schedule."]},{"label":"EXPERIENCE","title":"Photos and customer experience","paragraphs":["Use real photographs that help a prospective customer understand the location, team, products or work. Fresh content is useful when it adds information—not simply because it is frequent."]},{"label":"REPUTATION","title":"Reviews","paragraphs":["Ask genuine customers for honest feedback and make the process easy. Respond as customer service. Do not buy reviews, manufacture stories or pressure people to use specific phrases."]},{"label":"RELEVANCE","title":"Website and local relevance","paragraphs":["The website should clearly explain services, areas served and the next customer step. Local pages should add genuine value rather than repeating the same paragraph with different locality names."]},{"label":"MEASUREMENT","title":"Measure what leads to business",visual:<InsightVisual kind="gbp" variant={3} />, "paragraphs":["Track calls, website enquiries, direction requests and qualified leads alongside visibility. A profile can receive activity without producing profitable customers."]}]} />
  </>;
}