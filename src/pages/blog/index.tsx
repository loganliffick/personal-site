import Layout from 'components/Layout'
import Section from 'components/Section'
// import Tooltip from 'components/Tooltip'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import slugify from 'slugify'

const fauxData = [
  {
    title: `The sticks`,
    description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae`,
    image: '/images/feb-2024/seinfeld.jpg',
    date: 'January 5th, 2024',
  },
  {
    title: `The stones`,
    description: `Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae`,
    image: '/images/blog/my-workspace/workspace-1.jpg',
    date: 'March 2nd, 2024',
  },
  {
    title: `The bones`,
    description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae`,
    image: '/images/feb-2024/solarpunk.jpg',
    date: 'March 15th, 2024',
  },
  {
    title: `The breaks`,
    description: `I know a lot about a little, that's my guy I guess. That's my fiddle. For rizzle, the rizzler be up in the fizzler listening to quizzler getting better at school on chrizzler.`,
    image: '/images/jan-2024/workspace.jpg',
    date: 'April 1st, 2024',
  },
]

const Item = (props: {
  comingSoon?: boolean
  date: string
  offset?: string
  title: string
  description?: string
  image: string
  setActivePost: React.MouseEventHandler<HTMLAnchorElement>
}) => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    setRotation(Math.floor(Math.random() * 41) - 20)
  }, [])

  return (
    <Link
      className="scaleFade -mr-10 animate-scaleFadeBlog"
      style={{ animationDelay: props.offset + 's' }}
      href={
        props.comingSoon ? '' : '/blog/' + slugify(props.title, { lower: true })
      }
      onMouseEnter={props.setActivePost}
    >
      <article
        className="relative h-40 w-48 origin-center overflow-hidden rounded-3xl shadow-xl transition-all duration-300 ease-bounce will-change-transform after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-3xl after:border-[5px] after:border-white/50 after:transition-[border] hover:mr-10 hover:!rotate-0 hover:!scale-110 hover:shadow-2xl hover:after:border-8 active:!scale-100 active:after:border-[12px]"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* <h2 className="font-medium duration-300 ease-bounce">{props.title}</h2>
        <p className="text-sm opacity-70">
          {moment(props.date).format('MMMM D, YYYY')}
        </p> */}
        <Image
          src={props.image}
          className="object-cover"
          fill
          priority
          sizes="100"
          alt="image"
        />
      </article>
    </Link>
  )
}

const Page = () => {
  const [activePost, setActivePost] = useState(0)

  return (
    <Layout>
      <Section className="max-w-full">
        <h2 className="mb-16 text-xl font-medium">Recent Posts</h2>
        <div className="mx-auto flex w-full max-w-min bg-blue-200/0">
          {fauxData.map((item, index) => (
            <Item
              title={item.title}
              description={item.description}
              date={item.date}
              image={item.image}
              setActivePost={() => setActivePost(index)}
              key={index}
              offset={`${index * 0.1}`}
            />
          ))}
        </div>
        <div className="mx-auto mt-20 flex w-full max-w-lg justify-between">
          <div className="w-2/3">
            <header className="mb-8">
              <p className="mb-2 font-bold">Title</p>
              <p className="text-sm text-zinc-600">
                {fauxData[activePost].title}
              </p>
            </header>
            <div className="w-full">
              <p className="mb-2 font-bold">Published</p>
              <p className="text-sm text-zinc-600">
                {fauxData[activePost].date}
              </p>
            </div>
          </div>
          <div className="min-h-40 w-full">
            <p className="mb-2 font-bold">Description</p>
            <p className="text-sm text-zinc-600">
              {fauxData[activePost].description}
            </p>
          </div>
        </div>
      </Section>
      <Section className="mt-10">
        <h2 className="mb-12 text-xl font-medium">Older Posts</h2>
      </Section>
    </Layout>
  )
}

export default Page
