import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { cn } from 'utils/tw'

const Project = (props: { children?: React.ReactNode }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <section
      className="flex w-full flex-col gap-10 bg-orange-200/0 py-40 md:flex-row"
      ref={ref}
    >
      {props.children}
      <div className="flex items-center justify-center pt-20 md:w-3/4">
        <div
          className={cn(
            'primer aspect-video w-full rounded-3xl bg-indigo-500 shadow-2xl shadow-indigo-500/40',
            { 'animate-reveal': inView },
          )}
        />
      </div>
      <header className="mx-auto max-w-lg bg-blue-500/0 px-6 text-zinc-800 md:w-1/2">
        <h2
          className={cn('primer mb-8 text-2xl font-medium leading-snug', {
            'animate-revealMd': inView,
          })}
        >
          I served as Makelog's Director of Product & Design for the better half
          of 2023. We were making a changelog tool, but like many startups, we
          failed.
        </h2>
        <div
          className={cn('primer', {
            'animate-revealLg': inView,
          })}
        >
          <Link
            className="block w-max rounded-2xl bg-zinc-100 px-5 py-2 font-medium"
            href="https://makelog.com"
            type="secondary"
          >
            Visit
          </Link>
        </div>
      </header>
    </section>
  )
}

export default Project
