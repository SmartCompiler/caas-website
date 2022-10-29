import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { medias, roadmapData } from '../../utilities/statics'
import LineSvg from './LineSvg'
import { SphereContainer } from './style'

export interface SphereRectInt { 
  top:number,
  left:number, 
  width: number, 
  height: number
}
export default function SphereInfo() {
    const sphereRef = useRef<HTMLDivElement>(null)
    const [sphereRect, setSphereRect] = useState<SphereRectInt>()
    const [bodyRect, setBodyRect ] = useState<DOMRect>()

    useEffect( () => {
      setBodyRect(document.body.getBoundingClientRect())
    }, [])

    useEffect( () => { 
      if( !sphereRef.current ) return;
      
      setSphereRect({top: sphereRef.current?.offsetTop, left: sphereRef.current?.offsetLeft, width: sphereRef.current?.offsetWidth, height: sphereRef.current?.offsetHeight }) 

    }, [ bodyRect ])
    const renderedDescriptions = roadmapData.map((data, index) => {
      const endPoint = bodyRect ? {
        x: (bodyRect.width) / data.ratioPosition.x,
        y: bodyRect.height / data.ratioPosition.y,
      }  : undefined
      
      return <LineSvg key={'line_' + index} endPoint={endPoint} sphereRect={sphereRect} />
    })

  return (
    <section className='w-full relative flex justify-center items-center py-48'>
        <SphereContainer ref={sphereRef} className='flex justify-center items-center relative'>
            <Image className='z-20 relative' src={medias.sphere} alt="sphere core" width={370} height={370} />
            {renderedDescriptions}
        </SphereContainer>
    </section>
  )
}
