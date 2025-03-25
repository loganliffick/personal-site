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
    </Section>
  )
}
