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
        <link rel="manifest" href="/manifest.json" key="site-manifest" />
      </NextHead>
    </>
  );
};

export default Head;
