import { AppProps } from 'next/app';
import { Head, Layout } from '../components';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { theme, Fonts } from '@merchy/ui-shared';

const client = new ApolloClient({
  uri: 'http://localhost:3333/api/graphql',
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Fonts />
        <ApolloProvider client={client}>
          <Head />
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
