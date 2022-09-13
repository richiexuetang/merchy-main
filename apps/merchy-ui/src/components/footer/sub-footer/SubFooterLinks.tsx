import { Link as ReachLink } from 'react-router-dom';
import { subFooterLinkData } from '../../../data';
import * as Styled from './SubFooter.styles';

interface SubFooterLinksProps {
  category: string;
}

const SubFooterLinks: React.FC<SubFooterLinksProps> = ({ category }) => {
  let categoryData = subFooterLinkData.language;
  if (category === 'informational') {
    categoryData = subFooterLinkData.informational;
  }

  return (
    <>
      <Styled.SubFooterList>
        {categoryData.map((data, index) => {
          return (
            <Styled.SubFooterListItem key={index}>
              <Styled.SubFooterLink as={ReachLink} to={data.url}>
                {data.title}
              </Styled.SubFooterLink>
            </Styled.SubFooterListItem>
          );
        })}
      </Styled.SubFooterList>
    </>
  );
};

export default SubFooterLinks;
