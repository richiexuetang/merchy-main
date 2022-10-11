import { ApolloClient, InMemoryCache } from '@apollo/client';

let endpoint = 'http://127.0.0.1:8000/graphql/';
if (process.env.NODE_ENV === 'production')
  endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
});

export default client;
