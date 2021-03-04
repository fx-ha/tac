import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { Card, Col, Row } from 'react-bootstrap'

import Layout, { siteTitle } from '../components/Layout'

const Home = ({ events }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Home</title>
      </Head>
      <Image
        src="/images/Titelbild-tacwebsite_upper.JPG"
        alt="TaC Bühne oben"
        width={4000}
        height={2240}
      />
      {/* <div>
        Das Theater am Campus der Universität Bayreuth ist einer der größten durchlaufenden Spielbetriebe der Region.
        Dieses umfassende Kulturangebot ist fest in der Lehre verankert, wodurch eine diverse und experimentierfreudige
        Theaterlandschaft entsteht. Von Dramen über Live-Hörspiele bis hin zu Performance Art und Tanz-Shows ist hier
        alles zu finden. Wir freuen uns auf euren Besuch!
      </div> */}
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>(optionale Infobox)</Card.Title>
          <Card.Text>(z.B. mit Informationen bezüglich Corona)</Card.Text>
        </Card.Body>
      </Card>
      <Row className="mt-3">
        {events.items.map(
          (event: {
            id: string
            title: string
            short_description: string
            start_date: string
            end_date: string
          }) => (
            <Col key={event.id} sm={12} lg={6}>
              <Row>
                <Col sm={3} lg={12}>
                  (Image)
                </Col>
                <Col>
                  <Link href={'/spielplan/[id]'} as={`/spielplan/${event.id}`}>
                    <a className="text-body">
                      <h3>{event.title}</h3>
                    </a>
                  </Link>
                  <p>
                    {convertToJsDate(event.start_date).toLocaleDateString(
                      'de-DE',
                      {
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                    {(() => {
                      if (event.end_date !== '') {
                        return ` bis ${convertToJsDate(
                          event.end_date
                        ).toLocaleDateString('de-DE', {
                          month: 'long',
                          day: 'numeric',
                        })}`
                      }
                    })()}
                  </p>
                  <p>{event.short_description}</p>
                </Col>
              </Row>
            </Col>
          )
        )}
      </Row>
      <Image
        src="/images/Titelbild-tacwebsite_lower.JPG"
        alt="TaC Bühne unten"
        width={4000}
        height={2629}
        className="mt-3"
      />
    </Layout>
  )
}

const convertToJsDate = (dateString) => {
  return new Date(dateString)
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.API_URL}?type=event.EventPage&child_of=3&limit=4&fields=start_date,end_date,weitere,short_description`
  )
  const events = await res.json()

  return {
    props: {
      events,
    },
    revalidate: 60,
  }
}

export default Home
