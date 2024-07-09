import BackButton from 'components/blog/BackButton'
import Layout from 'components/Layout'
import Section from 'components/Section'
import TextLink from 'components/TextLink'
import { blocks, post, posts } from 'lib/blog'
import moment from 'moment'
import Image from 'next/image'
import React, { useState } from 'react'
import slugify from 'slugify'
import { cn } from 'utils/tw'

// export const getStaticPaths = async () => {
//   let { results } = await posts()

//   return {
//     paths: results.map((post: any) => {
//       return {
//         params: {
//           slug: slugify(
//             post.properties.Title.title[0].plain_text,
//           ).toLowerCase(),
//         },
//       }
//     }),
//     fallback: false,
//   }
// }

export const getServerSideProps = async ({ params: { slug } }: any) => {
  let { results: postResults } = (await posts()) as any

  // finds a post that matches slug
  const page = postResults.find((post: any) => {
    const title = post.properties.Title.title[0].plain_text
    const resultSlug = slugify(title).toLowerCase()
    return resultSlug === slug
  })

  let post_result = await post(page?.id)

  let { results: blockResults } = await blocks(page?.id)

  return {
    props: {
      slug,
      post: post_result,
      blocks: blockResults,
      title: page?.properties.Title.title[0].plain_text,
      cover: page?.cover.external?.url ?? page?.cover.file?.url,
      date: moment(page?.properties.Date.date.start).format('LL'),
    },
  }
}

const renderBlock = (block: any) => {
  switch (block.type) {
    case 'heading_1':
      return <h1>{block['heading_1'].rich_text[0]?.plain_text}</h1>

    case 'heading_2':
      return <h2>{block['heading_2'].rich_text[0]?.plain_text}</h2>

    case 'heading_3':
      return <h3>{block['heading_3'].rich_text[0]?.plain_text}</h3>

    case 'image':
      const alt = block['image'].caption[0]?.text.content
      const [isImageLoaded, setIsImageLoaded] = useState(false)
      console.log(block)

      return (
        <Image
          src={block['image']?.external?.url ?? block['image']?.file.url}
          alt={alt ? alt : 'image'}
          className={cn('fade rounded-3xl', {
            'animate-fade': isImageLoaded,
          })}
          priority
          width={1000}
          height={1000}
          onLoad={() => {
            setIsImageLoaded(true)
          }}
        />
      )

    case 'video':
      return (
        <video width={1000} height={1000} loop autoPlay>
          <source src={block['video']?.external?.url ?? ''} type="video/mp4" />
        </video>
      )

    case 'bulleted_list_item':
      return <li>{block['bulleted_list_item'].rich_text[0]?.plain_text}</li>

    case 'paragraph':
      return (
        <p>
          {block.paragraph.rich_text.map((element: any, index: number) => {
            let text = element.plain_text
            let tag = element.annotations
            return (
              tag.code
                ? (text = (
                    <code className="language-javascript" key={index}>
                      {text}
                    </code>
                  ))
                : text,
              tag.italic ? (text = <em key={index}>{text}</em>) : text,
              tag.bold ? (text = <strong key={index}>{text}</strong>) : text,
              tag.underline ? (text = <u key={index}>{text}</u>) : text,
              tag.strikethrough ? (text = <s key={index}>{text}</s>) : text,
              element.href ? (
                <TextLink
                  href={element.href}
                  external={
                    element.href.includes('https://loganliffick.com/')
                      ? false
                      : true
                  }
                  key={index}
                  text={text}
                />
              ) : (
                text
              )
            )
          })}
        </p>
      )

    case 'bookmark':
      return (
        <iframe
          height="300"
          style={{
            width: '100%',
            height: '600px',
            border: '0',
          }}
          src={block['bookmark'].url}
          loading="lazy"
          allowFullScreen={true}
        />
      )

    case 'divider':
      return (
        <div className="my-6">
          <div className="h-px w-full bg-zinc-200" />
        </div>
      )

    case 'code':
      return (
        <pre>
          <code className={'language-' + block['code'].language}>
            {block['code'].rich_text[0]?.text?.content}
          </code>
        </pre>
      )

    default:
      return <p className="font-bold text-red-500">This type is undefined...</p>
  }
}

type SlugTypes = {
  post: any
  cover: any
  blocks: any
  title: any
  date: any
}

const Slug = ({ post, cover, blocks, title, date }: SlugTypes) => {
  const [isBgLoaded, setIsBgLoaded] = useState(false)
  return (
    <Layout
      metaTagsProps={{
        title: title,
        description: post.properties.Description.rich_text[0]?.plain_text,
      }}
    >
      <Section>
        <article className="prose prose-zinc -mt-10 w-full max-w-prose prose-headings:font-semibold sm:mt-0">
          <header className="mb-20">
            <BackButton />
            <h1 className="animate-fade">{title}</h1>
            <p className="animate-fadeMd text-zinc-500">{date}</p>
            <div className="pointer-events-none absolute left-0 top-0 h-[700px] w-full select-none after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-40 after:w-full after:bg-gradient-to-t after:from-zinc-100 after:to-zinc-100/0">
              <Image
                src={cover}
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
          <section className={cn('fade', { 'animate-fadeMd': isBgLoaded })}>
            {blocks.map((block: any, index: number) => {
              return (
                <React.Fragment key={index}>
                  {renderBlock(block)}
                </React.Fragment>
              )
            })}
          </section>
        </article>
      </Section>
    </Layout>
  )
}

export default Slug
