import Link, { LinkProps } from 'next/link'

const TextLink = (props: {
  aria?: string
  external?: boolean
  href: LinkProps['href']
  text: string
}) => (
  <Link
    aria-label={props.aria ?? props.text}
    className="font-semibold text-indigo-600 underline sm:hover:text-indigo-700"
    href={props.href}
    rel={props.external ? 'noopener noreferrer' : undefined}
    target={props.external ? '_blank' : undefined}
  >
    {props.text}
  </Link>
)

export default TextLink
