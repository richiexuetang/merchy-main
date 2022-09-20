import {
  extendType,
  intArg,
  nonNull,
  inputObjectType,
  objectType,
  stringArg,
  enumType,
} from 'nexus';
import { connectionFromArraySlice, cursorToOffset } from 'graphql-relay';
import { BreadCrumb } from './BreadCrumb';

export const Traits = objectType({
  name: 'Traits',
  definition(t) {
    t.id('id');
    t.string('name');
    t.string('value');
    t.string('visible');
  },
});

export const Product = objectType({
  name: 'Product',
  definition(t) {
    t.string('id');
    t.field('createdAt', { type: 'DateTime' });
    t.string('name');
    t.string('title');
    t.string('imageUrl');
    t.string('brand');
    t.string('price');
    t.string('description');
    t.string('urlKey');
    t.int('index');
    t.string('condition');
    t.string('primaryTitle');
    t.string('secondaryTitle');
    t.string('model');
    t.string('primaryCategory');
    t.string('productCategory');
    t.string('categoryId');
    t.list.field('variants', {
      type: Product,
      async resolve(_parent, _args, ctx) {
        const variants = await ctx.prisma.product
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .variants();
        return variants;
      },
    });
    t.list.field('traits', {
      type: Traits,
      async resolve(_parent, _args, ctx) {
        const traits = await ctx.prisma.product
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .traits();
        return traits;
      },
    });
    t.list.field('breadCrumbs', {
      type: BreadCrumb,
      async resolve(_parent, _args, ctx) {
        const breadCrumbs = await ctx.prisma.product
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .breadCrumbs();
        return breadCrumbs;
      },
    });
    t.string('gender');
  },
});

export const Sort = enumType({
  name: 'Sort',
  members: ['asc', 'desc'],
});

export const ProductOrderByInputType = inputObjectType({
  name: 'ProductOrderByInputType',
  definition(t) {
    t.field('createdAt', { type: Sort });
    t.field('price', { type: Sort });
  },
});

export const Operators = inputObjectType({
  name: 'Operators',
  definition(t) {
    t.int('lt');
    t.string('in');
  },
});

export const ProductFilterByInputType = inputObjectType({
  name: 'ProductFilterByInputType',
  definition(t) {
    t.field('price', { type: Operators });
    t.field('productCategory', { type: Operators });
    t.field('gender', { type: Operators });
  },
});

// Get pagination products
export const ProductsQuery = extendType({
  type: 'Query',
  definition(t) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    t.connectionField('products', {
      type: Product,
      resolve: async (_, { after, first }, ctx) => {
        const offset = after ? cursorToOffset(after) + 1 : 0;
        if (isNaN(offset)) throw new Error('cursor is invalid');

        const [totalCount, items] = await Promise.all([
          ctx.prisma.product.count(),
          ctx.prisma.product.findMany({
            take: first || undefined,
            skip: offset,
          }),
        ]);

        return connectionFromArraySlice(
          items,
          { first, after },
          { sliceStart: offset, arrayLength: totalCount }
        );
      },
    });
  },
});

export const ProductCollectionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('productCollection', {
      type: Product,
      args: {
        productCategory: nonNull(stringArg()),
        skip: intArg(),
        take: intArg(),
        orderBy: ProductOrderByInputType,
      },
      resolve(_parent, args, ctx) {
        const filter = args.filters;

        console.log('filters', filter);
        const collections = ctx.prisma.product.findMany({
          where: {
            productCategory: args.productCategory,
          },
          skip: args.skip,
          take: args.take,
          orderBy: args.orderBy,
        });

        return collections;
      },
    });
  },
});

export const ProductFilterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('filterProduct', {
      type: Product,
      args: {
        filters: ProductFilterByInputType,
        skip: intArg(),
        take: intArg(),
        orderBy: ProductOrderByInputType,
      },
      resolve(_parent, args, ctx) {
        const filter = args.filters;

        const collections = ctx.prisma.product.findMany({
          where: filter,
          skip: args.skip,
          take: args.take,
          orderBy: args.orderBy,
        });

        return collections;
      },
    });
  },
});

// Get all products
export const ProductQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('products', {
      type: Product,
      resolve(_parent, _, ctx) {
        const products = ctx.prisma.product.findMany({});
        return products;
      },
    });
  },
});

// Get product page info using product's url
export const ProductUrlQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('product', {
      type: Product,
      args: {
        productUrl: nonNull(stringArg()),
      },
      resolve(_parent, args, ctx) {
        const product = ctx.prisma.product.findUnique({
          where: {
            urlKey: args.productUrl,
          },
        });
        return product;
      },
    });
  },
});

// create product
export const AddProductMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('addProduct', {
      type: 'Product',
      args: {
        name: nonNull(stringArg()),
        title: nonNull(stringArg()),
        imageUrl: nonNull(stringArg()),
        brand: nonNull(stringArg()),
        price: nonNull(stringArg()),
        description: stringArg(),
        urlKey: nonNull(stringArg()),
        primaryTitle: nonNull(stringArg()),
        secondaryTitle: stringArg(),
        model: stringArg(),
        primaryCategory: stringArg(),
        productCategory: stringArg(),
        categoryId: stringArg(),
      },
      resolve: (_, args, ctx) => {
        return ctx.prisma.product.create({
          data: {
            name: args.name,
            title: args.title,
            imageUrl: args.imageUrl,
            brand: args.brand,
            price: args.price,
            description: args.description,
            urlKey: args.urlKey,
            primaryTitle: args.primaryTitle,
            secondaryTitle: args.secondaryTitle,
            model: args.model,
            primaryCategory: args.primaryCategory,
            productCategory: args.productCategory,
            categoryId: args.categoryId,
          },
        });
      },
    });
  },
});

// delete Product
export const DeleteProductMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('deleteProduct', {
      type: 'Product',
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_, args, ctx) {
        await ctx.prisma.product.delete({
          where: {
            id: args.id,
          },
        });
      },
    });
  },
});

export const Edge = objectType({
  name: 'Edge',
  definition(t) {
    t.string('cursor');
    t.field('node', {
      type: Product,
    });
  },
});

export const PageInfo = objectType({
  name: 'PageInfo',
  definition(t) {
    t.string('endCursor');
    t.boolean('hasNextPage');
  },
});

export const Response = objectType({
  name: 'Response',
  definition(t) {
    t.field('pageInfo', { type: PageInfo });
    t.list.field('edges', {
      type: Edge,
    });
  },
});
