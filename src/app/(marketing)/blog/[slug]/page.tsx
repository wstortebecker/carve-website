import type { Metadata } from 'next';
import { sanityClient, urlFor } from '@/lib/sanity/client';
import { postBySlugQuery } from '@/lib/sanity/queries';
import { BlogPost } from '@/types/blog';
import { format } from 'date-fns';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const post = await sanityClient.fetch(postBySlugQuery, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};

  const description = post.excerpt || `${post.title} — from Carve insights.`;
  const ogImage = post.mainImage?.asset?.url
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : undefined;

  return {
    title: post.title,
    description,
    // This post also lives at /insights/<slug>, the canonical surface.
    alternates: { canonical: `https://carve.ac/insights/${params.slug}` },
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <article className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)] pt-20 pb-32">
        <div className="max-w-[680px] mx-auto">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2 mb-8">
              {post.categories.map((cat) => (
                <span
                  key={cat.slug.current}
                  className="inline-flex items-center gap-1.5 font-medium text-[11px] leading-[1.4] tracking-[0.05em] uppercase px-2.5 py-1 rounded-full bg-accent-bg text-accent"
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          {/* Title - Hero Style */}
          <h1 className="font-serif italic text-[clamp(36px,6vw,72px)] leading-[1.06] tracking-[-0.02em] font-light text-text mb-12 text-balance">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-16 pb-12 border-b border-border">
            {post.author.image?.asset?.url && (
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-bg-3">
                <Image
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <div className="text-[15px] font-normal text-text">
                {post.author.name}
              </div>
              <div className="text-[13px] text-text-3 font-light">
                {post.author.role && <span>{post.author.role} · </span>}
                <time dateTime={post.publishedAt}>
                  {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                </time>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {post.mainImage?.asset?.url && (
            <div className="aspect-[16/9] relative rounded-2xl overflow-hidden mb-16 bg-bg-3 -mx-4 md:mx-0">
              <Image
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Body Content */}
          <div className="prose prose-carve">
            <PortableText
              value={post.body || []}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-[16px] leading-[1.75] text-text-2 mb-8">
                      {children}
                    </p>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-[32px] leading-[1.2] tracking-[-0.02em] font-medium text-text mt-16 mb-6">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-[22px] leading-[1.3] tracking-[-0.015em] font-medium text-text mt-12 mb-4">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-[18px] leading-[1.4] font-medium text-text mt-8 mb-3">
                      {children}
                    </h4>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="relative border-l-[3px] border-accent pl-8 my-12 italic text-[20px] leading-[1.6] text-text font-light">
                      {children}
                    </blockquote>
                  ),
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-medium text-text">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic">{children}</em>
                  ),
                  code: ({ children }) => (
                    <code className="bg-bg-3 px-1.5 py-0.5 rounded text-[13px] font-mono">
                      {children}
                    </code>
                  ),
                  link: ({ value, children }) => (
                    <a
                      href={value?.href}
                      className="text-accent hover:underline"
                      target={value?.href?.startsWith('http') ? '_blank' : undefined}
                      rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {children}
                    </a>
                  ),
                },
                types: {
                  image: ({ value }) => (
                    <figure className="my-12 -mx-4 md:mx-0">
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-bg-3">
                        <Image
                          src={urlFor(value).url()}
                          alt={value.alt || ''}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {value.caption && (
                        <figcaption className="text-[13px] text-text-3 text-center mt-4 px-4 md:px-0">
                          {value.caption}
                        </figcaption>
                      )}
                    </figure>
                  ),
                },
              }}
            />
          </div>
        </div>
      </article>
    </>
  );
}
