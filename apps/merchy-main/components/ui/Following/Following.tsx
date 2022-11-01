import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  TableContainer,
  Thead,
  Tr,
  Td,
  Tbody,
  Table,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { DeleteIcon } from '@chakra-ui/icons';
import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import DeleteModal from './DeleteModal';
import Link from 'next/link';
import AddModal from './AddModal';
import { AccountTr, AccountTh } from '../../../styles';

const UserProfile = gql`
  query userProfile($userEmail: String!) {
    userProfile(userEmail: $userEmail) {
      following {
        edges {
          node {
            name
            slug
            primaryTitle
            secondaryTitle
            market {
              lowestAsk
              lastSale
              price
            }
            media {
              imageUrl
            }
          }
        }
      }
    }
  }
`;

const Following = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isAddModalOpen,
    onOpen: onAddModalOpen,
    onClose: onAddModalClose,
  } = useDisclosure();

  const user = useSelector((state: RootState) => state.auth.user);

  const { data, loading, error } = useQuery(UserProfile, {
    variables: { userEmail: user?.email },
  });

  const [followProducts, setFollowProducts] = useState(null);
  const [focusedProduct, setFocusedProduct] = useState(null);

  useEffect(() => {
    if (!followProducts && !loading && !error) {
      setFollowProducts(data.userProfile.following.edges);
    }
  }, [loading, followProducts, data, error]);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>ops</div>;
  }

  const handleModalOpen = (idx) => {
    setFocusedProduct({ ...followProducts[idx].node, idx: idx });
    onOpen();
  };

  const thStyles = {
    px: '0px',
    verticalAlign: 'top',
    minW: '0px',
    cursor: 'pointer',
    paddingInline: { base: '4', sm: '6', md: '6' },
    py: '2',
    lineHeight: '1rem',
    alignSelf: 'center',
  };

  return (
    <Container
      w="100%"
      marginInline="auto"
      maxW="6xl"
      paddingInline="4"
      py={{ base: '4', md: '8' }}
    >
      <Box
        display="flex"
        alignItems="flex-end"
        borderBottomColor="neutral.300"
        borderWidth="0px"
        pb="3"
        mb="5"
      >
        <Heading fontWeight="500" fontSize="2xl" w="100%">
          Following
        </Heading>
        <Button
          variant="signup"
          h="32px"
          fontSize="sm"
          onClick={onAddModalOpen}
        >
          Add Product
        </Button>
        <AddModal isOpen={isAddModalOpen} onClose={onAddModalClose} />
      </Box>

      <Box w="full" overflowX="auto">
        <TableContainer overflowX="hidden">
          <Table variant="comfortable">
            <Thead>
              <AccountTr>
                <AccountTh flex="250 0 auto">Name</AccountTh>
                <AccountTh flex="150 0 auto">Market Value</AccountTh>
                <AccountTh flex="150 0 auto">Lowest Ask</AccountTh>
                <AccountTh flex="150 0 auto">Last Sale</AccountTh>
                <AccountTh flex="150 0 auto"></AccountTh>
              </AccountTr>
            </Thead>
            {followProducts?.map(({ node }, idx) => {
              return (
                <Tbody key={node.name} display="block" overflowY="auto">
                  <Tr
                    display="flex"
                    flex="1 0 auto"
                    minW="0px"
                    h="fit-content"
                    borderBottom="1px solid #EDEDED"
                  >
                    <Td
                      {...thStyles}
                      w="250px"
                      flex="250 0 auto"
                      textAlign="left"
                      whiteSpace="nowrap"
                      boxSizing="border-box"
                    >
                      <Link href="/product/[slug]" as={`/product/${node.slug}`}>
                        <Box
                          display="flex"
                          alignItems="center"
                          cursor="pointer"
                          flexDir="row"
                          h="100%"
                        >
                          <Box
                            flex="0 0 auto"
                            h="100%"
                            w="60px"
                            textAlign="center"
                          >
                            <Image src={node.media.imageUrl} alt={node.name} />
                          </Box>
                          <Box
                            ml="5"
                            textAlign="left"
                            flexGrow="1"
                            minW={{ base: '150px', lg: '200px' }}
                          >
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              pos="relative"
                            >
                              <Text
                                fontSize="sm"
                                mb="1"
                                lineHeight="sm"
                                overflow="hidden"
                                textOverflow="ellipsis"
                                whiteSpace="nowrap"
                              >
                                {node.primaryTitle}
                              </Text>
                            </Box>
                            <Heading
                              fontWeight="500"
                              fontSize="md"
                              lineHeight="md"
                              mb="1"
                              overflow="hidden"
                              textOverflow="ellipsis"
                              whiteSpace="nowrap"
                            >
                              {node.secondaryTitle}
                            </Heading>
                          </Box>
                        </Box>
                      </Link>
                    </Td>
                    <Td
                      {...thStyles}
                      w="150px"
                      flex="250 0 auto"
                      textAlign="left"
                      whiteSpace="nowrap"
                      boxSizing="border-box"
                    >
                      <Text fontSize="sm">${node.market.price}</Text>
                    </Td>
                    <Td
                      {...thStyles}
                      w="150px"
                      flex="250 0 auto"
                      textAlign="left"
                      whiteSpace="nowrap"
                      boxSizing="border-box"
                    >
                      <Text>${node.market.price}</Text>
                    </Td>
                    <Td
                      {...thStyles}
                      w="150px"
                      flex="250 0 auto"
                      textAlign="left"
                      whiteSpace="nowrap"
                      boxSizing="border-box"
                    >
                      <Text>${node.market.lastSale}</Text>
                    </Td>
                    <Td
                      {...thStyles}
                      w="150px"
                      flex="250 0 auto"
                      textAlign="left"
                      whiteSpace="nowrap"
                      boxSizing="border-box"
                    >
                      <DeleteIcon
                        cursor="pointer"
                        onClick={() => handleModalOpen(idx)}
                      />
                      <DeleteModal
                        isOpen={isOpen}
                        onClose={onClose}
                        product={focusedProduct}
                        followProducts={followProducts}
                        setFollowProducts={setFollowProducts}
                      />
                    </Td>
                  </Tr>
                </Tbody>
              );
            })}
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Following;
