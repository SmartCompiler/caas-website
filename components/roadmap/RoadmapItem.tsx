import React from 'react'
import { roadmapData } from '../../utilities/statics'
import LineSvg, { LineSvgInt } from './LineSvg'
import { BulletNumber, DetailList, RoadmapDetailItem } from './style'

interface RoadmapItemInt extends LineSvgInt{
    data: typeof roadmapData[number]
    index: number
}
export default function RoadmapItem({data, endPoint, sphereRect, index}: RoadmapItemInt) {
   
    if( !endPoint || !sphereRect  ) return<></>

    const endPointBasedSvg = {
        y: endPoint.y - sphereRect.top,
        x: endPoint.x - sphereRect.left
    }

    const descriptions = data.descriptions.map( (descItem, index) => <DetailList className='w-52 list-disc text-sm' key={'descItem_' + index}>{ descItem }</DetailList>)
    
      return (
        <>
            <BulletNumber 
                className='absolute bg-white rounded-full w-5 h-5 text-black flex justify-center items-center font-bold z-10' 
                left={endPointBasedSvg?.x - 10} 
                top={endPointBasedSvg?.y - 10} 
                >
                    { index }
            </BulletNumber>
            <RoadmapDetailItem 
                left={endPointBasedSvg?.x + data.detailsPose.left} 
                top={endPointBasedSvg?.y + data.detailsPose.top } 
                className='absolute flex flex-col justify-start items-start'
                >
                <div className='text-xl'>{ data.title }</div>
                <ul className='pl-6'>
                    { descriptions }
                </ul>
            </RoadmapDetailItem>
            <LineSvg endPoint={endPoint} sphereRect={sphereRect} />
        </>
      )
}
