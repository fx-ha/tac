import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'

export default function Impressum() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Impressum</title>
      </Head>
      <h1>Impressum</h1>
      <div>Auflistung aller Aufführungen für das Semester</div>
    </Layout>
  )
}
