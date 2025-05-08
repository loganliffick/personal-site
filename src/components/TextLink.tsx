import { Slot } from '@/components/Slot'
import { cn } from '@/utils/tw'
import Link from 'next/link'

type TextLinkProps = {
  as?: React.ElementType
  className?: string
  external?: boolean
  href?: string
  onClick?: () => void
  title: string
}

export const TextLink = ({
  as = Link,
  className,
  external,
  href,
  onClick,
  title,
}: TextLinkProps) => {
  return (
    <Slot
      as={as}
      className={cn(
        'add-focus-text cursor-pointer underline decoration-current/30 underline-offset-2 transition-[text-decoration-color] sm:hover:decoration-current/70',
        className,
      )}
      href={href}
      onClick={onClick}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {title}
    </Slot>
  )
}
