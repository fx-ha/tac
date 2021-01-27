import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'

export default function Theaterinitiativen() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Theaterinitiativen</title>
      </Head>
      <main>Hier kommen die Theaterinitiativen</main>
    </Layout>
  )
}
