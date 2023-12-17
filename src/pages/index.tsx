import MetaTags from 'components/MetaTags';
import Section from 'components/Section';

const Page = () => {
  return (
    <>
      <MetaTags />
      <main>
        <Section>
          <h1 className="h-[800px] font-bold">Hello world</h1>
        </Section>
      </main>
    </>
  );
};

export default Page;
