import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { routesList, routesTitle, sectionsTitle } from '../../utilities/statics'
import { ResponsiveSidebarWrapper } from './style'


interface ResponsiveSidebarInt{
    isOpen: boolean
    currentSection: typeof sectionsTitle[number]
    setSelectedSection: React.Dispatch<React.SetStateAction<typeof sectionsTitle[number]>>,
    selectedSection: typeof sectionsTitle[number]
}

export default function ResponsiveSidebar({isOpen, currentSection, setSelectedSection, selectedSection}:ResponsiveSidebarInt) {
    const router = useRouter()

    useEffect( () => {
      
        window.addEventListener('scroll', handleScrollWindow)
    
        return ( () => {
          window.removeEventListener('scroll', handleScrollWindow)
        })
      }, [])

      function handleScrollWindow(){
        const hashUrl = window.location.hash.split('#').reverse()[0] as '' | typeof sectionsTitle[number]
        if( !hashUrl ) return;

        setSelectedSection(hashUrl)
      }
    const buttonItem = sectionsTitle.map( (btnTitle, index) => (
        <li 
            className={`ml-4 mb-4 transition-all duration-75 ${ (currentSection === btnTitle && router.pathname === routesList.home) ? 'font-bold text-2xl' : 'text-xl'}`} 
            key={`responsiveButtonItem_${index}`}
        >
            <Link
             scroll={false}
             href={`/#${btnTitle}`} className="sectionButton">{ btnTitle }</Link>
        </li>
    ))
  return (
    <ResponsiveSidebarWrapper isSidebarOpen={isOpen} className='fixed z-50 top-0 left-0 h-full w-4/6 bg-bg_dark flex p-4'>
        <ul className='flex flex-col justify-start items-start py-6'>
            <li className={`ml-4 mb-4 transition-all duration-75 ${ routesList.roadmap === router.pathname ? 'font-bold text-2xl' : 'text-xl'}`} >
                <Link href={routesList.roadmap}>{ routesTitle.roadmap }</Link>
            </li>
            {
                buttonItem
            }
        </ul>
    </ResponsiveSidebarWrapper>
  )
}
