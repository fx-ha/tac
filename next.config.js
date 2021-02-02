module.exports = {
  /* config options here */
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