import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { useState } from 'react'
import { sectionsTitle } from '../utilities/statics'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const [ selectedSection, setSelectedSection ] = useState<typeof sectionsTitle[number]>(sectionsTitle[0])

  return <>
    <Header selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
    <Component setSelectedSection={setSelectedSection} {...pageProps} />
    <Footer selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
  </>
}

export default MyApp
