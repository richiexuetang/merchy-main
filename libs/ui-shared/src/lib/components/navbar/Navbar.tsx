import { ReactComponent as MerchYLogo } from '../../assets/svgs/logo.svg';
import { Outlet } from 'react-router-dom';
import { NavMenu } from './nav-menu';
import NavInput from './NavInput';
import { chakra, Flex, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
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
          <NavMenu />
        </Flex>
      </chakra.div>
      <Outlet />
    </>
  );
};

export default Navbar;
