import { useRouter } from 'next/router';
import { getLayout } from '../Layout';

const Product = () => {
  const router = useRouter();

  const { product } = router.query;

  return <div>Product Page</div>;
};

Product.getLayout = getLayout;

export default Product;
