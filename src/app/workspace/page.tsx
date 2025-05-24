import { Inset } from '@/components/Inset'
import { Main } from '@/components/Main'
import { Section } from '@/components/Section'
import meta from './metadata.json'
import { PostImage } from '@/components/image/PostImage'
import pointData from './exploreData.json'

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
            explorePoints={pointData['ws-0']}
          />
          <PostImage
            src="/images/workspace/ws-2.webp"
            alt="Desk details"
            priority
            explorePoints={pointData['ws-2']}
          />
          <PostImage
            src="/images/workspace/ws-3.webp"
            alt="Desk details continued"
            explorePoints={pointData['ws-3']}
          />
          <PostImage
            src="/images/workspace/ws-1.webp"
            alt="Desk plant"
            explorePoints={pointData['ws-1']}
          />
          <PostImage
            src="/images/workspace/ws-4.webp"
            alt="file cabinet"
            explorePoints={pointData['ws-4']}
          />
          <PostImage
            src="/images/workspace/ws-5.webp"
            alt="iPod Touch"
            explorePoints={pointData['ws-5']}
          />
          <PostImage
            src="/images/workspace/ws-7.webp"
            alt="Wall hanger"
            explorePoints={pointData['ws-7']}
          />
          <PostImage
            src="/images/workspace/ws-9.webp"
            alt="Game Boy"
            explorePoints={pointData['ws-9']}
          />
          <PostImage
            src="/images/workspace/ws-6.webp"
            alt="Book shelf"
            explorePoints={pointData['ws-6']}
          />
          <PostImage
            src="/images/workspace/ws-8.webp"
            alt="Book shelf details"
            explorePoints={pointData['ws-8']}
          />
        </Inset>
      </Section>
    </Main>
  )
}
