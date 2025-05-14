import { Inset } from '@/components/Inset'
import { Main } from '@/components/Main'
import { Section } from '@/components/Section'
import * as meta from './metadata.json'

export const metadata = meta

export default function Page() {
  return (
    <Main>
      <Section>
        <Inset format>
          {/* <BackButton /> */}

          <h2>{metadata.title}</h2>
          <p>{metadata.description}</p>
        </Inset>
      </Section>
    </Main>
  )
}
