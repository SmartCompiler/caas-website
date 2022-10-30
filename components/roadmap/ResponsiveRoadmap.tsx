import React from 'react'
import { roadmapData } from '../../utilities/statics'
import ResponsiveDetailItem from './ResponsiveDetailItem'

export default function ResponsiveRoadmap() {

    const responsiveItems = roadmapData.map( (data, index) => <ResponsiveDetailItem key={'responsive_' + index} data={data} index={index + 1} /> )
  return (
    <ul className='ml-4 mt-6 lg:hidden w-full flex flex-col'>
        {responsiveItems}
    </ul>
  )
}
