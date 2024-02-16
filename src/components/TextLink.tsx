import Link, { LinkProps } from 'next/link'

const TextLink = (props: {
  aria?: string
  external?: boolean
  href: LinkProps['href']
  text: string
}) => (
  <Link
    aria-label={props.aria ?? props.text}
    className="font-semibold text-blue-500 underline sm:hover:text-blue-700"
    href={props.href}
    rel={props.external ? 'noopener noreferrer' : undefined}
    target={props.external ? '_blank' : undefined}
  >
    {props.text}
  </Link>
)

export default TextLink
