import { gql } from '@apollo/client';
import { getStandaloneApolloClient } from '../utils/stand-alone-apollo-client';
import Category from '../components/common/Category';

const CategoryUrls = gql`
  query getCategoryUrlsQuery($level: Int) {
    levelCategories(level: $level) {
      urlKey
      children {
        urlKey
        children {
          urlKey
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
  const category = [];

  allCategory?.data.levelCategories.map(({ urlKey, children }) => {
    category.push({ category: urlKey });
    children?.map(({ urlKey, children }) => {
      category.push({ category: urlKey });
      children?.map(({ urlKey }) => {
        category.push({ category: urlKey });
      });
    });
  });

  return {
    props: {
      category,
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

  allCategory?.data.levelCategories.map(({ urlKey, children }) => {
    category.push({ params: { category: urlKey } });
    children?.map(({ urlKey, children }) => {
      category.push({ params: { category: urlKey } });
      children?.map(({ urlKey }) => {
        category.push({ params: { category: urlKey } });
      });
    });
  });

  return {
    paths: category,
    fallback: false,
  };
}

export default Category;
