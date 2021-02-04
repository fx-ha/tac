import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'

export default function Impressum() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Impressum</title>
      </Head>
      <div>
        <h2>Angaben gemäß § 5 TMG:</h2>
        Universität Bayreuth<br />
        Universitätsstraße 30<br />
        95447 Bayreuth <br />

        <h2>Vertreten durch:</h2>
        Der Präsident der Universität Bayreuth<br />
        Herrn Professor Dr. Stefan Leible<br />
        Universitätsstraße 30<br />
        95447 Bayreuth<br />

        Der Kanzler der Universität Bayreuth<br />
        Herrn Dr. Markus Zanner<br />
        Universitätsstraße 30<br />
        95447 Bayreuth<br />

        <h2>Kontakt:</h2>
        Tel.: 0921 / 55-0<br />
        Fax: 0921 / 55-5290<br />
        E-Mail:info@uni-bayreuth.de<br />

        <h2>Umsatzsteuer-ID:</h2>
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
        DE 811 264 317<br />

        <h2>Aufsichtsbehörde:</h2><br />
        Bayerisches Staatsministerium für Wissenschaft und Kunst<br />

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
        Universität Bayreuth<br />
        Stabsabteilung, Presse, Marketing und Kommunikation<br />
        Universitätsstraße 30<br />
        95447 Bayreuth<br />
        E-Mail: angela.danner@uni-bayreuth.de<br />

        Fotos:
        Soweit nicht anders angegeben: Copyright Universität Bayreuth.
    </div>
    </Layout>
  )
}
