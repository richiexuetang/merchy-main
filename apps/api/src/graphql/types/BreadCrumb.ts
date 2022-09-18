import { objectType } from 'nexus';

export const BreadCrumb = objectType({
  name: 'BreadCrumb',
  definition(t) {
    t.id('id');
    t.int('level');
    t.string('name');
    t.string('url');
  },
});
