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
  const [isMobile, setIsMobile] = useState(true)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setRotation(0)
      setIsMobile(true)
    } else {
      if (isMobile === false) {
      } else {
        setRotation(Math.floor(Math.random() * 41) - 20)
        setIsMobile(false)
      }
    }
  }
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile])

  return (
    <Link
      className="reveal sm:scaleFade animate-revealSm transition-all duration-300 ease-bounce sm:-mr-10 sm:animate-scaleFadeBlog sm:hover:mr-0"
      style={{ animationDelay: props.offset + 's' }}
      href={props.href}
      onMouseEnter={props.setActivePost}
    >
      <article
        className="group relative aspect-video w-full origin-center overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 ease-bounce will-change-transform after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-3xl after:border-[5px] after:border-white/50 after:transition-[border] sm:aspect-[4/3] sm:h-40 sm:hover:!rotate-0 sm:hover:scale-110 sm:hover:shadow-2xl sm:hover:after:border-8 sm:active:scale-100 sm:active:after:border-[12px]"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* active dot */}
        <div
          className={cn(
            'absolute left-0 top-0 z-10 size-12 opacity-0 transition-opacity duration-100 ease-in group-hover:opacity-0 group-hover:delay-0 group-hover:duration-100',
            {
              'delay-500 duration-300 sm:opacity-100':
                props.activePost === props.id,
            },
          )}
        >
          <div className="absolute left-0 top-0 size-12 bg-black/25 blur-xl" />
          <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white after:absolute after:h-full after:w-full after:animate-ping after:rounded-full after:bg-white" />
        </div>

        <Image
          src={props.image}
          className={cn('fade object-cover', { 'animate-fade': isImageLoaded })}
          fill
          priority
          sizes="100"
          alt="image"
          onLoad={() => {
            setIsImageLoaded(true)
          }}
        />
      </article>
      <header className="flex items-baseline justify-between px-6 pt-4 sm:hidden">
        <p className="text-lg font-medium">{props.title}</p>
        <p className="shrink-0 text-sm">{props.date}</p>
      </header>
    </Link>
  )
}

export default RecentPost
