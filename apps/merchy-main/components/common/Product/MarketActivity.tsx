import {
  Box,
  List,
  ListItem,
  Button,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import MarketDrawer from './MarketDrawer';

const MarketActivity = ({ productInfo }) => {
  const {
    isOpen: isAsksOpen,
    onOpen: onAsksOpen,
    onClose: onAsksClose,
  } = useDisclosure();
  const {
    isOpen: isBidsOpen,
    onOpen: onBidsOpen,
    onClose: onBidsClose,
  } = useDisclosure();
  const {
    isOpen: isSalesOpen,
    onOpen: onSalesOpen,
    onClose: onSalesClose,
  } = useDisclosure();

  return (
    <Box>
      <Box
        data-component="MarketActivity"
        display="flex"
        justifyContent="space-between"
        pt="4"
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <Box
          data-component="LastSale"
          display="flex"
          flexDir="column"
          mb={{ base: '1rem', sm: '1rem', md: '0px' }}
        >
          <Text variant="marketActivitySmall">Last Sale:</Text>
          <Text
            color="neutral.black"
            fontSize="xl"
            fontWeight="bold"
            lineHeight="6"
            my="1"
          >
            ${productInfo.productBySlug.market.price}
          </Text>
          <Box display="flex" alignItems="center">
            <Text
              lineHeight="5"
              letterSpacing="0"
              ml="1"
              fontSize="sm"
              color="neutral.500"
            >
              --
            </Text>
            <Text
              lineHeight="5"
              letterSpacing="0"
              ml="1"
              fontSize="sm"
              color="neutral.500"
            >
              (--)
            </Text>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Box data-component="MarketActivityDrawer">
            <Box>
              <List
                display="flex"
                justifyContent="flex-start"
                flexWrap="wrap"
                listStyleType="none"
              >
                <ListItem>
                  <Button variant="marketActivity" onClick={onAsksOpen}>
                    View Asks
                  </Button>
                  <MarketDrawer
                    isOpen={isAsksOpen}
                    onClose={onAsksClose}
                    drawerType="ask"
                  />
                </ListItem>
                <ListItem>
                  <Button variant="marketActivity" onClick={onBidsOpen}>
                    View Bids
                  </Button>
                  <MarketDrawer
                    isOpen={isBidsOpen}
                    onClose={onBidsClose}
                    drawerType="bid"
                  />
                </ListItem>
                <ListItem>
                  <Button variant="marketActivity" onClick={onSalesOpen}>
                    View Sales
                  </Button>
                  <MarketDrawer
                    isOpen={isSalesOpen}
                    onClose={onSalesClose}
                    drawerType="sale"
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MarketActivity;
