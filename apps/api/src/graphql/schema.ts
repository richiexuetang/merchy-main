import { connectionPlugin, makeSchema } from 'nexus';
import { join } from 'path';
import * as types from './types';
import { GQLDate } from './scalars';

export const schema = makeSchema({
  types: [types, GQLDate],
  plugins: [connectionPlugin()],
  outputs: {
    typegen: join(
      process.cwd(),
      'node_modules',
      '@types',
      'nexus-typegen',
      'index.d.ts'
    ),
    schema: join(process.cwd(), 'apps/api/src/graphql', 'schema.graphql'),
  },
  contextType: {
    export: 'Context',
    module: join(process.cwd(), 'apps/api/src/graphql/context.ts'),
  },
});
