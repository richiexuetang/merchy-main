import { Box, Link, chakra, Divider } from '@chakra-ui/react';
import NextLink from 'next/link';
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
import { logoutSuccess } from '../../../store/auth/auth.slice';

const AccountMenu = () => {
  const dispatch = useDispatch();

  const linkStyles = {
    display: 'block',
    h: '80px',
    w: '245px',
    m: '0',
    flexDir: 'row',
    justifyContent: 'space-between',
    whiteSpace: 'normal',
    alignItems: 'center',
    padding: '14px 0px 14px 24px !important',
    fontSize: { md: 'xs', lg: 'md' },
    _hover: { bg: 'neutral.300' },
  } as const;

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
      });

      dispatch(logoutSuccess());
    } catch (err) {
      console.log(err);
    }
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
        <NextLink href="/account/[slug]" as={`/account/buying`}>
          <Link order="1" {...linkStyles}>
            <Box display="flex" flexDir="row" alignItems="center">
              <Box flexShrink="0">
                <Buying />
              </Box>
              <Box ml="4">
                <chakra.p
                  fontSize="sm"
                  fontFamily="suisseIntlMedium"
                  color="neutral.black"
                  letterSpacing="-0.35px"
                  lineHeight="16px"
                  mb="1"
                >
                  Buying
                </chakra.p>
                <chakra.p
                  fontSize="xs"
                  fontWeight="300"
                  color="neutral.500"
                  letterSpacing="0"
                  lineHeight="16px"
                >
                  Active Bids, In-Progress, Completed Orders
                </chakra.p>
              </Box>
            </Box>
          </Link>
        </NextLink>

        <NextLink href="/account/[slug]" as={`/account/selling`}>
          <Link order="2" {...linkStyles}>
            <Box display="flex" flexDir="row" alignItems="center">
              <Box flexShrink="0">
                <Selling />
              </Box>
              <Box ml="4">
                <chakra.p
                  fontSize="sm"
                  fontFamily="suisseIntlMedium"
                  color="neutral.black"
                  letterSpacing="-0.35px"
                  lineHeight="16px"
                  mb="1"
                >
                  Selling
                </chakra.p>
                <chakra.p
                  fontSize="xs"
                  fontWeight="300"
                  color="neutral.500"
                  letterSpacing="0"
                  lineHeight="16px"
                >
                  Active Asks, In-Progress, Completed Sales
                </chakra.p>
              </Box>
            </Box>
          </Link>
        </NextLink>

        <NextLink href="/account/[slug]" as={`/account/portfoolio`}>
          <Link order="3" {...linkStyles}>
            <Box display="flex" flexDir="row" alignItems="center">
              <Portfolio />
              <Box ml="4">
                <chakra.p
                  fontSize="sm"
                  fontFamily="suisseIntlMedium"
                  color="neutral.black"
                  letterSpacing="-0.35px"
                  lineHeight="16px"
                  mb="1"
                >
                  Portfolio
                </chakra.p>
                <chakra.p
                  fontSize="xs"
                  fontWeight="300"
                  color="neutral.500"
                  letterSpacing="0"
                  lineHeight="16px"
                >
                  See The Value Of Your Items
                </chakra.p>
              </Box>
            </Box>
          </Link>
        </NextLink>

        <NextLink href="/account/[slug]" as={`/account/following`}>
          <Link order="4" {...linkStyles}>
            <Box display="flex" flexDir="row" alignItems="center">
              <Following />
              <Box ml="4">
                <chakra.p
                  fontSize="sm"
                  fontFamily="suisseIntlMedium"
                  color="neutral.black"
                  letterSpacing="-0.35px"
                  lineHeight="16px"
                  mb="1"
                >
                  Following
                </chakra.p>
                <chakra.p
                  fontSize="xs"
                  fontWeight="300"
                  color="neutral.500"
                  letterSpacing="0"
                  lineHeight="16px"
                >
                  Products You&lsquo;re Watching
                </chakra.p>
              </Box>
            </Box>
          </Link>
        </NextLink>
      </Box>

      <Divider orientation="vertical" />

      <Box data-component="right-pane">
        <NextLink href="/account/[slug]" as={`/account/security`}>
          <Link order="1" {...linkStyles}>
            <Box display="flex" flexDir="row" alignItems="center">
              <Security />
              <Box ml="4">
                <chakra.p
                  fontSize="sm"
                  fontFamily="suisseIntlMedium"
                  color="neutral.black"
                  letterSpacing="-0.35px"
                  lineHeight="16px"
                  mb="1"
                >
                  Security
                </chakra.p>
                <chakra.p
                  fontSize="xs"
                  fontWeight="300"
                  color="neutral.500"
                  letterSpacing="0"
                  lineHeight="16px"
                >
                  Two-Step Verification
                </chakra.p>
              </Box>
            </Box>
          </Link>
        </NextLink>

        <NextLink href="/account/[slug]" as={`/account/profile`}>
          <Link order="6" {...linkStyles}>
            <Box display="flex" flexDir="row" alignItems="center">
              <Profile />
              <Box ml="4">
                <chakra.p
                  fontSize="sm"
                  fontFamily="suisseIntlMedium"
                  color="neutral.black"
                  letterSpacing="-0.35px"
                  lineHeight="16px"
                  mb="1"
                >
                  Profile
                </chakra.p>
                <chakra.p
                  fontSize="xs"
                  fontWeight="300"
                  color="neutral.500"
                  letterSpacing="0"
                  lineHeight="16px"
                >
                  Learn What&lsquo;s Unique To You
                </chakra.p>
              </Box>
            </Box>
          </Link>
        </NextLink>

        <NextLink href="/account/[slug]" as={`/account/settings`}>
          <Link order="6" {...linkStyles}>
            <Box display="flex" flexDir="row" alignItems="center">
              <Settings />
              <Box ml="4">
                <chakra.p
                  fontSize="sm"
                  fontFamily="suisseIntlMedium"
                  color="neutral.black"
                  letterSpacing="-0.35px"
                  lineHeight="16px"
                  mb="1"
                >
                  Settings
                </chakra.p>
                <chakra.p
                  fontSize="xs"
                  fontWeight="300"
                  color="neutral.500"
                  letterSpacing="0"
                  lineHeight="16px"
                >
                  Payments, Payouts, Addresses
                </chakra.p>
              </Box>
            </Box>
          </Link>
        </NextLink>

        <NextLink href="/">
          <Link order="6" {...linkStyles} onClick={handleLogout}>
            <Box display="flex" flexDir="row" alignItems="center">
              <Logout />
              <Box>
                <chakra.p
                  fontSize="sm"
                  fontFamily="suisseIntlMedium"
                  color="neutral.black"
                  letterSpacing="-0.35px"
                  lineHeight="16px"
                  mb="1"
                  ml="4"
                >
                  Log Out
                </chakra.p>
              </Box>
            </Box>
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

export default AccountMenu;
