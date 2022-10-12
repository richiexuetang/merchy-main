import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AccountSidebar } from '../../ui';
import { getLayout } from '../Layout';

const Account = () => {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <Flex data-component="MyAccountPageRoot" ml="250px">
      <AccountSidebar data-component="MyAccountSidebar" />
      <Container
        pos="relative"
        w="100%"
        marginInline="auto"
        maxW="100%"
        paddingInline="8"
        py="8"
      >
        <Box display="flex" justifyContent="space-between">
          <Heading>Your Portfolio</Heading>
        </Box>
      </Container>
    </Flex>
  );
};

Account.getLayout = getLayout;

export default Account;
