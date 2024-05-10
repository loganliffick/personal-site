import Layout from 'components/Layout'
import Section from 'components/Section'
import Tooltip from 'components/Tooltip'
import moment from 'moment'
import Link from 'next/link'
import { BookOpen } from 'phosphor-react'
import slugify from 'slugify'
import { cn } from 'utils/tw'

const Item = (props: {
  comingSoon?: boolean
  date: string
  offset?: string
  title: string
}) => (
  <article
    className="reveal w-full animate-revealSm pb-2"
    style={{ animationDelay: props.offset + 's' }}
  >
    <Link
      aria-description={props.title}
      className={cn(
        'group flex w-full justify-between border-b border-zinc-300 py-4 align-baseline text-zinc-700 transition duration-100 sm:hover:border-zinc-400',
        { 'cursor-not-allowed sm:hover:border-zinc-300': props.comingSoon },
      )}
      href={
        props.comingSoon ? '' : '/blog/' + slugify(props.title, { lower: true })
      }
    >
      <h2 className="font-medium duration-300 ease-bounce">{props.title}</h2>
      <div
        className={cn(
          'flex translate-x-6 items-center gap-2 transition-transform duration-300 ease-bounce sm:group-hover:translate-x-0',
          { 'sm:group-hover:translate-x-6': props.comingSoon },
        )}
      >
        <p className="text-sm opacity-70">
          {moment(props.date).format('MMMM D, YYYY')}
        </p>
        <BookOpen
          className={cn(
            'translate-x-4 opacity-0 transition duration-300 ease-bounce sm:group-hover:translate-x-0 sm:group-hover:opacity-70',
            {
              'sm:group-hover:translate-x-4 sm:group-hover:opacity-0':
                props.comingSoon,
            },
          )}
        />
      </div>
    </Link>
  </article>
)

const Page = () => (
  <Layout>
    <Section>
      <div className="group/tooltip relative w-full">
        <Tooltip text="Coming soon" position="right" />
        <Item title="The invisible brand" date="2024-03-15" comingSoon />
      </div>

      <Item title="Thanks for stopping by" date="2024-02-16" offset="0.2" />
      <Item title="My workspace" date="2024-01-12" offset="0.4" />
    </Section>
  </Layout>
)

export default Page
