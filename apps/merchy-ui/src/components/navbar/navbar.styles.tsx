import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const MenuItem = styled.li`
  position: relative;
  margin: 0px 4px;
  white-space: nowrap;
  font-weight: 500;
  text-transform: capitalize;
  list-style: none;

  @media only screen and (min-width: 48em) {
    margin: 0 2px;
    &:hover {
      border: none;
    }
  }

  @media only screen and (min-width: 62em) {
    margin: 0 4px;
    &:hover {
      border: none;
    }
  }

  > a {
    display: block;
    border-style: solid;

    @media only screen and (min-width: 48em) {
      padding: 8px 1px;
      font-size: 0.75rem;
    }

    @media only screen and (min-width: 62em) {
      font-size: 1rem;
    }

    @media only screen and (min-width: 80em) {
      padding: 8px;
    }

    &:hover {
      > ul {
        display: block;
      }
      border-right: 2px solid #006340;
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

export const MenuList = styled.li`
  font-weight: 400;
  border-right: 2px solid transparent;
  cursor: pointer;
  padding-inline: 8px;

  @media screen and (min-width: 48em) {
    min-width: 115px;
    font-size: var(--chakra-fontSizes-sm);
  }

  @media screen and (min-width: 62em) {
    min-width: 132px;
    font-size: var(--chakra-fontSizes-sm);
  }

  @media screen and (min-width: 80em) {
    min-width: 160px;
    font-size: var(--chakra-fontSizes-md);
  }
`;
//#endregion
