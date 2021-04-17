import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { Card, Col, Row } from 'react-bootstrap'
import Calendar from 'react-calendar'
import { isSameDay } from 'date-fns'

import Layout, { siteTitle } from '../components/Layout'
import { EventType } from '../lib/types'
import { getEventDates } from '../lib/dates'

const Home = ({
  events,
  infoBox,
}: {
  events: EventType[]
  infoBox: { text: string }
}): JSX.Element => {
  const router = useRouter()

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (getEventDates(events).find((eDate) => isSameDay(eDate, date))) {
        return 'event-date'
      }
    }
  }

  const gotoSpielplan = () => {
    router.push('/spielplan')
  }

  events.sort(
    (a, b) =>
      new Date(a.start_date).getTime() - new Date(b.start_date).getTime()
  )

  return (
    <Layout>
      <Head>
        <title>{siteTitle} | startseite</title>
      </Head>

      <Row>
        <Col>
          <Image
            src="/images/dragwalk.jpg"
            alt="TaC Bühne"
            width={5865}
            height={4000}
            layout="responsive"
          />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="infobox">
            <Card.Body
              className="text-justify"
              dangerouslySetInnerHTML={{ __html: infoBox.text }}
            />
          </Card>
        </Col>

        <Col className="mt-4 mt-md-0">
          <Calendar tileClassName={tileClassName} onClickDay={gotoSpielplan} />
        </Col>
      </Row>

      <h2 className="mt-4">Programm</h2>
      <Row className="mt-3">
        {events.length === 0 ? (
          <Col>Demnächst sind keine Veranstaltungen geplant.</Col>
        ) : (
          events.slice(0, 4).map((event) => (
            <Col key={event.id} sm={12} className="mb-4">
              <Row>
                <Col sm={3} className="mb-lg-2">
                  <Link href={`/spielplan/${event.id}`}>
                    <a>
                      {event.preview_image !== null ? (
                        <Image
                          src={event.preview_image.meta.download_url}
                          alt={event.preview_image.title}
                          width={16}
                          height={9}
                          layout="responsive"
                          className="vorschaubild"
                        />
                      ) : (
                        <Image
                          src="/images/TaCLogo_transparent.png"
                          alt="tac logo"
                          width={16}
                          height={9}
                          layout="responsive"
                          className="vorschaubild"
                        />
                      )}
                    </a>
                  </Link>
                </Col>
                <Col className="mt-2 mt-sm-0">
                  <Link href={`/spielplan/${event.id}`}>
                    <a className="text-body">
                      <h3>{event.title}</h3>
                    </a>
                  </Link>
                  <div className="text-justify">{event.short_description}</div>
                </Col>
              </Row>
            </Col>
          ))
        )}
      </Row>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const eventRes = await fetch(
    `${process.env.API_URL}?type=event.EventPage&child_of=3&fields=start_date,weitere,short_description,preview_image`
  )
  const eventJson = await eventRes.json()
  const events = eventJson.items

  const infoRes = await fetch(
    `${process.env.API_URL}?type=core.Infobox&fields=text`
  )
  const infoJson = await infoRes.json()
  const infoBox = infoJson.items[0]

  return {
    props: {
      events,
      infoBox,
    },
    revalidate: 10,
  }
}

export default Home
