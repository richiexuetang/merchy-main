import { ProductPaths, GetProductInfo } from '../utils/gql';
import client from '../pages/api/graphql';

export const getProductPaths = async () => {
  return await client.query({
    query: ProductPaths,
  });
};

export const getProductInfo = async (slug) => {
  return await client.query({
    query: GetProductInfo,
    variables: {
      productSlug: slug,
    },
  });
};
