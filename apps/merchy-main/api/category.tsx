import {
  GetBrowseCategories,
  GetAllCategoryPaths,
  GetCategoryProducts,
  GetBrowseCategoryInfo,
  GetProductFilter,
} from '../utils/gql';
import client from '../pages/api/graphql';

export const getAllBrowseCategories = async () => {
  return await client.query({
    query: GetBrowseCategories,
    variables: {
      targetLevel: 0,
    },
  });
};

export const getAllCategoryPaths = async () => {
  return await client.query({
    query: GetAllCategoryPaths,
  });
};

export const getCategoryProducts = async (slug) => {
  return await client.query({
    query: GetCategoryProducts,
    variables: {
      categorySlug: slug,
      first: 40,
      orderBy: 'createdAt',
    },
  });
};

export const getBrowseCategoryInfo = async (slug) => {
  return await client.query({
    query: GetBrowseCategoryInfo,
    variables: {
      browseCategory: slug,
    },
  });
};

export const getProductFilter = async (slug) => {
  return await client.query({
    query: GetProductFilter,
    variables: {
      categorySlug: slug,
    },
  });
};
