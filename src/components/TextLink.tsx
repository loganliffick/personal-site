import Link, { LinkProps } from 'next/link'

type TextLinkProps = {
  aria?: string
  external?: boolean
  href: LinkProps['href']
  text: string
}

const TextLink = ({ aria, external, href, text }: TextLinkProps) => (
  <Link
    aria-label={aria ?? text}
    className="font-semibold text-indigo-600 underline sm:hover:text-indigo-700"
    href={href}
    rel={external ? 'noopener noreferrer' : undefined}
    target={external ? '_blank' : undefined}
  >
    {text}
  </Link>
)

export default TextLink
