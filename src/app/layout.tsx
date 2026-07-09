import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://carve.ac'),
  title: {
    default: "Carve — Organic visibility, on autopilot",
    template: "%s | Carve",
  },
  description:
    "Carve optimizes your Shopify catalog for Google and AI search, ships it to your store, and keeps it ranked — organic visibility on autopilot.",
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
