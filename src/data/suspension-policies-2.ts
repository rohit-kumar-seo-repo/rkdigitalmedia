import { cases, commonFaqs, type SuspensionPolicy } from './suspension-policy-types';

export const policies2: SuspensionPolicy[] = [
{
slug:'destination-mismatch',name:'Destination Mismatch',h1:'Google Ads Destination Mismatch Disapproval Help',
intro:'Facing a Destination Mismatch issue? We compare your display URL, final URL, redirects, tracking setup and landing-page experience to identify inconsistencies.',
explanation:'Destination mismatch concerns whether the destination reached through an ad accurately corresponds to the advertised URL and experience. Tracking and redirects should be checked as part of the technical review.',
riskAreas:['Unexpected redirects','Display and final URL differences','Mobile URL inconsistencies','Tracking-template behaviour','Destination content not matching the ad'],
checks:['Display URL and final URL','Tracking templates and parameters','Redirect behaviour','Mobile URLs','Landing-page content versus ad messaging'],
googleUrl:'https://support.google.com/adspolicy/answer/6368661?hl=en',googleSourceName:'Google Ads Destination Requirements',caseStudies:[cases.tax],faqs:commonFaqs
},
{
slug:'destination-not-crawlable',name:'Destination Not Crawlable',h1:'Google Ads Destination Not Crawlable Disapproval Help',
intro:'If Google Ads cannot crawl your landing page, we investigate robots controls, firewalls, security layers, server responses and AdsBot access.',
explanation:'Google Ads needs to evaluate the destination users reach after clicking an ad. Technical controls that unintentionally block Google’s crawler can therefore become an advertising issue even when the page works for a normal visitor.',
riskAreas:['Robots.txt restrictions','Firewall or WAF rules','Bot protection','Server-side access controls','CDN configuration','Authentication or geo restrictions'],
checks:['Robots directives','Google AdsBot access','WAF and firewall rules','CDN behaviour','Server responses','Geo or authentication restrictions'],
googleUrl:'https://support.google.com/adspolicy/answer/6368661?hl=en',googleSourceName:'Google Ads Destination Requirements',caseStudies:[],faqs:commonFaqs
},
{
slug:'destination-not-accessible',name:'Destination Not Accessible',h1:'Google Ads Destination Not Accessible Recovery Help',
intro:'If your landing page is inaccessible in the campaign’s target market, we review regional restrictions, server rules, CDN behaviour and destination availability.',
explanation:'A destination needs to be accessible to users in the locations targeted by the campaign. Geo-blocking or infrastructure rules can create problems that are invisible when testing from one location.',
riskAreas:['Country or region blocking','CDN geo rules','Server-level restrictions','Regional redirects','Location-specific availability'],
checks:['Target-country access','CDN and firewall rules','Geo redirects','Server response by location','Mobile and desktop accessibility'],
googleUrl:'https://support.google.com/adspolicy/answer/6368661?hl=en',googleSourceName:'Google Ads Destination Requirements',caseStudies:[],faqs:commonFaqs
},
{
slug:'destination-experience',name:'Destination Experience',h1:'Google Ads Destination Experience Disapproval Help',
intro:'If your landing page creates a poor or misleading destination experience, we review navigation, mobile usability, intrusive behaviour and the path from ad click to conversion.',
explanation:'Destination quality is broader than whether a page loads. The user should be able to understand and navigate the destination without problematic interactions or misleading behaviour.',
riskAreas:['Confusing navigation','Intrusive interstitials or interactions','Unexpected downloads','Misleading page behaviour','Poor mobile experience'],
checks:['Navigation and information architecture','Mobile usability','Pop-ups and interstitials','Downloads and redirects','Ad-to-page experience'],
googleUrl:'https://support.google.com/adspolicy/answer/6368661?hl=en',googleSourceName:'Google Ads Destination Requirements',caseStudies:[cases.salon,cases.tax],faqs:commonFaqs
},
{
slug:'insufficient-original-content',name:'Insufficient Original Content',h1:'Google Ads Insufficient Original Content Disapproval Help',
intro:'If Google Ads flags insufficient original content, we review whether the destination provides meaningful, original information and a useful reason for the visitor to be there.',
explanation:'Google’s Destination Requirements include insufficient original content as a destination-related issue. Recovery work should improve the actual page experience and information value rather than simply adding keywords.',
riskAreas:['Thin landing pages','Copied or substantially duplicated content','Pages with little useful information','Template-heavy pages without business-specific value'],
checks:['Original business information','Service and product detail','Useful page content','Business-specific evidence and context','Ad-to-page relevance'],
googleUrl:'https://support.google.com/adspolicy/answer/6368661?hl=en',googleSourceName:'Google Ads Destination Requirements',caseStudies:[],faqs:commonFaqs
},
{
slug:'suspicious-payment-activity',name:'Suspicious Payment Activity',h1:'Google Ads Suspicious Payment Activity Suspension Recovery',
intro:'Suspended for Suspicious Payment Activity? We review payment ownership, billing details, declines, chargebacks and business-account consistency before the next recovery step.',
explanation:'Payment-related enforcement can involve activity that Google considers suspicious or unauthorised. The review needs to establish who owns the payment method, how the billing profile relates to the business and whether recent payment events explain the restriction.',
riskAreas:['Payment-method ownership questions','Repeated payment declines','Chargebacks','Unexpected billing changes','Payment-profile and business mismatches'],
checks:['Payment-method ownership','Billing profile details','Recent payment changes','Declines and chargebacks','Business identity consistency'],
googleUrl:'https://support.google.com/adspolicy/answer/15983318?hl=en',googleSourceName:'Google Ads Suspicious Payment Activity policy',caseStudies:[],faqs:commonFaqs
},
{
slug:'billing-and-payment-suspensions',name:'Billing and Payment Suspensions',h1:'Google Ads Billing and Payment Suspension Recovery',
intro:'Google Ads billing suspension? Get a structured review of unpaid balances, payment verification, chargebacks, promotional-code history and payment-profile information.',
explanation:'Google documents several billing and payment-related reasons for account suspension. The right recovery path depends on the specific billing event and account circumstances rather than a generic appeal.',
riskAreas:['Unpaid balances','Payment verification issues','Chargebacks','Suspicious payment activity','Promotional-code abuse'],
checks:['Outstanding balance status','Payment profile','Payment verification','Chargeback history','Promotional-code activity'],
googleUrl:'https://support.google.com/google-ads/answer/13704200?hl=en',googleSourceName:'Google Ads Billing and Payment Suspensions',caseStudies:[],faqs:commonFaqs
}
];
