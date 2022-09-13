import styled from 'styled-components';
import { Flex, Button } from '@chakra-ui/react';

export const FlexContainer = styled(Flex)`
  flex-flow: column wrap;
  justify-content: space-between;

  @media screen and (min-width: 48em) {
    flex-direction: row;
  }
`;

export const LRCContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: inherit;
  margin-bottom: 1rem;

  @media screen and (min-width: 48em) {
    flex: 1 1 100%;
  }

  @media screen and (min-width: 62em) {
    justify-content: flex-start;
    flex: inherit;
    margin-bottom: inherit;
  }
`;

export const LRCButton = styled(Button)`
  line-height: 1.375;
  border-radius: 0px !important;
  height: 42px;

  font-size: var(--chakra-fontSizes-md);
  font-style: normal;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;

  min-width: auto;
  background: transparent !important;
  color: var(--chakra-colors-neutral-white);
  border: 1px solid rgb(255, 255, 255) !important;
`;
