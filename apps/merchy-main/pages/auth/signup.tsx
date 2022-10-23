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
  Checkbox,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import {
  Twitter,
  Facebook,
  Apple,
  Google,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { getLayout } from '../../components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import { setToken } from '../../store/auth/auth.slice';
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleSignUp = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    axios
      .post(baseUrl + 'api/account/register', {
        email: inputEmail,
        password: inputPassword,
        re_password: inputPassword,
      })
      .then((res) => {
        const token = res.data.key;
        dispatch(setToken(token));
        router.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
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
          h="735px"
        >
          <HStack
            data-component="toggle-buttons"
            flexWrap="wrap"
            h="50px"
            margin="6px 16px 0px 16px"
          >
            <Button
              borderBottom="2px solid #010101"
              variant="accessToggle"
              flex="1"
            >
              Sign Up
            </Button>
            <Link
              as={router.pathname.includes('auth') ? `login` : `auth/login`}
              href={router.pathname.includes('auth') ? '[slug]' : 'auth/[slug]'}
            >
              <Button variant="accessToggle" flex="1">
                Log In
              </Button>
            </Link>
          </HStack>

          <Box data-component="tab-container" padding="16px">
            <VStack>
              <Button leftIcon={<Google />} variant="continue">
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
                {/* First Name Form Field */}
                <FormControl variant="floating">
                  <Input placeholder=" " autoComplete="off" />
                  <FormLabel>First Name</FormLabel>
                </FormControl>

                {/* Last Name Form Field */}
                <FormControl variant="floating">
                  <Input placeholder=" " autoComplete="off" />
                  <FormLabel>Last Name</FormLabel>
                </FormControl>

                {/* Email Address Form Field */}
                <FormControl variant="floating">
                  <Input
                    placeholder=" "
                    autoComplete="off"
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
                      autoComplete="off"
                      pr={8}
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

                <Flex justifyContent="flex-start">
                  <Text variant="authentication" fontSize="12px">
                    At least 8 characters, 1 uppercase letter, 1 number & 1
                    symbol
                  </Text>
                </Flex>
              </Stack>

              <Checkbox>
                <Text
                  variant="authentication"
                  fontSize="12px"
                  marginBottom="12px"
                >
                  By signing up, you agree to the Terms of Service and Privacy
                  Policy
                </Text>
              </Checkbox>

              <Button variant="authentication" onClick={handleSignUp}>
                Sign Up
              </Button>
            </VStack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

SignUp.getLayout = getLayout;

export default SignUp;
