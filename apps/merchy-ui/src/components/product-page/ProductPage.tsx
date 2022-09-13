import { Box, VStack, chakra, Container, Grid } from '@chakra-ui/react';

const ProductPage = () => {
  const h1Styles = {
    marginBottom: 1,
    fontSize: {
      base: '2xl',
      lg: '6xl',
    },
  };

  const paragraphStyles = {
    fontSize: {
      base: 'sm',
      lg: 'lg',
    },
    maxW: '438px',
    overflow: 'hidden',
  };

  const h2Styles = {
    // textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: '16px',
    marginBottom: 2,
    lineHeight: '24px',
    minH: '0vw',
    letterSpacing: '1px',
    color: 'black',
  };

  return (
    <Box as='main' minH='100vh' marginTop='0'>
      <VStack
        bg='#dfe2ef'
        minH='270px'
        maxW='1248px'
        paddingLeft={{ base: 0, lg: 12 }}
        padding='15px'
        alignItems='flex-start'
        justifyContent='center'
        margin='auto'
      >
        <chakra.h1 {...h1Styles}>Sneakers</chakra.h1>
        <chakra.p {...paragraphStyles}>
          On MerchY, every sneaker you want is always available and authentic.
          Buy and sell new sneakers & shoes from Air Jordan, adidas, Nike, Yeezy
          and more!{' '}
        </chakra.p>
      </VStack>

      <Container
        w='full'
        marginInline='auto'
        maxW='1170px'
        paddingInline='1rem'
      >
        <Grid templateColumns='repeat(5, 1fr)' gap={6} marginTop={10}>
          {/* Left Nav Menu */}
          <Container
            grid-gridColumn='span 1 / span 1'
            display='block'
            paddingLeft={4}
          >
            <Box>
              {/* Left Top Nav Menu */}
              <Box marginBottom={8}>
                <Box marginBottom='7px' role='button'>
                  <chakra.h2 {...h2Styles}> SNEAKERS </chakra.h2>
                </Box>

                <Box marginBottom='7px' role='button'>
                  <chakra.h2 {...h2Styles}> APPAREL </chakra.h2>
                </Box>

                <Box marginBottom='7px' role='button'>
                  <chakra.h2 {...h2Styles}> ELECTRONICS </chakra.h2>
                </Box>
              </Box>
              {/* End of Left Top Nav Menu */}

              {/* Below Retail Section  */}
              <Box marginBottom={8}>
                <Box marginBottom='7px' role='button'>
                  <chakra.h2 {...h2Styles}> BELOW RETAIL </chakra.h2>
                </Box>
              </Box>
              {/* End of Below Retail */}
            </Box>
          </Container>
          {/* End of Left Nav Menu */}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductPage;
