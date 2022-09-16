import { productLinkData } from '../../../data';
import ProductListItem from './ProductListItem';
import * as Styled from './ProductLinks.styles';

const ProductList = () => {
  return (
    <>
      <Styled.ListGrid>
        {productLinkData.map((productList, index) => {
          return (
            <Styled.ProductList key={index}>
              <ProductListItem key={index + 69} items={productList} />
            </Styled.ProductList>
          );
        })}
      </Styled.ListGrid>
    </>
  );
};
export default ProductList;
