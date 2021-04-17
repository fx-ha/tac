import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import { Col, Row } from 'react-bootstrap'

import Layout, { siteTitle } from '../components/Layout'
import FBIcon from '../components/navigation/FbIcon'
import InstaIcon from '../components/navigation/InstaIcon'

const Mitmachen = ({
  castings,
  initiatives,
}: {
  castings: { title: string; text: string }[]
  initiatives: { title: string; text: string }[]
}): JSX.Element => {
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

      <h2 className="mt-4" id="initiativen">
        Initiativen
      </h2>
      <Row className="mt-3">
        <Col sm={4}>
          <Image
            src="/images/schaulustv3.png"
            alt="Schaulust Logo"
            width={688}
            height={420}
            layout="responsive"
          />
          <div className="font-weight-bold font-italic mt-2">
            {initiatives[0].title}
          </div>
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: initiatives[0].text }}
          />
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
            {initiatives[1].title}
          </div>
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: initiatives[1].text }}
          />
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
            {initiatives[2].title}
          </div>
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: initiatives[2].text }}
          />
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
            {initiatives[3].title}
          </div>
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: initiatives[3].text }}
          />
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
            {initiatives[4].title}
          </div>
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: initiatives[4].text }}
          />
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
      <h2 className="mt-5 mb-3" id="aufrufe">
        Castings, Aufrufe & Co.
      </h2>
      {castings.map((casting, index) => (
        <div key={index}>
          <h3>{casting.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: casting.text }} />
        </div>
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const initiativeRes = await fetch(
    `${process.env.API_URL}?type=participate.InitiativePage&fields=text`
  )
  const initiativeJson = await initiativeRes.json()
  const initiatives = initiativeJson.items

  const castingRes = await fetch(
    `${process.env.API_URL}?type=participate.CastingPage&fields=text`
  )
  const castingJson = await castingRes.json()
  const castings = castingJson.items

  return {
    props: {
      initiatives,
      castings,
    },
    revalidate: 10,
  }
}

export default Mitmachen
