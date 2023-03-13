import Head from 'next/head';
import Link from 'next/link';
import { posts } from '@/lib/blog';

// components
import Section from '@/components/Section';
import Journal from '@/components/Journal';

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
        <Section type="headline">
          <h1 className="title">Logan Liffick</h1>
          <h2 className="subhead">Designer & Front-end engineer</h2>
        </Section>
        <Section>
          <Journal posts={posts} />
        </Section>
        <Section>
          <h2 className="title_small">Projects</h2>
        </Section>
        <Section>
          <h2 className="title_small">About</h2>
          <p>
            Hey I’m Logan. Designer, builder, all-around creative. I’m the head
            of product and design at{' '}
            <Link
              href="https://makelog.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Makelog
            </Link>
            , previously{' '}
            <Link
              href="https://digitalocean.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              DigitalOcean
            </Link>
            ,{' '}
            <Link
              href="https://zondahome.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zonda
            </Link>
            , and{' '}
            <Link
              href="https://purplerockscissors.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              PRPL
            </Link>
            .
            <br />
            <br />I like to do all sorts of fun things. Thanks for stopping by!
          </p>
        </Section>
      </main>
    </>
  );
};

export default Home;
