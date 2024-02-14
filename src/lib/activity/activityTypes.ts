import { StaticImageData } from 'next/image'

type ImageContent = {
  type: 'Image'
  image: StaticImageData
}

type TextBlockContent = {
  type: 'TextBlock'
  text: {
    title?: string
    body: string
  }
}

type LinkButtonContent = {
  type: 'LinkButton'
  link: {
    external?: boolean
    href: string
    text: string
  }
}

type ContentItem = ImageContent | TextBlockContent | LinkButtonContent

type Day = {
  day: number
  type: 'Blog' | 'Work' | 'Side Project' | 'Feature' | 'Life' | 'Misc'
  content: ContentItem[]
}

export type MonthDataType = {
  month: number
  days: Day[]
}
