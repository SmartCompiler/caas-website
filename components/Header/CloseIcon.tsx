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
        <img src='/Close.png' className="h-8"  alt="close" />
    </CloseSidebarIconWrapper>

  )
}
