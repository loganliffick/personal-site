import Layout from 'components/Layout'
import Modal from 'components/Modal'
import Tag from 'components/Tag'
import Tooltip from 'components/Tooltip'
import useClickOutside from 'hooks/useClickOutside'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowsOutSimple } from 'phosphor-react'
import testImage from 'public/images/test-img.jpg'
import { useState } from 'react'
import { cn } from 'utils/tw'

const monthDays = moment('2024-01', 'YYYY-MM').daysInMonth()

const januaryData = [
  {
    day: 5,
    link: {
      external: false,
      href: '/blog/hello-world',
      text: 'Read the rest...',
    },
    type: 'Blog',
    title: 'Welcome to NY 💁‍♀️',
    text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish',
  },
  {
    day: 10,
    type: 'Project',
    link: {
      external: true,
      href: 'https://outerbase.com',
      text: 'View the site',
    },
    title: '🕸️ New site launched 🚀',
    text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.',
  },
  {
    day: 20,
    type: 'Small Project',
    link: {
      external: true,
      href: 'https://react.spltjs.com',
      text: 'Get splittin bb',
    },
    title: '✨ New page ✨',
    text: 'I had the opportunity to do something sick asf, I made a new homepage bb.',
  },
]

const Page = () => {
  const tiles = Array.from({ length: monthDays })
  const [takeover, setTakeover] = useState(false)
  const [clip, setClip] = useState(false)
  const [start, setStart] = useState(true)
  const [modal, setModal] = useState(false)

  const takeoverRef = useClickOutside(() => {
    setTakeover(false)
    setClip(false)
  })

  const handleClip = () => {
    setTimeout(() => {
      setClip(true)
    }, 500)
  }
  const handleStart = () => {
    setTimeout(() => {
      setStart(false)
    }, 1200)
  }

  handleStart()

  return (
    <Layout>
      <Tag year="2024" />
      <>
        <Modal open={modal} setOpen={setModal}>
          hi mom
        </Modal>
        <section
          className="reveal my-10  flex w-full max-w-sm animate-rotate flex-col gap-4 overflow-x-clip overflow-y-scroll rounded-3xl bg-zinc-800 p-7 shadow-xl"
          ref={takeoverRef}
        >
          <h2 className="reveal animate-revealSm text-sm font-bold tracking-wider text-zinc-300">
            January
          </h2>
          <div className="grid w-full grid-cols-7 gap-2">
            {tiles.map((_, index) => {
              const dayData = januaryData.find((data) => data.day === index + 1)
              const [active, setActive] = useState(false)

              return (
                <div
                  key={index}
                  className={cn('', {
                    'scaleFade isolate animate-scaleFade': start,
                  })}
                  style={{
                    animationDelay: `${index / 50 + 0.04}s`,
                  }}
                >
                  {takeover && active && (
                    <div
                      className={cn(
                        'absolute left-0 top-0 z-50 flex h-max min-h-full w-full animate-fadeSm flex-col',
                        {
                          'bg-sky-500': dayData?.type === 'Project',
                          'bg-indigo-600': dayData?.type === 'Blog',
                          'bg-violet-400': dayData?.type === 'Small Project',
                        },
                      )}
                    >
                      <div className="sticky -top-7 z-10 animate-revealSm pl-1.5 pt-1.5">
                        <button
                          className="z-50 block w-max rounded-full bg-white px-3 py-1.5 font-bold tracking-wide text-zinc-600 shadow-md transition-transform hover:scale-90 active:scale-75"
                          onClick={() => {
                            setTakeover(false)
                            setActive(false)
                            setClip(false)
                          }}
                        >
                          back
                        </button>
                      </div>
                      <div className="relative flex w-full animate-rotateAlt flex-col">
                        <button
                          className="group relative m-1.5 mb-0 aspect-video animate-fade overflow-hidden rounded-[18px] bg-white after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-[18px] after:border-[6px] after:border-white/50 after:transition-[border] hover:after:border-[10px] active:after:border-[16px]"
                          onClick={() => {
                            setModal(true)
                          }}
                        >
                          <div className="absolute bottom-0 right-0 z-10 origin-bottom-right scale-75 rounded-full bg-white/50 p-2 text-white opacity-0 transition-all duration-300 ease-bounce group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:scale-100 group-hover:opacity-100 group-active:-translate-x-8 group-active:-translate-y-6 group-active:rotate-12 group-active:scale-90">
                            <ArrowsOutSimple size={24} weight="bold" />
                          </div>
                          <Image
                            src={testImage}
                            alt="img"
                            className="object-cover"
                            fill={true}
                            sizes="100%"
                          />
                        </button>
                        <article className="m-1.5 flex animate-rotate flex-col rounded-[18px] bg-white p-6 pb-7 font-medium">
                          <h2 className="mb-2 text-xl font-extrabold text-zinc-800">
                            {dayData?.title}
                          </h2>
                          <p className="text-zinc-600">{dayData?.text}</p>
                          <Link
                            className="z-50 mt-6 block w-max rounded-full bg-zinc-700 px-4 py-2 text-base font-bold tracking-wide text-zinc-100 transition-transform sm:hover:bg-zinc-800 sm:active:scale-90"
                            href={dayData?.link.href || ''}
                            aria-label={dayData?.link.text}
                            rel={
                              dayData?.link.external
                                ? 'no-opener no-referrer'
                                : ''
                            }
                            target={dayData?.link.external ? '_blank' : '_self'}
                          >
                            {dayData?.link.text}
                          </Link>
                        </article>
                      </div>
                    </div>
                  )}
                  {dayData ? (
                    <div
                      className={cn('group/tooltip relative delay-100', {
                        'invisible opacity-0 delay-0': takeover && !active,
                        'overflow-clip overscroll-y-none': clip,
                      })}
                    >
                      <Tooltip text={dayData.type} state={takeover} />
                      <button
                        onClick={(e) => {
                          setTakeover(true)
                          handleClip()
                          setActive(true)
                        }}
                        className={cn(
                          'block h-8 w-full rounded-lg transition-all duration-150 hover:scale-90 active:scale-75 min-[400px]:h-10',
                          {
                            'bg-sky-500': dayData.type === 'Project',
                            'bg-indigo-600': dayData.type === 'Blog',
                            'bg-violet-400': dayData.type === 'Small Project',
                            'scale-[20] cursor-default duration-300 hover:scale-[20] active:scale-[20]':
                              active && takeover,
                          },
                        )}
                      />
                    </div>
                  ) : (
                    <div
                      className={cn(
                        'h-8 w-full rounded-lg bg-zinc-700/50 transition-all delay-100 duration-300 min-[400px]:h-10',
                        {
                          'invisible opacity-0 delay-0 duration-0': takeover,
                        },
                      )}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </section>
      </>
    </Layout>
  )
}

export default Page
