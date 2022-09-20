import {
  extendType,
  intArg,
  list,
  nonNull,
  objectType,
  stringArg,
} from 'nexus';
import { BreadCrumb } from './BreadCrumb';
import { Product } from './Product';

export const Filters = objectType({
  name: 'Filters',
  definition(t) {
    t.id('id');
    t.string('name');
    t.field('values', {
      type: list('String'),
    });
    t.string('displayType');
  },
});

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
    t.string('parentId');
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
    t.list.field('breadCrumbs', {
      type: BreadCrumb,
      async resolve(_parent, _args, ctx) {
        const breadCrumbs = await ctx.prisma.category
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .breadCrumbs();
        return breadCrumbs;
      },
    });
    t.list.field('filters', {
      type: Filters,
      async resolve(_parent, _args, ctx) {
        const filters = await ctx.prisma.category
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .filters();
        return filters;
      },
    });
  },
});

export const LevelCategories = objectType({
  name: 'LevelCategories',
  definition(t) {
    t.list.field('categories', {
      type: Category,
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

// Get root category
export const GetRootCategory = extendType({
  type: 'Query',
  definition(t) {
    t.field('rootCategory', {
      type: Category,
      args: {
        category: nonNull(stringArg()),
      },
      async resolve(_, args, ctx) {
        const currentCategory = await ctx.prisma.category.findUnique({
          where: {
            urlKey: args.category,
          },
        });

        let rootCategory = currentCategory;

        while (rootCategory.parentId) {
          rootCategory = await ctx.prisma.category.findUnique({
            where: {
              id: rootCategory.parentId,
            },
          });
        }

        return rootCategory;
      },
    });
  },
});

// Get all products within a category
export const LeafCategoriesProductQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('categoryProducts', {
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

export const CategoryBrowseInfo = extendType({
  type: 'Query',
  definition(t) {
    t.field('categoryBrowse', {
      type: Category,
      args: {
        categoryUrl: nonNull(stringArg()),
      },
      async resolve(_, args, ctx) {
        const category = await ctx.prisma.category.findUnique({
          where: {
            urlKey: args.categoryUrl,
          },
        });
        return category;
      },
    });
  },
});

export const BrowseVerticalCategory = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('verticalBrowseCategory', {
      type: Category,
      args: {
        category: nonNull(stringArg()),
      },
      async resolve(_, args, ctx) {
        const category = await ctx.prisma.category.findUnique({
          where: {
            urlKey: args.category,
          },
        });

        let rootCategory = category;
        while (rootCategory.parentId !== null) {
          rootCategory = await ctx.prisma.category.findUnique({
            where: {
              id: rootCategory.parentId,
            },
          });
        }

        const levelOneCategories = await ctx.prisma.category.findMany({
          where: {
            level: 1,
          },
        });

        const levelTwoCategories = await ctx.prisma.category.findMany({
          where: {
            parentId: rootCategory.id,
          },
        });

        if (category.level === 2) {
          const levelThreeCategories = await ctx.prisma.category.findMany({
            where: {
              parentId: category.id,
            },
          });

          return [
            ...levelOneCategories,
            ...levelTwoCategories,
            ...levelThreeCategories,
          ];
        }

        return [...levelOneCategories, ...levelTwoCategories];
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
