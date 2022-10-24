import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Table,
  Image,
} from '@chakra-ui/react';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { DeleteIcon } from '@chakra-ui/icons';
import { gql, useQuery } from '@apollo/client';

const AccountProfile = gql`
  query accountProfile($accountEmail: String!) {
    accountProfile(accountEmail: $accountEmail) {
      following {
        edges {
          node {
            name
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
  const user = useSelector((state: RootState) => state.auth.user);

  const { data, loading, error } = useQuery(AccountProfile, {
    variables: { accountEmail: user?.user.email },
  });

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>ops</div>;
  }

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
        <Button variant="signup" h="32px" fontSize="sm">
          Add Product
        </Button>
      </Box>

      <Box w="full" overflowX="auto">
        <TableContainer overflowX="hidden">
          <Table variant="comfortable">
            <Thead>
              <Tr
                display="flex"
                flex="1 0 auto"
                minW="0px"
                h="fit-content"
                borderBottom="1px solid #EDEDED"
              >
                <Th
                  {...thStyles}
                  w="250px"
                  flex="250 0 auto"
                  textAlign="left"
                  whiteSpace="nowrap"
                  boxSizing="border-box"
                >
                  Name
                </Th>
                <Th
                  {...thStyles}
                  w="150px"
                  flex="150 0 auto"
                  textAlign="left"
                  whiteSpace="nowrap"
                  boxSizing="border-box"
                >
                  Market Value
                </Th>
                <Th
                  {...thStyles}
                  w="150px"
                  flex="150 0 auto"
                  textAlign="left"
                  whiteSpace="nowrap"
                  boxSizing="border-box"
                >
                  Lowest Ask
                </Th>
                <Th
                  {...thStyles}
                  w="150px"
                  flex="150 0 auto"
                  textAlign="left"
                  whiteSpace="nowrap"
                  boxSizing="border-box"
                >
                  Last Sale
                </Th>
                <Th
                  {...thStyles}
                  w="150px"
                  flex="150 0 auto"
                  textAlign="left"
                  whiteSpace="nowrap"
                  boxSizing="border-box"
                ></Th>
              </Tr>
            </Thead>
            {data?.accountProfile.following.edges.map(({ node }) => {
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
                      <DeleteIcon cursor="pointer" />
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
