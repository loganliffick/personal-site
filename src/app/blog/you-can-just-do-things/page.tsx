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
            <p>
              I've been obsessed with creating the perfect sanctuary since the
              world went remote. A space that works for how I work where I can
              create without distraction from the outside world.
            </p>
            <p>
              It started with a standing desk, crafted from a slab of butcher's
              block and a Fully Jarvis frame, a sleek fusion of mechanical
              precision and organic warmth. Serving as the studio's focal point,
              the desk sets the tone for the entire space: light wood tones,
              matte black accents, and inviting, cozy furnishings.
            </p>
            <p>
              As with all hobbies, I began pouring more and more time into the
              space rearranging furniture, experimenting with accent pieces, and
              picking up new additions along the way. Most importantly, I
              finally tackled some much needed cord management.
            </p>
            <p>
              It turned out to be a worthy investment and was featured on{' '}
              <TextLink
                external
                href="https://workspaces.xyz/"
                title="Workspaces"
              />{' '}
              in its{' '}
              <TextLink
                external
                href="https://www.workspaces.xyz/p/209-logan-liffick"
                title="209th"
              />{' '}
              and{' '}
              <TextLink
                external
                href="https://www.workspaces.xyz/p/292-logan-liffick"
                title="292nd"
              />{' '}
              editions.
            </p>
          </Article>
        </Inset>
      </Section>
    </Main>
  )
}
