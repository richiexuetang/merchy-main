import {
  Container,
  Divider,
  Text,
  Stack,
  Link as ChakraLink,
  VStack,
  Box,
} from '@chakra-ui/react';
import Link from 'next/link';
import { CheckCircleIcon } from '@chakra-ui/icons';

const SuggestionSuccess = ({ onClick }) => {
  return (
    <Container
      padding="0"
      bg="white"
      border="solid 1px #e0e0e0"
      borderRadius="4.5px"
      textAlign="center"
      minW="600px"
      paddingInline="1rem"
      py="45px"
    >
      <CheckCircleIcon h="3rem" w="3rem" mb="4" />
      <VStack spacing={4} align="stretch" alignItems="middle">
        <Text fontWeight="bold">
          Thanks for submitting your suggestion and helping us grow our
          marketplace!
        </Text>
        <Text>
          We&apos;re working hard to get as many products on MerchY as possible,
          as well as improve the information on our current ones.
        </Text>
        <Text>
          Potential additions to our marketplace are evaluated using criteria
          such as market demand and our ability to authenticate.
        </Text>
        <Text>
          Your feedback is important to us and will be considered in the future
          of our marketplace.
        </Text>
      </VStack>

      <Box mt="10">
        <Link href="/">
          <ChakraLink variant="redirect">
            Click here to return to Home page.
          </ChakraLink>
        </Link>

        <Stack direction="row" w="full" alignItems="center" my="15px">
          <Divider orientation="horizontal" opacity="0" w="50%" />
          <Text variant="authentication">OR</Text>
          <Divider orientation="horizontal" opacity="0" w="50%" />
        </Stack>
        <ChakraLink variant="redirect" onClick={onClick}>
          Click here to submit another response.
        </ChakraLink>
      </Box>
    </Container>
  );
};

export default SuggestionSuccess;
