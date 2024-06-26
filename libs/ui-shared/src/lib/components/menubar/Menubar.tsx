import * as Styled from './Menubar.styles';
import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

const Menubar = () => {
  return (
    <Styled.MenuBarNav>
      <Styled.MenuBarContainer>
        <Styled.MenuBarList>
          <Styled.MenuBarListItem>
            <ChakraLink
              as={Link}
              href="/sneakers"
              fontSize={{ base: '16px', lg: '18px' }}
            >
              Sneakers
            </ChakraLink>
          </Styled.MenuBarListItem>
          {/* <Styled.MenuBarListItem>
            <Link as={ReachLink} to="/apparel">
              Apparel
            </Link>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Link as={ReachLink} to="/sneakers">
              Electronics
            </Link>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Link as={ReachLink} to="/sneakers">
              Trading Cards
            </Link>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Link as={ReachLink} to="/sneakers">
              Collectibles
            </Link>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Link as={ReachLink} to="/sneakers">
              Accessories
            </Link>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Link as={ReachLink} to="/sneakers">
              NFTs
            </Link>
          </Styled.MenuBarListItem> */}
        </Styled.MenuBarList>
      </Styled.MenuBarContainer>
    </Styled.MenuBarNav>
  );
};

export default Menubar;
