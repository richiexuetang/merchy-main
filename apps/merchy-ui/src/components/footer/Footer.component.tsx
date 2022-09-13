import { Heading, Divider } from '@chakra-ui/react';
import * as Styled from './Footer.styles';
import { ProductList } from './product-links';
import { SocialLinks } from './social-links';
import { SubFooter } from './sub-footer';

const Footer = () => {
  return (
    <Styled.FooterWrapper>
      <Heading
        fontSize='var(--chakra-fontSizes-3xl)'
        fontWeight={500}
        color='var(--chakra-colors-neutral-white)'
        lineHeight='var(--chakra-lineHeights-3xl)'
        letterSpacing='var(--chakra-letterSpacings-normal)'
        minHeight='0vw'
        marginBottom='var(--chakra-space-7)'
      >
        MerchY. Access the Now.
      </Heading>

      <ProductList />
      <Divider
        borderWidth='0 0 1px'
        paddingTop={6}
        marginBottom={6}
        borderColor='neutral.300'
        orientation='horizontal'
      />

      <Styled.SocialLinksContainer>
        <SocialLinks />
      </Styled.SocialLinksContainer>

      <Styled.SubFooter>
        <SubFooter />
      </Styled.SubFooter>
    </Styled.FooterWrapper>
  );
};
export default Footer;
