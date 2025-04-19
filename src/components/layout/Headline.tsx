import dayjs from 'dayjs'

type HeadlineProps = {
  date?: string
  subhead: React.ReactNode | string
  title: React.ReactNode | string
}

export const Headline = ({ date, subhead, title }: HeadlineProps) => {
  return (
    <header className="mb-8">
      <h1 className="mb-1 text-xl font-medium tracking-tight text-balance">
        {title}
      </h1>
      <h2 className="text-balance text-neutral-600">{subhead}</h2>
      {date && (
        <p className="text-neutral-500">
          Published on {dayjs(date).format('MMMM DD, YYYY')}
        </p>
      )}
    </header>
  )
}
