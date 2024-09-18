import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: ['var(--figtree)', ...defaultTheme.fontFamily.sans],
      },

      borderRadius: {
        '2.5xl': '18px',
      },

      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.2, -0.25, 0, 1.6)',
      },

      keyframes: {
        fade: {
          from: {
            opacity: '0%',
          },
          to: {
            opacity: '100%',
          },
        },

        scaleFade: {
          from: {
            opacity: '0%',
            transform: 'scale(0.75)',
          },
          to: {
            opacity: '100%',
            transform: 'scale(1)',
          },
        },

        reveal: {
          from: {
            opacity: '0%',
            transform: 'translateY(40px)',
          },
          to: {
            opacity: '100%',
            transform: 'translateY(0px)',
          },
        },

        modalReveal: {
          from: {
            opacity: '0%',
            transform: 'scale(0.7) translateY(100px)',
          },
          to: {
            opacity: '100%',
            transform: 'scale(1) translateY(0px)',
          },
        },

        rotate: {
          from: {
            opacity: '0%',
            transform: 'translateY(40px) rotate(6deg)',
          },
          to: {
            opacity: '100%',
            transform: 'translateY(0px) rotate(0deg)',
          },
        },

        rotateAlt: {
          from: {
            opacity: '0%',
            transform: 'translateY(40px) rotate(-6deg)',
          },
          to: {
            opacity: '100%',
            transform: 'translateY(0px) rotate(0deg)',
          },
        },

        bouncy: {
          to: {
            transform: 'translateX(50px)',
          },
        },
      },

      animation: {
        fadeXs: 'fade 0.2s forwards',
        fadeSm: 'fade 0.4s forwards',
        fade: 'fade 0.8s forwards',
        fadeMd: 'fade 1.2s forwards',
        fadeLg: 'fade 1.6s forwards',
        fadeXl: 'fade 2s forwards',

        scaleFadeBlog: 'scaleFade 0.8s cubic-bezier(0.2,0,0,1.2) forwards',
        scaleFade: 'scaleFade 0.4s cubic-bezier(0.7,0,0.5,2) forwards',

        revealSm: 'reveal 0.8s cubic-bezier(0.5,-0.2,0.1,1.2) forwards',
        reveal: 'reveal 1.2s cubic-bezier(0.5,-0.2,0.1,1.3) forwards',
        revealMd: 'reveal 1.4s cubic-bezier(0.5,-0.2,0.1,1.4) forwards',
        revealLg: 'reveal 1.6s cubic-bezier(0.5,-0.2,0.1,1.5) forwards',
        modalReveal: 'modalReveal 0.6s cubic-bezier(0,1,0,1.1) forwards',

        rotate: 'rotate 1s cubic-bezier(0.5,-0.5,0.1,1.8) forwards',
        rotateAlt: 'rotateAlt 1s cubic-bezier(0.5,1,0.1,1.8) forwards',

        bouncy: 'bouncy 3s ease infinite alternate',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
