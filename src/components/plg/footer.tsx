import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { OrbMark } from '@/components/brand/orb-mark';
import { CTA_LINKS } from '@/config/cta-links';

export function PlgFooter() {
  return (
    <footer className="relative bg-bg-inv overflow-hidden">
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
        }}
      />

      <div className="relative max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)] py-12 md:py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Column 1: Carve */}
          <div className="space-y-4">
            <div className="flex items-center gap-[10px]">
              <OrbMark size={20} />
              <span className="font-serif text-[17px] md:text-[18px] tracking-[0.02em] text-text-inv font-semibold uppercase">
                Carve
              </span>
            </div>
            <p className="text-[13px] text-text-inv opacity-[0.74] leading-[1.6] max-w-[240px]">
              Organic visibility on autopilot for Shopify brands.
            </p>
            <a
              href={CTA_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Carve on LinkedIn"
              className="inline-flex items-center justify-center text-text-inv opacity-[0.74] hover:opacity-100 transition-opacity duration-120"
            >
              <Linkedin size={16} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>

          {/* Column 2: Product */}
          <div className="space-y-3">
            <p className="text-[11px] tracking-[0.09em] uppercase font-medium text-text-inv opacity-[0.74]">
              Product
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/how-it-works"
                className="text-[13px] text-text-inv opacity-[0.74] hover:opacity-100 transition-opacity duration-120"
              >
                How it works
              </Link>
              <Link
                href="/pricing"
                className="text-[13px] text-text-inv opacity-[0.74] hover:opacity-100 transition-opacity duration-120"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Column 3: Start */}
          <div className="space-y-3">
            <p className="text-[11px] tracking-[0.09em] uppercase font-medium text-text-inv opacity-[0.74]">
              Start
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={CTA_LINKS.BOOK_MEETING}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-text-inv opacity-[0.74] hover:opacity-100 transition-opacity duration-120"
              >
                Book a call
              </a>
              <Link
                href="/login"
                className="text-[13px] text-text-inv opacity-[0.74] hover:opacity-100 transition-opacity duration-120"
              >
                Log in
              </Link>
              <Link
                href="/demo"
                className="text-[13px] text-text-inv opacity-[0.74] hover:opacity-100 transition-opacity duration-120"
              >
                Free audit
              </Link>
            </div>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-3">
            <p className="text-[11px] tracking-[0.09em] uppercase font-medium text-text-inv opacity-[0.74]">
              Company
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/insights"
                className="text-[13px] text-text-inv opacity-[0.74] hover:opacity-100 transition-opacity duration-120"
              >
                Insights
              </Link>
              <a
                href="mailto:william@carve.ac"
                className="text-[13px] text-text-inv opacity-[0.74] hover:opacity-100 transition-opacity duration-120"
              >
                william@carve.ac
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-[rgba(245,240,232,0.1)] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-[12px] text-text-inv opacity-[0.74]">
            &copy; 2026 Carve &middot; Carve Labs AB
          </div>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-[12px] text-text-inv opacity-[0.74] hover:opacity-100 transition-opacity duration-120"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] text-text-inv opacity-[0.74] hover:opacity-100 transition-opacity duration-120"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
