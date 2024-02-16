import { MonthDataType } from 'lib/activity/activityTypes'
import testImage from 'public/images/test-img.jpg'

export const decemberData: MonthDataType[] = [
  {
    month: 11,
    year: 2023,
    days: [
      {
        day: 31,
        type: 'Life',
        content: [
          { type: 'Image', image: testImage },
          {
            type: 'TextBlock',
            text: {
              title: 'Dog pics 🦮 ❤️',
              body: 'A few pics of my very special boy.',
            },
          },
        ],
      },
    ],
  },
]
