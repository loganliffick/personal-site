import Link from 'next/link'

type PostProps = {
  date: string
  href: string
  title: string
}

const Post = ({ date, href, title }: PostProps) => (
  <Link
    href={href}
    className="mb-6 flex w-full items-baseline justify-between border-b border-zinc-200 py-2 transition-colors duration-200 ease-out hover:border-zinc-400"
  >
    <p className="text-balance font-medium">{title}</p>
    <p className="shrink-0 text-sm text-zinc-600">{date}</p>
  </Link>
)

export default Post
