import { MonthDataType } from 'lib/activity/activityTypes'
import lm from 'public/images/may-2024/lm.jpg'
import ob from 'public/images/may-2024/ob.jpg'

export const mayData: MonthDataType[] = [
  {
    month: 4,
    year: 2024,
    days: [
      {
        day: 3,
        type: 'Work',
        content: [
          { type: 'Image', image: ob },
          {
            type: 'TextBlock',
            text: {
              title: 'Outerbase 2.0 launch',
              body: 'We launched Outerbase 2.0 this week, packed full of fun goodies. We managed to snag 3rd for the day and 3rd for the week on Product Hunt!'
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: true,
              href: 'https://www.producthunt.com/posts/outerbase-2-0',
              text: 'Check it out on Product Hunt',
            },
          },
        ],
      },
      {
        day: 9,
        type: 'Feature',
        content: [
          { type: 'Image', image: lm },
          {
            type: 'TextBlock',
            text: {
              title: 'Lovers Magazine ❤️',
              body: 'Newly featured in the one and only Lovers Magazine by Spaces!'
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: true,
              href: 'https://spaces.is/loversmagazine/interviews/logan-liffick',
              text: 'Read all about me',
            },
          },
        ],
      },

    ],
  },
]
