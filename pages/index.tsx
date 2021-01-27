import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'

import styles from '../styles/Home.module.sass'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Startseite</title>
      </Head>
    </Layout>
  )
}
