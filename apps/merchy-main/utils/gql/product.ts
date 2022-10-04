import { gql } from '@apollo/client';

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
  query ($productUrl: String!) {
    product(productUrl: $productUrl) {
      primaryTitle
      secondaryTitle
      condition
      description
      variants {
        name
        slug
      }
      breadCrumbs {
        level
        name
        url
      }
      media {
        imageUrl
      }
    }
  }
`;
