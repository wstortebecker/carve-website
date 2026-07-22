import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://carve.ac'),
  title: {
    default: "Carve — Product data that gets products found and chosen",
    template: "%s | Carve",
  },
  description:
    "Carve understands your products, buyers and brand, then turns that understanding into product data Google can rank, AI agents can reason over and shoppers can buy from.",
  openGraph: {
    type: 'website',
    siteName: 'Carve',
    locale: 'en_US',
    images: [{ url: '/brand/og-image.png', width: 1200, height: 630, alt: 'Carve' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/brand/og-image.png'],
  },
  icons: {
    apple: '/brand/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
