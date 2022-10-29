import React from 'react'
import { roadmapData } from '../../utilities/statics'
import LineSvg, { LineSvgInt } from './LineSvg'

interface RoadmapItemInt extends LineSvgInt{
    data: typeof roadmapData[number]
    index: number
}
export default function RoadmapItem({data, endPoint, sphereRect, index}: RoadmapItemInt) {
   
    if( !endPoint || !sphereRect  ) return<></>

    const endPointBasedSvg = {
        y: endPoint.y - sphereRect.top - 10,
        x: endPoint.x - sphereRect.left - 10
    }
      return (
        <>
            <span className='absolute bg-white rounded-full w-5 h-5 text-black flex justify-center items-center font-bold z-10' style={{ top: endPointBasedSvg?.y, left: endPointBasedSvg?.x }}>{ index }</span>
            <LineSvg endPoint={endPoint} sphereRect={sphereRect} />
        </>
      )
}
