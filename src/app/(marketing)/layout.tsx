import { PlgNav } from '@/components/plg/nav';
import { PlgFooter } from '@/components/plg/footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PlgNav />
      <main>{children}</main>
      <PlgFooter />
    </>
  );
}
