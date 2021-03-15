module.exports = {
  /* config options here */
  experimental: {
    optimizeFonts: true,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/veranstaltungen',
        destination: '/spielplan',
        permanent: true,
      },
    ]
  },
}
