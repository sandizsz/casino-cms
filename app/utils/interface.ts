import { TypedObject } from '@portabletext/types';

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

export interface PaymentMethod {
  _id: string;
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
}

export interface Casino {
  _id: string;
  offerTitle: string;
  offerUrl: string;
  offerDescription: string;
  offerText: TypedObject[];
  rating: number;
  imageUrl: string;
  termsConditionsUrl: string;
  categories: Category[];
  paymentMethods: PaymentMethod[];
}

export interface PageProps {
  params: {
    slug: string;
  };
  slug: string;
}