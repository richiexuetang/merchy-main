import styled from '@emotion/styled';
import Link from 'next/link';

//#region Navbar Menu styling
export const MenuWrapper = styled.ul`
  display: none;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 90px;
  margin: 0px;
  padding-right: 30px;

  @media screen and (min-width: 48em) {
    display: flex;
  }

  li:hover {
    > ul {
      display: block;
    }
  }

  > li {
    position: relative;
    white-space: nowrap;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0;

    > a {
      color: '#242424';
    }

    &.hover {
      > ul {
        display: block;
      }
    }

    @media screen and (min-width: 48em) {
      margin: 0 2px;

      a {
        padding: 8px 1px;
        font-size: 0.75rem;
      }
    }

    @media screen and (min-width: 62em) {
      margin: 0 4px;

      a {
        font-size: 1rem;
      }
    }

    @media screen and (min-width: 80em) {
      margin: 0 4px;

      a {
        padding: 8px;
      }
    }
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: #242424;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 100%;
  transition: all 0.2s ease;

  @media only screen and (max-width: 80em) {
    display: block;
    padding: 8px;
    text-align: center;
    transition: all 0.2s ease;
  }

  @media only screen and (max-width: 62em) {
    font-size: var(--chakra-fontSizes-md);
  }

  > li {
    display: block;
  }
`;
//#endregion
