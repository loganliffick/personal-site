import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => (
  <Html lang="en">
    <Head />
    <body className="bg-zinc-100 selection:bg-zinc-900/10">
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
