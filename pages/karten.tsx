import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import { Col, Button, Form, Row } from 'react-bootstrap'
import MediaQuery from 'react-responsive'

import Layout, { siteTitle } from '../components/Layout'

const Karten = ({ events }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Karten</title>
      </Head>
      <Row>
        <Col md={6} className="mb-4">
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Label htmlFor="eventSelect">Veranstaltung</Form.Label>
                <Form.Control as="select" id="eventSelect" custom>
                  {events.items.map((event: { id: string; title: string }) => (
                    <option key={event.id} value={event.id}>
                      {event.title}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Form.Label htmlFor="ticketSelect">Karten</Form.Label>
                <Form.Control as="select" id="ticketSelect" custom>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </Form.Control>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <Form.Label htmlFor="name" srOnly>
                  Name
                </Form.Label>
                <Form.Control id="name" type="text" placeholder="Name" />
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Form.Label htmlFor="email" srOnly>
                  E-Mail
                </Form.Label>
                <Form.Control id="email" type="email" placeholder="E-Mail" />
              </Col>
            </Row>

            <Button variant="outline-primary" type="submit">
              Senden
            </Button>
          </Form>
        </Col>
        <Col>
          <MediaQuery minWidth={992}>
            <Image
              src="/images/KonTaCt_sm.jpg"
              alt="Theater am Campus"
              width={1920}
              height={1080}
            />
          </MediaQuery>
        </Col>
      </Row>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}?child_of=3`)
  const events = await res.json()

  return {
    props: {
      events,
    },
    revalidate: 10,
  }
}

export default Karten
