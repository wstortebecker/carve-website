'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { OrbMark } from '@/components/brand/orb-mark';
import { CTA_LINKS } from '@/config/cta-links';

export function PlgNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const tokens = {
    nav: "bg-[rgba(245,240,232,0.92)] border-b border-border",
    logoText: "text-text",
    linkIdle: "text-text-2 hover:text-text hover:bg-[rgba(26,20,16,0.06)]",
    linkActive: "text-text bg-[rgba(26,20,16,0.08)]",
    mobileBtn: "text-text-2 hover:text-text",
    mobileBorder: "border-t border-border",
  };

  return (
    <nav className={cn("sticky top-0 z-[100] backdrop-blur-[8px]", tokens.nav)}>
      <div className="max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="flex items-center h-[58px] gap-2 md:gap-1">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-[10px] mr-auto md:mr-[36px]"
          >
            <OrbMark size={20} />
            <span className={cn("font-serif text-[17px] md:text-[18px] tracking-[0.02em] font-semibold uppercase", tokens.logoText)}>
              Carve
            </span>
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex gap-1">
            <Link
              href="/how-it-works"
              className={cn(
                "text-[13px] font-normal px-3 py-[6px] rounded-md transition-[color,background-color] duration-120",
                isActive('/how-it-works') ? tokens.linkActive : tokens.linkIdle
              )}
            >
              How it works
            </Link>
            <Link
              href="/pricing"
              className={cn(
                "text-[13px] font-normal px-3 py-[6px] rounded-md transition-[color,background-color] duration-120",
                isActive('/pricing') ? tokens.linkActive : tokens.linkIdle
              )}
            >
              Pricing
            </Link>
          </div>

          {/* CTAs - Desktop */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            <a
              href={CTA_LINKS.BOOK_MEETING}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-text-inv font-medium text-[13px] px-[18px] py-2 rounded-lg transition-[background-color,transform] duration-150 hover:bg-accent-h hover:scale-[1.02] tracking-[-0.01em]"
            >
              Book a call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn("md:hidden p-2.5 -mr-1.5 transition-colors", tokens.mobileBtn)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ease-out",
            mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className={cn("py-4 space-y-1", tokens.mobileBorder)}>
            <Link
              href="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block text-[15px] font-normal px-3 py-3 rounded-md transition-[color,background-color] duration-120",
                isActive('/how-it-works') ? tokens.linkActive : tokens.linkIdle
              )}
            >
              How it works
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block text-[15px] font-normal px-3 py-3 rounded-md transition-[color,background-color] duration-120",
                isActive('/pricing') ? tokens.linkActive : tokens.linkIdle
              )}
            >
              Pricing
            </Link>

            {/* Mobile CTAs */}
            <div className="pt-3 space-y-2">
              <a
                href={CTA_LINKS.BOOK_MEETING}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-accent text-text-inv font-medium text-[15px] px-[18px] py-3 rounded-lg transition-[background-color] duration-150 hover:bg-accent-h"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
