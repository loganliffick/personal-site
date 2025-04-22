import Link from 'next/link'

type TextLinkProps = {
  external?: boolean
  href: string
  title: string
}

export const TextLink = ({ external, href, title }: TextLinkProps) => {
  return (
    <Link
      className="underline-offset-2 focus:outline-none focus-visible:underline sm:hover:underline"
      href={href}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {title}
    </Link>
  )
}
