import { ReactComponent as MerchYLogo } from '../../assets/svgs/logo.svg';
import { useRouter } from 'next/router';
import { BrowseMenu } from './nav-menu';
import NavInput from './NavInput';
import { chakra, Flex, Icon, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import * as Styled from './Navbar.styles';
import { useRef, useState, useEffect } from 'react';
import { MessageCenterIcon } from '@merchy/ui-shared';

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
    <chakra.div pos="sticky" zIndex="1030" top={0} bg="white">
      <Flex minH="48px" justify="space-between" align="center">
        {/* Logo */}
        <chakra.div display={{ base: 'none', md: 'inline-block' }}>
          <Link to="/">
            <chakra.span
              display={{ base: 'flex', md: 'block' }}
              margin={{ base: 'auto 0px', md: 'auto 2.5rem' }}
            >
              <Icon
                as={MerchYLogo}
                h="auto"
                w={{ base: '95px', md: '125px' }}
                flexShrink="0"
              />
            </chakra.span>
          </Link>
        </chakra.div>
        {/* End of Logo */}

        <NavInput />
        <Styled.MenuWrapper>
          <chakra.li
            {...navListStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Styled.MenuLink to="sneakers">Browse</Styled.MenuLink>
            <BrowseMenu isOpen={isOpen} />
          </chakra.li>

          <chakra.li {...navListStyle}>
            <Styled.MenuLink to="news">News</Styled.MenuLink>
          </chakra.li>

          <chakra.li {...navListStyle}>
            <Styled.MenuLink to="about">About</Styled.MenuLink>
          </chakra.li>

          <chakra.li {...navListStyle}>
            <Styled.MenuLink to="help">Help</Styled.MenuLink>
          </chakra.li>

          <chakra.li {...navListStyle}>
            <Styled.MenuLink to="sell">Sell</Styled.MenuLink>
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
        </Styled.MenuWrapper>
      </Flex>
    </chakra.div>
  );
};

export default Navbar;
