import Head from 'next/head'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/layout'

export default function Archiv({ events }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Archiv</title>
      </Head>
      <h1>Archiv</h1>
      <div>Auflistung vergangener Aufführungen</div>
      <div>
        <ul>
          {events.items.map((event: { id: number; title: string }) =>
            <li key={event.id}>{event.title}</li>
          )}
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/v2/pages/?child_of=4")
  const events = await res.json()

  return {
    props: {
      events
    },
    revalidate: 1 // revalidate once per second
  }
}

// TODO getStaticPaths