import dayjs from 'dayjs'

type HeadlineProps = {
  date?: string
  subhead: React.ReactNode | string
  title: React.ReactNode | string
}

export const Headline = ({ date, subhead, title }: HeadlineProps) => {
  return (
    <header className="mb-16">
      <h1 className="text-lg font-medium text-balance">{title}</h1>
      <h2 className="text-base-soft mt-0.5">{subhead}</h2>{' '}
      {date && (
        <p className="text-base-soft">{dayjs(date).format('MMMM DD, YYYY')}.</p>
      )}
    </header>
  )
}
