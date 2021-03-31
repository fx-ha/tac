import Link from 'next/link'

import { Nav, Navbar } from 'react-bootstrap'

import InstaIcon from './InstaIcon'
import FbIcon from './FbIcon'
import TacHeader from './TacHeader'
import SmallNavLink from './SmallNavLink'

const SmallNav = (): JSX.Element => {
  const toggleShadow = (isExpanded: boolean) => {
    const nav = document.getElementsByTagName('nav')[0]
    isExpanded
      ? nav.classList.add('shadow-sm')
      : nav.classList.remove('shadow-sm')
  }

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
          <SmallNavLink targetUrl="/spielplan" targetName="spielplan" />
          <SmallNavLink targetUrl="/mitmachen" targetName="mitmachen!" />
          <SmallNavLink targetUrl="/studium" targetName="studium" />
          <SmallNavLink targetUrl="/ueber-das-tac" targetName="über das tac" />
          <SmallNavLink targetUrl="/karten" targetName="karten" />
          <SmallNavLink targetUrl="/archiv" targetName="archiv" />
          <SmallNavLink targetUrl="/kontakt" targetName="kontakt" />
          <SmallNavLink targetUrl="/impressum" targetName="impressum" />
          <SmallNavLink targetUrl="/datenschutz" targetName="datenschutz" />
          <span>
            <FbIcon
              href="https://www.facebook.com/TaCBayreuth"
              title="tac auf facebook"
              className="mr-2"
            />
            <InstaIcon
              href="https://www.instagram.com/TacBayreuth/"
              title="tac auf instagram"
            />
          </span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default SmallNav
