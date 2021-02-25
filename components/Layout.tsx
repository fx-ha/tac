import Head from 'next/head'
import Link from 'next/link'

import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import MediaQuery from 'react-responsive'

export const siteTitle = 'Theater am Campus'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Theater am Campus der Universität Bayreuth"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>

      {/* desktop */}
      <MediaQuery minWidth={992}>
        <Container as="nav" className="desktop-container">
          <Row className="mt-3">
            <Col lg={9}>
              <Link href="/kontakt">
                <a className="text-body">kontakt</a>
              </Link>
            </Col>
            <Col lg={3} className="text-right">
              (social icons)
            </Col>
          </Row>

          <Row>
            <Col className="desktop-brand">
              <Link href="/">
                <a className="text-body">Theater am Campus</a>
              </Link>
              <hr className="mt-0 pt-0" />
            </Col>
          </Row>

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
        <Container as="main" className="mt-3 desktop-container">
          {children}
        </Container>
      </MediaQuery>

      {/* mobile */}
      <MediaQuery maxWidth={991}>
        <Navbar bg="light" expand={false} sticky="top">
          <Link href="/" passHref>
            <Navbar.Brand>Theater am Campus</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link href="/spielplan" passHref>
                <Nav.Link>spielplan</Nav.Link>
              </Link>
              <Link href="/mitmachen" passHref>
                <Nav.Link>mitmachen!</Nav.Link>
              </Link>
              <Link href="/ueber-das-tac" passHref>
                <Nav.Link>über das tac</Nav.Link>
              </Link>
              <Link href="/karten" passHref>
                <Nav.Link>karten</Nav.Link>
              </Link>
              <Link href="/archiv" passHref>
                <Nav.Link>archiv</Nav.Link>
              </Link>
              <Link href="/kontakt" passHref>
                <Nav.Link>kontakt</Nav.Link>
              </Link>
              <Link href="/impressum" passHref>
                <Nav.Link>impressum</Nav.Link>
              </Link>
              <Link href="/datenschutz" passHref>
                <Nav.Link>datenschutz</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container as="main" fluid={true}>
          {children}
        </Container>
      </MediaQuery>
    </>
  )
}
