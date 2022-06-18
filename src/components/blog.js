import { Client } from '@notionhq/client';

const client = new Client({
  auth: process.env.NOTION_KEY,
});

const posts = async () => {
  const myPosts = await client.databases.query({
    database_id: `${process.env.NOTION_DATABASE}`,
  });
  return myPosts;
};

const post = async (id) => {
  const myPost = await client.pages.retrieve({
    page_id: id,
  });
  return myPost;
};

const blocks = async (id) => {
  const myBlocks = await client.blocks.children.list({
    block_id: id,
  });
  return myBlocks;
};

export { post, posts, blocks };
