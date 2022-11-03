import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/js/bootstrap.min.js" />
      <Component {...pageProps} />
    </>
  )
}
