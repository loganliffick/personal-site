import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import 'prismjs';
import { post, posts, blocks } from 'components/blog';

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
  // console.log(block.paragraph);
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
      return <p>{block['paragraph'].rich_text[0]?.text?.content} </p>;

    case 'divider':
      return <div style={{ margin: '24px 0 24px 0' }} />;

    case 'code':
      return (
        <pre className={'language-' + block['code'].language}>
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
        return <div key={index}>{renderBlock(block)}</div>;
      })}
    </div>
  );
};

export default Post;
