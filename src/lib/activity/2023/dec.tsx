import { MonthDataType } from 'lib/activity/activityTypes'
import ollie1 from 'public/images/dec-2023/ollie-1.jpg'
import ollie2 from 'public/images/dec-2023/ollie-2.jpg'
import ollie3 from 'public/images/dec-2023/ollie-3.jpg'
import ollie4 from 'public/images/dec-2023/ollie-4.jpg'

export const decemberData: MonthDataType[] = [
  {
    month: 11,
    year: 2023,
    days: [
      {
        day: 31,
        type: 'Life',
        content: [
          {
            type: 'TextBlock',
            text: {
              title: 'Dog pics 🦮 ❤️',
              body: 'A few pics of my very special boy!',
            },
          },
          { type: 'Image', image: ollie1 },
          { type: 'Image', image: ollie2 },
          { type: 'Image', image: ollie3 },
          { type: 'Image', image: ollie4 },
        ],
      },
    ],
  },
]
