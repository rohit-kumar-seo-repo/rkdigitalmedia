import type { Metadata } from 'next';
import { CaseStudyPage, type CaseStudy } from '@/components/CaseStudyPage';

export const metadata: Metadata = {
  title: 'Multi-Location Clinic Digital Transformation | Case Study | R.K Digital Media',
  description: 'A multi-location healthcare marketing case study covering Google Business Profile, local landing pages, geo-targeted Google Ads and conversion tracking.',
  alternates: { canonical: 'https://rkdigitalmedia.in/case-studies/healthcare-clinic' },
  openGraph: {
    title: 'Multi-Location Clinic Digital Transformation | Case Study | R.K Digital Media',
    description: 'A multi-location healthcare marketing case study covering Google Business Profile, local landing pages, geo-targeted Google Ads and conversion tracking.',
    type: 'article',
    url: 'https://rkdigitalmedia.in/case-studies/healthcare-clinic',
    siteName: 'R.K Digital Media',
  },
};

const study: CaseStudy = {
  eyebrow:'HEALTHCARE / MULTI-LOCATION',
  title:'Multi-Location Clinic',
  accent:'Digital Transformation',
  intro:'A three-location dental and skin clinic needed one coherent acquisition system. The engagement connected location-specific landing pages, Google Business Profile management and geo-targeted Google Ads.',
  meta:['Healthcare','Noida / Ghaziabad','10 months'],
  metrics:[['₹85L','Attributed Revenue'],['9×','Peak ROAS'],['3,500+','Appointments'],['3','Locations Optimised']].map(([value,label])=>({value,label})),
  problemTitle:'Three locations. Three disconnected digital presences.',
  problem:[
    'The clinic operated across three locations with separate local profiles but without a unified local-search and paid-acquisition system.',
    'The website relied heavily on generic pages while paid traffic was being sent to the homepage, limiting relevance and conversion.',
    'The acquisition setup also lacked consistent call and conversion tracking across locations.'
  ],
  solutionTitle:'Unify local visibility and paid acquisition.',
  solution:[
    'Optimised all three Google Business Profiles with services, media, Q&A, posts and a structured review process.',
    'Built location-specific landing pages with local content, treatment information, provider details, booking paths and relevant structured data.',
    'Separated Google Ads campaigns by location with geo-targeting, call assets, location assets and conversion tracking.',
    'Strengthened technical SEO, local citations, performance and location-level search foundations.',
    'Developed supporting creative including treatment explainers and provider-focused assets for acquisition campaigns.'
  ],
  resultsTitle:'Location-level acquisition became measurable.',
  results:[
    'The case record reports 3,500+ tracked calls and form submissions and a 9× blended ROAS during the 10-month engagement.',
    'It reports ₹85L in attributed revenue and three locations managed within the same digital framework.',
    'The case record also reports location pages ranking for 80+ local keywords and website conversion rate improving from 1.2% to 4.8%.',
    'Healthcare advertising outcomes depend on market, treatment mix, location, compliance requirements, budget and attribution methodology.'
  ],
  stack:['Google Business Profile','Google Ads','Local SEO','Next.js','Call Tracking','Online Booking'],
  ctaTitle:'Managing multiple locations?',
  ctaText:'We can review your location pages, local profiles, paid campaigns and conversion tracking as one acquisition system rather than as separate channels.'
};

export default function HealthcareClinicPage(){ return <CaseStudyPage study={study}/>; }
