import { getLayout, MenuBar, ProductRowHeader } from '../components';
import type { NextPageWithLayout } from './_app';
import { gql } from '@apollo/client';
import { getStandaloneApolloClient } from '../utils';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ProductCard } from '../components';
import { Box, Grid, Container } from '@chakra-ui/react';
import { Carousel } from '../components';

// const ProductCollection = gql`
//   query (
//     $productCategory: String!
//     $take: Int
//     $orderBy: ProductOrderByInputType
//   ) {
//     productCollection(
//       productCategory: $productCategory
//       take: $take
//       orderBy: $orderBy
//     ) {
//       name
//       price
//       slug
//     }
//   }
// `;

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

export const getStaticProps: GetStaticProps = async () => {
  const client = await getStandaloneApolloClient();

  // const products = await client.query({
  //   query: ProductCollection,
  //   variables: {
  //     productCategory: 'sneakers',
  //     take: 6,
  //     orderBy: { createdAt: 'desc' },
  //   },
  // });

  const allCategories = await client.query({
    query: BrowseCategories,
    variables: {
      level: 1,
    },
  });

  const browseCategories = allCategories.data.levelCategories;

  return {
    props: { browseCategories },
    revalidate: 60,
  };
};

const Home: NextPageWithLayout = ({
  products,
  browseCategories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const productCollection = products?.data.productCollection;

  const levelOneCategories = [];

  browseCategories?.map(({ name, slug }) => {
    levelOneCategories.push({ name: name, slug: slug });
  });

  return (
    <>
      <MenuBar levelOneCategories={levelOneCategories} />
      <Container
        w="100%"
        marginInline="auto"
        maxW="1296px"
        paddingInline="1rem"
      >
        <Carousel />
        {/* Product Collections */}
        <Box>
          <ProductRowHeader />
          <Grid
            data-component="SmartGridRow"
            as="ul"
            templateColumns="repeat(6, 1fr)"
            gridGap={{ base: 2, lg: 6 }}
            marginBottom={6}
            overflow="auto"
          >
            {/* {productCollection.map((product, index: number) => {
              return (
                <li data-component="product-card" key={index}>
                  <ProductCard product={product} />
                </li>
              );
            })} */}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

Home.getLayout = getLayout;

export default Home;
