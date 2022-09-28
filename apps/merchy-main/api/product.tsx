import { getStandaloneApolloClient } from '../utils';
import { Products, GetProductInfo } from '../utils/gql';

export const getProducts = async () => {
  const client = await getStandaloneApolloClient();

  return await client.query({
    query: Products,
  });
};

export const getProductInfo = async (productSlug) => {
  const client = await getStandaloneApolloClient();

  return await client.query({
    query: GetProductInfo,
    variables: {
      productUrl: productSlug,
    },
  });
};
