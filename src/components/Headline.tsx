import dayjs from 'dayjs'

type HeadlineProps = {
  date?: string
  subhead: React.ReactNode | string
  title: React.ReactNode | string
}

export const Headline = ({ date, subhead, title }: HeadlineProps) => {
  return (
    <header className="mb-16">
      <h2 className="font-medium text-balance">{title}</h2>
      <p className="text-base-soft mt-2 leading-relaxed">{subhead}</p>{' '}
      {date && (
        <p className="text-base-soft">{dayjs(date).format('MMMM DD, YYYY')}.</p>
      )}
    </header>
  )
}
