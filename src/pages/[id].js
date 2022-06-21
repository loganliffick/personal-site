import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Prism from 'prismjs';
import { post, posts, blocks } from 'components/blog';
import { useEffect } from 'react';

export const getStaticProps = async (ctx) => {
  let { id } = ctx.params;
  // get the dynamic id
  let page_result = await post(id);
  // fetch the post
  let { results } = await blocks(id);
  // get children
  return {
    props: {
      id,
      post: page_result,
      blocks: results,
    },
  };
};

export const getStaticPaths = async () => {
  // get all posts
  let { results } = await posts();
  return {
    paths: results.map((post) => {
      // search through each post
      return {
        params: {
          // set a params object with an id in it
          id: post.id,
        },
      };
    }),
    fallback: false,
  };
};

const renderBlock = (block) => {
  switch (block.type) {
    case 'heading_1':
      return <h1>{block['heading_1'].rich_text[0].plain_text} </h1>;

    case 'heading_2':
      return <h2>{block['heading_2'].rich_text[0].plain_text} </h2>;

    case 'heading_3':
      return <h3>{block['heading_3'].rich_text[0].plain_text} </h3>;

    case 'image':
      return <Image src={block['image'].file.url} width={650} height={400} />;

    case 'bulleted_list_item':
      return (
        <ul>
          <li>{block['bulleted_list_item'].rich_text[0].plain_text} </li>
        </ul>
      );

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
                <a href={element.href} target="_blank" key={index}>
                  {text}
                </a>
              ) : (
                text
              )
            );
          })}
        </p>
      );

    case 'embed':
      // console.log(block.embed);
      return (
        <iframe
          src={block['embed'].url}
          style={{
            width: '100%',
            height: '504px',
            border: '0',
          }}
          title="keybored"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          loading="lazy"
          allowtransparency="true"
        ></iframe>
      );

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

const Post = ({ post, blocks }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>{post.properties.Name.title[0].plain_text}</title>
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
      {blocks.map((block, index) => {
        useEffect(() => {
          Prism.highlightAll();
        }, []);
        return <div key={index}>{renderBlock(block)}</div>;
      })}
    </div>
  );
};

export default Post;
