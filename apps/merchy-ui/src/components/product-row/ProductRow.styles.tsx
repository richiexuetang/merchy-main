import styled from 'styled-components';

export const ProductRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--chakra-space-6);
  margin-bottom: var(--chakra-space-4);
`;

export const SmartGridRow = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  list-style-type: none;
  margin-bottom: var(--chakra-space-6);
  margin-inline: calc(var(--chakra-space-4) * -1);
  padding-inline: var(--chakra-space-4);
  overflow: auto;
  grid-gap: 1.5rem;
`;

export const SmartGridWrapper = styled.div`
  border-radius: 3px;
  min-width: 141px;
  height: auto;
  position: relative;
  margin-right: 0px;
`;

export const SmartGridProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-color: var(--chakra-colors-neutral-200);
`;

export const SmartGridProductInnerDiv1 = styled.div`
  display: flex;
  justify-content: center;
  width: 140px;
  height: 75px;
  max-width: 100%;
  margin: 0px auto;
`;

export const SmartGridProductInnerDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--chakra-space-2);
  text-align: left;
  position: relative;
`;

export const SmartGridProductInnerDiv2Child1 = styled.div`
  justify-content: space-between;
  height: 100%;
`;

export const SmartGridProductInnerDiv2Child2 = styled.div`
  display: flex;
  margin-top: var(--chakra-space-1);
`;
