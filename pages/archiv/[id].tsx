import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Col, Row } from 'react-bootstrap'
import Layout, { siteTitle } from '../../components/Layout'
import EventBody from '../../components/EventBody'
import { EventType } from '../../lib/types'

const Event = ({ event }: { event: EventType }) => {
  return (
    <Layout>
      <Head>
        <title>
          {siteTitle} | {event.title}
        </title>
      </Head>
      {event.preview_image !== null && (
        <Row>
          <Col>
            <div className="event-detail-image">
              <Image
                src={event.preview_image.meta.download_url}
                alt={event.preview_image.title}
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </Col>
        </Row>
      )}
      <Row className="mt-4">
        <Col>
          <h1>{event.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <EventBody body={event.body} />
        </Col>
      </Row>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}?child_of=4`)
  const events = await res.json()
  const paths = events.items.map(
    (event: { id: string }) => `/archiv/${event.id}`
  )

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.API_URL}${params?.id as string}`)
  const event = await res.json()

  return {
    props: {
      event,
    },
    revalidate: 10,
  }
}

export default Event
