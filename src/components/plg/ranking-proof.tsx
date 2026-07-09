'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { OrbMark } from '@/components/brand/orb-mark';

/* H2 — proof shown as Carve's own analytics dashboard (the Peec/Ahrefs
   pattern): a clean time-series + KPI row over the three real signal
   channels Carve learns from — Search Console impressions, GA4 AI-referred
   sessions, on-site conversion. Representative sample data; no third-party
   screenshots, no fabricated per-engine scores.
   The chart draws and the KPIs count up on scroll — same data, same look.
   prefers-reduced-motion renders the final state with no animation. */

const DARK_GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const C_SEO = '#8B4A2C';   // terracotta
const C_AI = '#2D6A4F';    // forest
const C_CVR = '#8B6430';   // warm amber

function Up({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 text-positive font-medium">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12l7-7 7 7M12 19V6" />
      </svg>
      {children}
    </span>
  );
}

function CountUp({ to, format }: { to: number; format: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setV(to);
      return;
    }
    const dur = 1100;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);

  return <span ref={ref} className="tabular-nums">{format(v)}</span>;
}

function Spark({ d, color, reduce }: { d: string; color: string; reduce: boolean }) {
  return (
    <svg viewBox="0 0 200 40" className="w-full h-[34px]" preserveAspectRatio="none" aria-hidden="true">
      {reduce ? (
        <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      ) : (
        <motion.path
          d={d}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        />
      )}
    </svg>
  );
}

const METRICS = [
  { label: 'SEO impressions', src: 'Search Console', delta: '+41%', color: C_SEO, spark: 'M0,34 L40,32 L80,30 L120,22 L160,15 L200,6', to: 12.4, format: (n: number) => `${n.toFixed(1)}k` },
  { label: 'AI-referred sessions', src: 'GA4', delta: '3.2×', color: C_AI, spark: 'M0,37 L40,35 L80,31 L120,24 L160,15 L200,5', to: 1280, format: (n: number) => Math.round(n).toLocaleString('en-US') },
  { label: 'On-page conversion', src: 'GA4', delta: '+18%', color: C_CVR, spark: 'M0,33 L40,31 L80,29 L120,25 L160,20 L200,12', to: 4.7, format: (n: number) => `${n.toFixed(1)}%` },
];

// Main chart series — 28-day trend, all rising. Coords in a 760x210 plot.
const SERIES = [
  { name: 'SEO impressions', color: C_SEO, d: 'M0,150 L108,142 L217,146 L326,120 L434,104 L543,72 L651,52 L760,30' },
  { name: 'AI-referred sessions', color: C_AI, d: 'M0,178 L108,174 L217,168 L326,150 L434,124 L543,96 L651,58 L760,24' },
  { name: 'On-page conversion', color: C_CVR, d: 'M0,166 L108,160 L217,156 L326,148 L434,138 L543,122 L651,104 L760,82' },
];
const GRID = [20, 64, 108, 152, 196];
const XLABELS = ['Apr 19', 'Apr 26', 'May 3', 'May 10', 'May 17'];

export function RankingProof() {
  const reduce = useReducedMotion();

  return (
    <section id="ranking" className="relative bg-bg-inv overflow-hidden py-12 md:py-20">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ backgroundImage: DARK_GRAIN, backgroundSize: '180px 180px' }}
      />
      <div className="relative max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)]">
        <ScrollReveal>
          <div className="max-w-[820px] mb-7">
            <h2 className="font-serif italic text-[clamp(34px,5vw,56px)] leading-[1.05] tracking-[-0.03em] font-light text-text-inv">
              A human can’t read your whole catalog<br />every week. <span className="text-[#D6B89A]">Carve does</span>.
            </h2>
          </div>
          <p className="text-[18px] leading-[1.5] font-normal text-[rgba(245,240,232,0.84)] max-w-[600px] mb-12 md:mb-14">
            96% of pages get zero traffic from Google <span className="text-[rgba(245,240,232,0.58)]">(Ahrefs, 14B pages)</span>. An agency touches your top pages; one hire, a few dozen a month. Carve reads every product, every week.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="max-w-[980px] mx-auto bg-bg border border-[rgba(26,20,16,0.12)] rounded-2xl overflow-hidden shadow-[0_40px_90px_-30px_rgba(0,0,0,0.55),0_8px_30px_-10px_rgba(0,0,0,0.35)]">
            {/* App bar */}
            <div className="flex items-center gap-3 px-5 md:px-7 py-3.5 border-b border-border bg-bg-2">
              <OrbMark size={18} />
              <span className="text-[14px] font-medium text-text">Carve</span>
              <span className="hidden sm:block text-[12px] font-mono text-text-3">yourstore.myshopify.com</span>
              <span className="ml-auto inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.06em] text-positive">
                <span className="w-1.5 h-1.5 rounded-full bg-positive" />Autopilot on
              </span>
            </div>

            <div className="p-5 md:p-7">
              {/* Chart toolbar: title, legend, range */}
              <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
                <span className="text-[15px] font-medium text-text">Visibility</span>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-4">
                    {SERIES.map((s) => (
                      <span key={s.name} className="inline-flex items-center gap-1.5 text-[11px] text-text-2">
                        <span className="w-2.5 h-[3px] rounded-full" style={{ background: s.color }} />
                        {s.name}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[12px] text-text-2 border border-border rounded-lg px-2.5 py-1">
                    Last 28 days
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                  </span>
                </div>
              </div>

              {/* Main time-series */}
              <div className="rounded-xl border border-border bg-bg-2 px-4 pt-5 pb-3">
                <svg viewBox="0 0 760 230" className="w-full h-auto" aria-hidden="true">
                  {GRID.map((y) => (
                    <line key={y} x1="0" y1={y} x2="760" y2={y} stroke="rgba(26,20,16,0.07)" strokeWidth="1" />
                  ))}
                  {SERIES.map((s, i) =>
                    reduce ? (
                      <path key={s.name} d={s.d} fill="none" stroke={s.color} strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                    ) : (
                      <motion.path
                        key={s.name}
                        d={s.d}
                        fill="none"
                        stroke={s.color}
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                      />
                    )
                  )}
                  {SERIES.map((s) => {
                    const end = s.d.split('L').pop()!.split(',');
                    return reduce ? (
                      <circle key={s.name} cx={end[0]} cy={end[1]} r="3.5" fill={s.color} />
                    ) : (
                      <motion.circle
                        key={s.name}
                        cx={end[0]}
                        cy={end[1]}
                        r="3.5"
                        fill={s.color}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.4, delay: 1.1 }}
                      />
                    );
                  })}
                </svg>
                <div className="flex justify-between mt-2">
                  {XLABELS.map((x) => (
                    <span key={x} className="text-[10px] font-mono text-text-3">{x}</span>
                  ))}
                </div>
              </div>

              {/* KPI row — the three real channels */}
              <div className="grid sm:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden mt-5">
                {METRICS.map((m) => (
                  <div key={m.label} className="bg-bg-2 px-5 pt-4 pb-3.5 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] uppercase tracking-[0.08em] text-text-3">{m.label}</span>
                      <span className="text-[10px] font-mono text-text-3">{m.src}</span>
                    </div>
                    <div className="flex items-end justify-between gap-3">
                      <span className="text-[clamp(24px,3vw,32px)] leading-none font-light tracking-[-0.03em] text-text">
                        <CountUp to={m.to} format={m.format} />
                      </span>
                      <span className="text-[12px] mb-0.5"><Up>{m.delta}</Up></span>
                    </div>
                    <Spark d={m.spark} color={m.color} reduce={!!reduce} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <p className="text-[14px] leading-[1.6] text-[rgba(245,240,232,0.74)] max-w-[600px] mt-7">
            Measured from your own Search Console and GA4. Not synthetic prompts. Not made-up scores.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
