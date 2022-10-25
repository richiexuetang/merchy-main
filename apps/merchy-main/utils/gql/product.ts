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
  query ($productSlug: String!, $first: Int) {
    productBySlug(productSlug: $productSlug) {
      name
      slug
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
      productTraits {
        format
        name
        value
      }
      breadcrumbs
    }

    relatedProducts(slug: $productSlug, first: $first) {
      edges {
        node {
          name
          market {
            lowestAsk
            lastSale
          }
          media {
            imageUrl
          }
        }
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
