import { Account, Bell, Logo } from '../../icons';
import { BrowseMenu } from './BrowseMenu';
import NavInput from './NavInput';
import { Flex, Icon, Link, Button, Box } from '@chakra-ui/react';
import { useState } from 'react';
import NavbarRoot from './NavbarRoot';
import NextLink from 'next/link';
import { BrowseCategory } from '../../../types';
import { useSelector } from 'react-redux';
import { AccountMenu } from '../../ui';
import { RootState } from '../../../store/store';
import { useRouter } from 'next/router';
import {
  NavListItem,
  LogoIcon,
  LogoSpan,
  NavList,
  NavLink,
  NavIconButton,
} from '../../../styles';
import { CustomBox } from '../../../styles/boxStyles';

interface NavbarProps {
  browseCategories: BrowseCategory[];
}

const Navbar: React.FC<NavbarProps> = ({ browseCategories }) => {
  const userAuth = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [accountDropdown, setAccountDropdown] = useState<boolean>(false);

  return (
    <NavbarRoot>
      <Box pos="sticky" zIndex="1030" top={0} bg="white">
        <Flex minH="48px" justify="space-between" align="center">
          <CustomBox variant="inlineBlock">
            <Link display={{ base: 'none', md: 'block' }} href="/">
              <LogoSpan>
                <LogoIcon as={Logo} />
              </LogoSpan>
            </Link>
          </CustomBox>

          <NavInput />
          <NavList>
            <NavListItem
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <NextLink href="/sneakers">
                <NavLink>Browse</NavLink>
              </NextLink>
              <BrowseMenu isOpen={isOpen} browseCategories={browseCategories} />
            </NavListItem>

            <NavListItem>
              <NextLink href="/about">
                <NavLink>About</NavLink>
              </NextLink>
            </NavListItem>
            <NavListItem>
              <NextLink href="/help">
                <NavLink>Help</NavLink>
              </NextLink>
            </NavListItem>

            <NavListItem>
              <NextLink href="/sell">
                <NavLink>Sell</NavLink>
              </NextLink>
            </NavListItem>

            {!userAuth ? (
              <>
                <NavListItem>
                  <NextLink href="/auth/[slug]" as="/auth/login">
                    <Button variant="login">Login</Button>
                  </NextLink>
                </NavListItem>
                <NavListItem>
                  <NextLink href="/auth/[slug]" as="/auth/signup">
                    <Button variant="signup">SignUp</Button>
                  </NextLink>
                </NavListItem>
              </>
            ) : (
              <>
                <NavListItem>
                  <NavIconButton
                    aria-label="Message Center Icon"
                    icon={<Bell />}
                  />
                </NavListItem>
                <NavListItem
                  onMouseEnter={() => setAccountDropdown(true)}
                  onMouseLeave={() => setAccountDropdown(false)}
                  onClick={() => router.push('/account/profile')}
                >
                  <Icon as={Account} w="6" h="6" verticalAlign="middle" />
                  {accountDropdown && <AccountMenu />}
                </NavListItem>
              </>
            )}
          </NavList>
        </Flex>
      </Box>
    </NavbarRoot>
  );
};

export default Navbar;
