import type { Metadata } from 'next';
import { LockedMarketingPage } from '@/components/marketing/locked-marketing-page';
import { OrganizationJsonLd, SoftwareApplicationJsonLd } from '@/components/seo/JsonLd';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: { absolute: 'Carve — Product data that gets products found and chosen' },
  description:
    'Carve understands your products, buyers and brand, then turns that understanding into product data Google can rank, AI agents can reason over and shoppers can buy from.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <SoftwareApplicationJsonLd />
      <LockedMarketingPage page="home" />
    </>
  );
}
