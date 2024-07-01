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
      className="mb-6 flex w-full items-baseline justify-between border-b"
    >
      <p className="font-medium">{props.title}</p>
      <p className="text-sm text-zinc-600">{props.date}</p>
    </Link>
  )
}

export default Post
