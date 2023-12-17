import Head from 'next/head';

interface MetaTagsProps {
  title?: string;
  description?: string;
}

const MetaTags = ({
  title = 'Logan Liffick',
  description = 'Logan Liffick is a design engineer building brands, systems, and products.',
}: MetaTagsProps) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <link rel="icon" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.svg" />

    <title>{title}</title>
    <meta name="description" key="description" content={description} />
    <meta property="og:title" key="og:title" content={title} />
    <meta
      property="og:description"
      key="og:description"
      content={description}
    />

    <meta
      property="og:image"
      key="og:image"
      content="https://www.loganliffick.com/og.jpg"
    />
    <meta property="og:type" key="og:type" content="website" />
    <meta property="og:site_name" key="og:site_name" content="Logan Liffick" />
    <meta property="og:url" key="og:url" content="https://loganliffick.com" />
    <meta
      name="twitter:image:alt"
      key="twitter:image:alt"
      content="© logan_liffick"
    />
    <meta
      name="twitter:card"
      key="twitter:card"
      content="summary_large_image"
    />
    <meta name="twitter:site" key="twitter:site" content="@logan_liffick" />
    <meta
      name="twitter:creator"
      key="twitter:creator"
      content="@logan_liffick"
    />
    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
  </Head>
);

export default MetaTags;
