import React from 'react'
import { sectionsTitle } from '../../utilities/statics'
import { ResponsiveSidebarWrapper } from './style'


interface ResponsiveSidebarInt{
    isOpen: boolean
    currentSection: typeof sectionsTitle[number]
    setSelectedSection: React.Dispatch<React.SetStateAction<"Features" | "Vision" | "Contact Us">>
}

export default function ResponsiveSidebar({isOpen, currentSection, setSelectedSection}:ResponsiveSidebarInt) {
    const buttonItem = sectionsTitle.map( (btnTitle, index) => (
        <li 
            className={`ml-4 mb-4 transition-all duration-75 ${ currentSection === btnTitle ? 'font-bold text-2xl' : 'text-xl'}`} 
            key={`responsiveButtonItem_${index}`}
        >
            <a
             onClick={ () => setSelectedSection(btnTitle)}
             href={`#${btnTitle}`} className="sectionButton">{ btnTitle }</a>
        </li>
    ))
  return (
    <ResponsiveSidebarWrapper isSidebarOpen={isOpen} className='fixed z-20 top-0 left-0 h-full w-3/6 bg-bg_dark flex p-4'>
        <ul className='flex flex-col justify-start items-start py-6'>
            {
                buttonItem
            }
        </ul>
    </ResponsiveSidebarWrapper>
  )
}
