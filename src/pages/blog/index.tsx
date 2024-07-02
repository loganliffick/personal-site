import Button from 'components/Button'
import Layout from 'components/Layout'
import Section from 'components/Section'
import Post from 'components/blog/Post'
import RecentPost from 'components/blog/RecentPost'
import { ArrowRight } from 'phosphor-react'
import { useState } from 'react'
import slugify from 'slugify'

const fauxData = [
  {
    title: `The Sticks`,
    description: `Must go faster. You really think you can fly that thing? Must go faster... go, go, go, go, go! We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE!`,
    image: '/images/jan-2024/workspace.jpg',
    date: 'April 1st, 2024',
  },
  {
    title: `The Stones`,
    description: `Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. You're a very talented young man, with your own clever thoughts and ideas.`,
    image: '/images/feb-2024/solarpunk.jpg',
    date: 'March 15th, 2024',
  },
  {
    title: `The Bones`,
    description: `My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!`,
    image: '/images/blog/my-workspace/workspace-1.jpg',
    date: 'March 2nd, 2024',
  },
  {
    title: `Of sticks, stones, and all that break bones`,
    description: `Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Must go faster. Yes, Yes, without the oops!`,
    image: '/images/feb-2024/seinfeld.jpg',
    date: 'January 5th, 2024',
  },
  {
    title: `Something old`,
    description: `I know a lot about a little, that's my guy I guess. That's my fiddle. For rizzle, the rizzler be up in the fizzler listening to quizzler getting better at school on chrizzler.`,
    image: '/images/jan-2024/workspace.jpg',
    date: 'Dec 29th, 2023',
  },
  {
    title: `Something older`,
    description: `I know a lot about a little, that's my guy I guess. That's my fiddle. For rizzle, the rizzler be up in the fizzler listening to quizzler getting better at school on chrizzler.`,
    image: '/images/jan-2024/workspace.jpg',
    date: 'Dec 10th, 2023',
  },
  {
    title: `Something oldest`,
    description: `I know a lot about a little, that's my guy I guess. That's my fiddle. For rizzle, the rizzler be up in the fizzler listening to quizzler getting better at school on chrizzler.`,
    image: '/images/jan-2024/workspace.jpg',
    date: 'Aug 21st, 2023',
  },
]

const createSlug = (title: string): string => {
  const slug = '/blog/' + slugify(title, { lower: true })
  return slug
}

const Page = () => {
  const [activePost, setActivePost] = useState(0)

  return (
    <Layout>
      <Section className="max-w-full">
        <h2 className="mb-16 text-xl font-medium">Recent Posts</h2>
        <div className="mx-auto flex w-full flex-col gap-10 sm:max-w-min sm:flex-row sm:gap-0">
          {fauxData.slice(0, 4).map((post, index) => (
            <RecentPost
              activePost={activePost}
              date={post.date}
              description={post.description}
              href={createSlug(post.title)}
              id={index}
              image={post.image}
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
                {fauxData[activePost].title}
              </p>
            </header>
            <div className="w-auto">
              <p className="mb-2 font-bold">Published</p>
              <p className="text-sm text-zinc-600">
                {fauxData[activePost].date}
              </p>
            </div>
          </div>
          <div className="w-full">
            <p className="mb-2 font-bold">Description</p>
            <p className="min-h-32 text-sm text-zinc-600">
              {fauxData[activePost].description}
            </p>
            <Button
              as="a"
              className="group text-sm"
              text={'Read more'}
              type={'primary'}
              href={createSlug(fauxData[activePost].title)}
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
        {fauxData.slice(4, fauxData.length).map((post, index) => (
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
