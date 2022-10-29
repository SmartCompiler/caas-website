import React from 'react'
import { roadmapData } from '../../utilities/statics'
import LineSvg, { LineSvgInt } from './LineSvg'
import { BulletNumber } from './style'

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
            <BulletNumber 
                className='absolute bg-white rounded-full w-5 h-5 text-black flex justify-center items-center font-bold z-10' 
                left={endPointBasedSvg?.x} 
                top={endPointBasedSvg?.y} 
                >
                    { index }
            </BulletNumber>
            <div></div>
            <LineSvg endPoint={endPoint} sphereRect={sphereRect} />
        </>
      )
}
