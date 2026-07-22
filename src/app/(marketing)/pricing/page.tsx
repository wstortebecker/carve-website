import type { Metadata } from 'next';
import { LockedMarketingPage } from '@/components/marketing/locked-marketing-page';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'The complete Carve product-data engine for every Shopify store. Free up to 100 products, with plans that scale by catalog size and support.',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return <LockedMarketingPage page="pricing" />;
}
