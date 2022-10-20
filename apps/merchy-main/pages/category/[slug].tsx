import Category from '../../components/common/Category';
import {
  getAllBrowseCategories,
  getBrowseCategoryInfo,
  getAllCategoryPaths,
  getCategoryProducts,
  getProductFilter,
  getCurrentCategoryInfo,
} from '../../api';

export async function getStaticProps(context) {
  const allCategories = await getAllBrowseCategories();

  const categoryProducts = await getCategoryProducts(context.params.slug);

  const verticalBrowseCategories = await getBrowseCategoryInfo(
    context.params.slug
  );

  const attributes = await getProductFilter(context.params.slug);

  const categoryInfo = await getCurrentCategoryInfo(context.params.slug);

  const browseCategories = allCategories.data.categories.edges;

  return {
    props: {
      categoryInfo,
      browseCategories,
      initialProducts: categoryProducts.data.allProducts.edges,
      verticalBrowseCategories:
        verticalBrowseCategories.data.verticalBrowseCategories.edges,
      filterAttributes:
        attributes.data.productFilterAttributes.edges[0].node
          .productattributeSet.edges,
    },
    revalidate: 200,
  };
}

export async function getStaticPaths() {
  const allCategory = await getAllCategoryPaths();
  const category = [];

  allCategory?.data.categories.edges.map(({ node }) => {
    category.push({ params: { slug: node.slug } });
  });

  return {
    paths: category,
    fallback: false,
  };
}

export default Category;
