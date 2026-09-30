import type { Metadata } from 'next';
import { CaseStudyPage, type CaseStudy } from '@/components/CaseStudyPage';

export const metadata: Metadata = {
  title: 'B2B Lead Generation for Industrial Supplier | Case Study | R.K Digital Media',
  description: 'A B2B lead-generation case study combining technical SEO, Google Ads, LinkedIn Ads, CRM lead scoring and buyer-intent content.',
};

const study: CaseStudy = {
  eyebrow:'B2B / LEAD GENERATION',
  title:'B2B Lead Generation',
  accent:'for an Industrial Supplier',
  intro:'An industrial supplier needed qualified sales opportunities rather than more generic traffic. The engagement combined intent-led search, LinkedIn targeting and CRM qualification.',
  meta:['Manufacturing','Greater Noida','18 months'],
  metrics:[['₹3.8Cr','Attributed Pipeline'],['1,200+','SQLs Generated'],['6×','Peak ROAS'],['18','Months Active']].map(([value,label])=>({value,label})),
  problemTitle:'Traffic was not translating into sales conversations.',
  problem:[
    'The supplier had website traffic but a low conversion rate and too much of that traffic was coming from broad informational searches.',
    'The acquisition strategy needed to move closer to buying intent while giving the sales team a way to distinguish useful enquiries from low-value leads.',
    'There was also no consistent CRM-based lead scoring and routing process connecting acquisition activity to sales follow-up.'
  ],
  solutionTitle:'Intent-first acquisition + qualification.',
  solution:[
    'Expanded technical and product-category SEO around long-tail, specification and buying-intent searches.',
    'Built Google Ads campaigns around high-intent product and SKU-level terms with an expanding negative-keyword library.',
    'Used LinkedIn Ads for account and role-based targeting of relevant procurement and industrial decision-makers.',
    'Introduced CRM lead scoring and routing so sales could prioritise enquiries using firmographic and behavioural signals.',
    'Created technical guides, comparison resources and vertical-specific content to support the consideration stage.'
  ],
  resultsTitle:'More qualified demand entered the pipeline.',
  results:[
    'The case record reports 1,200+ SQLs and ₹3.8Cr in attributed pipeline over 18 months.',
    'It reports contributions from organic search, Google Ads and LinkedIn campaigns, with lead qualification connected to the CRM process.',
    'The case record also reports a 40% reduction in sales-cycle length after qualification and routing improvements.',
    'Pipeline and SQL figures depend on the project attribution model and sales-stage definitions used by the client.'
  ],
  stack:['Technical SEO','Google Ads','LinkedIn Ads','CRM','Lead Scoring','ABM Strategy'],
  ctaTitle:'Need qualified B2B demand?',
  ctaText:'We can map your buyer intent, acquisition channels and qualification process before recommending where the next investment should go.'
};

export default function B2BLeadGenPage(){ return <CaseStudyPage study={study}/>; }
