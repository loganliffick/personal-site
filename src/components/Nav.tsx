import Link from 'next/link'

const Nav = () => (
  <header className="mt-8 flex w-full items-center justify-center px-6 text-zinc-800 sm:px-10">
    <nav className="flex w-full max-w-5xl justify-between">
      <Link className="text-xl font-medium" href="/">
        Logan Liffick
      </Link>
    </nav>
  </header>
)

export default Nav
