import { Box, Link, Divider, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Logout } from '../../icons';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../../../store/auth/auth.slice';
import {
  accountProfileLeftSelections,
  accountProfileRightSelections,
} from 'apps/merchy-main/data';
import { logout } from 'apps/merchy-main/api';

const AccountMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout();
    dispatch(logoutSuccess());
  };

  return (
    <Box
      w="491px"
      h="320px"
      py="2"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      pos="absolute"
      transform="translateX(-80%)"
      bg="neutral.white"
      zIndex="313"
      boxShadow="rgb(0 0 0 / 15%) 0px 1px 8px 0px"
      left="-45px"
    >
      <Box data-component="left-pane" wordBreak="break-word">
        {accountProfileLeftSelections.map(
          ({ slug, icon, title, description }, index) => (
            <NextLink
              key={title}
              href="/account/[slug]"
              as={`/account/${slug}`}
            >
              <Link order={index + 1} variant="accountDropdown">
                <Box display="flex" flexDir="row" alignItems="center">
                  <Box flexShrink="0">{icon}</Box>
                  <Box ml="4">
                    <Text variant="sm">{title}</Text>
                    <Text variant="xs">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: description,
                        }}
                      />
                    </Text>
                  </Box>
                </Box>
              </Link>
            </NextLink>
          )
        )}
      </Box>

      <Divider orientation="vertical" />

      <Box data-component="right-pane">
        {accountProfileRightSelections.map(
          ({ slug, icon, title, description }, index) => (
            <NextLink
              key={title}
              href="/account/[slug]"
              as={`/account/${slug}`}
            >
              <Link order={index + 1} variant="accountDropdown">
                <Box display="flex" flexDir="row" alignItems="center">
                  <Box flexShrink="0">{icon}</Box>
                  <Box ml="4">
                    <Text variant="sm">{title}</Text>
                    <Text variant="xs">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: description,
                        }}
                      />
                    </Text>
                  </Box>
                </Box>
              </Link>
            </NextLink>
          )
        )}

        <NextLink href="/">
          <Link order="6" variant="accountDropdown" onClick={handleLogout}>
            <Box display="flex" flexDir="row" alignItems="center">
              <Logout />
              <Box>
                <Text variant="sm" ml="4">
                  Log Out
                </Text>
              </Box>
            </Box>
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

export default AccountMenu;
