import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  position: relative;
  z-index: 2;
  padding-inline: var(--chakra-space-4);
  padding-top: var(--chakra-space-6);
  padding-bottom: 0px;
  background: var(--chakra-colors-neutral-700);
  overflow-x: hidden;
  overflow-y: hidden;

  @media screen and (min-width: 48em) {
    padding-inline: var(--chakra-space-6);
  }

  @media screen and (min-width: 62em) {
    padding-inline: var(--chakra-space-8);
    padding-top: var(--chakra-space-8);
  }

  .div {
    max-width: 1296px;
    margin-inline: auto;
  }
`;

export const SocialLinksContainer = styled.div`
  margin-inline: auto;
  margin-bottom: var(--chakra-space-4);
  width: 100%;
`;

export const SubFooter = styled.div`
  background: var(--chakra-colors-neutral-black);
  left: 50%;
  padding-bottom: 0px;
  padding-inline: var(--charka-space-4);
  position: relative;
  right: 50%;
  margin-inline: -50vw;
  width: 100vw;

  @media screen and (min-width: 48em) {
    padding-inline: var(--chakra-space-6);
  }

  @media screen and (min-width: 62em) {
    padding-inline: var(--chakra-space-8);
  }
`;
