import Head from 'next/head';
import Link from 'next/link';
// import { posts } from 'components/redact-blog';
import moment from 'moment';
import slugify from 'slugify';
import { Client } from '@notionhq/client';

// export const getServerSideProps = async () => {
//   // get posts
//   let { results } = await posts();
//   // return results
//   return {
//     props: {
//       posts: results,
//     },
//   };
// };

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE}`,
  });

  let posts = [];

  data.results.forEach((result) => {
    if (result.properties.posted.date) {
      posts.push({
        id: result.id,
        title: result.properties.Name.title[0].plain_text,
        posted: result.properties.posted.date.start,
        edited: result.properties.posted.date.end,
      });
    }
  });

  return {
    props: {
      posts: posts.sort((a, b) => (a.posted > b.posted ? 1 : -1)).reverse(),
    },
  };
};

const Home = ({ posts }) => {
  // const Home = (props) => {
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
        {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
        <div>
          {posts.map((result, index) => {
            let publishedTime = result.posted;
            let editedTime = result.edited;
            const dateFormat = (props) => {
              let relTime =
                moment().subtract(7, 'day').dayOfYear() <
                moment(props).dayOfYear()
                  ? moment(props).fromNow()
                  : moment(props).format('LL');

              return relTime;
            };

            return (
              <div key={index}>
                <Link href={`/${slugify(result.id)}`}>
                  <a>{result.title}</a>
                </Link>
                <p>{dateFormat(publishedTime)}</p>
                <p>{editedTime ? 'edited ' + dateFormat(editedTime) : ''}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
