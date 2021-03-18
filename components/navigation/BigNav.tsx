import Link from 'next/link'

import { Col, Container, Row } from 'react-bootstrap'

import InstaIcon from './InstaIcon'
import FbIcon from './FbIcon'
import TacHeader from './TacHeader'
import BigNavLink from './BigNavLink'

const BigNav = (): JSX.Element => {
  return (
    <Container as="nav">
      <Row className="mt-3">
        <Col>
          <Link href="/">
            <a title="startseite" aria-label="startseite">
              <TacHeader />
            </a>
          </Link>
        </Col>
        <Col lg={2} className="text-right mt-auto mb-4">
          <FbIcon className="mr-2" />
          <InstaIcon />
        </Col>
      </Row>
      <hr className="mt-1 pt-0" />
      <Row>
        <Col lg="auto">
          <BigNavLink targetUrl="/spielplan" targetName="spielplan" />
        </Col>
        <Col></Col>
        <Col lg="auto">
          <BigNavLink targetUrl="/mitmachen" targetName="mitmachen!" />
        </Col>
        <Col></Col>
        <Col lg="auto">
          <BigNavLink targetUrl="/studieren" targetName="studieren" />
        </Col>
        <Col></Col>
        <Col lg="auto">
          <BigNavLink targetUrl="/ueber-das-tac" targetName="über das tac" />
        </Col>
        <Col></Col>
        <Col lg="auto">
          <BigNavLink targetUrl="/karten" targetName="karten" />
        </Col>
        <Col></Col>
        <Col lg="auto">
          <BigNavLink targetUrl="/archiv" targetName="archiv" />
        </Col>
        <Col></Col>
        <Col lg="auto">
          <BigNavLink targetUrl="/kontakt" targetName="kontakt" />
        </Col>
      </Row>
    </Container>
  )
}

export default BigNav
