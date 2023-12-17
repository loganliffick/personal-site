import Link from 'next/link';

const Nav = () => (
  <header className="mt-8 flex w-full items-center justify-center px-6 text-zinc-800 sm:px-10">
    <nav className="w-full max-w-5xl">
      <Link className="text-xl font-medium" href="/">
        Logan Liffick
      </Link>
    </nav>
  </header>
);

export default Nav;
