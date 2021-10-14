import type { AppProps } from 'next/app'

import '../styles/globals.sass'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
