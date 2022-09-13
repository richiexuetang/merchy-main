import { productLinkData } from '../../../data';
import { Outlet } from 'react-router-dom';
import ProductListItem from './ProductListItem';
import * as Styled from './ProductLinks.styles';

const ProductList = () => {
  return (
    <>
      <Styled.ListGrid>
        {productLinkData.map((productList, index) => {
          return (
            <Styled.ProductList key={index}>
              <ProductListItem items={productList} />
            </Styled.ProductList>
          );
        })}
      </Styled.ListGrid>
      <Outlet />
    </>
  );
};
export default ProductList;
