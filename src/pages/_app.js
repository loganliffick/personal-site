import '@/styles/globals.css';
import Head from 'next/head';
import LocalFont from 'next/font/local';
import Footer from '@/components/Footer';

const satoshi = LocalFont({
  src: [
    {
      path: '../assets/fonts/Satoshi-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Satoshi-VariableItalic.woff2',
      style: 'italic',
      weight: '500',
    },
  ],
  variable: '--font-satoshi',
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
  variable: '--font-cascadia',
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
      {/* <style jsx global>{`
        :root {
          --cascadia: ${cascadia.style.fontFamily};
          --satoshi: ${satoshi.style.fontFamily};
        }
      `}</style> */}
      {/* <Navigation /> */}
      <main
        className={`${satoshi.variable} font-sans ${cascadia.variable} font-mono`}
      >
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default App;
