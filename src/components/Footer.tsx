import { cn } from '@/utils/tw'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

export const Footer = () => {
  const [date, setDate] = useState<string>()

  useEffect(() => {
    setDate(dayjs().format('dddd, MMMM D'))
  }, [])

  return (
    <footer className="flex w-full items-center justify-center px-6 pt-40 pb-12 text-zinc-500 sm:px-10">
      <div
        className={cn('fade flex w-full max-w-lg items-center justify-center', {
          'animate-fade': date !== undefined,
        })}
      >
        <p>{date}</p>
      </div>
    </footer>
  )
}
