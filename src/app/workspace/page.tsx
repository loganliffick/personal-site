import { Inset } from '@/components/Inset'
import { Main } from '@/components/Main'
import { Section } from '@/components/Section'
import * as meta from './metadata.json'
import { PostImage } from '@/components/image/PostImage'

const points = [
  {
    posX: 155,
    posY: 120,
    text: 'Figma hat',
  },
  {
    posX: 320,
    posY: 150,
    text: 'Apple Studio Display',
    link: 'https://apple.com/studio-display/',
  },
  {
    posX: 470,
    posY: 210,
    text: 'Jarvis dual monitor arm',
    link: 'https://store.hermanmiller.com/office-furniture-desk-accessories-organization/jarvis-dual-monitor-arm/2548840.html',
  },
  {
    posX: 480,
    posY: 400,
    text: 'Baron Fig Mastermind desk pad',
    link: 'https://baronfig.com/products/mastermind',
  },
]

export const metadata = meta

export default function Page() {
  return (
    <Main>
      <Section>
        <Inset format>
          <h2>{metadata.title}</h2>
          <p>2025 edition.</p>
          <PostImage
            src="/images/workspace/ws-0.webp"
            alt="Desk overview"
            priority
            explorePoints={{ points }}
          />
          <PostImage
            src="/images/workspace/ws-2.webp"
            alt="Desk details"
            priority
          />
          <PostImage
            src="/images/workspace/ws-3.webp"
            alt="Desk details continued"
          />
          <PostImage src="/images/workspace/ws-1.webp" alt="Desk plant" />
          <PostImage src="/images/workspace/ws-4.webp" alt="file cabinet" />
          <PostImage src="/images/workspace/ws-5.webp" alt="iPod Touch" />
          <PostImage src="/images/workspace/ws-6.webp" alt="Book shelf" />
          <PostImage src="/images/workspace/ws-7.webp" alt="Wall hanger" />
          <PostImage
            src="/images/workspace/ws-8.webp"
            alt="Book shelf details"
          />
        </Inset>
      </Section>
    </Main>
  )
}
