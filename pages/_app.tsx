import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])
  return <Component {...pageProps} />
}
