import { getStandaloneApolloClient } from '../utils';
import {
  BrowseCategories,
  CategoryProducts,
  BrowseCategoryInfo,
} from '../utils/gql';

export const getAllBrowseCategories = async () => {
  const client = await getStandaloneApolloClient();

  return await client.query({
    query: BrowseCategories,
    variables: {
      level: 1,
    },
  });
};

export const getInitialCategoryProducts = async (slug) => {
  const client = await getStandaloneApolloClient();

  return await client.query({
    query: CategoryProducts,
    variables: {
      orderBy: {
        direction: 'desc',
        field: 'featured',
      },
      first: 40,
      filter: { category: slug, attributes: [] },
    },
  });
};

export const getBrowseCategoryInfo = async (slug) => {
  const client = await getStandaloneApolloClient();

  return await client.query({
    query: BrowseCategoryInfo,
    variables: {
      categoryUrlKey: slug,
    },
  });
};
