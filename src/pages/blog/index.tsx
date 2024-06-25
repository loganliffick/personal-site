import Layout from 'components/Layout'
import Section from 'components/Section'
// import Tooltip from 'components/Tooltip'
import moment from 'moment'
import Link from 'next/link'
import slugify from 'slugify'

const Item = (props: {
  comingSoon?: boolean
  date: string
  offset?: string
  title: string
}) => (
  <Link
    className="reveal -mr-10 animate-revealSm"
    style={{ animationDelay: props.offset + 's' }}
    href={
      props.comingSoon ? '' : '/blog/' + slugify(props.title, { lower: true })
    }
  >
    <article
      className="h-40 w-48 overflow-hidden rounded-3xl bg-indigo-300 shadow-xl transition-all after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-3xl after:border-[6px] after:border-white/50 hover:mx-10 hover:!rotate-0 hover:!scale-105"
      style={{ transform: `rotate(${Math.floor(Math.random() * 10)}deg)` }}
    >
      <h2 className="font-medium duration-300 ease-bounce">{props.title}</h2>
      <p className="text-sm opacity-70">
        {moment(props.date).format('MMMM D, YYYY')}
      </p>
    </article>
  </Link>
)

const Page = () => (
  <Layout>
    <Section>
      {/* <div className="group/tooltip relative w-full"> */}
      {/* <Tooltip text="Coming soon" position="right" /> */}
      {/* </div> */}
      <div className="flex w-full bg-blue-200/50">
        <Item title="The invisible brand" date="2024-03-15" />
        <Item title="Thanks for stopping by" date="2024-02-16" offset="0.2" />
        <Item title="My workspace" date="2024-01-12" offset="0.4" />
      </div>
    </Section>
  </Layout>
)

export default Page
