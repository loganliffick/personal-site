import { BackButton } from '@/components/BackButton'
import { Headline } from '@/components/Headline'
import { Inset } from '@/components/Inset'
import { Main } from '@/components/Main'
import { Section } from '@/components/Section'

const cards = [
  'Card 1',
  'Card 2',
  'Card 3',
  'Card 4',
  'Card 5',
  'Card 6',
  'Card 7',
  'Card 8',
  'Card 9',
  'Card 10',
]

const Card = ({
  id,
  style,
  title,
}: {
  id: string
  style?: React.CSSProperties
  title?: string
}) => (
  <div
    className="reveal reveal-sm border-base-border bg-base-100 text-base-strong rounded-md border px-4 py-2 shadow-xs"
    id={id}
    style={style}
  >
    {title}
  </div>
)

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams
  const page = parseInt(params.page || '1', 10)
  const itemsPerPage = 2
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = page * itemsPerPage

  const paginatedCards = cards.slice(startIndex, endIndex)
  const hasMore = endIndex < cards.length

  return (
    <Main>
      <Section>
        <Inset>
          <BackButton />
          <Headline
            title={'Paginated links'}
            subhead={
              'Achieving crawlable card layouts without leaving the page.'
            }
          />
          <div className="bg-base-200 flex w-full flex-col gap-2 overflow-hidden rounded-lg p-4">
            {paginatedCards.map((result, index) => {
              const id = `${startIndex + index}`
              return (
                <Card
                  id={id}
                  title={result}
                  key={id}
                  style={{ animationDelay: `${25 * index}ms` }}
                />
              )
            })}
          </div>

          {hasMore && (
            <a
              href={`?page=${page + 1}`}
              className="bg-base-1000 text-base-100 mt-4 inline-block cursor-pointer rounded-full px-4 py-1.5 font-medium"
            >
              Show more
            </a>
          )}
        </Inset>
      </Section>
    </Main>
  )
}
