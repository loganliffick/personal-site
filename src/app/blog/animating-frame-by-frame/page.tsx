import { BackButton } from '@/components/BackButton'
import { Article } from '@/components/blog/Article'
import { Headline } from '@/components/layout/Headline'
import { Inset } from '@/components/layout/Inset'
import { Main } from '@/components/layout/Main'
import { Section } from '@/components/layout/Section'
import { TextLink } from '@/components/TextLink'
import * as meta from './metadata.json'

export const metadata = meta

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
          <Article>
            <h2>You in fact can just do things</h2>
            <p>A friendly reminder.</p>
          </Article>
        </Inset>
      </Section>
    </Main>
  )
}
