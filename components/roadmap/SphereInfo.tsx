import Image from 'next/image'
import React, { useRef } from 'react'
import { medias } from '../../utilities/statics'
import LineSvg from './LineSvg'
import { SphereContainer } from './style'

export default function SphereInfo() {
    const sphereRef = useRef<HTMLDivElement>(null)

    const startPoint = {
      x: document.body.offsetWidth / 2,
      y: document.body.offsetHeight / 2,
    }

    const sphereRect = sphereRef.current?.getBoundingClientRect()
  return (
    <section className='w-full relative flex justify-center items-center'>
        <SphereContainer ref={sphereRef} className='flex justify-center items-center'>
            <Image  src={medias.sphere} alt="sphere core" width={370} height={370} />
        </SphereContainer>

        <LineSvg endPoint={{x: 100, y:50}} startPoint={startPoint} sphereRect={sphereRect} />
    </section>
  )
}
