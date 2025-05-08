import { Br } from '@/components/Br'
import { Headline } from '@/components/Headline'
import { Inset } from '@/components/Inset'
import { Main } from '@/components/Main'
import { PostCard } from '@/components/PostCard'
import { Section } from '@/components/Section'
import { TextLink } from '@/components/TextLink'
import { getPosts } from '@/lib/getPosts'

export default async function Page() {
  const posts = await getPosts()

  return (
    <Main>
      <Section>
        <Inset>
          <Headline
            title="About"
            subhead={
              <>
                I am a design engineer at{' '}
                <TextLink href="https://vercel.com" title="Vercel" external />{' '}
                helping to make the web faster.
                <Br /> Previously, I worked at{' '}
                <TextLink
                  href="https://outerbase.com"
                  title="Outerbase"
                  external
                />
                , Makelog, &{' '}
                <TextLink
                  href="https://digitalocean.com"
                  title="DigitalOcean"
                  external
                />
                .
              </>
            }
          />

          <Headline
            title="Latest"
            subhead={
              <>
                On the side, I'm building out{' '}
                <span className="cursor-help font-mono">▓▓▓▒▒░░░</span> and
                forever working on my{' '}
                <TextLink href="/workspace" title="workspace" />.
              </>
            }
          />

          <Headline
            title="Connect"
            subhead={
              <>
                You can find me on{' '}
                <TextLink
                  href="https://x.com/logan_liffick"
                  title="X"
                  external
                />
                .
              </>
            }
          />

          <Headline title="From the lab" subhead="" />

          {/* <ul className="flex flex-col gap-2.5">
            {posts.map((post, index) => (
              <PostCard data={{ ...post }} key={index} />
            ))}
          </ul> */}
        </Inset>
      </Section>
    </Main>
  )
}
