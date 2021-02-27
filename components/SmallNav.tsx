import Link from 'next/link'

import { Nav, Navbar } from 'react-bootstrap'

import InstaIcon from './InstaIcon'
import FbIcon from './FbIcon'
import TacHeader from './TacHeader'

export default function SmallNav(): JSX.Element {
  return (
    <Navbar bg="light" expand={false} sticky="top" onToggle={toggleShadow}>
      <Link href="/" passHref>
        <Navbar.Brand title="startseite" aria-label="startseite">
          <TacHeader width="200" height="30" />
        </Navbar.Brand>
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
          <span>
            <FbIcon />
            <InstaIcon />
          </span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

  function toggleShadow(isExpanded: boolean) {
    const nav = document.getElementsByTagName('nav')[0]
    isExpanded
      ? nav.classList.add('shadow-sm')
      : nav.classList.remove('shadow-sm')
  }
}
