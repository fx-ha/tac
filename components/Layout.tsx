import Head from 'next/head'
import Link from 'next/link'

import { Navbar, Nav } from 'react-bootstrap'

export const siteTitle = 'Theater am Campus'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
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
      <header>
        {/* TODO media query desktop only */}
        {/* TODO desktop only component */}
        {/* TODO media query mobile only */}
        {/* TODO mobile only component */}
        <Navbar bg="light" expand={false}>
          <Link href="/" passHref><Navbar.Brand>Theater am Campus</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
              <Link href="/spielplan" passHref><Nav.Link>Spielplan</Nav.Link></Link>
              <Link href="/theaterinitiativen" passHref><Nav.Link>Theaterinitiativen</Nav.Link></Link>
              <Link href="/archiv" passHref><Nav.Link>Archiv</Nav.Link></Link>
              <Link href="/wer-sind-wir" passHref><Nav.Link>Über uns</Nav.Link></Link>
              <Link href="/kontakt" passHref><Nav.Link>Kontakt</Nav.Link></Link>
              <Link href="/impressum" passHref><Nav.Link>Impressum</Nav.Link></Link>
              <Link href="/datenschutz" passHref><Nav.Link>Datenschutz</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main>{children}</main>
    </>
  )
}
