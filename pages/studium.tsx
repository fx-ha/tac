import { GetStaticProps } from 'next'
import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'

const Studium = ({study}: {study: any}) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | studieren</title>
      </Head>
      <div>
      {study?.body?.map((item: { id: string; value: string }) => (
        <section
          className="mb-2"
          key={item.id}
          dangerouslySetInnerHTML={{ __html: item.value }}
        ></section>
      ))}
    </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.API_URL}?type=study.StudyIndexPage&fields=body`
  )
  const json = await res.json()
  const study = json?.items?.[0]

  return {
    props: {
      study,
    },
    revalidate: 10,
  }
}

export default Studium
