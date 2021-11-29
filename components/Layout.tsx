import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import MediaQuery from 'react-responsive'
import SmallNav from './navigation/SmallNav'
import BigNav from './navigation/BigNav'
import backgroundImg from '../public/images/bg_v15.png'

export const siteTitle = 'theater am campus'

const Layout = ({ children }: { children: React.ReactNode }) => {
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
            src={backgroundImg}
            priority
            loading="eager"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="desktop-container">
          <div className="desktop-container-content">
            <BigNav />
            <Container as="main" className="mt-5 mb-3">
              {children}
            </Container>
          </div>
          <footer>
            <Link href="/impressum">impressum</Link> /{' '}
            <Link href="/datenschutz">datenschutz</Link>
          </footer>
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
