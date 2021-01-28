import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'

export default function Theaterinitiativen() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Theaterinitiativen</title>
      </Head>
      <h1>Theaterinitiativen</h1>
      <div>visuelles konzept, diese zu verstehen und voneinander unterscheiden zu können</div>
    </Layout>
  )
}
