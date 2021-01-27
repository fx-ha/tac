import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'

export default function Archiv() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Archiv</title>
      </Head>
      <main>Hier kommt das Archiv</main>
    </Layout>
  )
}
