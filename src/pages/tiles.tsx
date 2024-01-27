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
  const [subDisplay, setSubDisplay] = useState(false)
  const subDisplayRef = useClickOutside(() => {
    setSubDisplay(false)
  })

  return (
    <Layout>
      <section
        className="reveal mt-20 flex w-full max-w-sm animate-rotate flex-col gap-4 overflow-hidden rounded-3xl bg-zinc-800 p-7 shadow-xl"
        ref={subDisplayRef}
      >
        {subDisplay && (
          <button
            className="absolute left-6 top-6 z-50 w-max animate-revealSm font-bold tracking-wide text-white"
            onClick={() => {
              setSubDisplay(false)
            }}
          >
            back
          </button>
        )}
        <h2 className="reveal animate-revealSm text-sm font-bold tracking-wider text-zinc-300">
          January
        </h2>
        <div className="grid h-full w-full grid-cols-7 gap-2">
          {tiles.map((_, index) => {
            const dayData = januaryData.find((data) => data.day === index + 1)
            const [active, setActive] = useState(false)

            return (
              <div
                key={index}
                className="animate-scaleFade scaleFade"
                style={{
                  animationDelay: `${index / 50 + 0.04}s`,
                }}
              >
                {dayData ? (
                  <div className="group/tooltip">
                    <Tooltip text={dayData.type} state={subDisplay} />
                    <button
                      onClick={(e) => {
                        setSubDisplay(true)
                        setActive(true)
                      }}
                      className={cn(
                        'block h-8 w-full rounded-lg transition-all duration-75 hover:scale-90 focus:ease-out active:scale-75 min-[400px]:h-10',
                        {
                          'bg-emerald-400': dayData.type === 'Project',
                          'bg-indigo-500': dayData.type === 'Blog',
                          'bg-fuchsia-300': dayData.type === 'Small Project',
                          'scale-[20] cursor-default duration-500 hover:scale-[20] active:scale-[20]':
                            subDisplay && active,
                          'invisible opacity-0': subDisplay && !active,
                        },
                      )}
                    />
                  </div>
                ) : (
                  <div
                    className={cn(
                      'h-8 w-full rounded-lg bg-zinc-700/50 transition-all duration-75 min-[400px]:h-10',
                      {
                        'invisible opacity-0': subDisplay,
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
