import * as Styled from './Menubar.styles';
import { Link as ReachLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

const Menubar = () => {
  return (
    <Styled.MenuBarNav>
      <Styled.MenuBarContainer>
        <Styled.MenuBarList>
          <Styled.MenuBarListItem>
            <Link as={ReachLink} to='/sneakers' h='26px'>
              Sneakers
            </Link>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Link as={ReachLink} to='/apparel'>
              Apparel
            </Link>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Link as={ReachLink} to='/sneakers'>
              Electronics
            </Link>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Link as={ReachLink} to='/sneakers'>
              Trading Cards
            </Link>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Link as={ReachLink} to='/sneakers'>
              Collectibles
            </Link>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Link as={ReachLink} to='/sneakers'>
              Accessories
            </Link>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Link as={ReachLink} to='/sneakers'>
              NFTs
            </Link>
          </Styled.MenuBarListItem>
        </Styled.MenuBarList>
      </Styled.MenuBarContainer>
    </Styled.MenuBarNav>
  );
};

export default Menubar;
