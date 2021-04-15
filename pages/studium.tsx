import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'

const studium = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | studieren</title>
      </Head>
      <p>
        An der Universität Bayreuth könnt ihr auch im Bereich Theater ein
        Studium absolvieren!
      </p>
      <p>Die Studiengänge stellen wir euch hier vor:</p>
      <h2 className="h5 mt-4 mb-2">Musiktheaterwissenschaft (B.A.)</h2>
      <p>
        Das Bachelorstudium der Musiktheaterwissenschaft bietet dir eine solide
        Grundausbildung für verschiedene Berufe im Bereich Musiktheater
        (Dramaturgie, Regie, Regieassistenz, Kulturadministration,
        Musikjournalismus oder Musikverlagswesen).
      </p>
      <p>
        Unter Musiktheater verstehen wir die unterschiedlichen Ausformungen des
        europäischen Musiktheaters in Sparten Oper, Operette, Musical,
        Tanztheater und Performance. Im Studiengang werden zunächst
        Grundkenntnisse zur Geschichte, Analyse und Theorie musiktheatraler
        Formen vermittelt. Diese können weiterführend nach eigenen
        interessensschwerpunkten beispielsweise in Schauspiel, Tanz, Konzert und
        Oper vertieft werden. Das Studium des B.A. Musiktheaterwissenschaft
        vermittelt somit ein Grundverständnis für aufführungsbezogene Aspekte im
        Musiktheater und darüber hinaus.
      </p>
      <p>
        Zudem bieten wir Einblicke in die Praxis: im alltäglichen Unterricht
        selbst, aber auch bei Exkursionen, Aufführungsbesuchen, in der
        Zusammenarbeit mit Spezialistinnen und Spezialisten aus der Praxis und
        bei selbständigen Praktika in musiktheaterbezogenen Betrieben.
      </p>
      <p>
        Website:{' '}
        <a
          href="https://tinyurl.com/musiktheaterwissenschaft"
          target="_blank"
          rel="noopener"
          className="text-reset"
        >
          https://tinyurl.com/musiktheaterwissenschaft
        </a>
      </p>

      <h2 className="h5 mt-4 mb-2">Theater und Medien (B.A.)</h2>
      <p>
        Der Bachelorstudiengang "Theater und Medien" führt zwei Disziplinen
        zusammen. Die Kombination von theater- und medienwissen­schaftlichen
        Studieninhalten bietet eine solide Grundla­ge nicht nur für ein weit
        gefächertes berufspraktisches Feld, sondern auch für eine Fortführung
        des Studiums in Masterstudiengängen, etwa im Bereich Journalismus,
        Dramaturgie, Drehbuch oder Medienkunst.
      </p>
      <p>
        Der BA Theater und Medien zeichnet sich durch seinen starken
        Anwendungsbezug aus. Hier werden Stücke und Kurzfilme von den
        Studierenden selbst entwickelt und in eigenen Theater- und Medienlaboren
        produziert. Eigeninitiative ist gefragt!
      </p>
      <p>
        Die kulturellen, sozialen und historischen Funktionen von Theater und
        Medien stehen im Mittelpunkt der Vorlesungen und Seminare. Die
        Studierenden werden an die vielfältigen Erscheinungs­formen des Theaters
        und der Medien in Geschichte und Gegenwart he­rangeführt; sie lernen
        historische und aktuelle Entwick­lungen des Musik-, Sprech- und
        Bewegungstheaters kennen. Sie machen sich zudem nicht nur mit
        verschie­denen Medien- und Theatersparten vertraut, sondern erfahren
        auch deren intermediale Vernetzungen im Bereich Medienkunst, Games,
        Performance- und Body Art.
      </p>
      <p>
        Website:{' '}
        <a
          href="https://tinyurl.com/theaterundmedien"
          target="_blank"
          rel="noopener"
          className="text-reset"
        >
          https://tinyurl.com/theaterundmedien
        </a>
      </p>
    </Layout>
  )
}

export default studium
