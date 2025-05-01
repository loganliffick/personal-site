'use client'

import { Headline } from '@/components/layout/Headline'
import { Inset } from '@/components/layout/Inset'
import { Main } from '@/components/layout/Main'
import { Section } from '@/components/layout/Section'
import { useRouter, useSearchParams } from 'next/navigation'

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
    className="reveal reveal-sm border-base-border rounded-md border bg-white px-4 py-2 shadow-xs"
    id={id}
    style={style}
  >
    {title}
  </div>
)

export default function Page() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = parseInt(searchParams.get('page') || '1', 10)
  const itemsPerPage = 2
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = page * itemsPerPage

  const handleNextPage = () => {
    const nextPage = page + 1
    router.push(`?page=${nextPage}`)
  }

  return (
    <Main>
      <Section>
        <Inset>
          <Headline title={'Paginated links'} subhead={'Testing pag.'} />
          <div className="bg-base-200 flex w-full flex-col gap-2 overflow-hidden rounded-lg p-4">
            {cards.slice(startIndex, endIndex).map((result, index) => {
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

          {endIndex < cards.length && (
            <button
              className="bg-base-1000 text-base-100 mt-4 cursor-pointer rounded-full px-4 py-1.5 font-medium"
              onClick={handleNextPage}
            >
              Show more
            </button>
          )}
        </Inset>
      </Section>
    </Main>
  )
}
