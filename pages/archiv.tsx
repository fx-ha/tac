import Head from 'next/head'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/Layout'
import EventList from '../components/EventList'
import { EventType } from '../lib/types'

const Archiv = ({ events }: { events: EventType[] }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | archiv</title>
      </Head>
      <p className="mb-4">
        An der Uni Bayreuth ist in den letzten Jahren schon sehr viel
        Theaterkultur entstanden.
        <br />
        Hier gibt es Einblicke in die bereits entstandenen Projekte unserer
        Studierenden!
      </p>
      <EventList events={events} isArchived={true} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.API_URL}?type=event.EventPage&child_of=4&fields=start_date,short_description,preview_image`
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

export default Archiv
