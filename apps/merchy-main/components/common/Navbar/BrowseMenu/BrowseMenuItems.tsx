import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import s from './Dropdown.module.css';
import { clsx } from 'clsx';
import NextLink from 'next/link';
import { chakra, Link } from '@chakra-ui/react';

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
    <chakra.li
      _hover={{
        borderRightColor: 'green.700',
        bg: 'neutral.200',
      }}
      className={clsx(depthLevel > 0 && s.menuList)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.children && items.urlKey ? (
        <React.Fragment>
          <NextLink href={items.urlKey}>
            <Link
              padding="8px"
              _hover={{
                borderStyle: 'solid',
                borderRight: '1px solid #006340',
              }}
            >
              {items.name}
            </Link>
          </NextLink>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.children}
            dropdown={dropdown}
          />
        </React.Fragment>
      ) : (
        <NextLink href={items.urlKey}>
          <Link
            padding="8px"
            _hover={{
              borderStyle: 'solid',
              borderRight: '1px solid #006340',
            }}
          >
            {items.name}
          </Link>
        </NextLink>
      )}
    </chakra.li>
  );
};
export default BrowseMenuItems;
