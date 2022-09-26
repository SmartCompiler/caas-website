import React from 'react'
import { BaseFooterInt } from '.'
import { sectionsTitle } from '../../utilities/statics'

export default function SectionsLinks({selectedSection, setSelectedSection}: BaseFooterInt) {

    const sectionBtns = sectionsTitle.map( ( title, index ) => (
        <li 
            className={` transition-all ${selectedSection === title ? 'text-lg' : ''}`}
            key={`seciton_footer_${index}`}
            >
            <a 
                onClick={ () => setSelectedSection(title)} href={`#${title}`}
                >
                    {title}
            </a>
        </li>
    ))

  return (
    <ul className="Navigations flex flex-col items-start">
        { sectionBtns }
    </ul>
  )
}
