import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import './index.css';
import * as Styled from '../Navbar.styles';

const BrowseMenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handler = (event: React.SyntheticEvent) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current?.contains(event.target as HTMLInputElement)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', () => handler);
    document.addEventListener('touchstart', () => handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', () => handler);
      document.removeEventListener('touchstart', () => handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className={`${depthLevel > 0 ? 'menu-list' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.children && items.urlKey ? (
        <React.Fragment>
          <Styled.MenuLink to={items.urlKey}>{items.name}</Styled.MenuLink>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.children}
            dropdown={dropdown}
          />
        </React.Fragment>
      ) : (
        <Styled.MenuLink to={items.urlKey}>{items.name}</Styled.MenuLink>
      )}
    </li>
  );
};
export default BrowseMenuItems;
