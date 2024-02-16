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
          {
            type: 'TextBlock',
            text: {
              title: 'Solarpunk x Seinfeld',
              body: [
                `I've been playing around with the slick new product the folks at `,
                <TextLink
                  text="Visual Electric"
                  href="https://visualelectric.com"
                  external
                  key={1}
                />,
                ` have been shipping. Highly recommend.`,
              ],
            },
          },
          { type: 'Image', image: solarpunk },
          { type: 'Image', image: seinfeld },
          {
            type: 'LinkButton',
            link: {
              external: true,
              href: 'https://twitter.com/logan_liffick/status/1754565928111501507/photo/1',
              text: 'Non-ai-generated tweet',
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
              title: 'Outerbase theme toggle ⚪️ ⚫️',
              body: `Who doesn't love a good dark mode? Better yet: who doesn't love a good dark mode that's easily within reach from a menu? Available now, get it while it's hot!`,
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
              title: 'New personal site 🎉',
              body: `If you're reading this... thank you! Happy to have you here in my little corner of the internet and I hope you're enjoying yourself. I have plenty more coming and hope you'll stick around ❤️`,
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: false,
              href: '/blog/thanks-for-stopping-by',
              text: 'Read more about the site',
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: true,
              href: 'https://twitter.com/logan_liffick/status/1758546296258920698',
              text: 'Idk, go like the Tweet',
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
