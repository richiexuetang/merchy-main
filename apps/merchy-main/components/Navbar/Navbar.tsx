import { Logo } from '../icons';
import { useRouter } from 'next/router';
import { BrowseMenu } from './BrowseMenu';
import NavInput from './NavInput';
import { chakra, Flex, Icon, Button, Link } from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import { MessageCenterIcon } from '@merchy/ui-shared';
import NavbarRoot from './NavbarRoot';
import NextLink from 'next/link';

const navListStyle = {
  pos: 'relative',
  m: { base: '0', md: '0 2px', lg: '0 4px' },
  fontWeight: '500',
  whiteSpace: 'nowrap',
} as const;

const Navbar = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);

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
              <NextLink href="sneakers">
                <Link
                  padding={{ md: '8px 1px', xl: '8px' }}
                  fontSize={{ md: 'xs', lg: 'md' }}
                >
                  Browse
                </Link>
              </NextLink>
              <BrowseMenu isOpen={isOpen} />
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

            <chakra.li {...navListStyle}>
              <MessageCenterIcon />
            </chakra.li>
            <chakra.li {...navListStyle}>
              <Button onClick={() => router.push('/login')} variant="login">
                Login
              </Button>
            </chakra.li>
            <chakra.li {...navListStyle}>
              <Button onClick={() => router.push('/signup')} variant="signup">
                SignUp
              </Button>
            </chakra.li>
          </chakra.ul>
        </Flex>
      </chakra.div>
    </NavbarRoot>
  );
};

export default Navbar;
