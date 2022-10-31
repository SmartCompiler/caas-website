import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { useState } from 'react'
import { sectionsTitle, StaticMessges } from '../utilities/statics'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const [ selectedSection, setSelectedSection ] = useState<typeof sectionsTitle[number]>(sectionsTitle[0])

  return <>
    <Head>
      <title>{ StaticMessges.appTitle }</title>
      <meta name="description" content="Smart Compiler Cass Website" />
      <link rel="shortcut icon" href={`/cass.png`} type="image/x-icon" />
    </Head>
    <Header selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
    <Component setSelectedSection={setSelectedSection} {...pageProps} />
    <Footer selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
  </>
}

export default MyApp
