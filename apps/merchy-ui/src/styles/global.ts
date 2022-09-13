import { createGlobalStyle } from 'styled-components';
import Suisseintl from '../assets/fonts/SuisseintlRegular.woff2';
import SuisseintlMedium from '../assets/fonts/SuisseIntl-Medium.woff2';
import SuisseintlBold from '../assets/fonts/SuisseIntl-Bold.woff2';
import { chakra, extendTheme, Text as ChakraText } from '@chakra-ui/react';
import { ButtonStyles as Button } from './buttonStyles';
import { TextStyles as Text } from './textStyles';
import { FormStyles as Form } from './formStyles';

export const theme = extendTheme({
  components: {
    Button,
    Text,
    Form,
  },
  colors: {
    neutral: {
      black: '#0f0f0f',
      white: '#ffffff',
      300: '#cfcfcf',
      200: '#ededed',
      600: '#393939',
      700: '#242424',
    },
    beige: {
      100: '#f4f3f1',
    },
  },
  lineHeights: {
    md: 1.375,
  },
  fonts: {
    suisseIntlRegular: `'SuisseIntl', sans-serif`,
    suisseIntlMedium: `'SuisseIntlMedium', sans-serif`,
    suisseIntlBold: `'SuisseIntlBold', sans-serif`,
    body: `'SuisseIntl', sans-serif`,
    gesturaText: `'GesturaText', sans-serif`,
    proximaNova: `proxima-nova, sans-serif`,
  },
});

export const GlobalStyle = createGlobalStyle`
    :root {
        // Colors
        --colors-neutral-200: #ededed;
        --colors-neutral-400: #a1a5a4;
        --colors-neutral-600: #393939;
        --colors-neutral-500: #5f5f5f;
        --colors-neutral-200: #ededed;
        --colors-neutral-black: #0f0f0f;
        --colors-neutral-white: #ffffff;
        --colors-transparent: #00000000;

        // Fonts
        --fontSizes-xs: 0.75rem;
        --fontSizes-sm: 0.875rem;
        --fontSizes-md: 1rem;
        --fontSizes-lg: 1.125rem;

        --space-8: 2.0rem;
        --space-10: 2.5rem;

        --fontWeights-semibold: 600;
        --transition-property-common: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
        --transition-duration-normal: 200ms;
        --fonts-suisseIntlRegular: "SuisseIntl-Regular",sans-serif;
    }

    @font-face {
        font-family: 'Suissintl';
        font-style: normal;
        src: url(${Suisseintl});
        font-display:swap;
    }

    @font-face {
      font-family: 'SuisseintlMedium';
      src: url(${SuisseintlMedium});
        font-display:swap;
    }

    @font-face {
      font-family: "SuisseintlBold";
      src: url(${SuisseintlBold});
        font-display:swap;
    }

    @font-face{font-family:GesturaText-Regular;src:url('https://web-assets.stockx.com/fonts/GesturaText-Regular.woff2') format('woff');font-display:swap;}

    @font-face
    {
      font-family:proxima-nova;
      src:url(https://use.typekit.com/af/085107/00000000000000003b9b3066/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3) format("woff2"),
      url(https://use.typekit.com/af/085107/00000000000000003b9b3066/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3) format("woff"),
      url(https://use.typekit.com/af/085107/00000000000000003b9b3066/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3) format("opentype");
      font-weight:600;
      font-style:normal;
      font-stretch:normal;
      font-display:swap;
    }

    a {
      background-color: transparent;
      color: inherit;
      text-decoration: inherit;
    }

    img {
      border-style: none;
    }

    img,svg,video,canvas,audio,iframe,embed,object{
      display:block;
    }

    img,video{
      max-width:100%;
      height:auto;
    }


    *{
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: 'Suissintl', sans-serif;
    }

    body {
      position: relative;
      min-height: 100%;
      font-feature-settings: 'kern';
      font-size: 100%;
    }

    ul {
      list-style-type: none;
    }

    #root{
        margin: 0 auto;
        min-height: 100vh;
    }
`;

export const DefaultText = chakra(ChakraText, {
  baseStyle: {
    fontFamily: 'var(--chakra-fonts-suisseIntlRegular)',
    lineHeight: 'md',
    letterSpacing: '0.004rem',
    overflow: 'hidden',
    color: 'neutral.black',
    fontSize: 'xs',
    height: '34px',
    fontWeight: 'medium',
  },
});
