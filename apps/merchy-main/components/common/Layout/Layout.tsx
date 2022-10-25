import { Footer, Navbar } from '../..';
import { chakra } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { BrowseCategory } from '../../../types';
import client from '../../../pages/api/graphql';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUserSuccess } from '../../../store/auth/auth.slice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

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
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await fetch('/api/auth/refresh', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      const res = await fetch('/api/auth/user', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      const data = await res.json();
      dispatch(loadUserSuccess(data));
    };

    fetchData();
  }, [dispatch]);

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
