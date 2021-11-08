import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import Layout, { siteTitle } from '../components/Layout'

const UeberDasTac = ({ about }: { about: any }) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | über das tac</title>
      </Head>
      <section dangerouslySetInnerHTML={{ __html: about.text1 }} />
      <section className="mt-4 mb-3">
        <h3 className="text-uppercase">Team</h3>
        <Row>
          <Col md={6} dangerouslySetInnerHTML={{ __html: about.teamL }} />

          <Col md={6} dangerouslySetInnerHTML={{ __html: about.teamR }} />
        </Row>
      </section>
      <section dangerouslySetInnerHTML={{ __html: about.text2 }} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.API_URL}?type=about.AboutIndexPage&fields=text1,text2,teamL,teamR`
  )
  const json = await res.json()
  const about = json?.items[0]

  return {
    props: {
      about,
    },
    revalidate: 10,
  }
}

export default UeberDasTac
