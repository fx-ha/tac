import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'

const Kontakt = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Kontakt</title>
      </Head>
      <div>
        <h2>Adresse</h2>
        <p>
          AK Theater am Campus
          <br />
          Arbeitskreis des Studierendenparlaments
          <br />
          Universität Bayreuth
          <br />
          Universitätsstraße 30
          <br />
          95440 Bayreuth
          <br />
          Glasmittelbau, Zi. 1.42
        </p>
        <h2>Ansprechpartner</h2>
        <p>
          Lisa-Michelle Helten
          <br />
          Donata Hörr
          <br />
          E-Mail und Social Media Kanäle
          <br />
          AK.TaC@Uni-Bayreuth.de
          <br />
        </p>
        <h2>Für aktuelle Informationen</h2>
        <p>
          facebook.com/TaCBayreuth
          <br />
          instagram.com/TacBayreuth
          <br />
          Verantwortlich für die Redaktion: Jonas Würdinger
        </p>
      </div>
    </Layout>
  )
}

export default Kontakt
