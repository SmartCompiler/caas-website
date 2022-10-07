import { MouseEvent } from 'react'
import { HamburgerIconWrapper } from './style'

interface HamburgerIconInt{
  onClickHandle: (e: MouseEvent) => void
  isSidebarOpen: boolean
}

export default function HamburgerMenuIcon( {onClickHandle, isSidebarOpen}:HamburgerIconInt ) {
  return (
    <HamburgerIconWrapper 
      className='md:hidden'
      isSidebarOpen={isSidebarOpen}
      onClick={onClickHandle}
      width="29" 
      height="25" 
      viewBox="0 0 29 25" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
        <rect width="29" height="5" rx="2" fill="white"/>
        <rect y="10" width="29" height="5" rx="2" fill="white"/>
        <rect y="20" width="29" height="5" rx="2" fill="white"/>
    </HamburgerIconWrapper>
    



  )
}
