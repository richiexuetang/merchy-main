import { Box, Text } from '@chakra-ui/react';
import { CustomBox } from 'apps/merchy-main/styles/boxStyles';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { ProductFooterSpan } from '../../../styles';

const Card = ({ product, sortBy }) => {
  return (
    <Box padding="0 8px 16px">
      <CustomBox variant="productCard">
        <Link href={`/product/${product.slug}`}>
          <Box display="flex" flexDir="column" borderColor="neutral.200">
            <Box margin={{ base: '2', lg: '4' }}>
              <CustomBox variant="productCardImage">
                <Image
                  layout="fixed"
                  width={145}
                  height={75}
                  src={product.media?.thumbUrl}
                  alt={product.name}
                  priority={true}
                />
              </CustomBox>
            </Box>
            <CustomBox variant="productCardInfo">
              <Text
                overflow="hidden"
                fontWeight="md"
                fontSize={{ base: 'xs', md: 'sm' }}
                h={{ base: '34px', md: '40px' }}
              >
                {product.name}
              </Text>
              <Box
                display="flex"
                flexDir="column"
                justifyContent="space-between"
                h="100%"
              >
                <Box>
                  <Text
                    lineHeight="md"
                    fontSize="xs"
                    fontWeight="medium"
                    mt="1"
                  >
                    {sortBy === 'market__highestBid'
                      ? 'Highest Bid'
                      : 'Lowest Ask'}
                  </Text>
                  <Text fontWeight="bold" lineHeight="1.3" mt="1">
                    {sortBy === 'market__highestBid'
                      ? `${product.market?.highestBid}`
                      : `${product.market?.lowestAsk}`}
                  </Text>
                </Box>
                {sortBy !== 'featured' && (
                  <Box display="flex" mt="1">
                    {sortBy === 'market__salesEver' && (
                      <ProductFooterSpan>
                        {product.market.salesEver} sold
                      </ProductFooterSpan>
                    )}
                    {sortBy === 'releaseDate' && (
                      <ProductFooterSpan>
                        Released{' '}
                        {moment(product.productDetails.releaseDate).format(
                          'MM/DD/YYYY'
                        )}
                      </ProductFooterSpan>
                    )}
                    {sortBy === 'market__lastSale' && (
                      <ProductFooterSpan>
                        Last Sale: ${product.market.lastSale}
                      </ProductFooterSpan>
                    )}
                  </Box>
                )}
              </Box>
            </CustomBox>
          </Box>
        </Link>
      </CustomBox>
    </Box>
  );
};

export default Card;
