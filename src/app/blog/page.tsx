import { Button } from '@/components/ds/Button'
import { Section } from '@/components/Section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Logan Liffick is a design engineer building brands, systems, and products.',
}

export default function Page() {
  return (
    <Section>
      <p>Blog</p>
      <Button title={'click me to do something'} />
    </Section>
  )
}
