import React, { useEffect, useState } from 'react'

interface StaticItemsInterface {
    title: string
    count: number
    unit: string
    isVisited: boolean
}
export default function StaticItem({ isVisited, title, count, unit }: StaticItemsInterface) {
    const [ itemsCount, setItemsCounts ] = useState<number>(0)

    useEffect(() => {
        if( !isVisited ) return;

        let setTimeoutCounter:NodeJS.Timeout | undefined;

        if( itemsCount < count ) setTimeoutCounter = setTimeout( () => setItemsCounts( prev => prev + 1 ), 100)

        if( itemsCount >= count && setTimeoutCounter ) clearTimeout(setTimeoutCounter)

        return ( () => {
            clearTimeout(setTimeoutCounter)
        })
    },[ itemsCount, isVisited ])

  return (
    <div className='flex flex-col items-center justify-center w-32'>
        <div className='text-3xl text-primary mb-2'>{ itemsCount }{ unit }</div>
        <div className='text-sm text-primary mb-1 whitespace-nowrap'>{ title }</div>
        <hr className='w-full h-.5 text-gray_light rounded-sm'/>
    </div>
  )
}
