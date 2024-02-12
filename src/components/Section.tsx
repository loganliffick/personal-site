import { cn } from 'utils/tw'

const Section = (props: {
  children?: React.ReactNode
  className?: string
  visualize?: boolean
}) => (
  <section
    className={cn(
      'my-32 flex w-full max-w-lg flex-col items-center text-zinc-800',
      { 'bg-orange-200': props.visualize },
      props.className,
    )}
  >
    {props.children}
  </section>
)

export default Section
