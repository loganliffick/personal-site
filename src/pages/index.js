import Head from 'next/head';
import { posts } from '@/lib/blog';

// components
import Section from '@/components/Section';
import Journal from '@/components/Journal';
import Projects from '@/components/Projects';
import About from '@/components/About';

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
          <Projects />
        </Section>
        <Section>
          <h2 className="title_small">About</h2>
          <About />
        </Section>
      </main>
    </>
  );
};

export default Home;
