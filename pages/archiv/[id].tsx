import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'

import Layout, { siteTitle } from '../../components/Layout'

export default function Event({ event }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | {event.title}</title>
      </Head>
      <h1>{event.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: event.body }}></div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}?child_of=4`)
  const events = await res.json()
  const paths = events.items.map((event: { id: string }) => `/archiv/${event.id}`)

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.API_URL}${params.id as string}`)
  const event = await res.json()

  return {
    props: {
      event
    },
    revalidate: 10
  }
}