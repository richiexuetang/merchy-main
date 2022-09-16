import { getLayout } from '../components';
import type { NextPageWithLayout } from './_app';
import { gql } from '@apollo/client';
import { getStandaloneApolloClient } from '../utils';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const ProductCollection = gql`
  query (
    $productCategory: String!
    $take: Int
    $orderBy: ProductOrderByInputType
  ) {
    productCollection(
      productCategory: $productCategory
      take: $take
      orderBy: $orderBy
    ) {
      name
      imageUrl
      price
    }
  }
`;

export const getStaticProps: GetStaticProps = async (context) => {
  const client = await getStandaloneApolloClient();

  const products = await client.query({
    query: ProductCollection,
    variables: {
      productCategory: 'sneakers',
      take: 6,
      orderBy: { price: 'asc' },
    },
  });

  return {
    props: { products: products },
    revalidate: 60,
  };
};

const Home: NextPageWithLayout = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const productCollection = products?.data.productCollection;

  console.log('products from getStatic Props:', productCollection);

  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome merchy-main 👋
          </h1>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = getLayout;

export default Home;
