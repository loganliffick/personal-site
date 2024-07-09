import Link from 'next/link'

const Post = (props: {
  date: string
  title: string
  description?: string
  href: string
}) => {
  return (
    <Link
      href={props.href}
      className="mb-6 flex w-full items-baseline justify-between border-b border-zinc-200 py-2 transition-colors duration-200 ease-out hover:border-zinc-400"
    >
      <p className="text-balance font-medium">{props.title}</p>
      <p className="shrink-0 text-sm text-zinc-600">{props.date}</p>
    </Link>
  )
}

export default Post
