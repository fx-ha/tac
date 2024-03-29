import Link from 'next/link'
import { Nav, Navbar } from 'react-bootstrap'
import InstaIcon from './InstaIcon'
import FbIcon from './FbIcon'
import YoutubeIcon from './YoutubeIcon'
import TacHeader from './TacHeader'
import SmallNavLink from './SmallNavLink'

const SmallNav = () => {
  const toggleShadow = (isExpanded: boolean) => {
    const nav = document.getElementsByTagName('nav')[0]
    isExpanded
      ? nav.classList.add('shadow-sm')
      : nav.classList.remove('shadow-sm')
  }

  return (
    <Navbar bg="light" expand={false} sticky="top" onToggle={toggleShadow}>
      <Link href="/" passHref>
        <Navbar.Brand title="zur startseite" aria-label="zur startseite">
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
              className="mr-2"
            />
            <YoutubeIcon
              href="https://www.youtube.com/channel/UCpYQLXiJm-1T97dimLLv_tQ/"
              title="tac auf youtube"
            />
          </span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default SmallNav
