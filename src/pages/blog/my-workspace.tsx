import Layout from 'components/Layout'
import Section from 'components/Section'
import TextLink from 'components/TextLink'
import BackButton from 'components/blog/BackButton'
import Image from 'next/image'
import workspace1 from 'public/images/blog/my-workspace/workspace-1.jpg'
import workspace2 from 'public/images/blog/my-workspace/workspace-2.jpg'

const Page = () => (
  <Layout
    metaTagsProps={{
      title: 'My workspace',
      description: `Logan Liffick's workspace.`,
    }}
  >
    <Section className="mb-0 mt-20">
      <article className="prose prose-zinc w-full max-w-prose prose-headings:font-semibold prose-img:rounded-3xl">
        <header>
          <BackButton />
          <h1 className="animate-fade">My workspace</h1>
          <p className="animate-fadeMd">January 12, 2024</p>
        </header>
        <section className="animate-fadeLg">
          <Image src={workspace1} alt="Image" priority={true} />
          <h2>A third space</h2>
          <p>
            Since the world went remote, I've been obsessed with making my
            workspace a sort of sanctuary. A detachment from everyday life that
            lets me create in peace without any of the worries of the outside
            world.
          </p>
          <p>
            It started with the standing desk, fashioned from a piece of birch
            butcher's block and a Fully Jarvis frame, a nice blend of technology
            and the natural world that surrounds it. As the center-piece, the
            desk became the room's overall aesthetic: bright woods, matte black
            hardware, and furniture exuding an aura of coziness.
          </p>
          <p>
            As is with all hobbies, I began pouring more and more time into the
            space. Tweaking various elements, shifting furniture around, and
            buying new pieces —along with some much needed cord management.
          </p>
          <p>
            I poured so much time into the space that it was featured on{' '}
            <TextLink
              href="https://workspaces.xyz"
              text="Workspaces"
              external
            />{' '}
            in its{' '}
            <TextLink
              href="https://www.workspaces.xyz/p/209-logan-liffick"
              text="209th"
              external
            />{' '}
            and later{' '}
            <TextLink
              href="https://www.workspaces.xyz/p/292-logan-liffick"
              text="292nd"
              external
            />{' '}
            editions.
          </p>

          <h2>2024 setup</h2>
          <p>
            As a taller person, I've been a fan of third party monitor arms for
            as long as I can remember. In the past, I've clung to cheap and
            sturdy pole-arm mounts and have found myself wanting a more premium
            product.
          </p>
          <p>
            Enter the <s>Fully Jarvis</s> Herman Miller arm.
          </p>
          <p>
            The desk itself is a Fully Jarvis and I trust their products —no
            matter who's selling them. So, I kept it in the family and purchased
            their monitor arm after some scrupulous research, S/O{' '}
            <TextLink
              href="https://www.youtube.com/watch?v=-UBBm8dUNP8"
              text="Watts' review"
              external
            />
            .
          </p>
          <Image src={workspace2} alt="Image" priority={true} />
          <p>
            Further that with some mood lighting from the Philips Hue collection
            and Voilà, the 2024 setup featuring a floating Studio Display.
          </p>
          <h3>Details</h3>
          <ul>
            <li>Apple Studio Display</li>
            <li>16" Macbook pro M3</li>
            <li>Apple Magic Keyboard & Trackpad</li>
            <li>Fully Jarvis standing desk frame</li>
            <li>Birch butcher's block countertop</li>
            <li>Fully Jarvis dual monitor arm</li>
            <li>Philips Hue Play Lightstrip</li>
          </ul>
        </section>
      </article>
    </Section>
  </Layout>
)

export default Page
