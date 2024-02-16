import { GoogleAnalytics } from '@next/third-parties/google'
import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => (
  <Html lang="en">
    <Head />
    <body className="bg-zinc-100">
      <Main />
      <NextScript />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_ANALYTICS_ID ?? ''} />
    </body>
  </Html>
)

export default Document
