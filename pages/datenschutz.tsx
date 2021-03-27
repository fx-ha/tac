import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'

const Datenschutz = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | datenschutz</title>
      </Head>
    </Layout>
  )
}

export default Datenschutz
