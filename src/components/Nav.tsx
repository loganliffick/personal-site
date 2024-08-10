import Button from 'components/Button'
import useClickOutside from 'hooks/useClickOutside'
import Link, { LinkProps } from 'next/link'
import { useState } from 'react'
import { cn } from 'utils/tw'

type MenuItemProps = {
  external?: boolean
  href: LinkProps['href']
  title: string
}

const MenuItem = ({ external = true, href, title }: MenuItemProps) => (
  <li>
    <Link
      aria-label={title}
      className="block rounded-xl px-4 py-3 font-medium text-zinc-700 sm:hover:bg-zinc-100"
      href={href}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {title}
    </Link>
  </li>
)

const Nav = () => {
  const [open, setOpen] = useState(false)

  const menuRef = useClickOutside(() => {
    setOpen(false)
  })

  return (
    <header className="relative z-10 mt-6 flex w-full items-center justify-center px-6 text-zinc-700 sm:mt-16">
      <nav className="flex w-full max-w-lg items-center justify-between">
        <Link className="text-xl" href="/">
          Logan Liffick
        </Link>
        <nav className="flex">
          <Button title="Blog" href={'/blog'} variant="secondary" />
          <div className="relative z-50" ref={menuRef}>
            <Button
              onClick={() => {
                setOpen(!open)
              }}
              state={open}
              title="Contact"
              variant="secondary"
            />
            <ul
              className={cn(
                'invisible absolute right-0 top-14 block w-36 min-w-max origin-top scale-90 rounded-2xl bg-white p-1 opacity-0 duration-150 ease-bounce',
                {
                  'visible scale-100 opacity-100': open,
                },
              )}
              onClick={() => setOpen(!open)}
            >
              <MenuItem
                title="Twitter"
                href="https://twitter.com/logan_liffick"
              />
              <MenuItem title="Github" href="https://github.com/loganliffick" />
              <MenuItem title="Read CV" href="https://read.cv/loganliffick" />
              <MenuItem title="Email" href="mailto:hello@loganliffick.com" />
            </ul>
          </div>
        </nav>
      </nav>
    </header>
  )
}

export default Nav
