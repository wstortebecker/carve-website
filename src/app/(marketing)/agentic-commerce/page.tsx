import type { Metadata } from 'next';
import { CTA_LINKS } from '@/config/cta-links';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Agentic commerce',
  description:
    'Consumers are shifting from browsers to AI agents. Here is what that means for your product catalog — and how to stay discoverable when agents do the shopping.',
  alternates: { canonical: '/agentic-commerce' },
};

export default function AgenticCommercePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)] pt-12 pb-12 md:pt-20 md:pb-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Hero headline - Cormorant Garamond italic */}
          <h1 className="font-serif italic text-[clamp(38px,7vw,84px)] leading-[1.04] tracking-[-0.02em] font-light text-text enter text-balance">
            Shopping without<br />the shopper.
          </h1>

          {/* Subtext */}
          <p className="text-[17px] leading-[1.7] font-light text-text-2 max-w-[480px] mx-auto enter-d2">
            Consumers are shifting from browsers to AI agents. Here's what
            that means for your product catalog.
          </p>
        </div>
      </section>

      {/* What Changed Section */}
      <section className="bg-bg-2 py-12 md:py-20">
        <div className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)]">
          <div className="max-w-[640px] mx-auto space-y-8">
            <ScrollReveal>
              <h2 className="font-serif italic text-[clamp(40px,5vw,48px)] leading-[1.1] tracking-[-0.025em] font-light text-text">
                What changed.
              </h2>
            </ScrollReveal>

            <div className="space-y-6 text-[17px] leading-[1.7] font-light text-text-2">
              <ScrollReveal delay={0.06}>
                <p>
                  Consumers used to browse. They'd search, click through, compare, and decide.
                  That process is gone. AI agents now do the browsing — researching, comparing,
                  and purchasing on their behalf in a single conversation.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.12}>
                <p>
                  The traditional funnel has collapsed. Instead of clicking through product
                  pages, consumers ask an AI agent what they want. The agent searches across
                  connected catalogs, evaluates options, and in many cases completes the
                  purchase — without a browser ever opening.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.18}>
                <p>
                  17% of all orders are now influenced by AI agents. 45% of US consumers
                  use AI for research and product comparison. This isn't a future trend.
                  It's happening now.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* How an AI Agent Shops Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)]">
          <div className="max-w-[640px] mx-auto space-y-12">
            <ScrollReveal>
              <h2 className="font-serif italic text-[clamp(40px,5vw,48px)] leading-[1.1] tracking-[-0.025em] font-light text-text">
                How an AI agent shops.
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={0}>
                <div className="space-y-3">
                  <div className="text-[48px] leading-[1] font-light text-text-3 tabular-nums mb-2">
                    1
                  </div>
                  <h3 className="text-[18px] leading-[1.35] tracking-[-0.01em] font-medium text-text">
                    Intent capture
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-text-2">
                    The consumer expresses a goal in natural language: 'I need a
                    sustainable winter jacket under £200, delivered by Thursday.'
                    The agent interprets intent, constraints, and preferences.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <div className="space-y-3">
                  <div className="text-[48px] leading-[1] font-light text-text-3 tabular-nums mb-2">
                    2
                  </div>
                  <h3 className="text-[18px] leading-[1.35] tracking-[-0.01em] font-medium text-text">
                    Catalog evaluation
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-text-2">
                    The agent queries connected product catalogs. It reads structured
                    data — attributes, descriptions, availability, pricing, returns
                    policy. Products that are poorly structured are skipped entirely.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <div className="space-y-3">
                  <div className="text-[48px] leading-[1] font-light text-text-3 tabular-nums mb-2">
                    3
                  </div>
                  <h3 className="text-[18px] leading-[1.35] tracking-[-0.01em] font-medium text-text">
                    Decision and purchase
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-text-2">
                    The agent surfaces one to three options. In an increasing number
                    of cases, it completes the purchase directly. The consumer confirms.
                    The order is placed. No website visited.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Brand Needs Section */}
      <section className="bg-bg-2 py-12 md:py-20">
        <div className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)]">
          <div className="max-w-[640px] mx-auto space-y-12">
            <ScrollReveal>
              <h2 className="font-serif italic text-[clamp(40px,5vw,48px)] leading-[1.1] tracking-[-0.025em] font-light text-text">
                What your brand needs to do.
              </h2>
            </ScrollReveal>

            <div className="grid gap-6">
              <ScrollReveal delay={0}>
                <div className="bg-bg border border-border rounded-2xl p-6 space-y-3 transition-all duration-150 hover:border-border-2 hover:scale-[1.01]">
                  <h3 className="text-[18px] leading-[1.35] tracking-[-0.01em] font-medium text-text">
                    Structure your data.
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-text-2">
                    70% of product data fails basic agent-readiness checks. Attributes,
                    descriptions, and categorization need to be tuned for agent consumption —
                    not just human browsing.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <div className="bg-bg border border-border rounded-2xl p-6 space-y-3 transition-all duration-150 hover:border-border-2 hover:scale-[1.01]">
                  <h3 className="text-[18px] leading-[1.35] tracking-[-0.01em] font-medium text-text">
                    Connect to protocols.
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-text-2">
                    Your products need to be available through agent commerce protocols.
                    Without these connections, AI agents can't discover or purchase
                    from your catalog.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <div className="bg-bg border border-border rounded-2xl p-6 space-y-3 transition-all duration-150 hover:border-border-2 hover:scale-[1.01]">
                  <h3 className="text-[18px] leading-[1.35] tracking-[-0.01em] font-medium text-text">
                    Move now.
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-text-2">
                    Agentic commerce is a channel that compounds. Every week without
                    presence is market share you won't recover. The brands moving now
                    will be the hardest to displace.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Protocols Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)]">
          <div className="max-w-[640px] mx-auto space-y-12">
            <ScrollReveal>
              <h2 className="font-serif italic text-[clamp(40px,5vw,48px)] leading-[1.1] tracking-[-0.025em] font-light text-text mt-8">
                The rails being built.
              </h2>

              <p className="text-[17px] leading-[1.7] font-light text-text-2 mt-8">
                Every major AI platform is building purchasing infrastructure.
                Carve connects you to all of it.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={0}>
                <div className="space-y-2">
                  <h3 className="text-[18px] leading-[1.35] tracking-[-0.01em] font-medium text-text">
                    ACP — Agentic Commerce Protocol
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-text-2">
                    Makes your products purchasable inside ChatGPT conversations
                    and OpenAI-powered shopping agents.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <div className="space-y-2">
                  <h3 className="text-[18px] leading-[1.35] tracking-[-0.01em] font-medium text-text">
                    UCP — Universal Commerce Protocol
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-text-2">
                    Enables agent-driven purchasing through Gemini and Google Shopping
                    surfaces.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <div className="space-y-2">
                  <h3 className="text-[18px] leading-[1.35] tracking-[-0.01em] font-medium text-text">
                    MCP + emerging frameworks
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-text-2">
                    Connects to Anthropic's tool-use protocol, Perplexity's shopping
                    layer, and new frameworks as they launch.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA Section */}
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
            <h2 className="font-serif italic text-[clamp(32px,4vw,52px)] leading-[1.08] tracking-[-0.025em] font-light text-text-inv max-w-[560px] mx-auto">
              See where your catalog stands.
            </h2>
            <p className="text-[17px] leading-[1.6] font-light text-[rgba(245,240,232,0.5)] max-w-[480px] mx-auto">
              We'll audit it and send you a readiness score within 48 hours.
            </p>
            <div className="pt-4">
              <a
                href={CTA_LINKS.FREE_AUDIT}
                className="inline-flex items-center gap-2 bg-text-inv text-bg-inv font-medium text-[15px] px-7 py-[13px] rounded-lg transition-all duration-150 hover:opacity-90 hover:scale-[1.02]"
              >
                Get your free readiness score
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
