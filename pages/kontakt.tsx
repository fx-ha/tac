import { FormEvent, useState } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Col, Button, Form, Row } from 'react-bootstrap'
import Layout, { siteTitle } from '../components/Layout'
import FBIcon from '../components/navigation/FbIcon'
import InstaIcon from '../components/navigation/InstaIcon'

const Kontakt = ({
  contact,
}: {
  contact: { text1: string; text2: string }
}) => {
  const [show, setShow] = useState(false)
  let resultMessage = 'Nachricht wurde verschickt!'
  const [loading, setLoading] = useState(false)

  const sendContactForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // don't redirect the page
    setLoading(true)

    const res = await fetch(
      'https://theater-am-campus.herokuapp.com/contact/',
      {
        body: JSON.stringify({
          email: e.currentTarget.email.value,
          subject: e.currentTarget.subject.value,
          message: e.currentTarget.message.value,
        }),
        method: 'POST',
      }
    )

    const result = await res.json()

    if (result.result === 'success') {
      resultMessage = 'Nachricht wurde verschickt!'
    } else {
      switch (result.result) {
        case 'bad header':
          resultMessage = 'Fehler im "E-Mail-Header"! Bitte Admin kontaktieren.'
          break
        case 'smtp error':
          resultMessage = 'Fehler beim "SMTP-Server"! Bitte Admin kontaktieren.'
          break
        case 'unknown error':
          resultMessage = 'Unbekannter Fehler! Bitte Admin kontaktieren.'
          break
        default:
          resultMessage = 'Fehlgeschlagen! Bitte Admin kontaktieren.'
          break
      }
    }

    setLoading(false)
    setShow(true)
    // e.target.reset() clear form
  }

  return (
    <>
      <div className="myModal" style={{ display: show ? 'block' : 'none' }}>
        <div className="modalHeader">
          <div className="modalTitle">Kontakt</div>
          <button
            type="button"
            className="close"
            onClick={() => setShow(false)}
          >
            <span aria-hidden="true">×</span>
            <span className="sr-only">Schließen</span>
          </button>
        </div>

        <div className="modalBody">{resultMessage}</div>

        <div className="modalFooter">
          <Button variant="secondary" onClick={() => setShow(false)}>
            Schließen
          </Button>
        </div>
      </div>
      <Layout>
        <Head>
          <title>{siteTitle} | kontakt</title>
        </Head>
        <Row>
          <Col dangerouslySetInnerHTML={{ __html: contact.text1 }} />
        </Row>

        <Row className="mt-2 mt-md-3">
          <Col>
            <Form onSubmit={sendContactForm}>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Label htmlFor="subject" srOnly>
                    Betreff
                  </Form.Label>
                  <Form.Control
                    id="subject"
                    type="text"
                    placeholder="Betreff"
                    required
                  />
                </Col>
                <Col className="mt-3 mt-md-0">
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

              <Row className="mt-3 mt-md-4">
                <Col>
                  <Form.Label htmlFor="message" srOnly>
                    Nachricht
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    id="message"
                    rows={5}
                    placeholder="Nachricht"
                    required
                  />
                </Col>
              </Row>

              <Row className="mt-3">
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

              <Row className="mt-3">
                <Col>
                  <Button
                    variant="outline-primary"
                    type="submit"
                    disabled={loading}
                  >
                    Abschicken
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <div dangerouslySetInnerHTML={{ __html: contact.text2 }} />

            <div>
              <div className="mb-1">
                <FBIcon
                  href="https://www.facebook.com/TaCBayreuth"
                  title="tac auf facebook"
                />{' '}
                <a
                  href="https://www.facebook.com/TaCBayreuth"
                  title="tac auf facebook"
                  target="_blank"
                  rel="noreferrer"
                  className="text-reset"
                >
                  @tacbayreuth
                </a>
              </div>
              <div>
                <InstaIcon
                  href="https://www.instagram.com/TacBayreuth/"
                  title="tac auf instagram"
                />{' '}
                <a
                  href="https://www.instagram.com/TacBayreuth/"
                  title="tac auf instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="text-reset"
                >
                  @tacbayreuth
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.API_URL}?type=contact.ContactIndexPage&fields=text1,text2`
  )
  const json = await res.json()
  const contact = json?.items[0]

  return {
    props: {
      contact,
    },
    revalidate: 10,
  }
}

export default Kontakt
