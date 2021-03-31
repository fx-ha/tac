import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'
import FBIcon from '../components/navigation/FbIcon'
import InstaIcon from '../components/navigation/InstaIcon'

const Kontakt = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | kontakt</title>
      </Head>
      <div>
        <p>
          ihr möchtet alle aktuellen infos zu aufführungen, castings etc. auch
          als mail bekommen? dann meldet euch unter{' '}
          <a
            className="text-reset"
            href="mailto:info@schaulustev.de"
            title="mail an schaulust senden"
          >
            info@schaulustev.de
          </a>{' '}
          zum newsletter an!
        </p>
        <p>
          bei fragen zum programm, zur arbeit des 'theater am campus' oder auch
          für mögliche kooperationen kann über folgende mailadresse kontakt zu
          uns aufgenommen werden:
        </p>
        <p>
          ak.tac@uni-bayreuth.de
          <br />
          ansprechpartnerin: donata hörr
        </p>
        <p>
          Für mehr einblicke in die studentischen theaterprojekte geht's hier
          entlang:
        </p>
        <p>
          <div className="mb-1">
            <FBIcon
              href="https://www.facebook.com/TaCBayreuth"
              title="tac auf facebook"
            />{' '}
            <a
              href="https://www.facebook.com/TaCBayreuth"
              title="tac auf facebook"
              target="_blank"
              rel="noopener"
              className="text-reset"
            >
              @tacbayreuth
            </a>
          </div>
          <div>
            <InstaIcon
              href="https://www.instagram.com/TacBayreuth/"
              title="tac auf instagram"
            />{' '}
            <a
              href="https://www.instagram.com/TacBayreuth/"
              title="tac auf instagram"
              target="_blank"
              rel="noopener"
              className="text-reset"
            >
              @tacbayreuth
            </a>
          </div>
        </p>
      </div>
    </Layout>
  )
}

export default Kontakt
