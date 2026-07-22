'use client';

import { usePathname } from 'next/navigation';
import { PlgFooter } from '@/components/plg/footer';
import { PlgNav } from '@/components/plg/nav';

const SELF_CONTAINED_ROUTES = new Set(['/how-it-works', '/pricing']);

export function MarketingChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (SELF_CONTAINED_ROUTES.has(pathname)) {
    return <>{children}</>;
  }

  return (
    <>
      <PlgNav />
      <main>{children}</main>
      <PlgFooter />
    </>
  );
}
