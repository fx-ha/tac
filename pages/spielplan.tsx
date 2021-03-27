import Head from 'next/head'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/Layout'
import EventList from '../components/EventList'

const Spielplan = ({ events }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | spieplan</title>
      </Head>
      <div>Auflistung aller Aufführungen für das Semester</div>
      <EventList events={events.items} isArchived={false} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.API_URL}?type=event.EventPage&child_of=3&fields=start_date,end_date,weitere,short_description`
  ) // TODO pagination w/ limit + offset
  const events = await res.json()

  return {
    props: {
      events,
    },
    revalidate: 10,
  }
}

export default Spielplan
