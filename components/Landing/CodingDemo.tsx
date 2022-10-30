import Image from 'next/image'
import React from 'react'
import { medias } from '../../utilities/statics'
import { CodingDemoWrapper } from './style'

export default function CodingDemo() {
  return (
    <CodingDemoWrapper className='hidden md:block relative h-80 overflow-hidden rounded-sm shadow-2xl shadow-black'>
        <Image layout='fill' src={medias.landingCodeDemo} className='h-full' alt="code smaple" />
    </CodingDemoWrapper>
  )
}
