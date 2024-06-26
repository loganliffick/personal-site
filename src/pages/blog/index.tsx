import Layout from 'components/Layout'
import Section from 'components/Section'
// import Tooltip from 'components/Tooltip'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import slugify from 'slugify'

const Item = (props: {
  comingSoon?: boolean
  date: string
  offset?: string
  title: string
  image: string
}) => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    setRotation(Math.floor(Math.random() * 41) - 20)
  }, [])

  return (
    <Link
      className="scaleFade animate-scaleFadeBlog -mr-10"
      style={{ animationDelay: props.offset + 's' }}
      href={
        props.comingSoon ? '' : '/blog/' + slugify(props.title, { lower: true })
      }
    >
      <article
        className="relative h-40 w-48 origin-center overflow-hidden rounded-3xl shadow-xl transition-all duration-300 ease-bounce after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-3xl after:border-[5px] after:border-white/50 after:transition-[border] hover:mr-10 hover:!rotate-0 hover:!scale-110 hover:shadow-2xl hover:after:border-8 active:!scale-100 active:after:border-[12px]"
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

const Page = () => (
  <Layout>
    <Section className="max-w-full">
      {/* <div className="group/tooltip relative w-full"> */}
      {/* <Tooltip text="Coming soon" position="right" /> */}
      {/* </div> */}
      <div className="mx-auto flex w-full max-w-min bg-blue-200/0">
        <Item
          title="The invisible brand"
          date="2024-03-15"
          image="/images/feb-2024/seinfeld.jpg"
        />
        <Item
          title="Thanks for stopping by"
          date="2024-02-16"
          image="/images/blog/my-workspace/workspace-1.jpg"
          offset="0.1"
        />
        <Item
          title="My workspace"
          date="2024-01-12"
          image="/images/feb-2024/solarpunk.jpg"
          offset="0.2"
        />
        <Item
          title="My workspace"
          date="2024-01-12"
          image="/images/jan-2024/workspace.jpg"
          offset="0.3"
        />
        {/* <Item title="My workspace" date="2024-01-12" offset="0.4" /> */}
      </div>
    </Section>
  </Layout>
)

export default Page
