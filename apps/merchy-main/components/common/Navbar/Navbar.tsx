import { Account, Bell, Logo } from '../../icons';
import { BrowseMenu } from './BrowseMenu';
import NavInput from './NavInput';
import { chakra, Flex, Icon, Link, Button, IconButton } from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import NavbarRoot from './NavbarRoot';
import NextLink from 'next/link';
import { BrowseCategory } from '../../../types';
import { useSelector } from 'react-redux';
import { AccountMenu } from '../../ui';
import { RootState } from '../../../store/store';

const navListStyle = {
  pos: 'relative',
  m: { base: '0', md: '0 2px', lg: '0 4px' },
  fontWeight: '500',
  whiteSpace: 'nowrap',
} as const;

interface NavbarProps {
  browseCategories: BrowseCategory[];
}

const Navbar: React.FC<NavbarProps> = ({ browseCategories }) => {
  const userAuth = useSelector((state: RootState) => state.auth.token);

  console.log('userAuth', userAuth);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [accountDropdown, setAccountDropdown] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handler = (event: React.SyntheticEvent) => {
      if (
        isOpen &&
        ref.current &&
        !ref.current?.contains(event.target as HTMLInputElement)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', () => handler);
    document.addEventListener('touchstart', () => handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', () => handler);
      document.removeEventListener('touchstart', () => handler);
    };
  }, [isOpen]);

  useEffect(() => {
    const accountHandler = (event: React.SyntheticEvent) => {
      if (
        accountDropdown &&
        ref.current &&
        !ref.current?.contains(event.target as HTMLInputElement)
      ) {
        setAccountDropdown(false);
      }
    };

    document.addEventListener('mousedown', () => accountHandler);
    document.addEventListener('touchstart', () => accountHandler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', () => accountHandler);
      document.removeEventListener('touchstart', () => accountHandler);
    };
  }, [accountDropdown]);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <NavbarRoot>
      <chakra.div pos="sticky" zIndex="1030" top={0} bg="white">
        <Flex minH="48px" justify="space-between" align="center">
          {/* Logo */}
          <chakra.div display={{ base: 'none', md: 'inline-block' }}>
            <Link href="/">
              <chakra.span
                display={{ base: 'flex', md: 'block' }}
                margin={{ base: 'auto 0px', md: 'auto 2.5rem' }}
              >
                <Icon
                  as={Logo}
                  h="auto"
                  w={{ base: '95px', md: '125px' }}
                  flexShrink="0"
                />
              </chakra.span>
            </Link>
          </chakra.div>
          {/* End of Logo */}

          <NavInput />
          <chakra.ul
            display={{ base: 'none', md: 'flex' }}
            flexFlow="row nowrap"
            justifyContent="flex-end"
            alignItems="center"
            h="90px"
            m="0"
            pr="30px"
          >
            <chakra.li
              {...navListStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NextLink href="/">
                <Link
                  padding={{ md: '8px 1px', xl: '8px' }}
                  fontSize={{ md: 'xs', lg: 'md' }}
                >
                  Browse
                </Link>
              </NextLink>
              <BrowseMenu isOpen={isOpen} browseCategories={browseCategories} />
            </chakra.li>

            <chakra.li {...navListStyle}>
              <NextLink href="news">
                <Link
                  padding={{ md: '8px 1px', xl: '8px' }}
                  fontSize={{ md: 'xs', lg: 'md' }}
                >
                  News
                </Link>
              </NextLink>
            </chakra.li>
            <chakra.li {...navListStyle}>
              <NextLink href="about">
                <Link
                  padding={{ md: '8px 1px', xl: '8px' }}
                  fontSize={{ md: 'xs', lg: 'md' }}
                >
                  About
                </Link>
              </NextLink>
            </chakra.li>
            <chakra.li {...navListStyle}>
              <NextLink href="help">
                <Link
                  padding={{ md: '8px 1px', xl: '8px' }}
                  fontSize={{ md: 'xs', lg: 'md' }}
                >
                  Help
                </Link>
              </NextLink>
            </chakra.li>
            <chakra.li {...navListStyle}>
              <NextLink href="sell">
                <Link
                  padding={{ md: '8px 1px', xl: '8px' }}
                  fontSize={{ md: 'xs', lg: 'md' }}
                >
                  Sell
                </Link>
              </NextLink>
            </chakra.li>

            {!userAuth ? (
              <>
                <chakra.li {...navListStyle}>
                  <NextLink href="/auth/[slug]" as="/auth/login">
                    <Button variant="login">Login</Button>
                  </NextLink>
                </chakra.li>
                <chakra.li {...navListStyle}>
                  <NextLink href="/auth/[slug]" as="/auth/signup">
                    <Button variant="signup">SignUp</Button>
                  </NextLink>
                </chakra.li>
              </>
            ) : (
              <>
                <chakra.li {...navListStyle}>
                  <IconButton
                    bg="none"
                    w="6"
                    aria-label="Message Center Icon"
                    h="42px"
                    minW="auto"
                    mr="0"
                    fontSize="1.25rem"
                    _hover={{
                      bg: 'transparent',
                    }}
                    icon={<Bell />}
                  />
                </chakra.li>
                <chakra.li
                  {...navListStyle}
                  onMouseEnter={() => setAccountDropdown(true)}
                  onMouseLeave={() => setAccountDropdown(false)}
                >
                  <NextLink href="/profile">
                    <Icon as={Account} w="6" h="6" verticalAlign="middle" />
                  </NextLink>
                  {accountDropdown && <AccountMenu />}
                </chakra.li>
              </>
            )}
          </chakra.ul>
        </Flex>
      </chakra.div>
    </NavbarRoot>
  );
};

export default Navbar;
