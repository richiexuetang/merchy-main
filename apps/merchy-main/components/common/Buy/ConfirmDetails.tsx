import { Box, Heading } from '@chakra-ui/react';

const ConfirmDetails = ({ purchasePrice }) => {
  const tax = purchasePrice * 0.0775;
  const total = tax + purchasePrice;

  return (
    <Box data-component="confirm-details-wrapper" pt={{ base: '5', md: '7' }}>
      <Heading fontSize={{ base: '3xl', sm: '3xl', md: '5xl' }}>
        Review Order
      </Heading>
      <Heading
        fontSize={{ base: 'lg', sm: 'lg', md: 'xl' }}
        mb={{ base: '5', md: '7' }}
      >
        Please confirm your purchase details below
      </Heading>

      <Box
        data-component="multi-order-summary"
        borderRadius="base"
        bg="neutral.white"
        mt="7"
        paddingInline={{ base: '3', md: '7' }}
        pb={{ base: '0', md: '4' }}
      >
        <Box>
          <Box
            data-component="item-row"
            display="flex"
            justifyContent="space-between"
            w="100%"
            alignItems="center"
            py="4"
          >
            <Box w="auto">Your Purchase Price</Box>
            <Box>${purchasePrice}</Box>
          </Box>

          <Box
            data-component="item-row"
            display="flex"
            justifyContent="space-between"
            w="100%"
            alignItems="center"
            py="4"
            borderTop="2px dotted #CFCFCF"
          >
            <Box w="auto">Sales Tax</Box>
            <Box>${tax}</Box>
          </Box>

          <Box
            data-component="item-row"
            display="flex"
            justifyContent="space-between"
            w="100%"
            alignItems="center"
            py="4"
            borderTop="2px dotted #CFCFCF"
          >
            <Box w="auto">Total</Box>
            <Box>${total}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ConfirmDetails;
