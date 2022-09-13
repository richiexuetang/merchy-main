import { Product } from '../../../data';
import ProductCard from './ProductCard.component';

interface ProductCardsProps {
  products: Product[];
}

const ProductCards: React.FC<ProductCardsProps> = ({ products }) => {
  return (
    <>
      {products.map((product, index) => {
        return (
          <li data-component='product-card'>
            <ProductCard product={product} key={index} />
          </li>
        );
      })}
    </>
  );
};

export default ProductCards;
