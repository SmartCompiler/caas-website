import Image from 'next/image'
import React from 'react'
import { FeatureItemWrapper } from './style'

interface featureItemInterface {
    img: string,
    title: string,
    description: string,
    name: string,
    row_start: number
    row_end: number
    col_start: number
    col_end: number
}
export default function FeatureItem({ name, img, title, description, row_start, row_end, col_start, col_end }:featureItemInterface) {
  return (
    <FeatureItemWrapper 
        col_end={col_end}
        col_start={col_start}
        row_start={row_start}
        row_end={row_end}
        className={`flex flex-col items-start justify-around p-4 bg-gray w-full shadow-black shadow-md h-auto`}
        >
        <Image height={45} width={45} className='w-10' src={img} alt={`${name} icon`} />
        <div className='text-primary font-semibold my-4'>{ title }</div>
        <div className='text-sm text-gray_light mb-6'>{ description }</div>
        <hr className='w-full mx-auto h-.5 border-transparent rounded-sm bg-primary'/>
    </FeatureItemWrapper>
  )
}
