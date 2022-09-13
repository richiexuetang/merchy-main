import { Link } from '@chakra-ui/react';
import * as Styled from './ProductLinks.styles';
import { Link as ReachLink } from 'react-router-dom';

interface ProductListItems {
  title: string;
  url: string;
  top?: boolean;
}

interface ProductListItemProps {
  items: ProductListItems[];
}

const ProductListItem: React.FC<ProductListItemProps> = ({ items }) => {
  return (
    <>
      {items.map((item: ProductListItems, index) => {
        if (item.top) {
          return (
            <li>
              <Styled.TopListItem>
                <Link color='neutral.white' as={ReachLink} to={item.url}>
                  {item.title}
                </Link>
              </Styled.TopListItem>
            </li>
          );
        } else {
          return (
            <Styled.ProductListItem
              key={index}
              lineHeight='1.5rem'
              letterSpacing='0.004rem'
              marginInlineStart='1em'
              margin={0}
            >
              <Link
                color='var(--chakra-colors-neutral-white)'
                as={ReachLink}
                to={item.url}
              >
                {item.title}
              </Link>
            </Styled.ProductListItem>
          );
        }
      })}
    </>
  );
};

export default ProductListItem;
