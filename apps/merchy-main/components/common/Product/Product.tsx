import { useRouter } from 'next/router';
import { getLayout } from '../Layout';
import { gql, useQuery } from '@apollo/client';
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
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';

const GetProduct = gql`
  query ($productUrl: String!) {
    product(productUrl: $productUrl) {
      primaryTitle
      secondaryTitle
      imageUrl
      condition
      price
      description
    }
  }
`;

const Product = () => {
  const router = useRouter();

  const { product } = router.query;

  const { data, loading, error } = useQuery(GetProduct, {
    variables: { productUrl: product },
  });

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Container data-component="ProductView" w="100%" maxW="6xl" pb="8">
      <chakra.section mt="2">
        <Box>
          <Box>
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
                  {data?.product.primaryTitle}
                  <chakra.span display="block" color="neutral.500" mt="1">
                    {data?.product.secondaryTitle}
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
                            {data?.product.condition}
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
                      src={data?.product.imageUrl}
                      alt={data?.product.imageUrl}
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
                  >
                    <Box
                      maxW={{ md: '350px', lg: '464px' }}
                      mb="5"
                      paddingBottom="0"
                      border="1px solid neutral.300"
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
                            <Box display="flex" flexDir="row">
                              <Text pr="1">All</Text>
                            </Box>
                          </Box>
                        </chakra.span>
                      </Button>
                    </Box>
                  </Box>
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
                          Sell for ${data?.product.price} or Ask for More
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
        </Box>
      </chakra.section>

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
              <Box
                data-component="ProductTraits"
                display="flex"
                flexDir="column"
                w="100%"
              ></Box>
            </Box>
          </Box>
        </Box>
        <Box data-component="ProductDescription">
          <chakra.h2>Product Description</chakra.h2>
          <Text>{data?.product.description}</Text>
        </Box>
      </chakra.section>

      <chakra.section data-component="MarketHistory" mt="6">
        <Divider orientation="horizontal" borderWidth="0 0 1px" />
        <chakra.h3 fontWeight="bold" lineHeight="md" mb="2" py="3">
          12-Month Historical
        </chakra.h3>
      </chakra.section>
    </Container>
  );
};

Product.getLayout = getLayout;

export default Product;
