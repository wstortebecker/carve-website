'use client';

import { CTA_LINKS } from '@/config/cta-links';

type Tier = {
  name: string;
  price: string;
  priceSuffix: string;
  annual: string;
  description: string;
  scope: string;
  features: string[];
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    name: 'Specialist',
    price: '$199',
    priceSuffix: '/mo',
    annual: 'Annual: $1,990/yr — save 17%',
    description: 'For Shopify stores running a single market with a focused catalog.',
    scope: 'Up to 1,000 products.',
    features: [
      'Product pages, feed, and collection pages optimized for Google + AI',
      'Weekly autonomous re-optimization, shipped live',
      'Search Console + GA4 + AI-visibility tracking',
      'One-click rollback on every change',
    ],
  },
  {
    name: 'Lead',
    price: '$599',
    priceSuffix: '/mo',
    annual: 'Annual: $5,990/yr — save 17%',
    description: 'For growing brands with deeper catalogs and serious organic ambition.',
    scope: 'Up to 5,000 products.',
    features: [
      'Everything in Specialist',
      'Multi-language native optimization',
      'Competitor catalog gap analysis',
      'Dedicated success contact + monthly strategy call',
    ],
    featured: true,
  },
  {
    name: 'Director',
    price: '$1,999',
    priceSuffix: '/mo',
    annual: 'Annual: $19,990/yr — save 17%',
    description: 'For multi-market operators who want an expert in the loop.',
    scope: 'Unlimited catalog. Multi-store.',
    features: [
      'Everything in Lead',
      'Senior Carve SEO expert alongside your agent',
      'Multi-store portfolio + multi-region strategy',
      'Quarterly review with the founder + Slack',
    ],
  },
];

function Check() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-accent shrink-0 mt-[3px]">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function PricingCards() {
  return (
    <section className="pb-3 md:pb-4">
      <div className="max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch enter-d3">
          {TIERS.map((tier) => {
            const featured = !!tier.featured;
            const cardClass = featured
              ? 'bg-bg-2 border-accent'
              : 'bg-bg-2 border-border hover:border-border-2';
            const ctaClass = featured
              ? 'bg-accent text-text-inv hover:bg-accent-h'
              : 'bg-text text-bg hover:opacity-90';

            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-5 md:p-6 flex flex-col h-full transition-[border-color] duration-150 border-2 ${cardClass}`}
              >
                {featured && (
                  <span className="absolute -top-3 left-6 inline-flex items-center text-[10px] font-medium tracking-[0.1em] uppercase text-text-inv bg-accent px-2.5 py-1 rounded-full">
                    Most stores
                  </span>
                )}
                <p className="text-[11px] tracking-[0.09em] uppercase font-medium mb-3 text-accent">
                  {tier.name}
                </p>

                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif italic text-[clamp(28px,3vw,38px)] font-light tracking-[-0.04em] text-text leading-none">
                    {tier.price}
                  </span>
                  <span className="text-[13px] text-text-2">{tier.priceSuffix}</span>
                </div>
                <p className="text-[11px] text-text-2 mt-1.5 mb-3.5">{tier.annual}</p>

                <p className="text-[13px] leading-[1.5] text-text-2 mb-1.5 min-h-[38px]">
                  {tier.description}
                </p>
                <p className="text-[13px] font-medium text-text mb-4">{tier.scope}</p>

                <ul className="space-y-2.5 mb-5 flex-grow">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-[13px] leading-[1.45] text-text-2">
                      <Check />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href={CTA_LINKS.BOOK_MEETING}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full gap-2 font-medium text-[14px] px-[22px] py-[10px] rounded-lg transition-[opacity,background-color,transform] duration-150 hover:scale-[1.02] ${ctaClass}`}
                  >
                    Book a call
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
