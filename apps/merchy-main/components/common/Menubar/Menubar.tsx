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
          <Styled.MenuBarListItem>
            <ChakraLink as={Link} href="/apparel">
              Apparel
            </ChakraLink>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <ChakraLink as={Link} href="/sneakers">
              Electronics
            </ChakraLink>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <ChakraLink as={Link} href="/sneakers">
              Trading Cards
            </ChakraLink>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <ChakraLink as={Link} href="/sneakers">
              Collectibles
            </ChakraLink>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <ChakraLink as={Link} href="/sneakers">
              Accessories
            </ChakraLink>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <ChakraLink as={Link} href="/sneakers">
              NFTs
            </ChakraLink>
          </Styled.MenuBarListItem>
        </Styled.MenuBarList>
      </Styled.MenuBarContainer>
    </Styled.MenuBarNav>
  );
};

export default Menubar;
