type PortableTextBlock = {
  _type: string;
  children?: Array<{ _type: string; text?: string }>;
};

export function readingTimeMinutes(body: PortableTextBlock[] | undefined | null): number {
  if (!body || body.length === 0) return 1;
  const words = body
    .filter((b) => b._type === 'block' && Array.isArray(b.children))
    .flatMap((b) => b.children!)
    .filter((c) => c._type === 'span' && typeof c.text === 'string')
    .map((c) => c.text as string)
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(words / 220));
}
