import { MonthDataType } from 'lib/activity/activityTypes'
import blogImg from 'public/images/aug-2024/blog.jpg'

export const augData: MonthDataType[] = [
  {
    month: 7,
    year: 2024,
    days: [
      {
        day: 19,
        type: 'Blog',
        content: [
          { type: 'Image', image: blogImg },
          {
            type: 'TextBlock',
            text: {
              title: 'Launched my new blog 🚀',
              body: `It's been a long-time coming, and I finally finished the redesign. Might post to it more often ✌️`,
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: false,
              href: '/blog',
              text: 'Go read some stuff',
            },
          },
        ],
      },
    ],
  },
]
