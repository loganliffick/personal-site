import Button from 'components/Button'
import Layout from 'components/Layout'
import Section from 'components/Section'
import Post from 'components/blog/Post'
import RecentPost from 'components/blog/RecentPost'
import { posts } from 'lib/blog'
import { ArrowRight } from 'phosphor-react'
import { useState } from 'react'
import slugify from 'slugify'

export const getStaticProps = async () => {
  let { results } = await posts()
  let publishedPosts = [] as any[]

  results.forEach((result) => {
    publishedPosts.push({
      id: result.id,
      title: result.properties.Title.title[0].plain_text,
      date: result.properties.Date.date.start,
      cover: result.cover.external?.url ?? '/',
      description: result.properties.Description.rich_text[0].text.content,
    })
  })

  return {
    props: {
      posts: publishedPosts
        .sort((a, b) => (a.date > b.date ? 1 : -1))
        .reverse(),
    },
  }
}

const createSlug = (text: string): string => {
  const slug = '/blog/' + slugify(text, { lower: true })
  return slug
}

const createDate = (text: string): string => {
  const slug = '/blog/' + slugify(text, { lower: true })
  return slug
}

const Page = ({ posts }: any) => {
  const [activePost, setActivePost] = useState(0)

  return (
    <Layout>
      <Section className="max-w-full">
        {/* <JsonView>{posts}</JsonView> */}
        <h2 className="mb-16 text-xl font-medium">Recent Posts</h2>
        <div className="mx-auto flex w-full flex-col gap-10 sm:max-w-min sm:flex-row sm:gap-0">
          {posts.slice(0, 4).map((post: any, index: number) => (
            <RecentPost
              activePost={activePost}
              date={post.date}
              description={post.description}
              href={createSlug(post.title)}
              id={index}
              image={post.cover}
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
              <p className="text-sm text-zinc-600">{posts[activePost].date}</p>
            </div>
          </div>
          <div className="w-full">
            <p className="mb-2 font-bold">Description</p>
            <p className="min-h-32 text-sm text-zinc-600">
              {posts[activePost].description}
            </p>
            <Button
              as="a"
              className="group text-sm"
              text={'Read more'}
              type={'primary'}
              href={createSlug(posts[activePost].title)}
            >
              <div className="relative flex size-3.5 justify-center overflow-hidden text-inherit">
                <ArrowRight
                  weight="bold"
                  className="absolute -translate-x-4 transition-transform duration-300 ease-bounce sm:group-hover:translate-x-0"
                />
                <ArrowRight
                  weight="bold"
                  className="transition-transform duration-300 ease-bounce sm:group-hover:translate-x-4"
                />
              </div>
            </Button>
          </div>
        </div>
      </Section>
      <Section className="mt-10">
        <h2 className="mb-12 text-xl font-medium">Older Posts</h2>
        {posts.slice(4, posts.length).map((post: any, index: number) => (
          <Post
            date={post.date}
            href={createSlug(post.title)}
            key={index}
            title={post.title}
          />
        ))}
      </Section>
    </Layout>
  )
}

export default Page
