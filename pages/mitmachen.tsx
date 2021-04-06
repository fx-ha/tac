import Head from 'next/head'
import Image from 'next/image'

import { Col, Row } from 'react-bootstrap'

import Layout, { siteTitle } from '../components/Layout'
import FBIcon from '../components/navigation/FbIcon'
import InstaIcon from '../components/navigation/InstaIcon'

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
            src="/images/schaulustv3.png"
            alt="Schaulust Logo"
            width={688}
            height={420}
            layout="responsive"
          />
          <div className="font-weight-bold font-italic mt-2">
            Schaulust e.V.
          </div>
          <div>
            ist eine theaterplattform, die von studierenden der uni bayreuth
            gegründet wurde, um projekte im theater am campus der universität
            auf organisatorischer, künstlerischer und vor allem finanzieller
            ebene zu unterstützen. Wenn du irgendwelche fragen zur umsetzung
            deines projekts hast, sind wir deine ansprechpersonen!
          </div>
          <div>
            <div>
              <FBIcon
                href="https://www.facebook.com/Schaulust.eV"
                title="schaulust auf facebook"
              />{' '}
              <a
                href="https://www.facebook.com/Schaulust.eV"
                title="schaulust auf facebook"
                target="_blank"
                rel="noopener"
                className="text-reset"
              >
                @schaulust.ev
              </a>
            </div>
            <div>
              <InstaIcon
                href="https://www.instagram.com/e.v.schaulust/"
                title="schaulust auf instagram"
              />{' '}
              <a
                href="https://www.instagram.com/e.v.schaulust/"
                title="schaulust auf instagram"
                target="_blank"
                rel="noopener"
                className="text-reset"
              >
                @e.v.schaulust
              </a>
            </div>
            <div>
              mail:{' '}
              <a
                className="text-reset"
                href="mailto:info@schaulustev.de"
                title="mail an schaulust senden"
              >
                info@schaulustev.de
              </a>
            </div>
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

        <Col sm={4}>
          <Image
            src="/images/tacv2.png"
            alt="tac logo"
            width={688}
            height={420}
            layout="responsive"
          />
          <div className="font-weight-bold font-italic mt-2">
            arbeitskreis theater am campus
          </div>
          <div>
            kümmert sich um die öffentlichkeitsarbeit der studentischen
            theaterkultur der uni bayreuth. wir erstellen jedes semester neue
            spielpläne, vertreten die theaterkultur im studierendenparlament und
            durch uns bekommt ihr auch immer die neusten infos zu
            theaterprojekten!
            <br />
            (diese coole website hier ist auch von uns erstellt ;) )
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
            die schwarzen schafe
          </div>
          <div>
            sind eine studentische Theatergruppe unter dem dach der katholischen
            hochschulgemeinde bayreuth. 1x pro semester findet eine produktion
            von meist klassischen stücken statt, wie etwa 'gott des gemetzels',
            'dracula' oder auch 'besuch der alten dame'.
          </div>
          <div>
            <div>
              <FBIcon
                href="https://www.facebook.com/schwarzeschafebayreuth/"
                title="schwarze schafe auf facebook"
              />{' '}
              <a
                href="https://www.facebook.com/schwarzeschafebayreuth/"
                title="schwarze schafe auf facebook"
                target="_blank"
                rel="noopener"
                className="text-reset"
              >
                @schwarzeschafebayreuth
              </a>
            </div>
            <div>
              mail:{' '}
              <a
                className="text-reset"
                href="mailto:schafevorstand@gmail.com"
                title="mail an schwarze schafe senden"
              >
                schafevorstand@gmail.com
              </a>
            </div>
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
          <div>
            ist eine studentische theatergruppe, die englischsprachige stücke
            auf die bühne bringt.
          </div>
          <div>
            <FBIcon
              href="https://www.facebook.com/abdcbayreuth"
              title="american british drama club auf facebook"
            />{' '}
            <a
              href="https://www.facebook.com/abdcbayreuth"
              title="american british drama club auf facebook"
              target="_blank"
              rel="noopener"
              className="text-reset"
            >
              @abcdbayreuth
            </a>
          </div>
          <div>
            mail:{' '}
            <a
              className="text-reset"
              href="mailto:abdc.bayreuth@gmx.de"
              title="mail an abdc senden"
            >
              abdc.bayreuth@gmx.de
            </a>
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
