export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
}

export interface Casino {
  _id: string
  offerTitle: string
  offerUrl: string
  offerDescription: string
  rating: number
  imageUrl: string
  termsConditionsUrl: string
  categories: Category[]
}
