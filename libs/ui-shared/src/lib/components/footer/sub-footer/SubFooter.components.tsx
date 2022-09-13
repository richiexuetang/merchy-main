import { Flex, Spacer, VStack } from '@chakra-ui/react';
import * as Styled from './SubFooter.styles';
import { SubFooterLinks } from './index';

const SubFooter = () => {
  return (
    <Flex
      padding='2rem 0'
      justifyContent='space-between'
      marginInline='auto'
      maxWidth='1296px'
    >
      <VStack>
        <SubFooterLinks category='informational' />
        <SubFooterLinks category='language' />
      </VStack>

      <Spacer />
      <Styled.FooterAddress>
        @2022 MerchY. All Rights Reserved.
      </Styled.FooterAddress>
    </Flex>
  );
};
export default SubFooter;
