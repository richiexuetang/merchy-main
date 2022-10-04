import { ProductPaths, GetProductInfo } from '../utils/gql';
import client from '../pages/api/graphql';

export const getProductPaths = async () => {
  return await client.query({
    query: ProductPaths,
  });
};

export const getProductInfo = async (productSlug) => {
  return await client.query({
    query: GetProductInfo,
    variables: {
      productUrl: productSlug,
    },
  });
};
