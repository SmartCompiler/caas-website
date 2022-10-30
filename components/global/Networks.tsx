import Image from 'next/image'
import React from 'react'
import { medias } from '../../utilities/statics'
import { NetworkWrapper } from './style'

interface Networks{
    classNames?: string
}
export default function Networks( {classNames=''}: Networks ) {
  return (
    <NetworkWrapper className={'w-full h-96 sm:h-64 overflow-visible flex justify-center items-end relative z-0 ' + classNames}>
        <Image 
            layout='fill' 
            src={medias.statistics} 
            className="object-cover" alt="dotted line network" />
    </NetworkWrapper>
  )
}
