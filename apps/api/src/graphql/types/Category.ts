import { prisma } from './../prisma';
import {
  arg,
  extendType,
  intArg,
  list,
  nonNull,
  objectType,
  stringArg,
} from 'nexus';
import { Product } from './Product';

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.id('id');
    t.string('description');
    t.string('name');
    t.int('level');
    t.string('path');
    t.string('urlKey');
    t.string('categoryId');
    t.list.field('children', {
      type: Category,
      async resolve(_parent, _args, ctx) {
        const children = await ctx.prisma.category
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .children();
        return children;
      },
    });
    t.list.field('products', {
      type: Product,
      async resolve(_parent, _args, ctx) {
        const products = await ctx.prisma.category
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .products();
        return products;
      },
    });
  },
});

// Get level Category
export const CategoryLevelQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('levelCategories', {
      type: 'Category',
      args: {
        level: intArg(),
      },
      async resolve(_, args, ctx) {
        return await ctx.prisma.category.findMany({
          where: {
            level: args.level,
          },
        });
      },
    });
  },
});

// Get category
export const LeafCategoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('leafCategories', {
      type: Product,
      args: {
        categoryUrlKey: stringArg(),
        skip: intArg(),
        take: intArg(),
      },
      async resolve(_, args, ctx) {
        const category = await ctx.prisma.category.findUnique({
          where: {
            urlKey: args.categoryUrlKey,
          },
        });

        let leafCategories = [category];
        let currentLevel = category.level;

        while (currentLevel < 3) {
          let next = [];

          for (let i = 0; i < leafCategories.length; i++) {
            const children = await ctx.prisma.category.findMany({
              where: {
                parentId: leafCategories[i].id,
              },
            });

            if (children) {
              next = [...children, ...next];
            }
          }

          if (next.length === 0) {
            break;
          }
          leafCategories = next.slice();
          currentLevel++;
        }

        let result = [];

        for (let i = 0; i < leafCategories.length; i++) {
          const products = await ctx.prisma.product.findMany({
            where: {
              categoryId: leafCategories[i].id,
            },
          });

          if (products) {
            result = [...result, ...products];
          }
        }

        return result;
      },
    });
  },
});

// Find all products associated with a category
export const ChildrenCategoryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('childrenCategory', {
      type: Category,
      args: {
        id: stringArg(),
      },
      async resolve(_, args, ctx) {
        const childrenCategory = await ctx.prisma.category.findMany({
          where: {
            parentId: args.id,
          },
        });
        return childrenCategory;
      },
    });
  },
});
