'use client'

import { useClickOutside } from '@/hooks/useClickOutside'
import { cn } from '@/utils/tw'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type BlogImageProps = {
  alt: string
  src: string
}

export const BlogImage = ({ alt, src }: BlogImageProps) => {
  const [toggled, setToggled] = useState(false)
  const ref = useClickOutside(() => setToggled(false))

  useEffect(() => {
    const handleScroll = () => {
      if (toggled) {
        setToggled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [toggled])

  return (
    <button
      className="add-focus relative my-8 block overflow-visible rounded-md focus-visible:!ring-2 focus-visible:ring-offset-4"
      onClick={() => setToggled(!toggled)}
    >
      <Image
        alt={alt}
        className={cn(
          'fade ease-bounce-lite overflow-hidden rounded-md transition-transform duration-300 select-none sm:cursor-zoom-in',
          {
            'duration-400 sm:translate-y-4 sm:scale-130 sm:cursor-zoom-out':
              toggled,
          },
        )}
        draggable={false}
        height={576}
        priority
        ref={ref}
        src={src}
        width={576}
      />
    </button>
  )
}
