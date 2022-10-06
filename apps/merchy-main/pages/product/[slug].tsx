import { Product } from '../../components';
import {
  getProductPaths,
  getAllBrowseCategories,
  getProductInfo,
} from '../../api';

export async function getStaticProps(context) {
  const { data: productUrls } = await getProductPaths();

  const allCategories = await getAllBrowseCategories();

  const { data: productInfo } = await getProductInfo(context.params.slug);

  console.log('productInfo', productInfo);

  const browseCategories = allCategories.data.categories.edges;

  const product = [];

  productUrls.products.edges.map(({ node }) => {
    product.push({ product: node.slug });
  });

  return {
    props: {
      product,
      browseCategories,
      productInfo,
    },
    revalidate: 200,
  };
}

export async function getStaticPaths() {
  const allProducts = await getProductPaths();
  const paths = [];

  allProducts.data.products.edges.map(({ node }) => {
    paths.push({ params: { slug: node.slug } });
  });
  console.log('paths', paths);

  return {
    paths,
    fallback: false,
  };
}

export default Product;
