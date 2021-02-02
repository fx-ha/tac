import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'

export default function Datenschutz() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Datenschutz</title>
      </Head>
      <h1>Datenschutz</h1>
      <div>am Ende mithilfe e-recht24.de ausfüllen</div>
    </Layout>
  )
}
