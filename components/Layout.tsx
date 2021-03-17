import Head from 'next/head'
import Image from 'next/image'

import { Container } from 'react-bootstrap'
import MediaQuery from 'react-responsive'

import SmallNav from './navigation/SmallNav'
import BigNav from './navigation/BigNav'

export const siteTitle = 'Theater am Campus'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
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
        <div className="bgImg">
          <Image
            alt="Campus"
            src="/images/RS1424_uni_bay-9017.jpg"
            priority={true}
            loading="eager"
            layout="fill"
            objectFit="cover"
            quality={75}
          />
        </div>
        <div className="desktop-container">
          <BigNav />
          <Container as="main" className="mt-4">
            {children}
          </Container>
        </div>
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
