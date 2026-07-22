export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Carve',
    legalName: 'Carve Labs AB',
    url: 'https://carve.ac',
    logo: 'https://carve.ac/brand/icon-512.png',
    description: 'Carve turns product understanding into product data that helps Shopify brands get found, understood and chosen.',
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
    description: 'Carve understands products, buyers and brands, improves product data, ships approved changes to Shopify and learns from search and conversion performance.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free tier for up to 100 active products. Paid plans from $499/month.',
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
