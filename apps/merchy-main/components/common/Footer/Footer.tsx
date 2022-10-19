import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Heading,
  chakra,
  Divider,
  List,
  Spacer,
  Button,
  VStack,
  ListItem,
  Icon,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import Link from 'next/link';
import { LinkedIn, GitHub, WebAsset, Apple, Adb } from '@mui/icons-material';

const ListHeader = ({
  children,
  slug,
  pageType,
}: {
  children: ReactNode;
  slug: string;
  pageType: string;
}) => {
  return (
    <Link href={`/${pageType}/[slug]`} as={`/${pageType}/${slug}`}>
      <Text cursor="pointer">{children}</Text>
    </Link>
  );
};

const ListElement = ({
  children,
  slug,
  pageType,
}: {
  children: string;
  slug: string;
  pageType: string;
}) => {
  return (
    <List fontSize="xs" mb="2" lineHeight="4">
      <Link href={`/${pageType}/[slug]`} as={`/${pageType}/${slug}`}>
        {children}
      </Link>
    </List>
  );
};

const Footer = () => {
  return (
    <chakra.footer
      pos="relative"
      paddingInline={{ base: '4', md: '6', lg: '8' }}
      pt={{ base: '6', lg: '8' }}
      paddingBottom="0"
      zIndex="2"
      bg="neutral.700"
      overflowX="hidden"
    >
      <Box maxW="1296px" textColor="white" marginInline="auto">
        <Heading
          fontFamily="gesturaText"
          fontSize="3xl"
          fontWeight={500}
          color="neutral.white"
          lineHeight="1.28"
          letterSpacing="normal"
          minHeight="0vw"
          marginBottom={7}
        >
          MerchY. Access the Now.
        </Heading>

        <Container as={Stack} maxW="1296px">
          <SimpleGrid columns={{ base: 1, sm: 3, md: 6 }} spacing={6}>
            <Stack align={'flex-start'}>
              <ListHeader slug="jordan" pageType="category">
                Air Jordan
              </ListHeader>
              <ListElement slug="jordan-1" pageType="category">
                Air Jordan 1
              </ListElement>
              <ListElement slug="jordan-3" pageType="category">
                Air Jordan 3
              </ListElement>
              <ListElement slug="jordan-1-mid" pageType="category">
                Jordan 1 Mid
              </ListElement>
              <ListElement slug="jordan-4" pageType="category">
                Air Jordan 4
              </ListElement>
              <ListElement slug="jordan-11" pageType="category">
                Air Jordan 11
              </ListElement>
              <ListElement slug="jordan-release-dates" pageType="news">
                Air Jordan Release Dates
              </ListElement>
            </Stack>

            <Stack align={'flex-start'}>
              <ListHeader slug="yeezy" pageType="category">
                Yeezy
              </ListHeader>
              <ListElement slug="yeezy-boost-350" pageType="category">
                Yeezy Boost 350
              </ListElement>
              <ListElement slug="yeezy-boost-350-v2" pageType="category">
                Yeezy Boost 350 V2
              </ListElement>
              <ListElement slug="yeezy-700" pageType="category">
                Yeezy Boost 700
              </ListElement>
              <ListElement slug="yeezy-boots" pageType="category">
                Yeezy Boot
              </ListElement>
              <ListElement slug="yeezy-slides" pageType="category">
                {/* 13 */}
                Yeezy Slides
              </ListElement>
              <ListElement slug="yeezy-foam-runner" pageType="category">
                {/* 12 */}
                Yeezy Foam RNNR
              </ListElement>
            </Stack>

            <Stack align={'flex-start'}>
              <ListHeader slug="nike" pageType="category">
                Nike
              </ListHeader>
              <ListElement slug="nike-dunk" pageType="category">
                Nike Dunk
              </ListElement>
              <ListElement slug="nike-dunk-low" pageType="category">
                Nike Dunk Low
              </ListElement>
              <ListElement slug="nike-blazer" pageType="category">
                Nike Blazer
              </ListElement>
              <ListElement slug="nike-air-force" pageType="category">
                Nike Air Force 1
              </ListElement>
              <ListElement slug="nike-air-max" pageType="category">
                Nike Air Max
              </ListElement>
              <ListElement slug="nike-kobe" pageType="category">
                Kobe
              </ListElement>
            </Stack>

            <Stack align={'flex-start'}>
              <ListHeader slug="apparel" pageType="category">
                Apparel
              </ListHeader>
              <ListElement slug="supreme" pageType="category">
                Supreme
              </ListElement>
              <ListElement slug="essentials" pageType="category">
                Essentials
              </ListElement>
              <ListElement slug="stussy" pageType="category">
                Stussy
              </ListElement>
              <ListElement slug="nike-apparel" pageType="category">
                Nike Apparel
              </ListElement>
              <ListElement slug="kith" pageType="category">
                Kith
              </ListElement>
              <ListElement slug="yeezy-gap" pageType="category">
                Yeezy Gap
              </ListElement>
            </Stack>

            <Stack align={'flex-start'}>
              <ListHeader slug="placeholder" pageType="popular">
                Recent Updates
              </ListHeader>
              <ListElement slug="placeholder" pageType="news">
                Best Sneaker Releasing
              </ListElement>
              <ListElement slug="placeholder" pageType="news">
                Shoe Size Conversion Charts
              </ListElement>
              <ListElement slug="hoka" pageType="category">
                Hoka Shoes
              </ListElement>
              <ListElement slug="xbox-series-x" pageType="category">
                Xbox Series X
              </ListElement>
              <ListElement slug="ps5" pageType="category">
                PS5
              </ListElement>
              <ListElement slug="salomon" pageType="category">
                Salomon Shoes
              </ListElement>
            </Stack>

            <Stack align={'flex-start'}>
              <ListHeader slug="placeholder" pageType="news">
                Popular Releases
              </ListHeader>
              <ListElement slug="placeholder" pageType="product">
                Lightning McQueen Crocs
              </ListElement>
              <ListElement
                slug="nikecraft-general-purpose-shoe-tom-sachs-yellow"
                pageType="product"
              >
                NikeCraft GPS Yellow
              </ListElement>
              <ListElement slug="placeholder" pageType="product">
                Jordan 2 J Balvin
              </ListElement>
              <ListElement
                slug="nike-dunk-low-retro-white-black-2021"
                pageType="product"
              >
                Nike Dunk Low Retro
              </ListElement>
              <ListElement
                slug="air-jordan-3-retro-fire-red-2022"
                pageType="product"
              >
                Jordan 3 Retro Fire Red
              </ListElement>
              <ListElement slug="placeholder" pageType="product">
                Air Force 1 Low &apos;07 White
              </ListElement>
            </Stack>
          </SimpleGrid>
        </Container>
        <Divider
          borderWidth="0 0 1px"
          paddingTop={6}
          marginBottom={6}
          borderColor="neutral.300"
          orientation="horizontal"
        />

        {/* SocialLinksUtility */}
        <Box mb="4" marginInline="auto" px="50px">
          <Flex
            flexDirection={{ md: 'row' }}
            flexFlow="column wrap"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              justifyContent={{ base: 'center', lg: 'flex-start' }}
              mb={{ base: '4', lg: 'inherit' }}
              flex={{ base: 'inherit', md: '1 1 100%', lg: 'inherit' }}
            >
              <Button
                borderRadius={0}
                color="white"
                _hover={{
                  bg: 'white',
                  color: 'neutral.600',
                }}
                py="2\.5"
                aria-label="United States | English | $ USD"
                bg="transparent"
                border="1px solid rgb(255, 255, 255)"
                fontWeight="semibold"
                fontSize="md"
                h="42px"
              >
                <span>
                  United States&nbsp;|&nbsp;English&nbsp;|&nbsp;$USD&nbsp;
                </span>
              </Button>
            </Box>

            <Box
              data-component="SocialIconGroup"
              minW={{ base: 'auto', md: '180px', lg: 'auto' }}
            >
              <Box
                display="flex"
                flexDir="column"
                pt={{ base: '3', md: '0px' }}
              >
                <Text
                  color="neutral.white"
                  textAlign={{ base: 'center', lg: 'inherit' }}
                  fontSize="sm"
                >
                  Get to know me :&#41;
                </Text>

                <Spacer />

                <List
                  display="flex"
                  listStyleType="none"
                  justifyContent={{ base: 'center', lg: 'inherit' }}
                >
                  <ListItem w="auto" paddingInline="2">
                    <a
                      href="https://www.linkedin.com/in/richardxuetang/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon w="1em" h="1em" as={LinkedIn} />
                    </a>
                  </ListItem>

                  <ListItem w="auto" paddingInline="2">
                    <a
                      href="https://github.com/richiexuetang"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon w="1em" h="1em" as={GitHub} />
                    </a>
                  </ListItem>

                  <ListItem w="auto" paddingInline="2">
                    <a
                      href="https://richardxuetang.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon w="1em" h="1em" as={WebAsset} />
                    </a>
                  </ListItem>
                </List>
              </Box>
            </Box>

            <Box
              data-component="SocialIconGroup"
              minW={{ base: 'auto', md: '180px', lg: 'auto' }}
            >
              <Box
                display="flex"
                flexDir="column"
                pt={{ base: '3', md: '0px' }}
              >
                <Text
                  color="neutral.white"
                  textAlign={{ base: 'center', lg: 'inherit' }}
                  fontSize="sm"
                >
                  Download the app
                </Text>

                <Spacer />

                <List
                  display="flex"
                  listStyleType="none"
                  justifyContent={{ base: 'center', lg: 'inherit' }}
                >
                  <ListItem w="auto" paddingInline="2">
                    <a
                      href="https://itunes.apple.com/us/app/stockx-buy-sell-authentic/id881599819?mt=8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon w="1em" h="1em" as={Apple} />
                    </a>
                  </ListItem>

                  <ListItem w="auto" paddingInline="2">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.stockx.stockx&hl=en_US"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon w="1em" h="1em" as={Adb} />
                    </a>
                  </ListItem>
                </List>
              </Box>
            </Box>

            <Box
              data-component="SocialIconGroup"
              minW={{ base: 'auto', md: '180px', lg: 'auto' }}
            >
              <Box
                display="flex"
                flexDir="column"
                pt={{ base: '3', md: '0px' }}
              >
                <Text
                  color="neutral.white"
                  textAlign={{ base: 'center', lg: 'inherit' }}
                  fontSize="sm"
                >
                  Use Assistive Technology
                </Text>
                <Spacer />
              </Box>
            </Box>

            <Box
              data-component="SocialIconGroup"
              minW={{ base: 'auto', md: '180px', lg: 'auto' }}
            >
              <Box
                display="flex"
                flexDir="column"
                pt={{ base: '3', md: '0px' }}
              >
                <Text
                  color="neutral.white"
                  textAlign={{ base: 'center', lg: 'inherit' }}
                  fontSize="sm"
                >
                  Proudly Built at Home
                </Text>
                <Spacer />
              </Box>
            </Box>
          </Flex>
        </Box>
        {/* End of SocialLinksUtility

        {/* SubFooter */}
        <Box
          bg="neutral.black"
          pos="relative"
          w="100vw"
          marginInline="-50vw"
          left="50%"
          right="50%"
          textColor="white"
        >
          <Flex
            padding="2rem 0"
            justifyContent="space-between"
            marginInline="auto"
            maxWidth="1296px"
          >
            <VStack></VStack>

            <Spacer />
            <chakra.address
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="xs"
              mt={4}
              mb={0}
              minW="195px"
            >
              @2022 MerchY. All Rights Reserved.
            </chakra.address>
          </Flex>
        </Box>
      </Box>
      {/* End SubFooter */}
    </chakra.footer>
  );
};

export default Footer;
