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
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import Link from 'next/link';
import { SocialIconGroup } from '@merchy/ui-shared';
import {
  Twitter,
  Facebook,
  Instagram,
  YouTube,
  Apple,
  Android,
} from '../../../components';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return <Text>{children}</Text>;
};

const ListElement = ({ children }: { children: string }) => {
  return (
    <List fontSize="xs" mb="2" lineHeight="4">
      <Link href="/">{children}</Link>
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
              <ListHeader>Air Jordan</ListHeader>
              <ListElement>Air Jordan 1</ListElement>
              <ListElement>Air Jordan Release Dates</ListElement>
              <ListElement>Womens Jordans</ListElement>
              <ListElement>Air Jordan 11</ListElement>
              <ListElement>Air Jordan 4</ListElement>
              <ListElement>Jordan 1 Mid</ListElement>
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
            <Spacer />

            <SocialIconGroup
              text="Find Us On Social"
              icons={[
                <Twitter key="twitter-icon" />,
                <Facebook key="facebook-icon" />,
                <Instagram key="instagram-icon" />,
                <YouTube key="youtube-icon" />,
              ]}
            />
            <Spacer />
            <SocialIconGroup
              text="Download Our App"
              icons={[
                <Apple key="apple-icon" />,
                <Android key="andriod-icon" />,
              ]}
            />
            <Spacer />
            <SocialIconGroup text="Use Assistive Technology" icons={[]} />
            <Spacer />
            <SocialIconGroup text="Proudly Built in Detroit" icons={[]} />
          </Flex>
        </Box>
        {/* End of SocialLinksUtility */}

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
