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
  const { slug, type, title, description, date } = data

  return (
    <li className="-mr-8" style={style}>
      <Link
        href={`/${type}/${slug}`}
        className="add-focus group -ml-4 flex w-full flex-col items-start justify-between rounded-md px-4 py-3 select-none sm:flex-row"
      >
        <header>
          <div className="flex items-center gap-2">
            <h3 className="text-base-strong font-medium">{title}</h3>
            <div className="relative ml-1 hidden size-4 items-center justify-center sm:flex">
              <div className="bg-base-400 absolute flex size-6 items-center justify-center overflow-hidden rounded-full opacity-0 transition-opacity group-focus-visible:opacity-100 sm:group-hover:opacity-100">
                <ArrowRight
                  weight="bold"
                  size={14}
                  className="ease-bounce text-base-soft -translate-x-5 transition-transform duration-200 group-focus-visible:translate-x-0 sm:group-hover:translate-x-0"
                />
              </div>
            </div>
          </div>
          <p className="text-base-soft">{description}</p>
        </header>

        <p className="text-base-soft mt-1.5 text-sm tracking-tight sm:mt-0.5">
          {dayjs(date).format('MMM DD, YYYY')}
        </p>
      </Link>
    </li>
  )
}
