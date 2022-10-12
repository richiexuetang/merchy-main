import { Buy } from '../../components';
import { getProductPaths, getAllBrowseCategories } from '../../api';

export async function getStaticProps() {
  const allCategories = await getAllBrowseCategories();

  const browseCategories = allCategories.data.categories.edges;

  return {
    props: {
      browseCategories,
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

export default Buy;
