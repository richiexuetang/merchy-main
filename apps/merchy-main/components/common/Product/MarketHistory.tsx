import {
  Box,
  chakra,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

const MarketHistory = () => {
  return (
    <chakra.section data-component="MarketHistory" mt="6">
      <Divider orientation="horizontal" borderWidth="0 0 1px" />
      <Box minH="auto">
        <chakra.h3 fontWeight="bold" lineHeight="md" mb="2" py="3">
          12-Month Historical
        </chakra.h3>
        <Box pos="relative">
          <Box data-component="Grid" marginInline="auto">
            <Box
              display="grid"
              gridGap="4"
              gridTemplateColumns="repeat(3, minmax(0px, 1fr));"
            >
              <Stat bg="beige.100" paddingInline="6" py="4">
                <StatNumber
                  textAlign="left"
                  margin="0"
                  fontFamily="suisseIntlMedium"
                  fontSize={{ base: 'lg', sm: 'xl' }}
                >
                  $-- - $--
                </StatNumber>
                <StatLabel textAlign="left" margin="0">
                  12-Month-Trade-Range
                </StatLabel>
              </Stat>
              <Stat bg="beige.100" paddingInline="6" py="4">
                <StatNumber
                  textAlign="left"
                  margin="0"
                  fontFamily="suisseIntlMedium"
                  fontSize={{ base: 'lg', sm: 'xl' }}
                >
                  $-- - $--
                </StatNumber>
                <StatLabel textAlign="left" margin="0">
                  All-Time Trade Range
                </StatLabel>
              </Stat>

              <Stat bg="beige.100" paddingInline="6" py="4">
                <StatNumber
                  textAlign="left"
                  margin="0"
                  fontFamily="suisseIntlMedium"
                  fontSize={{ base: 'lg', sm: 'xl' }}
                >
                  --
                </StatNumber>
                <StatLabel textAlign="left" margin="0">
                  Volatility
                </StatLabel>
              </Stat>

              <Stat bg="beige.100" paddingInline="6" py="4">
                <StatNumber
                  textAlign="left"
                  margin="0"
                  fontFamily="suisseIntlMedium"
                  fontSize={{ base: 'lg', sm: 'xl' }}
                >
                  0
                </StatNumber>
                <StatLabel textAlign="left" margin="0">
                  Number of Sales
                </StatLabel>
              </Stat>
              <Stat bg="beige.100" paddingInline="6" py="4">
                <StatNumber
                  textAlign="left"
                  margin="0"
                  fontFamily="suisseIntlMedium"
                  fontSize={{ base: 'lg', sm: 'xl' }}
                >
                  --
                </StatNumber>
                <StatLabel textAlign="left" margin="0">
                  Price Premium
                </StatLabel>
              </Stat>
              <Stat bg="beige.100" paddingInline="6" py="4">
                <StatNumber
                  textAlign="left"
                  margin="0"
                  fontFamily="suisseIntlMedium"
                  fontSize={{ base: 'lg', sm: 'xl' }}
                >
                  --
                </StatNumber>
                <StatLabel textAlign="left" margin="0">
                  Average Sale Price
                </StatLabel>
              </Stat>
            </Box>
          </Box>
        </Box>
      </Box>
    </chakra.section>
  );
};

export default MarketHistory;
