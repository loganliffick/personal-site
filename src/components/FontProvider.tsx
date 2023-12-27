import { Figtree } from 'next/font/google'

const figtree = Figtree({ variable: '--figtree', subsets: ['latin'] })

const FontProvider = (props: { children?: React.ReactNode }) => (
  <div className={`${figtree.variable} font-sans`}>{props.children}</div>
)

export default FontProvider
