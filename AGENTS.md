# R.K Digital Media — Hermes Agent Instructions

## Project

This repository is the production website for R.K Digital Media.

Project path:
`/opt/data/rkdigitalmedia`

Production domain:
`https://rkdigitalmedia.in`

GitHub repository:
`https://github.com/rohit-kumar-seo-repo/rkdigitalmedia`

Production deployment:
Vercel, connected to GitHub `main`.

## Core Objective

Maintain and improve the R.K Digital Media website while preserving existing functionality, SEO structure, routes, responsive design, and production stability.

Work directly in the existing project. Do not create a replacement project or reinitialize Git.

## Before Making Changes

1. Inspect the existing implementation before modifying it.
2. Reuse existing components, styles, layouts, data structures, and patterns whenever practical.
3. Check related pages and components before making structural changes.
4. Do not remove existing functionality unless the task explicitly requires it.
5. Do not make unnecessary changes outside the requested task.

## SEO Requirements

Preserve and improve:

- Page titles and meta descriptions
- Canonical URLs
- H1/H2/H3 heading hierarchy
- Internal linking
- Structured data / JSON-LD
- Sitemap and robots configuration
- Open Graph and Twitter metadata
- Local SEO signals
- Service and location relevance
- Helpful, human-readable content
- Semantic HTML
- Image alt text
- Crawlable routes

Do not keyword-stuff content.

Do not make unsupported ranking, traffic, client-result, or performance claims.

## Website Safety

Never:

- Delete the Git repository
- Run `git reset --hard`
- Force-push
- Rewrite Git history
- Delete production branches
- Modify DNS
- Disconnect Vercel
- Create a second Vercel project
- Change production environment variables without explicit instruction
- Commit API keys, passwords, tokens, credentials, or `.env` secrets

Preserve `.gitignore`.

If a secret is discovered in tracked files, stop and report it instead of pushing it.

## Code Changes

For every requested change:

1. Inspect the relevant files.
2. Make the smallest clean implementation that solves the task.
3. Keep the existing design system consistent.
4. Ensure desktop, tablet, and mobile layouts remain usable.
5. Check links and routes affected by the change.
6. Avoid unnecessary dependency changes.
7. Do not modify unrelated files.

## Validation

After meaningful code changes:

1. Run:
   `npm run build`

2. If the build fails, investigate and fix the problem before committing.

3. Review:
   `git status`
   `git diff --stat`
   `git diff`

4. Check that no secrets or unintended files are being committed.

5. Confirm the requested change is actually present.

The production build must succeed before a deployment commit is created.

## Git Workflow

When the requested work is complete and the production build succeeds:

1. Review the changes.
2. Stage only the intended files:
   `git add <specific-files>`

3. Create a clear commit message describing the actual change:
   `git commit -m "<descriptive message>"`

4. Push to the existing production branch:
   `git push origin main`

Never force-push.

Never use `git add -A` blindly when unrelated files may exist.

## Deployment

GitHub `main` is connected to Vercel.

A successful push to `main` triggers the Vercel deployment automatically.

Do not run a separate Vercel deployment unless explicitly requested.

After pushing, report:

- What was changed
- Build result
- Commit hash
- Whether the push succeeded
- Any remaining issue

## If Something Goes Wrong

If the build fails:
- Do not commit the broken change.
- Fix the issue and rebuild.

If Git push fails:
- Do not change Git history.
- Report the exact error.

If the requested change could affect production significantly:
- Explain the risk before proceeding.

If requirements are ambiguous:
- Inspect the existing code and infer only what is clearly supported by the project.
- Ask for clarification when making the wrong assumption could damage production.

## Communication

Be concise and factual.

For completed work, provide a short summary of:
- Changes
- Validation
- Deployment status

Do not claim a deployment is live unless there is evidence that the deployment succeeded.

