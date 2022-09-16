import { Link as ChakraLink } from '@chakra-ui/react';
import * as Styled from './ProductLinks.styles';
import Link from 'next/link';

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
                <ChakraLink
                  key={index}
                  color="neutral.white"
                  as={Link}
                  href={item.url}
                >
                  {item.title}
                </ChakraLink>
              </Styled.TopListItem>
            </li>
          );
        } else {
          return (
            <Styled.ProductListItem
              lineHeight="1.5rem"
              letterSpacing="0.004rem"
              marginInlineStart="1em"
              margin={0}
            >
              <ChakraLink
                color="var(--chakra-colors-neutral-white)"
                as={Link}
                href={item.url}
              >
                {item.title}
              </ChakraLink>
            </Styled.ProductListItem>
          );
        }
      })}
    </>
  );
};

export default ProductListItem;
