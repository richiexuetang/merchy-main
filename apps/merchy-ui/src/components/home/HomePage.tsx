import * as Styled from './Homepage.styles';
import { Container } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProductRow } from '../product-row';
import { ImageSlider } from '../image-slider';
import { Footer } from '../footer';
import { MenuBar } from '../menubar';

const HomePage = () => {
  return (
    <>
      <Styled.MainSection>
        <MenuBar />
        <Container
          w='100%'
          marginInline='auto'
          maxWidth='1296px'
          paddingInline='1rem'
        >
          <ImageSlider />

          <ProductRow />
        </Container>
        <Outlet />
      </Styled.MainSection>
      <Footer />
    </>
  );
};
export default HomePage;
