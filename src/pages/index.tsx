import Layout from 'components/Layout'
import Project from 'components/Project'
import ProjectMini from 'components/ProjectMini'
import Tag from 'components/Tag'

const Page = () => (
  <Layout>
    <Tag year="2024" />
    <Project
      direction="alt"
      text="I’m a Design Engineer at Outerbase, a visual database management tool."
      linkProps={{ href: 'https://outerbase.com', text: 'Visit site' }}
    />
    <ProjectMini
      colors={1}
      text="I finally built out SpltJS for React"
      linkProps={{ href: 'https://react.spltjs.com', text: 'Check it out' }}
    />
    <Project
      text="I worked as Director of Product & Design at Makelog, where we helped companies share what they shipped."
      linkProps={{ href: 'https://makelog.com', text: 'Visit site' }}
    />
    <Tag year="2023" />
    <Project
      direction="alt"
      text="I spent 2 amazing years with DigitalOcean. I had the joy of working on Hacktoberfest, a post-IPO brand refresh, and various bits and pieces of product and community."
      linkProps={{ href: 'https://digitalocean.com', text: 'Visit the ocean' }}
    />
    <Project
      text="My workspace was featured on Workspaces again!"
      linkProps={{ href: 'https://makelog.com', text: 'Visit site' }}
    />
  </Layout>
)

export default Page
