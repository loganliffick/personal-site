import { Inset } from '@/components/Inset'
import { Main } from '@/components/Main'
import { Section } from '@/components/Section'
import * as meta from './metadata.json'
import { PostImage } from '@/components/archive/PostImage'

export const metadata = meta

export default function Page() {
  return (
    <Main>
      <Section>
        <Inset format>
          <h2>{metadata.title}</h2>
          <p>As of 2025</p>
          <PostImage src="/images/workspace/ws-1.webp" alt="desk" priority />
          <PostImage src="/images/workspace/ws-2.webp" alt="desk" />
          <PostImage src="/images/workspace/ws-3.webp" alt="desk" />
          <PostImage src="/images/workspace/ws-4.webp" alt="desk" />
          <PostImage src="/images/workspace/ws-5.webp" alt="desk" />
        </Inset>
      </Section>
    </Main>
  )
}
