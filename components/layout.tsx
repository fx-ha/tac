import Head from 'next/head'
export const siteTitle = 'Theater am Campus'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>
        <nav>
          <li></li>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}
