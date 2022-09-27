import { AppProps } from 'next/app';
import { Head } from '../components';
import { ChakraProvider } from '@chakra-ui/react';
import { theme, Fonts } from '../styles';
import { ReactElement, ReactNode, useEffect } from 'react';
import { NextPage } from 'next';

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
      <Head />
      <ChakraProvider theme={theme}>
        <Fonts />
        {getLayout(<Component {...pageProps} />, pageProps)}
      </ChakraProvider>
    </>
  );
}
