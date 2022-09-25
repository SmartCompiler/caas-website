import React, { useEffect, useState } from 'react'
import { sectionsTitle } from '../../utilities/statics'
import { HeaderBtnLi, HeaderWrapper } from './style'

export default function Header() {
    const [ selectedSection, setSelectedSection ] = useState<typeof sectionsTitle[number]>(sectionsTitle[0])
    const [ isShow, setIsShow ] = useState(true)
    const [ lastScrollY, setLastScrollY ] = useState(0)
    
    useEffect( () => {
  
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
            onClick={ () => setSelectedSection(btnTitle)}
        >
            <a href={`#${btnTitle}`} className="sectionButton">{ btnTitle }</a>
        </HeaderBtnLi>
    ))

  return (
    <HeaderWrapper isShowHeader={isShow} className='flex justify-between items-center p-6 fixed top-0 left-0 w-full'>
        <div className='mr-auto font-bold'>SCASS</div>
        <ul className="sectionWrapper flex justify-around">
            { buttonItem }
        </ul>
    </HeaderWrapper>
  )
}
