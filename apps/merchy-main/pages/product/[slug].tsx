import { Product } from '../../components';
import {
  getProductPaths,
  getAllBrowseCategories,
  getProductInfo,
} from '../../api';

export async function getStaticProps(context) {
  const allCategories = await getAllBrowseCategories();
  const { data } = await getProductInfo(context.params.slug);

  console.log('data', data);
  const browseCategories = allCategories.data.categories.edges;

  return {
    props: {
      browseCategories,
      productInfo: data,
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
