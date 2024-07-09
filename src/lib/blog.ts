import { Client } from '@notionhq/client'

const client = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_ACCESS_TOKEN,
})

const posts = async () => {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE

  if (!databaseId) {
    throw new Error('db not found...')
  }

  const myPosts = await client.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
  })
  return myPosts
}

const post = async (slug: any) => {
  const myPost = await client.pages.retrieve({
    page_id: slug,
  })
  return myPost
}

const blocks = async (slug: any) => {
  const myBlocks = await client.blocks.children.list({
    block_id: slug,
  })
  return myBlocks
}

export { blocks, post, posts }
