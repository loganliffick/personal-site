'use client'

import { PostMeta } from '@/lib/getPosts'
import { Book, Flask } from '@phosphor-icons/react'
import dayjs from 'dayjs'
import Link from 'next/link'

type PostCardProps = {
  data: PostMeta
}

export const PostCard = ({ data }: PostCardProps) => {
  const { slug, type, title, date } = data

  return (
    <Link
      href={`/${type}/${slug}`}
      className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-4 shadow-xs"
    >
      <header className="flex items-center gap-2">
        {type === 'blog' ? (
          <Book weight="bold" className="text-blue-400" />
        ) : (
          <Flask weight="bold" className="text-emerald-400" />
        )}

        <h3 className="text-sm font-medium">{title}</h3>
      </header>

      <p className="text-sm text-neutral-500">
        {dayjs(date).format('MMMM DD, YYYY')}
      </p>
    </Link>
  )
}
