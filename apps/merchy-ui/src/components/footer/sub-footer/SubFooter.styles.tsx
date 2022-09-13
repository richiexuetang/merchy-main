import { Link, List, ListItem } from '@chakra-ui/react';
import styled from 'styled-components';

export const SubFooterList = styled(List)`
  line-height: 1.5rem;
  letter-spacing: 0.004rem;
  list-style-type: none;
  margin-inline-start: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px;

  @media screen and (min-width: 62em) {
    justify-content: flex-start;
  }
`;

export const SubFooterListItem = styled(ListItem)`
  &.first-of-type {
    padding-left: 0px;

    > a {
      padding-left: 0px;
    }
  }
`;

export const SubFooterLink = styled(Link)`
  color: var(--chakra-colors-neutral-white);
  text-transform: uppercase;
  font-size: var(--chakra-fontSizes-xs);
  white-space: nowrap;
  padding-inline: 0.25rem;
  border-color: var(--chakra-colors-neutral-white);
  border-right-width: 1px;
`;

export const FooterAddress = styled.address`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--chakra-colors-neutral-white);
  font-size: var(--chakra-fontSizes-xs);
  margin-top: var(--chakra-space-4);
  margin-bottom: 0px;
  min-width: 195px;
`;
