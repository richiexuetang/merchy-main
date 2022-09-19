import { gql } from '@apollo/client';
import { getStandaloneApolloClient } from '../../utils';
import { Product } from '../../components';

const Products = gql`
  query {
    products {
      urlKey
    }
  }
`;

const BrowseCategories = gql`
  query allBrowseCategoriesQuery($level: Int) {
    levelCategories(level: $level) {
      name
      urlKey
      children {
        name
        urlKey
        children {
          name
          urlKey
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const client = await getStandaloneApolloClient();

  const allProducts = await client.query({
    query: Products,
  });

  const allCategories = await client.query({
    query: BrowseCategories,
    variables: {
      level: 1,
    },
  });

  const browseCategories = allCategories.data.levelCategories;

  const product = [];

  allProducts?.data.products.map(({ urlKey }) => {
    product.push({ product: urlKey });
  });

  return {
    props: {
      product,
      browseCategories,
    },
    revalidate: 200,
  };
}

export async function getStaticPaths() {
  const client = await getStandaloneApolloClient();

  const allProducts = await client.query({
    query: Products,
  });

  const product = [];

  allProducts?.data.products.map(({ urlKey }) => {
    product.push({ params: { product: urlKey } });
  });

  return {
    paths: product,
    fallback: false,
  };
}

export default Product;
