import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'

const UeberDasTac = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | studieren</title>
      </Head>
      <p>Text</p>
    </Layout>
  )
}

export default UeberDasTac
