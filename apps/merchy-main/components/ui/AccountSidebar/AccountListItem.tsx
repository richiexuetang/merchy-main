import { Box, chakra, Text } from '@chakra-ui/react';
import Link from 'next/link';
import {
  Buying,
  Following,
  Logout,
  Portfolio,
  Profile,
  Security,
  Selling,
  Settings,
} from '../../icons';

const AccountListItem = ({ slug, description, active }) => {
  const liStyles = {
    paddingInline: '4',
    py: '4',
    cursor: 'pointer',
    _hover: {
      bg: 'neutral.300',
    },
    bg: active ? 'neutral.white' : 'inherit',
  };

  return (
    <chakra.li {...liStyles}>
      <Link href={`/account/[slug]`} as={`/account/${slug}`}>
        <Box display="flex">
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box
              w="6"
              h="6"
              display="inline-block"
              lineHeight="1em"
              flexShrink="0"
              verticalAlign="middle"
              mr="4"
            >
              {(() => {
                switch (slug) {
                  case 'security':
                    return <Security />;
                  case 'buying':
                    return <Buying />;
                  case 'selling':
                    return <Selling />;
                  case 'profile':
                    return <Profile />;
                  case 'portfolio':
                    return <Portfolio />;
                  case 'following':
                    return <Following />;
                  case 'settings':
                    return <Settings />;
                  default:
                    return null;
                }
              })()}
            </Box>
          </Box>
          <Box>
            <Text
              fontSize="sm"
              mb="1"
              lineHeight="19px"
              letterSpacing="0.004rem"
              color="neutral.black"
              textTransform="capitalize"
            >
              {slug}
            </Text>
            <Text
              fontSize="xs"
              lineHeight="1"
              letterSpacing="0"
              fontWeight="300"
              color="neutral.500"
            >
              {description}
            </Text>
          </Box>
        </Box>
      </Link>
    </chakra.li>
  );
};

export default AccountListItem;
