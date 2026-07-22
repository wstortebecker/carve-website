import fs from 'node:fs';
import path from 'node:path';
import Script from 'next/script';

export type LockedMarketingPageName = 'home' | 'how-it-works' | 'pricing';

const SOURCE_FILES: Record<LockedMarketingPageName, string> = {
  home: 'home.html',
  'how-it-works': 'how-it-works.html',
  pricing: 'pricing.html',
};

const PLATFORM_URL = (process.env.NEXT_PUBLIC_CARVE_APP_URL || 'https://app.carve.ac').replace(
  /\/$/,
  ''
);

function normalizePrototypeUrls(html: string): string {
  return html
    .replaceAll('./carve-ecom-assets/', '/marketing-assets/')
    .replaceAll('./carve-product-understanding-homepage.html', '/')
    .replaceAll('./carve-how-it-works-option-b.html', '/how-it-works')
    .replaceAll('./carve-how-it-works.html', '/how-it-works')
    .replaceAll('./carve-pricing.html', '/pricing')
    .replaceAll('https://carve.ac/demo', `${PLATFORM_URL}/demo`)
    .replaceAll('https://carve.ac/login', `${PLATFORM_URL}/login`)
    .replaceAll('https://carve.ac/', '/');
}

function extractDocumentParts(html: string) {
  const normalized = normalizePrototypeUrls(html);
  const style = normalized.match(/<style[^>]*>([\s\S]*?)<\/style>/i)?.[1];
  const body = normalized.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1];

  if (style === undefined || body === undefined) {
    throw new Error('Locked marketing page is missing its style or body block.');
  }

  const scripts = Array.from(body.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi), (match) => match[1]);
  const markup = body.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

  return { style, markup, script: scripts.join('\n') };
}

export function LockedMarketingPage({ page }: { page: LockedMarketingPageName }) {
  const sourcePath = path.join(process.cwd(), 'src', 'content', 'marketing', SOURCE_FILES[page]);
  const source = fs.readFileSync(sourcePath, 'utf8');
  const document = extractDocumentParts(source);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: document.style }} />
      <div
        className="locked-marketing-document"
        dangerouslySetInnerHTML={{ __html: document.markup }}
      />
      {document.script !== '' && (
        <Script
          id={`locked-marketing-${page}`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: document.script }}
        />
      )}
    </>
  );
}
