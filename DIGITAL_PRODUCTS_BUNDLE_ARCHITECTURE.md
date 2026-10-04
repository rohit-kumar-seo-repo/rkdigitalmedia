# Digital Products Bundle — Architecture Blueprint

## Goal
Build a scalable digital-product marketplace for digitalproductsbundle.in where users discover products through search, evaluate a product page, complete Razorpay checkout, and receive an immediate protected download.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS + shadcn/ui
- PostgreSQL + Prisma
- Razorpay Checkout + server-side payment verification + webhooks
- Private Vercel Blob for protected product files
- Vercel deployment
- GitHub source control

## Core routes
- /
- /products
- /products/[slug]
- /category/[slug]
- /collections/[slug]
- /search
- /checkout/[productSlug]
- /payment/success
- /download/[token]
- /blog
- /blog/[slug]
- /about
- /contact
- /refund-policy
- /terms
- /privacy

## Admin
- /admin
- /admin/products
- /admin/products/new
- /admin/orders
- /admin/customers
- /admin/categories
- /admin/coupons
- /admin/content
- /admin/settings

## Product model
Each product should support:
- title
- slug
- shortDescription
- longDescription
- category
- subcategory
- productType
- price
- compareAtPrice
- currency
- thumbnail/gallery
- includedItems
- format
- fileSize
- compatibility
- license
- requirements
- faq
- seoTitle
- seoDescription
- keywords
- canonicalUrl
- schema data
- relatedProducts
- bundle contents
- privateFile/storage path
- published status

## Commerce flow
1. Product page CTA creates server-side Razorpay order.
2. Checkout opens Razorpay.
3. Server verifies the signature.
4. Razorpay webhook is the authoritative backup event source.
5. Successful payment creates/updates an order.
6. System generates a signed, time-limited download URL.
7. Customer sees success page and receives the download link.
8. Email delivery is a secondary fulfillment channel, not the only download mechanism.

## File security
Product source files must never be public. Store them in private object storage and expose only short-lived signed GET URLs after a verified paid order.

## SEO architecture
Do not create thousands of thin pages programmatically. Build useful category, collection, product, and supporting informational pages with unique copy, structured data, internal links, breadcrumbs, canonical URLs, sitemap coverage and clean indexation rules.

## Scale principles
- Products are database-driven; adding a product should not require code changes.
- Categories and collections are database-driven.
- Product assets are object-storage based.
- Checkout/fulfillment is isolated from presentation.
- Webhook processing is idempotent.
- Download tokens are revocable and expire.
- Admin should allow product/file/SEO metadata management.
- Add analytics events for view, add-to-checkout, checkout-start, payment-success and download.

## Phase 1 MVP
1. Project foundation
2. Database schema
3. Product/catalog UI
4. Product detail pages
5. Razorpay order + checkout + verification
6. Private file delivery
7. Basic admin product management
8. SEO metadata, schema, sitemap and robots
9. Responsive mobile-first UI
10. Production deployment + custom domain

## Phase 2
- Coupons
- Bundled offers
- Related-product engine
- Abandoned checkout capture
- Customer download history
- Email receipts
- Search/filter/sort
- Blog/content engine

## Phase 3
- Affiliate/referral system
- Customer accounts
- Product reviews
- Automated merchandising
- Search analytics
- International pricing/currencies
