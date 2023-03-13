import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

import Prism from 'prismjs';
import slugify from 'slugify';

import { post, posts, blocks } from '@/lib/blog';

export const getStaticPaths = async () => {
  let { results } = await posts();
  return {
    paths: results.map((post) => {
      return {
        params: {
          slug: slugify(post.properties.Name.title[0].plain_text).toLowerCase(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  let { results: postResults } = await posts();

  // finds a post that matches slug
  const page = postResults.find((post) => {
    const title = post.properties.Name.title[0].plain_text;
    const resultSlug = slugify(title).toLowerCase();
    return resultSlug === slug;
  });

  let post_result = await post(page.id);

  let { results: blockResults } = await blocks(page.id);

  return {
    props: {
      slug,
      post: post_result,
      blocks: blockResults,
      title: page.properties.Name.title[0].plain_text,
    },
  };
};

const renderBlock = (block) => {
  switch (block.type) {
    case 'heading_1':
      return <h1>{block['heading_1'].rich_text[0].plain_text}</h1>;

    case 'heading_2':
      return <h2>{block['heading_2'].rich_text[0].plain_text}</h2>;

    case 'heading_3':
      return <h3>{block['heading_3'].rich_text[0].plain_text}</h3>;

    case 'image':
      return <Image src={block['image'].file.url} width={650} height={400} />;

    case 'bulleted_list_item':
      return <li>{block['bulleted_list_item'].rich_text[0].plain_text}</li>;

    case 'paragraph':
      return (
        <p>
          {block.paragraph.rich_text.map((element, index) => {
            let text = element.plain_text;
            let tag = element.annotations;
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
              tag.strikethrough
                ? (text = <strike key={index}>{text}</strike>)
                : text,
              element.href ? (
                <Link href={element.href} target="_blank" key={index}>
                  {text}
                </Link>
              ) : (
                text
              )
            );
          })}
        </p>
      );

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
          allowtransparency="true"
          allowFullScreen={true}
        ></iframe>
      );

    // case 'embed':
    //   return (
    //     <iframe
    //       src={block['embed'].url}
    //       style={{
    //         width: '100%',
    //         height: '504px',
    //         border: '0',
    //       }}
    //       allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    //       loading="lazy"
    //       allowtransparency="true"
    //       frameBorder="0"
    //       allowFullScreen
    //     ></iframe>
    //   );

    case 'divider':
      return <div style={{ margin: '24px 0 24px 0' }} />;

    case 'code':
      return (
        <pre>
          <code className={'language-' + block['code'].language}>
            {block['code'].rich_text[0]?.text?.content}
          </code>
        </pre>
      );

    default:
      return <p>Undefined type</p>;
  }
};

const Post = ({ post, blocks, title }) => {
  // console.log(post);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={post.properties.Description.rich_text[0]?.plain_text}
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={post.properties.Description.rich_text[0]?.plain_text}
        />
      </Head>
      <Link href="/">Home</Link>
      <main>
        {blocks.map((block, index) => {
          useEffect(() => {
            Prism.highlightAll();
          }, []);

          return (
            <React.Fragment key={index}>{renderBlock(block)}</React.Fragment>
          );
        })}
      </main>
    </>
  );
};

export default Post;
