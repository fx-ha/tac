import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { Card, Col, Row } from 'react-bootstrap'

import Layout, { siteTitle } from '../components/Layout'

const Home = ({ events, infoBox }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Home</title>
      </Head>
      <Image
        src="/images/Titelbild-tacwebsite.JPG"
        alt="TaC Bühne oben"
        width={4000}
        height={6000}
        layout="responsive"
      />
      {/* <div>
        Das Theater am Campus der Universität Bayreuth ist einer der größten durchlaufenden Spielbetriebe der Region.
        Dieses umfassende Kulturangebot ist fest in der Lehre verankert, wodurch eine diverse und experimentierfreudige
        Theaterlandschaft entsteht. Von Dramen über Live-Hörspiele bis hin zu Performance Art und Tanz-Shows ist hier
        alles zu finden. Wir freuen uns auf euren Besuch!
      </div> */}
      <Row className="mt-3">
        <Col>
          <Card>
            <Card.Body dangerouslySetInnerHTML={{ __html: infoBox.text }} />
          </Card>
        </Col>
        <Col lg={6} className="mt-3 mt-lg-0">
          <Card>
            <Card.Body>
              <Card.Text>(Kalendar)</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        {events.map(
          (event: {
            id: string
            title: string
            short_description: string
            start_date: string
            end_date: string
            preview_image: { meta: { download_url: string }; title: string }
          }) => (
            <Col key={event.id} sm={12} lg={6}>
              <Row>
                <Col sm={3} lg={12} className="mb-lg-2">
                  <Link href={'/spielplan/[id]'} as={`/spielplan/${event.id}`}>
                    <a>
                      <Image
                        src={event.preview_image.meta.download_url}
                        alt={event.preview_image.title}
                        width={1600}
                        height={900}
                        layout="responsive"
                        className="vorschaubild"
                      />
                    </a>
                  </Link>
                </Col>
                <Col>
                  <Link href={'/spielplan/[id]'} as={`/spielplan/${event.id}`}>
                    <a className="text-body">
                      <h3>{event.title}</h3>
                    </a>
                  </Link>
                  {/* <p>
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
                  </p> */}
                  <p>{event.short_description}</p>
                </Col>
              </Row>
            </Col>
          )
        )}
      </Row>
    </Layout>
  )
}

// const convertToJsDate = (dateString) => {
//   return new Date(dateString)
// }

// TODO
// if events.length === 3 || event.length === 1
//  add spielplan link (card/button)

export const getStaticProps: GetStaticProps = async () => {
  const eventRes = await fetch(
    `${process.env.API_URL}?type=event.EventPage&child_of=3&limit=4&fields=start_date,end_date,weitere,short_description,preview_image`
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
