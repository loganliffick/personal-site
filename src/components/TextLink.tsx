import Link from 'next/link'

type TextLinkProps = {
  external?: boolean
  href: string
  title: string
}

export const TextLink = ({ external, href, title }: TextLinkProps) => {
  return (
    <Link
      className="underline-offset-2 hover:underline focus:underline focus:outline-none"
      href={href}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {title}
    </Link>
  )
}
