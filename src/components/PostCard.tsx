import { IconArrowRight } from '@/components/Icons'
import { PostMeta } from '@/lib/getPosts'
import dayjs from 'dayjs'
import Link from 'next/link'

type PostCardProps = {
  data: PostMeta
}

export const PostCard = ({ data }: PostCardProps) => {
  const { slug, title, description, date } = data

  return (
    <li className="md:-mr-8">
      <Link
        href={`/blog/${slug}`}
        className="add-focus group -ml-3 flex w-full flex-col items-start justify-between rounded-md p-3 select-none sm:flex-row md:-ml-4 md:px-4"
      >
        <header>
          <div className="flex items-center gap-2">
            <h3 className="text-base-strong font-medium">{title}</h3>
            <div className="relative ml-1 hidden size-4 items-center justify-center sm:flex">
              <div className="bg-base-200 absolute flex size-6 items-center justify-center overflow-hidden rounded-full opacity-0 transition-opacity group-focus-visible:opacity-100 sm:group-hover:opacity-100">
                <IconArrowRight className="ease-bounce text-base-soft size-3.5 -translate-x-5 transition-transform duration-200 group-focus-visible:translate-x-0 sm:group-hover:translate-x-0" />
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
