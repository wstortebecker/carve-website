import type { Metadata } from 'next';
import { LockedMarketingPage } from '@/components/marketing/locked-marketing-page';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'How Carve works',
  description:
    'Connect Shopify, Search Console and GA4. Confirm what Carve understands, choose its scope, then review every product-data change or let proven work run on Autopilot.',
  alternates: { canonical: '/how-it-works' },
};

export default function HowItWorksPage() {
  return <LockedMarketingPage page="how-it-works" />;
}
