/* eslint-disable react/jsx-key */
import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import { ProductCard } from '../components/ProductCard';

const AllProductsQuery = gql`
  query allProductsQuery($first: Int, $after: String) {
    products(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          imageUrl
          urlKey
          title
          primaryCategory
          description
          id
        }
      }
    }
  }
`;

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(AllProductsQuery, {
    variables: { first: 3 },
  });

  if (loading) return <p> Loading... </p>;
  if (error) return <p>Something went wrong when getting product data</p>;

  const { endCursor, hasNextPage } = data?.products.pageInfo;

  return (
    <div>
      <Head>
        <title>Merchy Admin Tool</title>
      </Head>
      <div className="container mx-auto max-w-5xl my-20 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.products.edges.map(({ node }: any, i: any) => (
            <ProductCard
              title={node.title}
              primaryCategory={node.primaryCategory}
              urlKey={node.urlKey}
              id={node.id}
              description={node.description}
              imageUrl={node.imageUrl}
              key={i}
            />
          ))}
        </div>
        {hasNextPage ? (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded my-10"
            onClick={() => {
              fetchMore({
                variables: { after: endCursor },
              });
            }}
          >
            More
          </button>
        ) : (
          <p className="my-10 text-center font-medium">
            You have reached the end!
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
