import { Inset } from '@/components/Inset'
import { Main } from '@/components/Main'
import { RedactedText } from '@/components/redacted/index'
import { Section } from '@/components/Section'
import { TextLink } from '@/components/TextLink'

export default function Page() {
  return (
    <Main>
      <Section>
        <Inset format>
          <h2>About</h2>
          <p>
            I'm a design engineer at{' '}
            <TextLink href="https://vercel.com" title="Vercel" external />,
            where I make building for the web more enjoyable. Previously, I
            worked at{' '}
            <TextLink href="https://outerbase.com" title="Outerbase" external />
            , Makelog, &{' '}
            <TextLink
              href="https://digitalocean.com"
              title="DigitalOcean"
              external
            />
            .
          </p>

          <h2>Latest</h2>
          <p className="relative">
            On the side, I'm building <RedactedText /> and constantly
            redesigning my <TextLink href="/workspace" title="workspace" />.
          </p>

          <h2>Connect</h2>
          <p>
            You can find me on{' '}
            <TextLink href="https://x.com/logan_liffick" title="X" external />,
            feel free to send a dm.
          </p>
        </Inset>
      </Section>
    </Main>
  )
}
