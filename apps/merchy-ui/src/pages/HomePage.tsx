import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Footer, MenuBar, ImageSlider, ProductRow } from '@merchy/ui-shared';
import { chakra } from '@chakra-ui/react';

const HomePage = () => {
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
