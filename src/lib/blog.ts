export interface postTypes {
  id: string
  title: string
  seo: {
    title: string
    description: string
  }
  features: {
    tableOfContents: {
      items: {
        title: string
        slug: string
      }[]
    }
  }
  publishedAt: string
  coverImage: {
    url: string
  }
  slug: string
  content: {
    html: string
  }
}

const getPosts = async (slug?: string) => {
  const response = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query SinglePostByPublication {
          publication(host: "loganliffick.hashnode.dev") {
            id
            posts(first: 10) {
              totalDocuments
              edges {
                node {
                  id
                  title
                  seo {
                    title
                    description
                  }
                  features {
                    tableOfContents {
                      items {
                        title
                        slug
                      }
                    }
                  }
                  publishedAt
                  coverImage {
                    url
                  }
                  slug
                  content {
                    html
                  }
                }
              }
            }
          }
        }
      `,
    }),
  })

  const { data } = await response.json()
  const postsList = data.publication.posts.edges

  if (slug) {
    const post: postTypes | null =
      postsList.find(
        (result: { node: { slug: string } }) => result.node.slug === slug,
      )?.node || null

    return post
      ? {
          id: post.id,
          title: post.title,
          seo: {
            title: post.seo.title,
            description: post.seo.description,
          },
          features: {
            tableOfContents: {
              items: post.features.tableOfContents.items,
            },
          },
          publishedAt: post.publishedAt,
          coverImage: {
            url: post.coverImage.url,
          },
          slug: post.slug,
          content: {
            html: post.content.html,
          },
        }
      : null
  } else {
    const posts = postsList.map(({ node }: { node: postTypes }) => ({
      id: node.id,
      title: node.title,
      seo: {
        title: node.seo.title,
        description: node.seo.description,
      },
      publishedAt: node.publishedAt,
      coverImage: {
        url: node.coverImage.url,
      },
      slug: node.slug,
    }))

    return posts
  }
}

export default getPosts
