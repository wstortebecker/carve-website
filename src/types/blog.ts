export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  publishedAt: string
  featured?: boolean
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  author: Author
  categories?: Category[]
  body?: any[]
}

export interface Author {
  name: string
  role?: string
  bio?: string
  image?: {
    asset: {
      _id: string
      url: string
    }
  }
}

export interface Category {
  title: string
  slug: {
    current: string
  }
}
