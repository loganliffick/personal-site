import Layout from 'components/Layout';
import Section from 'components/Section';

const Page = () => (
  <Layout>
    <Section>
      <h1 className="text-3xl font-medium">Hello world</h1>
      <div className="h-20 w-full bg-blue-300" />
    </Section>
    <Section width="3xl">
      <h1 className="h-[600px]">Hello world</h1>
    </Section>
  </Layout>
);

export default Page;
