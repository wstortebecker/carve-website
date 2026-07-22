# Carve — Marketing Website

The public marketing site for Carve (carve.ac): homepage, product/solution pages,
pricing, careers, blog, insights, and legal pages — plus the full brand asset
library and design system.

This is a **self-contained copy** extracted from the main Carve platform. It has
no backend, no database, no auth, and no secrets. It runs on its own.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000. No environment variables are required — the site
runs as-is. See `.env.example` for the optional CMS and platform URL overrides.

To produce a production build:

```bash
npm run build && npm start
```

---

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** driven entirely by CSS custom properties (design tokens)
- **Framer Motion** for the on-scroll and hero animations
- **Lucide** icons
- **Sanity** (read-only) as the CMS behind the blog + insights pages

---

## Project structure

```
src/
  app/
    layout.tsx              Root layout (fonts, metadata, global CSS)
    globals.css             The design system — all color/type/spacing tokens live here
    page.tsx                Homepage
    (marketing)/
      layout.tsx            Shared marketing nav + footer wrapper
      how-it-works/         Product pages
      how-we-help/
      agentic-commerce/
      pricing/              Pricing + PricingCards
      careers/
      blog/                 Blog index + [slug] article pages (Sanity-backed)
      insights/             Insights index + [slug] pages (Sanity-backed)
      privacy/  terms/      Legal
  content/marketing/        Locked homepage, How it works and pricing documents
  components/
    marketing/              Standalone renderer and marketing route chrome
    plg/                    Marketing components — nav, footer, hero proof, FAQ, etc.
    animations/             Scroll-reveal + catalog-transform animation components
    brand/orb-mark.tsx      The Carve orb + wordmark lock-up component
    seo/JsonLd.tsx          Structured-data (schema.org) helpers
  lib/
    sanity/                 Sanity client + GROQ queries (blog/insights)
    utils.ts                cn() class-name helper
  config/cta-links.ts       Central CTA URLs (book-a-meeting, signup, etc.)
  types/blog.ts             Blog post types
public/
  brand/                    Full brand kit — orb (all sizes), lock-ups, favicons,
                            OG/social cards, and carve-brand-guidelines.pdf
  images/                   Editorial photography
  logos/                    Partner/integration logos (Shopify, Google, OpenAI, …)
  marketing-assets/         Product imagery and assets used by the locked pages
```

The homepage, How it works and pricing pages intentionally preserve the locked
design documents in `src/content/marketing`. This keeps the approved visuals and
interactions identical while the standalone website evolves independently from
the platform repository.

---

## The design system

The complete platform design guidelines are mirrored in
**`docs/DESIGN-SYSTEM.md`** so website work carries the same readability,
typography, interaction and anti-pattern rules as `carveplatform`. The light
marketing palette and product-led direction documented below remain the
presentation authority for this website.

`src/app/globals.css` is the source of truth. It defines the full token set as
CSS custom properties — warm parchment backgrounds, terracotta accent, warm
near-black text, the paper-grain texture, and the type scale (Cormorant Garamond
italic for hero, DM Sans for everything else). `tailwind.config.ts` maps those
tokens onto Tailwind utilities (`bg-bg`, `text-text-2`, `text-accent`, etc.), so
you style with the tokens rather than raw hex.

The canonical brand reference is **`public/brand/carve-brand-guidelines.pdf`**.

Design north star: warm, editorial, Scandinavian-studio calm. Never cold grey,
never a generic-SaaS template. The only accent color is terracotta, used
sparingly.

The marketing site should remain product-led and recognizably ecommerce-coded:
real product imagery, catalog fields, PDPs, search results and analytics should
do the explanatory work. Do not default to decorative eyebrow copy above H1s
or section headlines, and do not frame generic helper copy with a short line,
dot or orb. Compact uppercase labels are reserved for functional interface
metadata such as fields, states, SKUs and table headers.

---

## What was removed vs. the main platform

To make this a clean, standalone, secret-free handoff, three infrastructure
integrations were stripped out — they were telemetry/plumbing, not part of the
website itself:

- **PostHog analytics** and its Supabase-backed user identification
- **Sentry** error monitoring
- The Shopify App Bridge + visitor-tag scripts in the root layout

None of these affect how the site looks or behaves. If you later deploy this and
want analytics, add your own.

The **blog and insights** pages read from Carve's public, read-only Sanity
dataset, so they render real content with no setup. Point them at a different
Sanity project via the env vars in `.env.example` if you want to swap the CMS.
