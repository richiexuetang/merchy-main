import styled from 'styled-components';

export const MenuBarNav = styled.nav`
  display: none;

  @media screen and (min-width: 48em) {
    display: initial;
  }
`;

export const MenuBarContainer = styled.div`
  background-color: var(--chakra-colors-beige-100);
  justify-content: space-between;
  overflow-x: auto;
`;

export const MenuBarList = styled.ul`
  display: flex;
  width: 1296px;
  height: 48px;
  justify-content: center;

  @media screen and (min-width: 48em) {
    margin: 0 1rem;
  }

  @media screen and (min-width: 62em) {
    margin: auto;
  }
`;

export const MenuBarListItem = styled.li`
  display: flex;
  font-family: 'var(--chakra-fonts-suisseIntlMedium)';
  font-weight: 700;
  align-items: center;
  letter-spacing: 0.5px;

  @media screen and (min-width: 48em) {
    margin: 0 16px;
  }

  @media screen and (min-width: 62em) {
    font-size: 19px;
  }
`;