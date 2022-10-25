import { Box, chakra, Heading } from '@chakra-ui/react';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import AccountListItem from './AccountListItem';
import { useRouter } from 'next/router';

const AccountSidebar = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const router = useRouter();
  const { slug } = router.query;

  return (
    <Box
      ml="-250px"
      w="250px"
      minH="100vh"
      bg="#FAFAFA"
      pt="4"
      display={{ base: 'none', md: 'block' }}
    >
      <Box py="2">
        <Heading
          fontFamily="suisseIntlMedium"
          fontWeight="500"
          fontSize="2xl"
          textTransform="capitalize"
          paddingInline="3"
          pb="4"
          lineHeight="1.5rem"
        >
          {user?.user.name}
        </Heading>
      </Box>

      <chakra.ul>
        <AccountListItem
          active={slug === 'security'}
          slug="security"
          description="Two-Step Verification"
        />
        <AccountListItem
          active={slug === 'buying'}
          slug="buying"
          description="Active Bids, In-Progress, Completed Orders"
        />
        <AccountListItem
          active={slug === 'selling'}
          slug="selling"
          description="Active Asks, In-Progress, Completed Sales"
        />
        <AccountListItem
          active={slug === 'profile'}
          slug="profile"
          description="Learn what&lsquo;s unique to you"
        />
        <AccountListItem
          active={slug === 'portfolio'}
          slug="portfolio"
          description="See the value of your items"
        />
        <AccountListItem
          active={slug === 'following'}
          slug="following"
          description="Products you&lsquo;re watching"
        />
        <AccountListItem
          active={slug === 'settings'}
          slug="settings"
          description="Payments, Payouts, Addresses"
        />
      </chakra.ul>
    </Box>
  );
};

export default AccountSidebar;
