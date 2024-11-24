import { type SchemaTypeDefinition } from 'sanity'
import { casinoType } from './casino';
import { categoryType } from './category';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [casinoType, categoryType],
}
