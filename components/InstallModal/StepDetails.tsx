import React, { useEffect, useState } from 'react'
import { CodeContainer, CopiedToClipboadMessage } from './style'
import Image from 'next/image'
import { copyClipBoard } from '../../utilities/helper'
import { StaticMessges } from '../../utilities/statics'

interface StepDetails{
    title: string
    description?: string
    code: JSX.Element,
    codeCopy: string
}
export default function StepDetails({ title, description, code, codeCopy }: StepDetails) {
  const [ isShowCopyMsg, setIsShowCopyMsg ] = useState(false)

  //make invisible after show
  useEffect( () => {
    if( !isShowCopyMsg ) return;
    
    setTimeout( () => {
      if( !isShowCopyMsg ) return;

      setIsShowCopyMsg(false)
    } , 3000 )
  }, [isShowCopyMsg])

  const handleClickClipboad = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsShowCopyMsg(false)
  }

  const handleClickCopyIcon = async (e: React.MouseEvent ) => {
    await copyClipBoard(codeCopy)
    setIsShowCopyMsg(true)
  }

  return (
    <div className='flex flex-col mb-10'>
        <div className='mb-2 text-lg'>{ title }</div>
        <p className='pl-4 mb-2 w-full lg:w-3/4'>{description}</p>
        <CodeContainer className='flex justify-between relative'>
            { code }
            <button className='clipBoadIcon absolute right-2' onClick={ handleClickCopyIcon }>
                <CopiedToClipboadMessage 
                  onClick={ handleClickClipboad }
                  className={`transition-all duration-200 bg-bg_dark text-white rounded-sm text-xs whitespace-nowrap p-2 text-left ${ isShowCopyMsg ? 'opacity-100 visible': 'opacity-0 invisible'}`}>
                  { StaticMessges.global.copyClipboad }
                </CopiedToClipboadMessage>
                <Image width={16} height={16} src='/icons/copy.svg' alt="copy icon" />     
            </button>
        </CodeContainer>
    </div>
  )
}
