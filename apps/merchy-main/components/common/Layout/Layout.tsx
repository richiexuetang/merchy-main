import { Footer, Navbar } from '../..';
import { chakra } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowseCategory } from '../../../types';

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
  children: React.ReactNode;
  pageProps: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pages?: any;
    browseCategories?: BrowseCategory[];
  };
}

const Layout: React.FC<Props> = ({ children, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <chakra.div minH="100vh">
        <Navbar browseCategories={pageProps.browseCategories} />
        <chakra.main
          minH="100vh"
          mt="0px"
          display="block"
          role="main"
          data-component="Main"
        >
          <chakra.div pt={{ base: 'initial', md: '0' }}>{children}</chakra.div>
        </chakra.main>
        <Footer />
      </chakra.div>
    </ApolloProvider>
  );
};

export const getLayout = (page, pageProps) => (
  <Layout pageProps={pageProps}>{page}</Layout>
);

export default Layout;
