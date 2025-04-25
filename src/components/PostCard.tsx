'use client'

import { PostMeta } from '@/lib/getPosts'
import { ArrowRight, Book, Flask } from '@phosphor-icons/react'
import dayjs from 'dayjs'
import Link from 'next/link'

type PostCardProps = {
  className?: string
  data: PostMeta
  style?: React.CSSProperties
}

export const PostCard = ({ className, data, style }: PostCardProps) => {
  const { slug, type, title, date } = data

  return (
    <li className={className} style={style}>
      <Link
        href={`/${type}/${slug}`}
        className="bg-base-100 border-base-border add-focus group flex flex-wrap items-center justify-between rounded-md border p-4 shadow-xs select-none"
      >
        <header className="flex items-center gap-2 *:shrink-0">
          {type === 'blog' ? (
            <Book weight="bold" className="text-blue-400" />
          ) : (
            <Flask weight="bold" className="text-emerald-400" />
          )}

          <h3 className="text-sm font-medium">{title}</h3>
          <div className="relative ml-1 flex size-4 items-center justify-center">
            <div className="bg-base-300 absolute flex size-6 items-center justify-center overflow-hidden rounded-full opacity-0 transition-opacity group-focus-visible:opacity-100 sm:group-hover:opacity-100">
              <ArrowRight
                weight="bold"
                size={14}
                className="ease-bounce text-base-medium -translate-x-5 transition-transform duration-200 group-focus-visible:translate-x-0 sm:group-hover:translate-x-0"
              />
            </div>
          </div>
        </header>

        <p className="text-base-soft text-sm">
          {dayjs(date).format('MMMM DD, YYYY')}
        </p>
      </Link>
    </li>
  )
}
