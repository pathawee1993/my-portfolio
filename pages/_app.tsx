import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect, useState } from 'react'


export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   import ('bootstrap/dist/js/bootstrap.bundle.min.js')
  // }, [])
  // return <Component {...pageProps} />
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/js/bootstrap.min.js" />
      <Component {...pageProps} />
    </>
  )
}
