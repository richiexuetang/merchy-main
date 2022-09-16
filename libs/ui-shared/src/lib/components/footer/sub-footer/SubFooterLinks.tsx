import Link from 'next/link';
import { subFooterLinkData } from '../../../data';
import * as Styled from './SubFooter.styles';
import { Link as ChakraLink } from '@chakra-ui/react';

interface SubFooterLinksProps {
  category: string;
}

const SubFooterLinks: React.FC<SubFooterLinksProps> = ({ category }) => {
  let categoryData = subFooterLinkData.language;
  if (category === 'informational') {
    categoryData = subFooterLinkData.informational;
  }

  return (
    <Styled.SubFooterList>
      {categoryData.map((data, index) => {
        return (
          <Styled.SubFooterListItem key={index}>
            <ChakraLink as={Link} href={data.url}>
              {data.title}
            </ChakraLink>
          </Styled.SubFooterListItem>
        );
      })}
    </Styled.SubFooterList>
  );
};

export default SubFooterLinks;
