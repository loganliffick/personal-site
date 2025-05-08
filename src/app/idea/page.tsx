'use client'

import { Main } from '@/components/layout/Main'
import { cn } from '@/utils/tw'
import Image from 'next/image'
import { useState } from 'react'

const vercelImages = [
  '/og.jpg',
  '/images/blog/my-workspace/setup.webp',
  '/images/blog/my-workspace/setup.webp',
]

const ModImage = (props: {
  className?: string
  imgClassName?: string
  src: string
}) => (
  <div
    className={cn(
      'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500/0',
      props.className,
    )}
  >
    <Image
      fill
      src={props.src}
      className={cn(
        'ease-bounce-lite relative overflow-clip rounded object-cover opacity-0 shadow-xl grayscale-100 transition-all duration-500 group-hover:opacity-100 group-focus:opacity-100',
        props.imgClassName,
      )}
      alt="test"
    />
  </div>
)

const PicLink = (props: { title?: string; images: string[] }) => {
  return (
    <button className="group relative inline-flex focus:outline-none">
      <div className="absolute top-1/2 left-1/2 -z-10 flex w-full -translate-x-1/2 -translate-y-1/2 bg-red-800/0">
        {props.images.map((image, index) => (
          <ModImage
            src={image}
            key={index}
            className={
              index === 0
                ? 'aspect-[3/4] h-36'
                : index === 1
                  ? 'aspect-[4/3] h-40'
                  : 'aspect-square h-20'
            }
            imgClassName={
              index === 0
                ? 'group-hover:translate-x-36 group-hover:-translate-y-32 group-focus:-translate-y-32 group-focus:translate-x-36'
                : index === 1
                  ? 'group-hover:translate-x-10 group-hover:-translate-y-20 group-focus:translate-x-10 group-focus:-translate-y-20'
                  : 'group-hover:translate-x-20 group-hover:-translate-y-52 group-focus:translate-x-20 group-focus:-translate-y-52'
            }
          />
        ))}
      </div>
      <span className="relative cursor-pointer">
        {props.title}
        <span className="inline-block font-normal transition-transform ease-out group-hover:-translate-y-2 group-focus:-translate-y-2">
          *
        </span>
      </span>
    </button>
  )
}

const myImages = [
  [
    '/og.jpg',
    '/images/blog/my-workspace/setup.webp',
    '/images/blog/my-workspace/setup.webp',
  ],
  [
    '/images/blog/my-workspace/setup.webp',
    '/images/blog/my-workspace/setup.webp',
    '/og.jpg',
  ],
]

export default function Page() {
  const [images, setImages] = useState(myImages[0])
  const [active, setActive] = useState(false)

  const handleMouseEnter = (id: number) => {
    setImages(myImages[id])
    setActive(true)
  }

  const handleMouseLeave = () => {
    setActive(false)
  }

  return (
    <Main>
      <section className="w-full px-6">
        <div className="relative mx-auto mt-40 flex w-full max-w-2xl flex-col items-center justify-center gap-2 bg-green-400/0">
          <div
            className={cn('absolute -left-20 size-20 bg-red-200/0', {
              '-right-20 left-auto': images === myImages[1],
            })}
          >
            {images.map((image, index) => (
              <div
                className={cn('absolute', {
                  'aspect-[3/4] h-80 -translate-x-20 -rotate-12': index === 0,
                  'aspect-[4/3] w-64 -translate-x-10 -translate-y-40 rotate-12':
                    index === 1,
                  'aspect-square h-40 -translate-x-40 rotate-30': index === 2,
                })}
                key={`${index} + ${images.toString()}`}
              >
                <Image
                  src={image}
                  fill
                  className={cn(
                    'ease-bounce set-scaleFade relative scale-75 rounded object-cover shadow-xl grayscale-100 transition-all duration-500',
                    {
                      scaleFade: active,
                      'duration-300': index === 0,
                      'duration-400': index === 1,
                      'duration-500': index === 2,
                    },
                  )}
                  alt="test"
                />
              </div>
            ))}
          </div>
          <h1 className="text-base-strong text-3xl leading-[2.7rem] font-semibold tracking-tighter">
            Hi, i'm Logan Liffick. I work at{' '}
            {/* <PicLink title="Vercel" images={vercelImages} /> as a Design */}
            <button
              className=""
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave()}
            >
              Vercel
            </button>{' '}
            as a Design Engineer. Previously i worked at{' '}
            <button
              className=""
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave()}
            >
              Outerbase
            </button>
            , Makelog, and Digitalocean.
          </h1>
          <h1 className="text-base-strong text-3xl leading-[2.7rem] font-semibold tracking-tighter">
            I'm working on some other stuff right now too, like X and Y.
          </h1>
          <h1 className="text-base-strong text-3xl leading-[2.7rem] font-semibold tracking-tighter">
            I'm also writing about this stuff, and also some of this.
          </h1>
        </div>
      </section>
    </Main>
  )
}
