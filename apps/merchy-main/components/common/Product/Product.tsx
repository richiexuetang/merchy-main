import { getLayout } from '../Layout';
import {
  Box,
  chakra,
  List,
  ListItem,
  Link,
  Divider,
  Container,
  IconButton,
  useDisclosure,
  SimpleGrid,
  Image as ChakraImage,
  Grid,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { Share, Favorite, Add } from '../../icons';
import { ProductCard, ProductDetails } from '../../product';
import { BreadCrumbs } from '../..';
import ActionModal from './ActionModal';
import MarketHistory from './MarketHistory';
import BuySellContainer from './BuySellContainer';
import MarketActivity from './MarketActivity';

const Product = ({ productInfo }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  const {
    isOpen: isFollowOpen,
    onOpen: onFollowOpen,
    onClose: onFollowClose,
  } = useDisclosure();
  return (
    <Container data-component="ProductView" w="100%" maxW="6xl" pb="8">
      <chakra.section mt="2">
        <Box>
          <Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box data-component="BreadCrumbs">
                {productInfo.productBySlug.breadcrumbs && (
                  <BreadCrumbs links={productInfo.productBySlug.breadcrumbs} />
                )}
              </Box>
              <Box
                data-component="utility-wrapper"
                float={{ base: 'left', sm: 'left', lg: 'right' }}
                mb={{ base: '4', sm: '4', lg: '0' }}
              >
                <chakra.ul display="flex">
                  <li>
                    <IconButton
                      aria-label="Add To Portfolio"
                      bg="transparent"
                      icon={<Add />}
                      onClick={onFollowOpen}
                    />
                    <ActionModal
                      productInfo={productInfo}
                      isFollowOpen={isFollowOpen}
                      onFollowClose={onFollowClose}
                    />
                  </li>
                  <li>
                    <IconButton
                      aria-label="Follow"
                      bg="transparent"
                      icon={<Favorite />}
                      onClick={onFollowOpen}
                    />
                  </li>
                  <ActionModal
                    productInfo={productInfo}
                    isFollowOpen={isFollowOpen}
                    onFollowClose={onFollowClose}
                  />
                  <li>
                    <IconButton
                      aria-label="Share"
                      bg="transparent"
                      icon={<Share />}
                    />
                  </li>
                </chakra.ul>
              </Box>
            </Box>

            <Box data-component="Header" display="flex" flexDir="column">
              <Box>
                <chakra.h1
                  data-component="primary-product-title"
                  fontFamily="suisseIntlMedium"
                  fontWeight="500"
                  lineHeight="xl"
                  minH="0vw"
                  mb="2"
                >
                  {productInfo?.productBySlug.primaryTitle}
                  <chakra.span display="block" color="neutral.500" mt="1">
                    {productInfo?.productBySlug.secondaryTitle}
                  </chakra.span>
                </chakra.h1>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt="0"
                mb="2"
              >
                <List display="flex">
                  <ListItem>
                    <NextLink href="/">
                      <Link
                        outline="transparent solid 2px"
                        outlineOffset="green.700"
                        textUnderlineOffset="under"
                      >
                        <chakra.span
                          display="inline-flex"
                          verticalAlign="top"
                          alignItems="center"
                          maxW="100%"
                          fontWeight="normal"
                          my="1"
                          mr="0.375rem"
                          fontSize="xs"
                          borderRadius="0px"
                          paddingInline="1"
                          bg="beige.100"
                          color="neutral.black"
                          h="22px"
                          fontFamily="suisseIntlMedium"
                          padding="0px 0.5rem"
                        >
                          <chakra.span
                            lineHeight="1.2"
                            overflow="hidden"
                            textOverflow="ellipsis"
                            whiteSpace="nowrap"
                            pr="1"
                          >
                            Condition:
                          </chakra.span>
                          <chakra.span
                            lineHeight="1.2"
                            overflow="hidden"
                            textOverflow="ellipsis"
                            whiteSpace="nowrap"
                            color="green.700"
                          >
                            {productInfo?.productBySlug.condition}
                          </chakra.span>
                        </chakra.span>
                      </Link>
                    </NextLink>
                  </ListItem>
                </List>
              </Box>
            </Box>

            <SimpleGrid
              data-component="ProductMain"
              columns={{ base: 1, lg: 2 }}
            >
              <Box
                data-component="MediaContainer"
                w="full"
                h="initial"
                pos="relative"
                pb={{ base: '0px' }}
              >
                <Box
                  data-component="SingleImage"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="full"
                  h="full"
                  padding="0"
                >
                  <Box
                    display="flex"
                    flexDir="column"
                    alignItems="center"
                    pos="relative"
                    maxW={{ base: '358px', lg: '576px' }}
                  >
                    <ChakraImage
                      src={productInfo?.productBySlug.media.imageUrl}
                      alt={productInfo?.productBySlug.media.imageUrl}
                    />
                  </Box>
                </Box>
              </Box>

              <Box ml={{ lg: '4' }}>
                <BuySellContainer
                  handleToggle={handleToggle}
                  productInfo={productInfo}
                />

                <MarketActivity productInfo={productInfo} />
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </chakra.section>

      {productInfo.relatedProducts?.edges.length > 0 && (
        <chakra.section
          data-component="RelatedProductsContainer"
          mt="4"
          minH="292px"
        >
          <Divider orientation="horizontal" borderWidth="0 0 1px" />
          <Box>
            <chakra.h3 fontWeight="bold" lineHeight="md" mb="2" py="3">
              Related Products
            </chakra.h3>
            <Grid
              data-component="SmartGridRow"
              as="ul"
              templateColumns="repeat(6, 1fr)"
              gridGap={{ base: 2, lg: 6 }}
              marginBottom={6}
              overflow="auto"
            >
              {productInfo.relatedProducts?.edges.map(({ node }, index) => {
                const product = {
                  name: node.name,
                  lowestAsk: node.market.lowestAsk,
                  lastSale: node.market.lastSale,
                  imageUrl: node.media.imageUrl,
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
        </chakra.section>
      )}

      <ProductDetails productInfo={productInfo.productBySlug} />
      <MarketHistory />
    </Container>
  );
};

Product.getLayout = getLayout;

export default Product;
