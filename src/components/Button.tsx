import Garnish from 'components/Garnish'
import Link from 'next/link'
import { cn } from 'utils/tw'

type ButtonProps = {
  aria?: string
  as?: 'a' | 'button'
  children?: React.ReactNode
  className?: string
  external?: boolean
  garnish?: boolean
  href?: string
  onClick?: () => void
  state?: boolean
  title: string
  type?: 'submit' | 'reset' | 'button' | undefined
  variant?: 'primary' | 'secondary'
}

const Button = ({
  as,
  aria,
  children,
  className,
  external,
  garnish = false,
  href,
  onClick,
  state,
  title,
  type,
  variant = 'primary',
}: ButtonProps) => {
  const Component = as ?? Link

  return (
    <Component
      aria-label={aria ?? title}
      className={cn(
        'group flex w-max items-center justify-center gap-2.5 rounded-2xl px-4 py-2.5 font-medium active:scale-95 sm:transition-transform',
        {
          'bg-white text-zinc-700': variant === 'primary',
          'bg-white': variant === 'primary' && state,

          'bg-transparent text-zinc-600 sm:hover:bg-white':
            variant === 'secondary',
          'bg-white text-zinc-800': variant === 'secondary' && state,
        },
        className,
      )}
      href={href || ''}
      onClick={onClick}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
      type={type}
    >
      {title}
      {children}
      {garnish && <Garnish />}
    </Component>
  )
}

export default Button
