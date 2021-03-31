import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'

const studium = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | studieren</title>
      </Head>
      <h2 className="h5 mb-3">musiktheaterwissenschaft (b.a.)</h2>
      <p>
        das bachelorstudium der musiktheaterwissenschaft bietet dir eine solide
        grundausbildung für verschiedene berufe im bereich musiktheater
        (dramaturgie, regie, regieassistenz, kulturadministration,
        musikjournalismus oder musikverlagswesen).
      </p>
      <p>
        unter musiktheater verstehen wir die unterschiedlichen ausformungen des
        europäischen musiktheaters in sparten oper, operette, musical,
        tanztheater und performance. im studiengang werden zunächst
        grundkenntnisse zur geschichte, analyse und theorie musiktheatraler
        formen vermittelt. diese können weiterführend nach eigenen
        interessensschwerpunkten beispielsweise in schauspiel, tanz, konzert und
        oper vertieft werden. das studium des B.A. musiktheaterwissenschaft
        vermittelt somit ein grundverständnis für aufführungsbezogene aspekte im
        musiktheater und darüber hinaus.
      </p>
      <p>
        zudem bieten wir einblicke in die praxis: im alltäglichen unterricht
        selbst, aber auch bei exkursionen, aufführungsbesuchen, in der
        zusammenarbeit mit spezialistinnen und spezialisten aus der praxis und
        bei selbständigen praktika in musiktheaterbezogenen betrieben.
      </p>
    </Layout>
  )
}

export default studium
