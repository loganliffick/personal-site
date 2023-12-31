import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: ['var(--figtree)', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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

        reveal: {
          from: {
            opacity: '0%',
            transform: 'translateY(80px)',
          },
          to: {
            opacity: '100%',
            transform: 'translateY(0px)',
          },
        },
      },
      animation: {
        fadeXs: 'fade 0.2s forwards',
        fadeSm: 'fade 0.4s forwards',
        fade: 'fade 0.8s forwards',
        fadeMd: 'fade 2s forwards',

        revealSm: 'reveal 0.3s cubic-bezier(0,1,0,1.1) forwards',
        reveal: 'reveal 0.8s cubic-bezier(0,0.6,0,1.5) forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
