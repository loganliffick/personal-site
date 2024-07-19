import { WindowsLogo } from 'phosphor-react'
import { useState } from 'react'
import { cn } from 'utils/tw'

const WindowsMode = (props: { children?: React.ReactNode }) => {
  const [active, setActive] = useState(false)
  return (
    <div className="">
      <div
        className={cn(
          'fixed left-0 top-0 z-50 hidden h-screen w-full bg-blue-500 text-white',
          { 'block animate-fadeSm': active },
        )}
      >
        <div
          className={cn('mx-auto my-40 flex max-w-lg flex-col gap-5', {
            'animate-fadeMd': active,
          })}
        >
          <p className="text-7xl">{`:(`}</p>
          <p className="text-xl">
            Your PC ran into a problem and needs to restart. We're just
            collecting some error info, and then we'll restart for you.
          </p>
          <p className="text-xl">69% complete</p>
          <div className="flex gap-4">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path d="M6.4 6.4H16V16H6.4V6.4Z" fill="currentColor" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.4 0V22.4H0V0H22.4ZM3.36 19.04H19.04V3.36H3.36V19.04Z"
                fill="currentColor"
              />
              <path d="M44.8 44.8V48H48V44.8H44.8Z" fill="currentColor" />
              <path d="M44.8 44.8H41.6V41.6H44.8V44.8Z" fill="currentColor" />
              <path
                d="M35.2 35.2V32H32V25.6H35.2V19.2H32V25.6H28.8V32H32V35.2H35.2Z"
                fill="currentColor"
              />
              <path
                d="M35.2 35.2V38.4H48V32H44.8V35.2H35.2Z"
                fill="currentColor"
              />
              <path d="M19.2 35.2V32H25.6V35.2H19.2Z" fill="currentColor" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.2 35.2H16V38.4H12.8V41.6H16V44.8H19.2V48H22.4V44.8H25.6V38.4H19.2V35.2ZM22.4 44.8V41.6H19.2V44.8H22.4Z"
                fill="currentColor"
              />
              <path d="M60.8 57.6H57.6V60.8H60.8V57.6Z" fill="currentColor" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.6 0V6.4H28.8V9.6H25.6V12.8H32V16H28.8V19.2H25.6V25.6H16V28.8H12.8V25.6H6.4V28.8H3.2V25.6H0V28.8H3.2V32H0V38.4H3.2V48H0V51.2H3.2V48H6.4V51.2H12.8V54.4H16V51.2H19.2V54.4H22.4V51.2H25.6V48H32V44.8H38.4V51.2H32V54.4H25.6V64H28.8V60.8H32V57.6H35.2V60.8H38.4V64H35.2V67.2H38.4V70.4H35.2V73.6H44.8V70.4H54.4V76.8H60.8V80H80V76.8H73.6V73.6H76.8V70.4H80V67.2H70.4V64H67.2V54.4H70.4V60.8H73.6V64H80V48H76.8V44.8H80V38.4H73.6V35.2H67.2V38.4H60.8V35.2H64V28.8H60.8V25.6H57.6V28.8H54.4V0H51.2V6.4H44.8V0H41.6V6.4H38.4V3.2H32V0H25.6ZM32 6.4V12.8H48V9.6H35.2V6.4H32ZM32 6.4V3.2H28.8V6.4H32ZM54.4 32V28.8H38.4V32H35.2V25.6H38.4V16H32V19.2H28.8V25.6H25.6V28.8H16V32H12.8V38.4H9.6V41.6H12.8V44.8H16V48H19.2V51.2H22.4V48H25.6V44.8H32V41.6H28.8V38.4H25.6V35.2H32V38.4H35.2V41.6H38.4V44.8H41.6V48H44.8V51.2H38.4V54.4H35.2V57.6H38.4V54.4H44.8V57.6H41.6V64H44.8V67.2H51.2V64H48V60.8H51.2V57.6H48V51.2H54.4V48H51.2V44.8H48V41.6H51.2V32H54.4ZM54.4 32H57.6V28.8H60.8V35.2H54.4V32ZM67.2 38.4V51.2H76.8V48H70.4V44.8H76.8V41.6H70.4V38.4H67.2ZM60.8 76.8H64V67.2H60.8V76.8ZM54.4 70.4H57.6V67.2H54.4V70.4ZM6.4 48H9.6V44.8H6.4V48ZM6.4 28.8V35.2H9.6V28.8H6.4ZM70.4 76.8H67.2V70.4H70.4V76.8ZM64 64H54.4V54.4H64V64ZM73.6 57.6H76.8V54.4H73.6V57.6ZM60.8 51.2H57.6V44.8H64V48H60.8V51.2ZM57.6 44.8H54.4V41.6H57.6V44.8ZM51.2 22.4H48V16H51.2V22.4ZM44.8 22.4H41.6V16H44.8V22.4Z"
                fill="currentColor"
              />
              <path d="M70.4 25.6H67.2V28.8H70.4V25.6Z" fill="currentColor" />
              <path
                d="M73.6 25.6H80V28.8H76.8V32H73.6V25.6Z"
                fill="currentColor"
              />
              <path
                d="M25.6 67.2H32V70.4H28.8V73.6H25.6V67.2Z"
                fill="currentColor"
              />
              <path d="M25.6 76.8H35.2V80H25.6V76.8Z" fill="currentColor" />
              <path d="M41.6 76.8H38.4V80H41.6V76.8Z" fill="currentColor" />
              <path d="M44.8 76.8H48V80H44.8V76.8Z" fill="currentColor" />
              <path d="M73.6 6.4H64V16H73.6V6.4Z" fill="currentColor" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M57.6 0V22.4H80V0H57.6ZM76.64 19.04H60.96V3.36H76.64V19.04Z"
                fill="currentColor"
              />
              <path d="M16 64H6.4V73.6H16V64Z" fill="currentColor" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 57.6V80H22.4V57.6H0ZM19.04 76.64H3.36V60.96H19.04V76.64Z"
                fill="currentColor"
              />
            </svg>
            <header className="flex flex-col justify-between text-[9px]">
              <p>
                For more information about this issue and possible fixes, visit
                https://www.windows.com/stopcode
              </p>
              <div>
                <p>If you call a support person, give them this info:</p>
                <p>Stop code: CRITICAL PROCESS DIED</p>
              </div>
            </header>
          </div>
        </div>
      </div>
      <button
        className={cn(
          'group fixed bottom-8 left-8 z-[51] h-auto w-16 rounded-full bg-zinc-200 p-1',
          { 'bg-white': active },
        )}
        onClick={() => setActive(!active)}
      >
        <div
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-full bg-zinc-400 text-zinc-300 transition-all group-hover:scale-95 group-active:scale-90',
            { 'translate-x-6 bg-blue-400 text-white': active },
          )}
        >
          <WindowsLogo size={20} weight="fill" />
        </div>
      </button>
    </div>
  )
}

export default WindowsMode
