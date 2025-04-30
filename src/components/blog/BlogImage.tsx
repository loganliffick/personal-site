'use client'

import { useClickOutside } from '@/hooks/useClickOutside'
import { cn } from '@/utils/tw'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type BlogImageProps = {
  alt: string
  src: string
}

export const BlogImage = ({ alt, src }: BlogImageProps) => {
  const [toggled, setToggled] = useState(false)
  const ref = useClickOutside(() => setToggled(false))
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (toggled && imageRef.current) {
      imageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      })

      const timer = setTimeout(() => {
        const handleScroll = () => {
          setToggled(false)
        }

        window.addEventListener('scroll', handleScroll, { once: true })

        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, 600)
      return () => {
        clearTimeout(timer)
        window.removeEventListener('scroll', () => setToggled(false))
      }
    }
  }, [toggled])

  return (
    <button
      className="add-focus ring-offset-base-bg pointer-events-none my-8 block overflow-visible rounded focus-visible:!ring focus-visible:ring-offset-6 lg:pointer-events-auto"
      onClick={() => setToggled(!toggled)}
    >
      <div
        className={cn(
          'bg-base-bg/40 invisible fixed top-0 left-0 z-50 hidden h-screen w-full cursor-zoom-out opacity-0 backdrop-blur-[1px] transition-opacity duration-400 select-none lg:block',
          { 'visible opacity-100': toggled },
        )}
        ref={ref}
      />
      <Image
        alt={alt}
        className={cn(
          'ease-bounce-lite relative overflow-hidden rounded transition-all duration-400 select-none lg:cursor-zoom-in',
          {
            'z-100 shadow-xl duration-300 lg:-translate-y-4 lg:scale-130 lg:cursor-zoom-out':
              toggled,
          },
        )}
        draggable={false}
        height={672}
        priority
        ref={imageRef}
        src={src}
        width={672}
      />
    </button>
  )
}
