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
  query ($productSlug: String!) {
    productBySlug(productSlug: $productSlug) {
      primaryTitle
      secondaryTitle
      condition
      description
      media {
        imageUrl
      }
    }
  }
`;
