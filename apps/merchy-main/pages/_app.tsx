import { AppProps } from 'next/app';
import { Head } from '../components';
import { ChakraProvider } from '@chakra-ui/react';
import { theme, Fonts } from '../styles';
import { ReactElement, ReactNode, useEffect } from 'react';
import { NextPage } from 'next';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { DefaultSeo } from 'next-seo';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, pageProps) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    document.body.classList.remove('loading');
  }, []);

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.merchy-storefront.vercel.app/',
          site_name: 'MerchY',
        }}
        twitter={{
          handle: '@richiexuetang',
          site: 'https://twitter.com/richiexuetang',
        }}
      />
      <Head />
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Fonts />
          {getLayout(<Component {...pageProps} />, pageProps)}
        </ChakraProvider>
      </Provider>
    </>
  );
}
