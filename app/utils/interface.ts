export interface Casino {
  offerTitle: string;
  offerUrl: string;
  offerDescription: string;
  rating: number;
  imageUrl: string;
  termsConditionsUrl: string;
  categories: Array<Category>;
  _id: string;
}

export interface Category {
  _id: string;
  slug: {
    current: string;
  };
  title: string;
}