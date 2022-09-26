import { gql } from '@apollo/client';
import { getStandaloneApolloClient } from '../../utils';
import { Product } from '../../components';

const Products = gql`
  query {
    productPages {
      slug
    }
  }
`;

const BrowseCategories = gql`
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

  allProducts?.data.productPages.map(({ slug: url }) => {
    product.push({ product: url });
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

  const slug = [];

  allProducts?.data.productPages.map(({ slug: url }) => {
    slug.push({ params: { slug: url } });
  });

  return {
    paths: slug,
    fallback: false,
  };
}

export default Product;
