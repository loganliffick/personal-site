import 'styles/globals.css';
import type { AppProps } from 'next/app';
import LocalFont from 'next/font/local';

const satoshi = LocalFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--satoshi',
});

const cascadia = LocalFont({
  src: [
    {
      path: '../../public/fonts/CascadiaCode-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../public/fonts/CascadiaCode-Italic.woff2',
      style: 'italic',
      weight: '400',
    },
  ],
  display: 'swap',
  variable: '--cascadia',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div
      className={`${satoshi.variable} font-sans ${cascadia.variable} font-mono`}
    >
      <Component {...pageProps} />
    </div>
  );
};

export default App;
