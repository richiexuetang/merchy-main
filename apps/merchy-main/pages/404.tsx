import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { getLayout } from '../components';

const FourOhFour = () => {
  return (
    <Container
      w="100%"
      marginInline="auto"
      maxW="100%"
      paddingInline="1rem"
      position="relative"
      minH="100vh"
    >
      <Box display="flex" justifyContent="center" overflow="hidden">
        <Box p={{ base: '8', md: '4' }} mt="8em">
          <Box>
            <Heading
              fontSize={{ base: '2xl', md: '3xl' }}
              lineHeight="xl"
              fontFamily="suisseIntlRegular"
            >
              Oops! We can&apos;t find the page you are looking for.
            </Heading>
          </Box>
          <Box>
            <Text textAlign="center" my="6">
              Here are some helpful links instead:
            </Text>
          </Box>
          <Box>
            <Box textAlign="center">
              <Link href="/">
                <Button
                  as="span"
                  cursor="pointer"
                  borderRadius="0"
                  borderColor="neutral.black"
                  m="1"
                  flex="1 0 0px"
                  bg="transparent"
                  minW="auto"
                >
                  <Text
                    color="green.700"
                    fontSize="md"
                    fontWeight="600"
                    letterSpacing="0.004rem"
                    lineHeight="5"
                  >
                    Home Page
                  </Text>
                  <IconButton
                    aria-label="go home page"
                    icon={<ArrowForwardIcon w="1em" h="1em" />}
                    bg="transparent"
                    color="green.700"
                    minW="0"
                    _hover={{
                      bg: 'transparent',
                    }}
                  />
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          pos="absolute"
          h="60px"
          bg="pink.300"
          backgroundImage="url('https://stockx-assets.imgix.net/404/404-v2-PinkTape.jpg?h=60&auto=compress,format')"
          backgroundPosition="center"
          w="3000px"
          transform={{ base: 'rotate(-4.49deg)', md: 'rotate(-3.94deg)' }}
          top={{ base: '68%', md: '60%' }}
        ></Box>
      </Box>
    </Container>
  );
};

FourOhFour.getLayout = getLayout;

export default FourOhFour;
