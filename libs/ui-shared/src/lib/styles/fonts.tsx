import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Suissintl';
        src:url('https://web-assets.stockx.com/fonts/SuisseIntl-Regular-WebM.woff2') format('woff');
        font-display:swap;
    }

    @font-face {
      font-family: 'SuisseintlMedium';
      src:url('https://web-assets.stockx.com/fonts/SuisseIntl-Medium-WebM.woff2') format('woff');
      font-display:swap;
    }

    @font-face {
      font-family: "SuisseintlBold";
      src:url('https://web-assets.stockx.com/fonts/SuisseIntl-Bold-WebM.woff2') format('woff');
      font-display:swap;
    }

    @font-face {
      font-family:GesturaText-Regular;
      src:url('https://web-assets.stockx.com/fonts/GesturaText-Regular.woff2') format('woff');
      font-display:swap;
    }

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
      `}
  />
);

export default Fonts;
