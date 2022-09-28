import { getLayout } from '../Layout';
import {
  Box,
  chakra,
  List,
  ListItem,
  Link,
  Button,
  Text,
  VStack,
  Divider,
  Container,
  Stat,
  StatLabel,
  StatNumber,
  Grid,
  IconButton,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import { ProductCard } from '../../product';
import { useState } from 'react';
import { DownArrow, Share, Favorite, Add } from '../../icons';
import { BreadCrumbs } from '../../ui';

const Product = ({ productInfo }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

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
              <chakra.div data-component="BreadCrumbs">
                {productInfo.product.breadCrumbs && (
                  <BreadCrumbs links={productInfo.product.breadCrumbs} />
                )}
              </chakra.div>
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
                    />
                  </li>
                  <li>
                    <IconButton
                      aria-label="Follow"
                      bg="transparent"
                      icon={<Favorite />}
                    />
                  </li>
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
                  {productInfo?.product.primaryTitle}
                  <chakra.span display="block" color="neutral.500" mt="1">
                    {productInfo?.product.secondaryTitle}
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
                            {productInfo?.product.condition}
                          </chakra.span>
                        </chakra.span>
                      </Link>
                    </NextLink>
                  </ListItem>
                </List>
              </Box>
            </Box>

            <Box
              data-component="ProductMain"
              display="flex"
              justifyContent="space-between"
            >
              <Box data-component="MediaContainer" w="full" h="initial">
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
                    maxW="576px"
                  >
                    <Image
                      layout="fixed"
                      width={512}
                      height={384}
                      src={productInfo?.product.media.imageUrl}
                      alt={productInfo?.product.media.imageUrl}
                    />
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box
                  data-component="BuySellContainer"
                  minW={{ base: 'auto', md: '350px', lg: '464px' }}
                  border={{ base: '0px', sm: '0px' }}
                  padding={{ base: '0px', sm: '0px', md: '4' }}
                  mt={{ base: '3', sm: '0px', md: '0px' }}
                  borderRadius="base"
                  borderWidth={{ md: '1px' }}
                  borderStyle={{ md: 'solid' }}
                  borderColor={{ md: 'neutral.300' }}
                >
                  <Box
                    data-component="sizePicker"
                    overflow="initial"
                    display="block"
                    opacity="1"
                    h="auto"
                    onClick={handleToggle}
                  >
                    <Box
                      maxW={{ md: '350px', lg: '464px' }}
                      mb="5"
                      paddingBottom="0"
                      border="1px solid #cfcfcf"
                      borderRadius="0.25rem"
                    >
                      <Button
                        display="inline-flex"
                        outline="transparent solid 2px"
                        outlineOffset="2px"
                        w="100%"
                        pos="relative"
                        m="auto"
                        bg="white"
                        borderRadius="sm"
                        paddingInline="3"
                        h="10"
                        py="2"
                      >
                        <chakra.span
                          pointerEvents="none"
                          flex="1 1 auto"
                          minW="0px"
                        >
                          <Box
                            display="flex"
                            flexDir="row"
                            alignItems="center"
                            justifyContent="space-between"
                            my="0"
                          >
                            <Text
                              lineHeight="md"
                              letterSpacing="0.004rem"
                              fontSize="sm"
                              m="0"
                            >
                              Size:
                            </Text>
                            <Box
                              display="flex"
                              flexDir="row"
                              alignItems="center"
                            >
                              <Text pr="1" fontSize="sm" lineHeight="md" m="0">
                                All
                              </Text>
                              <DownArrow />
                            </Box>
                          </Box>
                        </chakra.span>
                      </Button>
                    </Box>
                  </Box>
                  {/* <Collapse isOpen={show}>Herro</Collapse> */}

                  <VStack>
                    <Box
                      display="flex"
                      flexDir="row"
                      marginInline="calc(var(--chakra-space-1) * -1)"
                      mb="4"
                      mt="0px !important"
                    >
                      <NextLink href="/">
                        <Button
                          borderRadius="0"
                          borderColor="neutral.black"
                          m="1"
                          flex="1 0 0px"
                          bg="transparent"
                          minW="auto"
                        >
                          <Text>Place Bid</Text>
                        </Button>
                      </NextLink>
                      <NextLink href="/">
                        <Button
                          borderRadius="0"
                          borderColor="neutral.black"
                          m="1"
                          flex="1 0 0px"
                          bg="transparent"
                          minW="auto"
                        >
                          <Text>Buy now</Text>
                        </Button>
                      </NextLink>
                    </Box>
                    <Divider orientation="horizontal" borderWidth="0 0 1px" />
                    <NextLink href="/">
                      <Button
                        borderRadius="0"
                        borderColor="neutral.black"
                        m="1"
                        flex="1 0 0px"
                        bg="transparent"
                        minW="auto"
                      >
                        <Text>
                          Sell for ${productInfo?.product.price} or Ask for More
                        </Text>
                      </Button>
                    </NextLink>
                  </VStack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </chakra.section>

      {productInfo?.product.variants?.length > 0 && (
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
              {productInfo?.product.variants?.map(
                ({ name, price, imageUrl, slug }, index) => {
                  const product = {
                    name: name,
                    price: price,
                    imageUrl: imageUrl,
                    slug: slug,
                  };
                  return (
                    <li data-component="product-card" key={index}>
                      <ProductCard product={product} />
                    </li>
                  );
                }
              )}
            </Grid>
          </Box>
        </chakra.section>
      )}

      <chakra.section data-component="ProductDetails" mt="6">
        <Divider orientation="horizontal" borderWidth="0 0 1px" />
        <chakra.h3 fontWeight="bold" lineHeight="md" mb="2" py="3">
          Product Details
        </chakra.h3>
        <Box>
          <Box
            display="flex"
            flexDir={{ md: 'row' }}
            justifyContent="flex-start"
            w="100%"
          >
            <Box w={{ base: '100%', md: '40%' }}>
              {productInfo?.product.traits && (
                <Box
                  data-component="ProductTraits"
                  display="flex"
                  flexDir="column"
                  w="100%"
                  justifyContent="space-between"
                  flexWrap={{ md: 'wrap' }}
                >
                  {productInfo?.product.traits &&
                    productInfo?.product.traits.map(
                      ({ name, value, visible }, index) =>
                        visible !== 'false' && (
                          <Box
                            key={index}
                            data-component="product-trait"
                            display="flex"
                            justifyContent={{
                              base: 'space-between',
                              md: 'flex-start',
                            }}
                            // w={{ base: '100%', md: '40%' }}
                            mb="1"
                          >
                            <chakra.span flexBasis="50%">{name}</chakra.span>
                            <chakra.p
                              textAlign={{ base: 'right', md: 'left' }}
                              w="100%"
                            >
                              {value}
                            </chakra.p>
                          </Box>
                        )
                    )}
                </Box>
              )}
            </Box>
            {productInfo?.product.description && (
              <Box data-component="ProductDescription">
                <chakra.h2>Product Description</chakra.h2>
                <Text>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: productInfo?.product.description,
                    }}
                  />
                  {/* {data?.product.description} */}
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </chakra.section>

      <chakra.section data-component="MarketHistory" mt="6">
        <Divider orientation="horizontal" borderWidth="0 0 1px" />
        <Box minH="auto">
          <chakra.h3 fontWeight="bold" lineHeight="md" mb="2" py="3">
            12-Month Historical
          </chakra.h3>
          <Box pos="relative">
            <Box data-component="Grid" marginInline="auto">
              <Box
                display="grid"
                gridGap="4"
                gridTemplateColumns="repeat(3, minmax(0px, 1fr));"
              >
                <Stat bg="beige.100" paddingInline="6" py="4">
                  <StatNumber
                    textAlign="left"
                    margin="0"
                    fontFamily="suisseIntlMedium"
                    fontSize={{ base: 'lg', sm: 'xl' }}
                  >
                    $-- - $--
                  </StatNumber>
                  <StatLabel textAlign="left" margin="0">
                    12-Month-Trade-Range
                  </StatLabel>
                </Stat>
                <Stat bg="beige.100" paddingInline="6" py="4">
                  <StatNumber
                    textAlign="left"
                    margin="0"
                    fontFamily="suisseIntlMedium"
                    fontSize={{ base: 'lg', sm: 'xl' }}
                  >
                    $-- - $--
                  </StatNumber>
                  <StatLabel textAlign="left" margin="0">
                    All-Time Trade Range
                  </StatLabel>
                </Stat>

                <Stat bg="beige.100" paddingInline="6" py="4">
                  <StatNumber
                    textAlign="left"
                    margin="0"
                    fontFamily="suisseIntlMedium"
                    fontSize={{ base: 'lg', sm: 'xl' }}
                  >
                    --
                  </StatNumber>
                  <StatLabel textAlign="left" margin="0">
                    Volatility
                  </StatLabel>
                </Stat>

                <Stat bg="beige.100" paddingInline="6" py="4">
                  <StatNumber
                    textAlign="left"
                    margin="0"
                    fontFamily="suisseIntlMedium"
                    fontSize={{ base: 'lg', sm: 'xl' }}
                  >
                    0
                  </StatNumber>
                  <StatLabel textAlign="left" margin="0">
                    Number of Sales
                  </StatLabel>
                </Stat>
                <Stat bg="beige.100" paddingInline="6" py="4">
                  <StatNumber
                    textAlign="left"
                    margin="0"
                    fontFamily="suisseIntlMedium"
                    fontSize={{ base: 'lg', sm: 'xl' }}
                  >
                    --
                  </StatNumber>
                  <StatLabel textAlign="left" margin="0">
                    Price Premium
                  </StatLabel>
                </Stat>
                <Stat bg="beige.100" paddingInline="6" py="4">
                  <StatNumber
                    textAlign="left"
                    margin="0"
                    fontFamily="suisseIntlMedium"
                    fontSize={{ base: 'lg', sm: 'xl' }}
                  >
                    --
                  </StatNumber>
                  <StatLabel textAlign="left" margin="0">
                    Average Sale Price
                  </StatLabel>
                </Stat>
              </Box>
            </Box>
          </Box>
        </Box>
      </chakra.section>
    </Container>
  );
};

Product.getLayout = getLayout;

export default Product;
