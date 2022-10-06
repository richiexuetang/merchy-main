import { Product } from '../../components';
import {
  getProductPaths,
  getAllBrowseCategories,
  getProductInfo,
} from '../../api';

export async function getStaticProps(context) {
  const allCategories = await getAllBrowseCategories();
  const { data: productInfo } = await getProductInfo(context.params.slug);

  const browseCategories = allCategories.data.categories.edges;

  return {
    props: {
      browseCategories,
      productInfo: productInfo.productBySlug,
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

  return {
    paths,
    fallback: false,
  };
}

export default Product;
