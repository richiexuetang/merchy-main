import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Footer, MenuBar, ImageSlider, ProductRow } from '@merchy/ui-shared';
import { chakra } from '@chakra-ui/react';
import { useQuery, gql } from '@apollo/client';

const AllCategoriesQuery = gql`
  query levelCategoriesQuery($level: Int) {
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

const HomePage = () => {
  const { loading, error, data } = useQuery(AllCategoriesQuery, {
    variables: { level: 1 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log('data', data);
  return (
    <>
      <chakra.main display="block" minH="100vh" mt={0}>
        <MenuBar />
        <Container
          w="100%"
          marginInline="auto"
          maxWidth="1296px"
          paddingInline="1rem"
        >
          <ImageSlider />

          <ProductRow />
        </Container>
        <Outlet />
      </chakra.main>
      <Footer />
    </>
  );
};
export default HomePage;
