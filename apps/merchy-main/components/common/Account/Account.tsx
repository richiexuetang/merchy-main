import { Container, Flex, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AccountProfile, AccountSidebar, FollowProducts } from '../..';
import { getLayout } from '../Layout';

const Account = () => {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <Flex data-component="MyAccountPageRoot" ml="250px">
      <AccountSidebar data-component="MyAccountSidebar" />

      {(() => {
        switch (slug) {
          case 'profile':
            return <AccountProfile />;
          case 'following':
            return <FollowProducts />;
          default:
            <Container
              pos="relative"
              w="100%"
              marginInline="auto"
              maxW="100%"
              paddingInline="8"
              py="8"
            >
              {' '}
              <Heading>Your Portfolio</Heading>
            </Container>;
        }
      })()}
    </Flex>
  );
};

Account.getLayout = getLayout;

export default Account;
