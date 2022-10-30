import Image from "next/image"
import { CloseSidebarIconWrapper } from "./style"

interface CloseIconInt{
    onClickHandle: () => void,
    isSidebarOpen: boolean
}

  
export default function CloseIcon( {onClickHandle, isSidebarOpen}:CloseIconInt ) {
  return (
    <CloseSidebarIconWrapper 
      isSidebarOpen={isSidebarOpen}
      onClick={ onClickHandle } 
      className={ 'absolute top-0 right-4 flex items-center h-full md:hidden'} >
        <Image width={36} height={36} src={`/Close.png`} alt="close" />
    </CloseSidebarIconWrapper>

  )
}
