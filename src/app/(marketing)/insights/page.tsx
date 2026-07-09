import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { sanityClient } from '@/lib/sanity/client';
import { allPostsQuery } from '@/lib/sanity/queries';
import { readingTimeMinutes } from '@/lib/sanity/reading-time';
import { BlogPost } from '@/types/blog';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { CTA_LINKS } from '@/config/cta-links';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Research and analysis on agentic commerce. How AI agents evaluate products, what signals matter, and how to optimize for them.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights | Carve',
    description: 'Research and analysis on how AI agents evaluate products and what brands need to do.',
  },
};

const DARK_GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

async function getPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sanityClient.fetch(allPostsQuery);
    return posts || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function PlgInsightsPage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="relative bg-bg overflow-hidden">

      {/* Hero — light, orb right */}
      <section className="hero-light relative">
        <div className="max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)] pt-12 md:pt-20 pb-12 md:pb-16">
          <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-12 items-center md:min-h-[380px]">
            <div className="space-y-6 md:space-y-7">
              <h1 className="font-serif italic text-[clamp(44px,6.4vw,72px)] leading-[1.02] tracking-[-0.02em] font-light text-text enter">
                Thinking on<br />agentic commerce.
              </h1>

              <p className="text-[17px] leading-[1.7] font-normal text-text-2 max-w-[460px] enter-d1">
                Original research on how AI agents evaluate products, what signals matter, and where commerce is heading.
              </p>
            </div>

            {/* Orb */}
            <div className="flex items-center justify-center enter-d1">
              <div className="relative flex items-center justify-center scale-100 lg:scale-110">
                <span aria-hidden className="orb-glow" />
                <div className="orbit-wrap size-hero" aria-hidden="true">
                  <div className="orbit-core" />
                  <div className="orbit-ring tilt-a" />
                  <div className="orbit-ring tilt-b" />
                  <div className="orbit-ring tilt-c" />
                  <div className="orbit-dot a" />
                  <div className="orbit-dot b" />
                  <div className="orbit-dot c" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="relative pb-16 md:pb-24">
        <div className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)]">
          {posts.length === 0 ? (
            <div className="flex items-center justify-center min-h-[200px]">
              <p className="text-[15px] text-text-2">Coming soon.</p>
            </div>
          ) : (
            <div className="space-y-10 md:space-y-14">
              {/* Featured post */}
              <Link
                href={`/insights/${featured.slug.current}`}
                className="group block"
              >
                {featured.mainImage?.asset?.url ? (
                  <article className="bg-bg-2 border border-border rounded-2xl overflow-hidden transition-colors duration-150 hover:border-border-2 grid md:grid-cols-[1.1fr_1fr]">
                    <div className="relative bg-bg-3 aspect-[16/10] md:aspect-auto md:min-h-[360px] overflow-hidden">
                      <Image
                        src={featured.mainImage.asset.url}
                        alt={featured.mainImage.alt || featured.title}
                        fill
                        sizes="(min-width: 768px) 55vw, 100vw"
                        priority
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-7 md:p-10 flex flex-col justify-center space-y-4">
                      <h2 className="font-serif italic text-[clamp(26px,3vw,38px)] leading-[1.15] tracking-[-0.02em] font-light text-text group-hover:text-accent transition-colors">
                        {featured.title}
                      </h2>
                      {featured.excerpt && (
                        <p className="text-[15px] leading-[1.65] text-text-2 max-w-[560px]">
                          {featured.excerpt}
                        </p>
                      )}
                      <div className="flex items-center gap-2 pt-2 text-[13px] text-text-3">
                        <span>{featured.author.name}</span>
                        <span className="w-[3px] h-[3px] rounded-full bg-[rgba(26,20,16,0.28)]" />
                        <time dateTime={featured.publishedAt}>
                          {format(new Date(featured.publishedAt), 'MMM d, yyyy')}
                        </time>
                        <span className="w-[3px] h-[3px] rounded-full bg-[rgba(26,20,16,0.28)]" />
                        <span>{readingTimeMinutes(featured.body)} min read</span>
                      </div>
                    </div>
                  </article>
                ) : (
                  <article className="relative bg-bg-2 border border-border rounded-2xl overflow-hidden transition-colors duration-150 hover:border-border-2 p-8 md:p-14">
                    <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-8 md:gap-12">
                      <div className="space-y-5 max-w-[680px]">
                        <h2 className="font-serif italic text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-[-0.025em] font-light text-text group-hover:text-accent transition-colors">
                          {featured.title}
                        </h2>
                        {featured.excerpt && (
                          <p className="text-[16px] leading-[1.7] font-normal text-text-2">
                            {featured.excerpt}
                          </p>
                        )}
                        <div className="flex items-center gap-2 pt-2 text-[13px] text-text-3">
                          <span>{featured.author.name}</span>
                          <span className="w-[3px] h-[3px] rounded-full bg-[rgba(26,20,16,0.28)]" />
                          <time dateTime={featured.publishedAt}>
                            {format(new Date(featured.publishedAt), 'MMM d, yyyy')}
                          </time>
                          <span className="w-[3px] h-[3px] rounded-full bg-[rgba(26,20,16,0.28)]" />
                          <span>{readingTimeMinutes(featured.body)} min read</span>
                        </div>
                      </div>
                      <div className="hidden lg:flex items-center gap-2 text-[13px] font-medium text-text-2 self-end pb-2 group-hover:text-accent transition-colors">
                        <span>Read</span>
                        <svg className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </article>
                )}
              </Link>

              {/* Remaining posts — dark editorial grid */}
              {rest.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
                  {rest.map((post) => (
                    <Link
                      key={post._id}
                      href={`/insights/${post.slug.current}`}
                      className="group block h-full"
                    >
                      <article className="bg-bg-2 border border-border rounded-2xl overflow-hidden transition-colors duration-150 hover:border-border-2 h-full flex flex-col">
                        {post.mainImage?.asset?.url && (
                          <div className="aspect-[3/2] bg-bg-3 relative overflow-hidden flex-shrink-0">
                            <Image
                              src={post.mainImage.asset.url}
                              alt={post.mainImage.alt || post.title}
                              fill
                              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                          </div>
                        )}

                        <div className="p-6 flex flex-col flex-grow">
                          <div className="space-y-3">
                            {post.categories && post.categories.length > 0 && (
                              <div className="flex gap-2 flex-wrap">
                                {post.categories.map((cat) => (
                                  <span
                                    key={cat.slug.current}
                                    className="inline-flex items-center font-medium text-[11px] leading-[1.4] tracking-[0.07em] uppercase text-text-3"
                                  >
                                    {cat.title}
                                  </span>
                                ))}
                              </div>
                            )}

                            <h3 className="font-serif italic text-[22px] leading-[1.2] tracking-[-0.015em] font-light text-text group-hover:text-accent transition-colors line-clamp-2">
                              {post.title}
                            </h3>

                            {post.excerpt && (
                              <p className="text-[14px] leading-[1.65] text-text-2 line-clamp-5">
                                {post.excerpt}
                              </p>
                            )}
                          </div>

                          <div className="mt-auto pt-4 border-t border-border">
                            <div className="flex items-center gap-2 text-[12px] text-text-3 whitespace-nowrap overflow-hidden">
                              <span className="truncate min-w-0">{post.author.name}</span>
                              <span className="w-[3px] h-[3px] rounded-full bg-[rgba(26,20,16,0.24)] flex-shrink-0" />
                              <time dateTime={post.publishedAt} className="flex-shrink-0">
                                {format(new Date(post.publishedAt), 'MMM d, yyyy')}
                              </time>
                              <span className="w-[3px] h-[3px] rounded-full bg-[rgba(26,20,16,0.24)] flex-shrink-0" />
                              <span className="flex-shrink-0">{readingTimeMinutes(post.body)} min read</span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Dark CTA */}
      <ScrollReveal>
        <section className="relative bg-bg-inv border-t border-[rgba(245,240,232,0.08)] py-16 md:py-24 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: DARK_GRAIN, backgroundSize: '180px 180px' }}
          />
          <div className="relative max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)] text-center space-y-6">
            <h2 className="font-serif italic text-[clamp(32px,4vw,52px)] leading-[1.08] tracking-[-0.025em] font-light text-text-inv max-w-[640px] mx-auto">
              Your competitors are already optimizing for AI. Are you?
            </h2>
            <p className="text-[17px] leading-[1.6] font-normal text-[rgba(245,240,232,0.82)] max-w-[460px] mx-auto">
              Free to start. Two minutes to your first scores. No credit card needed.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
              <a
                href={CTA_LINKS.BOOK_MEETING}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-text-inv font-medium text-[15px] px-7 py-[13px] rounded-lg transition-[background-color,transform] duration-150 hover:bg-accent-h sm:hover:scale-[1.02] w-full sm:w-auto"
              >
                Book a call
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
