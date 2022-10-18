import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  Box,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from '@chakra-ui/react';

const drawerData = {
  ask: {
    title: 'All Asks',
    description:
      'The data below is global and does not include applicable fees calculated at checkout.',
    tableHead: ['size', 'ask price', 'quantity'],
  },
  bid: {
    title: 'All Bids',
    description:
      'The data below is global and does not include applicable fees calculated at checkout.',
    tableHead: ['size', 'bid price', 'quantity'],
  },
  sale: {
    title: 'All Sales',
    description:
      'The data below is global and does not include applicable fees calculated at checkout.',
    tableHead: ['date', 'time', 'size', 'sale price'],
  },
};

const MarketDrawer = ({ onClose, isOpen, drawerType }) => {
  const data = drawerData[drawerType];

  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          flex="0 1 0%"
          p="6"
          fontWeight="normal"
          borderBottom="1px solid #CFCFCF"
          lineHeight="1rem"
          bg="neutral.white"
          borderRadius="0px"
        >
          <Box display="flex" flexDir="column">
            <Text>{data.title}</Text>
            <Text
              w={{ base: '100%', sm: '100%', md: '75%' }}
              lineHeight="4"
              fontSize="sm"
              color="neutral.400"
              mt="2"
            >
              {data.description}
            </Text>
          </Box>
        </DrawerHeader>
        <DrawerBody p="6" flex="1 1 0%">
          <Box
            data-component="ViewMarketActivity"
            h={{ sm: '100vh', lg: 'auto' }}
          >
            <Box w="full" overflowX="auto">
              <TableContainer>
                <Table variant="compact" w="full">
                  <Thead>
                    <Tr display="flex" flex="1 0 auto" minW="0" h="fit-content">
                      {data.tableHead.map((head) => {
                        return (
                          <Th
                            key={head}
                            pointerEvents="none"
                            textTransform="capitalize"
                            p="0"
                            verticalAlign="top"
                            whiteSpace="nowrap"
                            borderBottomWidth="2px"
                            borderColor="neutral.200"
                            textAlign="center"
                            boxSizing="border-box"
                            flex="75 0 auto"
                            minW="0"
                            w="75px"
                          >
                            {head}
                          </Th>
                        );
                      })}
                    </Tr>
                  </Thead>
                  <Tbody display="block" overflowY="auto">
                    <Tr display="flex" flex="1 0 auto" minW="0">
                      <Td
                        boxSizing="border-box"
                        flex="75 0 auto"
                        minW="0"
                        w="75px"
                        paddingInline={{ base: '1', sm: '3', md: '3' }}
                        lineHeight="1.25rem"
                        alignSelf="center"
                        fontSize="sm"
                        py="1"
                        textAlign="center"
                      >
                        9
                      </Td>
                      <Td
                        boxSizing="border-box"
                        flex="100 0 auto"
                        minW="0"
                        w="100px"
                        paddingInline={{ base: '1', sm: '3', md: '3' }}
                        lineHeight="1.25rem"
                        alignSelf="center"
                        fontSize="sm"
                        py="1"
                        textAlign="center"
                      >
                        $160
                      </Td>
                      <Td
                        isNumeric
                        boxSizing="border-box"
                        flex="75 0 auto"
                        minW="0"
                        w="75px"
                        paddingInline={{ base: '1', sm: '3', md: '3' }}
                        lineHeight="1.25rem"
                        alignSelf="center"
                        fontSize="sm"
                        py="1"
                        textAlign="center"
                      >
                        4
                      </Td>
                    </Tr>

                    <Tr
                      display="flex"
                      flex="1 0 auto"
                      minW="0"
                      _even={{ bg: 'neutral.200' }}
                    >
                      <Td
                        boxSizing="border-box"
                        flex="75 0 auto"
                        minW="0"
                        w="75px"
                        paddingInline={{ base: '1', sm: '3', md: '3' }}
                        lineHeight="1.25rem"
                        alignSelf="center"
                        fontSize="sm"
                        py="1"
                        textAlign="center"
                      >
                        9
                      </Td>
                      <Td
                        boxSizing="border-box"
                        flex="100 0 auto"
                        minW="0"
                        w="100px"
                        paddingInline={{ base: '1', sm: '3', md: '3' }}
                        lineHeight="1.25rem"
                        alignSelf="center"
                        fontSize="sm"
                        py="1"
                        textAlign="center"
                      >
                        $161
                      </Td>
                      <Td
                        isNumeric
                        boxSizing="border-box"
                        flex="75 0 auto"
                        minW="0"
                        w="75px"
                        paddingInline={{ base: '1', sm: '3', md: '3' }}
                        lineHeight="1.25rem"
                        alignSelf="center"
                        fontSize="sm"
                        py="1"
                        textAlign="center"
                      >
                        1
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MarketDrawer;
