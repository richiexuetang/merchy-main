import {
  Container,
  Box,
  Heading,
  Text,
  chakra,
  Button,
} from '@chakra-ui/react';
import { getLayout } from '../Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ConfirmDetails from './ConfirmDetails';

const BuyPage = ({ buyProductInfo }) => {
  const [confirmDetail, setConfirmDetail] = useState(false);
  const router = useRouter();
  const { slug } = router.query;

  const handleClick = () => {
    if (!confirmDetail) {
      setConfirmDetail(!confirmDetail);
    } else {
      router.push('/');
    }
    console.log(confirmDetail);
  };

  return (
    <Container
      w="100%"
      marginInline="auto"
      maxW="100%"
      paddingInline="1rem"
      p="0px"
      m="0px"
      pos="relative"
      overflowY="hidden"
      data-component="buy-page"
    >
      <Box
        display="flex"
        justifyContent={{ base: 'flex-start', md: 'center' }}
        flexFlow="column nowrap"
        flexDir={{ md: 'row' }}
        data-component="split-pane-page"
      >
        <Box
          data-component="pane"
          paddingInline={{ base: '3', sm: '5', lg: '7' }}
          paddingBottom={{ base: '5', md: '24' }}
          w={{ base: '100%', md: '60%' }}
        >
          <Box
            data-component="buy-sell-header"
            display="flex"
            alignItems="center"
            flexFlow={{ base: 'row-reverse nowrap', md: 'column nowrap' }}
            mt={{ base: '5', md: '0' }}
          >
            <Box
              data-component="pane-header"
              textAlign={{ base: 'left', md: 'center' }}
              pt={{ base: '3', md: '7' }}
              ml={{ base: '3', md: '0' }}
              flexGrow={{ base: '1', md: 'initial' }}
            >
              <Heading>
                <Box>{buyProductInfo.primaryTitle}</Box>
                <Box>{buyProductInfo.secondaryTitle}</Box>
              </Heading>
              <Text data-component="market-summary">
                Highest Bid :
                <chakra.span>${buyProductInfo.market.highestBid}</chakra.span> |
                Lowest Ask :
                <chakra.span>${buyProductInfo.market.lowestAsk}</chakra.span>
              </Text>
            </Box>
            <Box
              data-component="header-image"
              w={{ base: '24', md: '80%' }}
              m="auto"
              pt={{ base: '0', md: '7' }}
            >
              <Image
                layout="fixed"
                width={644}
                height={460}
                src={buyProductInfo.media.imageUrl}
                alt={buyProductInfo.media.imageUrl}
                priority={true}
              />
            </Box>
          </Box>
        </Box>

        <Box
          data-component="pane"
          minH="100vh"
          overflowY="hidden"
          paddingInline={{ base: '3', sm: '5', lg: '7' }}
          paddingBottom={{ base: '5', md: '24' }}
          w={{ base: '100%', md: '40%' }}
          minW={{ base: '0', md: '450px', lg: '500px' }}
          bg="#FAFAFA"
        >
          {confirmDetail ? (
            <ConfirmDetails purchasePrice={buyProductInfo.market.lowestAsk} />
          ) : (
            <Box
              data-component="bid-entry-step-wrapper"
              bg="neutral.white"
              borderRadius="base"
              pt="7"
              mt="7"
            >
              <Box
                data-component="bid-buy-swap-container"
                p={{ base: '0px 10px', md: '0px 30px' }}
                mb="6"
              >
                <Box
                  display="flex"
                  h="55px"
                  bg="beige.100"
                  border="1px solid #CFCFCF"
                  borderRadius="30px"
                >
                  <chakra.button
                    color="neutral.black"
                    flexGrow="1"
                    fontSize={{ base: '12px', md: '16px' }}
                    padding="15px 20px"
                    textAlign="center"
                    letterSpacing="0px"
                    fontWeight="600"
                    borderRadius="30px"
                    cursor="pointer"
                  >
                    Place Bid
                  </chakra.button>
                  <chakra.button
                    boxShadow="rgb(0 0 0 / 15%) 0px 1px 2px 0px"
                    color="neutral.white"
                    bg="green.700"
                    border="1px solid #006340"
                    flexGrow="1"
                    fontSize={{ base: '12px', md: '16px' }}
                    padding="15px 20px"
                    textAlign="center"
                    letterSpacing="0px"
                    fontWeight="600"
                    borderRadius="30px"
                    cursor="pointer"
                  >
                    Buy Now
                  </chakra.button>
                </Box>
              </Box>
              <Heading pl="6">${buyProductInfo.market.lowestAsk}</Heading>
              <Box
                data-component="multi-order-summary"
                bg="neutral.white"
                mt="7"
                paddingInline={{ base: '3', md: '7' }}
                pb={{ base: '0', md: '4' }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  borderTop="2px dotted rgb(207, 207, 207)"
                  pt="4"
                  pb="2"
                >
                  <Text>Item Price</Text>
                  <Text>${buyProductInfo.market.lowestAsk}.00</Text>
                </Box>
                <Text fontSize="sm">
                  Final price will be calculated at checkout.
                </Text>
              </Box>
            </Box>
          )}

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            w="100%"
            pt="3"
          >
            <Link href="/product/[slug]" as={`/product/${slug}`}>
              <Button variant="login" h="42px" fontFamily="suisseIntlRegular">
                Cancel
              </Button>
            </Link>

            <Button
              as="button"
              onClick={handleClick}
              variant="signup"
              h="42px"
              fontFamily="suisseIntlRegular"
            >
              {confirmDetail ? 'Place Order' : 'Review Order'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

BuyPage.getLayout = getLayout;

export default BuyPage;
