import {
  Box,
  VStack,
  chakra,
  Container,
  Grid,
  Text,
  Select,
  Heading,
  Checkbox,
  SimpleGrid,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { getLayout } from '../Layout';
import { useLazyQuery } from '@apollo/client';
import Image from 'next/image';
import { BrowseNavbar, BreadCrumbs } from '../../ui';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ScrollToTop from 'react-scroll-to-top';
import moment from 'moment';
import { GetCategoryProducts } from '../../../utils/gql';

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

const spanStyles = {
  display: 'inline-flex',
  verticalAlign: 'top',
  alignItems: 'center',
  maxW: '100%',
  fontWeight: 'normal',
  lineHeight: '1.2',
  outline: 'transparent solid 2px',
  outlineOffset: '2px',
  mb: '1',
  mr: '1',
  mt: '1',
  minW: '1.5rem',
  minH: '1.5rem',
  fontSize: 'xs',
  borderRadius: '0',
  paddingInline: '1',
  bg: 'beige.100',
  color: 'neutral.black',
  h: '22px',
  fontFamily: 'suisseIntlMedium',
  py: '2px',
};

const attributeFiltersInitialState = {
  priceRange: '',
  releaseYears: [],
  sizes: [],
  sizeTypes: [],
};

const Category = ({
  initialProducts,
  verticalBrowseCategories,
  filterAttributes,
}) => {
  const router = useRouter();
  const { slug } = router.query;

  const [executeSearch, { data: categoryProducts }] =
    useLazyQuery(GetCategoryProducts);

  const [products, setProducts] = useState(initialProducts);
  const [attributeFilters, setAttributeFilters] = useState(
    attributeFiltersInitialState
  );

  const [sortBy, setSortBy] = useState<string>('createdAt');

  const [categorySlug, setCategorySlug] = useState(slug);

  useEffect(() => {
    executeSearch({
      variables: {
        orderBy: sortBy,
        first: 40,
        categorySlug: categorySlug,
        priceRange: attributeFilters.priceRange,
        releaseYears: attributeFilters.releaseYears,
        sizes: attributeFilters.sizes,
        sizeTypes: attributeFilters.sizeTypes,
      },
    });
    setProducts(categoryProducts?.allProducts.edges);
  }, [
    products,
    sortBy,
    categoryProducts,
    categorySlug,
    executeSearch,
    attributeFilters,
  ]);

  useEffect(() => {
    setCategorySlug(slug);
    setAttributeFilters(attributeFiltersInitialState);
  }, [slug]);

  const [rootLevel, levelOne, levelTwo, levelThree] = [[], [], [], []];

  verticalBrowseCategories.map(({ node }) => {
    if (node.level === 0) {
      rootLevel.push({ level: node.level, name: node.name, slug: node.slug });
    } else if (node.level === 1) {
      levelOne.push({ level: node.level, name: node.name, slug: node.slug });
    } else if (node.level === 2) {
      levelTwo.push({ level: node.level, name: node.name, slug: node.slug });
    } else if (node.level === 3) {
      levelThree.push({ level: node.level, name: node.name, slug: node.slug });
    }
  });

  const handleChange = (e) => {
    setSortBy(e.target.value);

    executeSearch({
      variables: {
        orderBy: sortBy,
        first: 40,
        categorySlug: categorySlug,
        priceRange: attributeFilters.priceRange,
        releaseYears: attributeFilters.releaseYears,
        sizes: attributeFilters.sizes,
        sizeTypes: attributeFilters.sizeTypes,
      },
    });

    setProducts(categoryProducts.allProducts.edges);
  };

  const handleCheckboxChange = (e, fieldValue) => {
    let value = e.target.value;

    if (!e.target.checked) {
      value = fieldValue === 'priceRange' ? '' : [];
    } else {
      if (fieldValue === 'releaseYears') {
        value = [parseInt(e.target.value)];
      } else if (fieldValue !== 'priceRange') {
        value = [e.target.value];
      }
    }

    setAttributeFilters((prevState) => ({
      ...prevState,
      [fieldValue]: value,
    }));

    executeSearch({
      variables: {
        orderBy: sortBy,
        first: 40,
        categorySlug: categorySlug,
        priceRange: attributeFilters.priceRange,
        releaseYears: attributeFilters.releaseYears,
        sizes: attributeFilters.sizes,
        sizeTypes: attributeFilters.sizeTypes,
      },
    });

    setProducts(categoryProducts?.allProducts.edges);
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
        textTransform="capitalize"
      >
        <chakra.h1 {...h1Styles}>
          {typeof slug === 'string' ? slug.replace(/-/g, ' ') : slug}
        </chakra.h1>
        <chakra.p {...paragraphStyles}>
          {/* {categoryInfo.categoryBrowse.description} */}
        </chakra.p>
      </VStack>

      <Container
        w="full"
        marginInline="auto"
        maxW="1170px"
        paddingInline="1rem"
      >
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={{ base: '2', lg: '6' }}
          mb="6"
          marginInline="0"
          paddingInline="0"
          mt={{ lg: '10' }}
          overflow="hidden"
        >
          {/* Left Nav Menu */}
          <Box
            display={{ base: 'none', lg: 'block' }}
            paddingLeft={4}
            gridColumn={{
              base: 'span 3/span 3',
              md: 'span 2/span 2',
              lg: 'span 1/span 1',
            }}
          >
            <Box>
              {/* Left Top Nav Menu */}
              <Box marginBottom={8}>
                {rootLevel.map(({ name, slug: url, level }) => {
                  let active = false;
                  if (
                    typeof slug === 'string' &&
                    name.toLowerCase() === slug?.replace('-', ' ').toLowerCase()
                  ) {
                    active = true;
                  }

                  return (
                    level === 0 && (
                      <BrowseNavbar
                        key={url}
                        name={name}
                        slug={url}
                        active={active}
                        nextLevel={[]}
                      />
                    )
                  );
                })}
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
                {levelOne?.map(({ name, slug: url, level }) => {
                  let active = false;
                  let children = [];
                  if (
                    typeof slug === 'string' &&
                    name.toLowerCase() === slug?.replace('-', ' ').toLowerCase()
                  ) {
                    active = true;
                    children = levelTwo;
                  }

                  return (
                    level === 1 && (
                      <BrowseNavbar
                        key={url}
                        name={name}
                        slug={url}
                        active={active}
                        nextLevel={children}
                      />
                    )
                  );
                })}
              </Box>

              <Box>
                {filterAttributes.map(({ node }) => {
                  return (
                    <Box key={node.fieldValue}>
                      <Heading {...h2Styles} textTransform="uppercase">
                        {node.displayName}
                      </Heading>
                      <chakra.ul display="flex" flexWrap="wrap">
                        {node.productAttribute.edges.map(({ node: x }) => {
                          return (
                            <chakra.li key={x.value} w="100%" mb="0">
                              <Checkbox
                                m="0px 0px 8px"
                                fontWeight="400"
                                colorScheme="blackAlpha"
                                value={x.value}
                                onChange={(e) =>
                                  handleCheckboxChange(e, node.fieldValue)
                                }
                              >
                                {x.displayName}
                              </Checkbox>
                            </chakra.li>
                          );
                        })}
                      </chakra.ul>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
          {/* End of Left Nav Menu */}

          {/* Product Section */}
          <Box
            gridColumn={{ base: 'span 5 / span 5', lg: 'span 4/span 4' }}
            maxW="100%"
          >
            <Box
              data-component="category-breadcrumb-filter"
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
                    {/* {categoryInfo.categoryBrowse.breadCrumbs && (
                      <BreadCrumbs
                        links={categoryInfo.categoryBrowse.breadCrumbs}
                      />
                    )} */}
                  </Box>
                </Box>

                <Box>
                  <Select onChange={(e) => handleChange(e)} value={sortBy}>
                    <option value="createdAt">Sort By: Featured</option>
                    <option value="-market__salesEver">
                      Sort By: Total Sold
                    </option>
                    {/* <option value="releaseDate">Sort By: Release Date</option> */}
                    <option value="market__lastSale">Sort By: Last Sale</option>
                    <option value="market__lowestAsk">
                      Sort By: Lowest Ask
                    </option>
                    <option value="-market__highestBid">
                      Sort By: Highest Bid
                    </option>
                  </Select>
                </Box>
              </Box>
            </Box>

            <SimpleGrid id="browse-grid" columns={{ base: 2, lg: 4, xl: 4 }}>
              {products?.map(({ node }, index) => {
                return (
                  <Box padding="0 8px 16px" key={index}>
                    <Box
                      border="solid #E2E8F0"
                      borderWidth="thin"
                      borderRadius="3px"
                      minW="141px"
                      h="auto"
                      pos="relative"
                      mr="0"
                      _hover={{
                        cursor: 'pointer',
                      }}
                    >
                      <Link href={`/product/${node.slug}`}>
                        <Box
                          display="flex"
                          flexDir="column"
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
                                width={145}
                                height={75}
                                src={node.media.thumbUrl}
                                alt={node.name}
                                priority={true}
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
                              {node.name}
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
                                    ? `${node.market.highestBid}`
                                    : `${node.market.lowestAsk}`}
                                </Text>
                              </Box>
                              {sortBy !== 'featured' && (
                                <Box display="flex" mt="1">
                                  {sortBy === 'market__salesEver' && (
                                    <chakra.span {...spanStyles}>
                                      {node.market.salesEver} sold
                                    </chakra.span>
                                  )}
                                  {sortBy === 'releaseDate' && (
                                    <chakra.span {...spanStyles}>
                                      Released{' '}
                                      {moment(
                                        node.productDetails.releaseDate
                                      ).format('MM/DD/YYYY')}
                                    </chakra.span>
                                  )}
                                  {sortBy === 'market__lastSale' && (
                                    <chakra.span {...spanStyles}>
                                      Last Sale: ${node.market.lastSale}
                                    </chakra.span>
                                  )}
                                </Box>
                              )}
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>
        </Grid>
        <ScrollToTop
          smooth
          width="auto"
          viewBox="0 0 32 32"
          svgPath="M17.504 26.025l.001-14.287 6.366 6.367L26 15.979 15.997 5.975 6 15.971 8.129 18.1l6.366-6.368v14.291z"
        />
      </Container>
    </Box>
  );
};

Category.getLayout = getLayout;

export default Category;
