import Link, { LinkProps } from 'next/link'
import { cn } from 'utils/tw'

const Button = (props: {
  as?: 'a' | 'button'
  aria?: string
  children?: React.ReactNode
  className?: string
  external?: boolean
  href?: LinkProps['href']
  onClick?: () => void
  state?: boolean
  text: string
  type: 'primary' | 'secondary'
}) => {
  const className = cn(
    'w-max rounded-2xl px-4 py-2.5 font-medium sm:transition-transform active:scale-95 block',
    {
      'bg-white text-zinc-700': props.type === 'primary',
      'bg-white': props.type === 'primary' && props.state,

      'bg-transparent text-zinc-600 sm:hover:bg-white':
        props.type === 'secondary',
      'bg-white text-zinc-800': props.type === 'secondary' && props.state,

      'flex items-center justify-center gap-2.5': props.children,
    },
    props.className,
  )

  return props.as === 'a' ? (
    <Link
      aria-label={props.aria ?? props.text}
      className={className}
      href={props.href || ''}
      rel={props.external ? 'noopener noreferrer' : undefined}
      target={props.external ? '_blank' : undefined}
    >
      {props.text}
      {props.children}
    </Link>
  ) : (
    <button
      aria-label={props.aria ?? props.text}
      className={className}
      onClick={props.onClick}
    >
      {props.text}
      {props.children}
    </button>
  )
}

export default Button
