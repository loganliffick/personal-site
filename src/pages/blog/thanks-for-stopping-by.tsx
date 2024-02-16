import Layout from 'components/Layout'
import Section from 'components/Section'
import TextLink from 'components/TextLink'
import BackButton from 'components/blog/BackButton'
import Image from 'next/image'
import testImage from 'public/images/blog/my-workspace/workspace-2.jpg'

const Page = () => (
  <Layout
    metaTagsProps={{
      title: 'Thanks for stopping by',
      description: `A brief explanation as to what this site actually is.`,
    }}
  >
    <Section className="mb-0 mt-20">
      <article className="prose prose-zinc w-full max-w-prose prose-headings:font-semibold prose-img:rounded-3xl">
        <header>
          <BackButton />
          <h1 className="animate-fade">Thanks for stopping by</h1>
          <p className="animate-fadeMd">February 16, 2024</p>
        </header>
        <section className="animate-fadeLg">
          <h2>A new contribution</h2>
          <p>
            Every year or so I draw up what my personal site could look like as
            a Github-style contribution graph, and every year I shelf that idea
            for something else teeming in trend.
          </p>
          <p>This year was different.</p>
          <Image src={testImage} alt="Image" />
          <p>
            As January rolled through, I saw my friend{' '}
            <TextLink
              href="https://twitter.com/raffichill"
              text="Raffi"
              external
            />{' '}
            put out a little project called{' '}
            <TextLink href="https://figwig.app/" text="Figwig" external /> and
            it served as the perfect inspiration for what this hodge-podge
            Github x Notion x Pinterest style site could be.
          </p>
          <p>Many thanks, Raffi 🤝</p>
          <h2>All about the fizz</h2>
          <p>
            The site needed to ring <i>effervescent</i>.
          </p>
          <p>
            Light, airy, in-the-moment updates I can quickly afix to a digital
            cork board. All things side projects, work stuff, dog pictures, and
            quirky explorations to boot.
          </p>
          <h2>{`<3`}</h2>
          <p>
            Thank you, for reading this, for checking out the site and spending
            some time exploring what I've made, for inspiring me to add more.
          </p>
          <p>With love,</p>
          <p>— Logan</p>
        </section>
      </article>
    </Section>
  </Layout>
)

export default Page
