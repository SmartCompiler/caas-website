import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { axisTypeObject } from '../../types'
import { mediaQueries, sphereConfigs } from '../../utilities/configs'
import { medias, roadmapData } from '../../utilities/statics'
import RoadmapItem from './RoadmapItem'
import { RoadmapSection, SphereContainer } from './style'
import { initSphere } from '../3d-sphere/index.js';
import { onResizeCallback } from '../3d-sphere/render/init'

export interface SphereRectInt { 
  top:number,
  left:number, 
  width: number, 
  height: number
}
export default function SphereInfo() {
    const sphereRef = useRef<HTMLDivElement>(null)
    const isLoadedSphere = useRef(false);
    const [sphereRect, setSphereRect] = useState<SphereRectInt>()
    const [bodyRect, setBodyRect ] = useState<DOMRect>()
    useEffect( () => {
      setBodyRect(document.body.getBoundingClientRect())
    }, [])

    useEffect( () => { 
      if( !sphereRef.current ) return;
      
      setSphereRect({top: sphereRef.current?.offsetTop, left: sphereRef.current?.offsetLeft, width: sphereRef.current?.offsetWidth, height: sphereRef.current?.offsetHeight }) 
      
    }, [ bodyRect ])

    useEffect(() => {
      if (typeof window === 'undefined') return;
      if (isLoadedSphere.current) return;
      isLoadedSphere.current = true 
      initSphere(sphereRef)

      return () => {
        window.removeEventListener('resize', onResizeCallback)
      }
    }, [])
    
    const renderedDescriptions = roadmapData.map((data, index) => {
        if(typeof window === 'undefined' || !bodyRect) return 
        
        const maxXEndPoint = getMaxEndPoint()
      
        const ratio = data.ratioPosition
        const endPoint = getEndPoints({bodyRect, ratio}, maxXEndPoint)

        return <RoadmapItem index={index + 1} key={'line_' + index} data={data} endPoint={endPoint} sphereRect={sphereRect} />
    })
    
  return (
    <RoadmapSection className='mx-auto w-full overflow-visible relative hidden lg:flex justify-center items-center pt-header'>
        <SphereContainer ref={sphereRef} className='flex justify-center items-center relative select-none'>
            {/* <Image className='z-20 relative' draggable={false} src={medias.sphere} alt="sphere core" width={370} height={370} /> */}
            {renderedDescriptions}
        </SphereContainer>
    </RoadmapSection>
  )
}

function getMaxEndPoint() {
  let baseMaxXEndPoint =  sphereConfigs.maxEndPointBasedOnScreenWidth.lgX
  if(window.innerWidth > mediaQueries.lg2) baseMaxXEndPoint = sphereConfigs.maxEndPointBasedOnScreenWidth.lg2X
  if(window.innerWidth > mediaQueries['3xl']) baseMaxXEndPoint = sphereConfigs.maxEndPointBasedOnScreenWidth['3xl']
  if(window.innerWidth > mediaQueries['4xl']) baseMaxXEndPoint = sphereConfigs.maxEndPointBasedOnScreenWidth['4xl']
  if(window.innerWidth > mediaQueries['5xl']) baseMaxXEndPoint = sphereConfigs.maxEndPointBasedOnScreenWidth['5xl']


  return (window.innerWidth * baseMaxXEndPoint) / sphereConfigs.maxEndPointBasedOnScreenWidth.screen
}

function getEndPoints({bodyRect, ratio}:{bodyRect:DOMRect, ratio:axisTypeObject}, maxXEndPoint:number){
  const xRatio = bodyRect.width > mediaQueries['4xl'] && ratio.x2 ? ratio.x2 : ratio.x
  const yRatio = ratio.y

  const XEndPoint = bodyRect.width / xRatio
  const YEndPoint = bodyRect.height / yRatio

  return {
    x: XEndPoint > maxXEndPoint ? maxXEndPoint : XEndPoint,
    y: YEndPoint,
  }  
}