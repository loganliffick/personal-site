import { MonthDataType } from 'lib/activity/activityTypes'
import placeholder from 'public/images/placeholder.jpg'
import testImage from 'public/images/test-img.jpg'

export const februaryData: MonthDataType[] = [
  {
    month: 1,
    days: [
      {
        day: 5,
        type: 'Blog',
        content: [
          { type: 'Image', image: placeholder },
          {
            type: 'TextBlock',
            text: {
              title: 'Welcome to NY 💁‍♀️',
              body: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish',
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: false,
              href: '/blog/hello-world',
              text: 'Read the rest...',
            },
          },
        ],
      },

      {
        day: 10,
        type: 'Project',
        content: [
          { type: 'Image', image: testImage },
          {
            type: 'TextBlock',
            text: {
              title: '🕸️ New site launched 🚀',
              body: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.',
            },
          },
        ],
      },

      {
        day: 15,
        type: 'Feature',
        content: [
          {
            type: 'TextBlock',
            text: {
              title: '🕸️ Hey look a feature 🚀',
              body: 'Woohoo it works!!!!!!!!!!!1',
            },
          },
          { type: 'Image', image: testImage },
          {
            type: 'TextBlock',
            text: {
              title: '🕸️ New site launched 🚀',
              body: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.',
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

      {
        day: 20,
        type: 'Small Project',
        content: [
          { type: 'Image', image: testImage },
          {
            type: 'TextBlock',
            text: {
              title: '✨ New page ✨',
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
