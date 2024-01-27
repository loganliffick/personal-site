import Button from 'components/Button'
import { useInView } from 'react-intersection-observer'
import { cn } from 'utils/tw'

const Card = (props: {
  children?: React.ReactNode
  direction?: 'std' | 'alt'
  inView: boolean
}) => (
  <div
    className={cn(
      'reveal mx-auto h-80 w-full rounded-[40px] bg-indigo-500 shadow-lg shadow-zinc-500/20 sm:h-80 sm:w-56',
      {
        'animate-rotateAlt': props.inView && props.direction === 'alt',
        'animate-rotate': props.inView,
      },
    )}
  >
    {props.children}
  </div>
)

const Project = (props: {
  children?: React.ReactNode
  direction?: 'std' | 'alt'
  linkProps: React.ComponentProps<typeof Button>
  text: string
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <section
      className={cn(
        'flex w-full max-w-lg flex-col gap-8 bg-orange-200/0 py-16 sm:flex-row sm:gap-16',
        { 'sm:flex-row-reverse': props.direction === 'alt' },
      )}
      ref={ref}
    >
      <Card inView={inView} direction={props.direction}>
        {props.children}
      </Card>
      <header className="mx-auto flex w-full max-w-xs flex-col justify-center gap-6 bg-blue-500/0 px-4 text-zinc-800 sm:w-56 sm:px-0">
        <h2
          className={cn('reveal font-serif text-zinc-700', {
            'animate-revealMd': inView,
          })}
        >
          {props.text}
        </h2>
        <div
          className={cn('reveal', {
            'animate-revealLg': inView,
          })}
        >
          <Button
            as="a"
            text={props.linkProps.text}
            href={props.linkProps.href}
            type="primary"
            external
          />
        </div>
      </header>
    </section>
  )
}

export default Project
