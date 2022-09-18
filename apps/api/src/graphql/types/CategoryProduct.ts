import { Product } from './Product';
import { Category } from './Category';
import { unionType } from 'nexus';

export const CategoryProduct = unionType({
  name: 'CategoryProduct',
  definition(t) {
    t.members('Product', 'Category');
  },
});
