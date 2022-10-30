import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { intersectionOption } from '../../utilities/configs'
import { medias, StaticMessges } from '../../utilities/statics'
import Networks from '../global/Networks'
import StaticsContainer from './StaticsContainer'
import { StatisticsWrapper } from './style'


export default function Statistics() {
    const statisticRef = useRef<HTMLElement>(null)
    const [ isComponentVisited, setIsComponentVisited ] = useState(false)

    const onVisitedCallback = (entry:IntersectionObserverEntry[]) => {
        if( entry[0].isIntersecting ) setIsComponentVisited(true)
    }
 
    useEffect( () => {
        const observer = new IntersectionObserver( onVisitedCallback, intersectionOption )

        if( statisticRef.current ) observer.observe(statisticRef.current)
    }, [])
  return (
    <StatisticsWrapper ref={statisticRef} className='relative h-auto sm:h-96 w-full flex flex-col items-center justify-start pt-4'>
        <div className='text-gray_light mx-auto text-xl sm:text-2xl mb-6'>{ StaticMessges.statistices.title }</div>
        <StaticsContainer isVisited={isComponentVisited} />
        <Networks />
    </StatisticsWrapper>
  )
}
