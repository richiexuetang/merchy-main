import {
  Container,
  Box,
  Heading,
  Text,
  chakra,
  Button,
  IconButton,
  Image as ChakraImage,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { getLayout } from '../Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ConfirmDetails from './ConfirmDetails';
import { EditIcon } from '@chakra-ui/icons';
import { DownArrow } from '../../icons';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import CheckoutForm from './CheckoutForm';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';

const stripePromise = loadStripe(
  'pk_test_51Lu1PuAIJ6BjPTIllNjG34KPYbUxifP3iL5fR4mxM8i7g6c7M4PbuGxYiw7omM62dS4pR3hMB3cILvGgCtmkk5AK00SAYbIWT0'
);

interface ShippingFormField {
  title: string;
  name: string;
  placeHolder: string;
  isRequired: boolean;
  type: string;
  errorMessage: string;
}

const shippingFormFields: ShippingFormField[] = [
  {
    title: 'First Name',
    name: 'firstName',
    placeHolder: 'John',
    isRequired: true,
    type: 'text',
    errorMessage: 'First Name is a required field',
  },
  {
    title: 'Last Name',
    name: 'lastName',
    placeHolder: 'Doe',
    isRequired: true,
    type: 'text',
    errorMessage: 'Last Name is a required field',
  },
  {
    title: 'Country',
    name: 'country',
    placeHolder: 'United States',
    isRequired: true,
    type: 'text',
    errorMessage: 'Country is a required field',
  },
  {
    title: 'Address',
    name: 'address',
    placeHolder: 'Street address',
    isRequired: true,
    type: 'text',
    errorMessage: 'Address 1 is a required field',
  },
  {
    title: 'Address 2',
    name: 'address2',
    placeHolder: 'Apartment, suite, unit, building, floor, etc.',
    isRequired: false,
    type: 'text',
    errorMessage: '',
  },
  {
    title: 'City',
    name: 'city',
    placeHolder: '',
    isRequired: true,
    type: 'text',
    errorMessage: 'City is a required field',
  },
  {
    title: 'State/Region',
    name: 'state',
    placeHolder: 'Alabama',
    isRequired: true,
    type: 'text',
    errorMessage: 'State/Region is a required field',
  },
  {
    title: 'Postal Code',
    name: 'postalCode',
    placeHolder: '',
    isRequired: true,
    type: 'text',
    errorMessage: 'Postal Code is a required field',
  },
  {
    title: 'Phone Number',
    name: 'phone',
    placeHolder: '',
    isRequired: true,
    type: 'text',
    errorMessage: 'Phone is a required field',
  },
];

interface shippingFormValues {
  firstName: string;
  lastName: string;
  country: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
}

const initialValues: shippingFormValues = {
  firstName: '',
  lastName: '',
  country: '',
  address: '',
  address2: '',
  city: '',
  state: '',
  postalCode: '',
  phone: '',
};

const phoneRegExp = /^([+]\d{2})?\d{10}$/;

const ShippingSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is a required field'),
  lastName: Yup.string().required('Last Name is a required field'),
  country: Yup.string().required('Country is a required field'),
  address: Yup.string().required('Address is a required field'),
  address2: Yup.string(),
  city: Yup.string().required('City is a required field'),
  state: Yup.string().required('State is a required field'),
  postalCode: Yup.string().required('Postal Code is a required field'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is a required field'),
});

const BuyPage = ({ buyProductInfo }) => {
  const userAuth = useSelector((state: RootState) => state.auth.token);

  const [clientSecret, setClientSecret] = useState('');

  const [pageState, setPageState] = useState('landing');
  const [confirmDetail, setConfirmDetail] = useState(false);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (clientSecret === '') {
      axios
        .post('http://127.0.0.1:8000/payment/create-payment-intent/', {})
        .then((res) => res.data)
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [clientSecret]);

  useEffect(() => {
    if (!userAuth) {
      router.push('/auth/login');
    }
  }, [userAuth, router]);

  const handleClick = () => {
    if (!confirmDetail) {
      setConfirmDetail(!confirmDetail);
    } else {
      router.push('/');
    }
  };

  const options = {
    clientSecret,
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
          {(() => {
            switch (pageState) {
              case 'landing':
                return (
                  <>
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
                      <Heading pl="6">
                        ${buyProductInfo.market.lowestAsk}
                      </Heading>
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

                    <Container
                      data-component="multi-settings"
                      w="100%"
                      marginInline="auto"
                      paddingInline={{ base: '3', sm: '7', md: '0px' }}
                      maxW="initial"
                      mt="7"
                      mb={{ base: '12', md: '0px' }}
                    >
                      <Box
                        data-component="setting-details-wrapper"
                        display="flex"
                        py="3"
                        marginInline="0px"
                        fontSize={{ base: 'md', sm: 'lg' }}
                        justifyContent="space-between"
                        alignItems="center"
                        borderTop="2px dotted #CFCFCF"
                      >
                        <Box
                          data-component="settings-details"
                          display="flex"
                          mr="3"
                          justifyContent="center"
                          alignItems="center"
                          whiteSpace="nowrap"
                        >
                          Please add a payment method
                        </Box>
                        <IconButton
                          aria-label="pencil"
                          bg="transparent"
                          _hover={{
                            bg: 'transparent',
                          }}
                          onClick={() => setPageState('billing')}
                          icon={<EditIcon />}
                        />
                      </Box>

                      <Box
                        data-component="setting-details-wrapper"
                        display="flex"
                        py="3"
                        marginInline="0px"
                        fontSize={{ base: 'md', sm: 'lg' }}
                        justifyContent="space-between"
                        alignItems="center"
                        borderTop="2px dotted #CFCFCF"
                      >
                        <Box
                          data-component="settings-details"
                          display="flex"
                          mr="3"
                          justifyContent="center"
                          alignItems="center"
                          whiteSpace="nowrap"
                        >
                          No Shipping Info Provided
                        </Box>
                        <IconButton
                          aria-label="pencil"
                          bg="transparent"
                          _hover={{
                            bg: 'transparent',
                          }}
                          onClick={() => setPageState('shipping')}
                          icon={<EditIcon />}
                        />
                      </Box>

                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        w="100%"
                        pt="3"
                      >
                        <Link href="/product/[slug]" as={`/product/${slug}`}>
                          <Button
                            variant="login"
                            h="42px"
                            fontFamily="suisseIntlRegular"
                          >
                            Cancel
                          </Button>
                        </Link>

                        <Button
                          as="button"
                          onClick={() => setPageState('confirm')}
                          variant="signup"
                          h="42px"
                          fontFamily="suisseIntlRegular"
                        >
                          Review Order
                        </Button>
                      </Box>
                    </Container>
                  </>
                );
              case 'billing':
                return (
                  <Box data-component="payment-selection-wrapper" py="8">
                    <Heading fontSize={{ base: '3xl', md: '5xl' }}>
                      Billing
                    </Heading>
                    <Heading
                      fontSize={{ base: 'lg', md: 'xl' }}
                      fontWeight="400"
                      lineHeight="xl"
                      minH="0vw"
                      mb="10"
                    >
                      Please choose your billing method
                    </Heading>
                    <Box data-component="payment-options">
                      <Button
                        w="100%"
                        fontFamily="suisseIntlRegular"
                        padding="12px 18px"
                        m="10px 0px"
                        lineHeight="1.375"
                        borderRadius="0px"
                        border="1px solid rgb(224,224,224)"
                        bg="white"
                        fontStyle="normal"
                        minW="auto"
                        h="unset"
                        display="unset"
                        fontWeight="500"
                        onClick={() => {
                          setPageState('editBilling');
                        }}
                        _hover={{
                          bg: 'gray.200',
                        }}
                      >
                        <Box display="flex" alignItems="center">
                          <Box display="flex" justifyContent="center">
                            <ChakraImage
                              src="https://stockx-assets.imgix.net/png/payment-methods/visa.png?auto=compress,format"
                              alt="Visa"
                              h={{ base: '24px', sm: '35px' }}
                              m="5px"
                            />
                            <ChakraImage
                              src="https://stockx-assets.imgix.net/png/payment-methods/badge-mastercard.png?auto=compress,format"
                              alt="MasterCard"
                              h={{ base: '24px', sm: '35px' }}
                              m="5px"
                            />
                            <ChakraImage
                              src="https://stockx-assets.imgix.net/png/payment-methods/discover.png?auto=compress,format"
                              alt="Discover"
                              h={{ base: '24px', sm: '35px' }}
                              m="5px"
                            />
                            <ChakraImage
                              src="https://stockx-assets.imgix.net/png/payment-methods/american-express.png?auto=compress,format"
                              alt="AmericanExpress"
                              h={{ base: '24px', sm: '35px' }}
                              m="5px"
                            />
                          </Box>
                          <Box ml="3">Credit Card</Box>
                          <Box
                            flex="1 1 0%"
                            w="100%"
                            display="flex"
                            justifyContent="flex-end"
                            alignItems="center"
                          >
                            <DownArrow />
                          </Box>
                        </Box>
                      </Button>
                    </Box>

                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      w="100%"
                      pt="3"
                    >
                      <Button
                        variant="login"
                        h="42px"
                        fontFamily="suisseIntlRegular"
                        onClick={() => {
                          setPageState('landing');
                        }}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </Box>
                );
              case 'confirm':
                return (
                  <>
                    <ConfirmDetails
                      purchasePrice={buyProductInfo.market.lowestAsk}
                    />
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      w="100%"
                      pt="3"
                    >
                      <Button
                        variant="login"
                        h="42px"
                        fontFamily="suisseIntlRegular"
                        onClick={() => setPageState('landing')}
                      >
                        Cancel
                      </Button>

                      <Button
                        as="button"
                        onClick={handleClick}
                        variant="signup"
                        h="42px"
                        fontFamily="suisseIntlRegular"
                      >
                        Place Order
                      </Button>
                    </Box>
                  </>
                );
              case 'editBilling':
                return (
                  <Box data-component="payment-selection-wrapper" py="8">
                    <Heading fontSize={{ base: '3xl', md: '5xl' }}>
                      Billing
                    </Heading>
                    <Heading
                      fontSize={{ base: 'lg', md: 'xl' }}
                      fontWeight="400"
                      lineHeight="xl"
                      minH="0vw"
                      mb="10"
                    >
                      Please enter your credit card information
                    </Heading>

                    <Box
                      bg="white"
                      borderRadius="4px"
                      p="20px"
                      display="flex"
                      alignItems="center"
                    >
                      <Box borderRadius="4px" p="10px 20px" bg="#A1A5A4">
                        <ChakraImage
                          src="https://stockx-assets.imgix.net/svg/icons/credit_card_white.svg?auto=compress,format"
                          h="5"
                          maxW="100%"
                        />
                      </Box>

                      <Text
                        fontFamily="suisseIntlRegular"
                        lineHeight="lg"
                        letterSpacing="0.004rem"
                        fontSize="lg"
                        flexGrow="1"
                        p="0px 8px"
                      >
                        Use Credit Card for Billing
                      </Text>
                      <Heading
                        fontFamily="suisseIntlRegular"
                        fontWeight="500"
                        fontSize="xl"
                        lineHeight="xl"
                        minH="0vw"
                        cursor="pointer"
                        onClick={() => {
                          setPageState('billing');
                        }}
                      >
                        X
                      </Heading>
                    </Box>

                    <Box
                      data-component="credit-card-form"
                      mt="10"
                      fontWeight="600"
                    >
                      <Heading
                        fontFamily="suisseIntlRegular"
                        fontWeight="600"
                        fontSize="xl"
                        lineHeight="xl"
                        minH="0vw"
                        mb="5"
                      >
                        Credit Card
                      </Heading>
                      {clientSecret && (
                        <Elements options={options} stripe={stripePromise}>
                          <CheckoutForm
                            setPageState={setPageState}
                            clientSecret={clientSecret}
                          />
                        </Elements>
                      )}
                    </Box>
                  </Box>
                );
              case 'shipping':
                return (
                  <Box data-component="shipping-payment-form" py="8">
                    <Heading fontSize={{ base: '3xl', md: '5xl' }}>
                      Shipping
                    </Heading>
                    <Heading
                      fontSize={{ base: 'lg', md: 'xl' }}
                      fontWeight="400"
                      lineHeight="xl"
                      minH="0vw"
                      mb="10"
                    >
                      Please provide your shipping info
                    </Heading>
                    <Box data-component="shipping-options">
                      <Heading
                        fontFamily="suisseIntlRegular"
                        fontWeight="600"
                        fontSize="xl"
                        lineHeight="xl"
                        minH="0vw"
                        my="5"
                      >
                        Shipping Info
                      </Heading>

                      <Formik
                        initialValues={initialValues}
                        validationSchema={ShippingSchema}
                        onSubmit={() => {
                          setPageState('landing');
                        }}
                      >
                        {({ handleSubmit, errors, touched }) => (
                          <form onSubmit={handleSubmit}>
                            <VStack>
                              {shippingFormFields.map(
                                ({
                                  title,
                                  name,
                                  placeHolder,
                                  isRequired,
                                  type,
                                }) => {
                                  const message = errors[name];
                                  const touch = touched[name];
                                  return (
                                    <FormControl
                                      key={name}
                                      isRequired={isRequired}
                                    >
                                      <FormLabel
                                        mb="1"
                                        fontFamily="suisseIntlRegular"
                                      >
                                        {title}
                                      </FormLabel>
                                      <Field
                                        as={Input}
                                        name={name}
                                        type={type}
                                        placeholder={placeHolder}
                                        h="12"
                                        borderRadius="0px"
                                        bg="white"
                                        borderColor="neutral.300"
                                        _hover={{
                                          bg: 'white',
                                          borderColor: 'neutral.600',
                                        }}
                                        _focus={{
                                          bg: 'white',
                                          borderColor: 'neutral.600',
                                          boxShadow: 'none',
                                        }}
                                      />
                                      {message && touch ? (
                                        <Box
                                          display="flex"
                                          alignItems="center"
                                          color="red.500"
                                          mt="2"
                                          fontSize="sm"
                                        >{`${errors[name]}`}</Box>
                                      ) : null}
                                    </FormControl>
                                  );
                                }
                              )}
                              <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                w="100%"
                                pt="3"
                              >
                                <Button
                                  variant="login"
                                  h="42px"
                                  fontFamily="suisseIntlRegular"
                                  onClick={() => {
                                    setPageState('landing');
                                  }}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  type="submit"
                                  variant="signup"
                                  h="42px"
                                  fontFamily="suisseIntlRegular"
                                  // onClick={() => {
                                  //   setPageState('landing');
                                  // }}
                                >
                                  Save Shipping
                                </Button>
                              </Box>
                            </VStack>
                          </form>
                        )}
                      </Formik>
                    </Box>
                  </Box>
                );
              default:
                <></>;
            }
          })()}
        </Box>
      </Box>
    </Container>
  );
};

BuyPage.getLayout = getLayout;

export default BuyPage;
