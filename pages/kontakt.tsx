import { FormEvent, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Col, Button, Form, Row } from 'react-bootstrap'
import Layout, { siteTitle } from '../components/Layout'
import FBIcon from '../components/navigation/FbIcon'
import InstaIcon from '../components/navigation/InstaIcon'

const Kontakt = () => {
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
      resultMessage = 'Fehler! Bitte Admin kontaktieren.'
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
          <Col>
            <p>
              Ihr möchtet alle aktuellen Infos zu Aufführungen, Castings etc.
              auch als Mail bekommen? Dann meldet euch unter{' '}
              <a
                className="text-reset"
                href="mailto:info@schaulustev.de"
                title="mail an schaulust senden"
              >
                info@schaulustev.de
              </a>{' '}
              zum Newsletter an!
            </p>
          </Col>
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
            <p>
              Bei Fragen zum Programm, zur Arbeit des &#39;theater am
              campus&#39; oder auch für mögliche Kooperationen kann über
              folgende Mailadresse Kontakt zu uns aufgenommen werden:
            </p>
            <p>
              ak.tac@uni-bayreuth.de
              <br />
              Ansprechpartnerin: Donata Hörr
            </p>
            <p>
              Für mehr Einblicke in die studentischen Theaterprojekte geht&#39;s
              hier entlang:
            </p>
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

export default Kontakt
