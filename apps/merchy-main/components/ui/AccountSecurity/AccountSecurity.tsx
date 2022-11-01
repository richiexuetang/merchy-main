import {
  Container,
  chakra,
  Heading,
  Text,
  Box,
  Button,
} from '@chakra-ui/react';

const AccountSecurity = () => {
  return (
    <Container w="100%" marginInline="auto" maxW="6xl" paddingInline="8" py="8">
      <chakra.span maxW="3xl">
        <Heading mb="4" fontWeight="2xl">
          Security
        </Heading>
        <Box maxW="3xl" mb="8">
          <Text fontWeight="bold">Two-Step Verification</Text>
          <Text mb="2">
            Adding two-step verification improves the overall security of your
            StockX account. Two-step verification requires you to enter a code
            on a trusted mobile device in addition to your password at sign-in.
          </Text>
          <Button variant="signup">Turn On</Button>
        </Box>
      </chakra.span>
    </Container>
  );
};

export default AccountSecurity;
