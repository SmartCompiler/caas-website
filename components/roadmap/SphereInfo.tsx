import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { medias, roadmapData } from '../../utilities/statics'
import LineSvg from './LineSvg'
import { SphereContainer } from './style'

export default function SphereInfo() {
    const sphereRef = useRef<HTMLDivElement>(null)
    const [sphereRect, setSphereRect] = useState<DOMRect>()
    const bodyRect = useRef<DOMRect>()

    useEffect( () => {
      setSphereRect(sphereRef.current?.getBoundingClientRect()) 
      bodyRect.current = document.body.getBoundingClientRect()
    }, [])

    const renderedDescriptions = roadmapData.map((data, index) => {

      const endPoint = bodyRect.current ? {
        x: (bodyRect.current.width) / 4,
        y: bodyRect.current.height / 4,
      }  : undefined

      return <LineSvg key={index} endPoint={endPoint} sphereRect={sphereRect} />
    })

  return (
    <section className='w-full relative flex justify-center items-center py-48'>
        <SphereContainer ref={sphereRef} className='flex justify-center items-center relative'>
            <Image  src={medias.sphere} alt="sphere core" width={370} height={370} />
            {renderedDescriptions}
        </SphereContainer>
    </section>
  )
}
