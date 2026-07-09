import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Open roles at Carve will be posted here. We’re a small team building fast.',
  // Thin placeholder until roles are posted — keep it out of the index.
  robots: { index: false, follow: true },
  alternates: { canonical: '/careers' },
};

export default function CareersPage() {
  return (
    <section className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)] pt-12 pb-12 md:pt-20 md:pb-20">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="font-serif italic text-[clamp(40px,7vw,84px)] leading-[1.04] tracking-[-0.02em] font-light text-text enter">
          Coming soon.
        </h1>

        <p className="text-[17px] leading-[1.7] font-light text-text-2 max-w-[480px] mx-auto enter-d1">
          We're a small team building fast. Open roles will be posted here
          when the time is right.
        </p>

        <div className="pt-4 enter-d2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-text text-bg font-medium text-[15px] px-7 py-[13px] rounded-lg transition-all duration-150 hover:bg-[#2F2520] sm:hover:scale-[1.02]"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
