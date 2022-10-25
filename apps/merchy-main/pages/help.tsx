import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
  InputRightElement,
  Container,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { getLayout } from '../components';
import { logoutSuccess } from '../store/auth/auth.slice';
import { RootState } from '../store/store';

const Help = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
      });

      dispatch(logoutSuccess());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Box
        data-component="welcome"
        display="flex"
        color="white"
        bg="neutral.black"
        justifyContent="center"
        p={{ base: '0', md: '0', lg: '36px 16px' }}
        mt={{ base: '59px', md: '0px' }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          maxW="6xl"
          w="6xl"
          alignItems={{ base: 'unset', sm: 'unset', md: 'unset', lg: 'center' }}
          flexDir={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
        >
          <Stack
            direction={['row', 'column']}
            flex="1"
            p={{ base: '4', lg: '8' }}
            mr={{ base: '0px', lg: '8' }}
          >
            <Text>Welcome to the MerchY Help Center</Text>
            <Heading>How can we help you?</Heading>
            <Box
              bg="white"
              color="black"
              display="inline-block"
              flex="1"
              borderRadius="3px"
            >
              <InputGroup>
                <Input
                  placeholder="Ask a Question"
                  borderRadius="3px"
                  border="1px solid #a1a5a4"
                  h="3rem"
                  paddingInlineEnd="3rem"
                  fontSize="lg"
                  _focus={{
                    zIndex: '1',
                    borderColor: 'neutral.black',
                    boxShadow: '0px 0px 0px 3px rgb(0 0 0 / 10%)',
                  }}
                  _hover={{
                    borderColor: 'neutral.500',
                  }}
                />
                <InputRightElement
                  w="3rem"
                  h="3rem"
                  fontSize="lg"
                  cursor="pointer"
                >
                  <SearchIcon />
                </InputRightElement>
              </InputGroup>
            </Box>
          </Stack>
          <Box w="492px" h="238px"></Box>
        </Box>
      </Box>

      <Container
        marginInline="auto"
        maxW="6xl"
        paddingInline="1rem"
        padding="36px 16px"
      >
        {user ? (
          <VStack alignItems="left">
            <Heading fontWeight="600" fontSize="lg" lineHeight="lg">
              Hi {user.user.first_name}, what can we help you with today?
            </Heading>

            <HStack spacing="20px" mt="0.5rem" mb="0px" marginInline="0px">
              <Button variant="signup" h="42px" onClick={handleLogout}>
                Logout
              </Button>
            </HStack>
          </VStack>
        ) : (
          <VStack alignItems="left">
            <Heading fontWeight="600" fontSize="lg" lineHeight="lg">
              Log in for personalized support
            </Heading>
            <Text fontSize="md">
              Get Help with your account, orders and more
            </Text>
            <HStack
              spacing="20px"
              mt="0.5rem"
              mb="0px"
              marginInline="0px"
              pt="6"
            >
              <Link href="/auth/[slug]" as="/auth/signup">
                <Button variant="signup" h="42px">
                  Sign Up
                </Button>
              </Link>
              <Link href="/auth/[slug]" as="/auth/login">
                <Button variant="login" h="42px">
                  Login
                </Button>
              </Link>
            </HStack>
          </VStack>
        )}
      </Container>
    </Box>
  );
};

Help.getLayout = getLayout;
export default Help;
