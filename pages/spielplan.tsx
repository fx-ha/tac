import Head from 'next/head'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/Layout'
import EventList from '../components/EventList'
import { EventType } from '../lib/types'

const Spielplan = ({ events }: { events: EventType[] }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | spieplan</title>
      </Head>
      <div>Auflistung aller Aufführungen für das Semester</div>
      <EventList events={events} isArchived={false} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.API_URL}?type=event.EventPage&child_of=3&fields=start_date,weitere,short_description`
  ) // TODO pagination w/ limit + offset
  const eventJson = await res.json()
  const events = eventJson.items

  return {
    props: {
      events,
    },
    revalidate: 10,
  }
}

export default Spielplan
