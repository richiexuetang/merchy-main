import { FC } from 'react';
import NextHead from 'next/head';
import { DefaultSeo } from 'next-seo';
import config from '../../../config/seo.json';

const Head: FC = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <title>MerchY</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" key="site-manifest" />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="192x192"
          href="/apple-touch-icon.png"
        />
      </NextHead>
    </>
  );
};

export default Head;
