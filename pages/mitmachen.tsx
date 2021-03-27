import Head from 'next/head'
import Image from 'next/image'

import { Col, Row } from 'react-bootstrap'

import Layout, { siteTitle } from '../components/Layout'

const Mitmachen = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | mitmachen!</title>
      </Head>

      <div>
        Hey! Du willst mitmachen, wie gut! Es kommt jetzt natürlich darauf an,
        <span className="font-italic"> was genau du machen möchtest</span>.
        <br />
        Um dir eine Übersicht zu geben, haben wir die verschiedenen
        Anlaufstellen farbig markiert, je nachdem ob du{' '}
        <br className="d-none d-lg-block" />
        <span className="theater-spielen">Theater spielen </span>{' '}
        <span className="dot theater-spielen-bg" title="theater spielen" />,{' '}
        <span className="theater-ansehen">Theater ansehen</span>{' '}
        <span className="dot theater-ansehen-bg" title="theater ansehen" /> oder{' '}
        <span className="theater-organisieren">Theater organisieren</span>{' '}
        <span
          className="dot theater-organisieren-bg"
          title="theater organisieren"
        />{' '}
        willst.
      </div>

      <Row className="mt-5">
        <Col sm={4}>
          <Image
            src="/images/schaulustv2.png"
            alt="Schaulust Logo"
            width={688}
            height={420}
            layout="responsive"
          />
          <div className="font-weight-bold font-italic mt-2">
            Schaulust e.V.
          </div>
          <div>Ist ein Theaterförderverein.</div>
          <div>
            <span
              className="dot theater-ansehen-bg mr-2"
              title="theater ansehen"
            ></span>
            <span
              className="dot theater-organisieren-bg"
              title="theater organisieren"
            ></span>
          </div>
        </Col>

        <Col sm={4}>
          <Image
            src="/images/tacv2.png"
            alt="tac logo"
            width={688}
            height={420}
            layout="responsive"
          />
          <div className="font-weight-bold font-italic mt-2">
            AK theater am campus
          </div>
          <div>
            Kümmert sich um Öffentlichkeitsarbeit, Marketing und gehört zum
            StuPa.
          </div>
          <div>
            <span
              className="dot theater-ansehen-bg mr-2"
              title="theater ansehen"
            ></span>
            <span
              className="dot theater-organisieren-bg"
              title="theater organisieren"
            ></span>
          </div>
        </Col>
        <Col sm={4} />

        <Col sm={4} className="mt-sm-2">
          <Image
            src="/images/schwarze_schafev2.png"
            alt="Schwarze Schafe Logo"
            width={688}
            height={420}
            layout="responsive"
          />
          <div className="font-weight-bold font-italic mt-2">
            SCHWARZE SCHAFE e.V.
          </div>
          <div>
            Ist ein Theaterverein. Hier wird vor allem klassisches Theater
            gemacht.
          </div>
          <div>
            <span
              className="dot theater-spielen-bg mr-2"
              title="theater spielen"
            ></span>
            <span
              className="dot theater-ansehen-bg mr-2"
              title="theater ansehen"
            ></span>
            <span
              className="dot theater-organisieren-bg"
              title="theater organisieren"
            ></span>
          </div>
        </Col>

        <Col sm={4} className="mt-sm-2">
          <Image
            src="/images/abdcv2.png"
            alt="American British Drama Club Logo"
            width={688}
            height={420}
            layout="responsive"
          />
          <div className="font-weight-bold font-italic mt-2">
            American British Drama Club
          </div>
          <div>Ist eine englische Theatergruppe.</div>
          <div>
            <span
              className="dot theater-spielen-bg mr-2"
              title="theater spielen"
            ></span>
            <span
              className="dot theater-ansehen-bg mr-2"
              title="theater ansehen"
            ></span>
            <span
              className="dot theater-organisieren-bg"
              title="theater organisieren"
            ></span>
          </div>
        </Col>

        <Col sm={4} className="mt-4 mt-sm-2">
          <div className="d-none d-sm-block">
            <Image
              src="/images/empty_logo.png"
              alt="Kein Logo"
              width={688}
              height={420}
              layout="responsive"
            />
          </div>
          <div className="font-weight-bold font-italic mt-2">
            projekte der studierenden
          </div>
          <div>
            Die Theaterstudent*innen realisieren freie Projekte und
            Abschlussprojekte. Von Performance über Tanz bis zu Musiktheater
            gibt's hier alles!
          </div>
          <div>
            <span
              className="dot theater-spielen-bg mr-2"
              title="theater spielen"
            ></span>
            <span
              className="dot theater-ansehen-bg mr-2"
              title="theater ansehen"
            ></span>
            <span
              className="dot theater-organisieren-bg"
              title="theater organisieren"
            ></span>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default Mitmachen
