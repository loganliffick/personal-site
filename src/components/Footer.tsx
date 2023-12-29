import Button from 'components/Button'
import useClickOutside from 'hooks/useClickOutside'
import moment from 'moment'
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
      className="block rounded-xl px-4 py-3 font-medium text-zinc-700 sm:hover:bg-white/75"
      href={props.href}
      rel={props.external ? 'noopener noreferrer' : undefined}
      target={!props.external ? '_blank' : '_self'}
    >
      {props.text}
    </Link>
  </li>
)

const Footer = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useClickOutside(() => {
    setOpen(false)
  })

  return (
    <footer className="flex w-full items-center justify-center pb-8 pl-2 pr-6 text-zinc-500 sm:pl-7 sm:pr-10">
      <div className="flex w-full max-w-5xl items-center justify-between">
        <div className="relative" ref={menuRef}>
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
              'ease-bounce invisible absolute bottom-14 left-0 block w-36 min-w-max origin-bottom-left scale-75 rounded-2xl bg-zinc-100 p-1 opacity-0 duration-200',
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
        <p>{moment().format('dddd, MMMM D')}</p>
      </div>
    </footer>
  )
}

export default Footer
