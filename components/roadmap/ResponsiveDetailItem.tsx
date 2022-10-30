import React from 'react'
import { roadmapData } from '../../utilities/statics'
import { ResponsiveDesc } from './style'

interface ResponsiveDetailItem{
    data: typeof roadmapData[number]
    index: number
}
export default function ResponsiveDetailItem({ data, index }: ResponsiveDetailItem) {
    const descriptions = data.descriptions.map( (desc, index) => <li key={'desc_' + index} className="text-sm list-disc">{ desc }</li> )
  return (
    <li className='my-6 first:mt-0 pl-2 pr-5'>
        <div className='bg-white text-black text-lg font-bold rounded-full w-6 h-6 flex justify-center items-center'>{ index }</div>
        <ResponsiveDesc className='ml-10'>
            <div className='text-xl'>{ data.title }</div>
            <ul className='ml-4 mt-2'>{ descriptions }</ul>
        </ResponsiveDesc>
    </li>
  )
}
