import FontProvider from 'components/FontProvider'
import Footer from 'components/Footer'
import MetaTags from 'components/MetaTags'
import Nav from 'components/Nav'
import WindowsMode from 'components/WindowsMode'

const Layout = (props: {
  children?: React.ReactNode
  metaTagsProps?: React.ComponentProps<typeof MetaTags>
}) => {
  return (
    <FontProvider>
      <MetaTags {...(props.metaTagsProps ?? {})} />
      <div className="h-[100%]">
        <Nav />
        <main className="flex h-full w-full flex-col items-center justify-center px-6 sm:px-10">
          {props.children}
        </main>
        <WindowsMode />
        <Footer />
      </div>
    </FontProvider>
  )
}

export default Layout
