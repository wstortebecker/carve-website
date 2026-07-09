export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Carve',
    legalName: 'Carve Labs AB',
    url: 'https://carve.ac',
    logo: 'https://carve.ac/brand/icon-512.png',
    description: 'Carve optimizes your Shopify catalog for Google and AI search, ships it to your store, and keeps it ranked — organic visibility on autopilot.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Carve',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://carve.ac',
    description: 'Carve optimizes your Shopify catalog for Google and AI search — product pages, feed, and collections — ships it to your store, and proves the lift in your own analytics.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free tier — up to 100 products. Paid plans from $199/month.',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  publishedTime,
  image,
}: {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
  image?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: publishedTime,
    publisher: {
      '@type': 'Organization',
      name: 'Carve',
      url: 'https://carve.ac',
    },
    ...(image && { image }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
