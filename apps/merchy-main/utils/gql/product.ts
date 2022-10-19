import { gql } from '@apollo/client';

export const SearchProducts = gql`
  query ($search: String) {
    allProducts(search: $search) {
      edges {
        node {
          name
          slug
          brand
          primaryTitle
          secondaryTitle
          media {
            label
            imageUrl
          }
        }
      }
    }
  }
`;

export const ProductPaths = gql`
  query {
    products {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const GetProductInfo = gql`
  query productBySlug($productSlug: String!) {
    productBySlug(productSlug: $productSlug) {
      primaryTitle
      secondaryTitle
      condition
      description
      media {
        imageUrl
      }
      market {
        price
      }
    }
  }
`;

export const FetchProductCollections = gql`
  query productCollections($first: Int!) {
    productCollections {
      edges {
        node {
          name
          helpMessage
          footnotesType
          priceType
          redirectUrl
          products(first: $first) {
            edges {
              node {
                name
                slug
                media {
                  thumbUrl
                }
                market {
                  lowestAsk
                  lastSale
                }
              }
            }
          }
        }
      }
    }
  }
`;
