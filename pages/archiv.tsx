import Head from 'next/head'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/Layout'
import EventList from '../components/EventList'

const Archiv = ({ events }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | archiv</title>
      </Head>
      <p>
        an der uni bayreuth ist in den letzten jahren schon sehr viel
        theaterkultur entstanden.
        <br />
        hier gibt es einblicke in die bereits entstandenen projekte unserer
        studierenden!
      </p>
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

export default Archiv
