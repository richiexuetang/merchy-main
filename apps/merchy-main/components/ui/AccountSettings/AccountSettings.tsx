import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  VStack,
  Text,
  Switch,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from 'apps/merchy-main/store/store';

const AccountSettings = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Container w="100%" marginInline="auto" maxW="6xl" paddingInline="8" py="8">
      <VStack alignItems="left">
        <Heading
          fontFamily="suisseIntlRegular"
          fontWeight="bold"
          fontSize="2xl"
          lineHeight="2xl"
        >
          Account Settings
        </Heading>
        <Box mt="5" marginInline="0px" mb="0px">
          <Box
            display="flex"
            alignItems="flex-end"
            borderBottomColor="neutral.300"
            borderWidth="0px 0px 1px"
            pb="3"
            mb="5"
          >
            <Heading fontWeight="500" fontSize="lg" w="100%">
              Buying Info
            </Heading>
            <Button variant="login" h="32px">
              Edit
            </Button>
          </Box>

          <Grid
            gridGap="0"
            templateColumns="repeat(3, 1fr)"
            grid-template-columns="repeat(auto-fit, minmax(250px, 1fr))"
            mb={{ base: '0px', sm: '4' }}
          >
            <Box>
              <Text
                fontFamily="suisseIntlMedium"
                fontWeight="500"
                fontSize="lg"
                lineHeight="md"
                mb="0.25rem"
              >
                Payment
              </Text>
              <Text textTransform="capitalize">{user?.user?.name || ''}</Text>
            </Box>

            <Box>
              <Text
                fontFamily="suisseIntlMedium"
                fontWeight="500"
                fontSize="lg"
                lineHeight="md"
                mb="0.25rem"
              >
                Billing
              </Text>
              <Text textTransform="capitalize">Not Set</Text>
            </Box>

            <Box>
              <Text
                fontFamily="suisseIntlMedium"
                fontWeight="500"
                fontSize="lg"
                lineHeight="md"
                mb="0.25rem"
              >
                Selected Currency
              </Text>
              <Text textTransform="capitalize">USD</Text>
            </Box>
          </Grid>
        </Box>

        <Box mt="5" marginInline="0px" mb="0px">
          <Box
            display="flex"
            alignItems="flex-end"
            borderBottomColor="neutral.300"
            borderWidth="0px 0px 1px"
            pb="3"
            mb="5"
          >
            <Heading fontWeight="500" fontSize="lg" w="100%">
              Shipping Info
            </Heading>
            <Button variant="login" h="32px">
              Edit
            </Button>
          </Box>

          <Grid
            gridGap="0"
            templateColumns="repeat(3, 1fr)"
            grid-template-columns="repeat(auto-fit, minmax(250px, 1fr))"
            mb={{ base: '0px', sm: '4' }}
          >
            <Box>
              <Text
                fontFamily="suisseIntlMedium"
                fontWeight="500"
                fontSize="lg"
                lineHeight="md"
                mb="0.25rem"
              >
                Shipping
              </Text>
              <Text textTransform="capitalize">shipping address</Text>
            </Box>
          </Grid>
        </Box>

        <Box mt="5" marginInline="0px" mb="0px">
          <Box
            display="flex"
            alignItems="flex-end"
            borderBottomColor="neutral.300"
            borderWidth="0px 0px 1px"
            pb="3"
            mb="5"
          >
            <Heading fontWeight="500" fontSize="lg" w="100%">
              Seller Info
            </Heading>
            <Button variant="login" h="32px">
              Edit
            </Button>
          </Box>

          <Grid
            gridGap="0"
            templateColumns="repeat(3, 1fr)"
            grid-template-columns="repeat(auto-fit, minmax(250px, 1fr))"
            mb={{ base: '0px', sm: '4' }}
          >
            <Box>
              <Text
                fontFamily="suisseIntlMedium"
                fontWeight="500"
                fontSize="lg"
                lineHeight="md"
                mb="0.25rem"
              >
                Payment
              </Text>
              <Text textTransform="capitalize">payment info</Text>
            </Box>
          </Grid>
        </Box>

        <Box mt="5" marginInline="0px" mb="0px">
          <Box
            display="flex"
            alignItems="flex-end"
            borderBottomColor="neutral.300"
            borderWidth="0px 0px 1px"
            pb="3"
            mb="5"
          >
            <Heading fontWeight="500" fontSize="lg" w="100%">
              Payout Info
            </Heading>
            <Button variant="login" h="32px">
              Edit
            </Button>
          </Box>

          <Grid
            gridGap="0"
            templateColumns="repeat(3, 1fr)"
            grid-template-columns="repeat(auto-fit, minmax(250px, 1fr))"
            mb={{ base: '0px', sm: '4' }}
          >
            <Box>
              <Text
                fontFamily="suisseIntlMedium"
                fontWeight="500"
                fontSize="lg"
                lineHeight="md"
                mb="0.25rem"
              >
                Shipping
              </Text>
              <Text textTransform="capitalize">Payout Not Active</Text>
            </Box>
          </Grid>
        </Box>

        <Box mt="5" marginInline="0px" mb="0px">
          <Heading
            fontWeight="500"
            w="100%"
            fontSize="xl"
            lineHeight="xl"
            borderBottomColor="neutral.300"
            borderWidth="0 0 1px"
            pb="3"
            mb="3"
          >
            Notifications
          </Heading>
          <Box>
            <Heading variant="h4" mt="4">
              MerchY Communication
            </Heading>
            <Box display="flex" flexDir="row" py="1">
              <Box flex="1 1 0%">
                <Box
                  display="flex"
                  flexDir="row"
                  alignItems="baseline"
                  justifyContent="space-between"
                >
                  <Text fontSize="md">Email + Notifications</Text>
                  <Box
                    borderBottom="2px dotted black"
                    flex="1 1 0%"
                    mx="4"
                  ></Box>
                </Box>
                <Text>
                  The latest news, releases, and offers through Email and Push
                  Notifications.
                </Text>
              </Box>
              <Switch id="email-alerts" />
            </Box>
            <Box display="flex" flexDir="row" py="1">
              <Box flex="1 1 0%">
                <Box
                  display="flex"
                  flexDir="row"
                  alignItems="baseline"
                  justifyContent="space-between"
                >
                  <Text fontSize="md">Text Messages</Text>
                  <Box
                    borderBottom="2px dotted black"
                    flex="1 1 0%"
                    mx="4"
                  ></Box>
                </Box>
                <Text>
                  Keep up with the latest news, releases, and offers through SMS
                  Text Messages.
                </Text>
              </Box>
              <Switch id="text-messages" />
            </Box>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default AccountSettings;
