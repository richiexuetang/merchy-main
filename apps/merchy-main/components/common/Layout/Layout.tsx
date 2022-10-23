import { Footer, Navbar } from '../..';
import { chakra } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { BrowseCategory } from '../../../types';
import client from '../../../pages/api/graphql';

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

export const Layout: React.FC<Props> = ({ children, pageProps }) => {
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
          {children}
        </chakra.main>
        <Footer />
      </chakra.div>
    </ApolloProvider>
  );
};

export const getLayout = (page, pageProps) => (
  <Layout pageProps={pageProps}>{page}</Layout>
);
