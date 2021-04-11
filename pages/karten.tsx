import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import { Col, Button, Form, Row } from 'react-bootstrap'
import MediaQuery from 'react-responsive'

import Layout, { siteTitle } from '../components/Layout'
import { EventType } from '../lib/types'

const Karten = ({ events }: { events: EventType[] }): JSX.Element => {
  const reserveTickets = async (e) => {
    e.preventDefault() // don't redirect the page
    console.log(e.target.eventSelect.value)
    console.log(e.target.ticketSelect.value)
    console.log(e.target.name.value)
    console.log(e.target.email.value)

    //   const res = await fetch(
    //     'https://hooks.zapier.com/hooks/catch/123456/abcde',
    //     {
    //       body: JSON.stringify({
    //         name: e.target.name.value,
    //       }),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       method: 'POST',
    //     }
    //   )

    //   const result = await res.json()
    //   // result.user => 'Ada Lovelace'
    // e.target.reset() clear form
  }

  return (
    <Layout>
      <Head>
        <title>{siteTitle} | karten</title>
      </Head>
      <Row>
        <Col md={6} className="mb-4">
          <Form onSubmit={reserveTickets}>
            <Row className="mb-4">
              <Col>
                <Form.Label htmlFor="eventSelect" srOnly>
                  Veranstaltung
                </Form.Label>
                <Form.Control as="select" id="eventSelect" custom>
                  {events.map((event: EventType) => (
                    <option key={event.id} value={event.id}>
                      {event.title}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Form.Label htmlFor="ticketSelect" srOnly>
                  Karten
                </Form.Label>
                <Form.Control as="select" id="ticketSelect" custom>
                  <option>Karten...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </Form.Control>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <Form.Label htmlFor="name" srOnly>
                  Name
                </Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  placeholder="Name"
                  autoComplete="name"
                  required
                />
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Form.Label htmlFor="email" srOnly>
                  E-Mail
                </Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  placeholder="E-Mail"
                  autoComplete="email"
                  required
                />
              </Col>
            </Row>

            <Button variant="outline-primary" type="submit">
              Reservieren
            </Button>
          </Form>
        </Col>
        <Col>
          <MediaQuery minWidth={768}>
            <Image
              src="/images/KonTaCt_sm.jpg"
              alt="Theater am Campus"
              width={1920}
              height={1080}
              layout="responsive"
            />
          </MediaQuery>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Die meisten Theaterprojekte verlangen kein Eintrittsgeld für ihre
            Aufführungen.
            <br />
            Damit aber klar wird, wie viele Leute kommen werden (vor allem jetzt
            zu Coronazeiten eine notwendige Info!), ist es wichtig, Karten zu
            reservieren.
          </p>
          <p>
            Wichtig! Bitte die eigene Mail-Adresse angeben, damit eine
            Bestätigung der Reservierung zurückgeschickt werden kann.
          </p>
          <p>
            Eine veranstaltung findet sich nicht in der Auswahl?
            <br />
            Dann einfach ne Mail an ak.tac@uni-bayreuth.de schreiben und wir
            helfen!
          </p>
        </Col>
      </Row>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}?child_of=3`)
  const eventJson = await res.json()
  const events = eventJson.items

  return {
    props: {
      events,
    },
    revalidate: 10,
  }
}

export default Karten
