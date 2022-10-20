import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  Box,
  chakra,
  Button,
  Text,
  Divider,
  Heading,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';

const ProductDetails = ({ productInfo }) => {
  const { isOpen, onToggle } = useDisclosure();

  const style = isOpen ? { height: '0px' } : { height: '120px' };

  return (
    <chakra.section data-component="ProductDetails" mt="6">
      <Divider orientation="horizontal" borderWidth="0 0 1px" />
      <Text fontWeight="bold" lineHeight="md" mb="2" py="3">
        Product Details
      </Text>
      <Box
        _before={{
          ...style,
          content: `""`,
          position: 'absolute',
          left: '0px',
          display: 'block',
          width: '100%',
          bg: 'linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))',
        }}
      >
        <Collapse startingHeight="115px" in={isOpen} animateOpacity={true}>
          <Box
            display="flex"
            flexDir={{ base: 'column', md: 'row' }}
            justifyContent="flex-start"
            w="100%"
          >
            <Box w={{ base: '100%', md: '40%' }}>
              {productInfo?.productTraits && (
                <Box
                  data-component="ProductTraits"
                  display="flex"
                  flexDir="column"
                  w="100%"
                  justifyContent="space-between"
                  flexWrap={{ md: 'wrap' }}
                >
                  {productInfo?.productTraits &&
                    productInfo?.productTraits.map(({ name, value }, index) => (
                      <Box
                        key={index}
                        data-component="product-trait"
                        display="flex"
                        justifyContent={{
                          base: 'space-between',
                          md: 'flex-start',
                        }}
                        mb="1"
                      >
                        <Text
                          as="span"
                          flexBasis="50%"
                          fontSize="sm"
                          lineHeight="sm"
                          textTransform="capitalize"
                        >
                          {name}
                        </Text>
                        <Text
                          textAlign={{ base: 'right', md: 'left' }}
                          w="100%"
                          fontSize="sm"
                          fontFamily="suisseIntlMedium"
                          lineHeight="sm"
                          textTransform="uppercase"
                        >
                          {value}
                        </Text>
                      </Box>
                    ))}
                </Box>
              )}
            </Box>
            {productInfo?.description && (
              <Box
                data-component="ProductDescription"
                pb={{ base: '4', md: '0' }}
                w={{ base: '100%', md: '40%' }}
                flex="1 1 auto"
              >
                <Heading
                  fontWeight="500"
                  fontSize="sm"
                  mb="1"
                  mt={{ base: '6', lg: '0' }}
                >
                  Product Description
                </Heading>
                <Text fontSize="sm" lineHeight="5">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: productInfo?.description,
                    }}
                  />
                </Text>
              </Box>
            )}
          </Box>
        </Collapse>
        <Box display="flex" justifyContent="center">
          <Button
            rightIcon={!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
            borderRadius="0"
            color="green.700"
            bg="transparent"
            onClick={onToggle}
          >
            Read {isOpen ? 'Less' : 'More'}
          </Button>
        </Box>
      </Box>
    </chakra.section>
  );
};

export default ProductDetails;
