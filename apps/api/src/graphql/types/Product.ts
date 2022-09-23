import { SelectedAttribute } from './Attribute';
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
import { Market } from './Market';

export const ImageGallery = objectType({
  name: 'ImageGallery',
  definition(t) {
    t.string('label');
    t.string('imageUrl');
    t.string('smallImageUrl');
    t.string('thumbUrl');
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
    t.string('description');
    t.string('slug');
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
    t.field('market', {
      type: Market,
      async resolve(_parent, _args, ctx) {
        const market = await ctx.prisma.product
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .market();
        return market;
      },
    });
    t.list.field('attributes', {
      type: SelectedAttribute,
      async resolve(_parent, _args, ctx) {
        const attributes = await ctx.prisma.product
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .attributes();
        return attributes;
      },
    });
    t.int('salesEver', {
      async resolve(_parent, _args, ctx) {
        const market = await ctx.prisma.product
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .market();
        return market.salesEver;
      },
    });
    t.field('media', {
      type: 'ImageGallery',
      async resolve(_parent, _args, ctx) {
        const media = await ctx.prisma.product
          .findUnique({
            where: { id: _parent.id },
          })
          .media();
        return media;
      },
    });
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
    t.field('updatedAt', { type: Sort });
    t.field('salesEver', { type: Sort });
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

export const OrderDirection = enumType({
  name: 'OrderDirection',
  members: ['asc', 'desc'],
});

export const ProductOrderField = enumType({
  name: 'ProductOrderField',
  members: ['price', 'salesEver', 'createdAt'],
});

export const ProductOrder = inputObjectType({
  name: 'ProductOrder',
  definition(t) {
    t.field('direction', { type: OrderDirection });
    t.field('field', { type: ProductOrderField });
  },
});

export const AttributeInput = inputObjectType({
  name: 'AttributeInput',
  definition(t) {
    t.string('slug');
    t.list.string('values');
  },
});

export const ProductFilterInput = inputObjectType({
  name: 'ProductFilterInput',
  definition(t) {
    t.list.string('categories');
    t.list.field('attributes', { type: AttributeInput });
    t.field('search', { type: 'String' });
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
      additionalArgs: {
        filter: ProductFilterInput,
        orderBy: ProductOrder,
      },
      resolve: async (_, args, ctx) => {
        const { first, after } = args;
        const offset = args.after ? cursorToOffset(args.after) + 1 : 0;
        if (isNaN(offset)) throw new Error('cursor is invalid');

        console.log('productOrder', args.orderBy);

        let orderBy = {};

        if (['salesEver'].includes(args.orderBy.field)) {
          orderBy = {
            market: {
              salesEver: args.orderBy.direction,
            },
          };
        }

        let filter = {};
        if (args.filter.search) {
          filter = {
            title: { contains: args.filter.search },
          };
        }

        if (args.filter.attributes) {
          const slugs = [];
          const values = [];
          args.filter.attributes.map((attribute, i) => {
            slugs.push(attribute.slug);
            values.push([]);
            values[i] = attribute.values;
          });

          slugs.map((i) => {
            filter = {
              ...filter,
              attributes: {
                every: {
                  AND: [
                    { attribute: { slug: { in: slugs[i] } } },
                    { attributeValues: { every: { name: { in: values[i] } } } },
                  ],
                },
              },
            };
          });
        }

        const [totalCount, items] = await Promise.all([
          ctx.prisma.product.count(),
          ctx.prisma.product.findMany({
            where: filter,
            take: args.first || undefined,
            skip: offset,
            orderBy: orderBy,
          }),
        ]);
        console.log('final filter', filter);
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

export const ProductPages = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('productPages', {
      type: Product,
      async resolve(_parent, args, ctx) {
        const pages = await ctx.prisma.product.findMany({});

        return pages;
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
      async resolve(_parent, args, ctx) {
        const filter = args.filters;

        const orderBy = args.orderBy;

        const products = await ctx.prisma.product.findMany({
          where: filter,
          skip: args.skip,
          take: args.take,
          orderBy: orderBy,
        });

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
            slug: args.productUrl,
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
