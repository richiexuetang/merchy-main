import React, { useState, useEffect, useRef } from 'react';
import { MenuItem } from '../../../data/navMenuItems';
import Dropdown from './Dropdown';
import './index.css';
import * as Styled from '../navbar.styles';
import { NotificationsNone } from '@mui/icons-material';
import { Button, IconButton, Text, chakra } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export interface NavMenuItemsProps {
  items: MenuItem;
  depthLevel: number;
}

const NavMenuItems: React.FC<NavMenuItemsProps> = ({ items, depthLevel }) => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current?.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
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

  if (items.type === 'icon') {
    return (
      <li>
        <IconButton
          bg='none'
          w='1.5rem'
          aria-label='Notification Icon'
          h='42px'
          minW='auto'
          marginRight='1.0rem'
          _hover={{
            bg: 'transparent',
          }}
          icon={
            <>
              <NotificationsNone display='inline-block' />
              <chakra.span
                pos='absolute'
                top='-1px'
                right='-1px'
                p='4px'
                fontSize='xs'
                fontWeight='bold'
                lineHeight='none'
                color='green.700'
                transform='translate(-50%,160%)'
                bg='green.700'
                rounded='full'
              />
            </>
          }
        />
      </li>
    );
  } else if (items.type === 'button') {
    return (
      <li>
        {items.url === 'login' ? (
          <Button
            onClick={() => navigate('/login')}
            type='button'
            display='inline-flex'
            borderRadius={0}
            variant='outline'
            _hover={{ bgColor: 'neutral.black', color: 'neutral.white' }}
          >
            <Text lineHeight='md' fontSize='md' letterSpacing='0.004rem'>
              {items.title}
            </Text>
          </Button>
        ) : (
          <Button
            onClick={() => navigate('/signup')}
            type='button'
            borderRadius={0}
            appearance='none'
            variant='solid'
            bg='neutral.600'
            color='neutral.black'
            _hover={{ bg: 'neutral.black', color: 'neutral.200' }}
          >
            <Text
              color='neutral.white'
              lineHeight='md'
              fontSize='md'
              letterSpacing='0.004rem'
            >
              {items.title}
            </Text>
          </Button>
        )}
      </li>
    );
  }

  return (
    <li
      className={`${depthLevel > 0 ? 'menu-list' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.submenu && items.url ? (
        <React.Fragment>
          <Styled.MenuLink to={items.url}>{items.title}</Styled.MenuLink>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </React.Fragment>
      ) : (
        <Styled.MenuLink to={items.url}>{items.title}</Styled.MenuLink>
      )}
    </li>
  );
};
export default NavMenuItems;
