import Head from 'next/head'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/Layout'
import EventList from '../components/EventList'

export default function Archiv({ events }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Archiv</title>
      </Head>
      <h1>Archiv</h1>
      <div>Auflistung vergangener Aufführungen</div>
      <EventList events={events} isArchived={true} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}?child_of=4`) // TODO pagination w/ limit + offset
  const events = await res.json()

  return {
    props: {
      events
    },
    revalidate: 10
  }
}