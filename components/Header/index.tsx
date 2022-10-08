import React, { useEffect, useState } from 'react'
import { mediaQueries } from '../../utilities/configs'
import { checkMinMaxMediaQuery } from '../../utilities/helper'
import { sectionsTitle } from '../../utilities/statics'
import CloseIcon from './CloseIcon'
import HamburgerMenuIcon from './HamburgerMenuIcon'
import ResponsiveSidebar from './ResponsiveSidebar'
import { HeaderBtnLi, HeaderWrapper } from './style'

interface HeaderInt {
  selectedSection: typeof sectionsTitle[number] 
  setSelectedSection: React.Dispatch<React.SetStateAction<"Home" | "Features" | "Vision" | "Contact Us">>
}

export default function Header({selectedSection, setSelectedSection}: HeaderInt) {
    const [ isShow, setIsShow ] = useState(true)
    const [ lastScrollY, setLastScrollY ] = useState(0)
    const [ isResponsiveOpen, setisResponsiveOpen ] = useState<boolean>(false)

    useEffect( () => {
      
      if( !checkMinMaxMediaQuery(mediaQueries.sm, 'min') ) return;

      window.addEventListener('scroll', handleScrollWindow)
  
      return ( () => {
        window.removeEventListener('scroll', handleScrollWindow)
      })
    }, [lastScrollY])
  
    function handleScrollWindow() {
  
      if( window.scrollY > lastScrollY ) setIsShow(false)
      if( window.scrollY <= lastScrollY ) setIsShow(true)
      
      setLastScrollY(window.scrollY)
    }

    const buttonItem = sectionsTitle.map( (btnTitle, index) => (
        <HeaderBtnLi 
            className='ml-4' 
            key={`buttonItem_${index}`}
            selectedSection={selectedSection}
            itemTitle={btnTitle}
        >
            <a
             onClick={ () => setSelectedSection(btnTitle)}
             href={`#${btnTitle}`} className="sectionButton">{ btnTitle }</a>
        </HeaderBtnLi>
    ))

  return (
    <>
    <HeaderWrapper isShowHeader={isShow} className='items-center p-4 sm:p-6 fixed top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center'>
        <a onClick={ () => setSelectedSection(sectionsTitle[0])} href={`#${sectionsTitle[0]}`} className='text-xl sm:text-base mr-auto font-bold'>SCASS</a>
        <ul className="sectionWrapper hidden md:flex justify-around">
            { buttonItem }
        </ul>

        <div>
          <HamburgerMenuIcon isSidebarOpen={isResponsiveOpen} onClickHandle={ () => setisResponsiveOpen(true)} />
          <CloseIcon isSidebarOpen={isResponsiveOpen} onClickHandle={() => setisResponsiveOpen(false)} />
        </div>
      </div>
    </HeaderWrapper>
    <ResponsiveSidebar setSelectedSection={setSelectedSection} isOpen={isResponsiveOpen} currentSection={selectedSection} />
    </>
  )
}
