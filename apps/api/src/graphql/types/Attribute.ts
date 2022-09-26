import { enumType, objectType } from 'nexus';

export const ProductType = objectType({
  name: 'ProductType',
  definition(t) {
    t.id('id');
    t.string('name');
    t.string('slug');
    t.list.field('productAttributes', {
      type: Attribute,
      async resolve(_parent, _args, ctx) {
        const productAttributes = await ctx.prisma.productType
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .productAttributes();
        return productAttributes;
      },
    });
  },
});

export const SelectedAttribute = objectType({
  name: 'SelectedAttribute',
  definition(t) {
    t.id('id');
    t.field('attribute', {
      type: Attribute,
      async resolve(_parent, _args, ctx) {
        const attribute = await ctx.prisma.selectedAttribute
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .attribute();
        return attribute;
      },
    });
    t.list.field('attributeValues', {
      type: AttributeValue,
      async resolve(_parent, _args, ctx) {
        const attributeValues = await ctx.prisma.selectedAttribute
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .attributeValues();
        return attributeValues;
      },
    });
  },
});

export const Attribute = objectType({
  name: 'Attribute',
  definition(t) {
    t.id('id');
    t.string('name');
    t.string('slug');
    t.boolean('visibleInStoreFront');
    t.boolean('filterableInStoreFront');
    t.list.field('choices', {
      type: AttributeValue,
      async resolve(_parent, _args, ctx) {
        const attributeValues = await ctx.prisma.attribute
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .choices();
        return attributeValues;
      },
    });
  },
});

export const AttributeValue = objectType({
  name: 'AttributeValue',
  definition(t) {
    t.id('id');
    t.string('name');
    t.string('slug');
    t.field('value', { type: AttributeInputTypeEnum });
    t.string('plainText');
    t.field('date', { type: 'DateTime' });
  },
});

const AttributeInputTypeEnum = enumType({
  name: 'AttributeInputTypeEnum',
  members: [
    'NUMERIC',
    'RICH_TEXT',
    'PLAIN_TEXT',
    'DATE',
    'DATE_TIME',
    'COLUMN',
    'GRID',
  ],
  description: 'Attribute Input Type Enum',
});
