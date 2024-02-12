import Link, { LinkProps } from 'next/link'
import { cn } from 'utils/tw'

const Button = (props: {
  as?: 'a' | 'button'
  aria?: string
  children?: React.ReactNode
  external?: boolean
  href?: LinkProps['href']
  onClick?: () => void
  state?: boolean
  text: string
  type: 'primary' | 'secondary'
}) => {
  const className = cn(
    'w-full rounded-2xl px-4 py-2.5 font-medium sm:transition-transform active:scale-95 block w-max',
    {
      'bg-zinc-200 text-zinc-700 sm:hover:bg-zinc-300':
        props.type === 'primary',
      'bg-white': props.type === 'primary' && props.state,

      'bg-transparent text-zinc-500 sm:hover:bg-white':
        props.type === 'secondary',
      'bg-white text-zinc-700': props.type === 'secondary' && props.state,

      'flex items-center justify-center gap-2.5 pl-3 pr-4': props.children,
    },
  )

  return props.as === 'a' ? (
    <Link
      aria-label={props.aria ?? props.text}
      className={className}
      href={props.href || ''}
      rel={props.external ? 'noopener noreferrer' : undefined}
      target={props.external ? '_blank' : undefined}
    >
      {props.children}
      {props.text}
    </Link>
  ) : (
    <button
      aria-label={props.aria ?? props.text}
      className={className}
      onClick={props.onClick}
    >
      {props.children}
      {props.text}
    </button>
  )
}

export default Button
