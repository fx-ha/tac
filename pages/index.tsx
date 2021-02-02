import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Startseite</title>
      </Head>
      <h1>Theater am Campus</h1>
      <div>
        Das Theater am Campus der Universität Bayreuth ist einer der größten durchlaufenden Spielbetriebe der Region.
        Dieses umfassende Kulturangebot ist fest in der Lehre verankert, wodurch eine diverse und experimentierfreudige
        Theaterlandschaft entsteht. Von Dramen über Live-Hörspiele bis hin zu Performance Art und Tanz-Shows ist hier
        alles zu finden. Wir freuen uns auf euren Besuch!
      </div>
      <div>aktuelle Informationen - bezüglich Corona</div>
      <div>zeitnahe Veranstaltungen</div>
      <div>Kalender wie Schaubühne</div>
    </Layout>
  )
}
