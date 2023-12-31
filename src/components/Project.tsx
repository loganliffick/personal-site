import Link from 'next/link'
const Project = (props: { children?: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-col gap-10 bg-orange-200/0 py-40 md:flex-row">
      {props.children}
      <div className="flex items-center justify-center pt-20 md:w-3/4">
        <div className="aspect-video w-full rounded-3xl bg-indigo-500 shadow-2xl shadow-indigo-500/40" />
      </div>
      <header className="mx-auto max-w-lg bg-blue-500/0 px-6 text-zinc-800 md:w-1/2">
        <h3 className="mb-8 text-2xl font-medium leading-snug">
          I served as Makelog's Director of Product & Design for the better half
          of 2023. We were making a changelog tool, but like many startups, we
          failed.
        </h3>
        <Link
          className="block w-max rounded-2xl bg-zinc-100 px-5 py-2 font-medium"
          href="https://makelog.com"
          type="secondary"
        >
          Visit
        </Link>
      </header>
    </div>
  )
}

export default Project
