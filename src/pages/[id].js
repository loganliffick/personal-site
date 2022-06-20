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
  console.log(block);
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
      return (
        <iframe
          src={block['embed'].embed?.url.plain_text}
          style={{
            width: '100%',
            height: '504px',
            border: '0',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '40px',
          }}
          title="keybored"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
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
        <title>{post.properties.Name.title[0].plain_text}</title>
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
