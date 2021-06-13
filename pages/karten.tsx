import { ChangeEvent, FormEvent, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { Col, Button, Form, Row } from 'react-bootstrap'
import MediaQuery from 'react-responsive'

import Layout, { siteTitle } from '../components/Layout'
import { EventType } from '../lib/types'

const Karten = ({
  events,
  info,
}: {
  events: EventType[]
  info: { text: string }
}): JSX.Element => {
  const [show, setShow] = useState(false)
  let resultMessage = 'Karten wurden reserviert!'

  const getEventDates = (event: EventType): string[] => {
    const eventDates = []
    if (typeof event !== 'undefined') {
      eventDates.push(
        new Date(event.start_date).toLocaleDateString('de-DE', {
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })
      )
      event.weitere.forEach((date) => {
        eventDates.push(
          new Date(date.value).toLocaleDateString('de-DE', {
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
        )
      })
    }
    return eventDates
  }

  const [selectedEventDates, setEventDates] = useState(getEventDates(events[0]))

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setEventDates(
      getEventDates(
        events.find((event) => event.id.toString() === e.currentTarget.value)
      )
    )
  }

  const reserveTickets = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // don't redirect the page

    const res = await fetch(
      'https://theater-am-campus.herokuapp.com/reservation/',
      {
        body: JSON.stringify({
          message_name: e.currentTarget.registrant.value,
          message_email: e.currentTarget.email.value,
          message_event: e.currentTarget.eventSelect.value,
          message_date: e.currentTarget.dateSelect.value,
          message_tickets: e.currentTarget.ticketSelect.value,
        }),
        method: 'POST',
      }
    )

    const result = await res.json()
    if (result.result === 'success') {
      resultMessage = 'Karten wurden reserviert!'
    } else {
      resultMessage = 'Fehler! Bitte Admin kontaktieren.'
    }
    setShow(true)
    // e.target.reset() clear form
  }

  return (
    <Layout>
      <Head>
        <title>{siteTitle} | karten</title>
      </Head>
      <Row>
        <Col md={6} lg={5} className="mb-4">
          <Form onSubmit={reserveTickets}>
            <Row className="mb-4">
              <Col>
                <Form.Label htmlFor="eventSelect" srOnly>
                  Veranstaltung
                </Form.Label>
                <Form.Control
                  as="select"
                  id="eventSelect"
                  custom
                  onChange={handleChange}
                >
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
                <Form.Label htmlFor="dateSelect" srOnly>
                  Datum
                </Form.Label>
                <Form.Control as="select" id="dateSelect" custom>
                  {selectedEventDates.length === 0 ? (
                    <option value=""></option>
                  ) : (
                    <>
                      {selectedEventDates.map((date, index) => (
                        <option key={index} value={date}>
                          {date}
                        </option>
                      ))}
                    </>
                  )}
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
                <Form.Label htmlFor="registrant" srOnly>
                  Name
                </Form.Label>
                <Form.Control
                  id="registrant"
                  type="text"
                  placeholder="Name"
                  autoComplete="name"
                  required
                />
              </Col>
            </Row>

            <Row className="mb-3">
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

            <Row className="mb-3">
              <Col>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" required />
                  <Form.Check.Label>
                    Ich stimme der{' '}
                    <Link href="/datenschutz">Datenschutzerklärung</Link> zu.
                  </Form.Check.Label>
                </Form.Check>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button variant="outline-primary" type="submit">
                  Reservieren
                </Button>
              </Col>
              {show && (
                <Col className="mt-2 my-sm-auto" sm={7}>
                  {resultMessage}
                </Col>
              )}
            </Row>
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
        <Col dangerouslySetInnerHTML={{ __html: info.text }} />
      </Row>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const eventRes = await fetch(
    `${process.env.API_URL}?type=event.EventPage&child_of=3&fields=start_date,weitere,recipient`
  )
  const eventJson = await eventRes.json()
  const events = eventJson.items.filter((event) => event.recipient !== null)

  const infoRes = await fetch(
    `${process.env.API_URL}?type=event.TicketPage&fields=text`
  )
  const infoJson = await infoRes.json()
  const info = infoJson.items[0]

  return {
    props: {
      events,
      info,
    },
    revalidate: 10,
  }
}

export default Karten
