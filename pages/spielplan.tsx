import Head from 'next/head'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/layout'

export default function Spielplan({ events }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Spieplan</title>
      </Head>
      <h1>Spielplan</h1>
      <div>Auflistung aller Aufführungen für das Semester</div>
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
  const res = await fetch("http://127.0.0.1:8000/api/v2/pages/?child_of=3")
  const events = await res.json()

  return {
    props: {
      events
    },
    revalidate: 1 // revalidate once per second
  }
}

// TODO getStaticPaths
// TODO create event(listing) component