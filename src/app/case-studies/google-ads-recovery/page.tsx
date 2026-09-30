import type { Metadata } from 'next';
import { CaseStudyPage, type CaseStudy } from '@/components/CaseStudyPage';

export const metadata: Metadata = {
  title: 'Google Ads Suspension Recovery & Scale | Case Study | R.K Digital Media',
  description: 'A documented Google Ads suspension recovery and campaign rebuild case study covering policy diagnosis, landing-page corrections and campaign scaling.',
};

const study: CaseStudy = {
  eyebrow:'GOOGLE ADS / RECOVERY',
  title:'Google Ads Suspension',
  accent:'Recovery & Scale',
  intro:'An e-commerce advertiser faced a Google Ads policy suspension. The engagement focused first on diagnosis and compliance corrections, then on rebuilding the paid acquisition system after reinstatement.',
  meta:['E-commerce','Delhi NCR','8 months'],
  metrics:[['₹1.2Cr','Attributed Revenue'],['8.5×','Peak ROAS'],['15,000+','Leads Generated'],['8','Months Active']].map(([value,label])=>({value,label})),
  problemTitle:'Account suspended. Paid acquisition stopped.',
  problem:[
    'The account was suspended for policy-related issues, creating a complete interruption to the paid acquisition channel.',
    'The website, product feed, ad account and business information all needed to be reviewed together rather than treating the suspension as an isolated ad-level problem.',
    'The immediate objective was to identify the policy risks, correct the underlying issues and prepare a structured appeal before rebuilding campaign activity.'
  ],
  solutionTitle:'Policy diagnosis → correction → rebuild.',
  solution:[
    'Reviewed landing pages, product information, business details, ad assets and account configuration for policy risks.',
    'Reworked landing-page structure around clearer business information, pricing, shipping, returns, contact details and trust signals.',
    'Cleaned product-feed data and corrected product information used by Shopping campaigns.',
    'Prepared the reinstatement appeal around the corrections made and the supporting evidence.',
    'After reinstatement, rebuilt the campaign structure across Search, Shopping, Performance Max and YouTube with an ongoing testing and optimisation process.'
  ],
  resultsTitle:'Reinstated, then scaled.',
  results:[
    'The case record reports account reinstatement followed by a phased return to paid acquisition.',
    'The reported campaign trajectory reached ₹15L/month spend and a peak 8.5× ROAS during the engagement.',
    'The case record reports ₹1.2Cr in attributed revenue over eight months and 15,000+ generated leads.',
    'These figures are specific to this project and should be evaluated alongside its starting point, budget, attribution model and campaign period.'
  ],
  stack:['Google Ads','Policy Compliance','Performance Max','Shopping Ads','Next.js','GA4 / GTM'],
  ctaTitle:'Facing a Google Ads suspension?',
  ctaText:'Start with the account, website and policy context rather than submitting repeated appeals. We can review what is visible and explain what should be investigated first.'
};

export default function GoogleAdsRecoveryPage(){ return <CaseStudyPage study={study}/>; }
