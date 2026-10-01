import type { Metadata } from 'next';
import { CaseStudyPage, type CaseStudy } from '@/components/CaseStudyPage';

export const metadata: Metadata = {
  title: 'Local SEO Domination for Home Services | Case Study | R.K Digital Media',
  description: 'A local SEO case study covering Google Business Profile optimisation, location pages, reviews, citations and technical SEO.',
  alternates: { canonical: 'https://rkdigitalmedia.in/case-studies/local-seo-domination' },
  openGraph: {
    title: 'Local SEO Domination for Home Services | Case Study | R.K Digital Media',
    description: 'A local SEO case study covering Google Business Profile optimisation, location pages, reviews, citations and technical SEO.',
    type: 'article',
    url: 'https://rkdigitalmedia.in/case-studies/local-seo-domination',
    siteName: 'R.K Digital Media',
  },
};

const study: CaseStudy = {
  eyebrow:'SEO / LOCAL SEARCH',
  title:'Local SEO Domination',
  accent:'for Home Services',
  intro:'A home-services business had strong offline demand but almost no digital visibility. The engagement built the local search foundation across Google Business Profile, website, reviews and local citations.',
  meta:['Home Services','Noida / Greater Noida','12 months'],
  metrics:[['50+','Map Pack Keywords'],['₹45L+','Attributed Revenue'],['2,800+','Leads Generated'],['12','Months Active']].map(([value,label])=>({value,label})),
  problemTitle:'A strong local business was invisible online.',
  problem:[
    'The business had operated for years through word of mouth but had little usable digital presence for customers searching locally.',
    'The local profile, website and citation footprint were not structured around the service-and-location searches driving demand.',
    'The engagement therefore started with the foundations: ownership and optimisation of the profile, website structure, local relevance and a repeatable review process.'
  ],
  solutionTitle:'Build the local search engine.',
  solution:[
    'Optimised the Google Business Profile with services, service areas, photos, Q&A, posts and a review-request process.',
    'Created service-area landing pages targeting relevant service and locality combinations with supporting content and structured data.',
    'Built and cleaned local and industry citations with consistent business information.',
    'Established a review workflow and response process to create a more consistent source of customer feedback.',
    'Addressed technical SEO, mobile experience, performance and local structured-data foundations.'
  ],
  resultsTitle:'Visibility became measurable.',
  results:[
    'The case record reports Map Pack visibility for 50+ high-intent service-and-location searches across Noida, Greater Noida and nearby areas.',
    'It also reports 2,800+ direct calls and direction requests attributed to Google Maps activity during the engagement.',
    'The case record reports website organic traffic growing from zero to 8,500+ monthly visits and ₹45L+ attributed revenue over 12 months.',
    'Local search outcomes vary by market, competition, proximity, starting visibility and the quality of the underlying business signals.'
  ],
  stack:['Technical SEO','Google Business Profile','Review Workflow','Local Citations','Schema Markup','Content Strategy'],
  ctaTitle:'Need stronger local visibility?',
  ctaText:'We can audit the search, website and Google Business Profile signals that influence your local presence and show you where the biggest gaps are.'
};

export default function LocalSEODominationPage(){ return <CaseStudyPage study={study}/>; }
