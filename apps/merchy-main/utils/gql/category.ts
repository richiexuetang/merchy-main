import { gql } from '@apollo/client';

export const BrowseCategories = gql`
  query allBrowseCategoriesQuery($level: Int) {
    levelCategories(level: $level) {
      name
      slug
      children {
        name
        slug
        children {
          name
          slug
        }
      }
    }
  }
`;

export const CategoryProducts = gql`
  query ($orderBy: ProductOrder, $first: Int!, $filter: ProductFilterInput) {
    products(orderBy: $orderBy, first: $first, filter: $filter) {
      edges {
        node {
          name
          title
          slug
          market {
            salesEver
            price
            lastSale
            lowestAsk
            highestBid
          }
          media {
            thumbUrl
          }
          productDetails {
            releaseDate
          }
        }
      }
    }
  }
`;

export const BrowseCategoryInfo = gql`
  query ($categoryUrlKey: String!) {
    categoryBrowse(categoryUrl: $categoryUrlKey) {
      description
      breadCrumbs {
        name
        level
        url
      }
    }

    verticalBrowseCategory(category: $categoryUrlKey) {
      name
      level
      slug
    }

    rootCategory(category: $categoryUrlKey) {
      productAttributes {
        name
        slug
        filterableInStoreFront
        choices {
          name
          slug
          value
          date
        }
      }
    }
  }
`;
