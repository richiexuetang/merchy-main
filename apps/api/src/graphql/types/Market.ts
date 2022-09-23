import { objectType } from 'nexus';

export const Market = objectType({
  name: 'Market',
  definition(t) {
    t.id('id');
    t.int('salesEver');
    t.int('lastSale');
    t.int('price');
  },
});
