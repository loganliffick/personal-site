const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.unsplash.com', 's3.us-west-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
