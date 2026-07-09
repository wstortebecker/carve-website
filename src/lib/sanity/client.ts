import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Public, read-only Sanity project that backs the Carve blog + insights.
// The dataset is public, so reads need no token and this works with zero
// secrets. Point it at a different project/dataset via the two env vars
// (see .env.example) if you want to swap the CMS content.
export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 't9qbq0xl',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
}

export const sanityClient = createClient(sanityConfig)

const builder = imageUrlBuilder(sanityConfig)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
