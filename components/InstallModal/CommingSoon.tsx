import Image from 'next/image'
import React from 'react'
import { MainContentWrapper } from './style'

export default function CommingSoon() {
  return (
    <MainContentWrapper className='flex flex-col w-full h-full justify-center items-center relative'>
        <Image  width={200} height={164} src='/icons/comming-soon.svg' alt="commingsoon icon" />
        <div className='text-gray_lighter font-semibold'>being ready soon ...</div>
    </MainContentWrapper>
  )
}
