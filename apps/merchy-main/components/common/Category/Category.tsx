import {
  Box,
  Container,
  Grid,
  Select,
  Heading,
  SimpleGrid,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { getLayout } from '../Layout';
import { useLazyQuery } from '@apollo/client';
import { BreadCrumbs, Blurb, BrowseHeader } from '../../ui';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ScrollToTop from 'react-scroll-to-top';
import { GetCategoryProducts } from '../../../utils/gql';
import Card from './Card';
import LeftNav from './LeftNav';

const attributeFiltersInitialState = {
  priceRange: '',
  releaseYears: [],
  sizes: [],
  sizeTypes: [],
};

const Category = ({
  categoryInfo,
  initialProducts,
  verticalBrowseCategories,
  filterAttributes,
}) => {
  const router = useRouter();
  const { slug } = router.query;

  const [executeSearch, { data: categoryProducts }] =
    useLazyQuery(GetCategoryProducts);

  const [products, setProducts] = useState(initialProducts.edges);
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
      <BrowseHeader
        slug={slug}
        description={categoryInfo.data.currentCategoryInfo.description}
      />

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
          <LeftNav
            levelOne={levelOne}
            levelTwo={levelTwo}
            rootLevel={rootLevel}
            handleCheckboxChange={handleCheckboxChange}
            filterAttributes={filterAttributes}
          />

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
                    {categoryInfo.data.currentCategoryInfo.breadcrumbs && (
                      <BreadCrumbs
                        links={
                          categoryInfo.data.currentCategoryInfo.breadcrumbs
                        }
                      />
                    )}
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

            {products && products.length > 0 ? (
              <SimpleGrid id="browse-grid" columns={{ base: 2, lg: 4, xl: 4 }}>
                {products.map(({ node }) => (
                  <Card key={node.name} product={node} sortBy={sortBy} />
                ))}
              </SimpleGrid>
            ) : (
              <Box>
                <Heading variant="regular">
                  Nothing to see here! Please change your filters or{' '}
                  <Link href="/suggestion" as="/suggestion" passHref>
                    <ChakraLink variant="green">SUGGEST A PRODUCT.</ChakraLink>
                  </Link>
                </Heading>
              </Box>
            )}

            {categoryInfo.data.currentCategoryInfo.shortBlurb && (
              <Blurb
                blurb={categoryInfo.data.currentCategoryInfo.blurb}
                shortBlurb={categoryInfo.data.currentCategoryInfo.shortBlurb}
              />
            )}
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
