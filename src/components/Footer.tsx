import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { cn } from 'utils/tw'

const Footer = () => {
  const [date, setDate] = useState<string>()

  useEffect(() => {
    setDate(dayjs().format('dddd, MMMM D'))
  }, [])

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  return (
    <footer
      className="flex w-full items-center justify-center px-6 pb-12 pt-40 text-zinc-500 sm:px-10"
      ref={ref}
    >
      <div
        className={cn('fade flex w-full max-w-lg items-center justify-center', {
          'animate-fade': inView && date !== undefined,
        })}
      >
        <p>{date}</p>
      </div>
    </footer>
  )
}

export default Footer
