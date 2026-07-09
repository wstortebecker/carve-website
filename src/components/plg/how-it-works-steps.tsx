import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { OrbMark } from '@/components/brand/orb-mark';

/* H3 — the carve.ac /how-it-works visual system (kept 1:1 for polish),
   re-languaged as working with a hire rather than running a tool. */

function StepArrow() {
  return (
    <span
      aria-hidden="true"
      className="hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 w-5 h-5 items-center justify-center text-text-3"
    >
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5H14.5M14.5 5L10.5 1M14.5 5L10.5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function AccessDiagram() {
  const dashedLine = {
    backgroundImage: 'repeating-linear-gradient(to right, #9A8878 0 3px, transparent 3px 6px)',
    opacity: 0.7,
  } as const;
  const tileClass =
    'w-11 h-11 rounded-[10px] bg-accent-bg border border-[rgba(139,74,44,0.18)] flex items-center justify-center text-accent shrink-0';
  const labelClass = 'text-[9px] font-medium tracking-[0.1em] uppercase text-text-3 whitespace-nowrap';
  return (
    <div className="relative w-full">
      <div className="flex items-center w-full">
        <div className={tileClass}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </div>
        <span aria-hidden="true" className="flex-1 h-px" style={dashedLine} />
        <div className="shrink-0 drop-shadow-[0_0_12px_rgba(139,74,44,0.35)]">
          <OrbMark size={36} />
        </div>
        <span aria-hidden="true" className="flex-1 h-px" style={dashedLine} />
        <div className={tileClass}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>
      </div>
      <div className="absolute top-full left-0 right-0 mt-3 flex items-center w-full">
        <div className="w-11 flex justify-center"><span className={labelClass}>Store</span></div>
        <span aria-hidden="true" className="flex-1" />
        <div className="w-9" aria-hidden="true" />
        <span aria-hidden="true" className="flex-1" />
        <div className="w-11 flex justify-center"><span className={labelClass}>Analytics</span></div>
      </div>
    </div>
  );
}

function WorkDiagram() {
  return (
    <div className="relative w-full max-w-[200px]" style={{ aspectRatio: '200 / 140' }}>
      <svg viewBox="0 0 200 140" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <g stroke="#5C4F45" strokeWidth="1" fill="#F5F0E8">
          <rect x="6" y="14" width="36" height="22" rx="3" />
          <rect x="6" y="42" width="36" height="22" rx="3" />
          <rect x="6" y="70" width="36" height="22" rx="3" />
          <rect x="6" y="98" width="36" height="22" rx="3" />
        </g>
        <g fill="#9A8878">
          <rect x="11" y="20" width="20" height="2" rx="1" /><rect x="11" y="26" width="14" height="2" rx="1" />
          <rect x="11" y="48" width="22" height="2" rx="1" /><rect x="11" y="54" width="16" height="2" rx="1" />
          <rect x="11" y="76" width="18" height="2" rx="1" /><rect x="11" y="82" width="22" height="2" rx="1" />
          <rect x="11" y="104" width="20" height="2" rx="1" /><rect x="11" y="110" width="14" height="2" rx="1" />
        </g>
        <g stroke="#9A8878" strokeWidth="1" strokeDasharray="2 3" fill="none">
          <line x1="44" y1="25" x2="78" y2="58" /><line x1="44" y1="53" x2="78" y2="64" />
          <line x1="44" y1="81" x2="78" y2="76" /><line x1="44" y1="109" x2="78" y2="82" />
        </g>
        <g stroke="#9A8878" strokeWidth="1" strokeDasharray="2 3" fill="none">
          <line x1="124" y1="62" x2="156" y2="38" /><line x1="124" y1="80" x2="156" y2="102" />
        </g>
        <g>
          <rect x="156" y="24" width="38" height="22" rx="11" fill="rgba(45,106,79,0.10)" stroke="#2D6A4F" strokeWidth="0.8" />
          <text x="175" y="39" fontFamily="DM Sans" fontSize="11" fontWeight="500" fill="#2D6A4F" textAnchor="middle">+46</text>
          <rect x="156" y="94" width="38" height="22" rx="11" fill="rgba(45,106,79,0.10)" stroke="#2D6A4F" strokeWidth="0.8" />
          <text x="175" y="109" fontFamily="DM Sans" fontSize="11" fontWeight="500" fill="#2D6A4F" textAnchor="middle">+31</text>
        </g>
        <text x="100" y="132" fontFamily="DM Sans" fontSize="8" fontWeight="500" fill="#9A8878" textAnchor="middle" letterSpacing="0.7">OPTIMIZED</text>
      </svg>
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_12px_rgba(139,74,44,0.35)]">
        <OrbMark size={36} />
      </div>
    </div>
  );
}

function ShipDiagram() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-auto max-w-[200px]" aria-hidden="true">
      {/* the optimized product, leaving */}
      <g>
        <rect x="12" y="22" width="64" height="96" rx="6" fill="#F5F0E8" stroke="#8B4A2C" strokeWidth="1.2" />
        <line x1="22" y1="38" x2="66" y2="38" stroke="#5C4F45" strokeWidth="1" />
        <line x1="22" y1="52" x2="62" y2="52" stroke="#5C4F45" strokeWidth="0.8" />
        <line x1="22" y1="62" x2="66" y2="62" stroke="#5C4F45" strokeWidth="0.8" />
        <line x1="22" y1="72" x2="56" y2="72" stroke="#5C4F45" strokeWidth="0.8" />
      </g>
      <g stroke="#5C4F45" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="84" y1="70" x2="104" y2="70" />
        <polyline points="99,66 104,70 99,74" />
      </g>
      {/* your store, receiving it live */}
      <g transform="translate(124,52)" stroke="#8B4A2C" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 4 2 9v25a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V9l-4-5Z" />
        <path d="M2 9h34" />
        <path d="M25 16a7 7 0 0 1-14 0" />
      </g>
      <circle cx="167" cy="54" r="11" fill="#8B4A2C" />
      <polyline points="161,54 165,58 173,50" stroke="#F5F0E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="146" y="124" fontFamily="DM Sans" fontSize="7" fontWeight="500" fill="#8B4A2C" textAnchor="middle" letterSpacing="0.7">PUBLISHED · LIVE</text>
    </svg>
  );
}

function UpdateDiagram() {
  return (
    <div className="w-full max-w-[200px] bg-bg border border-border rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-border">
        <span className="w-1.5 h-1.5 rounded-full bg-positive" />
        <span className="text-[9px] font-mono font-medium tracking-[0.12em] text-text-3 uppercase">Weekly update</span>
      </div>
      <div className="px-3.5 py-3 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-text-2">Products improved</span>
          <span className="text-[11px] font-medium text-positive">+12</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-text-2">Visibility</span>
          <span className="text-[11px] font-medium text-positive">+8 pts</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-text-2">Pushed to store</span>
          <span className="text-[11px] font-medium text-text">47</span>
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  { n: 1, label: 'Day one', desc: 'Give it access to your store and analytics. Onboarding takes about two minutes.', Diagram: AccessDiagram, arrow: true },
  { n: 2, label: 'It does the work', desc: 'It reviews every product and optimizes the ones losing you customers.', Diagram: WorkDiagram, arrow: true },
  { n: 3, label: 'It ships it', desc: 'It publishes the improvements straight to your store — on autopilot, or only when you approve. Every change is reversible.', Diagram: ShipDiagram, arrow: true },
  { n: 4, label: 'It keeps you posted', desc: 'Weekly status updates — what it changed, what moved. You manage nothing.', Diagram: UpdateDiagram, arrow: false },
];

export function HowItWorksSteps() {
  return (
    <section id="how-it-works" className="bg-bg-2 py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)]">
        <ScrollReveal>
          <div className="max-w-[680px] mx-auto text-center mb-12 md:mb-16">
            <h2 className="font-serif italic text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.025em] font-light text-text">
              Onboarded in less than two minutes.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          {STEPS.map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 0.06}>
              <div className="relative bg-bg border border-border rounded-2xl p-5 h-full flex flex-col transition-[border-color] duration-150 hover:border-border-2">
                {s.arrow && <StepArrow />}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-text-inv text-[11px] font-medium">{s.n}</span>
                  <span className="text-[14px] font-medium text-text">{s.label}</span>
                </div>
                {/* Fixed-height media box so every card's diagram and the
                    description below it line up across the row, regardless of
                    how long each description runs. */}
                <div className="bg-bg-2 rounded-xl p-3 h-[176px] flex items-center justify-center">
                  <s.Diagram />
                </div>
                <p className="text-[13px] leading-[1.55] text-text-2 mt-4">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
