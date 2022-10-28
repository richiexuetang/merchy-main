import { Box, Button, Container, Grid, Heading, Text } from '@chakra-ui/react';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';

const AccountProfile = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Container w="100%" marginInline="auto" maxW="6xl" paddingInline="8" py="8">
      <Box
        display="flex"
        alignItems="flex-end"
        borderBottomColor="neutral.300"
        borderWidth="0px 0px 1px"
        pb="3"
        mb="5"
      >
        <Heading fontWeight="500" fontSize="2xl" w="100%">
          Profile
        </Heading>
        <Button variant="login" h="32px">
          Edit
        </Button>
      </Box>

      <Grid
        gridGap="10"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      >
        <Box>
          <Heading fontWeight="500" fontSize="lg" lineHeight="lg" mb="1">
            Name
          </Heading>
          <Text textTransform="capitalize">{user?.name || ''}</Text>
        </Box>

        <Box>
          <Heading fontWeight="500" fontSize="lg" lineHeight="lg" mb="1">
            Shoe Size
          </Heading>
          <Text textTransform="capitalize">Not Set</Text>
        </Box>

        <Box>
          <Heading fontWeight="500" fontSize="lg" lineHeight="lg" mb="1">
            Email Address
          </Heading>
          <Text>{user?.email || ''}</Text>
        </Box>

        <Box>
          <Heading fontWeight="500" fontSize="lg" lineHeight="lg" mb="1">
            Username
          </Heading>
          <Text>{user?.name?.replace(' ', '') || ''}69</Text>
        </Box>

        <Box>
          <Heading fontWeight="500" fontSize="lg" lineHeight="lg" mb="1">
            Phone Number
          </Heading>
          <Text>--</Text>
        </Box>

        <Box>
          <Heading fontWeight="500" fontSize="lg" lineHeight="lg" mb="1">
            Reset Password
          </Heading>
          <Button variant="signup" h="32px" w="auto">
            Reset Password
          </Button>
        </Box>
      </Grid>
    </Container>
  );
};

export default AccountProfile;
