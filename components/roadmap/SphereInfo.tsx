import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { medias } from '../../utilities/statics'
import LineSvg from './LineSvg'
import { SphereContainer } from './style'

export default function SphereInfo() {
    const sphereRef = useRef<HTMLDivElement>(null)
    const startPoint = useRef<{x: number, y:number}>({x:0, y:0})
    const [sphereRect, setSphereRect] = useState<DOMRect>()

    useEffect( () => {
      // startPoint.current = {
      //   x: document.body.offsetWidth / 2,
      //   y: document.body.offsetHeight / 2,
      // }
      setSphereRect(sphereRef.current?.getBoundingClientRect()) 
    }, [])

  return (
    <section className='w-full relative flex justify-center items-center py-48'>
        <SphereContainer ref={sphereRef} className='flex justify-center items-center relative'>
            <Image  src={medias.sphere} alt="sphere core" width={370} height={370} />
            <LineSvg endPoint={{x: 425.25, y:100.5}} sphereRect={sphereRect} />
            {/* <LineSvg endPoint={{x: 373.25, y:400.5}} sphereRect={sphereRect} /> */}
            {/* <LineSvg endPoint={{x: 746.5, y:200}} sphereRect={sphereRect} /> */}
            <LineSvg endPoint={{x: 425.25, y:600}} sphereRect={sphereRect} />
            <LineSvg endPoint={{x: 1000.25, y:700}} sphereRect={sphereRect} />
            <LineSvg endPoint={{x: 1000.25, y:185}} sphereRect={sphereRect} />

        </SphereContainer>

    </section>
  )
}
