import '@/styles/globals.scss';
import Head from 'next/head';

// fonts
import LocalFont from 'next/font/local';

const basteleur = LocalFont({
  src: [
    {
      path: '../assets/fonts/Basteleur.woff2',
      style: 'normal',
      weight: '700',
    },
  ],
});

const general = LocalFont({
  src: [
    {
      path: '../assets/fonts/GeneralSans-Medium.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../assets/fonts/GeneralSans-MediumItalic.woff2',
      style: 'italic',
      weight: '500',
    },
  ],
});

const cascadia = LocalFont({
  src: [
    {
      path: '../assets/fonts/CascadiaCode-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../assets/fonts/CascadiaCode-Italic.woff2',
      style: 'italic',
      weight: '400',
    },
  ],
});

// components
// import Navigation from '@/components/Navigation';

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
          --basteleur: ${basteleur.style.fontFamily};
          --cascadia: ${cascadia.style.fontFamily};
          --general: ${general.style.fontFamily};
        }
      `}</style>
      {/* <Navigation /> */}
      <Component {...pageProps} />
    </>
  );
};

export default App;
