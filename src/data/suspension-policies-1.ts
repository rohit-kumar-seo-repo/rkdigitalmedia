import { cases, commonFaqs, type SuspensionPolicy } from './suspension-policy-types';

export const policies1: SuspensionPolicy[] = [
{
slug:'circumventing-systems',name:'Circumventing Systems',h1:'Google Ads Circumventing Systems Suspension Recovery',
intro:'Suspended for Circumventing Systems? Get a policy-specific review of account relationships, business identity, domains, payments and previous enforcement before taking another recovery step.',
explanation:'Google describes Circumventing Systems as a serious policy area involving attempts to circumvent or interfere with its advertising systems or enforcement. The correct diagnosis depends heavily on account history and relationships between accounts, businesses, domains and payment information.',
riskAreas:['Related or replacement accounts after suspension','Account ownership and business-identity inconsistencies','Multiple account or domain relationships','Payment or billing relationships between accounts','Previous enforcement and appeal history','Changes made after an account was suspended'],
checks:['Account history and previous suspension notices','Related Google Ads accounts and business relationships','Domain and website ownership signals','Payment-profile and billing consistency','Business-name and identity consistency','Previous appeals and corrective actions'],
googleUrl:'https://support.google.com/adspolicy/answer/15938075?hl=en',googleSourceName:'Google Ads Circumventing Systems policy',caseStudies:[cases.tax],faqs:commonFaqs
},
{
slug:'unacceptable-business-practices',name:'Unacceptable Business Practices',h1:'Google Ads Unacceptable Business Practices Suspension Recovery',
intro:'Google Ads suspended for Unacceptable Business Practices? Get a focused review of business legitimacy, disclosures, authorisation, licensing, claims and website transparency before your next appeal.',
explanation:'Unacceptable Business Practices concerns can involve how a business represents itself, its relationships, its services or material information that customers need. A genuine business can still need clearer evidence and disclosures for Google to understand the advertiser correctly.',
riskAreas:['Unclear business identity or affiliation','Missing franchise or channel-partner authorisation','Licensing or certification gaps','Material information missing from the website','Unsupported or misleading claims','Inconsistent business information across systems'],
checks:['Business registration and identity information','Franchise, reseller or channel-partner authorisation','Licences and certifications where applicable','Website disclosures and contact information','Claims, testimonials and service descriptions','Consistency between Ads, landing pages and business records'],
googleUrl:'https://support.google.com/adspolicy/answer/15938071?hl=en',googleSourceName:'Google Ads Unacceptable Business Practices policy',caseStudies:[cases.salon,cases.wildlife,cases.realEstate,cases.ayurveda],faqs:commonFaqs
},
{
slug:'misrepresentation',name:'Misrepresentation',h1:'Google Ads Misrepresentation Suspension Recovery',
intro:'Facing a Google Ads Misrepresentation suspension? We review your offer, claims, pricing, business identity, disclosures and landing pages to identify information that may need correction.',
explanation:'Google’s Misrepresentation policy addresses misleading or incomplete information about products, services and businesses, including misleading representation and dishonest pricing practices. Recovery work therefore needs to examine what a user sees, what the business can substantiate and whether important terms are clear.',
riskAreas:['Unsupported business or product claims','Missing or unclear offer terms','Pricing that is incomplete or misleading','Unclear business identity or qualifications','Inconsistent claims between ads and landing pages','Testimonials or statements that cannot be substantiated'],
checks:['Business identity and contact details','Pricing, offer and purchase information','Claims and supporting evidence','Refund, cancellation and relevant terms','Landing-page disclosures','Ad-to-page consistency'],
googleUrl:'https://support.google.com/adspolicy/answer/6020955?hl=en',googleSourceName:'Google Ads Misrepresentation policy',caseStudies:[cases.ayurveda,cases.salon],faqs:commonFaqs
},
{
slug:'coordinated-deceptive-practices',name:'Coordinated Deceptive Practices',h1:'Google Ads Coordinated Deceptive Practices Suspension Recovery',
intro:'Google Ads suspended for Coordinated Deceptive Practices? Get a structured review of connected accounts, domains, ownership and advertiser information before making further changes.',
explanation:'This policy area concerns coordinated practices that can conceal or misrepresent material identity information. The review needs to look beyond one ad or one page and examine the relationships between the advertiser, websites, accounts and business information.',
riskAreas:['Connected accounts or domains','Ownership and identity inconsistencies','Concealed advertiser relationships','Multiple business identities or structures','Inconsistent information across connected properties'],
checks:['Account and domain relationships','Business ownership and identity records','Advertiser information across properties','Previous account enforcement','Website and landing-page identity signals'],
googleUrl:'https://support.google.com/adspolicy/answer/15938072?hl=en',googleSourceName:'Google Ads Coordinated Deceptive Practices policy',caseStudies:[],faqs:commonFaqs
},
{
slug:'destination-requirements',name:'Destination Requirements',h1:'Google Ads Destination Requirements Suspension & Disapproval Help',
intro:'Landing-page or destination problems can block advertising even when the account itself is otherwise legitimate. Get a technical and content review against Google’s Destination Requirements.',
explanation:'Google requires advertising destinations to be functional, useful and accessible to users and Google Ads crawlers. Destination requirements cover multiple failure modes, so the diagnosis should identify the exact destination behaviour rather than treating every landing-page issue as the same problem.',
riskAreas:['Broken or unreliable landing pages','Redirect or final-URL problems','Crawler access restrictions','Regional accessibility issues','Poor or misleading destination experience','Insufficient original content'],
checks:['HTTP status and server behaviour','Redirects and final URLs','AdsBot crawlability','Mobile and target-location accessibility','Navigation and user experience','Originality and usefulness of landing-page content'],
googleUrl:'https://support.google.com/adspolicy/answer/6368661?hl=en',googleSourceName:'Google Ads Destination Requirements',caseStudies:[cases.salon,cases.tax],faqs:commonFaqs
},
{
slug:'destination-not-working',name:'Destination Not Working',h1:'Google Ads Destination Not Working Disapproval & Recovery Help',
intro:'If Google Ads says your destination is not working, we investigate the URL, server response, redirects, mobile experience and Google crawler access.',
explanation:'A destination can fail when users or Google Ads crawlers cannot reliably reach the advertised page. The fix is usually technical and should be verified after changes rather than assumed from a browser test alone.',
riskAreas:['5xx or 4xx errors','DNS or hosting failures','Broken redirects','Mobile URL problems','Intermittent availability','Crawler-specific blocking'],
checks:['HTTP response codes','DNS and hosting availability','Redirect chains','Mobile destination behaviour','Google AdsBot access','Final URL configuration'],
googleUrl:'https://support.google.com/adspolicy/answer/6368661?hl=en',googleSourceName:'Google Ads Destination Requirements',caseStudies:[],faqs:commonFaqs
}
];
