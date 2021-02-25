import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'

export default function Datenschutz(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Datenschutz</title>
      </Head>
      <div>am Ende mithilfe e-recht24.de ausfüllen</div>
    </Layout>
  )
}
