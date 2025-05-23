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
          <p>2025 edition.</p>
          <PostImage
            src="/images/workspace/ws-0.webp"
            alt="Desk overview"
            priority
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
