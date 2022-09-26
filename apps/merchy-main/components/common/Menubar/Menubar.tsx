import Link from 'next/link';
import {
  Link as ChakraLink,
  chakra,
  Box,
  List,
  ListItem,
} from '@chakra-ui/react';

const Menubar = ({ levelOneCategories }) => {
  return (
    <chakra.nav
      display={{ base: 'none', md: 'initial' }}
      textTransform="capitalize"
    >
      <Box bg="beige.100" justifyContent="space-between" overflowX="auto">
        <List
          display="flex"
          w="1296px"
          h="48px"
          justifyContent="center"
          m={{ base: '0 1rem', lg: 'auto' }}
        >
          {levelOneCategories.map(({ name, slug }) => {
            return (
              <ListItem
                key={slug}
                display="flex"
                alignItems="center"
                letterSpacing="0.5px"
                margin={{ md: '0 16px' }}
                fontSize="18px"
              >
                <ChakraLink
                  as={Link}
                  href={`/category/${slug}`}
                  fontSize={{ base: '16px', lg: '18px' }}
                >
                  {name}
                </ChakraLink>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </chakra.nav>
  );
};

export default Menubar;
