import Head from 'next/head'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/Layout'
import EventList from '../components/EventList'

export default function Spielplan({ events }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Spieplan</title>
      </Head>
      <div>Auflistung aller Aufführungen für das Semester</div>
      <EventList events={events} isArchived={false} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}?child_of=3`) // TODO pagination w/ limit + offset
  const events = await res.json()

  return {
    props: {
      events
    },
    revalidate: 10
  }
}