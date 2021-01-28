import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'

export default function Archiv() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Archiv</title>
      </Head>
      <h1>Archiv</h1>
      <div>Auflistung vergangener Aufführungen</div>
    </Layout>
  )
}
