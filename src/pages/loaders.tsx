import Layout from 'components/Layout'
import { ImageLoader, Spinner, WarpHole } from 'components/Loaders'

const Box = (props: { children?: React.ReactNode }) => (
  <div className="flex aspect-video w-[400px] items-center justify-center rounded-3xl border-2 border-zinc-200">
    {props.children}
  </div>
)

const Page = () => {
  return (
    <Layout>
      <div className="flex min-h-96 flex-col items-center gap-6 py-20 text-xl font-medium">
        <Box>
          <WarpHole />
        </Box>
        <Box>
          <ImageLoader />
        </Box>
        <Box>
          <Spinner />
        </Box>
      </div>
    </Layout>
  )
}

export default Page
