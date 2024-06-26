import { useLazyQuery } from '@apollo/client';
import { SearchIcon } from '@chakra-ui/icons';
import {
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  Portal,
  chakra,
  Image,
  List,
  ListItem,
} from '@chakra-ui/react';
import Link from 'next/link';
import NextImage from 'next/image';
import { useState } from 'react';
import { SearchProducts } from '../../../utils/gql';

const NavInput = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data }] = useLazyQuery(SearchProducts);

  const handleSearchChange = (e) => {
    setSearchFilter(e.target.value);

    executeSearch({
      variables: {
        search: searchFilter,
      },
    });
  };

  const leftElementStyles = {
    left: { base: 1, md: 0 },
    top: { base: '0px', md: '0px' },
    w: { base: '2rem', md: '3rem' },
    h: { base: '2rem', md: '3rem' },
    fontSize: 'lg',
    alignItems: 'center',
  } as const;

  const inputStyles = {
    borderColor: 'neutral.400',
    fontSize: { base: 'lg', md: '14px' },
    paddingInlineStart: '12',
    h: { base: '34px', md: '44px' },
    borderRadius: '3px',
    backgroundColor: '#fafafa',
    pr: '2',
    boxShadow: 'none',
    textOverflow: 'ellipsis',
    _focus: {
      zIndex: '1',
      borderColor: '#0f0f0f',
      boxShadow: 'none',
    },
    _hover: {
      borderColor: '#5f5f5f',
    },
  } as const;

  const ProductImage = chakra(NextImage, {
    baseStyle: { maxH: '125px', w: '125px', mr: '20px' },
    shouldForwardProp: (prop) =>
      ['width', 'height', 'src', 'alt'].includes(prop),
  });

  return (
    <Box
      w={{ base: 'auto', md: '90%' }}
      pr={{ base: '0px', md: '8' }}
      flexGrow="1"
    >
      <Box data-component="SearchBoxSite" pos="relative" flexGrow="1">
        <InputGroup>
          <InputLeftElement {...leftElementStyles}>
            <SearchIcon />
          </InputLeftElement>
          <Input
            {...inputStyles}
            placeholder="Search for brand, color, etc."
            onChange={(e) => handleSearchChange(e)}
          />
        </InputGroup>
      </Box>

      {searchFilter && (
        <Portal>
          <Box
            bg="white"
            borderRadius="2px"
            color="neutral.black"
            m="auto"
            overflowY="scroll"
            textAlign="left"
            left="0"
            w="100%"
            zIndex="1024"
            top="90px"
            position="absolute"
          >
            {data || data?.allProducts.edges.length > 0 ? (
              <List>
                {data.allProducts.edges.map(({ node }) => {
                  return (
                    <ListItem
                      key={node.primaryTitle}
                      borderBottom="1px solid #CFCFCF"
                      pb="10px"
                      pos="relative"
                      textTransform="uppercase"
                      transition="all 0.2s ease-in-out 0s"
                      borderRight="none"
                      _hover={{
                        borderRight: '8px solid #006340',
                        cursor: 'pointer',
                      }}
                    >
                      <Link
                        href="/product/[...slug]"
                        as={`/product/${node.slug}`}
                      >
                        <Box
                          alignItems="center"
                          display="flex"
                          flexDir="row"
                          h="132px"
                          overflow="hidden"
                          padding="8px"
                          w="100%"
                        >
                          <Image
                            src={node.media.imageUrl}
                            alt={node.media.label}
                            width="125px"
                            height="125px"
                            marginRight="20px"
                          />
                          <Box w="100%">
                            <Box fontSize="11.85px" lineHeight="18px" mb="0px">
                              {node.brand}
                            </Box>
                            <Box
                              fontSize="18px"
                              fontWeight="700"
                              lineHeight="18px"
                              m="0px"
                              overflow="hidden"
                              maxH="none"
                            >
                              {node.primaryTitle}
                            </Box>
                            <Box
                              fontSize="14px"
                              fontWeight="700"
                              lineHeight="17px"
                              mt="0px"
                            >
                              {node.secondaryTitle}
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <Box
                border="none"
                fontSize="11px"
                fontWeight="bold"
                m={0}
                p="15px"
                textTransform="uppercase"
              >
                Nothing to see here! Take a trip to the{' '}
                <Link href="/sneakers">browse page</Link> or{' '}
                <Link href="/">Suggest a Product</Link>
              </Box>
            )}
          </Box>
        </Portal>
      )}
    </Box>
  );
};

export default NavInput;
