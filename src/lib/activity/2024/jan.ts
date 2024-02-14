import { MonthDataType } from 'lib/activity/activityTypes'
import makelog from 'public/images/jan-2023/makelog.jpg'
import spltjs from 'public/images/jan-2023/spltjs.jpg'
import workspace from 'public/images/jan-2023/workspace.jpg'

export const januaryData: MonthDataType[] = [
  {
    month: 0,
    days: [
      {
        day: 12,
        type: 'Blog',
        content: [
          { type: 'Image', image: workspace },
          {
            type: 'TextBlock',
            text: {
              title: 'Fortress of solitude 🪴',
              body: 'My workspace is my temple. It took a fantastic journey to get it where it is, and I’ve loved each iteration.',
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: false,
              href: '/blog/fortress-of-solitude',
              text: 'Read more',
            },
          },
        ],
      },

      {
        day: 20,
        type: 'Feature',
        content: [
          { type: 'Image', image: makelog },
          {
            type: 'TextBlock',
            text: {
              title: '✨ Makelog featured ✨',
              body: 'The Makelog brand was featured in Fonts In Use! Super cool seeing a brand I built being highlighted for its use of typography!',
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: true,
              href: 'https://fontsinuse.com/uses/56971/makelog-brand-refresh',
              text: 'Check it out',
            },
          },
        ],
      },

      {
        day: 23,
        type: 'Side Project',
        content: [
          { type: 'Image', image: spltjs },
          {
            type: 'TextBlock',
            text: {
              title: 'SpltJS for React 🔪',
              body: 'A few years back I built a tiny text-splitter called SpltJS. Now rebuilt from the ground up for React with type-safety.',
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: true,
              href: 'https://react.spltjs.com/',
              text: 'Go get your splt on',
            },
          },
        ],
      },
    ],
  },
]
