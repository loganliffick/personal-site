import { Slot } from '@/components/ds/Slot'

type ButtonLinkProps = {
  as?: React.ElementType
  external?: boolean
  href?: string
  onClick?: () => void
  title: React.ReactNode | string
}

export const ButtonLink = ({
  as,
  external,
  href,
  onClick,
  title,
}: ButtonLinkProps) => {
  return (
    <Slot
      as={as}
      className="cursor-pointer px-2.5 py-1.5 underline-offset-2 focus:outline-none focus-visible:underline sm:hover:underline"
      onClick={onClick && onClick}
      href={href && href}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {title}
    </Slot>
  )
}
