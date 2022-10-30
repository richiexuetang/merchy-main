import {
  Container,
  VStack,
  Button,
  Box,
  HStack,
  Divider,
  Text,
  Input,
  Flex,
  Stack,
  FormControl,
  FormLabel,
  InputRightElement,
  InputGroup,
  IconButton,
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import {
  Twitter,
  Facebook,
  Apple,
  Google,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getLayout } from '../../components';
import { useDispatch } from 'react-redux';
import { loadUserSuccess, loginSuccess } from '../../store/auth/auth.slice';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const LogIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}api/account/google-auth`,
        {
          access_token: `${tokenResponse.access_token}`,
        }
      );

      dispatch(loginSuccess());
      dispatch(loadUserSuccess(data.user));
      router.push('/');
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  const handleLogIn = async () => {
    const body = JSON.stringify({
      email: inputEmail,
      password: inputPassword,
    });

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (res.status === 200) {
        dispatch(loginSuccess());
        const res = await fetch('/api/auth/user', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });

        const data = await res.json();
        dispatch(loadUserSuccess(data.user));
        router.push('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      data-component="page-container"
      bg="#fafafa"
      w="full"
      paddingTop="90px"
      minH="100vh"
      overflowY="hidden"
    >
      <Box data-compnent="login-body" w="full" paddingBottom="0px">
        <Container
          padding="0"
          bg="white"
          maxW="400px"
          border="solid 1px #e0e0e0"
          borderRadius="4.5px"
          h="605px"
        >
          <HStack
            data-component="toggle-buttons"
            flexWrap="wrap"
            h="50px"
            margin="6px 16px 0px 16px"
          >
            <Link
              as={router.pathname.includes('auth') ? `signup` : `auth/signup`}
              href={router.pathname.includes('auth') ? '[slug]' : 'auth/[slug]'}
            >
              <Button variant="accessToggle" flex="1">
                Sign Up
              </Button>
            </Link>
            <Button
              borderBottom="2px solid #010101"
              variant="accessToggle"
              flex="1"
            >
              Log In
            </Button>
          </HStack>

          <Box data-component="tab-container" padding="16px">
            <VStack>
              <Button
                leftIcon={<Google />}
                variant="continue"
                onClick={() => handleGoogleLogin()}
              >
                Continue With Google
              </Button>
              <Button leftIcon={<Facebook />} variant="continue">
                Continue With Facebook
              </Button>
              <Button leftIcon={<Apple />} variant="continue">
                Continue With Apple
              </Button>
              <Button leftIcon={<Twitter />} variant="continue">
                Continue With Twitter
              </Button>
              <Stack
                direction="row"
                w="full"
                alignItems="center"
                marginTop="8px"
              >
                <Divider
                  orientation="horizontal"
                  opacity="1"
                  w="100%"
                  borderWidth="0px 0px 1px"
                />
                <Text variant="authentication">OR</Text>
                <Divider
                  orientation="horizontal"
                  opacity="1"
                  w="100%"
                  borderWidth="0px 0px 1px"
                />
              </Stack>
              <Stack w="full">
                {/* Email Address Form Field */}
                <FormControl variant="floating">
                  <Input
                    placeholder=" "
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                  />
                  <FormLabel>Email Address</FormLabel>
                </FormControl>

                {/* Password Form Field */}
                <FormControl variant="floating">
                  <InputGroup>
                    <Input
                      type={passwordVisible ? 'text' : 'password'}
                      placeholder=" "
                      pr={8}
                      value={inputPassword}
                      onChange={(e) => setInputPassword(e.target.value)}
                    />
                    <InputRightElement>
                      <IconButton
                        mt="12px"
                        mr="5px"
                        bg="none"
                        _hover={{
                          bg: 'none',
                        }}
                        _active={{
                          bg: 'none',
                        }}
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        aria-label="show password icon"
                        icon={
                          passwordVisible ? <Visibility /> : <VisibilityOff />
                        }
                      />
                    </InputRightElement>
                    <FormLabel>Password</FormLabel>
                  </InputGroup>
                </FormControl>

                <Flex justifyContent="flex-end">
                  <Text
                    variant="authentication"
                    fontSize="12px"
                    marginBottom="24px"
                  >
                    <ChakraLink as={Link} href="/">
                      Forgot Password?
                    </ChakraLink>
                  </Text>
                </Flex>
              </Stack>
              <VStack w="full">
                <Button variant="authentication" onClick={handleLogIn}>
                  Log In
                </Button>
                <Flex margin="8px 0 12px 0">
                  <Text
                    variant="authentication"
                    fontSize="12px"
                    marginBottom="24px"
                  >
                    By logging in, you agree to the Terms of Service and Privacy
                    Policy
                  </Text>
                </Flex>
              </VStack>
            </VStack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

LogIn.getLayout = getLayout;

export default LogIn;
