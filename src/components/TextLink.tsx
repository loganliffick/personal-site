import Link from 'next/link'

type TextLinkProps = {
  external?: boolean
  href: string
  title: string
}

export const TextLink = ({ external, href, title }: TextLinkProps) => {
  return (
    <Link
      className="focus:underline focus:outline-none sm:hover:opacity-80"
      href={href}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {title}
    </Link>
  )
}
