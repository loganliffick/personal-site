import Head from 'next/head';
import Journal from '@/components/Journal';
import Link from 'next/link';
import { posts } from '@/lib/blog';
import Section from '@/components/Section';
import Navigation from '@/components/Navigation';

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
          content="Logan Liffick is a designer and front-end engineer building brands, systems, and products."
        />
        <meta property="og:title" content="Logan Liffick" />
        <meta
          property="og:description"
          content="Logan Liffick is a designer and front-end engineer building brands, systems, and products."
        />
      </Head>
      {/* <pre>{JSON.stringify(posts.length, null, 2)}</pre> */}
      <main>
        <h1 className="font-bold">Logan Liffick</h1>
        <Section>
          <Journal posts={posts} />
        </Section>
      </main>
    </>
  );
};

export default Home;
