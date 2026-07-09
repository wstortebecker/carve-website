'use client';

import { useEffect, useRef, useState } from 'react';
import { OrbMark } from '@/components/brand/orb-mark';

type FieldStatus = 'missing' | 'weak' | 'ok' | 'strong';
type FieldBadge = 'improved' | 'new' | null;

interface FeedField {
  label: string;
  value: string;
  status: FieldStatus;
  note?: string;
  badge?: FieldBadge;
  sections?: { heading: string; body: string }[];
}

// A real Shopify feed. Decent, not broken.
const BEFORE_FIELDS: FeedField[] = [
  {
    label: 'title',
    value: 'Better Sweater Fleece Vest - New Navy',
    status: 'weak',
    note: 'No brand in title',
  },
  {
    label: 'description',
    value: "Our go-to fleece vest for cool-weather layering. Made from recycled polyester with a sweater-knit face and fleece interior. Full-zip front, zippered pockets, and a clean finish that works as well in the office as on the trail. Fair Trade Certified sewn.",
    status: 'weak',
    note: 'Marketing copy, low fact density',
  },
  {
    label: 'seo_title',
    value: 'Better Sweater Fleece Vest - New Navy',
    status: 'weak',
    note: 'Defaults to product title',
  },
  {
    label: 'seo_description',
    value: 'Our go-to fleece vest for cool-weather layering. Made from recycled polyester with a sweater-knit fac…',
    status: 'weak',
    note: 'Auto-truncated body copy',
  },
  {
    label: 'product_type',
    value: 'Vests',
    status: 'weak',
    note: 'Single level',
  },
  {
    label: 'material',
    value: 'Recycled Polyester',
    status: 'ok',
  },
  {
    label: 'Q&A',
    value: '',
    status: 'missing',
  },
];

const BEFORE_SCORE = 38;
const AFTER_SCORE = 84;

// What the Carve engine produces
const AFTER_FIELDS: FeedField[] = [
  {
    label: 'title',
    value: 'Patagonia Better Sweater Fleece Vest - New Navy',
    status: 'strong',
    badge: 'improved',
  },
  {
    label: 'description',
    value: '',
    status: 'strong',
    badge: 'improved',
    sections: [
      {
        heading: 'Overview',
        body: 'The Patagonia Better Sweater Fleece Vest is a midweight fleece vest with a sweater-knit face and soft fleece interior, made from 100% recycled polyester. The full-zip front features an internal wind flap, with two zippered handwarmer pockets and one internal chest pocket. Raglan sleeves provide range of motion for comfortable layering.',
      },
      {
        heading: 'Sizing & Fit',
        body: 'Regular fit, designed for layering over a base layer or button-down without excess bulk. Raglan sleeves keep the shoulders clean. Weight: 312 g (size M).',
      },
      {
        heading: 'Care',
        body: 'Machine wash at 30\u00B0C, gentle cycle. Tumble dry on low heat. Do not use fabric softener or bleach.',
      },
      {
        heading: 'Ideal For',
        body: 'Suited for cool-weather layering during outdoor activities or everyday wear. The sweater-knit face gives it a clean look appropriate for office or business casual settings, while the fleece interior provides warmth for hiking, commuting, or travel.',
      },
    ],
  },
  {
    label: 'seo_title',
    value: 'Patagonia Better Sweater Fleece Vest – Recycled, New Navy',
    status: 'strong',
    badge: 'improved',
  },
  {
    label: 'seo_description',
    value: 'Midweight 100% recycled-polyester fleece vest with a sweater-knit face. Warm without bulk, office-clean, true to size. Free shipping & returns.',
    status: 'strong',
    badge: 'improved',
  },
  {
    label: 'product_type',
    value: 'Apparel & Accessories > Clothing > Outerwear > Vests',
    status: 'strong',
    badge: 'improved',
  },
  {
    label: 'material',
    value: '100% Recycled Polyester',
    status: 'strong',
    badge: 'improved',
  },
  {
    label: 'Q&A',
    value: '',
    status: 'strong',
    badge: 'new',
  },
];

const QA_PAIRS = [
  {
    q: 'Is this warm enough on its own for autumn?',
    a: 'Works well as a standalone down to about 10\u00B0C. Below that, layer it over a base layer. The fleece is midweight, so warm without bulk.',
  },
  {
    q: 'Can I wear this to the office?',
    a: "Yes. The sweater-knit face looks clean enough for business casual. Doesn't read as outdoor gear the way technical fleece does.",
  },
  {
    q: 'How does it fit over a button-down?',
    a: 'Comfortable over a dress shirt or base layer. Raglan sleeves keep the shoulders clean without bunching.',
  },
  {
    q: 'Will this hold up to regular washing?',
    a: 'The recycled polyester is durable through repeated wash cycles. Machine wash at 30\u00B0C, tumble dry low. Skip the fabric softener to maintain the fleece texture.',
  },
];

function StatusDot({ status }: { status: FieldStatus }) {
  const colors = {
    missing: 'bg-[var(--negative)]',
    weak: 'bg-[var(--caution)]',
    ok: 'bg-[var(--positive)]',
    strong: 'bg-[var(--positive)]',
  };
  return <span className={`inline-block w-[6px] h-[6px] rounded-full ${colors[status]} shrink-0 mt-[5px]`} />;
}

function FieldBadgeTag({ badge }: { badge: FieldBadge }) {
  if (!badge) return null;
  const styles = {
    improved: 'bg-[var(--positive-bg)] text-[var(--positive)]',
    new: 'bg-[var(--accent-bg)] text-[var(--accent)]',
  };
  return (
    <span className={`text-[9px] font-medium tracking-[0.06em] uppercase px-[6px] py-[1px] rounded-full ${styles[badge]}`}>
      {badge}
    </span>
  );
}

function AnimatedScore({ target, active }: { target: number; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    let frame: number;
    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return <span>{count}</span>;
}

export function CatalogTransform() {
  const [revealed, setRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), 800);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="space-y-6">
      {/* Section header */}
      <div className="max-w-[820px] space-y-5">
        <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.09em] uppercase text-text-3">
<OrbMark size={12} />The deliverable
        </span>
        <h2 className="font-serif italic text-[clamp(34px,5vw,56px)] leading-[1.05] tracking-[-0.03em] font-light text-text">
          This is what your AI employee ships.
        </h2>
        <p className="font-serif italic font-light text-[clamp(20px,2.6vw,30px)] leading-[1.25] tracking-[-0.015em] text-text">
          Same product. Two feeds. One gets recommended.
        </p>
        <p className="text-[15px] leading-[1.65] font-normal text-text-2 max-w-[560px]">
          A customer asks an AI agent for
          <span className="text-text font-medium"> “a warm fleece vest I can wear to the office.”</span>
          {' '}One feed is marketing copy. The other is structured, factual, answerable.
        </p>
      </div>

      {/* Before / After in editorial product container */}
      <div className="bg-bg-2 rounded-[20px] border border-[rgba(26,20,16,0.12)] shadow-[0_12px_48px_rgba(26,20,16,0.10),0_2px_8px_rgba(26,20,16,0.06)] overflow-hidden p-2.5 md:p-3.5 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr,auto,1fr] gap-0 md:gap-0">

          {/* Before */}
          <div className="bg-bg rounded-xl md:rounded-[14px] border border-border overflow-hidden">
            {/* Card header with score */}
            <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
              <span className="text-[11px] tracking-[0.07em] uppercase font-medium text-text-3">Current</span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-text-3">Readiness</span>
                <span className="text-[18px] font-light tracking-[-0.03em] text-text tabular-nums leading-none">
                  <AnimatedScore target={BEFORE_SCORE} active={true} />
                </span>
                <span className="text-[11px] text-text-3">/100</span>
              </div>
            </div>

            <div className="p-2.5 md:p-3 divide-y divide-border">
              {BEFORE_FIELDS.map((field) => (
                <div key={field.label} className="flex items-start gap-2.5 px-2 md:px-3 py-2.5">
                  <StatusDot status={field.status} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2 mb-[3px]">
                      <p className="text-[11px] font-mono tracking-[0.02em] text-text-3">
                        {field.label}
                      </p>
                      {field.note && (
                        <span className="text-[10px] text-text-2 hidden sm:inline">
                          {field.note}
                        </span>
                      )}
                    </div>
                    {field.value ? (
                      <p className="text-[13px] leading-[1.5] text-text-2 break-words">
                        {field.value}
                      </p>
                    ) : (
                      <p className="text-[12px] leading-[1.5] text-text-3 italic">
                        empty
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center divider / arrow */}
          <div className="hidden md:flex flex-col items-center justify-center px-4">
            <div className="w-px h-10 bg-border" />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-[background-color,transform,border-color,opacity,box-shadow,color] duration-700 ${
              revealed ? 'bg-accent scale-100' : 'bg-bg-3 scale-90'
            }`}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`transition-colors duration-700 ${revealed ? 'text-[var(--text-inv)]' : 'text-text-3'}`}>
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="w-px h-10 bg-border" />
          </div>

          {/* Mobile divider */}
          <div className="flex md:hidden items-center justify-center py-3">
            <div className="h-px w-12 bg-border" />
            <div className={`w-7 h-7 rounded-full flex items-center justify-center mx-3 transition-[background-color,transform,border-color,opacity,box-shadow,color] duration-700 ${
              revealed ? 'bg-accent' : 'bg-bg-3'
            }`}>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className={`rotate-90 transition-colors duration-700 ${revealed ? 'text-[var(--text-inv)]' : 'text-text-3'}`}>
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="h-px w-12 bg-border" />
          </div>

          {/* After */}
          <div
            className={`bg-bg rounded-xl md:rounded-[14px] border overflow-hidden transition-[background-color,transform,border-color,opacity,box-shadow,color] duration-700 ${
              revealed
                ? 'border-[rgba(139,74,44,0.3)] shadow-[0_0_0_1px_rgba(139,74,44,0.06)]'
                : 'border-border opacity-50'
            }`}
          >
            {/* Card header with score */}
            <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
              <span className="text-[11px] tracking-[0.07em] uppercase font-medium text-text-3">With Carve</span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-text-3">Readiness</span>
                <span className={`text-[18px] font-light tracking-[-0.03em] tabular-nums leading-none transition-colors duration-700 ${
                  revealed ? 'text-[var(--positive)]' : 'text-text'
                }`}>
                  <AnimatedScore target={revealed ? AFTER_SCORE : BEFORE_SCORE} active={true} />
                </span>
                <span className="text-[11px] text-text-3">/100</span>
              </div>
            </div>

            <div className="p-2.5 md:p-3 divide-y divide-border">
              {AFTER_FIELDS.map((field, i) => (
                <div
                  key={field.label}
                  className={`flex items-start gap-2.5 px-2 md:px-3 py-2.5 transition-[opacity,transform] duration-500 ${
                    revealed ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-1'
                  }`}
                  style={{ transitionDelay: revealed ? `${i * 80}ms` : '0ms' }}
                >
                  <StatusDot status={revealed ? field.status : 'weak'} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2 mb-[3px]">
                      <p className="text-[11px] font-mono tracking-[0.02em] text-text-3">
                        {field.label}
                      </p>
                      {revealed && field.badge && <FieldBadgeTag badge={field.badge} />}
                    </div>

                    {/* Q&A pairs */}
                    {field.label === 'Q&A' ? (
                      <div className="space-y-2.5">
                        {QA_PAIRS.map((pair) => (
                          <div key={pair.q} className="text-[13px] leading-[1.5]">
                            <p className="text-text font-medium">{pair.q}</p>
                            <p className="text-text-2">{pair.a}</p>
                          </div>
                        ))}
                      </div>

                    /* Structured description with sections */
                    ) : field.sections ? (
                      <div className="space-y-2.5">
                        {field.sections.filter(s => s.body && s.body.trim()).map((section) => (
                          <div key={section.heading}>
                            <p className="text-[12px] font-medium text-text mb-[2px]">
                              {section.heading}
                            </p>
                            <p className="text-[13px] leading-[1.45] text-text-2">
                              {section.body}
                            </p>
                          </div>
                        ))}
                      </div>

                    ) : field.value ? (
                      <p className="text-[13px] leading-[1.5] text-text-2 break-words">
                        {field.value}
                      </p>
                    ) : (
                      <p className="text-[12px] leading-[1.5] text-text-3 italic">
                        empty
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
