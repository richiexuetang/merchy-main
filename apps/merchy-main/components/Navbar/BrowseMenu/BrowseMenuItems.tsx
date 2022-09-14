import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import './index.module.css';
import * as Styled from '../Navbar.styles.module';
import { clsx } from 'clsx';

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

  return (
    <li
      className={clsx(depthLevel > 0 && 'menu-list')}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.children && items.urlKey ? (
        <React.Fragment>
          <Styled.MenuLink href={items.urlKey}>{items.name}</Styled.MenuLink>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.children}
            dropdown={dropdown}
          />
        </React.Fragment>
      ) : (
        <Styled.MenuLink href={items.urlKey}>{items.name}</Styled.MenuLink>
      )}
    </li>
  );
};
export default BrowseMenuItems;
