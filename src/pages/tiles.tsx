import Layout from 'components/Layout'
import Tooltip from 'components/Tooltip'
import useClickOutside from 'hooks/useClickOutside'
import moment from 'moment'
import { useState } from 'react'
import { cn } from 'utils/tw'

const monthDays = moment('2024-01', 'YYYY-MM').daysInMonth()

const januaryData = [
  {
    day: 5,
    link: '/blog/hello-world',
    type: 'Blog',
  },
  {
    day: 10,
    type: 'Project',
    link: '/project/new',
  },
  {
    day: 20,
    type: 'Small Project',
    link: '/project/new',
  },
]

const Page = () => {
  const tiles = Array.from({ length: monthDays })
  const [takeover, setTakeover] = useState(false)
  const takeoverRef = useClickOutside(() => {
    setTakeover(false)
  })

  return (
    <Layout>
      <section
        className="reveal mt-20 flex w-full max-w-sm animate-rotate flex-col gap-4 overflow-x-clip overflow-y-scroll rounded-3xl bg-zinc-800 p-7 shadow-xl"
        ref={takeoverRef}
      >
        {takeover && (
          <div className="absolute left-0 top-0 z-50 flex w-full flex-col">
            <div className="sticky -top-7 z-10 p-2">
              <button
                className="z-50 w-max animate-revealSm rounded-full bg-white/80 px-3 py-1.5 font-bold tracking-wide text-zinc-700"
                onClick={() => {
                  setTakeover(false)
                }}
              >
                back
              </button>
            </div>
            <div className="reveal relative w-full animate-revealLg p-7 text-white">
              <p>
                "On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as saying through shrinking from toil
                and pain. These cases are perfectly simple and easy to
                distinguish."
              </p>
            </div>
          </div>
        )}
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
                className="animate-scaleFade scaleFade relative"
                style={{
                  animationDelay: `${index / 50 + 0.04}s`,
                }}
              >
                {dayData ? (
                  <div
                    className={cn('group/tooltip delay-100', {
                      'invisible opacity-0 delay-0': takeover && !active,
                    })}
                  >
                    <Tooltip text={dayData.type} state={takeover} />
                    <button
                      onClick={(e) => {
                        setTakeover(true)
                        setActive(true)
                      }}
                      className={cn(
                        'block h-8 w-full rounded-lg transition-all duration-150 hover:scale-90 active:scale-75 min-[400px]:h-10',
                        {
                          'bg-emerald-400': dayData.type === 'Project',
                          'bg-indigo-500': dayData.type === 'Blog',
                          'bg-fuchsia-300': dayData.type === 'Small Project',
                          'scale-[20] cursor-default duration-300 hover:scale-[20] active:scale-[20]':
                            takeover && active,
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
    </Layout>
  )
}

export default Page
