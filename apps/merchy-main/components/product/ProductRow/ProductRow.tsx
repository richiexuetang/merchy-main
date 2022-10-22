import { Box, Grid } from '@chakra-ui/react';
import ProductRowHeader from '../ProductRowHeader';
import ProductCard from '../ProductCard';

const ProductRow = ({ collectionInfo }) => {
  return (
    <Box>
      <ProductRowHeader
        title={collectionInfo.node.name}
        helpMessage={collectionInfo.node.helpMessage}
        redirectUrl={collectionInfo.node.redirectUrl}
      />
      <Grid
        data-component="SmartGridRow"
        as="ul"
        templateColumns="repeat(6, 1fr)"
        gridGap={{ base: 2, lg: 6 }}
        marginBottom={6}
        overflow="auto"
      >
        {collectionInfo.node.products.edges.map(({ node }, index) => {
          const product = {
            name: node.name,
            lowestAsk: node.market.lowestAsk,
            lastSale: node.market.lastSale,
            imageUrl: node.media.thumbUrl,
            slug: node.slug,
          };

          return (
            <li data-component="product-card" key={index}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductRow;
