import { gql } from '@apollo/client';

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

export const GetBrowseCategories = gql`
  query categories($targetLevel: Int) {
    categories(targetLevel: $targetLevel) {
      edges {
        node {
          name
          slug
          children {
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
      }
    }
  }
`;

export const GetAllCategoryPaths = gql`
  query {
    categories {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const GetCategoryProducts = gql`
  query (
    $categorySlug: String
    $first: Int
    $orderBy: String
    $priceRange: String
    $sizes: [String]
    $sizeTypes: [String]
    $releaseYears: [Int]
  ) {
    allProducts(
      categorySlug: $categorySlug
      first: $first
      orderBy: $orderBy
      sizeTypes: $sizeTypes
      priceRange: $priceRange
      sizes: $sizes
      releaseYears: $releaseYears
    ) {
      edges {
        node {
          id
          name
          slug
          price
          market {
            retailPrice
            salesEver
            price
            lastSale
            lowestAsk
            highestBid
          }
          media {
            thumbUrl
          }
        }
      }
    }
  }
`;

export const GetBrowseCategoryInfo = gql`
  query ($browseCategory: String!) {
    verticalBrowseCategories(browseCategory: $browseCategory) {
      edges {
        node {
          name
          level
          slug
        }
      }
    }
  }
`;

export const GetProductFilter = gql`
  query ($categorySlug: String!) {
    productFilterAttributes(categorySlug: $categorySlug) {
      edges {
        node {
          slug
          productattributeSet {
            edges {
              node {
                name
                fieldValue
                displayName
                productAttribute {
                  edges {
                    node {
                      value
                      type
                      displayName
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
