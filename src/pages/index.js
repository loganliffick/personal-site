import Head from 'next/head';
import Link from 'next/link';
import moment from 'moment';
import { posts } from 'components/blog';
import slugify from 'slugify';

// components
import Hero from 'components/Hero';

export const getStaticProps = async () => {
  let { results } = await posts();

  let publishedPosts = [];

  results.forEach((result) => {
    if (result.properties.posted.date) {
      publishedPosts.push({
        id: result.id,
        title: result.properties.Name.title[0].plain_text,
        posted: result.properties.posted.date.start,
        edited: result.properties.posted.date.end,
      });
    }
  });

  return {
    props: {
      posts: publishedPosts
        .sort((a, b) => (a.posted > b.posted ? 1 : -1))
        .reverse(),
    },
  };
};

const Home = ({ posts }) => {
  return (
    <>
      <Head>
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
      </Head>

      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <main>
        <Hero />
        <div>
          {posts.map((result) => {
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
              <div key={result.title}>
                <Link href={`/${slugify(result.title).toLowerCase()}`}>
                  {result.title}
                </Link>
                <p>{dateFormat(publishedTime)}</p>
                <p>{editedTime ? 'edited ' + dateFormat(editedTime) : ''}</p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
