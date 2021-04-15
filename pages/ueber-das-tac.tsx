import Link from 'next/link'
import Head from 'next/head'

import { Col, Row } from 'react-bootstrap'

import Layout, { siteTitle } from '../components/Layout'

const UeberDasTac = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | über das tac</title>
      </Head>
      <section>
        <p>
          Das theater am campus (tac) ist eine feste Anlaufstelle und
          Aufführungsort für verschiedenste Aktivitäten der performativen Künste
          auf dem Campus der Universität Bayreuth.
        </p>
        <p>
          Es versteht sich als experimentierfreudige Bühne der studentischen
          Kultur abseits der traditionellen Theaterbetriebe und bietet
          ganzjährig ein breites Programm von Inszenierungen klassischer
          Theatertexte und Gegenwartsdramatik bis hin zu Live-Hörspielen,
          Performance Art und Tanz.
        </p>
        <p>
          Du möchtest gerne an einem dieser Theaterprojekte vor oder hinter der
          Bühne mitmachen?{' '}
          <Link href="/mitmachen">
            <a>Hier</a>
          </Link>{' '}
          findest du die neuesten Ausschreibungen und Kontakte zu
          Theatergruppen, aber auch die Initiativen, welche die Theaterkultur am
          Campus ermöglichen.
        </p>
      </section>
      <section className="mt-4 mb-3">
        <h3 className="text-uppercase">Team</h3>
        <Row>
          <Col md={6}>
            <h4>Öffentlichkeitsarbeit</h4>
            <p>
              Donata Hörr
              <br />
              Elena Arnold
              <br />
              Nathan Herzfeld
              <br />
              Lennart Schmidt
              <br />
              Julia Schutt
              <br />
              Annabell Strobel
            </p>
          </Col>
          <Col md={6}>
            <h4>Technik</h4>
            <p>
              Jonas Würdinger
              <br />
              Matthias Ebert
            </p>
          </Col>
          <Col md={6}>
            <h4>Disposition</h4>
            <p>Melanie Klos</p>
          </Col>
          <Col md={6}>
            <h4>Leitung</h4>
            <p>Daniel Schauf</p>
          </Col>
        </Row>
      </section>
      <section>
        <p>
          Das theater am campus wird ermöglicht durch die Professuren für
          Theaterwissenschaft (Prof. Wolf-Dieter Ernst) und Theaterdidaktik
          (Prof. Gabriela Paule). Es wird im Studierenparlament vertreten durch
          den Arbeitskreis TaC und entsteht in enger Zusammenarbeit mit
          Schaulust e.V.
        </p>
        <p>
          Das theater am campus wird gefördert vom Studentenwerk der Universität
          und dem Kulturamt der Stadt Bayreuth.
        </p>
      </section>
    </Layout>
  )
}

export default UeberDasTac
