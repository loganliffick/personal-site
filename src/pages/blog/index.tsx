import Layout from 'components/Layout'
import Section from 'components/Section'
import moment from 'moment'
import Link from 'next/link'
import { HandPointing } from 'phosphor-react'
import slugify from 'slugify'

const Item = (props: { date: string; title: string; offset?: string }) => (
  <article
    className="reveal w-full animate-revealSm pb-2"
    style={{ animationDelay: props.offset + 's' }}
  >
    <Link
      aria-description={props.title}
      className="group flex w-full justify-between border-b border-zinc-300 py-4 align-baseline text-zinc-700 transition duration-100 sm:hover:border-zinc-400 sm:active:scale-x-95"
      href={'/blog/' + slugify(props.title, { lower: true })}
    >
      <h2 className="font-medium duration-300 ease-bounce">{props.title}</h2>
      <div className="flex translate-x-6 items-center gap-2 transition-transform duration-300 ease-bounce sm:group-hover:translate-x-0">
        <p className="text-sm opacity-70">
          {moment(props.date).format('MMMM D, YYYY')}
        </p>
        <HandPointing className="translate-x-4 rotate-45 opacity-0 transition duration-300 ease-bounce sm:group-hover:translate-x-0 sm:group-hover:opacity-70" />
      </div>
    </Link>
  </article>
)

const Page = () => (
  <Layout>
    <Section>
      <Item title="The collector's bounty" date="2024-02-04" />
      <Item title="Maybe atlas shrugged" date="2024-01-04" offset="0.2" />
      <Item title="Fortress of Solitude" date="2024-01-12" offset="0.4" />
    </Section>
  </Layout>
)

export default Page
