import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'

export default function Kontakt() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Kontakt</title>
      </Head>
      <div>
        Adresse<br />
        AK Theater am Campus<br />
        Arbeitskreis des Studierendenparlaments<br />
        Universität Bayreuth<br />
        Universitätsstraße 30<br />
        95440 Bayreuth<br />
        Glasmittelbau, Zi. 1.42<br />

        Ansprechpartner<br />
        Lisa-Michelle Helten<br />
        Donata Hörr<br />

        E-Mail und Social Media Kanäle<br />
        AK.TaC@Uni-Bayreuth.de<br />

        Für aktuelle Informationen<br />
        facebook.com/TaCBayreuth<br />
        instagram.com/TacBayreuth<br />

        Verantwortlich für die Redaktion: Jonas Würdinger
      </div>
    </Layout>
  )
}
