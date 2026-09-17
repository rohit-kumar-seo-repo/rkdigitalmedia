# Blog Posts Workflow (from this session)

## Pitfall
Blog index links use dynamic slugs (`/insights/${post.slug}`) but no individual page files exist to handle those routes — results in 404 on click.

## Workflow

### 1. Create data model
Create `src/app/insights/blog-posts.ts` with entries:
```ts
const blogPosts = [
  { slug: 'google-ads-suspension-recovery-complete-guide', title: '...', excerpt: '...', category: '...', readTime: '...', date: '...', keywords: ['...'] },
  { slug: 'local-seo-strategy-greater-noida', title: '...', ... },
  { slug: 'ai-automation-lead-generation-5-workflows', title: '...', ... },
  { slug: 'seo-vs-paid-ads-2025-which-wins', title: '...', ... },
  { slug: 'gmb-optimization-map-pack-checklist-50-steps', title: '...', ... },
];
```

### 2. Create index page
`src/app/insights/page.tsx` maps over `blogPosts` with `<Link href={/insights/${post.slug}>}` and CTA to `/contact`.

### 3. Create individual post pages
For EACH slug in the data model, create:
`src/app/insights/<slug>/page.tsx`

**Per-post requirements:**
- `metadata: Metadata` with full SEO (title, description, keywords, openGraph, twitter, canonical)
- H1 heading with post title
- Category tag in uppercase monospace
- Read time and date metadata
- Excerpt/Content summary
- CTA button linking to `/contact`
- JSON-LD Article schema with `@type: 'Article'`
- Target keywords aligned with service pages
- Location keywords (Greater Noida, Noida, Delhi NCR) throughout

### 4. Build verification
- `npm run build` exits 0
- All post routes in `.next/app-path-routes-manifest.json`
- Index page loads at `/insights`
- Each post page loads at `/insights/<slug>` (no 404)
- JSON-LD Article schema present on each post page
- CTA to `/contact` on every post page
- All pages include location keywords
- FAQ consistency between visible `<details>` and JSON-LD schema

## 5-Post Template (from this session)

Create 5 posts covering core services:
- Google Ads Suspension Recovery (98% success rate)
- Local SEO Strategy (90-day framework, 50+ Map Pack keywords)
- AI Automation Lead Gen (5 workflows, 80% faster response, 40% lower CPL)
- SEO vs Paid Ads (comparison, when to use which)
- GMB Optimization (50-step checklist to Map Pack #1)

## Per-post Checklist
- [ ] metadata: full SEO metadata
- [ ] H1 with post title
- [ ] Category tag display
- [ ] Read time and date metadata
- [ ] Excerpt/Content summary
- [ ] CTA button → `/contact`
- [ ] JSON-LD Article schema `@type: 'Article'`
- [ ] Target keywords aligned with service pages
- [ ] Location keywords throughout (Greater Noida, Noida, Delhi NCR)
- [ ] FAQ consistency (visible `<details>` matches JSON-LD mainEntity)

## Vercel Deployment
Requires `vercel login` from LOCAL machine (VPS often has Node 26+ incompatible; credentials not accessible remotely). Best: `scp` from VPS to local, then `vercel login` + `vercel --prod` on local.