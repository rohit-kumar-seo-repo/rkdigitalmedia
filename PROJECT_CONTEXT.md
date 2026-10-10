# R.K Digital Media Blogs — Project Context

Last consolidated: 2026-10-11
Purpose: durable project reference for future website, SEO, content, design, and audit work.

## 1. Project identity and goals

- Project name in ChatGPT: **R.K Digital Media Blogs**.
- Website: https://rkdigitalmedia.in/
- Other known production aliases: https://www.rkdigitalmedia.in/ and https://rkdigitalmedia.vercel.app/
- GitHub repository: https://github.com/rohit-kumar-seo-repo/rkdigitalmedia
- Vercel project: `rkdigitalmedia`; team/deployment owner path previously seen as `dizidoty-9385s-projects`.
- Geographic positioning visible in the site: Greater Noida / NCR / India; headline targets “Digital Marketing Agency in Noida”.
- Main goal: improve the website's organic search performance and qualified business enquiries while improving clarity and trust for SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization).
- Core services shown in the homepage hero: Google Ads, SEO, Google Business Profile management, website development, suspension recovery, and AI automation.
- Primary homepage CTA: “Book a Strategy Call”; secondary CTA: “See Our Work”.

## 2. Repository and implementation facts observed

- Framework: Next.js with TypeScript and Tailwind-style utility classes (based on files inspected in `src/app/page.tsx` and `src/components/Hero.tsx`).
- Homepage composition, in order: `Hero` → `Services` → `CaseStudies` → `Process` → `About` → `GoogleReviews` → `Contact`.
- Relevant paths observed:
  - `src/app/page.tsx`
  - `src/components/Hero.tsx`
  - `src/components/ui/text-block-animation` (imported by Hero)
- Homepage H1 intended copy: “Digital Marketing Agency in Noida built around business outcomes”.
- Hero includes animated canvas waves, text animation, CTA buttons, a featured-work pill, a two-row moving services/results marquee, and a mobile-sensitive layout.
- Hero metrics currently displayed in the code inspected: 6 Core Services, 100+ Case Studies, 8+ Years Experience, 12× Peak Reported ROAS, and 22.5K+ Reported Leads Across Cases. Treat every metric as a claim requiring evidence and consistent wording across the site before using it elsewhere.
- Current visual system observed: near-black `#0d0d0d`, dark cards around `#141414`, red accent `#e8282b`, Montserrat bold headings, Outfit body text, responsive `clamp()` font sizing.
- Do not assume local copies are current: a previous investigation found the local folders available then contained an old static HTML version, while the real Next.js project was in GitHub.

## 3. Homepage heading/mobile work already committed

A homepage hero responsive edit was committed to `main`:
- Commit: `cea179bf21a2e3e574f17a0880e3ef33fc48299b`
- Message: “Improve homepage hero heading alignment and mobile layout”
- File: `src/components/Hero.tsx`
- Changes: adjusted responsive hero min-height and padding; made heading width/alignment consistent; used responsive H1 size `clamp(2rem, 5.4vw, 4.25rem)`; tightened tracking and line-height; made the forced heading break apply only from the small-screen breakpoint; reduced subheading and CTA spacing; constrained CTA and featured-case content on mobile.
- This was a code change, not proof of successful visual QA at all breakpoints. A Vercel deployment was seen building after the commit; its final status was not confirmed in the last recorded context. Verify deployment status and inspect the live page before claiming this is visually validated.

## 4. Recorded audit findings — not all independently rechecked

A prior conversation summarized a deep audit as having been conducted around 2026-10-08. Preserve these as **reported audit findings to verify**, not as proof that the issues remain present today:

1. Inconsistent business details and claims across pages/content: experience, clients/projects, retention, ad performance/results, and phone numbers.
2. Canonical tags and legacy URL/redirect mapping required a thorough check.
3. Potential keyword cannibalisation among related pages and articles.
4. Internal linking needed strengthening between blogs, core services, location pages, and case studies.
5. E-E-A-T/business entity evidence needed to be clearer and more consistent (credentials, case studies, reviews, identifiable business information).
6. Structured data / entity signals required review; a logo reference issue was reported on the `/insights` page involving `logo.png`.
7. Service-area and location signals needed clarification, including the distinction between business location and areas served.
8. An unreliable Canva iframe in a Google Ads article was reported as replaced with a responsive native SVG illustration. The related deployment was described in the prior summary as ready with HTTP 200 and no recent runtime errors, but re-verify current production.
9. Audit priorities previously recommended: standardise factual business claims; validate canonicals, sitemap, redirects, and indexation; differentiate page intent; improve contextual internal links; strengthen evidence; monitor Google Search Console.

Do not state that an audit issue is fixed until the relevant source code/live URL and, where applicable, deployment have been checked. Rankings or AI citations must never be guaranteed.

## 5. Certificates and credibility

- The user supplied this Skillshop credential wallet for certificate verification/display: https://skillshop.credential.net/profile/rohitkumarseo848048/wallet
- User asked to display certificates with links to verify credentials.
- Verify each certificate and its public URL before publishing individual credential claims. Do not infer a certificate title, issuer, status, or expiry if it cannot be verified.

## 6. Content and internal linking workflow

The user previously asked for a review of the whole blog and internal linking to easy/related posts or pages. For future content work:
- Map each page/blog to one primary intent and a distinct target query.
- Add contextual links that genuinely help the reader, prioritising relevant service pages, supporting articles, case studies, and location pages.
- Use descriptive, natural anchors; avoid repetitive exact-match anchors and indiscriminate sitewide linking.
- Check for orphan pages, duplicate/overlapping intent, broken links, redirect chains, and links to outdated URLs.
- Recommend consolidation/redirects only after reviewing traffic, backlinks, indexing, and content differences.
- Keep claims factual and evidence-backed; include clear authorship, sources where useful, practical examples, and useful FAQs without padding.

## 7. Visual and design workflow

- User asked to use Canva and mockups to improve the appearance of a blog/page, then shared a screenshot for review and requested implementation.
- Canva is available as a connected workflow, but don't claim a Canva design was edited or deployed unless a tool call confirms it.
- Use mockups and visual examples when they materially improve a page; preserve responsive layout, accessibility, performance, and the existing brand system.
- For any UI change, test mobile and desktop. For the homepage hero, specifically inspect widths around 375px, 390px, 430px and a desktop viewport; check heading wraps, CTA width/alignment, marquee overlap, horizontal overflow, and reduced-motion behaviour.
- Respect `prefers-reduced-motion` for animation. Avoid adding heavy embeds that hurt Core Web Vitals; prefer responsive, accessible native HTML/SVG when appropriate.

## 8. Current operating priorities

Unless a new request changes the order, use this sequence:
1. Verify current production state and identify any regressions.
2. Reconcile business identity/contact data and evidence for all numerical claims.
3. Audit crawl/indexation, canonicals, redirects, sitemap, robots directives, metadata, structured data, and broken links.
4. Build a keyword-to-URL map and resolve overlapping search intent.
5. Strengthen internal links across blogs, services, case studies, and location pages.
6. Improve content usefulness, expertise evidence, and answer clarity for AEO/GEO.
7. Run mobile, accessibility, performance, and visual QA after UI changes.
8. Track changes and outcomes rather than claiming ranking impact immediately.

## 9. Verification discipline

- Distinguish facts observed in source code, reported audit notes, and assumptions.
- Check the live URL and relevant repository files before describing current status.
- For deployments, verify the final Vercel state and smoke-test important routes; a commit or “building” state is not a successful deployment.
- Do not fabricate Search Console/Analytics data, backlink data, Lighthouse scores, schema validation results, rankings, certificate status, or business metrics.
- Use current, primary sources for technical SEO guidance where external research is needed.
- Make the smallest coherent code change that solves the issue; avoid unrelated redesigns.
