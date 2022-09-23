import { gql } from '@apollo/client';
import { getStandaloneApolloClient } from '../../utils/stand-alone-apollo-client';
import Category from '../../components/common/Category';

const CategoryUrls = gql`
  query getCategoryUrlsQuery($level: Int) {
    levelCategories(level: $level) {
      slug
      children {
        slug
        children {
          slug
        }
      }
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

  const allCategory = await client.query({
    query: CategoryUrls,
    variables: {
      level: 1,
    },
  });

  const allCategories = await client.query({
    query: BrowseCategories,
    variables: {
      level: 1,
    },
  });

  const browseCategories = allCategories.data.levelCategories;

  const category = [];

  allCategory?.data.levelCategories.map(({ slug: url, children }) => {
    category.push({ slug: url });
    children?.map(({ slug, children }) => {
      category.push({ slug: url });
      children?.map(({ slug }) => {
        category.push({ slug: url });
      });
    });
  });

  return {
    props: {
      category,
      browseCategories,
    },
    revalidate: 200,
  };
}

export async function getStaticPaths() {
  const client = await getStandaloneApolloClient();

  const allCategory = await client.query({
    query: CategoryUrls,
    variables: {
      level: 1,
    },
  });
  const category = [];

  allCategory?.data.levelCategories.map(({ slug: url, children }) => {
    category.push({ params: { slug: url } });
    children?.map(({ slug: url, children }) => {
      category.push({ params: { slug: url } });
      children?.map(({ slug: url }) => {
        category.push({ params: { slug: url } });
      });
    });
  });

  return {
    paths: category,
    fallback: false,
  };
}

export default Category;
