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
      // display={{ base: 'none', md: 'initial' }}
      textTransform="capitalize"
    >
      <Box
        bg="beige.100"
        justifyContent="space-between"
        overflowX="auto"
        m="0"
        p="0"
        display="flex"
        px={{ base: '1', md: 'initial' }}
        borderBottom={{ base: '1px', md: 'initial' }}
        borderColor={{ base: 'neutral.300', md: 'initial' }}
      >
        <List
          display="flex"
          w="1296px"
          h="48px"
          justifyContent="center"
          m={{ base: 'auto', md: '0 1rem', lg: 'auto' }}
        >
          {levelOneCategories.map(({ name, slug }) => {
            return (
              <ListItem
                key={slug}
                display="flex"
                alignItems="center"
                letterSpacing="0.5px"
                margin={{ base: '0 16px', md: '0 8px' }}
                fontSize={{ base: '18px', md: '16px' }}
                whiteSpace="nowrap"
                boxShadow="inset 0 -5px 0 0 transparent"
                fontFamily="suisseIntlMedium"
                cursor="pointer"
              >
                <ChakraLink
                  as={Link}
                  href={`/category/${slug}`}
                  fontSize={{ base: '16px', lg: '18px' }}
                >
                  {typeof name === 'string' ? name.replace(/-/g, ' ') : name}
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
