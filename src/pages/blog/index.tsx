// archive

import Post from 'components/Blog/Post'
import RecentPost from 'components/Blog/RecentPost'
import Button from 'components/Button'
import Layout from 'components/Layouts/Layout'
import Section from 'components/Section'
import dayjs from 'dayjs'
import getPosts, { postTypes } from 'lib/blog'
import { GetStaticProps } from 'next'
import { useState } from 'react'

export const getStaticProps: GetStaticProps<{
  posts: postTypes
}> = async () => {
  const posts = await getPosts()
  return {
    props: { posts },
  }
}

const createSlug = (text: string): string => {
  const slug = '/blog/' + text
  return slug
}

const createDate = (text: string) => {
  const date = dayjs(text).format('MMM D, YYYY')
  return date
}

const Page = ({ posts }: { posts: postTypes[] }) => {
  const [activePost, setActivePost] = useState(0)

  return (
    <Layout>
      <Section className="max-w-full">
        {/* <JsonView>{posts}</JsonView> */}
        <h2 className="mb-16 text-xl font-medium">Recent Posts</h2>
        <div className="mx-auto flex w-full flex-col gap-10 sm:max-w-min sm:flex-row sm:gap-0">
          {posts.slice(0, 4).map((post: postTypes, index: number) => (
            <RecentPost
              activePost={activePost}
              date={createDate(post.publishedAt)}
              href={createSlug(post.slug)}
              id={index}
              image={post.coverImage.url}
              key={index}
              offset={`${index * 0.1}`}
              setActivePost={() => setActivePost(index)}
              title={post.title}
            />
          ))}
        </div>
        <div className="mx-auto mt-20 hidden w-full max-w-lg justify-between gap-6 sm:flex">
          <div className="flex w-2/3 flex-col gap-6">
            <header>
              <p className="mb-2 font-bold">Title</p>
              <p className="min-h-10 text-sm text-zinc-600 opacity-100 transition-opacity">
                {posts[activePost].title}
              </p>
            </header>
            <div className="w-auto">
              <p className="mb-2 font-bold">Published</p>
              <p className="text-sm text-zinc-600">
                {createDate(posts[activePost].publishedAt)}
              </p>
            </div>
          </div>
          <div className="w-full">
            <p className="mb-2 font-bold">Description</p>
            <p className="min-h-32 text-pretty text-sm text-zinc-600">
              {posts[activePost].seo.description}
            </p>
            <Button
              className="text-sm"
              title={'Read more'}
              href={createSlug(posts[activePost].slug)}
              garnish
            />
          </div>
        </div>
      </Section>
      {posts.length > 4 && (
        <Section className="mt-10">
          <h2 className="mb-12 text-xl font-medium">Older Posts</h2>
          {posts.slice(4, posts.length).map((post: any, index: number) => (
            <Post
              date={createDate(post.date)}
              href={createSlug(post.slug)}
              key={index}
              title={post.title}
            />
          ))}
        </Section>
      )}
    </Layout>
  )
}

export default Page
