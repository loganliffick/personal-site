import Card, { CardTwo } from 'components/Card'
import Layout from 'components/Layout'
import Project from 'components/Project'
import Section from 'components/Section'

const Page = () => (
  <Layout>
    <Section>
      <div className="mb-4 flex w-full gap-4">
        <Card
          text="History of space exploration"
          onClick={() => console.log('Here')}
        />
        <Card
          text="History of space exploration and something else i guess idk"
          onClick={() => console.log('Not here')}
        />
      </div>
      <div className="flex w-full gap-4">
        <Card
          text="History of space exploration and something else i guess idk"
          onClick={() => console.log('Not here')}
        />
        <CardTwo text="Movies" onClick={() => console.log('Not here')} />
      </div>
    </Section>
    <Section>
      <Project />
      <Project />
      <Project />
      <Project />
    </Section>
    <Section width="3xl">
      <h1 className="h-[600px]">Hello world</h1>
    </Section>
  </Layout>
)

export default Page
