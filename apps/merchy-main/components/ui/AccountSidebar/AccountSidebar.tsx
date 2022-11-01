import { Box, Heading, List } from '@chakra-ui/react';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import AccountListItem from './AccountListItem';
import { useRouter } from 'next/router';
import { accountProfileSelections } from 'apps/merchy-main/data';

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
          {user?.name}
        </Heading>
      </Box>

      <List>
        {accountProfileSelections.map(
          ({ slug: selectionSlug, description }) => (
            <AccountListItem
              key={selectionSlug}
              active={slug === selectionSlug}
              slug={selectionSlug}
              description={description}
            />
          )
        )}
      </List>
    </Box>
  );
};

export default AccountSidebar;
