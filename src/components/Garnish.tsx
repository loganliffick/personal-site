import { ArrowRight } from '@phosphor-icons/react'
import { cn } from 'utils/tw'

type GarnishProps = {
  className?: string
}

const Garnish = ({ className }: GarnishProps) => (
  <span
    className={cn(
      'relative flex size-4 items-center justify-center overflow-hidden *:transition-transform *:duration-[400ms] *:ease-bounce',
      className,
    )}
  >
    <ArrowRight
      weight="bold"
      className="absolute -translate-x-5 sm:group-hover:translate-x-0"
    />
    <ArrowRight weight="bold" className="sm:group-hover:translate-x-5" />
  </span>
)

export default Garnish
