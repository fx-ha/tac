import Head from 'next/head'

import { Container } from 'react-bootstrap'
import MediaQuery from 'react-responsive'

import SmallNav from './SmallNav'
import BigNav from './BigNav'

export const siteTitle = 'Theater am Campus'

const Layout = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
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

      <MediaQuery minWidth={992}>
        <BigNav />
        <Container as="main" className="mt-3 desktop-container">
          {children}
        </Container>
      </MediaQuery>

      <MediaQuery maxWidth={991}>
        <SmallNav />
        <Container as="main" fluid={true}>
          {children}
        </Container>
      </MediaQuery>
    </>
  )
}

export default Layout
