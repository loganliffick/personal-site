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

export { posts };
