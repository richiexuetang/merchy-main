import { Box, Text, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box
      borderRadius="3px"
      minWidth="141px"
      height="auto"
      position="relative"
      marginRight={0}
    >
      <Link href={`/product/${product.slug}`}>
        <Box
          display="flex"
          flexDirection="column"
          borderColor="neutral.200"
          justifyContent="center"
        >
          <Box margin={{ base: 2, lg: 4 }}>
            <Box
              display="flex"
              justifyContent="center"
              width="140px"
              height="75px"
              maxW="100%"
              margin="0px auto"
            >
              <Image
                objectFit="contain"
                maxW="100%"
                src={product.imageUrl}
                alt={product.name}
              />
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            h="100%"
            padding={2}
            textAlign="left"
            position="relative"
          >
            <Text
              fontSize={{ base: 'xs', md: 'sm' }}
              height={{ base: '34px', md: '40px' }}
            >
              {product.name}
            </Text>
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <Box>
                <Text textTransform="capitalize" marginTop={1} h="auto">
                  Lowest Ask
                </Text>
                <Text
                  fontSize={{ base: 'md', sm: 'xl' }}
                  fontWeight="700"
                  whiteSpace="nowrap"
                  marginTop={1}
                >
                  ${product.price}
                </Text>
              </Box>
            </Flex>

            <Flex marginTop={1}>
              <Text
                display="inline-flex"
                verticalAlign="middle"
                alignItems="center"
                lineHeight="1.2"
                borderRadius={0}
                maxW="100%"
                fontWeight="normal"
                outline="transparent solid 2px"
                outlineOffset="2px"
                margin="0.25rem 0.25rem 0.25rem 0"
                minH="1.5rem"
                minW="1.5rem"
                fontSize="xs"
                paddingInlineStart={1}
                paddingInlineEnd={1}
                background="beige.100"
                height="22px"
                padding="2px 0"
                color="neutral.black"
                fontFamily="suisseIntlMedium"
              >
                sold
              </Text>
            </Flex>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
export default ProductCard;
