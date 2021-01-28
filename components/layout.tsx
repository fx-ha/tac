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
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>
        <Navbar bg="light" expand="lg">
          <Link href="/" passHref><Navbar.Brand>Theater am Campus</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link href="/" passHref><Nav.Link>Startseite</Nav.Link></Link>
              <Link href="/spielplan" passHref><Nav.Link>Spielplan</Nav.Link></Link>
              <Link href="/theaterinitiativen" passHref><Nav.Link>Theaterinitiativen</Nav.Link></Link>
              <Link href="/archiv" passHref><Nav.Link>Archiv</Nav.Link></Link>
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
