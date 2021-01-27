import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'

export default function Spielplan() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Spieplan</title>
      </Head>
      <main>Hier kommt der Spielplan</main>
    </Layout>
  )
}
