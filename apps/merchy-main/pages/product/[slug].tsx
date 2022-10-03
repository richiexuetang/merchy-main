import { Product } from '../../components';
import { getProducts, getAllBrowseCategories, getProductInfo } from '../../api';

export async function getStaticProps(context) {
  const { data: productUrls } = await getProducts();

  const { data: allCategories } = await getAllBrowseCategories();

  const { data: productInfo } = await getProductInfo(context.params.slug);

  const browseCategories = allCategories.levelCategories;

  const product = [];

  productUrls.productPages.map(({ slug: url }) => {
    product.push({ product: url });
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
  const allProducts = await getProducts();
  const slug = [];

  allProducts?.data.productPages.map(({ slug: url }) => {
    slug.push({ params: { slug: url } });
  });

  return {
    paths: slug,
    fallback: false,
  };
}

export default Product;
