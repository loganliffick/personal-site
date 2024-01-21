import { useInView } from 'react-intersection-observer'
import { cn } from 'utils/tw'

const Tag = (props: { year: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <div
      className={cn(
        'reveal sticky top-5 mx-auto rounded-full bg-white px-3 py-1 text-xs font-bold text-zinc-500 first-of-type:mt-10',
        { 'animate-revealSm': inView },
      )}
      ref={ref}
    >
      {props.year}
    </div>
  )
}

export default Tag
