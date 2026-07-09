import { groq } from 'next-sanity'

// Get all published blog posts
export const allPostsQuery = groq`
  *[_type == "blogPost" && defined(publishedAt)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    featured,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name,
      role,
      image {
        asset->{
          _id,
          url
        }
      }
    },
    categories[]->{
      title,
      slug
    },
    body
  }
`

// Get a single blog post by slug
export const postBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    featured,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name,
      role,
      bio,
      image {
        asset->{
          _id,
          url
        }
      }
    },
    categories[]->{
      title,
      slug
    },
    body
  }
`

// Get featured posts
export const featuredPostsQuery = groq`
  *[_type == "blogPost" && featured == true && defined(publishedAt)] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name,
      role
    }
  }
`
