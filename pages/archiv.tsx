import Head from 'next/head'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/Layout'
import EventList from '../components/EventList'

export default function Archiv({ events }): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Archiv</title>
      </Head>
      <div>Auflistung vergangener Aufführungen</div>
      <EventList events={events.items} isArchived={true} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.API_URL}?type=event.EventPage&child_of=4&fields=start_date,end_date,weitere,short_description`
  ) // TODO pagination w/ limit + offset
  const events = await res.json()

  return {
    props: {
      events,
    },
    revalidate: 10,
  }
}
