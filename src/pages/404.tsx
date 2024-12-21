import Button from 'components/Button'
import Layout from 'components/Layouts/Layout'
import Section from 'components/Section'

const Page = () => (
  <Layout>
    <Section>
      <h1 className="mb-3 font-mono text-8xl font-black">
        <span className="reveal inline-block animate-[reveal_1s_cubic-bezier(0.2,-0.25,0,1.6)_forwards] text-blue-500">
          4
        </span>
        <span className="reveal inline-block animate-[reveal_1s_0.1s_cubic-bezier(0.2,-0.25,0,1.6)_forwards] text-indigo-500">
          0
        </span>
        <span className="reveal inline-block animate-[reveal_1s_0.2s_cubic-bezier(0.2,-0.25,0,1.6)_forwards] text-violet-500">
          4
        </span>
      </h1>
      <h2 className="mb-12 animate-revealSm text-zinc-600">
        This is a throwback, iykyk
      </h2>
      <div className="animate-rotate">
        <Button garnish href={'./'} title={`Take me home`} />
      </div>
    </Section>
  </Layout>
)

export default Page
