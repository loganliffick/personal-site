import { cn } from 'utils/tw'

const Section = (props: {
  children?: React.ReactNode
  visualize?: boolean
  width?: '3xl'
}) => (
  <section
    className={cn(
      'my-32 flex w-full max-w-5xl flex-col items-center text-zinc-800',
      { 'max-w-3xl': props.width === '3xl' },
      { 'bg-orange-200': props.visualize },
    )}
  >
    {props.children}
  </section>
)

export default Section
