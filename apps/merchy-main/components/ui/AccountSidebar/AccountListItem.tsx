import { Box, Text, Link as ChakraLink, ListItem } from '@chakra-ui/react';
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
import { useDispatch } from 'react-redux';
import { logoutSuccess } from 'apps/merchy-main/store/auth/auth.slice';
import { logout } from 'apps/merchy-main/api';

const AccountListItem = ({ slug, description, active }) => {
  const dispatch = useDispatch();
  const accountListItemStyles = {
    paddingInline: '4',
    py: '4',
    cursor: 'pointer',
    _hover: {
      bg: 'neutral.300',
    },
    bg: active ? 'neutral.white' : 'inherit',
  };

  const handleLogout = async () => {
    await logout();
    dispatch(logoutSuccess());
  };

  const href = slug === 'logout' ? '/' : '/account/[slug]';
  const as = slug === 'logout' ? '/' : `/account/${slug}`;

  return (
    <ListItem {...accountListItemStyles}>
      <Link href={href} as={as}>
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
                  case 'logout':
                    return (
                      <ChakraLink onClick={handleLogout}>
                        <Logout />
                      </ChakraLink>
                    );
                  default:
                    return null;
                }
              })()}
            </Box>
          </Box>
          <Box>
            <Text variant="sm" textTransform="capitalize">
              {slug}
            </Text>
            <Text variant="xs">
              <span
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </Text>
          </Box>
        </Box>
      </Link>
    </ListItem>
  );
};

export default AccountListItem;
