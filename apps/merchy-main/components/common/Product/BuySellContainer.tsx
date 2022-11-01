import {
  Box,
  chakra,
  Button,
  Text,
  VStack,
  Divider,
  IconButton,
} from '@chakra-ui/react';
import { DownArrow } from '../../icons';
import NextLink from 'next/link';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

const BuySellContainer = ({ handleToggle, productInfo }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
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
            <chakra.span pointerEvents="none" flex="1 1 auto" minW="0px">
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
                <Box display="flex" flexDir="row" alignItems="center">
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
          w="100%"
          display="flex"
          flexDir="row"
          marginInline="calc(var(--chakra-space-1) * -1)"
          mb="4"
          mt="0px !important"
        >
          <NextLink href="/buy/[slug]" as={`/buy/${slug}`}>
            <Button
              variant="login"
              m="1"
              flex="1 0 0px"
              minW="auto"
              w="100%"
              color="neutral.black"
              fontFamily="suisseIntlRegular"
              h="12"
              fontSize="sm"
              py="0.375rem"
              fontStyle="normal"
            >
              <Text>Place Bid</Text>
            </Button>
          </NextLink>
          <NextLink href="/buy/[slug]" as={`/buy/${slug}`}>
            <Button
              variant="login"
              m="1"
              flex="1 0 0px"
              minW="auto"
              w="100%"
              color="neutral.white"
              bg="green.700"
              fontFamily="suisseIntlRegular"
              h="12"
              fontSize="sm"
              py="0.375rem"
              fontStyle="normal"
              _hover={{
                bg: 'green.800',
              }}
            >
              <Text>Buy now</Text>
            </Button>
          </NextLink>
        </Box>
        <Divider orientation="horizontal" borderWidth="0 0 1px" />
        <NextLink href="/">
          <Button
            as="span"
            cursor="pointer"
            borderRadius="0"
            borderColor="neutral.black"
            m="1"
            flex="1 0 0px"
            bg="transparent"
            minW="auto"
            _hover={{
              bg: 'transparent',
            }}
          >
            <Text
              color="green.700"
              fontSize="md"
              fontWeight="600"
              letterSpacing="0.004rem"
              lineHeight="5"
            >
              Sell for ${productInfo?.productBySlug.market.price} or Ask for
              More
            </Text>
            <IconButton
              aria-label="sell"
              icon={<ArrowForwardIcon w="1em" h="1em" />}
              bg="transparent"
              color="green.700"
              minW="0"
              _hover={{
                bg: 'transparent',
              }}
            />
          </Button>
        </NextLink>
      </VStack>
    </Box>
  );
};

export default BuySellContainer;
