import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'

const Impressum = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | impressum</title>
      </Head>
      <div>
        <h2>Angaben gemäß § 5 TMG:</h2>
        Arbeitskreis Theater am Campus
        <br />
        Studierendenparlament
        <br />
        Universitätsstraße 30
        <br />
        95447 Bayreuth
      </div>
      <div className="mt-3">
        <h2>Vertreten durch:</h2>
        Samuel Niese & Julia Schutt - Vorstand des Arbeitskreises Theater am Campus
      </div>
      <div className="mt-3">
        <h2>Kontakt:</h2>
        <a
          className="text-reset"
          href="mailto:Ak.tac@uni-bayreuth.de"
          title="e-mail an ak tac senden"
        >
          Ak.tac@uni-bayreuth.de
        </a>
      </div>
      <div className="mt-3">
        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
        Daniel Schauf
        <br />
        Bornholmer Straße 78
        <br />
        10439 Berlin
      </div>
    </Layout>
  )
}

export default Impressum
