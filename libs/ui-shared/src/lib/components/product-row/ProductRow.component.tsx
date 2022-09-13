import { Grid, Box } from '@chakra-ui/react';
import ProductCards from './product-card/ProductCards';
import { productMetaData, ProductMetaData } from '../../data';
import ProductHeader from './ProductHeader';

const ProductRow = () => {
  return (
    <>
      {productMetaData.map((productData: ProductMetaData, index: number) => {
        return (
          <Box data-component="ProductRow">
            <ProductHeader
              key={index}
              button={productData.button}
              heading={productData.heading}
            />
            <Grid
              key={index}
              data-component="SmartGridRow"
              as="ul"
              templateColumns="repeat(6, 1fr)"
              gridGap={{ base: 2, lg: 6 }}
              marginBottom={6}
              overflow="auto"
            >
              <ProductCards key={index} products={productData.products} />
            </Grid>
          </Box>
        );
      })}
    </>
  );
};

export default ProductRow;
