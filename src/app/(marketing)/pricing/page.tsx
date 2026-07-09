import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { CTA_LINKS } from '@/config/cta-links';
import { PricingCards } from './PricingCards';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Priced against the SEO hire you are not making. From $199/mo — full-catalog, autonomous, shipped weekly, with a 90-day lift guarantee.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing | Carve',
    description: 'Priced against the hire, not the plugin. From $199/mo, guaranteed.',
  },
};

const DARK_GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

/* Standalone market cost of each capability — every figure sourced to
   2024–2026 US agency, SaaS and salary rates and set at or below the
   market-central value (verified, not asserted). */
const RECURRING: { item: string; value: string }[] = [
  { item: 'Full-catalog optimization for Google + AI — every SKU', value: '$36,000/yr' },
  { item: 'A senior in-house SEO doing this continuously', value: '$120,000/yr' },
  { item: 'AI-surface visibility tracking — ChatGPT, Gemini, Perplexity, Claude', value: '$4,000/yr' },
  { item: 'Quarterly strategy review + results report', value: '$8,000/yr' },
];

export default function PricingPage() {
  return (
    <div className="relative bg-bg">
      <div className="relative">
        {/* Hero — compact so the cards + guarantee land on first load */}
        <section className="max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)] pt-10 md:pt-14 pb-9 md:pb-12">
          <div className="max-w-[760px] mx-auto text-center space-y-2.5">
            <h1 className="font-serif italic text-[clamp(26px,3.2vw,42px)] leading-[1.1] tracking-[-0.02em] font-light text-text enter">
              Your AI employee for <span className="text-accent">SEO</span> and <span className="text-accent">GEO</span>.
            </h1>
          </div>
        </section>

        <PricingCards />

        {/* The Carve Guarantee — full-width strip below the tiers */}
        <ScrollReveal>
          <section className="border-y border-border bg-accent-bg mb-12 md:mb-20">
            <div className="max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)] py-4 md:py-5 text-center">
              <p className="text-[11px] tracking-[0.14em] uppercase font-medium text-accent mb-2">
                The Carve Guarantee
              </p>
              <p className="font-serif italic font-light text-[clamp(20px,2.6vw,30px)] leading-[1.25] tracking-[-0.02em] text-text max-w-[820px] mx-auto">
                If your organic traffic hasn’t grown within 90 days, full refund.
              </p>
              <p className="text-[14px] leading-[1.55] font-normal text-text-2 mt-2.5">
                You keep every improvement we shipped. No clawback. No fine print.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* What the work costs everywhere else */}
        <ScrollReveal>
          <section className="pb-16 md:pb-24 pt-4">
            <div className="max-w-[760px] mx-auto px-[clamp(20px,4vw,48px)]">
              <div className="bg-bg-2 border border-border rounded-2xl p-7 md:p-9">
                <p className="text-[11px] tracking-[0.12em] uppercase font-medium text-accent mb-6">
                  What the work costs everywhere else
                </p>
                <ul className="divide-y divide-border">
                  {RECURRING.map((s) => (
                    <li key={s.item} className="flex items-baseline justify-between gap-6 py-3.5">
                      <span className="text-[14px] leading-[1.5] text-text-2">{s.item}</span>
                      <span className="text-[13px] font-mono text-text-3 whitespace-nowrap">{s.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline justify-between gap-6 pt-5 mt-1 border-t border-border-2">
                  <span className="text-[14px] text-text-2">Recurring, bought separately</span>
                  <span className="text-[18px] font-light text-text-3 line-through">~$168,000/yr</span>
                </div>
                <div className="flex items-baseline justify-between gap-6 pt-3 text-text-3">
                  <span className="text-[13px]">Plus one-time setup + gap analysis</span>
                  <span className="text-[13px] font-mono line-through">$9,000</span>
                </div>
                <p className="font-serif italic font-light text-[clamp(22px,2.8vw,32px)] leading-[1.25] tracking-[-0.015em] text-text mt-6">
                  Carve, from $1,990 a year.
                </p>
                <p className="text-[11px] leading-[1.5] text-text-3 mt-4">
                  Figures from 2025 US agency, SaaS and salary rates — set at or below the market-central price.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Dark CTA */}
        <ScrollReveal>
          <section className="relative bg-bg-inv py-16 md:py-24 overflow-hidden border-t border-[rgba(245,240,232,0.08)]">
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{ backgroundImage: DARK_GRAIN, backgroundSize: '180px 180px' }}
            />
            <div className="relative max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)] text-center space-y-6">
              <h2 className="font-serif italic text-[clamp(32px,4vw,52px)] leading-[1.08] tracking-[-0.025em] font-light text-text-inv max-w-[620px] mx-auto">
                Be the answer in your category.
              </h2>
              <p className="text-[17px] leading-[1.6] font-normal text-[rgba(245,240,232,0.82)] max-w-[480px] mx-auto">
                Book a call and Carve starts this week.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={CTA_LINKS.BOOK_MEETING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-text-inv font-medium text-[15px] px-7 py-[13px] rounded-lg transition-[background-color,transform] duration-150 hover:bg-accent-h sm:hover:scale-[1.02]"
                >
                  Book a call
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-text-inv font-medium text-[15px] px-7 py-[13px] rounded-lg border border-[rgba(245,240,232,0.25)] transition-all duration-150 hover:border-[rgba(245,240,232,0.45)] hover:bg-[rgba(245,240,232,0.04)]"
                >
                  Run a free audit
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
