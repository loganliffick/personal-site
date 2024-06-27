import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from 'utils/tw'

const RecentPost = (props: {
  date: string
  offset?: string
  title: string
  description?: string
  image: string
  setActivePost: React.MouseEventHandler<HTMLAnchorElement>
  id: number
  activePost: number
  href: string
}) => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    setRotation(Math.floor(Math.random() * 41) - 20)
  }, [])

  return (
    <Link
      className="scaleFade -mr-10 animate-scaleFadeBlog"
      style={{ animationDelay: props.offset + 's' }}
      href={props.href}
      onMouseEnter={props.setActivePost}
    >
      <article
        className={cn(
          'group relative h-40 w-48 origin-center overflow-hidden rounded-3xl bg-zinc-500 shadow-xl transition-all duration-300 ease-bounce will-change-transform after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-3xl after:border-[5px] after:border-white/50 after:transition-[border] hover:mr-10 hover:!rotate-0 hover:!scale-110 hover:shadow-2xl hover:after:border-8 active:!scale-100 active:after:border-[12px]',
          {
            '': props.activePost === props.id,
          },
        )}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div
          className={cn(
            'absolute left-0 top-0 z-10 size-12 bg-orange-500/0 opacity-0 transition-opacity duration-100 ease-in group-hover:opacity-0 group-hover:delay-0 group-hover:duration-100',
            {
              'opacity-100 delay-500 duration-300':
                props.activePost === props.id,
            },
          )}
        >
          <div className="absolute left-0 top-0 size-12 bg-black/25 blur-xl" />
          <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white after:absolute after:h-full after:w-full after:animate-ping after:rounded-full after:bg-white" />
        </div>

        <Image
          src={props.image}
          className="object-cover"
          fill
          priority
          sizes="100"
          alt="image"
        />
      </article>
    </Link>
  )
}

export default RecentPost
