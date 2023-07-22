/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-satoshi)', 'ui-sans-serif', 'system-ui'],
      mono: ['var(--font-cascadia)', 'ui-monospace', 'SFMono-Regular'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
