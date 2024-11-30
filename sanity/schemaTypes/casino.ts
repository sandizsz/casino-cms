import { defineType } from 'sanity';

export const casinoType = defineType({
  name: 'casino',
  title: 'Casino',
  type: 'document',
  fields: [
    {
      name: 'casinoImage',
      title: 'Casino Image',
      type: 'image',
    },
    {
      name: 'offerTitle',
      title: 'Offer Title',
      type: 'string',
    },
    {
      name: 'offerDescription',
      title: 'Offer Description',
      type: 'text',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(5),
    },
    {
      name: 'offerUrl',
      title: 'Offer URL',
      type: 'url',
    },
    {
      name: 'termsConditionsUrl',
      title: 'Terms & Conditions URL',
      type: 'url',
    },
    {
        name: 'categories',
        title: "Categories",
        type: "array",
        of: [{ type: "reference", to: [{ type: "category"}]}],

    }
  ],
});
