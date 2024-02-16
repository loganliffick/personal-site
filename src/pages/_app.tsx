import { GoogleAnalytics } from '@next/third-parties/google'
import type { AppProps } from 'next/app'
import 'styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_ANALYTICS_ID ?? ''} />
  </>
)

export default App
