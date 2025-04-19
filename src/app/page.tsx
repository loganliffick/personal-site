import { Br } from '@/components/layout/Br'
import { Headline } from '@/components/layout/Headline'
import { Inset } from '@/components/layout/Inset'
import { Main } from '@/components/layout/Main'
import { Section } from '@/components/layout/Section'
import { PostCard } from '@/components/PostCard'
import { TextLink } from '@/components/TextLink'
import { getSortedPosts } from '@/lib/getPosts'

export default async function Page() {
  const posts = await getSortedPosts()

  return (
    <Main>
      <Section>
        <Inset>
          <Headline
            title="Logan Liffick"
            subhead={
              <>
                Design Engineer M-F with{' '}
                <TextLink href="https://vercel.com" title="▲Vercel" external />.
                <Br /> Previously with{' '}
                <TextLink
                  href="https://outerbase.com"
                  title="Outerbase"
                  external
                />
                , <span className="cursor-not-allowed">Makelog</span>, &{' '}
                <TextLink
                  href="https://digitalocean.com"
                  title="DigitalOcean"
                  external
                />
                .
              </>
            }
          />

          <ul className="flex flex-col gap-2.5">
            {posts.map((post, index) => (
              <PostCard data={{ ...post }} key={index} />
            ))}
          </ul>
        </Inset>
      </Section>
    </Main>
  )
}
