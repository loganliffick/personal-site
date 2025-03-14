import Footer from 'components/Footer'
import FontProvider from 'components/Layouts/Providers/FontProvider'
import MetaTagsProvider from 'components/Layouts/Providers/MetaTagsProvider'
import Nav from 'components/Nav'

type LayoutProps = {
  children?: React.ReactNode
  metaTags?: React.ComponentProps<typeof MetaTagsProvider>
}

const Layout = ({ children, metaTags }: LayoutProps) => (
  <FontProvider>
    <MetaTagsProvider {...(metaTags ?? {})} />
    <div className="h-[100%]">
      <Nav />
      <main className="flex h-full w-full flex-col items-center justify-center px-6 sm:px-10">
        {children}
      </main>
      {/* <MysteryItem /> */}
      <Footer />
    </div>
  </FontProvider>
)

export default Layout
