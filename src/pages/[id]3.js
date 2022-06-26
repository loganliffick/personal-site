import { Client } from '@notionhq/client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Prism from 'prismjs';
import { useEffect } from 'react';

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export const getStaticPaths = async () => {
  const data = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE}`,
  });

  const paths = [];

  data.results.forEach((result) => {
    if (result.properties.posted.date) {
      paths.push({
        params: {
          id: result.id,
        },
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const page = await notion.pages.retrieve({
    page_id: id,
  });

  const blocks = await notion.blocks.children.list({
    block_id: id,
  });

  const title = page.properties.Name.title[0].plain_text;

  return {
    props: {
      post: blocks,
    },
  };
};

const Post = ({ post }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        {/* <title>{post.properties.Name.title[0].plain_text}</title> */}
        {/* <meta
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
        /> */}
      </Head>
      <Link href="/">
        <a>Home</a>
      </Link>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      {/* {blocks.map((block, index) => {
        useEffect(() => {
          Prism.highlightAll();
        }, []);
        return <div key={index}>{renderBlock(block)}</div>;
      })} */}
    </div>
  );
};

export default Post;
