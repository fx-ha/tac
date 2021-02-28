import Link from 'next/link'

import { Col, Container, Row } from 'react-bootstrap'

import InstaIcon from './InstaIcon'
import FbIcon from './FbIcon'
import TacHeader from './TacHeader'

const BigNav = (): JSX.Element => {
  return (
    <Container as="nav" className="desktop-container">
      <Row className="mt-3">
        <Col lg={9}>
          <Link href="/kontakt">
            <a className="text-body">kontakt</a>
          </Link>
        </Col>
        <Col lg={3} className="text-right">
          <FbIcon />
          <InstaIcon />
        </Col>
      </Row>

      <Row className="mt-2">
        <Col>
          <Link href="/">
            <a title="startseite" aria-label="startseite">
              <TacHeader />
            </a>
          </Link>
        </Col>
        <Col lg={2}></Col>
      </Row>
      <hr className="mt-1 pt-0" />
      <Row>
        <Col lg="auto">
          <Link href="/spielplan">
            <a className="text-body">spielplan</a>
          </Link>
        </Col>
        <Col></Col>
        <Col lg="auto">
          <Link href="/mitmachen">
            <a className="text-body">mitmachen!</a>
          </Link>
        </Col>
        <Col></Col>
        <Col lg="auto">
          <Link href="/ueber-das-tac">
            <a className="text-body">über das tac</a>
          </Link>
        </Col>
        <Col></Col>
        <Col lg="auto">
          <Link href="/karten">
            <a className="text-body">karten</a>
          </Link>
        </Col>
        <Col></Col>
        <Col lg="auto">
          <Link href="/archiv">
            <a className="text-body">archiv</a>
          </Link>
        </Col>
        <Col></Col>
        <Col lg="auto">
          <Link href="/impressum">
            <a className="text-body">impressum</a>
          </Link>
        </Col>
        <Col></Col>
        <Col lg="auto">
          <Link href="/datenschutz">
            <a className="text-body">datenschutz</a>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default BigNav
