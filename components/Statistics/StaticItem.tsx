import React, { useEffect, useState } from 'react'
import { StaticItemWrapper } from './style'

interface StaticItemsInterface {
    title: string
    count: number
    unit: string
    isVisited: boolean
    index:number
}
export default function StaticItem({ isVisited, title, count, unit, index }: StaticItemsInterface) {
    const [ itemsCount, setItemsCounts ] = useState<number>(0)

    useEffect(() => {
        if( !isVisited ) return;

        let setTimeoutCounter:NodeJS.Timeout | undefined;

        if( itemsCount < count ) setTimeoutCounter = setTimeout( () => setItemsCounts( prev => prev + 1 ), 80)

        if( itemsCount >= count && setTimeoutCounter ) clearTimeout(setTimeoutCounter)

        return ( () => {
            clearTimeout(setTimeoutCounter)
        })
    },[ itemsCount, isVisited ])

  return (
    <StaticItemWrapper className={`flex flex-col items-center justify-center px-4 md:px-0 md:w-32 ${index % 2 === 0 ? 'mr-1':''} ${ index > 1 ? 'mt-6' : '' }`}>
        <div className='text-5xl md:text-3xl text-primary mb-2'>{ itemsCount }{ unit }</div>
        <div className='text-sm text-primary mb-1 whitespace-nowrap'>{ title }</div>
        <hr className='w-full h-.5 text-gray_light rounded-sm'/>
    </StaticItemWrapper>
  )
}
