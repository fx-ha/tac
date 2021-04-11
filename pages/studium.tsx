import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'

const studium = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | studieren</title>
      </Head>
      <h2 className="h5 mb-3">Musiktheaterwissenschaft (B.A.)</h2>
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
    </Layout>
  )
}

export default studium
