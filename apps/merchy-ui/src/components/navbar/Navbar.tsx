import React from 'react';
import * as Styled from './navbar.styles';
import MerchYLogo from '../../assets/svgs/logo.svg';
import { Outlet } from 'react-router-dom';
import { NavMenu } from './nav-menu';
import NavInput from './NavInput';

const Navbar = () => {
  return (
    <>
      <Styled.SiteHeader>
        <Styled.Container>
          {/* Logo */}
          <Styled.NavLogoContainer>
            <Styled.NavLogoLink to="/">
              <Styled.NavLogo>
                <MerchYLogo />
              </Styled.NavLogo>
            </Styled.NavLogoLink>
          </Styled.NavLogoContainer>
          {/* End of Logo */}

          <NavInput />
          <NavMenu />
        </Styled.Container>
      </Styled.SiteHeader>
      <Outlet />
    </>
  );
};

export default Navbar;
