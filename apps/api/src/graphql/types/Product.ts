import { SelectedAttribute } from './Attribute';
import {
  extendType,
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

export const ProductDetails = objectType({
  name: 'ProductDetails',
  definition(t) {
    t.string('id');
    t.string('style');
    t.field('releaseDate', { type: 'DateTime' });
    t.string('retailPrice');
  },
});

export const Product = objectType({
  name: 'Product',
  definition(t) {
    t.string('id');
    t.field('createdAt', { type: 'DateTime' });
    t.string('name');
    t.string('title');
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
    t.field('productDetails', {
      type: ProductDetails,
      async resolve(_parent, _args, ctx) {
        const details = await ctx.prisma.product
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .productDetails();
        return details;
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
  members: [
    'price',
    'salesEver',
    'createdAt',
    'featured',
    'releaseDate',
    'lastSale',
    'lowestAsk',
    'highestBid',
  ],
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
    t.field('category', { type: 'String' });
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

        let orderBy = {};
        let items = [];
        if (['salesEver'].includes(args.orderBy?.field)) {
          orderBy = {
            market: {
              salesEver: args.orderBy.direction,
            },
          };
        } else if (args.orderBy?.field === 'releaseDate') {
          orderBy = {
            productDetails: {
              releaseDate: args.orderBy.direction,
            },
          };
        } else if (args.orderBy?.field === 'lastSale') {
          orderBy = {
            market: {
              lastSale: args.orderBy.direction,
            },
          };
        } else if (args.orderBy?.field === 'lowestAsk') {
          orderBy = {
            market: {
              lowestAsk: 'asc',
            },
          };
        } else if (args.orderBy?.field === 'highestBid') {
          orderBy = {
            market: {
              highestBid: args.orderBy.direction,
            },
          };
        }

        items = await ctx.prisma.product.findMany({ orderBy: orderBy });

        let currentOrder = 1;
        const orderMap = new Map<string, number>();

        items.map((item) => {
          orderMap.set(item.id, currentOrder);
          currentOrder++;
        });

        if (args.filter) {
          const { category, search, attributes } = args.filter;
          if (category) {
            const currentCategory = await ctx.prisma.category.findUnique({
              where: {
                slug: category,
              },
            });

            let leafCategories = [currentCategory];
            const currentLevel = currentCategory.level;
            let finalCategories = [];

            while (currentLevel) {
              let next = [];

              for (let i = 0; i < leafCategories.length; i++) {
                const children = await ctx.prisma.category.findMany({
                  where: {
                    parentId: leafCategories[i].id,
                  },
                });

                if (children.length) {
                  next = [...children, ...next];
                } else {
                  finalCategories.push(leafCategories[i]);
                }
              }

              leafCategories = next.slice();

              if (next.length === 0) {
                break;
              }
            }

            finalCategories = [...finalCategories, ...leafCategories];

            items = [];
            for (let i = 0; i < finalCategories.length; ++i) {
              const products = await ctx.prisma.product.findMany({
                where: {
                  categoryId: finalCategories[i].id,
                },
                orderBy: orderBy,
              });

              items = [...items, ...products];
            }
          }

          if (search) {
            items = items.filter((item) => item.title.includes(search));
          }

          // if (attributes) {
          //   const slugs = [];
          //   const values = [];
          //   args.filter.attributes.map((attribute, i) => {
          //     slugs.push(attribute.slug);
          //     values.push([]);
          //     values[i] = attribute.values;
          //   });

          //   slugs.map((i) => {
          //     filter = {
          //       ...filter,
          //       attributes: {
          //         every: {
          //           AND: [
          //             { attribute: { slug: { in: slugs[i] } } },
          //             {
          //               attributeValues: { every: { name: { in: values[i] } } },
          //             },
          //           ],
          //         },
          //       },
          //     };
          //   });
          // }
        }

        items.sort((a, b) => {
          return orderMap.get(a.id) - orderMap.get(b.id);
        });

        return connectionFromArraySlice(
          items,
          { first, after },
          { sliceStart: offset, arrayLength: items.length }
        );
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
