import { enumType, objectType } from 'nexus';

// model Attribute {
//   id                  String @id @default(uuid())
//   name                String
//   slug                String @unique
//   productTypes        ProductType[]
//   inputType           AttributeInputTypeEnum
//   visibleInStoreFront Boolean
//   filterableInStoreFront Boolean
//   selectedAttribute   SelectedAttribute[]

//   @@unique([id, slug])
// }

// model SelectedAttribute {
//   id                  String @id @default(uuid())
//   attribute           Attribute @relation(fields: [attributeId, attributeSlug], references: [id, slug])
//   attributeId         String
//   attributeSlug       String
//   attributeValues     AttributeValue[]
//   products            Product[]
// }

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
  },
});

// model AttributeValue {
//   id            String @id @default(uuid())
//   name          String?
//   slug          String?
//   value         AttributeInputTypeEnum
//   plainText     String?
//   selectedAttribute SelectedAttribute[]
// }
export const AttributeValue = objectType({
  name: 'AttributeValue',
  definition(t) {
    t.id('id');
    t.string('name');
    t.string('slug');
    t.field('value', { type: AttributeInputTypeEnum });
    t.string('plainText');
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
