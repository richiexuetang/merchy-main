import { HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { ApolloClient } from '@apollo/client';

export const getStandaloneApolloClient = (
  initialState = {}
): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:3333/api/graphql',
      fetch,
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
};
