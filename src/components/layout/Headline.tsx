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
      <h2 className="text-base-medium inline sm:block">{subhead}</h2>{' '}
      {date && (
        <p className="text-base-medium inline sm:block">
          Published on{' '}
          <span className="text-base-1000">
            {dayjs(date).format('MMMM DD, YYYY')}
          </span>
          .
        </p>
      )}
    </header>
  )
}
