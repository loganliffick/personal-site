import '../styles/globals.scss';

import Head from 'next/head';
import LocalFont from '@next/font/local';

const apfel = LocalFont({
  src: [
    {
      path: '../assets/fonts/ApfelGrotezk-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
  ],
});

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />

        <meta
          property="og:image"
          content="https://www.loganliffick.com/og.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Logan Liffick" />
        <meta property="og:url" content="https://loganliffick.com" />
        <meta name="twitter:image:alt" content="© logan liffick" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@logan_liffick" />
        <meta name="twitter:creator" content="@logan_liffick" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
      </Head>
      <style jsx global>{`
        :root {
          --apfel: ${apfel.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default App;
