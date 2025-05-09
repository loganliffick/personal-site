import { Article } from '@/components/Article'
// import { BackButton } from '@/components/BackButton'
import { Inset } from '@/components/Inset'
import { Main } from '@/components/Main'
import { PostImage } from '@/components/PostImage'
import { Section } from '@/components/Section'
import { TextLink } from '@/components/TextLink'
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
          {/* <Article>
            <h2>Third space</h2>
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
            <PostImage
              alt="Computer setup"
              priority={true}
              src={'/images/workspace/setup.webp'}
            />
            <h2>Updates for 2024</h2>
            <p>
              As a taller person, I've been a fan of third party monitor arms
              for as long as I can remember. In the past, I've opted for sturdy
              pole-arm mounts for their simplicity and price-point, but more
              recently found myself hunting for a more premium product.
            </p>
            <p>Enter the Fully Jarvis arm.</p>
            <p>
              The desk itself is a Fully Jarvis and I trust their products —no
              matter who's selling them, so I kept it in the family and
              purchased their monitor arm after some scrupulous research. Many
              thanks to{' '}
              <TextLink
                external
                href="https://www.youtube.com/watch?v=-UBBm8dUNP8"
                title="Watts' review"
              />{' '}
              for helping me pull the trigger.
            </p>
            <p>
              Additionally, I added backdrop lighting with a few pieces from the
              Philips Hue collection to help ease eye strain and give the room a
              little ambiance.
            </p>
            <p>
              On the less-technical side, I picked up a Studio Neat Mark One pen
              and a few Baron Fig notebooks.
            </p>
            <h2>Studio details</h2>
            <ul>
              <li>Apple Studio Display</li>
              <li>16" Macbook pro M4</li>
              <li>Apple Magic Keyboard & Trackpad</li>
              <li>Fully Jarvis standing desk frame</li>
              <li>Birch butcher's block countertop</li>
              <li>Fully Jarvis dual monitor arm</li>
              <li>Philips Hue Play Lightstrip</li>
            </ul>
          </Article> */}
        </Inset>
      </Section>
    </Main>
  )
}
