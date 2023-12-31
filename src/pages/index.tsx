import Layout from 'components/Layout'
import Project from 'components/Project'
import Section from 'components/Section'

const Page = () => (
  <Layout>
    <Section>
      <Project />
    </Section>
    <Section width="3xl">
      <h1 className="h-[600px]">Hello world</h1>
    </Section>
  </Layout>
)

export default Page
