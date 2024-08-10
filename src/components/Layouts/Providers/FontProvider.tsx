import { Figtree } from 'next/font/google'

const figtree = Figtree({ variable: '--figtree', subsets: ['latin'] })

type FontProviderProps = {
  children: React.ReactNode
}

const FontProvider = ({ children }: FontProviderProps) => (
  <div className={`${figtree.variable} font-sans`}>{children}</div>
)

export default FontProvider
