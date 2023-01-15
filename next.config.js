module.exports = {
  // allows external images
  images: {
    domains: ['images.unsplash.com', 's3.us-west-2.amazonaws.com'],
  },
  // sets lang attribute
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  reactStrictMode: true,
};
