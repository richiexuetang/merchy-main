// import dynamic from 'next/dynamic';
import { Footer, MenuBar, Navbar } from '../..';
import { chakra } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowseCategory } from 'apps/merchy-main/types';

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
  const levelOneCategories = [];

  pageProps.browseCategories?.map(({ name, urlKey }) => {
    levelOneCategories.push({ name: name, urlKey: urlKey });
  });

  return (
    <ApolloProvider client={client}>
      <chakra.div minH="100vh">
        <Navbar browseCategories={pageProps.browseCategories} />
        <MenuBar levelOneCategories={levelOneCategories} />
        <main>{children}</main>
        <Footer />
      </chakra.div>
    </ApolloProvider>
  );
};

export const getLayout = (page, pageProps) => (
  <Layout pageProps={pageProps}>{page}</Layout>
);

export default Layout;
