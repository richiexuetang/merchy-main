import styled from 'styled-components';
import { SimpleGrid, List, ListItem } from '@chakra-ui/react';

export const ListGrid = styled(SimpleGrid)`
  grid-gap: var(--chakra-space-6);
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 48em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 62em) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const ProductList = styled(List)`
  line-height: 1.5rem;
  letter-spacing: 0.004rem;
  list-style-type: none;
  margin-inline-start: 1em;
  margin: 0px;
`;

export const TopListItem = styled.h3`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1rem;
  min-height: 0vw;
  margin-bottom: 0.5rem;
`;

export const ProductListItem = styled(ListItem)`
  line-height: var(--chakra-lineHeights-4);
  margin-bottom: var(--chakra-space-2);
  font-size: var(--chakra-fontSizes-xs);
`;
