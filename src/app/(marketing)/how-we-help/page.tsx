import type { Metadata } from 'next';
import Link from 'next/link';
import { CTA_LINKS } from '@/config/cta-links';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'How Carve helps',
  description:
    'Carve restructures your product data so AI agents can find, understand, and choose your products — audited, scored, and optimized across ChatGPT, Gemini, Claude, and Perplexity.',
  alternates: { canonical: '/how-we-help' },
};

export default function HowWeHelpPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)] pt-12 pb-12 md:pt-20 md:pb-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Hero headline - Cormorant Garamond italic */}
          <h1 className="font-serif italic text-[clamp(38px,7vw,84px)] leading-[1.04] tracking-[-0.02em] font-light text-text enter text-balance">
            Catalogs built<br />for AI agents.
          </h1>

          {/* Subtext */}
          <p className="text-[17px] leading-[1.7] font-light text-text-2 max-w-[480px] mx-auto enter-d1">
            We restructure product data so AI agents can find, understand,
            and choose your products.
          </p>
        </div>
      </section>

      {/* What We Do - Process Steps */}
      <section className="bg-bg-2 py-12 md:py-20">
        <div className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)]">
          <ScrollReveal>
            <div className="max-w-[680px] mx-auto mb-16 space-y-8">
              <h2 className="font-serif italic text-[clamp(40px,5vw,48px)] leading-[1.1] tracking-[-0.025em] font-light text-text">
                How it works
              </h2>

              <p className="text-[17px] leading-[1.7] font-light text-text-2">
                Score your catalog across every major AI surface. See exactly what to fix — then let Carve fix it.
              </p>
            </div>
          </ScrollReveal>

          {/* Process Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="bg-bg border border-border rounded-xl p-5 md:p-8 space-y-4 transition-[border-color] duration-150 hover:border-border-2 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-bg rounded-lg">
                  <span className="text-[20px] font-medium text-accent">01</span>
                </div>
                <h3 className="text-[18px] leading-[1.35] tracking-[-0.01em] font-medium text-text">
                  Audit
                </h3>
                <p className="text-[15px] leading-[1.65] text-text-2">
                  Connect your store and we ingest your full product feed. Every SKU is profiled against the attributes AI agents evaluate when making recommendations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="bg-bg border border-border rounded-xl p-5 md:p-8 space-y-4 transition-[border-color] duration-150 hover:border-border-2 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-bg rounded-lg">
                  <span className="text-[20px] font-medium text-accent">02</span>
                </div>
                <h3 className="text-[18px] leading-[1.35] tracking-[-0.01em] font-medium text-text">
                  Analyze
                </h3>
                <p className="text-[15px] leading-[1.65] text-text-2">
                  Each product gets an agent-readiness score across ChatGPT, Gemini, Claude, and Perplexity. You see exactly what's missing, what's weak, and what's already working — per SKU, per surface.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <div className="bg-bg border border-border rounded-xl p-5 md:p-8 space-y-4 transition-[border-color] duration-150 hover:border-border-2 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-bg rounded-lg">
                  <span className="text-[20px] font-medium text-accent">03</span>
                </div>
                <h3 className="text-[18px] leading-[1.35] tracking-[-0.01em] font-medium text-text">
                  Optimize
                </h3>
                <p className="text-[15px] leading-[1.65] text-text-2">
                  Carve generates prioritized fixes for each product: missing attributes, weak descriptions, taxonomy gaps, conversational context. Sorted by impact so you fix what matters first.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Continuous strip */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-5xl mx-auto mt-6 bg-bg border border-border rounded-xl px-5 md:px-8 py-5 flex items-center gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-positive-bg rounded-lg shrink-0">
                <svg className="w-[18px] h-[18px] text-positive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <p className="text-[15px] leading-[1.35] font-medium text-text">Ongoing</p>
                <p className="text-[14px] leading-[1.55] text-text-2 mt-1">
                  Agent behavior changes. Your scores update continuously, surfacing new opportunities as AI platforms evolve.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Two Ways to Work With Us */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)]">
          <ScrollReveal>
            <div className="max-w-[680px] mx-auto mb-16 text-center space-y-8">
              <h2 className="font-serif italic text-[clamp(40px,5vw,48px)] leading-[1.1] tracking-[-0.025em] font-light text-text">
                Two ways to work with us
              </h2>

              <p className="text-[17px] leading-[1.7] font-light text-text-2">
                Choose the model that fits your team, timeline, and catalog complexity.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Service Model */}
            <ScrollReveal delay={0}>
              <div className="bg-bg-2 border border-border rounded-2xl overflow-hidden transition-all duration-150 hover:border-border-2 h-full flex flex-col">
                <div className="p-8 pb-0 flex-grow space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center bg-accent-bg px-3 py-1 rounded-full">
                      <span className="text-[11px] font-medium tracking-[0.05em] uppercase text-accent">
                        Done for you
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[22px] leading-[1.25] tracking-[-0.015em] font-medium text-text mb-2">
                      Carve as a service
                    </h3>
                    <p className="text-[15px] leading-[1.65] text-text-2">
                      We audit, optimize, and connect your catalog. You get results
                      without building internal capability.
                    </p>
                  </div>

                  <ul className="space-y-[10px] text-[14px] text-text-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      Large catalogs or complex product data
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      Teams without dedicated data resources
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      Speed to market
                    </li>
                  </ul>
                </div>

                <div className="p-8 pt-6">
                  <a
                    href={CTA_LINKS.BOOK_MEETING}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 bg-text text-bg font-medium text-[14px] px-[22px] py-[12px] rounded-lg transition-all duration-150 hover:bg-[#2F2520] hover:scale-[1.02]"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Software Model */}
            <ScrollReveal delay={0.08}>
              <div className="bg-bg-2 border border-border rounded-2xl overflow-hidden transition-all duration-150 hover:border-border-2 h-full flex flex-col">
                <div className="p-8 pb-0 flex-grow space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center bg-accent-bg px-3 py-1 rounded-full">
                      <span className="text-[11px] font-medium tracking-[0.05em] uppercase text-accent">
                        Self-serve
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[22px] leading-[1.25] tracking-[-0.015em] font-medium text-text mb-2">
                      Carve Platform
                    </h3>
                    <p className="text-[15px] leading-[1.65] text-text-2">
                      Run audits, track agent visibility, and optimize on your own
                      timeline. Full transparency into what agents see.
                    </p>
                  </div>

                  <ul className="space-y-[10px] text-[14px] text-text-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      Teams with existing catalog workflows
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      Full control and transparency
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      Multi-brand or agency use cases
                    </li>
                  </ul>
                </div>

                <div className="p-8 pt-6">
                  <a
                    href={CTA_LINKS.PLATFORM_ACCESS}
                    className="inline-flex items-center justify-center w-full gap-2 bg-accent text-text-inv font-medium text-[14px] px-[22px] py-[12px] rounded-lg transition-all duration-150 hover:bg-accent-h hover:scale-[1.02]"
                  >
                    Request access
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What You Get (Reduced to 3 cards) */}
      <section className="bg-bg-2 py-12 md:py-20">
        <div className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)]">
          <ScrollReveal>
            <div className="max-w-[680px] mx-auto mb-16 text-center space-y-8">
              <h2 className="font-serif italic text-[clamp(40px,5vw,48px)] leading-[1.1] tracking-[-0.025em] font-light text-text">
                What you get
              </h2>

              <p className="text-[17px] leading-[1.7] font-light text-text-2">
                Regardless of which model you choose, these are the outcomes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="bg-bg border border-border rounded-xl p-5 md:p-8 space-y-3 h-full">
                <h4 className="text-[16px] leading-[1.35] font-medium text-text">
                  Agent-ready catalog
                </h4>
                <p className="text-[14px] leading-[1.65] text-text-2">
                  Products structured, enriched, and validated for AI consumption across
                  all major platforms.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="bg-bg border border-border rounded-xl p-5 md:p-8 space-y-3 h-full">
                <h4 className="text-[16px] leading-[1.35] font-medium text-text">
                  Visibility metrics
                </h4>
                <p className="text-[14px] leading-[1.65] text-text-2">
                  Track how often your products surface in agent responses, where you're
                  winning, and where you're losing.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <div className="bg-bg border border-border rounded-xl p-5 md:p-8 space-y-3 h-full">
                <h4 className="text-[16px] leading-[1.35] font-medium text-text">
                  Continuous optimization
                </h4>
                <p className="text-[14px] leading-[1.65] text-text-2">
                  Agent behavior evolves. Your catalog does too, with ongoing monitoring
                  and refinement as protocols change.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section className="relative bg-bg-inv py-16 md:py-24 overflow-hidden">
          {/* Grain texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: '180px 180px',
            }}
          />

          <div className="relative max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)] text-center space-y-6">
            <h2 className="font-serif italic text-[clamp(32px,4vw,48px)] leading-[1.08] tracking-[-0.025em] font-light text-text-inv max-w-[600px] mx-auto">
              Ready to make AI agents choose you?
            </h2>
            <p className="text-[17px] leading-[1.6] font-light text-[rgba(245,240,232,0.6)] max-w-[520px] mx-auto">
              Start with a free audit or discuss your catalog with our team.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
              <a
                href={CTA_LINKS.BOOK_MEETING}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-text-inv text-bg-inv font-medium text-[15px] px-7 py-[13px] rounded-lg transition-all duration-150 hover:opacity-90 hover:scale-[1.02] w-full sm:w-auto"
              >
                Get in touch
              </a>
              <a
                href={CTA_LINKS.FREE_AUDIT}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-text-inv font-medium text-[15px] px-7 py-[13px] rounded-lg border border-[rgba(245,240,232,0.3)] transition-all duration-150 hover:border-[rgba(245,240,232,0.5)] hover:bg-[rgba(245,240,232,0.1)] hover:scale-[1.02] w-full sm:w-auto"
              >
                Get free audit
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
