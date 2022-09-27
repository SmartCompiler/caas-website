import React from 'react'
import { sectionsTitle } from '../../utilities/statics'
import Details from './Details'
import SectionsLinks from './SectionsLinks'
import Socials from './Socials'
import { FooterWrapper } from './style'
import Subscriptions from './Subscriptions'

export interface BaseFooterInt {
    selectedSection: typeof sectionsTitle[number] 
    setSelectedSection: React.Dispatch<React.SetStateAction<"Home" | "Features" | "Vision" | "Contact Us">>
}
export default function Footer({selectedSection, setSelectedSection}: BaseFooterInt) {

  return (
    <FooterWrapper className='container mx-auto flex flex-col md:grid grid-cols-4 h-footer grid-rows-1  mt-10 px-4'>

        <Details />
        
        <SectionsLinks selectedSection={selectedSection} setSelectedSection={setSelectedSection} />

        <Subscriptions />

        <Socials />

    </FooterWrapper>
  )
}
