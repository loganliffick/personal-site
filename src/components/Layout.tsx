import FontProvider from 'components/FontProvider'
import Footer from 'components/Footer'
import MetaTags from 'components/MetaTags'
// import Multiplayer from 'components/mltiplr/Multiplayer'
import Nav from 'components/Nav'

const Layout = (props: {
  children?: React.ReactNode
  metaTagsProps?: React.ComponentProps<typeof MetaTags>
}) => {
  return (
    <FontProvider>
      <MetaTags {...(props.metaTagsProps ?? {})} />
      <>
        <Nav />
        <main className="flex w-full flex-col items-center justify-center px-6 sm:px-10">
          {props.children}
        </main>
        {/* <Multiplayer /> */}
        <Footer />
      </>
    </FontProvider>
  )
}

export default Layout
