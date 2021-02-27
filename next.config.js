module.exports = {
  /* config options here */
  // experimental: {
  //   optimizeFonts: true,
  // },
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
