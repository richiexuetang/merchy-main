import { getLayout, MenuBar, ProductRow } from '../components';
import type { NextPageWithLayout } from './_app';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Container } from '@chakra-ui/react';
import { Carousel } from '../components';
import { getAllBrowseCategories, fetchProductCollections } from '../api';

export const getStaticProps: GetStaticProps = async () => {
  const allCategories = await getAllBrowseCategories();

  const browseCategories = allCategories.data.categories.edges;

  const productCollections = await fetchProductCollections();

  return {
    props: {
      browseCategories,
      productCollections: productCollections.data.productCollections,
    },
  };
};

const Home: NextPageWithLayout = ({
  browseCategories,
  productCollections,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const levelOneCategories = [];

  browseCategories?.map(({ node }) => {
    levelOneCategories.push({ name: node.slug, slug: node.slug });
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
        {productCollections.edges.map((node, index: number) => {
          return <ProductRow key={index} collectionInfo={node} />;
        })}
      </Container>
    </>
  );
};

Home.getLayout = getLayout;

export default Home;
