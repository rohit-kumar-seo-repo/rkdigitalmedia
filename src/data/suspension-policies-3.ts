import { cases, commonFaqs, type SuspensionPolicy } from './suspension-policy-types';

export const policies3: SuspensionPolicy[] = [
{
slug:'advertiser-verification',name:'Advertiser Verification',h1:'Google Ads Advertiser Verification Suspension Help',
intro:'Unable to complete Google Ads Advertiser Verification? We review business identity, documents, payment information and consistency across the advertiser setup.',
explanation:'Google may require advertisers to complete verification tasks, and verification can be part of the appeal or recovery path in some suspension situations. Documentation must match the actual advertiser and business relationship.',
riskAreas:['Invalid or incomplete documents','Business-name mismatch','Payment-profile mismatch','Ownership or relationship questions','Inconsistent advertiser information'],
checks:['Business registration details','Identity or organisation documents','Payment profile','Account ownership','Website business information','Consistency across submitted records'],
googleUrl:'https://support.google.com/adspolicy/answer/9703665?hl=en',googleSourceName:'Google Ads Advertiser Verification',caseStudies:[cases.tax],faqs:commonFaqs
},
{
slug:'industry-specific-verification-and-certification',name:'Industry-specific Verification and Certification',h1:'Google Ads Industry Verification & Certification Suspension Help',
intro:'Advertising in a regulated or restricted industry? We review the applicable verification, certification, licensing and country-specific requirements before the next submission.',
explanation:'Some products and services have additional eligibility, verification or certification requirements. The relevant requirement depends on the industry, product, country and advertising program involved.',
riskAreas:['Missing industry certification','Wrong document type','Expired or incomplete licence','Country-specific requirements','Advertiser verification gaps'],
checks:['Industry category','Country-specific requirements','Licences and certifications','Advertiser verification','Application or approval status','Evidence supplied in previous appeals'],
googleUrl:'https://support.google.com/adspolicy/answer/16114090?hl=en',googleSourceName:'Google Ads industry-specific requirements',caseStudies:[cases.wildlife],faqs:commonFaqs
}
];
