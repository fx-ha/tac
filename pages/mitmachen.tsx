import Head from 'next/head'

import { Col, Card, Row } from 'react-bootstrap'

import Layout, { siteTitle } from '../components/Layout'

const Mitmachen = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | mitmachen!</title>
      </Head>
      <p>
        Das Theater an der Universität Bayreuth ist größtenteils studentisch und
        vollständig ehrenamtlich organisiert. Ob ihr einfach nur ein Stück sehen
        wollt, selber mitspielen wollt oder vielleicht sogar darüber nachdenkt,
        Theater mit in euer Studium einzubauen, die folgenden Initiativen können
        euch dabei weiterhelfen.
      </p>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/logo-AKTaC_alt1.png" />
            <Card.Body>
              <Card.Title>AK Theater am Campus</Card.Title>
              <Card.Text>
                {/* TODO remove p tags and ul tags */}
                {/* TODO redo as component */}
                <p>
                  Der AK Theater am Campus will jegliche Theaterkultur der
                  Universität unter einer strukturellen Einheit zusammenfassen.
                  Wir erstellen Spielpläne, organisieren das theatrale
                  Campusleben und helfen den Projektleitern bei der
                  Kommunikation mit den Organen der Universität. Wir möchten so
                  bald wie möglich ein Campus Theater entstehen lassen, in dem
                  studentische Theater- und Musikprojekte einer breiten
                  Uni-Öffentlichkeit präsentiert werden können.
                </p>
                Kontakt:{' '}
                <a href="http://fb.com/TaCBayreuth">fb.com/TaCBayreuth</a> //{' '}
                <a href="http://instagram.com/TaCBayreuth">
                  instagram.com/TaCBayreuth
                </a>{' '}
                <br />
                E-Mail:{' '}
                <a href="mailto:AK.TaC@uni-bayreuth.de">
                  AK.TaC@uni-bayreuth.de
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/schaulust.png" />
            <Card.Body>
              <Card.Title>Schaulust e.V.</Card.Title>
              <Card.Text>
                <p>
                  Schaulust e.V. unterstützt studentische Theaterprojekte der
                  Uni Bayreuth in allen organisatorischen, künstlerischen und
                  finanziellen Angelegenheiten.
                </p>
                Kontakt: <a href="http://www.schaulustev.de/">schaulustev.de</a>{' '}
                // <a href="http://fb.com/Schaulust.eV">fb.com/Schaulust.eV</a>{' '}
                <br />
                E-Mail:{' '}
                <a href="mailto:info@schaulustev.de">info@schaulustev.de</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/schwarze_schafe.jpeg" />
            <Card.Body>
              <Card.Title>​Die Schwarzen Schafe</Card.Title>
              <Card.Text>
                <p>
                  Der Verein Schwarze Schafe e.V. ist eine Gruppe junger
                  Menschen aller Studien- und Ausbildungsrichtungen, die die
                  Freude an künstlerischen Tätigkeiten, wie Schauspiel und
                  Bühnenbild, verbindet. Gemeinsam lassen sie ihrer Kreativität
                  freien Lauf und bringen zum Ende eines jeden Semesters ein
                  sehenswertes Stück auf die Bühne.
                </p>
                Kontakt:{' '}
                <a href="http://fb.com/schwarzeschafebayreuth">
                  fb.com/schwarzeschafebayreuth
                </a>{' '}
                //{' '}
                <a href="http://instagram.com/e.v.schwarzeschafe">
                  http://instagram.com/e.v.schwarzeschafe
                </a>{' '}
                <br />
                E-Mail:{' '}
                <a href="mailto:schafevorstand@gmail.com">
                  schafevorstand@gmail.com
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/abdc.png" />
            <Card.Body>
              <Card.Title>​ABDC - American & British Drama Club</Card.Title>
              <Card.Text>
                <p>
                  The American & Britsh Drama Club is a student founded
                  organisation at the University of Bayreuth. Together, we
                  develop a stage a stage production in English once per year.
                </p>
                Contact: ABDC (American & British Drama Club) Isabella Bigus &
                Annika Brondke
                <br />
                E-Mail:{' '}
                <a href="mailto:abdc.bayreuth@gmx.de">abdc.bayreuth@gmx.de</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Darstellendes Spiel & Theaterdidaktik</Card.Title>
              <Card.Text>
                <p>
                  Wie die breite theaterpädagogische und theaterdidaktische
                  Forschung zeigt, haben szenisches Lernen und Theaterspiel hohe
                  hohe Bedeutung sowohl für die Persönlichkeitsentwicklung
                  generell als auch die ästhetische Bildung im Besonderen. Das
                  gilt nicht nur für schulische Kontexte, auch viele
                  außerschulische Bildungseinrichtungen für Kinder, Jugendliche
                  und Erwachsene nutzen dieses Potenzial erfolgreich. Und auch
                  in der Wirtschaft kommt szenisches Arbeiten, etwa in
                  Mitarbeiterschulungen, erfolgreich zum Einsatz. Um derartige
                  Bildungsangebote aber professionell anbieten zu können, bedarf
                  es einer fundierten theoretischen wie praktischen Ausbildung,
                  die zur Befähigung führt, szenisches Gestalten in
                  pädagogischen und künstlerischen Zusammenhängen qualifiziert
                  einzusetzen und kreative szenische Spielprozesse zu vermitteln
                  und anzuleiten.
                </p>
                <p>
                  Die Universität Bayreuth setzt mit dem bayernweit bislang
                  einzigartigen Angebot also nicht nur für den Standort selbst,
                  sondern auch landesweit wirksame Akzente und bietet folgende
                  beiden Studiengänge für Studierende mit beruflichen Ambitionen
                  im Ambitionen im Bildungsbereich an:
                </p>
                <ul>
                  <li>
                    Bachelor-Kombinationsfach „Theaterdidaktik“. Gerade für
                    Kernfächer wie Germanistik, Anglistik, Afrikanische
                    Sprachen, Literaturen und Kunst, aber auch Ethnologie oder
                    Medienwissenschaft kann das neue Kombinationsfach mit seiner
                    breiten theaterpraktischen wie fachdidaktischen Fundierung
                    als Türöffner für verschiedene Tätigkeitsfelder im Kultur-
                    und Bildungsbereich dienen.
                  </li>
                  <li>
                    Zusatzstudium „Theaterdidaktik“ mit Zertifikat. Dieses
                    Studium steht allen eingeschriebenen Studierenden der
                    Universität Universität Bayreuth offen.
                  </li>
                </ul>
                Weitere Informationen unter{' '}
                <a href="http://didaktikdeutsch.uni-bayreuth.de/de/Studium/Theaterdidaktik/">
                  didaktikdeutsch.uni-bayreuth.de/de/Studium/Theaterdidaktik/
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/musiktheater.png" />
            <Card.Body>
              <Card.Title>​Fachgruppe MusikTheater</Card.Title>
              <Card.Text>
                <p>
                  Die Fachgruppe Musik- und Theaterwissenschaft (MusikTheater)
                  setzt sich aus dem Lehrstuhl für Theaterwissenschaft unter
                  besonderer Berücksichtigung des Musiktheaters (Prof. Dr. Anno
                  Mungen) und den zwei Professuren Musikwissenschaft (Prof. Dr.
                  Kordula Knaus) und Theaterwissenschaft (Prof. Dr. Wolf-Dieter
                  Ernst) zusammen. Im geisteswissenschaftlichen Disziplinen
                  widmet sich die Gruppe den musischen Themen mit einer
                  Grundausrichtung an performativen performativen Phänomenen und
                  Fragestellungen. Gegenstände sind das Musiktheater, das
                  Theater, die performativen und darstellenden Künste und die
                  Musik sowie alle Zwischenformen und -gattungen.
                </p>
                Weitere Informationen unter{' '}
                <a href="http://www.musiktheater.uni-bayreuth.de">
                  www.musiktheater.uni-bayreuth.de
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default Mitmachen
