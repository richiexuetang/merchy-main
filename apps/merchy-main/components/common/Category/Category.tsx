import { Box, VStack, chakra, Container, Grid, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { getLayout } from '../Layout';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';
import { BrowseNavbar } from '../../ui';

const BrowseCategoryInfo = gql`
  query ($categoryUrlKey: String!) {
    categoryProducts(categoryUrlKey: $categoryUrlKey) {
      name
      imageUrl
      price
      urlKey
    }

    categoryBrowse(categoryUrl: $categoryUrlKey) {
      description
      breadCrumbs {
        name
        level
        url
      }
    }

    verticalBrowseCategory(category: $categoryUrlKey) {
      name
      level
      urlKey
    }
  }
`;

const Category = () => {
  const router = useRouter();

  const { category } = router.query;

  const { data, loading, error } = useQuery(BrowseCategoryInfo, {
    variables: { categoryUrlKey: category },
  });

  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>ops</div>;
  }

  const h1Styles = {
    marginBottom: 1,
    fontSize: {
      base: '2xl',
      lg: '6xl',
    },
  };

  const paragraphStyles = {
    fontSize: {
      base: 'sm',
      lg: 'lg',
    },
    maxW: '438px',
    overflow: 'hidden',
  };

  const h2Styles = {
    fontWeight: 600,
    fontSize: '16px',
    marginBottom: 2,
    lineHeight: '24px',
    minH: '0vw',
    letterSpacing: '1px',
    color: 'black',
  };

  return (
    <Box as="main" minH="100vh" marginTop="0">
      <VStack
        bg="#dfe2ef"
        minH="270px"
        maxW="1248px"
        paddingLeft={{ base: 0, lg: 12 }}
        padding="15px"
        alignItems="flex-start"
        justifyContent="center"
        margin="auto"
      >
        <chakra.h1 {...h1Styles}>{category}</chakra.h1>
        <chakra.p {...paragraphStyles}>
          {data?.categoryBrowse.description}
        </chakra.p>
      </VStack>

      <Container
        w="full"
        marginInline="auto"
        maxW="1170px"
        paddingInline="1rem"
      >
        <Grid templateColumns="repeat(5, 1fr)" gap={6} marginTop={10}>
          {/* Left Nav Menu */}
          <Container display="block" paddingLeft={4} gridColumn="span 1/span 1">
            <Box>
              {/* Left Top Nav Menu */}
              <Box marginBottom={8}>
                {data?.verticalBrowseCategory.map(
                  ({ name, level, urlKey }, index) => {
                    return (
                      level === 1 && (
                        <BrowseNavbar
                          key={index}
                          name={name}
                          urlKey={urlKey}
                          category={category}
                        />
                      )
                    );
                  }
                )}
              </Box>
              {/* End of Left Top Nav Menu */}

              {/* Below Retail Section  */}
              <Box marginBottom={8}>
                <Box marginBottom="7px" role="button">
                  <chakra.h2 {...h2Styles}> BELOW RETAIL </chakra.h2>
                </Box>
              </Box>
              {/* End of Below Retail */}

              <Box marginBottom={8}>
                {data?.verticalBrowseCategory.map(
                  ({ name, level, urlKey }, index) => {
                    return (
                      level === 2 && (
                        <BrowseNavbar
                          key={index}
                          name={name}
                          urlKey={urlKey}
                          category={category}
                        />
                      )
                    );
                  }
                )}
              </Box>
            </Box>
          </Container>
          {/* End of Left Nav Menu */}

          {/* Product Section */}
          <Container gridColumn="span 4/span 4" maxW="100%">
            <Box
              data-component="category-breadcrumb"
              display={{ base: 'none', lg: 'block' }}
            >
              <Box
                display="flex"
                paddingRight="2"
                mb="6"
                flexDir="row"
                justifyContent="space-between"
              >
                <Box>
                  <Box paddingBottom="2">
                    <chakra.nav aria-label="breadcrumb">
                      <chakra.ol>
                        {data?.categoryBrowse.breadCrumbs.map(
                          ({ name, url }, index) => {
                            return (
                              <chakra.li
                                key={index}
                                display="inline-flex"
                                alignItems="center"
                              >
                                <chakra.a
                                  href={url}
                                  fontSize="sm"
                                  color="neurtral.500"
                                  outlineOffset="2px"
                                  outline="2px solid transparent"
                                  cursor="pointer"
                                >
                                  {name}
                                </chakra.a>
                                <chakra.span
                                  marginInline="1\.5"
                                  color="neurtral.500"
                                  fontSize="sm"
                                >
                                  /
                                </chakra.span>
                              </chakra.li>
                            );
                          }
                        )}
                      </chakra.ol>
                    </chakra.nav>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              data-component="category-products"
              display="flex"
              justifyContent="flex-start"
              flexWrap="wrap"
              w="100%"
            >
              <Box
                id="browse-grid"
                display="flex"
                justifyContent="flex-start"
                flexWrap="wrap"
                w="100%"
              >
                {data?.categoryProducts.map(
                  ({ name, imageUrl, price, urlKey }, index) => {
                    return (
                      <Box w="25%" padding="0 8px 16px" key={index}>
                        <Box
                          borderRadius="3px"
                          minW="141px"
                          h="auto"
                          pos="relative"
                          mr="0"
                        >
                          <Link href={`/product/${urlKey}`}>
                            <Box
                              display="flex"
                              flexDir="column"
                              border="1"
                              borderColor="neutral.200"
                            >
                              <Box margin={{ base: '2', lg: '4' }}>
                                <Box
                                  display="flex"
                                  justifyContent="center"
                                  w="140px"
                                  h="75px"
                                  maxW="100%"
                                  m="0px auto"
                                >
                                  <Image
                                    layout="fixed"
                                    width={140}
                                    height={75}
                                    src={imageUrl}
                                    alt={name}
                                  />
                                </Box>
                              </Box>
                              <Box
                                display="flex"
                                flexDir="column"
                                h="100%"
                                padding="2"
                                textAlign="left"
                                pos="relative"
                              >
                                <Text
                                  overflow="hidden"
                                  fontWeight="md"
                                  fontSize={{ base: 'xs', md: 'sm' }}
                                  h={{ base: '34px', md: '40px' }}
                                >
                                  {name}
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
                                      Lowest Ask
                                    </Text>
                                    <Text
                                      fontWeight="bold"
                                      lineHeight="1.3"
                                      mt="1"
                                    >
                                      {price}
                                    </Text>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Link>
                        </Box>
                      </Box>
                    );
                  }
                )}
              </Box>
            </Box>
          </Container>
        </Grid>
      </Container>
    </Box>
  );
};

Category.getLayout = getLayout;

export default Category;
