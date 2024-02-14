import { MonthDataType } from 'lib/activity/activityTypes'
import testImage from 'public/images/test-img.jpg'

export const decemberData: MonthDataType[] = [
  {
    month: 11,
    days: [
      {
        day: 31,
        type: 'Feature',
        content: [
          { type: 'Image', image: testImage },
          {
            type: 'TextBlock',
            text: {
              title: '✨ Best workspaces of 2023 ✨',
              body: 'I had the opportunity to do something sick asf, I made a new homepage bb.',
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: true,
              href: 'https://react.spltjs.com',
              text: 'Get splittin bb',
            },
          },
        ],
      },
    ],
  },
]
