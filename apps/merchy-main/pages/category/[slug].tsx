import Category from '../../components/common/Category';
import {
  getAllBrowseCategories,
  getBrowseCategoryInfo,
  getInitialCategoryProducts,
} from '../../api';

export async function getStaticProps(context) {
  const allCategories = await getAllBrowseCategories();

  const categoryProducts = await getInitialCategoryProducts(
    context.params.slug
  );

  const categoryInfo = await getBrowseCategoryInfo(context.params.slug);
  const browseCategories = allCategories.data.levelCategories;

  return {
    props: {
      browseCategories,
      initialProducts: categoryProducts,
      categoryInfo: categoryInfo.data,
    },
    revalidate: 200,
  };
}

export async function getStaticPaths() {
  const allCategory = await getAllBrowseCategories();
  const category = [];

  allCategory?.data.levelCategories.map(({ slug: url, children }) => {
    category.push({ params: { slug: url } });
    children?.map(({ slug: url, children }) => {
      category.push({ params: { slug: url } });
      children?.map(({ slug: url }) => {
        category.push({ params: { slug: url } });
      });
    });
  });

  return {
    paths: category,
    fallback: false,
  };
}

export default Category;
