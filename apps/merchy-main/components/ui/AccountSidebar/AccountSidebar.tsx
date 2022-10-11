import { Box, chakra, Heading } from '@chakra-ui/react';
import AccountListItem from './AccountListItem';

const AccountSidebar = () => {
  return (
    <Box
      //   left="250px"
      ml="-250px"
      //   pos="fixed"
      w="250px"
      minH="100vh"
      bg="#FAFAFA"
      pt="4"
      display={{ base: 'none', md: 'block' }}
    >
      <Box py="2">
        <Heading>Your Name</Heading>
      </Box>

      <chakra.ul>
        <AccountListItem slug="security" description="Two-Step Verification" />
        <AccountListItem
          slug="buying"
          description="Active Bids, In-Progress, Completed Orders"
        />
        <AccountListItem
          slug="selling"
          description="Active Asks, In-Progress, Completed Sales"
        />
        <AccountListItem
          slug="profile"
          description="Learn what&lsquo;s unique to you"
        />
        <AccountListItem
          slug="portfolio"
          description="See the value of your items"
        />
        <AccountListItem
          slug="following"
          description="Products you&lsquo;re watching"
        />
        <AccountListItem
          slug="settings"
          description="Payments, Payouts, Addresses"
        />
      </chakra.ul>
    </Box>
  );
};

export default AccountSidebar;
