// import dynamic from 'next/dynamic';
import { MenuBar, Navbar } from '../..';
import { chakra } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3333/api/graphql',
  cache: new InMemoryCache(),
});

// const Loading = () => {
//   <div>Loading...</div>;
// };

// const dynamicProps = {
//   loading: Loading,
// };

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  // pageProps: {
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   pages?: any;
  // };
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <chakra.div minH="100vh">
        <Navbar />
        <MenuBar />
        <main>{children}</main>
      </chakra.div>
    </ApolloProvider>
  );
};

export const getLayout = (page) => <Layout>{page}</Layout>;

export default Layout;
