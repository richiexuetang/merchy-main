import { Buy } from '../../components';
import { getProductPaths, getAllBrowseCategories } from '../../api';
import { gql } from '@apollo/client';
import client from '../api/graphql';

export const GetBuyProductInfo = gql`
  query productBySlug($productSlug: String!) {
    productBySlug(productSlug: $productSlug) {
      primaryTitle
      secondaryTitle
      media {
        imageUrl
      }
      market {
        highestBid
        lowestAsk
      }
    }
  }
`;

export const getBuyProductInfo = async (slug) => {
  return await client.query({
    query: GetBuyProductInfo,
    variables: {
      productSlug: slug,
    },
  });
};

export async function getStaticProps(context) {
  const allCategories = await getAllBrowseCategories();

  const { data: productInfo } = await getBuyProductInfo(context.params.slug);

  const browseCategories = allCategories.data.categories.edges;

  return {
    props: {
      browseCategories,
      buyProductInfo: productInfo.productBySlug,
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
