import type { Metadata } from 'next';
import { sanityClient } from '@/lib/sanity/client';
import { allPostsQuery } from '@/lib/sanity/queries';
import { BlogPost } from '@/types/blog';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

// /blog mirrors /insights (same Sanity content). /insights is the canonical
// surface — point search engines there to avoid splitting ranking signals.
export const metadata: Metadata = {
  title: 'Insights',
  description: 'Notes from the team on how AI agents shop, what brands need to do, and where this is going.',
  alternates: { canonical: '/insights' },
};

async function getPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sanityClient.fetch(allPostsQuery);
    return posts || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)] pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Hero headline - Cormorant Garamond italic */}
          <h1 className="font-serif italic text-[clamp(38px,7vw,84px)] leading-[1.04] tracking-[-0.02em] font-light text-text text-balance">
            Thinking on<br />agentic commerce.
          </h1>

          {/* Subtext */}
          <p className="text-[17px] leading-[1.7] font-light text-text-2 max-w-[480px] mx-auto">
            Notes from the team on how AI agents shop,
            what brands need to do, and where this is going.
          </p>
        </div>
      </section>

      {/* Posts Grid Section */}
      <section className="pb-24">
        <div className="max-w-[1120px] mx-auto px-[clamp(24px,4vw,48px)]">
          {posts.length === 0 ? (
            <div className="flex items-center justify-center min-h-[200px]">
              <p className="text-[15px] text-text-3">Coming soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group block"
                >
                  <article className="bg-bg-2 border border-border rounded-2xl overflow-hidden transition-all duration-150 hover:border-border-2">
                    {/* Image */}
                    {post.mainImage?.asset?.url && (
                      <div className="aspect-[4/3] bg-bg-3 relative overflow-hidden">
                        <Image
                          src={post.mainImage.asset.url}
                          alt={post.mainImage.alt || post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-5 space-y-3">
                      {/* Categories */}
                      {post.categories && post.categories.length > 0 && (
                        <div className="flex gap-2 flex-wrap">
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

                      {/* Title */}
                      <h3 className="font-medium text-[16px] leading-[1.3] tracking-[-0.01em] text-text group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-[13px] leading-[1.6] text-text-2 line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}

                      {/* Meta */}
                      <div className="flex items-center gap-3 pt-2 text-[13px] text-text-3">
                        <span>{post.author.name}</span>
                        <span>·</span>
                        <time dateTime={post.publishedAt}>
                          {format(new Date(post.publishedAt), 'MMM d, yyyy')}
                        </time>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
