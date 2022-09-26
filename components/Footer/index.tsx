import React from 'react'
import { sectionsTitle } from '../../utilities/statics'
import Details from './Details'
import SectionsLinks from './SectionsLinks'
import Socials from './Socials'
import Subscriptions from './Subscriptions'

export interface BaseFooterInt {
    selectedSection: typeof sectionsTitle[number] 
    setSelectedSection: React.Dispatch<React.SetStateAction<"Home" | "Features" | "Vision" | "Contact Us">>
}
export default function Footer({selectedSection, setSelectedSection}: BaseFooterInt) {

  return (
    <footer className='grid grid-cols-4 grid-rows-1 w-full h-footer absolute bottom-0 px-6 '>
        
        <Details />
        
        <SectionsLinks selectedSection={selectedSection} setSelectedSection={setSelectedSection} />

        <Subscriptions />

        <Socials />

    </footer>
  )
}
