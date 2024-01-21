import Button from 'components/Button'
import useClickOutside from 'hooks/useClickOutside'
import Link, { LinkProps } from 'next/link'
import { useState } from 'react'
import { cn } from 'utils/tw'

const MenuItem = (props: {
  aria?: string
  external?: boolean
  href: LinkProps['href']
  text: string
}) => (
  <li>
    <Link
      className="block rounded-xl px-4 py-3 font-medium text-zinc-700 sm:hover:bg-zinc-100"
      href={props.href}
      rel={props.external ? 'noopener noreferrer' : undefined}
      target={!props.external ? '_blank' : '_self'}
    >
      {props.text}
    </Link>
  </li>
)

const Nav = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useClickOutside(() => {
    setOpen(false)
  })

  return (
    <header className="mt-16 flex w-full items-center justify-center px-6 text-zinc-800 sm:px-10">
      <nav className="flex w-full max-w-lg items-center justify-between">
        <Link className="pl-4 text-xl sm:pl-0" href="/">
          Logan Liffick
        </Link>
        <div className="relative z-50" ref={menuRef}>
          <Button
            onClick={() => {
              setOpen(!open)
            }}
            state={open}
            text="Contact"
            type="secondary"
          />
          <ul
            className={cn(
              'invisible absolute right-0 top-14 block w-36 min-w-max origin-top-right scale-75 rounded-2xl bg-white p-1 opacity-0 duration-150 ease-bounce',
              {
                'visible scale-100 opacity-100': open,
              },
            )}
            onClick={() => setOpen(!open)}
          >
            <MenuItem text="Twitter" href="https://twitter.com/logan_liffick" />
            <MenuItem text="Github" href="https://github.com/loganliffick" />
            <MenuItem text="Read CV" href="https://read.cv/loganliffick" />
            <MenuItem text="Email" href="mailto:hello@loganliffick.com" />
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav
