import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'nextra-theme-docs/style.css'

function Nextra({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Nextra
