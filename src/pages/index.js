import Head from 'next/head';
import Link from 'next/link';
import { posts } from 'components/blog';

export const getServerSideProps = async () => {
  // Get the posts
  let { results } = await posts();
  // Return the result
  return {
    props: {
      posts: results,
    },
  };
};

const Home = (props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>Logan Liffick</title>
        <meta
          name="description"
          content="Logan Liffick is a design engineer building brands, systems, and products."
        />
        <meta property="og:title" content="Logan Liffick" />
        <meta
          property="og:description"
          content="Logan Liffick is a design engineer building brands, systems, and products."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Logan Liffick" />
        <meta property="og:url" content="https://loganliffick.com" />
        <meta
          property="og:image"
          content="https://www.loganliffick.com/og.jpg"
        />
        <meta name="twitter:image:alt" content="© logan liffick" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@logan_liffick" />
        <meta name="twitter:creator" content="@logan_liffick" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          name="google-site-verification"
          content="ugqQc2EJej0hywM0zD6iTDzuIhGCttd9t_p-kFFXm18"
        />
      </Head>
      <div className="app">
        <div>
          {props.posts?.map((result, index) => {
            return (
              <div key={index}>
                <Link href={`/${result.id}`}>
                  <a>{result.properties.Name.title[0].plain_text}</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
