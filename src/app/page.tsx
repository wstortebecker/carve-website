import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { RankingProof } from '@/components/plg/ranking-proof';
import { CatalogTransform } from '@/components/animations/CatalogTransform';
import { HowItWorksSteps } from '@/components/plg/how-it-works-steps';
import { EmployeeComparison } from '@/components/plg/employee-comparison';
import { FaqAccordion } from '@/components/plg/faq-accordion';
import { PlgNav } from '@/components/plg/nav';
import { PlgFooter } from '@/components/plg/footer';
import { OrbMark } from '@/components/brand/orb-mark';
import { CTA_LINKS } from '@/config/cta-links';
import { OrganizationJsonLd, SoftwareApplicationJsonLd, FaqJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  // Title, description and the OG card come from the root layout default; this
  // page only declares its canonical so the homepage resolves to the bare
  // domain. (Intentionally no page-level openGraph here — a partial openGraph
  // can drop the layout's inherited og:image.)
  alternates: { canonical: '/' },
};

const DARK_GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const faqItems = [
  {
    q: 'Will it still sound like my brand?',
    a: 'Carve writes in your brand voice. It learns from your existing high-performing product pages, your About page, and your homepage tone. Anything it isn’t confident about, it flags for you instead of publishing.',
  },
  {
    q: 'Does it work in languages other than English?',
    a: 'Yes, natively. Carve writes in your store’s language — Norwegian, Spanish, German, French, and others — at the same quality as English. Most SEO tools machine-translate. Carve writes from scratch in the target language.',
  },
  {
    q: 'What if I don’t trust AI to write my product pages?',
    a: 'Run Carve in review-and-approve mode. Nothing publishes without your click. Or run it on autopilot with a holdout set, so you can measure the lift against products Carve never touched.',
  },
  {
    q: 'Will Google penalize AI-generated content?',
    a: 'Google’s stated position is that quality matters, not authorship. Carve’s outputs are structured, factual, and answer real customer questions — the kind of content Google’s helpful-content guidelines reward. The same applies to AI agents, which actively prefer this format.',
  },
  {
    q: 'How is this different from Shopify Magic or other AI tools?',
    a: 'Shopify Magic is a generator — you prompt, it writes. Carve is a system — it scores your catalog, decides what to fix, optimizes it, ships it, measures the result, and re-optimizes when signals change. The difference is the same as the difference between Google Docs and an employee who writes your docs.',
  },
  {
    q: 'How fast do I see anything?',
    a: 'Every product is scored within two minutes of connecting. The first optimizations are ready in the same run.',
  },
  {
    q: 'What happens if I cancel?',
    a: 'Your changes stay live. You just stop getting new ones.',
  },
  {
    q: 'Do I need a Shopify store?',
    a: 'Yes. Carve connects to Shopify directly and writes the improvements back into it. WooCommerce and BigCommerce are on the roadmap.',
  },
];

/* Section 5 — The Stack. Carve's scope of work as a real artifact, not a
   card grid: a single document-style panel the product could itself emit. */
const WEEK_ONE = [
  'Scores every product — SEO, GEO, on-page conversion',
  'Optimizes what’s losing you traffic, in your voice',
  'Ships to your store, or queues for review — your call',
];
const EVERY_WEEK = [
  'Reads your live Search Console + GA4',
  'Catches ranking shifts on Google and in AI',
  'Re-optimizes what dropped, reports what moved',
];

/* Section 6 — Safety. The control surface, shown as a real settings panel. */
const GUARDRAILS = [
  { h: 'Brand voice', b: 'Carve writes the way your store writes — learned from your own pages.' },
  { h: 'One-click rollback', b: 'Every change is reversible. One click returns a product to where it was.' },
  { h: 'Holdout set', b: 'A slice of your catalog stays untouched, so measured lift is real, not assumed.' },
];

function Check() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-accent shrink-0 mt-[3px]">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Repeat() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-accent shrink-0 mt-[3px]">
      <path d="M17 2l4 4-4 4" /><path d="M3 11v-1a4 4 0 0 1 4-4h14" /><path d="M7 22l-4-4 4-4" /><path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqItems} />
      <PlgNav />

      {/* 1 — Hero */}
      <section className="hero-light relative bg-bg overflow-hidden">
        <div className="relative max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)] pt-16 md:pt-24 pb-16 md:pb-24">
          <div className="grid md:grid-cols-[1.18fr_0.82fr] gap-12 md:gap-8 items-center md:min-h-[460px]">
            <div>
              <div className="enter inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.12em] uppercase text-text-3">
                <OrbMark size={15} />
                Onboarding 10 Shopify stores a month
              </div>

              <h1 className="mt-6 font-serif italic text-[clamp(42px,5vw,68px)] leading-[1.04] tracking-[-0.03em] font-light text-text enter-d1">
                Rank on <span className="text-accent">Google</span>.<br />Get picked by <span className="text-accent">AI</span>.
              </h1>

              <p className="mt-6 font-serif italic font-light text-[clamp(20px,2.4vw,29px)] leading-[1.25] tracking-[-0.015em] text-[rgba(26,20,16,0.82)] enter-d2">
                Organic visibility on autopilot,<br className="hidden sm:block" /> for Shopify brands.
              </p>

              <p className="mt-6 text-[16px] leading-[1.6] font-normal text-text-2 max-w-[480px] enter-d2">
                Your AI employee for SEO and GEO. The work of a $120k SEO hire. None of the headcount. Carve optimizes your product pages, product feed, and collection pages, ships it live every week, and proves the lift in your own analytics.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4 enter-d3">
                <a
                  href={CTA_LINKS.BOOK_MEETING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-accent text-text-inv font-medium text-[15px] px-7 py-[14px] rounded-full transition-[background-color] duration-150 hover:bg-accent-h self-start"
                >
                  Book a call
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5"><Arrow /></span>
                </a>
                <a
                  href="/demo"
                  className="group inline-flex items-center justify-center gap-2.5 text-text font-medium text-[15px] px-7 py-[14px] rounded-full border border-[rgba(26,20,16,0.2)] transition-[border-color,background-color] duration-150 hover:border-[rgba(26,20,16,0.35)] hover:bg-[rgba(26,20,16,0.04)] self-start"
                >
                  Run a free audit
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5 opacity-70"><Arrow /></span>
                </a>
              </div>

              <div className="mt-8 inline-flex items-start gap-2.5 max-w-[540px] rounded-[11px] border border-border-2 bg-[rgba(26,20,16,0.035)] px-4 py-3 enter-d4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 mt-px">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <p className="text-[14px] leading-[1.5] text-text-2">
                  <span className="font-semibold text-text">90-day guarantee.</span> If your organic traffic hasn’t grown, <span className="font-semibold text-accent">full refund</span> — and you keep every improvement.
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center enter-d2">
              <div className="relative flex items-center justify-center scale-100 lg:scale-110">
                <span aria-hidden className="orb-glow" />
                <div className="orbit-wrap size-hero" aria-hidden>
                  <div className="orbit-core" />
                  <div className="orbit-ring tilt-a" />
                  <div className="orbit-ring tilt-b" />
                  <div className="orbit-ring tilt-c" />
                  <div className="orbit-dot a" />
                  <div className="orbit-dot b" />
                  <div className="orbit-dot c" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — The Wedge: what Carve does that a human can't */}
      <RankingProof />

      {/* 3 — The Deliverable: show the work */}
      <section className="bg-bg py-16 md:py-24">
        <div className="max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)]">
          <ScrollReveal>
            <CatalogTransform />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-serif italic font-light text-[clamp(20px,2.6vw,30px)] leading-[1.3] tracking-[-0.015em] text-text mt-14 md:mt-20 max-w-[760px]">
              Carve does this for every product in your catalog. Then re-does it when the ranking signals change.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3b — Onboarded in two minutes (process, with the orb in-diagram) */}
      <HowItWorksSteps />

      {/* 4 — The Comparison: hire-anchored */}
      <EmployeeComparison />

      {/* 5 — The Stack: what you get */}
      <section className="bg-bg-2 py-20 md:py-28">
        <div className="max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)]">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.09em] uppercase text-text-3 mb-5">
              <OrbMark size={12} />The stack
            </span>
            <h2 className="font-serif italic text-[clamp(34px,5vw,56px)] leading-[1.05] tracking-[-0.03em] font-light text-text max-w-[680px]">
              What Carve does, in plain English.
            </h2>
          </ScrollReveal>

          <div className="mt-10 md:mt-12 max-w-[960px]">
            <ScrollReveal>
              <div className="grid md:grid-cols-[5.5rem_1fr] gap-x-8 md:gap-x-14 gap-y-4 py-8 md:py-10 border-t border-border-2">
                <span className="font-serif italic font-light text-[clamp(44px,6vw,80px)] leading-none text-[rgba(139,74,44,0.22)]">01</span>
                <div>
                  <p className="text-[12px] font-mono tracking-[0.14em] uppercase text-accent mb-5">Week one</p>
                  <ul className="space-y-3.5">
                    {WEEK_ONE.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-text-2">
                        <Check /><span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid md:grid-cols-[5.5rem_1fr] gap-x-8 md:gap-x-14 gap-y-4 py-8 md:py-10 border-t border-border-2">
                <span className="font-serif italic font-light text-[clamp(44px,6vw,80px)] leading-none text-[rgba(139,74,44,0.22)]">02</span>
                <div>
                  <p className="text-[12px] font-mono tracking-[0.14em] uppercase text-accent mb-5">Every week after</p>
                  <ul className="space-y-3.5">
                    {EVERY_WEEK.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-text-2">
                        <Repeat /><span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid md:grid-cols-[5.5rem_1fr] gap-x-8 md:gap-x-14 gap-y-4 py-8 md:py-10 border-t border-b border-border-2">
                <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-text-3 md:pt-3">Never</span>
                <p className="font-serif italic font-light text-[clamp(22px,2.8vw,32px)] leading-[1.3] tracking-[-0.015em] text-text">
                  Takes PTO. Quits. Asks for a raise. Schedules a 1:1. Charges by the hour.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6 — The Safety / Trust layer */}
      <section className="bg-bg py-16 md:py-24">
        <div className="max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="grid md:grid-cols-[1fr_0.95fr] gap-10 md:gap-16 items-center">
            <ScrollReveal>
              <div className="max-w-[480px]">
                <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.09em] uppercase text-text-3 mb-5">
                  <OrbMark size={12} />In control
                </span>
                <h2 className="font-serif italic text-[clamp(30px,4vw,44px)] leading-[1.12] tracking-[-0.025em] font-light text-text mb-5">
                  You’re never not in control.
                </h2>
                <p className="text-[16px] leading-[1.65] font-normal text-text-2">
                  Carve writes in your brand voice. Every change is one click to undo. A holdout set stays untouched, so the lift in Search Console and GA4 is measured, not assumed.
                </p>
                <p className="text-[16px] leading-[1.65] font-normal text-text-2 mt-4">
                  Run it on autopilot, or review-and-approve. Either way, your store stays yours.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-bg-2 border border-border rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between gap-3 px-5 md:px-6 py-3.5 border-b border-border">
                  <span className="text-[13px] font-medium text-text">Run mode</span>
                  <span className="inline-flex items-center rounded-lg border border-border bg-bg p-0.5 text-[12px]">
                    <span className="px-3 py-1 rounded-[6px] bg-accent text-text-inv font-medium">Autopilot</span>
                    <span className="px-3 py-1 text-text-3">Review &amp; approve</span>
                  </span>
                </div>
                <div className="divide-y divide-border">
                  {GUARDRAILS.map((g) => (
                    <div key={g.h} className="flex items-start gap-3.5 px-5 md:px-6 py-4">
                      <Check />
                      <div>
                        <p className="text-[14px] font-medium text-text mb-1">{g.h}</p>
                        <p className="text-[13px] leading-[1.6] text-text-2">{g.b}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8 — FAQ */}
      <section className="relative bg-bg-inv overflow-hidden py-16 md:py-24">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: DARK_GRAIN, backgroundSize: '180px 180px' }}
        />
        <div className="relative max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)]">
          <ScrollReveal>
            <div className="max-w-[680px] mx-auto mb-12 md:mb-16">
              <h2 className="font-serif italic text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em] font-light text-text-inv">
                The honest answers.
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            <FaqAccordion items={faqItems} variant="dark" />
          </div>
        </div>
      </section>

      {/* 9 — Final CTA */}
      <ScrollReveal>
        <section className="relative bg-bg-inv py-20 md:py-28 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: DARK_GRAIN, backgroundSize: '180px 180px' }}
          />
          <div className="relative max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)] text-center">
            <h2 className="font-serif italic text-[clamp(32px,4vw,52px)] leading-[1.08] tracking-[-0.025em] font-light text-text-inv max-w-[640px] mx-auto">
              Be the one Google and AI recommend.
            </h2>
            <p className="text-[17px] leading-[1.6] font-normal text-[rgba(245,240,232,0.82)] max-w-[540px] mx-auto mt-5">
              Book a call and Carve starts this week. If your organic traffic hasn’t grown in 90 days, full refund — you keep every improvement. We onboard 10 stores a month.
            </p>
            <div className="pt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={CTA_LINKS.BOOK_MEETING} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2.5 bg-text-inv text-bg-inv font-medium text-[15px] px-7 py-[14px] rounded-full transition-[opacity] duration-150 hover:opacity-90">
                Book a call
                <span className="transition-transform duration-200 group-hover:translate-x-0.5"><Arrow /></span>
              </a>
              <a href="/demo" className="group inline-flex items-center justify-center gap-2.5 text-text-inv font-medium text-[15px] px-7 py-[14px] rounded-full border border-[rgba(245,240,232,0.28)] transition-[border-color,background-color] duration-150 hover:border-[rgba(245,240,232,0.55)] hover:bg-[rgba(245,240,232,0.06)]">
                Run a free audit
                <span className="transition-transform duration-200 group-hover:translate-x-0.5 opacity-70"><Arrow /></span>
              </a>
            </div>
            <div className="mt-12 md:mt-14 pt-8 border-t border-[rgba(245,240,232,0.12)] max-w-[520px] mx-auto">
              <p className="text-[14px] text-text-inv opacity-80">— William Störtebecker, founder of Carve</p>
              <p className="text-[13px] leading-[1.6] text-[rgba(245,240,232,0.74)] mt-2">
                I personally onboard every store in the current cohort. Reach me at{' '}
                <a href="mailto:william@carve.ac" className="underline underline-offset-2 hover:text-text-inv transition-colors">william@carve.ac</a>.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <PlgFooter />
    </>
  );
}
