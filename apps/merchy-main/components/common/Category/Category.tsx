import {
  Box,
  VStack,
  chakra,
  Container,
  Grid,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
  Heading,
  Checkbox,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { getLayout } from '../Layout';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import Image from 'next/image';
import { BrowseNavbar } from '../../ui';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ScrollToTop from 'react-scroll-to-top';
import moment from 'moment';

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

const BrowseCategoryInfo = gql`
  query ($categoryUrlKey: String!) {
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
      slug
    }

    rootCategory(category: $categoryUrlKey) {
      productAttributes {
        name
        slug
        filterableInStoreFront
        choices {
          name
          slug
          value
          date
        }
      }
    }
  }
`;

const CategoryProducts = gql`
  query ($orderBy: ProductOrder, $first: Int!, $filter: ProductFilterInput) {
    products(orderBy: $orderBy, first: $first, filter: $filter) {
      edges {
        node {
          name
          title
          slug
          market {
            salesEver
            price
            lastSale
            lowestAsk
            highestBid
          }
          media {
            thumbUrl
          }
          productDetails {
            releaseDate
          }
        }
      }
    }
  }
`;

interface AttributeFilterType {
  id: string;
  selectedValues: any[];
}

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [executeSearch, { data: categoryProducts }] =
    useLazyQuery(CategoryProducts);

  const [products, setProducts] = useState(null);
  const [attributeFilters, setAttributeFilters] = useState<
    AttributeFilterType[]
  >([]);

  const [sortBy, setSortBy] = useState({
    direction: 'desc',
    field: 'featured',
  });

  const [categorySlug, setCategorySlug] = useState(slug);

  const { data, loading, error } = useQuery(BrowseCategoryInfo, {
    variables: { categoryUrlKey: slug },
  });

  useEffect(() => {
    executeSearch({
      variables: {
        orderBy: sortBy,
        first: 40,
        filter: { category: categorySlug, attributes: attributeFilters },
      },
    });
    setProducts(categoryProducts?.products.edges);
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
    setAttributeFilters([]);
  }, [slug]);

  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>ops</div>;
  }

  const levelOne = data?.verticalBrowseCategory.filter(
    (category) => category.level === 1
  );
  const levelTwo = data?.verticalBrowseCategory.filter(
    (category) => category.level === 2
  );
  const levelThree = data?.verticalBrowseCategory.filter(
    (category) => category.level === 3
  );

  const handleChange = (e) => {
    setSortBy({ direction: 'desc', field: e.target.value });

    executeSearch({
      variables: {
        orderBy: sortBy,
        first: 40,
        filter: { category: categorySlug, attributes: attributeFilters },
      },
    });

    setProducts(categoryProducts?.products.edges);
  };

  const handleCheckboxChange = (e, slug) => {
    const value = e.target.value;
    const newFilter = [...attributeFilters];

    if (e.target.checked) {
      let exist = false;

      attributeFilters.map((filter, index) => {
        if (filter.id === slug) {
          exist = true;
          const indexValues = [...newFilter[index].selectedValues, value];
          newFilter[index] = { id: slug, selectedValues: [...indexValues] };
        }
      });

      if (!exist) {
        newFilter.push({ id: slug, selectedValues: [value] });
      }
    } else {
      attributeFilters.map((attributeFilter, index) => {
        if (attributeFilter.id === slug) {
          const indexValues = attributeFilter.selectedValues.filter(
            (remove) => remove !== value
          );
          newFilter[index] = { id: slug, selectedValues: [...indexValues] };
        }
      });
    }

    setAttributeFilters(newFilter);

    executeSearch({
      variables: {
        orderBy: sortBy,
        first: 40,
        filter: { category: categorySlug, attributes: attributeFilters },
      },
    });

    setProducts(categoryProducts?.products.edges);
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
        <chakra.h1 {...h1Styles}>{slug}</chakra.h1>
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
                {levelOne?.map(({ name, level, slug: url }) => {
                  let active = false;
                  if (
                    typeof slug === 'string' &&
                    name.toLowerCase() === slug?.replace('-', ' ').toLowerCase()
                  ) {
                    active = true;
                  }

                  return (
                    level === 1 && (
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
                {levelTwo?.map(({ name, level, slug: url }) => {
                  let children = [];
                  let active = false;
                  if (
                    typeof slug === 'string' &&
                    name.toLowerCase() === slug?.replace('-', ' ').toLowerCase()
                  ) {
                    children = levelThree;
                    active = true;
                  }

                  return (
                    level === 2 && (
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
                {data?.rootCategory?.productAttributes.map(
                  ({ name, slug, choices }) => {
                    return (
                      <Box key={slug}>
                        <Heading {...h2Styles} textTransform="uppercase">
                          {name}
                        </Heading>
                        <chakra.ul display="flex" flexWrap="wrap">
                          {choices.map(({ name }) => {
                            return (
                              <chakra.li key={name} w="100%" mb="0">
                                <Checkbox
                                  m="0px 0px 8px"
                                  fontWeight="400"
                                  colorScheme="blackAlpha"
                                  value={name}
                                  onChange={(e) =>
                                    handleCheckboxChange(e, slug)
                                  }
                                >
                                  {name}
                                </Checkbox>
                              </chakra.li>
                            );
                          })}
                        </chakra.ul>
                      </Box>
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
                    <Breadcrumb>
                      {data?.categoryBrowse.breadCrumbs.map(
                        ({ name, url }, index) => {
                          return (
                            <BreadcrumbItem key={index}>
                              <BreadcrumbLink
                                href={url}
                                fontSize="sm"
                                color="neurtral.500"
                                outlineOffset="2px"
                                outline="2px solid transparent"
                                cursor="pointer"
                              >
                                {name}
                              </BreadcrumbLink>
                            </BreadcrumbItem>
                          );
                        }
                      )}
                    </Breadcrumb>
                  </Box>
                </Box>

                <Box>
                  <Select
                    onChange={(e) => handleChange(e)}
                    value={sortBy.field}
                  >
                    <option value="featured">Sort By: Featured</option>
                    <option value="salesEver">Sort By: Total Sold</option>
                    <option value="releaseDate">Sort By: Release Date</option>
                    <option value="lastSale">Sort By: Last Sale</option>
                    <option value="lowestAsk">Sort By: Lowest Ask</option>
                    <option value="highestBid">Sort By: Highest Bid</option>
                  </Select>
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
                {products?.map(({ node }, index) => {
                  return (
                    <Box w="25%" padding="0 8px 16px" key={index}>
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
                                    {sortBy.field === 'highestBid'
                                      ? 'Highest Bid'
                                      : 'Lowest Ask'}
                                  </Text>
                                  <Text
                                    fontWeight="bold"
                                    lineHeight="1.3"
                                    mt="1"
                                  >
                                    {sortBy.field === 'highestBid'
                                      ? `${node.market.highestBid}`
                                      : `${node.market.lowestAsk}`}
                                  </Text>
                                </Box>
                                {sortBy.field !== 'featured' && (
                                  <Box display="flex" mt="1">
                                    {sortBy.field === 'salesEver' && (
                                      <chakra.span {...spanStyles}>
                                        {node.market.salesEver} sold
                                      </chakra.span>
                                    )}
                                    {sortBy.field === 'releaseDate' && (
                                      <chakra.span {...spanStyles}>
                                        Released{' '}
                                        {moment(
                                          node.productDetails.releaseDate
                                        ).format('MM/DD/YYYY')}
                                      </chakra.span>
                                    )}
                                    {sortBy.field === 'lastSale' && (
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
              </Box>
            </Box>
          </Container>
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
