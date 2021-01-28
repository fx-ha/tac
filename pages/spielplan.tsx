import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'

export default function Spielplan() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Spieplan</title>
      </Head>
      <h1>Spielplan</h1>
      <div>Auflistung aller Aufführungen für das Semester</div>
    </Layout>
  )
}
