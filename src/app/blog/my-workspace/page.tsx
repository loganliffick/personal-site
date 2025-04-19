import { BackButton } from '@/components/BackButton'
import { Article } from '@/components/layout/Article'
import { Headline } from '@/components/layout/Headline'
import { Inset } from '@/components/layout/Inset'
import { Main } from '@/components/layout/Main'
import { Section } from '@/components/layout/Section'

export const metadata = {
  title: 'My Workspace',
  date: '2024-01-12',
  description: 'A taste of the day to day workspace of Logan Liffick.',
}

export default function Page() {
  return (
    <Main>
      <Section>
        <Inset>
          <BackButton />
          <Headline
            title={metadata.title}
            subhead={metadata.description}
            date={metadata.date}
          />
          <Article>hello this is a blog...</Article>
          <div className="h-[1000px]" />
        </Inset>
      </Section>
    </Main>
  )
}
