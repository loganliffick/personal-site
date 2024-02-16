import TextLink from 'components/TextLink'
import { MonthDataType } from 'lib/activity/activityTypes'
import obThemeSwitch from 'public/images/feb-2024/ob-theme-switcher.jpg'
import seinfeld from 'public/images/feb-2024/seinfeld.jpg'
import solarpunk from 'public/images/feb-2024/solarpunk.jpg'

export const februaryData: MonthDataType[] = [
  {
    month: 1,
    year: 2024,
    days: [
      {
        day: 5,
        type: 'Misc',
        content: [
          { type: 'Image', image: solarpunk },
          {
            type: 'TextBlock',
            text: {
              title: 'Solarpunk x Seinfeld',
              body: [
                `I've been playing around with a fun little tool called `,
                <TextLink
                  text="Visual Electric"
                  href="https://visualelectric.com"
                  external
                  key={1}
                />,
                ` lately. Tested out a few auto renders, thought they were nifty.`,
              ],
            },
          },
          { type: 'Image', image: seinfeld },
          {
            type: 'LinkButton',
            link: {
              external: true,
              href: 'https://twitter.com/logan_liffick/status/1754565928111501507/photo/1',
              text: 'Off to Twitter',
            },
          },
        ],
      },
      {
        day: 14,
        type: 'Work',
        content: [
          { type: 'Image', image: obThemeSwitch },

          {
            type: 'TextBlock',
            text: {
              title: 'Outerbase Theme toggle ⚪️ ⚫️',
              body: `Add this to the 'list of things we had been needing to launch for a long time' fweh, available for all!`,
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: true,
              href: 'https://twitter.com/logan_liffick/status/1757827474715549875',
              text: 'Check it out',
            },
          },
        ],
      },

      {
        day: 15,
        type: 'Blog',
        content: [
          {
            type: 'TextBlock',
            text: {
              title: '✨ New personal site ✨',
              body: `Ohhhhhh, you're here right now! This is a really meta post.`,
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: false,
              href: '/blog/thanks-for-stopping-by',
              text: 'Read the blog',
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: true,
              href: 'https://react.spltjs.com',
              text: 'Go like the Tweet',
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: false,
              href: '/404',
              text: 'Heck, check out the 404 page',
            },
          },
        ],
      },
    ],
  },
]
