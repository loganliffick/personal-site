import { BackButton } from '@/components/BackButton'
import { BlogImage } from '@/components/blog/BlogImage'
import { Article } from '@/components/layout/Article'
import { Headline } from '@/components/layout/Headline'
import { Inset } from '@/components/layout/Inset'
import { Main } from '@/components/layout/Main'
import { Section } from '@/components/layout/Section'
import { TextLink } from '@/components/TextLink'
import setupImg from './assets/setup.webp'

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
          <Article>
            <h2>A third space</h2>
            <p>
              Since the world went remote, I've been obsessed with making my
              workspace a sort of sanctuary. A detachment from everyday life
              that lets me create in peace without any of the worries of the
              outside world.
            </p>
            <p>
              It started with the standing desk, fashioned from a piece of birch
              butcher's block and a Fully Jarvis frame, a nice blend of
              technology and the natural world that surrounds it. As the
              center-piece, the desk became the room's overall aesthetic: bright
              woods, matte black hardware, and furniture exuding an aura of
              coziness.
            </p>
            <p>
              As is with all hobbies, I began pouring more and more time into
              the space. Tweaking various elements, shifting furniture around,
              and buying new pieces —along with some much needed cord
              management.
            </p>
            <p>
              I poured so much time into the space that it was featured on{' '}
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
            <h2>2024 setup</h2>
            <p>
              As a taller person, I've been a fan of third party monitor arms
              for as long as I can remember. In the past, I've clung to cheap
              and sturdy pole-arm mounts and have found myself wanting a more
              premium product.
            </p>
            <p>
              Enter the <s>Fully Jarvis</s> Herman Miller arm.
            </p>
            <p>
              The desk itself is a Fully Jarvis and I trust their products —no
              matter who's selling them. So, I kept it in the family and
              purchased their monitor arm after some scrupulous research, S/O
              Watts' review{' '}
              <TextLink
                external
                href="https://www.youtube.com/watch?v=-UBBm8dUNP8"
                title="Watts' review"
              />
              .
            </p>
            <BlogImage src={setupImg.src} alt="Computer setup" />
            <p>
              Further that with some mood lighting from the Philips Hue
              collection and Voilà, the 2024 setup featuring a floating Studio
              Display.
            </p>
            <h2>Details</h2>
            <ul>
              <li>Apple Studio Display</li>
              <li>16" Macbook pro M4</li>
              <li>Apple Magic Keyboard & Trackpad</li>
              <li>Fully Jarvis standing desk frame</li>
              <li>Birch butcher's block countertop</li>
              <li>Fully Jarvis dual monitor arm</li>
              <li>Philips Hue Play Lightstrip</li>
            </ul>
          </Article>
        </Inset>
      </Section>
    </Main>
  )
}
