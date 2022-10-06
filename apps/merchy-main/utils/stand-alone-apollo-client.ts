import { HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { ApolloClient } from '@apollo/client';

export const getStandaloneApolloClient = (
  initialState = {}
): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://127.0.0.1:8000/graphql/',
      fetch,
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
};
