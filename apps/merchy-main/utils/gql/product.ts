import { gql } from '@apollo/client';

export const Products = gql`
  query {
    productPages {
      slug
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
