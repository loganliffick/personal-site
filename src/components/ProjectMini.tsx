import Link, { LinkProps } from 'next/link'
import { useInView } from 'react-intersection-observer'
import { cn } from 'utils/tw'

type linkProps = {
  aria?: string

  href: LinkProps['href']
  text: string
}

const ProjectMini = (props: {
  colors: 1 | 2 | 3
  linkProps: linkProps
  text: string
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <section className="w-full">
      <div
        className={cn(
          'reveal mx-auto flex w-full max-w-lg items-center justify-between rounded-[20px] p-1 pl-5 font-medium',
          {
            'bg-zinc-200 text-zinc-600': props.colors === 1,
            'bg-red-200 text-indigo-600': props.colors === 2,

            'animate-revealMd': inView,
          },
        )}
        ref={ref}
      >
        {props.text}
        <Link
          href={props.linkProps.href}
          aria-label={props.linkProps.aria ?? props.linkProps.text}
          className={cn(
            'block shrink-0 rounded-2xl px-4 py-2.5 transition-transform active:scale-95 sm:hover:bg-opacity-75',
            {
              'bg-zinc-100 text-zinc-600 sm:hover:bg-white': props.colors === 1,
              'bg-indigo-600 text-red-200': props.colors === 2,
            },
          )}
        >
          {props.linkProps.text}
        </Link>
      </div>
    </section>
  )
}

export default ProjectMini
