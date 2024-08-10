import BackButton from 'components/Blo/BackButton'
import Layout from 'components/Layouts/Layout'
import Section from 'components/Section'
import dayjs from 'dayjs'
import getPosts, { postTypes } from 'lib/blog'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from 'utils/tw'
// import JsonView from 'utils/JsonView'

export const getStaticProps: GetStaticProps<{ post: postTypes }> = async (
  context,
) => {
  const { params } = context
  const slug = params?.slug as string
  const post = await getPosts(slug)
  return { props: { post } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getPosts()
  const paths = allPosts.map((post: postTypes) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

const Slug = ({ post }: { post: postTypes }) => {
  const [isBgLoaded, setIsBgLoaded] = useState(false)

  return (
    <Layout
      metaTags={{
        title: post.seo.title,
        description: post.seo.description,
        ogImage: post.coverImage.url,
      }}
    >
      <Section>
        {/* <JsonView noScroll>{post}</JsonView> */}
        <div className="prose prose-zinc w-full max-w-prose prose-headings:font-semibold prose-a:text-indigo-600 prose-img:rounded-3xl sm:hover:prose-a:text-indigo-700">
          <header className="mb-20">
            <BackButton />
            <h1 className="animate-fade">{post.title}</h1>
            <p className="animate-fadeMd text-zinc-500">
              {dayjs(post.publishedAt).format('dddd MMMM D, YYYY')}
            </p>
            <div className="pointer-events-none absolute left-0 top-0 h-[700px] w-full select-none after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-40 after:w-full after:bg-gradient-to-t after:from-zinc-100 after:to-zinc-100/0">
              <Image
                src={post.coverImage.url}
                fill={true}
                alt="cover"
                className={cn(
                  'fade -z-10 mt-0 object-cover mix-blend-soft-light',
                  { 'animate-fadeLg': isBgLoaded },
                )}
                onLoad={() => setIsBgLoaded(true)}
              />
            </div>
          </header>
          <article
            className={cn('fade', {
              'animate-fadeMd': isBgLoaded,
            })}
            dangerouslySetInnerHTML={{
              __html: post.content.html,
            }}
          />
        </div>
      </Section>
    </Layout>
  )
}

export default Slug
