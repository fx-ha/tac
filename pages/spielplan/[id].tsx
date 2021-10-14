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
            <Image
              src={event.preview_image.meta.download_url}
              alt={event.preview_image.title}
              width={16}
              height={7}
              layout="responsive"
              className="vorschaubild"
            />
          </Col>
        </Row>
      )}
      <Row className="mt-2">
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
  const res = await fetch(`${process.env.API_URL}?child_of=3`)
  const events = await res.json()
  const paths = events.items.map(
    (event: { id: string }) => `/spielplan/${event.id}`
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
