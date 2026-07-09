import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { OrbMark } from '@/components/brand/orb-mark';
import { CTA_LINKS } from '@/config/cta-links';
import { HowItWorksSteps } from '@/components/plg/how-it-works-steps';

export const metadata: Metadata = {
  title: 'How Carve works',
  description:
    'The work, in detail: how Carve scores your catalog, decides what to fix, optimizes it in your voice, ships it to your store, and measures real lift against a holdout — across Google and AI.',
  alternates: { canonical: '/how-it-works' },
  openGraph: {
    title: 'How Carve works | Carve',
    description:
      'How Carve scores your catalog, decides what to fix, and ships the improvements to your store.',
  },
};

const DARK_GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

function DarkGrain() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.06]"
      style={{ backgroundImage: DARK_GRAIN, backgroundSize: '180px 180px' }}
    />
  );
}

/* IAD — the three questions Google and AI ask before ranking or
   recommending. Kept verbatim from the original; only the intro is tightened. */
const IAD = [
  {
    k: 'I',
    name: 'Identifiable',
    body: 'Can a search engine or an AI tell exactly what this is — name, category, material, who it’s for? Enough to be placed at all.',
  },
  {
    k: 'A',
    name: 'Answerable',
    body: 'Can it answer what the shopper actually asked — size, warmth, washable, fit — from the data itself, not marketing copy?',
  },
  {
    k: 'D',
    name: 'Decidable',
    body: 'Can a buyer trust it enough to choose? The proof that makes the decision feel safe.',
    trust: ['Ratings & reviews', 'Shipping & returns', 'Warranty', 'Real specs'],
  },
];

const STEPS = [
  { h: 'Reads', b: 'Your full catalog — products and collections — plus live Search Console and GA4.' },
  { h: 'Scores', b: 'Every product, 0–100 on SEO, GEO, and on-page conversion.' },
  { h: 'Optimizes', b: 'Product pages, feed, and collection pages — your voice, your data, never hallucinated.' },
  { h: 'Ships', b: 'To your store or queued for review. Your call. Always reversible.' },
  { h: 'Learns', b: 'A holdout proves the lift. Rankings shift, Carve re-optimizes.' },
];

const GUARDRAILS = [
  {
    h: 'Brand voice',
    b: 'Learned from your own pages. Anything it’s unsure of, it flags instead of guessing.',
  },
  {
    h: 'Reversibility',
    b: 'One click rolls any product back. Full revision history, always.',
  },
  {
    h: 'Holdout set',
    b: 'A slice stays untouched — so the lift is measured in your own GA4, not assumed.',
  },
];

const INTEGRATIONS = [
  {
    name: 'Shopify',
    role: 'Two-way sync. Carve reads your catalog, writes improvements back to it.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    name: 'Google Search Console',
    role: 'Carve reads your impression and click data to find the highest-leverage products.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    name: 'Google Analytics 4',
    role: 'Carve reads on-page conversion to validate that optimizations are converting better, not just ranking better.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v18h18" /><path d="M7 14v4" /><path d="M12 9v9" /><path d="M17 5v13" />
      </svg>
    ),
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-light relative bg-bg overflow-hidden">
        <div className="relative max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)] pt-12 md:pt-20 pb-12 md:pb-16">
          <div className="grid md:grid-cols-[1.25fr_0.75fr] gap-10 md:gap-12 items-center md:min-h-[320px]">
            <div className="space-y-6 md:space-y-7">
              <h1 className="font-serif italic text-[clamp(44px,6.4vw,72px)] leading-[1.06] tracking-[-0.022em] font-light text-text enter">
                The work, <span className="text-accent">in detail</span>.
              </h1>
              <p className="text-[17px] leading-[1.6] font-normal text-text-2 max-w-[480px] enter-d1">
                How Carve scores your catalog, decides what to fix, and ships the improvements to your store.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 enter-d2 w-full max-w-md sm:max-w-none">
                <a href={CTA_LINKS.BOOK_MEETING} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-accent text-text-inv font-medium text-[15px] px-7 py-[13px] rounded-lg transition-[background-color,transform] duration-150 hover:bg-accent-h sm:hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto sm:min-w-[160px]">
                  Book a call
                </a>
                <a href="/demo" className="inline-flex items-center justify-center gap-2 bg-transparent text-text font-medium text-[15px] px-7 py-[13px] rounded-lg border border-[rgba(26,20,16,0.2)] transition-[border-color,background-color,transform] duration-150 hover:border-[rgba(26,20,16,0.35)] hover:bg-[rgba(26,20,16,0.04)] sm:hover:scale-[1.02] w-full sm:w-auto sm:min-w-[160px]">
                  Run a free audit
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center enter-d1">
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

      {/* Onboarded in two minutes (the four-step visual, orb in-diagram) */}
      <HowItWorksSteps />

      {/* 1 — IAD (now light) */}
      <section className="relative bg-bg overflow-hidden py-16 md:py-24 border-t border-border">
        <div className="relative max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)]">
          <ScrollReveal>
            <div className="max-w-[680px] mb-10 md:mb-14">
              <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.09em] uppercase text-text-3 mb-5">
                <OrbMark size={12} />IAD
              </span>
              <h2 className="font-serif italic text-[clamp(30px,4vw,44px)] leading-[1.12] tracking-[-0.025em] font-light text-text">
                Three things determine whether an AI agent recommends your product. Carve scores and fixes all three.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {IAD.map((p, i) => (
              <ScrollReveal key={p.k} delay={i * 0.08}>
                <div className="bg-bg-2 h-full px-6 md:px-8 py-8 flex flex-col">
                  <span className="font-serif italic font-light text-[clamp(40px,5vw,60px)] leading-none text-accent">{p.k}</span>
                  <h3 className="text-[19px] font-medium text-text mt-5 mb-2.5">{p.name}</h3>
                  <p className="text-[14px] leading-[1.6] text-text-2">{p.body}</p>
                  {p.trust && (
                    <div className="flex flex-wrap gap-2 mt-5">
                      {p.trust.map((t) => (
                        <span key={t} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-text-2 bg-bg border border-border rounded-full px-2.5 py-1">
                          <span className="w-1 h-1 rounded-full bg-accent" />{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2 — How the AI employee actually works */}
      <section className="bg-bg py-16 md:py-24">
        <div className="max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)]">
          <ScrollReveal>
            <div className="max-w-[680px] mb-10 md:mb-14">
              <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.09em] uppercase text-text-3 mb-5">
                <OrbMark size={12} />The runbook
              </span>
              <h2 className="font-serif italic text-[clamp(30px,4vw,44px)] leading-[1.12] tracking-[-0.025em] font-light text-text">
                What happens when you connect Shopify.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-10 md:mt-12 max-w-[900px] border-b border-border-2">
            {STEPS.map((s, i) => (
              <ScrollReveal key={s.h}>
                <div className="grid md:grid-cols-[5rem_1fr] items-baseline gap-x-8 md:gap-x-12 gap-y-1 py-7 md:py-9 border-t border-border-2">
                  <span className="font-serif italic font-light text-[clamp(38px,5vw,68px)] leading-none text-[rgba(139,74,44,0.2)]">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="font-serif italic font-light text-[clamp(22px,2.6vw,30px)] leading-[1.15] tracking-[-0.015em] text-text">{s.h}</p>
                    <p className="text-[15px] leading-[1.6] text-text-2 mt-2.5 max-w-[440px]">{s.b}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Safety, brand voice, reversibility */}
      <section className="bg-bg-2 py-16 md:py-24">
        <div className="max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)]">
          <ScrollReveal>
            <div className="max-w-[680px] mb-10 md:mb-14">
              <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.09em] uppercase text-text-3 mb-5">
                <OrbMark size={12} />Guardrails
              </span>
              <h2 className="font-serif italic text-[clamp(30px,4vw,44px)] leading-[1.12] tracking-[-0.025em] font-light text-text">
                Three guardrails.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 border-y border-border-2 divide-y md:divide-y-0 md:divide-x divide-border-2">
            {GUARDRAILS.map((g, i) => (
              <ScrollReveal key={g.h} delay={i * 0.06}>
                <div className={`py-9 md:py-12 h-full ${i === 0 ? 'md:pr-10' : 'md:px-10'}`}>
                  <h3 className="font-serif italic font-light text-[clamp(22px,2.4vw,28px)] tracking-[-0.02em] text-text mb-3">{g.h}</h3>
                  <p className="text-[15px] leading-[1.6] text-text-2 max-w-[280px]">{g.b}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Integrations */}
      <section className="bg-bg py-16 md:py-24">
        <div className="max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)]">
          <ScrollReveal>
            <div className="max-w-[680px] mb-10 md:mb-14">
              <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.09em] uppercase text-text-3 mb-5">
                <OrbMark size={12} />Integrations
              </span>
              <h2 className="font-serif italic text-[clamp(30px,4vw,44px)] leading-[1.12] tracking-[-0.025em] font-light text-text">
                Connects to what you already use.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="max-w-[860px] bg-bg-2 border border-border rounded-2xl overflow-hidden divide-y divide-border">
              {INTEGRATIONS.map((it) => (
                <div key={it.name} className="flex items-start gap-4 px-6 md:px-8 py-6">
                  <span className="w-11 h-11 rounded-[10px] bg-accent-bg border border-[rgba(139,74,44,0.18)] flex items-center justify-center text-accent shrink-0">
                    {it.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <p className="text-[15px] font-medium text-text">{it.name}</p>
                      <span className="text-[10px] font-mono tracking-[0.1em] uppercase text-text-3 bg-bg border border-border rounded-full px-2 py-0.5">One-click OAuth</span>
                    </div>
                    <p className="text-[14px] leading-[1.6] text-text-2 mt-1.5">{it.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-[14px] text-text-2 mt-6 max-w-[860px]">No dev work. One-click OAuth on all three.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* 5 — Final CTA */}
      <ScrollReveal>
        <section className="relative bg-bg-inv py-20 md:py-28 overflow-hidden">
          <DarkGrain />
          <div className="relative max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)] text-center">
            <h2 className="font-serif italic text-[clamp(32px,4vw,52px)] leading-[1.08] tracking-[-0.025em] font-light text-text-inv max-w-[640px] mx-auto">
              Be the one Google and AI recommend.
            </h2>
            <p className="text-[17px] leading-[1.6] font-normal text-[rgba(245,240,232,0.82)] max-w-[520px] mx-auto mt-5">
              If your organic traffic hasn’t grown in 90 days, full refund — you keep every improvement. We onboard 10 stores a month.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
              <a href={CTA_LINKS.BOOK_MEETING} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-text-inv text-bg-inv font-medium text-[15px] px-7 py-[13px] rounded-lg transition-[opacity,transform] duration-150 hover:opacity-90 sm:hover:scale-[1.02] w-full sm:w-auto">
                Book a call
              </a>
              <a href="/demo" className="inline-flex items-center justify-center gap-2 bg-transparent text-text-inv font-medium text-[15px] px-7 py-[13px] rounded-lg border border-[rgba(245,240,232,0.3)] transition-[border-color,background-color,transform] duration-150 hover:border-[rgba(245,240,232,0.5)] hover:bg-[rgba(245,240,232,0.08)] sm:hover:scale-[1.02] w-full sm:w-auto">
                Run a free audit
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
