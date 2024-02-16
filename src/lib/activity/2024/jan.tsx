import TextLink from 'components/TextLink'
import { MonthDataType } from 'lib/activity/activityTypes'
import makelog from 'public/images/jan-2024/makelog.jpg'
import spltjs from 'public/images/jan-2024/spltjs.jpg'
import workspace from 'public/images/jan-2024/workspace.jpg'

export const januaryData: MonthDataType[] = [
  {
    month: 0,
    year: 2024,
    days: [
      {
        day: 12,
        type: 'Blog',
        content: [
          { type: 'Image', image: workspace },
          {
            type: 'TextBlock',
            text: {
              title: 'My oasis 🪴',
              body: `My workspace is my temple. It took a fantastic journey to get it where it is, and I've loved each iteration.`,
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: false,
              href: '/blog/my-workspace',
              text: 'Get cozy and read more',
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
              body: `The Makelog brand was featured in Fonts In Use! It's incredibly cool seeing a brand I poured a lot of love into getting the recognition it deserves!`,
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: true,
              href: 'https://fontsinuse.com/uses/56971/makelog-brand-refresh',
              text: 'Peep that kerning',
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
              title: 'SpltJS for React 🔪🍊🍐',
              body: [
                `A few years back I built a tiny text-splitter called `,
                <TextLink
                  text="SpltJS"
                  href="https://spltjs.com"
                  external
                  key={1}
                />,
                `. Now, rebuilt from the ground up for React with type-safety included, this little library is great for text-based animations.`,
              ],
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: true,
              href: 'https://react.spltjs.com/',
              text: 'Go get your Splt on',
            },
          },
        ],
      },
    ],
  },
]
