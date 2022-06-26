import { Client } from '@notionhq/client';

const client = new Client({
  auth: process.env.NOTION_KEY,
});

const posts = async () => {
  const myPosts = await client.databases.query({
    database_id: process.env.NOTION_DATABASE,
  });
  return myPosts;
};

const post = async (slug) => {
  const myPost = await client.pages.retrieve({
    page_id: slug,
  });
  return myPost;
};

const blocks = async (slug) => {
  const myBlocks = await client.blocks.children.list({
    block_id: slug,
  });
  return myBlocks;
};

export { post, posts, blocks };
