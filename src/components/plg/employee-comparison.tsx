import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { OrbMark } from '@/components/brand/orb-mark';

type Row = { label: string; carve: string; agency: string; hire: string; emphasis?: boolean };

const ROWS: Row[] = [
  { label: 'Role', carve: 'AI SEO + GEO specialist', agency: 'Marketing vendor', hire: 'Marketing employee' },
  { label: 'Covers SEO', carve: 'Yes', agency: 'Yes', hire: 'Yes' },
  { label: 'Covers GEO — ChatGPT, Perplexity, AI agents', carve: 'Built in', agency: 'Paid add-on, if at all', hire: 'New to most', emphasis: true },
  { label: 'Works in any language', carve: 'Yes, natively', agency: 'Extra scope, extra fee', hire: 'One language, usually' },
  { label: 'Reads your live GSC + GA4 weekly', carve: 'Yes', agency: 'Monthly report', hire: 'When they have time' },
  { label: 'Products optimized per month', carve: 'Your whole catalog', agency: '10–30', hire: '~20–60' },
  { label: 'Time to first work shipped', carve: 'Same day', agency: '2–4 weeks', hire: '2–3 months' },
  { label: 'What you actually manage', carve: 'Connect Shopify', agency: 'Briefs, calls, chasing', hire: 'Recruiting, 1:1s, retention' },
  { label: 'Commitment', carve: 'Cancel anytime', agency: '6–12 month contract', hire: 'Salary + notice' },
];

export function EmployeeComparison() {
  return (
    <section id="comparison" className="bg-bg py-16 md:py-28">
      <div className="max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)]">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.09em] uppercase text-text-3 mb-5">
<OrbMark size={12} />The comparison
          </span>
          <div className="max-w-[760px] mb-6">
            <h2 className="font-serif italic text-[clamp(36px,5vw,48px)] leading-[1.1] tracking-[-0.025em] font-light text-text">
              Three ways to rank your catalog.
            </h2>
          </div>
          <p className="text-[17px] leading-[1.7] font-normal text-text-2 max-w-[560px] mb-14 md:mb-16">
            All three can do the work. They differ in what they do, how fast they start, and what they ask of you.
          </p>
        </ScrollReveal>

        {/* Desktop — a real table; Carve is the dark column */}
        <ScrollReveal delay={0.08}>
          <div className="hidden md:block max-w-[980px] border border-border rounded-2xl overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-[31%]" />
                  <th className="w-[23%] text-left align-bottom bg-bg-inv px-7 py-6">
                    <span className="flex items-center gap-2.5 text-[15px] font-medium text-text-inv">
                      <OrbMark size={18} /><span className="font-serif font-semibold uppercase tracking-[0.02em] text-[18px]">Carve</span>
                    </span>
                  </th>
                  <th className="w-[23%] text-left align-bottom px-7 py-6 text-[14px] font-medium text-text-3">SEO agency</th>
                  <th className="w-[23%] text-left align-bottom px-7 py-6 text-[14px] font-medium text-text-3">In-house hire</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.label}>
                    <td className={`px-7 py-[17px] border-t border-border text-[13px] ${r.emphasis ? 'text-text font-medium' : 'text-text-2'}`}>{r.label}</td>
                    <td className={`px-7 py-[17px] bg-bg-inv border-t border-[rgba(245,240,232,0.10)] text-[14px] font-medium ${r.emphasis ? 'text-[#D6B89A]' : 'text-text-inv'}`}>{r.carve}</td>
                    <td className={`px-7 py-[17px] border-t border-border text-[14px] ${r.emphasis ? 'text-text-2' : 'text-text-2'}`}>{r.agency}</td>
                    <td className={`px-7 py-[17px] border-t border-border text-[14px] ${r.emphasis ? 'text-text-2' : 'text-text-2'}`}>{r.hire}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Mobile — stacked; Carve is the dark featured card */}
        <div className="md:hidden space-y-4">
          <ScrollReveal>
            <MobileCard featured name="Carve" rows={ROWS.map((r) => ({ label: r.label, value: r.carve, emphasis: r.emphasis }))} />
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <MobileCard name="SEO agency" rows={ROWS.map((r) => ({ label: r.label, value: r.agency, emphasis: r.emphasis }))} />
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <MobileCard name="In-house hire" rows={ROWS.map((r) => ({ label: r.label, value: r.hire, emphasis: r.emphasis }))} />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1}>
          <p className="font-serif italic font-light text-[clamp(20px,2.4vw,28px)] leading-[1.3] tracking-[-0.015em] text-text mt-12 md:mt-16 max-w-[680px]">
            Same place at the top of Google and ChatGPT. None of the hiring, briefing, or waiting.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function MobileCard({
  name,
  rows,
  featured = false,
}: {
  name: string;
  rows: { label: string; value: string; emphasis?: boolean }[];
  featured?: boolean;
}) {
  return (
    <div className={featured ? 'bg-bg-inv rounded-2xl p-6' : 'rounded-2xl p-6 border border-border'}>
      <div className="flex items-center gap-2.5 mb-5">
        {featured && <OrbMark size={18} />}
        <span className={`${featured ? 'font-serif font-semibold uppercase tracking-[0.02em] text-[18px] text-text-inv' : 'text-[15px] font-medium text-text-2'}`}>{name}</span>
      </div>
      <div className="space-y-3.5">
        {rows.map((r) => (
          <div key={r.label} className="flex flex-col gap-0.5">
            <span className={`text-[12px] ${featured ? 'text-[rgba(245,240,232,0.74)]' : 'text-text-2'}`}>{r.label}</span>
            <span
              className={`text-[14px] ${
                featured
                  ? r.emphasis ? 'font-medium text-[#D6B89A]' : 'font-medium text-text-inv'
                  : r.emphasis ? 'text-text-2' : 'text-text-2'
              }`}
            >
              {r.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
