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
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Box
      data-component='page-container'
      bg='#fafafa'
      w='full'
      paddingTop='90px'
      minH='100vh'
      overflowY='hidden'
    >
      <Box data-compnent='login-body' w='full' paddingBottom='0px'>
        <Container
          padding='0'
          bg='white'
          maxW='400px'
          border='solid 1px #e0e0e0'
          borderRadius='4.5px'
          h='735px'
        >
          <HStack
            data-component='toggle-buttons'
            flexWrap='wrap'
            h='50px'
            margin='6px 16px 0px 16px'
          >
            <Button
              borderBottom='2px solid #010101'
              variant='accessToggle'
              flex='1'
            >
              Sign Up
            </Button>
            <Button
              variant='accessToggle'
              flex='1'
              onClick={() => navigate('/login')}
            >
              Log In
            </Button>
          </HStack>

          <Box data-component='tab-container' padding='16px'>
            <VStack>
              <Button leftIcon={<Google />} variant='continue'>
                Continue With Google
              </Button>
              <Button leftIcon={<Facebook />} variant='continue'>
                Continue With Facebook
              </Button>
              <Button leftIcon={<Apple />} variant='continue'>
                Continue With Apple
              </Button>
              <Button leftIcon={<Twitter />} variant='continue'>
                Continue With Twitter
              </Button>

              <Stack
                direction='row'
                w='full'
                alignItems='center'
                marginTop='8px'
              >
                <Divider
                  orientation='horizontal'
                  opacity='1'
                  w='100%'
                  borderWidth='0px 0px 1px'
                />
                <Text variant='authentication'>OR</Text>
                <Divider
                  orientation='horizontal'
                  opacity='1'
                  w='100%'
                  borderWidth='0px 0px 1px'
                />
              </Stack>

              <Stack w='full'>
                {/* First Name Form Field */}
                <FormControl variant='floating'>
                  <Input placeholder=' ' autoComplete='off' />
                  <FormLabel>First Name</FormLabel>
                </FormControl>

                {/* Last Name Form Field */}
                <FormControl variant='floating'>
                  <Input placeholder=' ' autoComplete='off' />
                  <FormLabel>Last Name</FormLabel>
                </FormControl>

                {/* Email Address Form Field */}
                <FormControl variant='floating'>
                  <Input placeholder=' ' autoComplete='off' />
                  <FormLabel>Email Address</FormLabel>
                </FormControl>

                {/* Password Form Field */}
                <FormControl variant='floating'>
                  <InputGroup>
                    <Input
                      type={passwordVisible ? 'text' : 'password'}
                      placeholder=' '
                      autoComplete='off'
                      pr={8}
                    />
                    <InputRightElement>
                      <IconButton
                        mt='12px'
                        mr='5px'
                        bg='none'
                        _hover={{
                          bg: 'none',
                        }}
                        _active={{
                          bg: 'none',
                        }}
                        onClick={handleVisibility}
                        aria-label='show password icon'
                        icon={
                          passwordVisible ? <Visibility /> : <VisibilityOff />
                        }
                      />
                    </InputRightElement>
                    <FormLabel>Password</FormLabel>
                  </InputGroup>
                </FormControl>

                <Flex justifyContent='flex-start'>
                  <Text variant='authentication' fontSize='12px'>
                    At least 8 characters, 1 uppercase letter, 1 number & 1
                    symbol
                  </Text>
                </Flex>
              </Stack>

              <Checkbox>
                <Text
                  variant='authentication'
                  fontSize='12px'
                  marginBottom='12px'
                >
                  By signing up, you agree to the Terms of Service and Privacy
                  Policy
                </Text>
              </Checkbox>

              <Button variant='authentication'>Sign Up</Button>
            </VStack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SignUp;
