module.exports = {
  /* config options here */
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
