import * as express from 'express';
import { server as apolloServer } from './graphql/server';

async function startApolloServer() {
  // Same ApolloServer initialization as before
  // Required logic for integrating with Express
  await apolloServer.start();

  const app = express();

  apolloServer.applyMiddleware({
    app,

    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: '/',
  });

  // Modified server startup
  await new Promise((resolve: any) => app.listen({ port: 4000 }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`
  );
}

startApolloServer();
